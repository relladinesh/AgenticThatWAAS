import React from 'react';
import { Download } from 'lucide-react';
import Papa from 'papaparse';
import { GeneratedWebsite } from '../../types/business';

export function ExportButton({ data }: { data: GeneratedWebsite[] }) {
  const handleExport = () => {
    const exportData = data.map(item => ({
      'Business Name': item.businessName,
      'Category': item.category,
      'Template': item.template,
      'Slug': item.slug,
      'Website URL': item.route,
      'Status': item.status,
      'Error': item.error || ''
    }));

    const csv = Papa.unparse(exportData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `generation-results-${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleExport}
      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-md font-medium text-sm transition-colors border border-slate-300"
    >
      <Download className="w-4 h-4" />
      Export Results CSV
    </button>
  );
}
