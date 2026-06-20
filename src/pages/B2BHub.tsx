import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutTemplate, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

export default function B2BHub() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-slate-800">TinitiateAI Platform</h1>
              <p className="text-sm text-slate-500">Manage your templates and bulk generate websites.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Select a Tool</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Access the Template Gallery or use the Website Generator engine to bulk process new leads.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/b2b/templates" className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-200 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LayoutTemplate className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Templates Gallery</h3>
              <p className="text-slate-500 text-lg">Browse, preview, and explore the complete library of dynamically generated website templates.</p>
            </Link>

            <Link to="/b2b/webgene" className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-200 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Website Generator</h3>
              <p className="text-slate-500 text-lg">Upload raw CSV data to instantly build, map, and deploy thousands of new business websites.</p>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
