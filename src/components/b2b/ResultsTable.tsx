import React, { useState } from 'react';
import { GeneratedWebsite, DeploymentStatus } from '../../types/business';
import { StatusBadge } from './StatusBadge';
import { ExternalLink, Search } from 'lucide-react';
import { ExportButton } from './ExportButton';

export function ResultsTable({ data }: { data: GeneratedWebsite[] }) {
  const [filter, setFilter] = useState<DeploymentStatus | 'All'>('All');
  const [search, setSearch] = useState('');

  if (!data || data.length === 0) return null;

  const filteredData = data.filter(item => {
    const matchesFilter = filter === 'All' || item.status === filter;
    
    const searchLower = search.toLowerCase();
    const matchesSearch = !search || 
      (item.businessName && item.businessName.toLowerCase().includes(searchLower)) ||
      (item.category && item.category.toLowerCase().includes(searchLower)) ||
      (item.template && item.template.toLowerCase().includes(searchLower)) ||
      (item.slug && item.slug.toLowerCase().includes(searchLower));
      
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden my-8">
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, category, template..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {['All', 'Success', 'Failed', 'Deploying', 'Generating', 'Pending'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                filter === status 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              {status}
            </button>
          ))}
          <div className="ml-2 pl-2 border-l border-slate-300 flex items-center gap-2">
             <ExportButton data={filteredData} />
             <a 
               href="/api/download-master"
               download="master_csv_of_templates.csv"
               className="flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap"
             >
               Download Master CSV
             </a>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="text-xs uppercase bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold">Business Name</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Template</th>
              <th className="px-6 py-4 font-semibold">Slug</th>
              <th className="px-6 py-4 font-semibold">Website URL</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredData.map((item) => {
              const [selectedTemplate, setSelectedTemplate] = React.useState(item.template);
              const dynamicRoute = `${item.baseRoute}/${selectedTemplate}/${item.slug}`;
              
              return (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{item.businessName}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  {item.availableTemplates && item.availableTemplates.length > 1 ? (
                    <select 
                      value={selectedTemplate} 
                      onChange={(e) => setSelectedTemplate(e.target.value)}
                      className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-xs border border-slate-300 outline-none cursor-pointer"
                    >
                      {item.availableTemplates.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  ) : (
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-xs">{selectedTemplate}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-slate-500">{item.slug}</td>
                <td className="px-6 py-4 max-w-xs">
                  {item.status === 'Success' ? (
                    <a 
                      href={dynamicRoute} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium hover:underline break-all"
                    >
                      {window.location.origin}{dynamicRoute} <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                  ) : (
                    <span className="text-slate-400 italic break-all">{window.location.origin}{dynamicRoute}</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <StatusBadge status={item.status} />
                    {item.error && <span className="text-[10px] text-red-500 font-medium">{item.error}</span>}
                  </div>
                </td>
              </tr>
            )})}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                  No results found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
