import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, ExternalLink, Eye, LayoutTemplate, CheckCircle2, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import rawCsv from '../../data csv/business_templates.csv?raw';

const toKebabCase = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const parseCSV = (csvStr: string) => {
  const lines = csvStr.trim().split('\n');
  const reg: any = {};
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
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
      const existing = reg[cat][biz].templates.find((t: any) => t.id === tpl);
      if (!existing) {
        reg[cat][biz].templates.push({ id: tpl, code: code || '' });
      }
    }
  }
  return reg;
};

const registry = parseCSV(rawCsv);

export default function Showcase() {
  const [search, setSearch] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    Object.keys(registry).forEach(cat => {
      initial[cat] = true;
    });
    return initial;
  });
  
  const [selectedCat, setSelectedCat] = useState<string | null>(Object.keys(registry)[0] || null);
  const [selectedBiz, setSelectedBiz] = useState<string | null>(
    Object.keys(registry)[0] ? Object.keys((registry as any)[Object.keys(registry)[0]])[0] : null
  );

  const handleDownloadMaster = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/api/download-master');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to download master CSV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'master_csv_of_templates.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      alert('Error downloading CSV: ' + error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  const toggleCat = (cat: string) => {
    setExpandedCats(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const selectBiz = (cat: string, biz: string) => {
    setSelectedCat(cat);
    setSelectedBiz(biz);
  };

  const filteredRegistry = useMemo(() => {
    if (!search.trim()) return registry;
    const lowerSearch = search.toLowerCase();
    const result: any = {};
    for (const [cat, bizObj] of Object.entries(registry)) {
      if (cat.toLowerCase().includes(lowerSearch)) {
        result[cat] = bizObj;
      } else {
        const matchingBiz: any = {};
        for (const [biz, data] of Object.entries(bizObj as any)) {
          if (biz.toLowerCase().includes(lowerSearch)) {
            matchingBiz[biz] = data;
          }
        }
        if (Object.keys(matchingBiz).length > 0) {
          result[cat] = matchingBiz;
        }
      }
    }
    return result;
  }, [search]);

  const currentTemplates = (selectedCat && selectedBiz && (registry as any)[selectedCat]?.[selectedBiz]) 
    ? (registry as any)[selectedCat][selectedBiz] 
    : null;

  return (
    <div className="flex h-screen bg-surface overflow-hidden font-sans">
      <aside className="w-80 bg-white border-r border-border flex flex-col shadow-sm z-10 shrink-0">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-900 transition-colors" title="Back to Home">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-semibold tracking-tight text-primary flex items-center gap-2">
              <LayoutTemplate className="w-5 h-5 text-indigo-600" />
              Showcase Pro
            </h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search businesses..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <button
            onClick={handleDownloadMaster}
            disabled={isDownloading}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? 'Downloading...' : 'Download Master CSV'}
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          {Object.entries(filteredRegistry).map(([cat, bizObj]) => (
            <div key={cat} className="mb-2">
              <button 
                onClick={() => toggleCat(cat)}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors group"
              >
                <span className="capitalize">{cat.replace(/-/g, ' ')}</span>
                {expandedCats[cat] ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                )}
              </button>
              
              {expandedCats[cat] && (
                <div className="mt-1 ml-2 pl-2 border-l border-slate-100 flex flex-col gap-1">
                  {Object.keys(bizObj as any).map(biz => {
                    const isSelected = selectedCat === cat && selectedBiz === biz;
                    return (
                      <button
                        key={biz}
                        onClick={() => selectBiz(cat, biz)}
                        className={`text-left px-3 py-2 text-sm rounded-md transition-all capitalize ${
                          isSelected 
                            ? 'bg-indigo-50 text-indigo-700 font-medium' 
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {biz.replace(/-/g, ' ')}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          {Object.keys(filteredRegistry).length === 0 && (
            <div className="p-4 text-center text-sm text-slate-500">
              No categories found.
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-slate-50/50">
        <div className="p-10 max-w-7xl mx-auto">
          {currentTemplates ? (
            <>
              <div className="mb-10">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-2">
                  <span className="capitalize">{selectedCat?.replace(/-/g, ' ')}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="capitalize text-slate-900 font-medium">{selectedBiz?.replace(/-/g, ' ')}</span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 capitalize">
                  {selectedBiz?.replace(/-/g, ' ')} Templates
                </h2>
                <p className="text-slate-500 mt-2">Premium Awwwards-quality designs ready for generation.</p>
              </div>

              {currentTemplates.templates.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {currentTemplates.templates.map((tplObj: any, idx: number) => {
                    const tpl = tplObj.id || tplObj;
                    const tplCode = tplObj.code || `Template ${tpl}`;
                    const urlSlug = tplObj.code ? tplObj.code.toLowerCase() : tpl;
                    const toPath = `/templates/${currentTemplates.path}/${urlSlug}`;
                    
                    return (
                      <div key={tpl} className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                        <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                          <img 
                            src={`/previews/${currentTemplates.path}/${tpl}.png?v=${new Date().getTime()}`} 
                            onError={(e) => {
                              // Use a generic valid Unsplash image as fallback if the preview is missing
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                            }}
                            alt={`${tplCode.toUpperCase()} Preview`} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-slate-900 uppercase">{tplCode}</h3>
                              <p className="text-sm text-slate-500 mt-1">Version 1.0 • Modern Minimal</p>
                            </div>
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                              Premium
                            </span>
                          </div>

                          <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                            <Link 
                              to={toPath} 
                              target="_blank"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Open Template
                            </Link>
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                              <Eye className="w-4 h-4" />
                              Use Template
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center">
                  <LayoutTemplate className="w-12 h-12 text-slate-300 mb-4" />
                  <h3 className="text-lg font-medium text-slate-900">No Templates Found</h3>
                  <p className="text-slate-500 mt-1 max-w-md">There are no template files currently built for this business type in the newwebgene project.</p>
                </div>
              )}
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center pb-20">
              <LayoutTemplate className="w-16 h-16 text-slate-200 mb-4" />
              <h2 className="text-2xl font-semibold text-slate-900">Select a Business Type</h2>
              <p className="text-slate-500 mt-2 max-w-sm">Choose a category and business from the sidebar to view available templates.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
