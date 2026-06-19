import Papa from 'papaparse';
import { BusinessData } from '../types/business';

export function parseBusinessCSV(file: File): Promise<BusinessData[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const data = results.data as any[];
          const processedData: BusinessData[] = data.map(row => {
            // Flexible matching for headers
            const getField = (keys: string[]) => {
              for (const key of keys) {
                const foundKey = Object.keys(row).find(k => k.toLowerCase().trim() === key.toLowerCase());
                if (foundKey && row[foundKey]) return row[foundKey].trim();
              }
              return '';
            };

            return {
              businessName: getField(['Business Name', 'Company Name', 'Name']),
              category: getField(['Category', 'Industry']),
              businessType: getField(['Business Type', 'Niche', 'Sub Category']),
              phone: getField(['Phone', 'Mobile', 'Contact Number', 'Phone Number']),
              location: getField(['Location', 'City', 'Address']),
              website: getField(['Website', 'Website URL', 'URL']),
              email: getField(['Email', 'Email Address']),
              about: getField(['Notes', 'About', 'Description'])
            };
          }).filter(item => item.businessName && item.category); // Require at least name and category
          
          resolve(processedData);
        } catch (err) {
          reject(new Error('Failed to process CSV data'));
        }
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}
