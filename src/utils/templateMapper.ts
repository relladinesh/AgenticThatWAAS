import businessTemplatesCsv from '../../data csv/business_templates.csv?raw';

export function getTemplateInfo(category: string, businessType?: string) {
  const normCat = (category || '').toLowerCase().trim();
  const normBiz = (businessType || '').toLowerCase().trim();
  
  let matchTemplates = [{ name: 't1', code: 'g-t1', path: '/templates/general/general/t1' }];

  const lines = businessTemplatesCsv.split('\n');
  let foundTemplates: {name: string, code: string, path: string, baseRoute: string}[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Robust CSV parsing
    const parts = [];
    let currentPart = '';
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) { parts.push(currentPart); currentPart = ''; }
      else currentPart += char;
    }
    parts.push(currentPart);

    if (parts.length >= 6) {
      // id, category, business_type, template_name, template_path, template_code
      const csvCat = parts[1].toLowerCase().trim();
      const csvBiz = parts[2].toLowerCase().trim();
      const tplName = parts[3].trim();
      const tplPath = parts[4].trim();
      const tplCode = parts[5].trim();
      
      const isCatMatch = csvCat === normCat || csvCat.includes(normCat) || normCat.includes(csvCat);
      const isBizMatch = normBiz && (csvBiz === normBiz || csvBiz.includes(normBiz) || normBiz.includes(csvBiz));
      
      // Ensure we explicitly match the correct category if there are overlaps, or match strictly by business type
      if ((isBizMatch && isCatMatch) || (isBizMatch && !normCat)) {
         if (tplName && tplName !== '') {
           const baseRoute = tplPath.substring(0, tplPath.lastIndexOf('/'));
           foundTemplates.push({ name: tplName, code: tplCode, path: tplPath, baseRoute });
         }
      }
    }
  }
  
  if (foundTemplates.length > 0) {
    matchTemplates = foundTemplates;
  }
  
  return {
    templates: matchTemplates
  };
}
