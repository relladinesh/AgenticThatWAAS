import React, { useState, useEffect, useRef } from "react";
import { TemplateProps } from "@/types";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Scale, 
  ArrowRight, 
  Shield, 
  Landmark, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  Play
} from "lucide-react";

export default function LawFirmPremiumT1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPractice, setHoveredPractice] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, mass: 0.27, stiffness: 55 });
  
  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const opacityHero = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  const { scrollYProgress: horizontalProgress } = useScroll({ 
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  const xTransform = useTransform(horizontalProgress, [0, 1], ["0%", "-70%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const name = data?.name || "Vanguard & Sterling";
  const tagline = data?.tagline || "Unrelenting Advocacy. Unprecedented Results.";
  const about = data?.about || "We represent the ambitious, the innovators, and the leaders. Operating exclusively at the highest echelons of corporate and civil litigation, our firm is built on a foundation of aggressive representation, unyielding ethical standards, and a legacy of landmark victories.";

  const practiceAreas = [
    { title: "Corporate Governance", desc: "Navigating regulatory frameworks and high-stakes board disputes.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { title: "Complex Litigation", desc: "Aggressive, strategic representation in multi-jurisdictional conflicts.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" },
    { title: "Mergers & Acquisitions", desc: "Structuring secure, highly profitable transitions and buyouts.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80" },
    { title: "Intellectual Property", desc: "Fierce defense of your proprietary assets and innovations.", img: "https://images.unsplash.com/photo-1505664159858-80a69620d18f?w=800&q=80" }
  ];

  return (
    <div ref={containerRef} className="bg-[#FCFBF9] text-[#1A1515] font-sans selection:bg-[#4A0404] selection:text-[#FCFBF9]">
      
      {/* CUSTOM CURSOR */}
      <motion.div 
        className="fixed w-10 h-10 rounded-full border border-[#4A0404] pointer-events-none z-[100] hidden lg:flex items-center justify-center mix-blend-multiply"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      >
        <div className="w-1.5 h-1.5 bg-[#C19B6C] rounded-full" />
      </motion.div>

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 px-8 py-8 bg-[#FCFBF9]/90 backdrop-blur-md border-b border-[#4A0404]/10 transition-all duration-500">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 border border-[#4A0404] flex items-center justify-center group-hover:bg-[#4A0404] transition-colors duration-500">
              <Scale className="w-5 h-5 text-[#4A0404] group-hover:text-[#FCFBF9] transition-colors duration-500" />
            </div>
            <span className="font-serif text-2xl tracking-widest uppercase text-[#1A1515]">
              {name.split(' ')[0]}
            </span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-[#1A1515] hover:text-[#4A0404] transition-colors"
          >
            Menu <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[110] bg-[#4A0404] flex flex-col"
          >
            <div className="p-8 max-w-[1400px] mx-auto w-full flex justify-between items-center border-b border-white/20">
              <span className="font-serif text-2xl tracking-widest uppercase text-[#FCFBF9]">
                {name.split(' ')[0]}
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-[#C19B6C] hover:text-[#FCFBF9] transition-colors"
              >
                Close <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 flex items-center max-w-[1400px] mx-auto w-full p-8">
              <div className="flex flex-col gap-4">
                {[
                  { name: 'Firm Overview', id: 'overview' }, 
                  { name: 'Practice Areas', id: 'practice' }, 
                  { name: 'Partners', id: 'partners' }, 
                  { name: 'Contact', id: 'contact' }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
                    key={item.name}
                  >
                    <a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-8 w-max">
                      <span className="text-[#C19B6C] font-serif text-xl italic">0{i + 1}</span>
                      <span className="text-5xl md:text-7xl font-serif text-[#FCFBF9]/60 group-hover:text-[#FCFBF9] transition-colors duration-500 uppercase tracking-tighter">
                        {item.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Cashmere & Oxblood */}
      <section className="relative min-h-screen w-full flex items-center pt-32 pb-20 overflow-hidden bg-[#FCFBF9]">
        <div className="max-w-[1400px] mx-auto w-full px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div style={{ opacity: opacityHero, y: yText }} className="lg:col-span-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 1 }}
              className="h-[2px] bg-[#4A0404] mb-8"
            ></motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-[6.5rem] font-serif leading-[1] tracking-tight text-[#1A1515] uppercase mb-8"
            >
              Excellence. <br/>
              <span className="text-[#4A0404] italic lowercase font-light">precision.</span> <br/>
              Results.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-gray-600 text-xl font-light max-w-lg leading-relaxed border-l border-[#C19B6C] pl-6"
            >
              {tagline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              <a href="#contact" className="relative group overflow-hidden border border-[#4A0404] text-[#4A0404] px-10 py-5 font-bold tracking-widest text-sm uppercase transition-colors hover:text-[#FCFBF9]">
                <span className="relative z-10 flex items-center gap-3">Consultation <ArrowRight className="w-4 h-4" /></span>
                <div className="absolute inset-0 bg-[#4A0404] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#1A1515]/20 flex items-center justify-center group-hover:border-[#4A0404] transition-colors">
                  <Play className="w-4 h-4 text-[#1A1515] group-hover:text-[#4A0404] ml-1 transition-colors" />
                </div>
                <span className="text-xs tracking-[0.2em] font-semibold text-[#1A1515] uppercase group-hover:text-[#4A0404] transition-colors">Firm Overview</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yBg }} 
            className="lg:col-span-5 h-[60vh] lg:h-[80vh] relative w-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#C19B6C]/10 mix-blend-multiply z-10"></div>
            <img 
              src={data?.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80"} 
              alt="Law Firm Architecture" 
              className="w-full h-full object-cover scale-110"
            />
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#4A0404] z-20 m-6"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#4A0404] z-20 m-6"></div>
          </motion.div>
        </div>
      </section>

      {/* STATS TICKER */}
      <section className="border-y border-[#1A1515]/10 bg-white py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1A1515]/10">
          {[
            { num: "$5B+", lbl: "Recovered" },
            { num: "40+", lbl: "Years History" },
            { num: "98%", lbl: "Success Rate" },
            { num: "Top 50", lbl: "Global Ranking" }
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              key={i} 
              className={`text-center ${i === 0 ? "pl-0" : ""}`}
            >
              <div className="text-4xl md:text-5xl font-serif text-[#1A1515] mb-2">{stat.num}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A0404]">{stat.lbl}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY REVEAL */}
      <section id="overview" className="py-32 lg:py-48 px-8 relative bg-[#FCFBF9]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-[2px] bg-[#4A0404] mb-8"
              ></motion.div>
              <h2 className="text-5xl font-serif text-[#1A1515] uppercase tracking-tighter mb-6">Our Philosophy</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                We believe that the best defense is an overwhelming offense. We leave nothing to chance. Our strategies are meticulous, aggressive, and highly bespoke.
              </p>
              <a href="#practices" className="text-[#4A0404] text-sm uppercase tracking-widest font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View Expertise <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-16">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-[#1A1515] leading-[1.3] text-justify"
            >
              {about}
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 border-t border-[#1A1515]/10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-white p-10 border border-[#1A1515]/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <Shield className="w-10 h-10 text-[#4A0404] mb-6" />
                <h3 className="text-2xl font-serif text-[#1A1515] mb-4">Uncompromising Defense</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">We construct impenetrable legal strategies designed to protect your assets, reputation, and freedom.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-white p-10 border border-[#1A1515]/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <Landmark className="w-10 h-10 text-[#4A0404] mb-6" />
                <h3 className="text-2xl font-serif text-[#1A1515] mb-4">Strategic Offense</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">When conflict is unavoidable, we strike with precision and overwhelming legal force to secure favorable outcomes.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL PRACTICE AREAS */}
      <section id="practice" ref={horizontalRef} className="h-[300vh] bg-white relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-8 border-y border-[#1A1515]/5">
          <div className="max-w-[1400px] mx-auto w-full mb-16">
            <h2 className="text-5xl font-serif text-[#1A1515] uppercase tracking-tighter">Areas of Practice</h2>
          </div>
          
          <motion.div style={{ x: xTransform }} className="flex gap-12 px-8 md:px-[calc((100vw-1400px)/2)] w-max">
            {practiceAreas.map((area, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => setHoveredPractice(idx)}
                onMouseLeave={() => setHoveredPractice(null)}
                className="w-[85vw] md:w-[600px] h-[550px] relative group overflow-hidden border border-[#1A1515]/10 bg-[#FCFBF9] flex flex-col"
              >
                <div className="h-1/2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#4A0404]/10 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img src={area.img} alt={area.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                </div>
                
                <div className="h-1/2 p-10 flex flex-col justify-between bg-white transition-colors duration-700">
                  <div className="text-[#C19B6C] font-serif text-4xl italic mb-4">0{idx + 1}</div>
                  <div>
                    <h3 className="text-3xl font-serif text-[#1A1515] mb-4">{area.title}</h3>
                    <p className="text-gray-600 font-light max-w-sm">{area.desc}</p>
                  </div>
                  <div className="mt-6">
                    <span className="text-[#4A0404] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-[#4A0404] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-30"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP / PARTNERS */}
      <section id="partners" className="py-32 lg:py-48 bg-[#FCFBF9]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1A1515]/10 pb-12">
            <div>
              <h2 className="text-5xl font-serif text-[#1A1515] uppercase tracking-tighter mb-4">Partners</h2>
              <p className="text-gray-600 font-light max-w-xl">Our attorneys are recognized globally as leading authorities in their respective fields.</p>
            </div>
            <a href="#" className="hidden md:inline-flex border border-[#4A0404] text-[#4A0404] px-8 py-4 font-bold tracking-widest text-xs uppercase hover:bg-[#4A0404] hover:text-white transition-colors">
              View All Attorneys
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Jonathan Sterling", role: "Senior Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
              { name: "Eleanor Vance", role: "Head of Litigation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
              { name: "Marcus Wright", role: "Corporate Chair", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" }
            ].map((partner, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                key={i} 
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-[#1A1515]/5 bg-gray-100">
                  <div className="absolute inset-0 bg-[#4A0404]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img src={partner.img} alt={partner.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1515] mb-2 group-hover:text-[#4A0404] transition-colors">{partner.name}</h3>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#C19B6C] mb-4">{partner.role}</div>
                <div className="h-px w-12 bg-[#1A1515]/20 group-hover:w-full group-hover:bg-[#4A0404] transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LUXURY CONTACT FORM */}
      <section id="contact" className="bg-white py-32 px-8 border-t border-[#1A1515]/10 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-[#C19B6C]/20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FCFBF9] rounded-full transform -translate-x-1/2 translate-y-1/2 -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[2px] w-16 bg-[#4A0404]"></div>
              <span className="text-[#4A0404] text-xs font-bold tracking-[0.3em] uppercase">Private Counsel</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-[#1A1515] uppercase tracking-tighter mb-12 leading-[0.9]">
              Secure Your <br/> Representation.
            </h2>
            <p className="text-gray-600 font-light text-lg mb-16 max-w-md leading-relaxed">
              We offer bespoke legal counsel for discerning clients. Reach out to schedule a private, strictly confidential consultation.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 border border-[#1A1515]/10 flex items-center justify-center text-[#4A0404] group-hover:bg-[#4A0404] group-hover:text-white transition-colors duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 group-hover:text-[#4A0404] transition-colors">Priority Line</div>
                  <div className="text-2xl font-serif text-[#1A1515]">{data?.phone || "+1 (800) 555-0199"}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 border border-[#1A1515]/10 flex items-center justify-center text-[#4A0404] group-hover:bg-[#4A0404] group-hover:text-white transition-colors duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 group-hover:text-[#4A0404] transition-colors">Global Headquarters</div>
                  <div className="text-xl font-serif text-[#1A1515] max-w-xs leading-relaxed">{data?.address || "100 Prestige Tower, New York, NY"}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FCFBF9] p-12 lg:p-16 border border-[#1A1515]/10 relative shadow-2xl shadow-black/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4A0404] to-transparent"></div>
            <h3 className="text-3xl font-serif text-[#1A1515] mb-12">Confidential Inquiry</h3>
            <form onSubmit={e => e.preventDefault()} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative z-0 w-full group">
                  <input type="text" className="block py-4 px-0 w-full text-lg text-[#1A1515] bg-transparent border-0 border-b border-[#1A1515]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A0404] peer" placeholder=" " required />
                  <label className="absolute text-sm font-semibold text-gray-500 tracking-widest uppercase duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4A0404] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="relative z-0 w-full group">
                  <input type="text" className="block py-4 px-0 w-full text-lg text-[#1A1515] bg-transparent border-0 border-b border-[#1A1515]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A0404] peer" placeholder=" " required />
                  <label className="absolute text-sm font-semibold text-gray-500 tracking-widest uppercase duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4A0404] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                </div>
              </div>
              <div className="relative z-0 w-full group">
                <input type="email" className="block py-4 px-0 w-full text-lg text-[#1A1515] bg-transparent border-0 border-b border-[#1A1515]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A0404] peer" placeholder=" " required />
                <label className="absolute text-sm font-semibold text-gray-500 tracking-widest uppercase duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4A0404] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Corporate Email</label>
              </div>
              <div className="relative z-0 w-full group pt-4">
                <textarea rows={4} className="block py-4 px-0 w-full text-lg text-[#1A1515] bg-transparent border-0 border-b border-[#1A1515]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A0404] peer resize-none" placeholder=" " required></textarea>
                <label className="absolute text-sm font-semibold text-gray-500 tracking-widest uppercase duration-300 transform -translate-y-6 scale-75 top-8 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4A0404] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nature of Legal Matter</label>
              </div>
              
              <button className="w-full bg-[#4A0404] text-white py-6 font-bold tracking-widest uppercase text-sm hover:bg-[#1A1515] transition-colors mt-8 flex items-center justify-center gap-3">
                Request Board Review <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1515] py-24 px-8 text-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <Scale className="w-6 h-6 text-[#C19B6C]" />
            <span className="font-serif text-3xl tracking-widest uppercase text-white">
              {name.split(' ')[0]}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="#overview" className="hover:text-[#C19B6C] transition-colors">Overview</a>
            <a href="#practice" className="hover:text-[#C19B6C] transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-[#C19B6C] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#C19B6C] transition-colors">Privacy</a>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-24 pt-12 border-t border-white/10 text-center text-xs font-medium text-gray-500 uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</span>
          <span>Attorney Advertising. Prior results do not guarantee a similar outcome.</span>
        </div>
      </footer>
    </div>
  );
}
