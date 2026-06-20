import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Papa from 'papaparse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, 'data csv', 'business_templates.csv');
const templatesDir = path.join(__dirname, 'src', 'templates');

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

async function cleanFolders() {
  console.log('🧹 [Cleanup] Scanning src/templates against business_templates.csv...');

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ [Cleanup] CSV not found at ${csvPath}`);
    return;
  }

  const csvContent = fs.readFileSync(csvPath, 'utf8');
  const parsed = Papa.parse(csvContent, { header: true, skipEmptyLines: true });

  const validPaths = new Set();
  const validCategories = new Set();
  const validBizTypes = {}; // category -> set of bizTypes

  parsed.data.forEach(row => {
    const category = row.category ? toKebabCase(row.category) : null;
    const bizType = row.business_type ? toKebabCase(row.business_type) : null;
    
    if (category && bizType) {
      validCategories.add(category);
      if (!validBizTypes[category]) {
        validBizTypes[category] = new Set();
      }
      validBizTypes[category].add(bizType);
    }
  });

  if (!fs.existsSync(templatesDir)) return;

  const categories = fs.readdirSync(templatesDir);

  for (const cat of categories) {
    const catPath = path.join(templatesDir, cat);
    if (!fs.statSync(catPath).isDirectory()) continue;

    // 1. Check if Category exists in CSV
    if (!validCategories.has(cat)) {
      console.log(`🗑️ Deleting orphaned category folder: ${cat}`);
      fs.rmSync(catPath, { recursive: true, force: true });
      continue;
    }

    // 2. Check if Business Type exists in CSV for this category
    const bizTypes = fs.readdirSync(catPath);
    for (const biz of bizTypes) {
      const bizPath = path.join(catPath, biz);
      if (!fs.statSync(bizPath).isDirectory()) continue;

      if (!validBizTypes[cat].has(biz)) {
        console.log(`🗑️ Deleting orphaned template folder: ${cat}/${biz}`);
        fs.rmSync(bizPath, { recursive: true, force: true });
      }
    }
  }

  console.log('✅ [Cleanup] Orphaned folders removed successfully!');
}

cleanFolders();
