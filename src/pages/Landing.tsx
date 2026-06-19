import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, Building2, ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl w-full z-10 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
          Welcome to Showcase Pro
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">
          Choose your destination. Access premium Awwwards-winning templates or explore our specialized B2B solutions platform.
        </p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        
        {/* Templates Card */}
        <Link 
          to="/showcase"
          className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] flex flex-col items-start"
        >
          <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all duration-500">
            <LayoutTemplate className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-semibold mb-3">Templates</h2>
          <p className="text-white/50 mb-8 flex-1">
            Browse our extensive collection of premium, dynamically generated templates for various business niches.
          </p>
          <div className="flex items-center text-indigo-400 font-medium group-hover:gap-4 transition-all duration-300">
            <span>Explore Showcase</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </Link>

        {/* B2B Card */}
        <Link 
          to="/b2b"
          className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col items-start"
        >
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all duration-500">
            <Building2 className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-semibold mb-3">B2B Platform</h2>
          <p className="text-white/50 mb-8 flex-1">
            Access enterprise-grade B2B solutions, partnership portals, and specialized tooling.
          </p>
          <div className="flex items-center text-emerald-400 font-medium group-hover:gap-4 transition-all duration-300">
            <span>Enter B2B Portal</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </Link>

      </div>
    </div>
  );
}
