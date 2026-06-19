import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, 'data csv', 'business_templates.csv');
const csvData = fs.readFileSync(csvPath, 'utf8');

const lines = csvData.split('\n');

const cleanedLines = lines.filter(line => {
    const lower = line.toLowerCase();
    
    // Remove all the fake "test" leads
    if (lower.includes('"test ')) return false;
    
    // Remove the duplicates we talked about earlier
    if (lower.includes('"finance and professional services"')) return false;
    if (lower.includes('"energy and infrastructure"')) return false;
    
    // There is also "finance","legal law firm" which is a duplicate of "professional services","legal / law firm"
    if (lower.includes('"finance","legal law firm"')) return false;

    return true;
});

// Re-index the IDs so they are perfectly sequential
const finalLines = [];
let currentIndex = 1;

for (let i = 0; i < cleanedLines.length; i++) {
    const line = cleanedLines[i];
    if (i === 0 || !line.trim()) {
        finalLines.push(line);
        continue;
    }
    
    // Replace the first column (ID) with a fresh sequential ID
    const parts = line.split(',');
    parts[0] = currentIndex.toString();
    finalLines.push(parts.join(','));
    currentIndex++;
}

fs.writeFileSync(csvPath, finalLines.join('\n'));
console.log('✅ Cleaned up business_templates.csv! Removed all test entries and duplicates.');
