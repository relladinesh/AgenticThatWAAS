import React, { useState, useRef, useEffect } from "react";
import { TemplateProps } from "@/types";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Scale,
  ArrowUpRight,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

export default function LegalLawFirmT3({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const yParallax = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(smoothProgress, [0, 0.5], ["0%", "50%"]);
  const opacityHero = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const name = data?.name || "Kensington & Wright";
  const tagline = data?.tagline || "Elite Counsel. Uncompromising Results.";
  const about = data?.about || "Operating at the intersection of complex litigation and high-stakes corporate law. We don't just interpret the law—we shape it. Our partners bring unparalleled strategic foresight to the most challenging legal battles.";
  
  const services = [
    "Corporate Restructuring",
    "High-Stakes Litigation",
    "Intellectual Property",
    "International Arbitration",
    "White-Collar Defense",
    "Mergers & Acquisitions"
  ];

  const caseImages = [
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "https://images.unsplash.com/photo-1505664159858-80a69620d18f?w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
  ];

  const phone = data?.phone || "+1 (888) 555-0199";
  const email = data?.email || "partners@kensington.law";

  return (
    <div ref={containerRef} className="bg-[#FFFFFF] text-[#0A0A0A] font-sans selection:bg-[#0047FF] selection:text-white overflow-hidden min-h-screen relative">
      
      {/* ADVANCED CUSTOM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#0047FF] pointer-events-none z-[110] hidden lg:flex items-center justify-center mix-blend-difference"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(0, 71, 255, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-[#0047FF] rounded-full"
          animate={{ opacity: isHovering ? 0 : 1 }}
        />
      </motion.div>

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 px-8 py-8 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="font-serif text-3xl font-bold tracking-tighter text-[#0A0A0A] flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center group-hover:bg-[#0047FF] transition-colors duration-500">
              <Scale className="w-5 h-5" />
            </div>
            <span className="group-hover:text-[#0047FF] transition-colors duration-500">{name.split(' ')[0]}.</span>
          </div>
          <button 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsMenuOpen(true)}
            className="text-[#0A0A0A] hover:text-[#0047FF] transition-colors flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold"
          >
            Menu <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#0047FF] text-white p-8 flex flex-col"
          >
            <div className="max-w-[1600px] mx-auto w-full flex justify-between items-center py-2">
              <div className="font-serif text-3xl font-bold tracking-tighter">
                {name.split(' ')[0]}.
              </div>
              <button 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold hover:text-black transition-colors"
              >
                Close <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full">
              <div className="text-[10vw] sm:text-[8vw] font-bold leading-[0.85] tracking-tighter flex flex-col gap-8 uppercase relative z-10">
                {[
                  { name: "The Firm", id: "firm" }, 
                  { name: "Expertise", id: "expertise" }, 
                  { name: "Inquire", id: "contact" }
                ].map((item, i) => (
                  <div key={item.name} className="overflow-hidden">
                    <motion.a 
                      href={`#${item.id}`} 
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: [0.33, 1, 0.68, 1] }}
                      className="hover:text-black transition-colors inline-block w-max group relative"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1vw] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                    </motion.a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STARK BRUTALIST HERO WITH PARALLAX & WATERMARK */}
      <section className="relative pt-48 pb-20 px-8 min-h-screen flex flex-col justify-between max-w-[1600px] mx-auto z-10">
        
        {/* Massive Background Watermark */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-gray-50 opacity-40 whitespace-nowrap z-[-1] pointer-events-none select-none tracking-tighter"
        >
          {name.split(' ')[0].toUpperCase()}
        </motion.div>

        <motion.div style={{ opacity: opacityHero, y: yText }} className="w-full">
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "6rem" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2px] bg-[#0047FF] mb-12"
          ></motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-[14vw] sm:text-[11rem] font-bold leading-[0.8] tracking-tighter uppercase text-[#0A0A0A]"
            >
              Law, <br/> 
              <span className="text-[#0047FF]">Refined.</span>
            </motion.h1>
          </div>
        </motion.div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-md text-xl text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-6"
          >
            {tagline}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
          >
            <a 
              href="#contact" 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="w-36 h-36 rounded-full bg-[#0047FF] text-white flex flex-col items-center justify-center text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 hover:bg-[#0A0A0A] transition-all duration-500 shadow-2xl shadow-[#0047FF]/30 group"
            >
              <ArrowUpRight className="w-8 h-8 mb-2 group-hover:rotate-45 transition-transform duration-500" />
              Engage
            </a>
          </motion.div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE MARQUEE MIX */}
      <section className="relative overflow-hidden border-y border-gray-100 bg-[#FAFAFA] py-12">
        <div className="whitespace-nowrap flex font-bold text-[6vw] tracking-tighter leading-none items-center opacity-10 text-black">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex gap-16 pr-16"
          >
            <span>STRATEGY</span>
            <span className="text-[#0047FF] text-transparent stroke-text" style={{ WebkitTextStroke: "2px #0047FF" }}>INTEGRITY</span>
            <span>EXCELLENCE</span>
            <span className="text-[#0047FF] text-transparent stroke-text" style={{ WebkitTextStroke: "2px #0047FF" }}>AUTHORITY</span>
            <span>STRATEGY</span>
            <span className="text-[#0047FF] text-transparent stroke-text" style={{ WebkitTextStroke: "2px #0047FF" }}>INTEGRITY</span>
            <span>EXCELLENCE</span>
            <span className="text-[#0047FF] text-transparent stroke-text" style={{ WebkitTextStroke: "2px #0047FF" }}>AUTHORITY</span>
          </motion.div>
        </div>
      </section>

      {/* STATEMENT / ABOUT */}
      <section id="firm" className="py-32 lg:py-48 px-8 bg-white relative">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#0047FF] sticky top-40 flex items-center gap-4"
              >
                <div className="w-8 h-[2px] bg-[#0047FF]"></div>
                The Firm
              </motion.div>
            </div>
            <div className="lg:col-span-9">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl lg:text-[5rem] font-serif leading-[1.1] tracking-tight text-[#0A0A0A]"
              >
                {about}
              </motion.h2>
              
              <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { label: "Founded", val: "1994" },
                  { label: "Partners", val: "24" },
                  { label: "Capital Won", val: "$2.4B" },
                  { label: "Global Reach", val: "12 Hubs" }
                ].map((stat, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    key={i}
                    className="border-t-4 border-gray-100 hover:border-[#0047FF] pt-8 transition-colors duration-500 group"
                  >
                    <div className="text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-[#0A0A0A] group-hover:text-[#0047FF] transition-colors duration-500">{stat.val}</div>
                    <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 group-hover:text-black transition-colors duration-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC BENTO GRID PRACTICES */}
      <section id="expertise" className="py-32 lg:py-48 px-8 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-[#0A0A0A] uppercase leading-[0.8]">Expertise.</h2>
            <p className="max-w-sm text-lg text-gray-600 font-medium mb-4">We accept cases selectively to ensure dedicated, high-caliber representation for every client.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative bg-white border border-gray-200 overflow-hidden flex flex-col justify-between min-h-[420px] cursor-pointer"
              >
                {/* Background Image Reveal */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                   <div className="absolute inset-0 bg-[#0047FF] opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                   <img src={caseImages[index]} className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700" alt={service} />
                </div>
                
                <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                  <div className="text-gray-200 group-hover:text-white/50 transition-colors duration-500 font-bold text-7xl tracking-tighter">
                    0{index + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0A0A0A] group-hover:text-white transition-colors duration-500 mb-6 tracking-tight pr-8">{service}</h3>
                    <div className="text-gray-500 font-medium flex items-center gap-3 group-hover:text-white transition-colors duration-500 uppercase tracking-widest text-xs">
                      Explore Segment <ChevronRight className="w-4 h-4 transform group-hover:translate-x-3 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0047FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG PARALLAX IMAGE REVEAL */}
      <section className="h-[80vh] w-full relative overflow-hidden">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[140%]">
          <img 
            src={data?.image || "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=2000&q=80"} 
            alt="Attorneys" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80 mix-blend-multiply"></div>
        <div className="absolute bottom-16 left-8 max-w-[1600px] mx-auto w-full px-8 flex items-end justify-between z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase max-w-2xl leading-none">
            Setting the <span className="text-[#0047FF]">Standard.</span>
          </h2>
          <div className="hidden md:flex gap-4">
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT - Bold & Stark */}
      <footer id="contact" className="bg-white pt-32 pb-12 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 border-b border-gray-100 pb-32">
            <div>
              <h2 className="text-7xl md:text-[8rem] font-bold tracking-tighter mb-12 uppercase text-[#0A0A0A] leading-none">Inquire.</h2>
              <div className="space-y-12 mt-24">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#0047FF] mb-4">Direct Email</div>
                  <a href={`mailto:${email}`} className="block text-4xl font-serif text-[#0A0A0A] hover:text-[#0047FF] transition-colors">{email}</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#0047FF] mb-4">Direct Phone</div>
                  <a href={`tel:${phone}`} className="block text-4xl font-serif text-[#0A0A0A] hover:text-[#0047FF] transition-colors">{phone}</a>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FAFAFA] p-12 lg:p-16 border border-gray-100 shadow-2xl shadow-black/5">
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-12 tracking-tight">Confidential Case Review</h3>
              <form onSubmit={e => e.preventDefault()} className="space-y-10">
                <div className="relative border-b border-gray-300 focus-within:border-[#0047FF] transition-colors pb-4 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 group-focus-within:text-[#0047FF] mb-2 block transition-colors">Full Legal Name</label>
                  <input type="text" className="w-full bg-transparent outline-none text-2xl font-bold text-[#0A0A0A] placeholder-gray-200" placeholder="John Doe" />
                </div>
                <div className="relative border-b border-gray-300 focus-within:border-[#0047FF] transition-colors pb-4 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 group-focus-within:text-[#0047FF] mb-2 block transition-colors">Matter Overview</label>
                  <textarea rows={4} className="w-full bg-transparent outline-none text-xl font-medium text-[#0A0A0A] placeholder-gray-200 resize-none" placeholder="Brief description..."></textarea>
                </div>
                <button 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full py-8 bg-[#0047FF] text-white font-bold tracking-[0.3em] uppercase text-xs hover:bg-[#0A0A0A] transition-all duration-500 mt-8"
                >
                  Submit Confidential Inquiry
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
            </div>
            <div className="flex gap-10">
              <span className="cursor-pointer hover:text-[#0047FF] transition-colors">Privacy</span>
              <span className="cursor-pointer hover:text-[#0047FF] transition-colors">Terms</span>
              <span className="cursor-pointer hover:text-[#0047FF] transition-colors">Attorney Advertising</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
