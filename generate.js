import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, 'leads_20260611_134521.csv');
const templatesDir = path.join(__dirname, 'src', 'templates');
const sourceTemplatesDir = path.join('c:', 'Users', 'rella', 'OneDrive', 'Desktop', 'newwebgene', 'templates');

const toKebabCase = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const csvOutputDir = path.join(__dirname, 'data csv');
if (!fs.existsSync(csvOutputDir)) {
  fs.mkdirSync(csvOutputDir, { recursive: true });
}
const csvOutPath = path.join(csvOutputDir, 'business_templates.csv');

// Initialize hierarchy before parsing existing records
const hierarchy = {};

// Read existing CSV to find diffs and populate hierarchy with manual additions
let existingRecords = new Set();
if (fs.existsSync(csvOutPath)) {
  const existingCsv = fs.readFileSync(csvOutPath, 'utf8');
  const lines = existingCsv.split('\n');
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    existingRecords.add(line);

    // Parse to support manual additions to business_templates.csv
    const parts = [];
    let currentPart = '';
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"' && line[j + 1] !== '"') inQuotes = !inQuotes;
      else if (char === '"' && line[j + 1] === '"') { currentPart += '"'; j++; }
      else if (char === ',' && !inQuotes) { parts.push(currentPart); currentPart = ''; }
      else currentPart += char;
    }
    parts.push(currentPart);

    // id, category, business_type, template_name, template_path, template_code
    if (parts.length >= 4) {
      let category = parts[1] ? parts[1].replace(/^"|"$/g, '').trim() : '';
      let businessType = parts[2] ? parts[2].replace(/^"|"$/g, '').trim() : '';
      let templateId = parts[3] ? parts[3].replace(/^"|"$/g, '').trim() : '';

      if (category && businessType) {
        if (!hierarchy[category]) {
          hierarchy[category] = new Set();
        }
        hierarchy[category].add(businessType);
        
        if (!global.requestedTemplates) global.requestedTemplates = {};
        if (!global.requestedTemplates[category]) global.requestedTemplates[category] = {};
        if (!global.requestedTemplates[category][businessType]) global.requestedTemplates[category][businessType] = new Set();
        if (templateId) global.requestedTemplates[category][businessType].add(templateId);
      }
    }
  }
}


// Only attempt to read the raw leads CSV if it actually exists (e.g. locally)
if (fs.existsSync(csvFilePath)) {
  const csvContent = fs.readFileSync(csvFilePath, 'utf8');
  const lines = csvContent.split('\n');

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Robust CSV parser
    const parts = [];
    let currentPart = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"' && line[j + 1] !== '"') {
        inQuotes = !inQuotes;
      } else if (char === '"' && line[j + 1] === '"') {
        currentPart += '"';
        j++; // skip escaped quote
      } else if (char === ',' && !inQuotes) {
        parts.push(currentPart);
        currentPart = '';
      } else {
        currentPart += char;
      }
    }
    parts.push(currentPart);

    if (parts.length >= 4) {
      let category = parts[2] ? parts[2].replace(/^"|"$/g, '').trim() : '';
      let businessType = parts[3] ? parts[3].replace(/^"|"$/g, '').trim() : '';

      if (category && businessType) {
        if (!hierarchy[category]) {
          hierarchy[category] = new Set();
        }
        hierarchy[category].add(businessType);
      }
    }
  }
}



// Force inject Legal / Law Firm so it can be previewed even if not in CSV
if (!hierarchy['Finance and Professional Services']) {
  hierarchy['Finance and Professional Services'] = new Set();
}
hierarchy['Finance and Professional Services'].add('Legal / Law Firm');

// Map source category back to CSV category (for deduplication when scanning source)
const getTargetCategoryKebab = (sourceKebab) => {
  if (sourceKebab === 'retail-and-stores') return 'retail';
  if (sourceKebab === 'food-and-hospitality') return 'food-and-beverage';
  if (sourceKebab === 'technology') return 'it-and-technology';
  // Note: finance-and-professional-services covers two CSV categories, we'll map to 'finance' as primary fallback
  if (sourceKebab === 'finance-and-professional-services') return 'finance';
  return sourceKebab;
};

