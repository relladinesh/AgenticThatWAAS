
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight, 
  Layers, 
  Code, 
  Cpu, 
  Globe2,
  Mail,
  Phone,
  Sparkles
} from "lucide-react";

export default function GeneralTemplate6({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()) as any);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "Nexus Systems";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Building the infrastructure of tomorrow.";
  const about = data?.about || "We provide cutting-edge solutions designed to scale. Our platforms are built for resilience, speed, and uncompromising quality.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Machine Learning",
    "Cloud Infrastructure",
    "Distributed Systems",
    "Quantum Security"
  ];
  const email = data?.email || "systems@nexus.io";
  const phone = data?.phone || "+1 (800) 999-8888";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-[#8B5CF6] selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-transparent blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-[#3B82F6] to-transparent blur-[120px]"></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Layers className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-wide text-white">{name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Vision</a>
            <a href="#services" className="hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="hover:text-white transition-colors">Connect</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-sm">
              Initialize
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden">
              <div className="px-6 py-6 space-y-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-300">Vision</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-300">Stack</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-300">Connect</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 min-h-screen flex items-center justify-center">
        <div className="max-w-[90rem] mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" /> Next Generation
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Design the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]">future.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              {tagline}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <a href="#services" className="bg-white hover:bg-slate-200 text-black px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2 group">
                Explore Systems <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-[80px] z-0"></div>
            <div className="relative z-10 rounded-[2rem] bg-white/5 border border-white/10 p-2 backdrop-blur-sm shadow-2xl">
               <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3]">
                 <img src={getImg("https://images.unsplash.com/photo-1550751827-4bd374c3f58b", 0, data?.image)} className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000" alt="Tech" />
               </div>
            </div>
            
            {/* Floating Tech Elements */}
            <motion.div style={{ y: yParallaxFast }} className="absolute -left-10 top-10 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md z-20">
              <Code className="w-8 h-8 text-[#3B82F6]" />
            </motion.div>
            <motion.div style={{ y: yParallaxSlow }} className="absolute -right-8 bottom-20 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md z-20">
              <Cpu className="w-8 h-8 text-[#8B5CF6]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INFINITE TECH MARQUEE */}
      <section className="py-8 bg-white/5 border-y border-white/10 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <motion.div 
          className="flex gap-20 w-max items-center opacity-40 font-mono text-sm tracking-widest uppercase text-white"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span>Optimized Execution</span>
              <span className="text-[#8B5CF6]">///</span>
              <span>Zero Latency</span>
              <span className="text-[#3B82F6]">///</span>
              <span>Encrypted Core</span>
              <span className="text-[#8B5CF6]">///</span>
              <span>Infinite Scale</span>
              <span className="text-[#3B82F6]">///</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeUp} className="text-sm font-medium text-[#8B5CF6]">01. // Architecture</motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Built to process <br/> the impossible.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed font-light">
                {about}
              </motion.p>
              
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-light text-white mb-2">100<span className="text-[#8B5CF6]">x</span></div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Processing Speed</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-2">0.0<span className="text-[#3B82F6]">1</span>ms</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Query Latency</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="rounded-[2rem] overflow-hidden aspect-square border border-white/10 relative">
                <img src={getImg("https://images.unsplash.com/photo-1518770660439-4636190af475", 1)} className="w-full h-full object-cover mix-blend-luminosity opacity-60" alt="Tech Architecture" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
              </div>
              <motion.div style={{ rotate: rotateParallax }} className="absolute -bottom-12 -left-12 w-48 h-48 border border-white/10 rounded-full border-dashed flex items-center justify-center z-0">
                <div className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center">
                   <Globe2 className="w-8 h-8 text-[#8B5CF6] opacity-50" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES / MODULES */}
      <section id="services" className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-sm font-medium text-[#3B82F6] mb-4">02. // System Modules</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Active Capabilities</h2>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="group bg-[#030712] border border-white/10 rounded-[2rem] p-10 hover:border-white/30 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-[#8B5CF6] font-mono text-sm opacity-50">MOD_0{i+1}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service}</h3>
                <p className="text-slate-400 font-light leading-relaxed relative z-10">
                  Dynamically allocated resources ensuring that your infrastructure remains robust under any computational load.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors relative z-10 cursor-pointer">
                  Initialize Module <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <motion.div style={{ y: yParallaxSlow }} className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-t from-[#8B5CF6]/20 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>
        
        <div className="max-w-[90rem] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-20 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="text-sm font-medium text-[#8B5CF6]">03. // Network Protocol</div>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Establish <br/> Connection.
                </h2>
                <p className="text-slate-400 font-light text-lg">
                  Integrate our systems into your pipeline. Ping our servers to retrieve access credentials.
                </p>
                <div className="space-y-4 pt-8">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                    <span className="font-mono text-sm tracking-wider">{phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                    <span className="font-mono text-sm tracking-wider">{email}</span>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Target Vector [Email]</label>
                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#8B5CF6] transition-colors font-mono text-sm" placeholder="sysadmin@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Payload [Message]</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none font-mono text-sm" placeholder="Enter configuration parameters..."></textarea>
                  </div>
                  <button className="w-full bg-white hover:bg-slate-200 text-black py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                    Transmit Data <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#030712] relative z-10">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Layers className="w-4 h-4 text-white" />
            <span className="font-bold text-white text-sm tracking-wider">{name}</span>
          </div>
          <div className="text-xs font-mono text-slate-500 tracking-widest uppercase">
            STATUS: <span className="text-green-400">ONLINE</span>
          </div>
          <div className="text-xs font-light text-slate-600">
            &copy; {new Date().getFullYear()} CORE SYSTEMS INC.
          </div>
        </div>
      </footer>
    </div>
  );
}
