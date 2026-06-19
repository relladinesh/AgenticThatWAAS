import React, { useState } from 'react';
import { CsvUploader } from '../components/b2b/CsvUploader';
import { ProgressCards } from '../components/b2b/ProgressCards';
import { ResultsTable } from '../components/b2b/ResultsTable';
import { parseBusinessCSV } from '../utils/parseCSV';
import { generateSlug } from '../utils/slugify';
import { getTemplateInfo } from '../utils/templateMapper';
import { GeneratedWebsite } from '../types/business';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function B2B() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [websites, setWebsites] = useState<GeneratedWebsite[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadMaster = async () => {
    setIsDownloading(true);
    try {
      // Fetch the raw CSV from our new Vercel serverless function
      const response = await fetch('/api/download-master');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to download master CSV');
      }

      // Create a blob from the response and trigger download
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

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true);
    setIsCompleted(false);
    try {
      const parsedData = await parseBusinessCSV(file);
      
      const initialWebsites: GeneratedWebsite[] = parsedData.flatMap((data, index) => {
        const slug = generateSlug(data.businessName);
        const templateInfo = getTemplateInfo(data.category, data.businessType);
        
        // Save business data to localStorage once per business
        const siteData = {
          ...data,
          slug
        };
        localStorage.setItem(`preview_${slug}`, JSON.stringify(siteData));
        
        return templateInfo.templates.map((tplObj: any) => {
          const siteId = `${slug}-${tplObj.code}`;
          
          // Fallback baseRoute for default generic templates
          const routeBase = tplObj.baseRoute || '/templates/general/general';
          
          return {
            ...data,
            id: siteId,
            template: tplObj.code,
            availableTemplates: [tplObj.code],
            baseRoute: routeBase,
            slug,
            route: `${routeBase}/${tplObj.code}/${slug}`,
            status: 'Pending'
          } as GeneratedWebsite;
        });
      });

      setWebsites(initialWebsites);

      // Simulate the generation and deployment pipeline
      processPipeline(initialWebsites);
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const processPipeline = async (sites: GeneratedWebsite[]) => {
    // Process in batches of 10 to handle N businesses powerfully and concurrently
    const batchSize = 10;
    
    for (let i = 0; i < sites.length; i += batchSize) {
      const batch = sites.slice(i, i + batchSize);
      
      await Promise.all(batch.map(async (site) => {
        // Generating phase
        updateSiteStatus(site.id, 'Generating');
        await new Promise(r => setTimeout(r, 400 + Math.random() * 300)); // 400-700ms
        
        // Deploying phase
        updateSiteStatus(site.id, 'Deploying');
        await new Promise(r => setTimeout(r, 500 + Math.random() * 400)); // 500-900ms
        
        // Success Phase
        updateSiteStatus(site.id, 'Success');
      }));
    }
    
    // After completely finishing generation of ALL items, save to master CSV in exact order
    try {
      const successfulSites = sites.map(site => {
          // Use production Vercel URL instead of localhost for the generated CSV
          const baseUrl = import.meta.env.VITE_VERCEL_URL || 'https://showcasepro.vercel.app';
          const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
          const finalUrlBase = isLocalhost ? baseUrl : window.location.origin;

          return {
            businessName: site.businessName,
            category: site.category,
            template: site.template,
            slug: site.slug,
            url: `${finalUrlBase}${site.route}`
          };
      });
      
      await fetch('/api/save-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(successfulSites)
      });
    } catch (err) {
      console.error("Failed to save to master CSV", err);
    }
    
    setIsCompleted(true);
  };

  const updateSiteStatus = (id: string, status: GeneratedWebsite['status'], error?: string) => {
    setWebsites(prev => prev.map(site => 
      site.id === id ? { ...site, status, ...(error ? { error } : {}) } : site
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Bulk Website Generation</h1>
              <p className="text-sm text-slate-500">Upload CSV and generate websites automatically using templates.</p>
            </div>
          </div>
          
          <button
            onClick={handleDownloadMaster}
            disabled={isDownloading}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? 'Downloading...' : 'Download Master CSV'}
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {websites.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <CsvUploader onFileSelect={handleFileUpload} isLoading={isProcessing} />
          </motion.div>
        )}

        {websites.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            
            {isCompleted && (
              <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-indigo-900">Creating templates is done!</h3>
                    <p className="text-sm text-indigo-700 mt-0.5">All websites have been generated and appended to the Master CSV.</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setWebsites([]);
                    setIsCompleted(false);
                  }}
                  className="px-5 py-2.5 bg-white border border-indigo-200 hover:border-indigo-300 text-indigo-700 text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
                >
                  Go back for next CSV
                </button>
              </div>
            )}
            
            <ProgressCards data={websites} />
            <ResultsTable data={websites} />
          </motion.div>
        )}
      </main>
    </div>
  );
}
