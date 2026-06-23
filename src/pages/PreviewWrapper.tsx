import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PreviewWrapper() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url');
  const [isLoading, setIsLoading] = useState(true);

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 flex-col gap-4">
        <h2 className="text-2xl font-semibold text-slate-900">No URL Provided</h2>
        <p>Please provide a valid template URL to preview.</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-white relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-40">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="font-medium text-slate-500">Loading Preview...</p>
          </div>
        </div>
      )}
      
      <iframe 
        src={url} 
        className="w-full h-full border-none absolute inset-0 z-10"
        onLoad={() => setIsLoading(false)}
        title="Template Preview"
      />

      <button
        id="global-back-btn"
        onClick={() => {
          window.close();
          // Fallback in case browser blocks window.close()
          setTimeout(() => {
            window.location.href = '/showcase';
          }, 100);
        }}
        className="fixed bottom-8 right-8 z-[9999] bg-[#0F172A] hover:bg-[#2563EB] text-white shadow-2xl px-6 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] border border-white/10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Showcase
      </button>
    </div>
  );
}
