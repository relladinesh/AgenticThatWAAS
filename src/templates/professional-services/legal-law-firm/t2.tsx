import React, { useState } from "react";
import { TemplateProps } from "@/types";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Menu, 
  X,
  Plus,
  Shield
} from "lucide-react";

export default function LegalLawFirmT2({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [hoveredCase, setHoveredCase] = useState<number>(0);

  const { scrollYProgress } = useScroll();
  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const name = data?.name || "Sinclair & Harrington";
  const tagline = data?.tagline || "Providing discerning counsel for complex civil, wealth, and appellate matters.";
  const about = data?.about || "We represent high-net-worth individuals, elite institutions, and influential families. Our approach is characterized by absolute discretion, rigorous intellect, and a commitment to preserving our clients' legacy across generations.";

  const services = [
    "Wealth & Estate Planning",
    "High-Net-Worth Divorce",
    "Appellate Litigation",
    "Tax Controversies",
    "Trust & Fiduciary Disputes",
    "White-Collar Defense"
  ];

  const caseImages = [
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    "https://images.unsplash.com/photo-1505664159858-80a69620d18f?w=1600&q=80"
  ];

  return (
    <div className="bg-[#FDFDFB] text-[#111814] font-sans overflow-x-hidden selection:bg-[#2A3B32] selection:text-[#FDFDFB]">
      
      {/* NAVIGATION - MINIMAL & PINNED */}
      <nav className="fixed w-full z-50 px-8 py-6 bg-[#FDFDFB]/90 backdrop-blur-xl border-b border-[#2A3B32]/10 transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#2A3B32]/20 flex items-center justify-center rounded-full">
              <Scale className="w-5 h-5 text-[#2A3B32]" />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-[#111814]">
              {name}
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            <a href="#firm" className="text-xs font-bold tracking-[0.2em] uppercase text-[#111814] hover:text-[#8C7A6B] transition-colors">The Firm</a>
            <a href="#expertise" className="text-xs font-bold tracking-[0.2em] uppercase text-[#111814] hover:text-[#8C7A6B] transition-colors">Expertise</a>
            <a href="#results" className="text-xs font-bold tracking-[0.2em] uppercase text-[#111814] hover:text-[#8C7A6B] transition-colors">Results</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hidden md:inline-flex px-8 py-4 bg-[#2A3B32] text-[#FDFDFB] text-xs font-bold tracking-widest uppercase hover:bg-[#111814] transition-colors rounded-full shadow-lg shadow-[#2A3B32]/20">
              Schedule Consultation
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-[#111814]">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[100] bg-[#FDFDFB] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16 border-b border-gray-200 pb-6">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#111814]">{name}</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-[#111814]" />
              </button>
            </div>
            <div className="flex flex-col gap-10 text-4xl font-serif">
              <a href="#firm" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8C7A6B] transition-colors">The Firm</a>
              <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8C7A6B] transition-colors">Expertise</a>
              <a href="#results" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8C7A6B] transition-colors">Results</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8C7A6B] transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ASYMMETRIC HERO */}
      <section className="pt-48 pb-20 px-8 min-h-screen flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
        <motion.div style={{ scale: scaleHero, opacity: opacityHero }} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#2A3B32]/5 border border-[#2A3B32]/10 text-[#2A3B32] text-xs font-bold tracking-[0.2em] uppercase"
            >
              <div className="w-2 h-2 rounded-full bg-[#2A3B32]"></div>
              Bespoke Legal Representation
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif text-[#111814] leading-[1] tracking-tight"
            >
              Preserving <br/>
              <span className="italic font-light text-[#8C7A6B]">legacy</span> <br/>
              through <br/>
              counsel.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl text-gray-600 font-light max-w-xl leading-relaxed"
            >
              {tagline}
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
              <a href="#contact" className="inline-flex items-center gap-4 pb-2 border-b-2 border-[#111814] text-[#111814] font-bold uppercase tracking-widest text-sm hover:text-[#8C7A6B] hover:border-[#8C7A6B] transition-colors group">
                Begin Discussion <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 h-[70vh] relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl"
            >
              <img 
                src={data?.image || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"} 
                alt="Law Office" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#8C7A6B]/10 mix-blend-multiply pointer-events-none"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-20 bottom-20 bg-white p-8 rounded-2xl shadow-xl max-w-sm border border-gray-100"
            >
              <p className="font-serif text-lg italic text-[#111814] leading-relaxed">
                "They possess a rare combination of sheer intellectual horsepower and profound courtroom presence."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-px bg-[#8C7A6B]"></div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#8C7A6B]">Chambers Global</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT TIMELINE GRID */}
      <section id="firm" className="py-32 px-8 max-w-7xl mx-auto bg-white rounded-[3rem] my-20 shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8C7A6B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#2A3B32] mb-6">The Firm</h2>
            <div className="text-5xl lg:text-6xl font-serif text-[#111814] leading-[1.1] mb-10">Discretion.<br/>Authority.<br/>Trust.</div>
            <p className="text-gray-600 font-light leading-relaxed text-lg mb-10">
              {about}
            </p>
            <div className="flex gap-12 pt-10 border-t border-gray-200">
              <div>
                <div className="text-5xl font-serif text-[#2A3B32] mb-2">100+</div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-500">Years Collective</div>
              </div>
              <div>
                <div className="text-5xl font-serif text-[#2A3B32] mb-2">Tier 1</div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-500">National Ranking</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-12">
            {[
              { year: "1994", title: "Foundation", desc: "Established with a focus on unyielding representation for select private clients." },
              { year: "2005", title: "Expansion", desc: "Broadened our expertise to encompass international tax controversies and complex trust litigation." },
              { year: "2024", title: "Excellence", desc: "Recognized universally as the definitive counsel for high-net-worth preservation." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border border-[#8C7A6B] flex items-center justify-center text-[#8C7A6B] font-serif text-lg group-hover:bg-[#8C7A6B] group-hover:text-white transition-colors duration-500">
                    {item.year}
                  </div>
                  {idx !== 2 && <div className="w-px h-24 bg-gray-200 my-4 group-hover:bg-[#8C7A6B] transition-colors duration-500"></div>}
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-serif text-[#111814] mb-3 group-hover:text-[#2A3B32] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDING ACCORDION SERVICES */}
      <section id="expertise" className="py-32 px-8 max-w-5xl mx-auto">
        <h2 className="text-6xl font-serif text-[#111814] mb-6 text-center">Core Expertise</h2>
        <p className="text-center text-gray-500 font-light max-w-xl mx-auto mb-20 text-lg">
          We limit our practice exclusively to areas where we can deliver unparalleled strategic advantage.
        </p>
        
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {services.map((service, idx) => (
            <div key={idx} className="group">
              <button 
                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                className="w-full py-10 flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-8">
                  <span className={`font-serif italic text-xl transition-colors ${activeAccordion === idx ? "text-[#8C7A6B]" : "text-gray-300"}`}>
                    0{idx + 1}
                  </span>
                  <span className={`font-serif text-3xl md:text-4xl transition-colors ${activeAccordion === idx ? "text-[#2A3B32]" : "text-[#111814] group-hover:text-[#8C7A6B]"}`}>
                    {service}
                  </span>
                </div>
                <span className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${activeAccordion === idx ? "bg-[#2A3B32] border-[#2A3B32] text-white rotate-45" : "border-gray-200 text-gray-400 group-hover:border-[#8C7A6B] group-hover:text-[#8C7A6B]"}`}>
                  <Plus className="w-6 h-6" />
                </span>
              </button>
              <AnimatePresence>
                {activeAccordion === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 flex flex-col md:flex-row gap-12 items-center pl-16">
                      <div className="md:w-1/2 text-gray-600 font-light leading-relaxed text-lg">
                        We provide meticulous, aggressive representation in {service.toLowerCase()}. Our dedicated team ensures that every strategic avenue is explored to protect your interests and secure favorable outcomes against formidable opposition.
                        
                        <div className="mt-8 flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2A3B32] cursor-pointer hover:text-[#8C7A6B] transition-colors group/link">
                          Read Case Precedents <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                        </div>
                      </div>
                      <div className="md:w-1/2 h-64 w-full bg-gray-100 rounded-[2rem] overflow-hidden shadow-inner">
                        <img src={caseImages[idx % 3]} alt={service} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* IMMERSIVE HOVER CASE STUDIES (LIGHT MODE ADAPTATION) */}
      <section id="results" className="py-32 px-8 bg-[#F5F4F0] relative overflow-hidden rounded-[3rem] mx-4 md:mx-8 my-20 border border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto relative z-20">
          <h2 className="text-[#8C7A6B] text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center">Landmark Results</h2>
          <div className="flex flex-col gap-12">
            {[
              { title: "Estate of Vanderbilt v. State", value: "$45M Preserved" },
              { title: "Corporate Divestiture Settlement", value: "$120M Reclaimed" },
              { title: "Landmark Trust Reformation", value: "Fiduciary Victory" }
            ].map((study, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredCase(idx)}
                className="group border-b border-gray-300 pb-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-8">
                  <div className="text-[#8C7A6B] font-serif text-2xl italic opacity-50 group-hover:opacity-100 transition-opacity duration-300">0{idx + 1}</div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111814] group-hover:text-[#2A3B32] transition-colors duration-500 tracking-tight">
                    {study.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-[#8C7A6B] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    {study.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Background Image linked to hover state */}
        <AnimatePresence mode="wait">
          <motion.img 
            key={hoveredCase}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            src={caseImages[hoveredCase]}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none mix-blend-multiply grayscale"
          />
        </AnimatePresence>
      </section>

      {/* HIGH-END CONTACT */}
      <section id="contact" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-5/12">
            <h2 className="text-6xl lg:text-7xl font-serif text-[#111814] mb-8 leading-[1.1]">Engage <br/><span className="text-[#8C7A6B] italic font-light">Our Firm.</span></h2>
            <p className="text-gray-500 font-light text-lg mb-16 max-w-md leading-relaxed">
              We offer bespoke legal counsel for discerning clients. Reach out to schedule a private, strictly confidential consultation.
            </p>
            
            <div className="space-y-10 border-l border-gray-200 pl-8">
              <div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8C7A6B]" /> Direct Line
                </div>
                <div className="text-3xl font-serif text-[#111814]">{data?.phone || "+1 (800) 555-0199"}</div>
              </div>
              <div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#8C7A6B]" /> Private Office
                </div>
                <div className="text-xl font-serif text-[#111814] max-w-xs leading-relaxed">{data?.address || "One Financial Center, Penthouse Level, Boston, MA"}</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 bg-white p-12 lg:p-16 rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/50">
            <h3 className="text-3xl font-serif text-[#111814] mb-10">Request an Appointment</h3>
            <form onSubmit={e => e.preventDefault()} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">First Name</label>
                  <input type="text" className="w-full bg-[#FDFDFB] border border-gray-200 px-5 py-4 focus:outline-none focus:border-[#2A3B32] focus:ring-1 focus:ring-[#2A3B32] transition-all rounded-xl" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Last Name</label>
                  <input type="text" className="w-full bg-[#FDFDFB] border border-gray-200 px-5 py-4 focus:outline-none focus:border-[#2A3B32] focus:ring-1 focus:ring-[#2A3B32] transition-all rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Email Address</label>
                <input type="email" className="w-full bg-[#FDFDFB] border border-gray-200 px-5 py-4 focus:outline-none focus:border-[#2A3B32] focus:ring-1 focus:ring-[#2A3B32] transition-all rounded-xl" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Matter Description</label>
                <textarea rows={4} className="w-full bg-[#FDFDFB] border border-gray-200 px-5 py-4 focus:outline-none focus:border-[#2A3B32] focus:ring-1 focus:ring-[#2A3B32] transition-all rounded-xl resize-none"></textarea>
              </div>
              <button className="w-full bg-[#2A3B32] text-white py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#111814] transition-colors rounded-xl shadow-lg shadow-[#2A3B32]/20 mt-4">
                Submit Confidential Request
              </button>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center mt-6 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3" /> Secure & Encrypted Transmission
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-100 pb-12">
          <div className="font-serif font-bold text-3xl tracking-tight text-[#111814] flex items-center gap-4">
            <Scale className="w-8 h-8 text-[#8C7A6B]" /> {name}
          </div>
          <div className="flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            <a href="#firm" className="hover:text-[#2A3B32] transition-colors">The Firm</a>
            <a href="#expertise" className="hover:text-[#2A3B32] transition-colors">Expertise</a>
            <a href="#results" className="hover:text-[#2A3B32] transition-colors">Results</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold gap-6">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-[#111814] transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-[#111814] transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-[#111814] transition-colors">Disclaimers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