// Map CSV category to source category
const getSourceCategoryKebab = (csvKebab) => {
  if (csvKebab === 'retail') return 'retail-and-stores';
  if (csvKebab === 'food-and-beverage') return 'food-and-hospitality';
  if (csvKebab === 'it-and-technology') return 'technology';
  if (csvKebab === 'finance' || csvKebab === 'professional-services') return 'finance-and-professional-services';
  return csvKebab;
};

// SCAN NEWWEBGENE DIRECTORY AND ADD TO HIERARCHY
if (fs.existsSync(sourceTemplatesDir)) {
  const catFolders = fs.readdirSync(sourceTemplatesDir);
  for (const cat of catFolders) {
    const catPath = path.join(sourceTemplatesDir, cat);
    if (fs.statSync(catPath).isDirectory()) {
      const displayCat = cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      const mappedKebab = getTargetCategoryKebab(cat);
      let targetCat = Object.keys(hierarchy).find(k => toKebabCase(k) === mappedKebab);
      if (!targetCat) {
        targetCat = Object.keys(hierarchy).find(k => toKebabCase(k) === cat);
      }
      if (!targetCat) {
        hierarchy[displayCat] = new Set();
        targetCat = displayCat;
      }

      const bizFolders = fs.readdirSync(catPath);
      for (const biz of bizFolders) {
        const bizPath = path.join(catPath, biz);
        if (fs.statSync(bizPath).isDirectory()) {
          const displayBiz = biz.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

          // Only add if it exists in leads.csv OR if the user is running this locally to import
          const existingBiz = Array.from(hierarchy[targetCat]).find(b => toKebabCase(b) === biz);
          if (!existingBiz) {
            console.log(`Skipping custom folder in source: ${biz} (Not in leads.csv)`);
          }
        }
      }
    }
  }
}

// We no longer scan src/templates to add to the hierarchy.
// leads.csv is the STRICT single source of truth. Any folder not defined in leads.csv will be permanently ignored.

if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

const templatesRegistry = {};

