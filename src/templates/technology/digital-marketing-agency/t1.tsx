
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  MonitorSmartphone, 
  BarChart3, 
  Megaphone, 
  Code2, 
  Layers, 
  Globe2,
  ChevronRight
} from "lucide-react";

export default function DigitalMarketingT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Dynamic Data Mapping
  const businessData = {
    name: data?.title || data?.name || "Tzar Digital Agency",
    email: data?.email || "hello@tzardigital.com",
    phone: data?.phone || "+1 (888) 123-4567",
    address: data?.address || "Innovation Hub, Tech District, CA",
    tagline: data?.tagline || "We build digital experiences that drive exponential growth.",
  };

  const services = data?.services || [
    "Brand Strategy",
    "Performance Marketing",
    "UI/UX Design",
    "Web Development",
    "SEO & Content",
    "Social Media"
  ];

  // Track mouse for subtle glowing cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-purple-500/30 selection:text-white overflow-hidden relative">
      
      {/* Custom Glowing Cursor Tracker */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.05), transparent 40%)`
        }}
      />

      {/* Premium Minimal Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 lg:px-12 pt-8 pointer-events-none mix-blend-difference">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tighter text-white uppercase">
            {businessData.name.split(" ")[0]}<span className="text-purple-500">.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {["Work", "Services", "Agency", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium tracking-widest uppercase text-slate-300 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-6">
            <a href="#contact" className="hidden sm:flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:text-purple-400 transition-colors">
              Start Project <ArrowUpRight className="w-4 h-4" />
            </a>
            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }} 
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center px-10 pointer-events-auto"
          >
            <div className="flex flex-col gap-8 text-5xl font-medium tracking-tighter">
              {["Work", "Services", "Agency", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Awwwards Style Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden z-10 px-6">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl sm:text-8xl lg:text-[140px] font-bold tracking-tighter leading-[0.9] text-white mb-8">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                Excellence.
              </span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              {businessData.tagline} We partner with ambitious brands to create unfair advantages.
            </p>
            <a href="#work" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:scale-105 hover:bg-slate-200 transition-all duration-300">
              View Showreel <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
          <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase rotate-90 translate-y-8">Scroll</span>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <div className="py-10 border-y border-white/5 bg-[#0A0A0A] overflow-hidden whitespace-nowrap flex relative z-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-16 items-center"
        >
          {[...services, ...services, ...services].map((svc, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-4xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] hover:[-webkit-text-stroke:1px_rgba(255,255,255,1)] transition-all cursor-default">
                {svc.toUpperCase()}
              </span>
              <div className="w-4 h-4 rounded-full bg-purple-500/50"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services / Bento Grid */}
      <section id="services" className="py-32 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
             <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white mb-6">Our Capabilities.</h2>
             <p className="text-xl text-slate-400 font-light max-w-2xl">A multi-disciplinary approach merging data-driven strategy with award-winning creative design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Wide Card */}
            <div className="md:col-span-2 bg-[#111] rounded-3xl p-10 lg:p-14 border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <MonitorSmartphone className="w-48 h-48 text-purple-400" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <MonitorSmartphone className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Digital Platforms</h3>
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
                    We architect immersive websites and web applications that captivate users and convert at the highest industry standards.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-purple-400 font-semibold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                    Explore Engineering <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Tall Card */}
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 relative overflow-hidden group hover:border-pink-500/30 transition-colors duration-500">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <Megaphone className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Growth Marketing</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Performance-driven campaigns across search, social, and programmatic to scale your revenue exponentially.
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Square Cards */}
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 hover:border-orange-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Layers className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Brand Identity</h3>
              <p className="text-slate-400">Crafting resonant visual systems and positioning.</p>
            </div>

            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 hover:border-blue-500/30 transition-colors group md:col-span-2 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">SEO & Content</h3>
                <p className="text-slate-400 max-w-md">Dominating search visibility through technical optimization and authoritative storytelling.</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Globe2 className="w-10 h-10 text-blue-400" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Immersive Image/Video Section */}
      <section id="work" className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            style={{ y }}
            className="w-full h-[600px] lg:h-[800px] relative rounded-[2rem] lg:rounded-[4rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
              alt="Digital Agency Workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-8 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white">Showreel 2026</h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-End Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-8">
                Let's build <br/> the future.
              </h2>
              <p className="text-xl text-slate-400 mb-12 font-light">
                Ready to transform your digital presence? Drop us a line and our strategy team will be in touch within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="text-slate-400 text-lg flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">@</span>
                  {businessData.email}
                </div>
                <div className="text-slate-400 text-lg flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">#</span>
                  {businessData.phone}
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-8">
                <div className="space-y-2">
                  <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-slate-500 focus:border-purple-500 outline-none transition-colors text-xl font-light" placeholder="What's your name?" />
                </div>
                <div className="space-y-2">
                  <input suppressHydrationWarning type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-slate-500 focus:border-purple-500 outline-none transition-colors text-xl font-light" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-slate-500 focus:border-purple-500 outline-none transition-colors text-xl font-light" placeholder="Tell us about your project" />
                </div>
                <button suppressHydrationWarning type="button" className="inline-flex items-center gap-3 bg-white hover:bg-slate-200 text-black px-12 py-6 rounded-full font-bold tracking-widest uppercase text-sm transition-all hover:scale-105 mt-8">
                  Send Inquiry <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-12 relative z-10 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-white uppercase">
            {businessData.name.split(" ")[0]}<span className="text-purple-500">.</span>
          </div>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} {businessData.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
