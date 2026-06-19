
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, ArrowUpRight, Building, Users, ShieldCheck, 
  Wallet, Wrench, BarChart, ChevronRight, Lock, Key
} from "lucide-react";

export default function PropertyManagementT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll Animations
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const { scrollYProgress: stackProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScrubX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
  // Card Stacking Transforms (Card 0 is static, Card 1 & 2 slide up from bottom)
  const card1Y = useTransform(stackProgress, [0, 0.4], ["120vh", "0vh"]);
  const card2Y = useTransform(stackProgress, [0.4, 0.8], ["120vh", "0vh"]);
  const transformsY = ["0vh", card1Y, card2Y];

  // Dynamic Data Mapping
  const businessData = {
    name: data?.title || data?.name || "Core Property Management",
    email: data?.email || "partners@coremanagement.co",
    phone: data?.phone || "+1 (888) 123-4567",
    address: data?.address || "One Financial Center, Boston, MA",
    tagline: data?.tagline || "Institutional-grade asset management for private portfolios.",
  };

  const navLinks = ["Our Edge", "Technology", "Portfolio", "Services", "Contact"];

  const stats = [
    { value: "$4.2B", label: "Assets Under Management" },
    { value: "12,500+", label: "Units Managed" },
    { value: "99.2%", label: "Occupancy Rate" },
    { value: "14", label: "Major Markets" },
  ];

  const services = [
    { 
      title: "Tenant Acquisition", 
      icon: Users, 
      desc: "Algorithmic pricing and multi-channel marketing to secure high-credit tenants at premium rates."
    },
    { 
      title: "Asset Preservation", 
      icon: Wrench, 
      desc: "24/7 predictive maintenance networks ensuring your property's value never degrades."
    },
    { 
      title: "Financial Reporting", 
      icon: BarChart, 
      desc: "Institutional-level accounting, tax preparation, and real-time ROI dashboards."
    },
    { 
      title: "Risk & Compliance", 
      icon: ShieldCheck, 
      desc: "Navigating complex local zoning, rent control laws, and rigorous liability shielding."
    }
  ];

  const technologyStack = [
    { name: "Owner Portal", desc: "Real-time cash flow analysis and capital expenditure tracking." },
    { name: "Resident App", desc: "Frictionless rent payments, maintenance requests, and community events." },
    { name: "Smart Access", desc: "Keyless entry and IoT climate control integrated directly into the property." },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F4F4F0] text-[#050505] font-sans selection:bg-[#050505] selection:text-[#F4F4F0] overflow-clip relative">
      
      {/* Dynamic Noise Overlay for Premium Texture (Adjusted for Light Mode) */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none px-6 lg:px-12 pt-8 mix-blend-difference">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 text-white">
             <div className="w-8 h-8 border border-white flex items-center justify-center">
               <div className="w-4 h-4 bg-white"></div>
             </div>
             <span className="font-bold tracking-tighter text-xl uppercase leading-none">{businessData.name}</span>
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6 text-white">
            <a href="#contact" className="hidden lg:flex items-center gap-2 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all hover:scale-105 duration-300">
              Partner With Us <ArrowUpRight className="w-4 h-4" />
            </a>
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }} 
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-[#F4F4F0] z-40 px-6 py-24 flex flex-col pointer-events-auto mix-blend-normal"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((item, i) => (
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}
                    key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-5xl font-light tracking-tighter text-[#050505] border-b border-black/10 pb-6 flex items-center justify-between"
                  >
                    {item} <ArrowUpRight className="w-8 h-8 text-black/30" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Avant-Garde Hero Section */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden z-10 px-6 lg:px-12 pt-20">
        
        {/* Background Video/Image Plate */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-x-6 lg:inset-x-12 top-32 bottom-12 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#050505]/10 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Corporate Real Estate"
            className="object-cover w-full h-full scale-105"
          />
        </motion.div>

        {/* Foreground Massive Typography */}
        <div className="relative z-20 w-full max-w-[1800px] mx-auto pointer-events-none mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col text-white"
          >
            <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase">
              Optimize
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mt-4 pl-[5vw]">
              <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase pointer-events-auto">
                <span className="italic font-serif font-light mr-4">&</span>Scale.
              </h1>
              <div className="max-w-md pb-6 pointer-events-auto">
                <p className="text-xl font-light text-white leading-relaxed mb-8">
                  {businessData.tagline} We turn static properties into highly optimized, high-yield assets.
                </p>
                <div className="flex items-center gap-4 border-t border-white pt-6">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Scroll to Explore</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutional Stats Ticker */}
      <section className="py-20 border-y border-black/10 bg-white relative z-20">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-black/10">
            {stats.map((stat, i) => (
              <div key={i} className="pl-6 first:pl-0 border-l border-black/10 first:border-0">
                <p className="text-4xl sm:text-6xl font-light tracking-tighter mb-4">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Vertical Card Stacking Technology Ecosystem */}
      <section ref={stackRef} className="h-[300vh] relative z-20">
        <div className="sticky top-0 h-screen bg-[#F4F4F0] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-12 overflow-hidden border-b border-black/10">
          
          <div className="w-full lg:w-5/12 z-20 flex flex-col justify-center">
             <h2 className="text-5xl sm:text-7xl lg:text-[80px] font-bold tracking-tighter uppercase mb-6 text-[#050505] leading-[0.9]">
               PropTech <br/> Ecosystem
             </h2>
             <p className="text-lg text-[#86868B] max-w-md leading-relaxed">
               We deploy military-grade software stacks to automate rent collection, maintenance routing, and owner payouts.
             </p>
          </div>

          <div className="w-full lg:w-6/12 relative h-[400px] sm:h-[500px]">
            {technologyStack.map((tech, i) => (
              <motion.div 
                key={i}
                style={{ y: transformsY[i], zIndex: i }}
                className="absolute inset-0 bg-white border border-black/10 rounded-[2rem] p-10 lg:p-14 flex flex-col justify-between shadow-[0_20px_60px_rgb(0,0,0,0.08)] overflow-hidden group origin-bottom"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4F4F0] rounded-full blur-[80px] group-hover:bg-[#EAEAEA] transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-[#F4F4F0]">
                    <Lock className="w-6 h-6 text-[#050505]" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light tracking-tighter mb-4 text-[#050505]">{tech.name}</h3>
                  <p className="text-lg lg:text-xl text-[#86868B] leading-relaxed max-w-md">{tech.desc}</p>
                </div>
                <div className="relative z-10 flex justify-end">
                   <div className="w-12 h-12 bg-[#050505] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Services Bento Grid */}
      <section id="services" className="py-40 bg-white relative z-20 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter uppercase leading-[0.9] max-w-4xl text-[#050505]">
              End-to-End <br/> <span className="text-[#86868B]">Management.</span>
            </h2>
            <p className="text-xl text-[#86868B] max-w-md">
              We handle every millimeter of the property lifecycle so you can focus on expanding your portfolio, not fixing leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Massive Hero Service */}
            <div 
              onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}
              className="md:col-span-8 bg-[#F4F4F0] rounded-[2rem] p-10 lg:p-16 border border-black/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop')] bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-black/10 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-500">
                    <Users className="w-8 h-8 text-[#050505] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B] group-hover:text-white/50 transition-colors">01</span>
                </div>
                <div>
                  <h3 className="text-5xl font-bold tracking-tighter mb-6 text-[#050505] group-hover:text-white transition-colors">{services[0].title}</h3>
                  <p className="text-xl text-[#86868B] group-hover:text-white/80 transition-colors max-w-xl leading-relaxed mb-8">{services[0].desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white text-[#86868B] transition-colors">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Square Service */}
            <div className="md:col-span-4 bg-[#F4F4F0] rounded-[2rem] p-10 lg:p-16 border border-black/5 group hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.05)] transition-all flex flex-col justify-between min-h-[400px]">
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-black/10">
                  <BarChart className="w-6 h-6 text-[#050505]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B]">02</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tighter mb-4 text-[#050505]">{services[2].title}</h3>
                <p className="text-[#86868B] leading-relaxed">{services[2].desc}</p>
              </div>
            </div>

            {/* Double Row Services */}
            {services.slice(1, 4).filter((_, i) => i !== 1).map((svc, i) => (
              <div key={i} className="md:col-span-6 bg-[#F4F4F0] rounded-[2rem] p-10 lg:p-16 border border-black/5 group hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.05)] transition-all flex flex-col justify-between min-h-[350px]">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-black/10">
                    <svc.icon className="w-6 h-6 text-[#050505]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B]">0{i+3}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter mb-4 text-[#050505]">{svc.title}</h3>
                  <p className="text-[#86868B] leading-relaxed max-w-md">{svc.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Scrub Text Section */}
      <section className="py-40 bg-white overflow-hidden border-y border-black/5">
        <motion.div style={{ x: textScrubX }} className="whitespace-nowrap flex items-center">
          <h2 className="text-[200px] font-bold tracking-tighter text-[#050505]/5 uppercase leading-none">
            Maximize Yield • Minimize Friction • Maximize Yield • Minimize Friction •
          </h2>
        </motion.div>
      </section>

      {/* High-End Contact & Onboarding Form */}
      <section id="contact" className="py-40 bg-[#F4F4F0] px-6 lg:px-12 relative z-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            
            <div>
              <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 text-[#050505]">
                Initiate <br/> Transfer.
              </h2>
              <p className="text-2xl text-[#86868B] font-light max-w-xl leading-relaxed mb-20">
                Ready to upgrade your portfolio management? Our onboarding team executes seamless property transitions in under 14 days.
              </p>

              <div className="grid sm:grid-cols-2 gap-12 border-t border-black/10 pt-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B] mb-4">Corporate HQ</p>
                  <p className="text-xl font-light text-[#050505]">{businessData.address}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B] mb-4">Partner Relations</p>
                  <p className="text-xl font-light text-[#050505] mb-2">{businessData.email}</p>
                  <p className="text-xl font-light text-[#050505]">{businessData.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 sm:p-16 rounded-[2rem] border border-black/10 shadow-xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-[#050505] flex items-center justify-center rounded-full text-white">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-light text-[#050505]">Request Management Proposal</h3>
              </div>

              <form className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="relative">
                    <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-black/20 pb-4 text-[#050505] text-xl focus:border-[#050505] outline-none transition-colors peer placeholder-transparent" id="fname" placeholder="First Name" />
                    <label htmlFor="fname" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-[#86868B] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 peer-placeholder-shown:text-[#86868B] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#050505]">First Name</label>
                  </div>
                  <div className="relative">
                    <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-black/20 pb-4 text-[#050505] text-xl focus:border-[#050505] outline-none transition-colors peer placeholder-transparent" id="lname" placeholder="Last Name" />
                    <label htmlFor="lname" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-[#86868B] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 peer-placeholder-shown:text-[#86868B] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#050505]">Last Name</label>
                  </div>
                </div>

                <div className="relative">
                  <input suppressHydrationWarning type="email" className="w-full bg-transparent border-b border-black/20 pb-4 text-[#050505] text-xl focus:border-[#050505] outline-none transition-colors peer placeholder-transparent" id="email" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-[#86868B] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 peer-placeholder-shown:text-[#86868B] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#050505]">Email Address</label>
                </div>

                <div className="relative">
                  <select suppressHydrationWarning className="w-full bg-transparent border-b border-black/20 pb-4 text-[#050505] text-xl focus:border-[#050505] outline-none transition-colors appearance-none cursor-pointer">
                    <option className="bg-white">Portfolio Size: 1-10 Units</option>
                    <option className="bg-white">Portfolio Size: 11-50 Units</option>
                    <option className="bg-white">Portfolio Size: 51-200 Units</option>
                    <option className="bg-white">Portfolio Size: 200+ Units (Institutional)</option>
                  </select>
                  <div className="absolute right-0 top-2 pointer-events-none">
                    <ChevronRight className="w-5 h-5 rotate-90 text-[#050505]" />
                  </div>
                </div>

                <button suppressHydrationWarning type="button" className="w-full bg-[#050505] hover:bg-black text-white py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.02] mt-8 flex items-center justify-center gap-3">
                  Submit Portfolio <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Industrial Footer */}
      <footer className="bg-white pt-32 pb-12 px-6 lg:px-12 border-t border-black/10 text-[#050505]">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
            <div>
               <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter uppercase mb-6">{businessData.name}</h2>
               <p className="text-[#86868B] font-light max-w-sm text-lg">
                 Setting the global standard for high-performance property asset management.
               </p>
            </div>

            <div className="flex flex-wrap gap-16 lg:gap-32">
               <div>
                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#050505] mb-8">Navigation</p>
                 <div className="flex flex-col gap-4 text-[#86868B]">
                   {navLinks.map(link => (
                     <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-[#050505] transition-colors">{link}</a>
                   ))}
                 </div>
               </div>
               <div>
                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#050505] mb-8">Legal</p>
                 <div className="flex flex-col gap-4 text-[#86868B]">
                   <a href="#" className="hover:text-[#050505] transition-colors">Privacy Policy</a>
                   <a href="#" className="hover:text-[#050505] transition-colors">Terms of Service</a>
                   <a href="#" className="hover:text-[#050505] transition-colors">Fair Housing</a>
                 </div>
               </div>
               <div>
                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#050505] mb-8">Connect</p>
                 <div className="flex flex-col gap-4 text-[#86868B]">
                   <a href="#" className="hover:text-[#050505] transition-colors">LinkedIn</a>
                   <a href="#" className="hover:text-[#050505] transition-colors">Twitter (X)</a>
                   <a href="#" className="hover:text-[#050505] transition-colors">Instagram</a>
                 </div>
               </div>
            </div>
          </div>

          <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-[#86868B] text-sm font-light">
              <ShieldCheck className="w-4 h-4" /> Fully Licensed & Insured Brokerage
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868B]">
              © {new Date().getFullYear()} {businessData.name}.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
