
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, ArrowRight, Sparkles, BarChart, PenTool, Code, 
  Megaphone, Target, Mail, Phone, ChevronRight, CheckCircle2, 
  Globe2, Play, ArrowUpRight
} from "lucide-react";

export default function DigitalMarketingT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Dynamic Data Mapping
  const businessData = {
    name: data?.title || data?.name || "Ovation Digital",
    email: data?.email || "hello@ovationdigital.co",
    phone: data?.phone || "+1 (800) 999-1234",
    address: data?.address || "One World Trade, Suite 45, NY",
    tagline: data?.tagline || "Architecting digital ecosystems that outperform the market.",
  };

  const navLinks = ["Vision", "Capabilities", "Case Studies", "Process", "Contact"];

  const stats = [
    { value: "300%", label: "Average ROI Increase" },
    { value: "$250M+", label: "Client Revenue Generated" },
    { value: "45+", label: "Industry Awards Won" },
    { value: "98%", label: "Client Retention Rate" },
  ];

  const processes = [
    { step: "01", title: "Discovery & Audit", desc: "Deep dive into your brand, audience, and market landscape." },
    { step: "02", title: "Strategy Architecture", desc: "Data-driven roadmaps engineered for maximum scalability." },
    { step: "03", title: "Execution & Deployment", desc: "Flawless technical and creative execution by our elite teams." },
    { step: "04", title: "Optimization & Scale", desc: "Continuous A/B testing and algorithmic scaling." },
  ];

  const testimonials = [
    { quote: "Ovation didn't just redesign our website; they completely overhauled our digital revenue engine. We saw a 4x increase in leads within 90 days.", author: "Sarah Jenkins", role: "CMO, TechFlow" },
    { quote: "The most analytical and creatively gifted agency we have ever partnered with. They treat your business like it's their own.", author: "Marcus Thorne", role: "CEO, Elevate Brands" },
    { quote: "Their technical SEO and performance marketing strategies completely dominated our competitors in less than six months.", author: "Elena Rostova", role: "VP Marketing, Aura" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#0066CC] selection:text-white overflow-hidden relative">
      
      {/* Dynamic Ambient Background Meshes */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-[140px] pointer-events-none z-0 mix-blend-multiply"></div>
      <div className="fixed top-[40%] right-[-10%] w-[40vw] h-[60vw] rounded-full bg-gradient-to-bl from-rose-200/30 to-orange-100/30 blur-[140px] pointer-events-none z-0 mix-blend-multiply"></div>

      {/* Premium Floating Navigation */}
      <header className="fixed top-6 inset-x-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] h-16 sm:h-20 px-6 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#0066CC] to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight text-xl">{businessData.name}</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
             {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-semibold text-[#86868B] hover:text-[#1D1D1F] transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0066CC] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
             ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:flex items-center gap-2 bg-[#1D1D1F] hover:bg-[#000000] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.2)] hover:-translate-y-0.5">
              Start Project <ArrowUpRight className="w-4 h-4" />
            </a>
            <button className="lg:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1D1D1F] shadow-sm border border-slate-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-3xl shadow-2xl rounded-[2rem] p-8 flex flex-col gap-6 border border-white/60"
            >
               {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#1D1D1F] border-b border-slate-100 pb-4 flex items-center justify-between group">
                    {item} <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-[#0066CC] transition-colors" />
                  </a>
               ))}
               <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#0066CC] text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-500/20">
                 Let's Talk
               </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-20 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-[#0066CC] text-sm font-bold uppercase tracking-widest mb-10">
              <Globe2 className="w-4 h-4" /> Global Digital Marketing Agency
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-bold tracking-tighter leading-[0.95] text-[#1D1D1F] mb-10 max-w-6xl mx-auto">
              We Engineer <br className="hidden lg:block" /> 
              <span className="relative">
                Digital Growth
                <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#0066CC] rounded-full opacity-20"></span>
              </span>.
            </h1>
            <p className="text-xl sm:text-3xl text-[#86868B] font-medium max-w-3xl mx-auto mb-14 leading-relaxed">
              {businessData.tagline} Partner with us to scale your brand through data, design, and performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-[#1D1D1F] hover:bg-[#000000] text-white rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 flex items-center justify-center gap-3">
                Start Your Journey <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#work" className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-[#1D1D1F] rounded-full font-bold text-lg transition-all shadow-sm border border-[#E5E5EA] flex items-center justify-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Watch Showreel
              </a>
            </div>
          </motion.div>

          {/* Massive Hero Image / Dashboard Mockup */}
          <motion.div 
            style={{ y }}
            className="w-full mt-24 relative h-[600px] lg:h-[800px] rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border-[8px] border-white/50 backdrop-blur-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
              alt="Digital Marketing Dashboard"
              className="object-cover w-full h-full"
            />
            {/* Floating UI Elements inside Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-12 left-12 bg-white/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl max-w-[280px] border border-white/50 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <BarChart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#86868B] uppercase tracking-wider">Conversion</p>
                  <p className="text-2xl font-bold text-[#1D1D1F]">+124.5%</p>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-green-500 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-12 right-12 bg-[#1D1D1F]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl max-w-[320px] border border-white/10 hidden md:block text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0066CC] rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-bold mb-1">Campaign Scaled</p>
                  <p className="text-slate-400 text-sm leading-relaxed">AI-driven bidding just reduced CPA by 42% while tripling volume.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Ticker / Trust Strip */}
      <div className="py-10 border-y border-[#E5E5EA] bg-white overflow-hidden whitespace-nowrap flex relative z-10">
        <p className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 text-sm font-bold uppercase tracking-widest text-[#86868B] z-10 bg-white pr-4 hidden md:block">
          Trusted By Industry Leaders
        </p>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-20 items-center pl-[300px]"
        >
          {[1,2,3,4,5,1,2,3,4,5].map((_, i) => (
            <div key={i} className="text-3xl font-bold tracking-tighter text-[#D2D2D7]">
              BRAND LOGO™
            </div>
          ))}
        </motion.div>
      </div>

      {/* Massive Bento Grid Capabilities */}
      <section id="capabilities" className="py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#1D1D1F] max-w-2xl leading-[1.1]">
              Everything you need to <span className="text-[#0066CC]">dominate.</span>
            </h2>
            <p className="text-xl text-[#86868B] font-medium max-w-md">
              We don't do isolated tactics. We build cohesive digital machines designed for exponential growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Hero Card Wide */}
            <div 
              onMouseEnter={() => setHoveredService(1)} onMouseLeave={() => setHoveredService(null)}
              className="md:col-span-8 bg-white rounded-[3rem] p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] relative overflow-hidden group hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] transition-opacity duration-700 ${hoveredService === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[350px]">
                <div className="w-20 h-20 bg-[#F5F5F7] rounded-[1.5rem] flex items-center justify-center text-[#1D1D1F] mb-12 group-hover:bg-[#0066CC] group-hover:text-white transition-colors duration-500">
                  <BarChart className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#1D1D1F] mb-6 tracking-tight">Performance Marketing</h3>
                  <p className="text-[#86868B] text-xl max-w-lg leading-relaxed mb-10">
                    Data-driven paid media across Search, Social, and Programmatic. We engineer high-converting funnels that turn ad spend into predictable revenue.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-3 text-[#0066CC] font-bold text-lg group-hover:gap-5 transition-all">
                    Explore Paid Media <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Tall Card */}
            <div className="md:col-span-4 bg-[#1D1D1F] rounded-[3rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] opacity-80 z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-12 border border-white/20">
                  <PenTool className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">UI/UX & Design</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Award-winning interfaces that merge beautiful aesthetics with behavioral psychology to maximize conversion rates.
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small Cards */}
            <div className="md:col-span-4 bg-white rounded-[3rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-8">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">SEO & Content</h3>
              <p className="text-[#86868B] text-lg">Dominating organic search through technical superiority and authoritative storytelling.</p>
            </div>

            <div className="md:col-span-4 bg-white rounded-[3rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-8">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Web Engineering</h3>
              <p className="text-[#86868B] text-lg">Lightning-fast React & Next.js web applications built for scale and security.</p>
            </div>

            <div className="md:col-span-4 bg-white rounded-[3rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-8">
                <Megaphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Social & Viral</h3>
              <p className="text-[#86868B] text-lg">Capturing attention where it matters most with scroll-stopping creative content.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats & Sticky Scroll Process Section */}
      <section id="process" className="py-32 bg-[#1D1D1F] text-white relative z-10 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Big Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-32 border-b border-white/10 pb-20">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-5xl sm:text-7xl font-bold tracking-tighter mb-4 text-[#0066CC]">{stat.value}</p>
                <p className="text-slate-400 font-semibold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Sticky Process Layout */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky top-32">
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Our proven <br/> methodology.
              </h2>
              <p className="text-xl text-slate-400 font-medium mb-10 leading-relaxed">
                We don't guess. We deploy a rigorous, algorithmic approach to digital marketing that ensures predictable success and massive scale.
              </p>
              <a href="#contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold transition-transform hover:scale-105">
                Work With Us <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              {processes.map((proc, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-[#0066CC] mb-6 font-mono">{proc.step}</div>
                  <h3 className="text-3xl font-bold mb-4">{proc.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Interactive Slider */}
      <section className="py-32 px-4 sm:px-6 bg-[#F5F5F7] relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0066CC]/10 text-[#0066CC] mb-10">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#1D1D1F] mb-20">Don't just take our word for it.</h2>

          <div className="relative bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-[#E5E5EA]">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1D1D1F] leading-tight tracking-tight mb-16">
              "{testimonials[activeTestimonial].quote}"
            </p>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-[#1D1D1F]">{testimonials[activeTestimonial].author}</p>
              <p className="text-lg text-[#86868B] font-medium">{testimonials[activeTestimonial].role}</p>
            </div>

            {/* Custom Pagination */}
            <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 flex gap-3 bg-white px-6 py-4 rounded-full shadow-lg border border-[#E5E5EA]">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? 'bg-[#0066CC] scale-125' : 'bg-[#D2D2D7] hover:bg-[#86868B]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mega Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 relative z-10 bg-white border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Left Contact Info */}
            <div>
              <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter text-[#1D1D1F] mb-8 leading-[0.9]">
                Let's build <br/> something <span className="text-[#0066CC]">iconic.</span>
              </h2>
              <p className="text-2xl text-[#86868B] font-medium mb-16 max-w-lg">
                Whether you need a full digital transformation or targeted performance growth, our team is ready to scale your vision.
              </p>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <div className="w-14 h-14 bg-[#F5F5F7] rounded-full flex items-center justify-center text-[#1D1D1F] mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-2">Email Us</p>
                  <p className="text-xl font-bold text-[#1D1D1F]">{businessData.email}</p>
                </div>
                <div>
                  <div className="w-14 h-14 bg-[#F5F5F7] rounded-full flex items-center justify-center text-[#1D1D1F] mb-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-2">Call Us</p>
                  <p className="text-xl font-bold text-[#1D1D1F]">{businessData.phone}</p>
                </div>
              </div>
            </div>

            {/* Right Multi-Step Form Layout */}
            <div className="bg-[#FBFBFD] p-10 lg:p-14 rounded-[3rem] shadow-lg border border-[#E5E5EA]">
              <h3 className="text-3xl font-bold text-[#1D1D1F] mb-10">Request a strategy session</h3>
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-[#86868B]">First Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-white border border-[#E5E5EA] rounded-2xl px-6 py-5 text-[#1D1D1F] text-lg focus:border-[#0066CC] focus:ring-4 focus:ring-[#0066CC]/10 outline-none transition-all shadow-sm" placeholder="John" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-[#86868B]">Last Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-white border border-[#E5E5EA] rounded-2xl px-6 py-5 text-[#1D1D1F] text-lg focus:border-[#0066CC] focus:ring-4 focus:ring-[#0066CC]/10 outline-none transition-all shadow-sm" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#86868B]">Work Email</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-white border border-[#E5E5EA] rounded-2xl px-6 py-5 text-[#1D1D1F] text-lg focus:border-[#0066CC] focus:ring-4 focus:ring-[#0066CC]/10 outline-none transition-all shadow-sm" placeholder="john@company.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#86868B]">Monthly Budget</label>
                  <select suppressHydrationWarning className="w-full bg-white border border-[#E5E5EA] rounded-2xl px-6 py-5 text-[#1D1D1F] text-lg focus:border-[#0066CC] focus:ring-4 focus:ring-[#0066CC]/10 outline-none transition-all shadow-sm appearance-none cursor-pointer">
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <button suppressHydrationWarning type="button" className="w-full bg-[#0066CC] hover:bg-[#0055b3] text-white py-6 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:shadow-xl mt-6">
                  Submit Request
                </button>
                <div className="flex items-center gap-2 justify-center text-[#86868B] text-sm font-medium mt-4">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 100% Secure. No spam ever.
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="bg-[#1D1D1F] text-white py-20 px-4 sm:px-6 relative z-10 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-bold tracking-tight text-3xl">{businessData.name}</span>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-sm mb-10">
                The premier digital growth agency for brands that refuse to settle for average.
              </p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "Instagram"].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors font-semibold text-sm">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <div className="flex flex-col gap-4 text-slate-400 font-medium">
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
                <a href="#" className="hover:text-white transition-colors">News</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <div className="flex flex-col gap-4 text-slate-400 font-medium">
                <a href="#" className="hover:text-white transition-colors">Performance</a>
                <a href="#" className="hover:text-white transition-colors">UI/UX Design</a>
                <a href="#" className="hover:text-white transition-colors">Engineering</a>
                <a href="#" className="hover:text-white transition-colors">SEO Growth</a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-lg font-bold mb-6">Join Newsletter</h4>
              <p className="text-slate-400 mb-6 font-medium">Insights and growth strategies delivered weekly.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-[#0066CC]" />
                <button className="bg-[#0066CC] px-6 rounded-xl font-bold hover:bg-[#0055b3] transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-medium text-sm">
            <p>© {new Date().getFullYear()} {businessData.name}. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
