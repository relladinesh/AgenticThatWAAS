import React, { useState } from 'react';
import { ChevronRight, Layout, Zap, Shield, BarChart, Users, Menu, X, CheckCircle, ArrowRight } from 'lucide-react';

export default function NexusLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-600/20">
                N
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Nexus</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">How it Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Log in</button>
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            Nexus Platform 2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
            Build incredible products <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              at lightning speed.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform for modern teams to plan, build, and launch exceptional digital experiences. Stop managing tools and start building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Start Building Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Book a Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • 14-day free trial</p>
        </div>

        {/* Hero Image / Dashboard Mockup */}
        <div className="max-w-6xl mx-auto mt-20 relative z-10">
          <div className="rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-xl p-2 shadow-2xl">
            <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50"></div>
              {/* Fake UI Elements */}
              <div className="relative w-full h-full p-8 flex flex-col gap-6">
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 grid grid-cols-12 gap-6">
                  <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col gap-3">
                    <div className="h-4 w-24 bg-slate-200 rounded-full mb-4"></div>
                    {[1,2,3,4].map(i => <div key={i} className="h-8 w-full bg-slate-50 rounded-lg"></div>)}
                  </div>
                  <div className="col-span-9 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                     <div className="h-6 w-48 bg-slate-200 rounded-full mb-8"></div>
                     <div className="grid grid-cols-3 gap-4 mb-8">
                       {[1,2,3].map(i => <div key={i} className="h-24 bg-indigo-50/50 rounded-xl border border-indigo-100/50"></div>)}
                     </div>
                     <div className="h-48 w-full bg-slate-50 rounded-xl border border-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Everything you need to scale</h2>
            <p className="text-lg text-slate-600">Powerful features designed to help your team move faster, collaborate better, and deliver exceptional results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6 text-amber-500" />, title: 'Lightning Fast', desc: 'Built on edge computing architecture ensuring sub-50ms response times globally.' },
              { icon: <Shield className="w-6 h-6 text-emerald-500" />, title: 'Enterprise Security', desc: 'Bank-grade encryption, SOC2 compliance, and granular role-based access control.' },
              { icon: <BarChart className="w-6 h-6 text-blue-500" />, title: 'Advanced Analytics', desc: 'Real-time insights into your product usage and user behavior patterns.' },
              { icon: <Users className="w-6 h-6 text-purple-500" />, title: 'Team Collaboration', desc: 'Built-in multiplayer editing, comments, and seamless knowledge sharing.' },
              { icon: <Layout className="w-6 h-6 text-pink-500" />, title: 'Beautiful Interface', desc: 'Intuitive, award-winning design that your team will actually love using.' },
              { icon: <CheckCircle className="w-6 h-6 text-indigo-500" />, title: 'Automated Workflows', desc: 'Connect your favorite tools and put your repetitive tasks on autopilot.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join 10,000+ modern teams already using Nexus to build better products, faster.
          </p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start your free trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="text-lg font-bold text-slate-900">Nexus</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-600 font-medium">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600">Contact Support</a>
          </div>
          <p className="text-sm text-slate-500">© 2026 Nexus Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
