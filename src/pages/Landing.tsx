import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutTemplate, 
  Upload, 
  Sparkles, 
  Zap, 
  Globe, 
  Smartphone, 
  Search, 
  ArrowRight, 
  Menu, 
  X,
  CheckCircle2,
  ChevronDown,
  Star,
  PlayCircle
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB]/20 selection:text-[#2563EB] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2563EB]/5 blur-[100px]" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#7C3AED]/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#06B6D4]/5 blur-[120px]" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-2xl text-center lg:text-left"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-semibold text-sm mb-8 border border-[#2563EB]/20">
                <Sparkles className="w-4 h-4" />
                <span>The Ultimate AI Website Generator</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
                Generate Beautiful Business Websites in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">Seconds.</span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed">
                Upload a CSV, let our AI map the data, and instantly deploy hundreds of high-converting, fully responsive websites for any industry.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/showcase" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-bold text-lg hover:bg-[#1D4ED8] transition-all shadow-xl shadow-[#2563EB]/25 hover:-translate-y-1">
                  Explore Templates
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                  <PlayCircle className="w-5 h-5 text-slate-400" />
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] rounded-[3rem] rotate-3 opacity-10" />
                <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 duration-500">
                  {/* Mockup UI Inside */}
                  <div className="w-full h-full flex flex-col">
                    <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <div className="ml-4 bg-white px-4 py-1.5 rounded-md border border-slate-200 text-xs text-slate-400 flex-1 text-center font-mono">localhost:5173/templates/preview</div>
                    </div>
                    <div className="flex-1 bg-slate-100 p-6 flex flex-col gap-4 relative overflow-hidden">
                      {/* Floating UI Elements */}
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-32 bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                         <div className="w-1/3 h-4 bg-slate-200 rounded-full mb-4" />
                         <div className="w-3/4 h-8 bg-slate-100 rounded-lg mb-2" />
                         <div className="w-1/2 h-8 bg-slate-100 rounded-lg" />
                      </motion.div>
                      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="flex gap-4">
                        <div className="flex-1 h-40 bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 mb-4" />
                          <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                          <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                        </div>
                        <div className="flex-1 h-40 bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 mb-4" />
                          <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                          <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                        </div>
                      </motion.div>
                      
                      {/* Magical overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-2xl z-20 whitespace-nowrap"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        Website Generated!
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges outside */}
                <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Status</p>
                    <p className="text-sm font-bold text-slate-900">100% Automated</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/60 text-center">
            {[
              { value: "10,000+", label: "Websites Generated" },
              { value: "150+", label: "Premium Templates" },
              { value: "50+", label: "Business Categories" },
              { value: "99.9%", label: "Automation Rate" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section id="products" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#2563EB] font-semibold tracking-wide uppercase text-sm mb-3">Our Products</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">TinitiateAI Ecosystem</h3>
            <p className="text-lg text-slate-500">Explore our cutting-edge AI products designed to scale your business operations effortlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* B2B Product Card */}
            <Link to="/b2b">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Globe className="w-32 h-32 text-[#2563EB]" />
                </div>
                <div className="w-16 h-16 bg-[#2563EB]/10 group-hover:bg-[#2563EB] rounded-2xl flex items-center justify-center text-[#2563EB] group-hover:text-white transition-colors mb-8">
                  <LayoutTemplate className="w-8 h-8" />
                </div>
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">Project 1</div>
                <h4 className="text-2xl font-bold text-[#0F172A] mb-4">B2B Website Generator</h4>
                <p className="text-slate-500 leading-relaxed text-lg flex-1">Our flagship product. Instantly deploy thousands of high-converting, fully responsive websites for your clients using raw CSV data and AI algorithms.</p>
                
                <div className="mt-8 flex items-center font-bold text-[#2563EB] group-hover:gap-4 transition-all">
                  Open Product <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </motion.div>
            </Link>

            {/* Coming Soon Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm opacity-70 flex flex-col items-center justify-center text-center h-full"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-2">More AI Products</h4>
              <p className="text-slate-500">We are currently building the next generation of AI tools. Stay tuned.</p>
              <div className="mt-6 px-4 py-2 bg-white border border-slate-200 text-slate-400 rounded-full text-sm font-semibold">Coming Soon</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CSV WORKFLOW SECTION --- */}
      <section id="workflow" className="py-24 lg:py-32 bg-[#0F172A] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#06B6D4] font-semibold tracking-wide uppercase text-sm mb-3">The Workflow</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">From raw data to a live website.</h3>
              <p className="text-lg text-slate-400 mb-10">We've simplified the entire website creation pipeline into a single, automated flow. Just bring your data.</p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Upload Leads", desc: "Provide a CSV with business names, addresses, and ratings." },
                  { step: "02", title: "AI Scaffolding", desc: "The engine creates folder structures and assigns the perfect template." },
                  { step: "03", title: "Live Previews", desc: "Puppeteer automatically captures high-fidelity screenshots of every site." },
                  { step: "04", title: "Publish", desc: "Changes are pushed to GitHub and deployed instantly." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono font-bold text-[#06B6D4]">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center p-8 shadow-2xl">
              {/* Visual Workflow Representation */}
              <div className="w-full max-w-md space-y-6">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3"><Upload className="text-[#2563EB]" /> <span>leads.csv</span></div>
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                </motion.div>
                <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>
                
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, delay: 0.2, repeat: Infinity }} className="bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3"><Sparkles className="text-[#7C3AED]" /> <span>Processing Data...</span></div>
                  <div className="w-5 h-5 border-2 border-slate-600 border-t-[#7C3AED] rounded-full animate-spin" />
                </motion.div>
                <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>

                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, delay: 0.4, repeat: Infinity }} className="bg-slate-900/80 backdrop-blur border border-[#06B6D4]/50 p-6 rounded-xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  <LayoutTemplate className="w-12 h-12 text-[#06B6D4] mb-3" />
                  <div className="font-bold text-lg mb-1">Generated Template</div>
                  <div className="text-sm text-slate-400">src/templates/retail/store/t1.tsx</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#2563EB] font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Loved by agencies.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CEO, WebFlow Agency", body: "ShowcasePro completely revolutionized how we pitch clients. We generate their site before the first meeting!" },
              { name: "Mark Tucker", role: "Freelance Dev", body: "The automated screenshot engine alone saved me 50 hours a week. It's truly a magical platform." },
              { name: "Elena Rodriguez", role: "Director, LeadGen Inc", body: "Uploading our raw leads CSV and getting a massive directory of high-converting websites instantly is insane." }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">"{t.body}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                  <div>
                    <h5 className="font-bold text-[#0F172A]">{t.name}</h5>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#2563EB] font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Scale without limits.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "$49", feats: ["100 Generated Sites", "Basic Templates", "CSV Upload", "Community Support"] },
              { name: "Professional", price: "$149", popular: true, feats: ["Unlimited Sites", "Premium Templates", "Custom Domains", "Priority Support"] },
              { name: "Enterprise", price: "Custom", feats: ["Custom Branding", "API Access", "Dedicated Server", "24/7 SLA"] }
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative bg-white p-8 rounded-3xl border ${p.popular ? 'border-[#2563EB] shadow-2xl shadow-[#2563EB]/10' : 'border-slate-200 shadow-sm'} flex flex-col`}>
                {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</div>}
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">{p.name}</h4>
                <div className="mb-6"><span className="text-4xl font-extrabold">{p.price}</span>{p.price !== 'Custom' && <span className="text-slate-500">/mo</span>}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {p.feats.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600"><CheckCircle2 className={`w-5 h-5 ${p.popular ? 'text-[#2563EB]' : 'text-slate-400'}`} /> {f}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${p.popular ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            {/* BG Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to scale your web presence?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the platform that is generating thousands of high-converting business websites completely automatically.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-[#2563EB] rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                  Start Generating
                </button>
                <Link to="/showcase" className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white rounded-full font-bold text-lg transition-all text-white">
                  Browse Showcase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center text-white">
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-[#0F172A]">ShowcasePro</span>
              </Link>
              <p className="text-slate-500 max-w-sm">The world's most advanced AI-driven bulk website generator. High-fidelity templates for every business.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] mb-4">Product</h4>
              <ul className="space-y-3 text-slate-500 font-medium">
                <li><Link to="/showcase" className="hover:text-[#2563EB]">Templates</Link></li>
                <li><a href="#features" className="hover:text-[#2563EB]">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#2563EB]">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] mb-4">Company</h4>
              <ul className="space-y-3 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-[#2563EB]">About Us</a></li>
                <li><Link to="/b2b" className="hover:text-[#2563EB]">B2B Partners</Link></li>
                <li><a href="#" className="hover:text-[#2563EB]">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400 font-medium">
            <p>© 2026 ShowcasePro Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
