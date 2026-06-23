import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, ChevronLeft, ExternalLink, Eye, LayoutTemplate, ArrowLeft, Menu, X, HeartPulse, Car, ShoppingBag, Monitor, Home, Scissors, BookOpen, Utensils, Briefcase, Building2 } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import rawCsv from '../../data csv/business_templates.csv?raw';
import { motion, AnimatePresence } from 'framer-motion';

const toKebabCase = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
      const existing = reg[cat][biz].templates.find((t: any) => t.id === tpl);
      if (!existing) {
        reg[cat][biz].templates.push({ id: tpl, path: path || '', code: code || '' });
      }
    }
  }
  return reg;
};

const registry = parseCSV(rawCsv);

export default function Showcase() {
  const { category: urlCategory, business: urlBusiness } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [search, setSearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    Object.keys(registry).forEach(cat => {
      initial[cat] = true;
    });
    return initial;
  });

  let currentTemplates: any = null;
  let activeCatName: string | null = null;
  let activeBizName: string | null = null;

  if (urlCategory && urlBusiness) {
    const searchPath = `${toKebabCase(urlCategory)}/${toKebabCase(urlBusiness)}`;
    for (const [cat, bizObj] of Object.entries(registry)) {
      for (const [biz, data] of Object.entries(bizObj as any)) {
        if ((data as any).path === searchPath) {
          currentTemplates = data;
          activeCatName = cat;
          activeBizName = biz;
          break;
        }
      }
    }
  } else if (user?.role === 'client' && user.category && user.businessType) {
    const searchPath = `${toKebabCase(user.category)}/${toKebabCase(user.businessType)}`;
    for (const [cat, bizObj] of Object.entries(registry)) {
      for (const [biz, data] of Object.entries(bizObj as any)) {
        if ((data as any).path === searchPath) {
          currentTemplates = data;
          activeCatName = cat;
          activeBizName = biz;
          break;
        }
      }
    }
  }

  const toggleCat = (cat: string) => {
    setExpandedCats(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const selectBiz = (cat: string, biz: string) => {
    const path = (registry as any)[cat][biz].path;
    navigate(`/showcase/${path}`);
    setIsSidebarOpen(false); // Close mobile sidebar on select
  };

  const filteredRegistry = useMemo(() => {
    let currentReg = registry as any;
    
    // Client specific filtering
    if (user?.role === 'client' && user.category && user.businessType) {
      let found = false;
      const searchPath = `${toKebabCase(user.category)}/${toKebabCase(user.businessType)}`;
      for (const [cat, bizObj] of Object.entries(registry)) {
        for (const [biz, data] of Object.entries(bizObj as any)) {
          if ((data as any).path === searchPath) {
            currentReg = {
              [cat]: {
                [biz]: data
              }
            };
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) currentReg = {};
    }

    if (!search.trim()) return currentReg;
    const lowerSearch = search.toLowerCase();
    const result: any = {};
    for (const [cat, bizObj] of Object.entries(currentReg)) {
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
  }, [search, user]);

  const getCategoryIcon = (catName: string) => {
    const c = catName.toLowerCase();
    const cls = "w-10 h-10 text-indigo-600";
    if (c.includes('health') || c.includes('clinic') || c.includes('dental')) return <HeartPulse className={cls} />;
    if (c.includes('auto') || c.includes('car') || c.includes('vehicle')) return <Car className={cls} />;
    if (c.includes('retail') || c.includes('store') || c.includes('shop')) return <ShoppingBag className={cls} />;
    if (c.includes('it') || c.includes('tech') || c.includes('software')) return <Monitor className={cls} />;
    if (c.includes('real') || c.includes('estate') || c.includes('property')) return <Home className={cls} />;
    if (c.includes('beauty') || c.includes('wellness') || c.includes('salon')) return <Scissors className={cls} />;
    if (c.includes('education') || c.includes('school') || c.includes('tutor')) return <BookOpen className={cls} />;
    if (c.includes('food') || c.includes('restaurant') || c.includes('cafe')) return <Utensils className={cls} />;
    if (c.includes('professional') || c.includes('service') || c.includes('law')) return <Briefcase className={cls} />;
    return <Building2 className={cls} />;
  };

  const scrollContainer = (id: string, direction: 'left' | 'right') => {
    const container = document.getElementById(id);
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans text-[#0F172A]">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-80 bg-white border-r border-slate-200 flex flex-col shadow-xl lg:shadow-none z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${user?.role === 'client' ? 'hidden lg:flex' : ''}`}>
        <div className="p-6 border-b border-slate-100 flex items-center justify-between lg:block">
          <div className="flex items-center gap-3 mb-0 lg:mb-6">
            <Link to="/b2b" className="p-2 -ml-2 hover:bg-slate-50 rounded-lg text-slate-500 hover:text-slate-900 transition-colors" title="Back to Home">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold tracking-tight text-[#0F172A] flex items-center gap-2">
              <LayoutTemplate className="w-6 h-6 text-[#2563EB]" />
              Showcase
            </h1>
          </div>
          <button className="p-2 -mr-2 text-slate-500 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 border-b border-slate-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search businesses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          {Object.entries(filteredRegistry).map(([cat, bizObj]) => (
            <div key={cat} className="mb-2">
              <button
                onClick={() => toggleCat(cat)}
                className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors group"
              >
                <span className="capitalize">{cat.replace(/-/g, ' ')}</span>
                {expandedCats[cat] ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                )}
              </button>

              <AnimatePresence>
                {expandedCats[cat] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-100 flex flex-col gap-1 py-1">
                      {Object.keys(bizObj as any).map(biz => {
                        const isSelected = activeCatName === cat && activeBizName === biz;
                        return (
                          <button
                            key={biz}
                            onClick={() => selectBiz(cat, biz)}
                            className={`text-left px-3 py-2 text-sm rounded-lg transition-all capitalize ${isSelected
                              ? 'bg-[#2563EB]/10 text-[#2563EB] font-semibold'
                              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                              }`}
                          >
                            {biz.replace(/-/g, ' ')}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {Object.keys(filteredRegistry).length === 0 && (
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <Search className="w-8 h-8 text-slate-300 mb-3" />
              <p className="text-sm text-slate-500">No categories found.</p>
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto flex flex-col relative w-full lg:w-auto">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <LayoutTemplate className="w-6 h-6 text-[#2563EB]" />
            <span className="font-bold text-[#0F172A]">Showcase</span>
          </div>
          {user?.role !== 'client' && (
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-slate-50 rounded-lg border border-slate-200">
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
          )}
        </div>

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
          {currentTemplates ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={`${activeCatName}-${activeBizName}`}
            >
              <div className="mb-8 md:mb-12">
                <button 
                  onClick={() => navigate('/b2b')}
                  className="flex lg:hidden items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] mb-6 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </button>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[#2563EB] mb-3 font-medium">
                  <span className="capitalize bg-[#2563EB]/10 px-3 py-1 rounded-full">{activeCatName?.replace(/-/g, ' ')}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  <span className="capitalize bg-[#06B6D4]/10 text-[#06B6D4] px-3 py-1 rounded-full">{activeBizName?.replace(/-/g, ' ')}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] capitalize mt-4">
                  {activeBizName?.replace(/-/g, ' ')} Templates
                </h2>
                <p className="text-slate-500 mt-4 text-lg max-w-2xl">Modern, high-conversion designs perfectly tailored for this business type. Ready to generate in seconds.</p>
              </div>

              {currentTemplates.templates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {currentTemplates.templates.map((tplObj: any, idx: number) => {
                    const tpl = tplObj.id || tplObj;
                    const tplCode = tplObj.code || `Template ${tpl}`;
                    const urlSlug = tplObj.code ? tplObj.code.toLowerCase() : tpl;
                    const toPath = tplObj.path || `/templates/${currentTemplates.path}/${urlSlug}`;

                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        key={tpl}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                      >
                        <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                          <img
                            src={`/previews/${currentTemplates.path}/${tpl}.png?v=${new Date().getTime()}`}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                            }}
                            alt={`${tplCode.toUpperCase()} Preview`}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <Link
                              to={toPath}
                              target="_blank"
                              className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 px-6 py-3 bg-white text-[#0F172A] hover:bg-slate-50 hover:text-[#2563EB] font-bold rounded-full shadow-xl"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Live Demo
                            </Link>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col bg-white">
                          <h3 className="text-xl font-bold text-[#0F172A] uppercase mb-2">{tplCode}</h3>
                          <div className="mt-auto pt-6 border-t border-slate-100 grid grid-cols-1 gap-3">
                            <Link to={toPath} target="_blank" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-[#2563EB]/20">
                              <Eye className="w-4 h-4" />
                              View Template
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center flex flex-col items-center justify-center shadow-sm">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <LayoutTemplate className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">No Templates Generated Yet</h3>
                  <p className="text-slate-500 mt-2 max-w-md text-lg">Templates for this business type haven't been compiled yet. Run the generator to create them.</p>
                </div>
              )}
            </motion.div>
          ) : (
          <div className="pb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold text-[#0F172A] tracking-tight">Ecosystem Showcase</h2>
              <p className="text-slate-500 mt-2 text-lg">Premium UI components and templates sorted by industry.</p>
            </div>

            <div className="flex flex-col gap-16">
              {Object.entries(filteredRegistry).map(([cat, bizObj]) => (
                <div key={cat}>
                  <h3 className="text-2xl font-bold text-slate-900 capitalize mb-6 pl-2">{cat.replace(/-/g, ' ')}</h3>
                  
                  <div className="bg-white border border-[#e5e7eb] rounded-[32px] p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative group/carousel">
                    
                    {/* Left Scroll Button */}
                    <button 
                      onClick={() => scrollContainer(`scroll-${cat}`, 'left')} 
                      className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 p-3 rounded-full border border-gray-200 bg-white text-slate-600 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex items-center justify-center"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Scroll Button */}
                    <button 
                      onClick={() => scrollContainer(`scroll-${cat}`, 'right')} 
                      className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 p-3 rounded-full border border-gray-200 bg-white text-slate-600 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex items-center justify-center"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <div id={`scroll-${cat}`} className="flex gap-8 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x">
                      {Object.keys(bizObj as any).map((biz) => {
                        return (
                          <div 
                            key={biz} 
                            onClick={() => selectBiz(cat, biz)}
                            className="flex flex-col items-center flex-shrink-0 w-max min-w-[140px] max-w-[240px] px-2 md:px-4 group cursor-pointer snap-start hover:-translate-y-2 transition-transform duration-300 ease-out"
                          >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#eef2ff] to-[#dbeafe] flex items-center justify-center mb-5 group-hover:scale-[1.08] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out">
                              {getCategoryIcon(cat)}
                            </div>
                            <h4 className="text-[16px] font-semibold text-slate-900 text-center leading-snug capitalize mb-1">
                              {biz.replace(/-/g, ' ')}
                            </h4>
                            <p className="text-sm text-slate-500 text-center">
                              Modern responsive website
                            </p>
                            <button className="md:hidden mt-4 px-5 py-2 bg-[#eef2ff] text-indigo-600 rounded-full text-xs font-bold tracking-wide transition-colors">
                              View Templates
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {Object.keys(filteredRegistry).length === 0 && (
                <div className="text-center py-20 bg-white rounded-[32px] border border-[#e5e7eb]">
                  <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900">No categories found</h3>
                  <p className="text-slate-500 mt-2">Try adjusting your search query.</p>
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </main>
    </div>
  );
}
