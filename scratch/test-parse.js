const fs = require('fs');

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

const parseCSV = (csvStr) => {
  const lines = csvStr.trim().split('\n');
  const reg = {};

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

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

    const [id, cat, biz, tpl, path, code] = parts;
    if (!cat || !biz) continue;

    if (!reg[cat]) reg[cat] = {};
    if (!reg[cat][biz]) {
      reg[cat][biz] = {
        templates: [],
        path: `${toKebabCase(cat)}/${toKebabCase(biz)}`
      };
    }

    if (tpl) {
      const existing = reg[cat][biz].templates.find((t) => t.id === tpl);
      if (!existing) {
        reg[cat][biz].templates.push({ id: tpl, code: code || '' });
      }
    }
  }
  return reg;
};

const csvStr = fs.readFileSync('../data csv/business_templates.csv', 'utf8');
const result = parseCSV(csvStr);
console.log(JSON.stringify(result, null, 2));