for (const [category, businessTypes] of Object.entries(hierarchy)) {
  const catKebab = toKebabCase(category);
  const catDir = path.join(templatesDir, catKebab);
  const sourceCatKebab = getSourceCategoryKebab(catKebab);
  const sourceCatDir = path.join(sourceTemplatesDir, sourceCatKebab);

  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  templatesRegistry[category] = {};

  for (const bizType of businessTypes) {
    const bizKebab = toKebabCase(bizType);
    const bizDir = path.join(catDir, bizKebab);
    const sourceBizDir = path.join(sourceCatDir, bizKebab);

    if (!fs.existsSync(bizDir)) {
      fs.mkdirSync(bizDir, { recursive: true });
    }

    // Find templates in the source Next.js project
    let foundTemplates = [];
    if (fs.existsSync(sourceBizDir)) {
      const files = fs.readdirSync(sourceBizDir);
      for (const file of files) {
        if (file.endsWith('.tsx') && file.startsWith('t')) {
          const templateName = file.replace('.tsx', '');
          foundTemplates.push(templateName);

          // Copy and clean up Next.js specific things
          let content = fs.readFileSync(path.join(sourceBizDir, file), 'utf8');
          content = content.replace(/"use client";?\n?/g, '');
          content = content.replace(/'use client';?\n?/g, '');
          content = content.replace(/import Image from ['"]next\/image['"];?\n?/g, '');
          content = content.replace(/import Link from ['"]next\/link['"];?\n?/g, '');
          content = content.replace(/<Image/g, '<img');
          content = content.replace(/<\/Image>/g, '');
          content = content.replace(/<Link/g, '<a');
          content = content.replace(/<\/Link>/g, '</a>');
          // Fix Next.js Image src object bug
          content = content.replace(/src=\{([^}]+)\}/g, (match, p1) => {
            if (p1.includes('.src')) return match;
            return match;
          });

          fs.writeFileSync(path.join(bizDir, file), content);
        }
      }
    }

    // After copying, scan the local bizDir to include any files that were already there
    if (fs.existsSync(bizDir)) {
      const localFiles = fs.readdirSync(bizDir);
      for (const file of localFiles) {
        if (file.endsWith('.tsx') && file.startsWith('t')) {
          const templateName = file.replace('.tsx', '');
          if (!foundTemplates.includes(templateName)) {
            foundTemplates.push(templateName);
          }
        }
      }
    }

    // Check if requested templates are missing and generate boilerplate for them
    let requested = [];
    if (global.requestedTemplates && global.requestedTemplates[category] && global.requestedTemplates[category][businessType]) {
      requested = Array.from(global.requestedTemplates[category][businessType]);
    }
    if (requested.length === 0) requested.push('t1');

    const boilerplate = `export default function Template(props: any) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
      <div className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-slate-100">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3 capitalize">
          {props.data?.name || 'New Template'}
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          {props.data?.about || 'This is a freshly generated template. Replace this boilerplate with your premium Awwwards-quality design.'}
        </p>
        <div className="inline-flex bg-indigo-50 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
          Ready for Development
        </div>
      </div>
    </div>
  );
}
`;

    for (const reqTpl of requested) {
      if (!foundTemplates.includes(reqTpl)) {
        const dummyPath = path.join(bizDir, \`\${reqTpl}.tsx\`);
        fs.writeFileSync(dummyPath, boilerplate);
        foundTemplates.push(reqTpl);
      }
    }

    // Sort templates like t1, t2, t3
    foundTemplates.sort();

    // If no templates found, we can just supply an empty array, so the UI knows there are 0 cards
    templatesRegistry[category][bizType] = {
      path: `${catKebab}/${bizKebab}`,
      templates: foundTemplates
    };

    const metaPath = path.join(bizDir, 'meta.json');
    if (!fs.existsSync(metaPath)) {
      const meta = {
        name: bizType,
        category: category,
        theme: "Light",
        responsive: true,
        animations: true,
        templates: foundTemplates
      };
      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    } else {
      // Update meta.json with actual found templates
      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        meta.templates = foundTemplates;
        fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
      } catch (e) { }
    }
  }
}

const registryPath = path.join(__dirname, 'src', 'registry.json');
fs.writeFileSync(registryPath, JSON.stringify(templatesRegistry, null, 2));

// Generate Business Templates CSV
let csvOutput = "id,category,business_type,template_name,template_path,template_code\n";
let newRecords = [];
let sno = 1;

const getInitials = (name) => {
  let base = name.split(/[\/(]/)[0].trim();
  base = base.replace(/-/g, ' ');
  return base.split(/\s+/).filter(Boolean).map(w => w[0].toUpperCase()).join('');
};

for (const [category, businesses] of Object.entries(templatesRegistry)) {
  for (const [businessName, data] of Object.entries(businesses)) {
    if (data.templates && data.templates.length > 0) {
      for (const tpl of data.templates) {
        const fullPath = `/templates/${data.path}/${tpl}`;
        const tplCode = `${getInitials(businessName)}-${tpl.toUpperCase()}`;
        const row = `${sno},"${category.toLowerCase()}","${businessName.toLowerCase()}","${tpl.toLowerCase()}","${fullPath.toLowerCase()}","${tplCode.toLowerCase()}"`;
        csvOutput += row + '\n';
        if (!existingRecords.has(row)) {
          newRecords.push({ type: 'Template', category, businessName, detail: tpl });
        }
        sno++;
      }
    } else {
      // Even if 0 templates, output a row with empty template info
      const tplCode = `${getInitials(businessName)}-00`;
      const row = `${sno},"${category.toLowerCase()}","${businessName.toLowerCase()}","","","${tplCode.toLowerCase()}"`;
      csvOutput += row + '\n';
      if (!existingRecords.has(row)) {
        newRecords.push({ type: 'Business Type', category, businessName, detail: 'No templates yet' });
      }
      sno++;
    }
  }
}

try {
  fs.writeFileSync(csvOutPath, csvOutput);
} catch (error) {
  if (error.code === 'EBUSY') {
    console.error('\n❌ ERROR: Cannot update business_templates.csv because the file is open in another program (like Excel).');
    console.error('Please close the file and run `npm run dev` again.\n');
    process.exit(1);
  } else {
    throw error;
  }
}

console.log('\n==================================================');
console.log('🔄 SYNC COMPLETE: Website Generator Registry Updated');
console.log('==================================================');

if (newRecords.length > 0) {
  console.log('\n✨ NEW ADDITIONS DETECTED:');
  newRecords.forEach(record => {
    if (record.type === 'Template') {
      console.log(`  + New Template: [${record.category}] ${record.businessName} -> ${record.detail.toUpperCase()}`);
    } else {
      console.log(`  + New Business: [${record.category}] ${record.businessName}`);
    }
  });
  console.log();
} else {
  console.log('\n✓ No new categories or templates detected.\n');
}
