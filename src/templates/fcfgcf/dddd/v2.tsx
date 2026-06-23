import React from 'react';
import { Zap, Shield, BarChart, ArrowRight, Code, Cpu, Globe, CheckCircle } from 'lucide-react';

export default function TechStartup() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center rotate-3 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Synapse<span className="text-indigo-400">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Developers</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white">Sign In</button>
            <button className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Synapse API 2.0 is now live
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Build the future with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Intelligence
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The most powerful, scalable, and secure AI infrastructure for modern teams. Deploy generative models to production in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
              Start Building Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2">
              <Code className="w-5 h-5" /> Read Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 border-t border-white/10 bg-[#0F0F13]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast Inference", desc: "Global edge network ensures sub-50ms latency for all API requests regardless of user location." },
              { icon: Shield, title: "Enterprise Grade Security", desc: "SOC2 compliant with end-to-end encryption. Your training data is never used to train public models." },
              { icon: Globe, title: "Global Scale", desc: "Auto-scaling infrastructure that handles billions of requests per day without breaking a sweat." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors group">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
