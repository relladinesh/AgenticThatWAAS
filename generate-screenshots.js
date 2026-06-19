import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  console.log('🚀 Starting Automated Screenshot Generator...');
  
  const csvPath = path.join(__dirname, 'data csv', 'business_templates.csv');
  if (!fs.existsSync(csvPath)) {
    console.error('❌ business_templates.csv not found. Please make sure your server is running.');
    return;
  }

  const csvData = fs.readFileSync(csvPath, 'utf8');
  const lines = csvData.split('\n');
  
  console.log('⏳ Launching Headless Chrome Browser...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  
  // Set viewport to exactly 1920x1080 (Full HD desktop)
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('📸 Browser launched. Scanning templates...');

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV row
    const parts = [];
    let currentPart = '';
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"' && line[j+1] !== '"') inQuotes = !inQuotes;
      else if (char === '"' && line[j+1] === '"') { currentPart += '"'; j++; }
      else if (char === ',' && !inQuotes) { parts.push(currentPart); currentPart = ''; }
      else currentPart += char;
    }
    parts.push(currentPart);

    const [id, cat, biz, tpl, tplPath] = parts;
    if (!tpl || !tplPath) continue; // Skip if no template

    const url = `http://localhost:5173${tplPath}`;
    
    // Extract path to save the image (e.g. public/previews/professional-services/legal-law-firm)
    const pathParts = tplPath.split('/');
    if (pathParts.length < 5) continue;
    
    const catSlug = pathParts[2];
    const bizSlug = pathParts[3];
    const tplName = pathParts[4];

    // If a specific file is targeted (e.g. from Vite watcher), only capture that one
    const targetArg = process.argv[2];
    if (targetArg) {
      const normalizedTarget = targetArg.replace(/\\/g, '/');
      if (!normalizedTarget.includes(`/${catSlug}/${bizSlug}/${tplName}.tsx`)) {
        continue;
      }
    }

    const saveDir = path.join(__dirname, 'public', 'previews', catSlug, bizSlug);
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir, { recursive: true });
    }

    const savePath = path.join(saveDir, `${tplName}.png`);
    
    // Removed the skip check so it forces a fresh high-fidelity screenshot over the old generic ones
    console.log(`[${i}/${lines.length-1}] 📸 Capturing: ${catSlug} / ${bizSlug} / ${tplName} ...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Wait an extra 3 seconds for heavy framer-motion animations to settle before snapping
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Capture the top part of the screen exactly as the hero section
      await page.screenshot({ path: savePath, clip: { x: 0, y: 0, width: 1920, height: 1080 } });
      console.log(`    ✅ Saved to ${savePath}`);
    } catch (e) {
      console.error(`    ❌ Failed to capture ${url}: ${e.message}`);
    }
  }

  await browser.close();
  console.log('\n🎉 All screenshots generated successfully! Your showcase UI will now display them automatically.');
}

captureScreenshots();
