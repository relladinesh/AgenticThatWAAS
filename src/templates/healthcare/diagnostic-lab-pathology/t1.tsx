
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Dna, Microscope, ChevronRight, CheckCircle2, ShieldCheck, Menu, X } from "lucide-react";

export default function DiagnosisTemplate1({ data }: TemplateProps) {
  const { business_name: name, about, phone, email, address, item_image } = data;
  const brandName = name ? name.toUpperCase() : "NEUROLAB DIAGNOSTICS";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Synchronous deterministic seeding ensures HTML from server matches hydration perfectly
  let seed = 0;
  const str = name || "diagnosis";
  for (let i = 0; i < str.length; i++) {
    seed = str.charCodeAt(i) + ((seed << 5) - seed);
  }
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const pool = [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1530497610245-94d3c16cda28",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  ].map((url) => `${url}?q=80&w=1200&auto=format&fit=crop`);

  const dynamicImages = [...pool].sort(() => 0.5 - random());
  if (item_image && !dynamicImages.includes(item_image)) {
    dynamicImages.unshift(item_image);
  }

  const getImg = (index: number) => dynamicImages[index % dynamicImages.length];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111111] font-sans selection:bg-[#FF2A2A] selection:text-white overflow-x-hidden">
      
      {/* SWISS GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* TECH NAV */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/90 backdrop-blur-xl border-[#111111]/10 py-4" : "bg-transparent border-[#111111]/5 py-6"}`}>
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#FF2A2A] text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm">
              +
            </div>
            <a href="#home" className="font-bold text-xl md:text-2xl tracking-widest text-[#111111]">
              {brandName}
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-10 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-[#111111]/5 shadow-sm">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Us', id: 'about' },
              { name: 'Diagnostic Array', id: 'diagnostic' },
              { name: 'Methodology', id: 'methodology' },
              { name: 'Contact Us', id: 'contact' }
            ].map((item) => (
              <a key={item.name} href={`#${item.id}`} className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111111]/60 hover:text-[#FF2A2A] transition-colors font-bold">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-3 bg-[#111111] text-white px-6 py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest hover:bg-[#FF2A2A] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
              <div className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse"></div>
              Book Scan
            </button>
            <button 
              className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#111111] text-white rounded-sm hover:bg-[#FF2A2A] transition-colors shadow-lg"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* SWISS MEDICAL MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-white text-[#111111] flex flex-col justify-between overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="w-full h-full bg-[linear-gradient(rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="px-6 py-6 flex justify-between items-center relative z-10 border-b border-[#111111]/10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#FF2A2A] text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm">+</div>
                <span className="font-bold text-xl tracking-widest text-[#111111]">{brandName}</span>
              </div>
              <button 
                className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF2A2A] transition-colors rounded-sm shadow-lg" 
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 relative z-10">
              <nav className="flex flex-col gap-8 border-l-[3px] border-[#111111] pl-6">
                {[
                  { name: 'Home', id: 'home', num: '01' }, 
                  { name: 'About Us', id: 'about', num: '02' }, 
                  { name: 'Diagnostic Array', id: 'diagnostic', num: '03' }, 
                  { name: 'Methodology', id: 'methodology', num: '04' },
                  { name: 'Contact Us', id: 'contact', num: '05' }
                ].map((item, i) => (
                  <motion.a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                    className="group flex items-center gap-6"
                  >
                    <span className="text-[#FF2A2A] font-mono text-xs font-bold">{item.num}</span>
                    <span className="font-black text-4xl md:text-5xl tracking-tighter text-[#111111] group-hover:text-[#FF2A2A] transition-colors relative flex items-center gap-4">
                      {item.name}
                      <span className="w-0 h-[3px] bg-[#FF2A2A] group-hover:w-12 transition-all duration-300"></span>
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="px-6 py-8 border-t border-[#111111]/10 relative z-10 bg-[#F4F4F4]">
              <div className="flex justify-between items-center font-mono text-[10px] font-bold tracking-widest text-[#111111]/60">
                <span>SYSTEM: <span className="text-[#FF2A2A]">ONLINE</span></span>
                <span>SECURE ACCESS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION: SWISS MEDICAL MINIMALISM */}
      <section id="home" className="relative w-full min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 z-20 bg-white/50 backdrop-blur-sm p-6 rounded-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-white font-mono text-xs uppercase tracking-widest bg-[#FF2A2A] px-3 py-1 font-bold shadow-md">System Online</span>
              <span className="w-12 h-[2px] bg-[#111111]/20"></span>
              <span className="text-[#111111]/50 font-mono text-[10px] tracking-widest font-bold">SEQ-01A</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-[#111111] leading-[0.9] tracking-tighter mb-8"
            >
              PRECISION.<br/>
              <span className="text-[#FF2A2A]">CLARITY.</span><br/>
              RESULTS.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="text-[#111111]/70 max-w-lg text-sm md:text-base leading-relaxed mb-12 font-medium border-l-2 border-[#FF2A2A] pl-4"
            >
              {about || "Advanced pathological and imaging diagnostics powered by next-generation bio-metrics. We don't guess. We map the data of your health with microscopic accuracy."}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="bg-[#FF2A2A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#111111] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group rounded-sm">
                Initiate Analysis <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-[#111111]/60 hover:text-[#FF2A2A] px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                <Activity className="w-4 h-4" /> View Protocols
              </button>
            </motion.div>
          </div>

          {/* Right Side: High-Key Image & Data Readout */}
          <div className="lg:col-span-5 flex flex-col justify-center relative h-[60vh] lg:h-[80vh]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-[#F4F4F4] rounded-[2rem] overflow-hidden shadow-2xl border border-[#111111]/5"
            >
              <img src={getImg(0)} alt="Lab" className="w-full h-full object-cover mix-blend-multiply opacity-90 scale-105" />
              
              {/* Telemetry Panel */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl border border-[#111111]/10 p-6 rounded-xl shadow-xl">
                <div className="flex justify-between items-center border-b border-[#111111]/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF2A2A]" />
                    <span className="font-mono font-bold text-[10px] text-[#111111] tracking-widest">LIVE TELEMETRY</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse"></span>
                </div>
                
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-[#111111]/60 font-bold mb-2">
                      <span>ACCURACY THRESHOLD</span>
                      <span className="text-[#FF2A2A]">99.98%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "99%" }} transition={{ duration: 2, delay: 1 }} className="h-full bg-[#FF2A2A]"></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-[#111111]/60 font-bold mb-2">
                      <span>PROCESSING SPEED</span>
                      <span className="text-[#111111]">1.2 TFLOPS</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 2, delay: 1.2 }} className="h-full bg-[#111111]"></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-[100rem] mx-auto relative z-10 border-t border-[#111111]/5 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="bg-[#FF2A2A] text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block px-4 py-1.5 shadow-sm">Facility Overview</span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-[#111111] tracking-tighter mb-8 leading-[0.9]">
              About Us.
            </h2>
            <div className="border-l-[3px] border-[#111111] pl-6 py-1 mb-8">
              <p className="text-[#111111]/80 text-lg md:text-xl font-medium leading-relaxed">
                {about || "Advanced pathological and imaging diagnostics powered by next-generation bio-metrics. We don't guess. We map the data of your health with microscopic accuracy."}
              </p>
            </div>
            <p className="text-[#111111]/60 text-sm font-medium leading-relaxed max-w-md">
              Founded on the principle that absolute precision is the foundation of exceptional healthcare, our facilities combine world-class medical expertise with the most advanced diagnostic technology available today.
            </p>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#F4F4F4] shadow-2xl border border-[#111111]/5">
             <img src={getImg(1)} alt="Doctor" className="w-full h-full object-cover mix-blend-multiply opacity-90 scale-105" />
             <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#111111]/5">
               <ShieldCheck className="w-8 h-8 text-[#FF2A2A]" />
             </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TAPE */}
      <div className="w-full overflow-hidden bg-[#111111] py-4 flex whitespace-nowrap shadow-xl relative z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-12 font-mono text-[10px] text-white uppercase tracking-[0.3em] font-bold"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-[#FF2A2A]">FDA Approved Technology</span>
              <span className="w-1.5 h-1.5 bg-[#FF2A2A] rounded-full"></span>
              <span>24 Hour Result Turnaround</span>
              <span className="w-1.5 h-1.5 bg-[#FF2A2A] rounded-full"></span>
              <span className="text-[#FF2A2A]">ISO 9001 Certified Labs</span>
              <span className="w-1.5 h-1.5 bg-[#FF2A2A] rounded-full"></span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* CORE DIAGNOSTIC ARRAY (Services) */}
      <section id="diagnostic" className="py-32 px-6 md:px-12 max-w-[100rem] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="bg-[#111111] text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block px-4 py-1.5">Core Capabilities</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] tracking-tight">Diagnostic<br/>Array.</h2>
          </div>
          <p className="text-[#111111]/60 max-w-sm text-sm font-medium leading-relaxed border-l-2 border-[#111111]/20 pl-4">
            State-of-the-art imaging and pathology modalities designed for uncompromised diagnostic confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Advanced MRI & CT", desc: "High-tesla magnetic resonance and 256-slice CT scanning for unparalleled anatomical clarity.", icon: <Activity className="w-6 h-6 text-white" />, img: 1 },
            { title: "Molecular Pathology", desc: "Comprehensive blood and tissue analytics identifying biomarkers at a cellular level.", icon: <Microscope className="w-6 h-6 text-white" />, img: 2 },
            { title: "Genetic Sequencing", desc: "Next-generation DNA mapping to identify hereditary markers and predictive health vectors.", icon: <Dna className="w-6 h-6 text-white" />, img: 3 }
          ].map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative bg-white border border-[#111111]/10 hover:border-[#111111] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl rounded-2xl flex flex-col"
            >
              <div className="w-full h-48 bg-[#F4F4F4] overflow-hidden relative">
                <img src={getImg(srv.img + 1)} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt={srv.title} />
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-between relative bg-white">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-[#FF2A2A] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#111111] transition-colors">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4 mt-2">{srv.title}</h3>
                  <p className="text-[#111111]/60 text-sm font-medium leading-relaxed mb-8">{srv.desc}</p>
                </div>
                <div className="flex items-center gap-3 text-[#111111] font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer group-hover:text-[#FF2A2A] group-hover:translate-x-2 transition-all">
                  Access Protocol <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE METHODOLOGY (Patient Journey) */}
      <section id="methodology" className="py-32 bg-[#111111] text-white border-y border-[#111111]/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-full max-w-3xl h-full bg-[#FF2A2A] blur-[200px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-[100rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="bg-[#FF2A2A] text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block px-4 py-1.5">Process</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">Methodology.</h2>
            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed mb-16 max-w-md">
              We have eliminated the friction from clinical diagnostics. From booking to secure data delivery, our process is engineered for patient comfort and absolute clinical accuracy.
            </p>

            <div className="flex flex-col gap-10 relative border-l-2 border-white/10 ml-3 pl-8">
              {[
                { step: "01", title: "Digital Intake", desc: "Secure, encrypted onboarding of your medical history prior to arrival." },
                { step: "02", title: "Biometric Capture", desc: "Rapid, comfortable scanning using zero-radiation or low-dose technology." },
                { step: "03", title: "AI-Assisted Analysis", desc: "Machine learning algorithms pre-screen data for our elite pathologists." },
                { step: "04", title: "Encrypted Results", desc: "24-hour turnaround delivered directly to your physician's secure portal." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-[#111111] border-2 border-white/30 flex items-center justify-center group-hover:border-[#FF2A2A] transition-colors">
                    <div className="w-1.5 h-1.5 bg-white group-hover:bg-[#FF2A2A] rounded-full transition-colors"></div>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3 flex items-center gap-4">
                    <span className="font-mono text-[#FF2A2A] text-sm bg-white/10 px-2 py-0.5 rounded-sm">{item.step}</span> {item.title}
                  </h4>
                  <p className="text-white/50 text-sm font-medium max-w-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img src={getImg(5)} alt="Technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80"></div>
            
            {/* Overlay UI Element */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-mono text-[#FF2A2A] text-[10px] font-bold uppercase tracking-widest mb-1">Scanning Subsystem</p>
                <p className="text-white font-bold tracking-widest text-lg">OPTIMIZED</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#FF2A2A]/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-[#FF2A2A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING TERMINAL */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="bg-white border border-[#111111]/10 p-8 md:p-16 relative overflow-hidden rounded-[2rem] shadow-2xl">
          {/* Aesthetic Corner Markers */}
          <div className="absolute top-0 right-0 w-16 h-16 border-r-[3px] border-t-[3px] border-[#FF2A2A] m-6"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-[3px] border-b-[3px] border-[#FF2A2A] m-6"></div>

          <div className="max-w-3xl relative z-10 mx-auto md:mx-0">
            <span className="bg-[#111111] text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block px-4 py-1.5">Secure Terminal</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] tracking-tight mb-12">Contact Us.</h2>

            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest">Patient ID / Name</label>
                  <input type="text" className="bg-[#F4F4F4] border-l-4 border-transparent focus:border-[#FF2A2A] p-4 text-[#111111] font-mono text-sm focus:outline-none transition-colors placeholder:text-[#111111]/30 rounded-r-md" placeholder="ENTER NAME" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest">Comm Link (Email)</label>
                  <input type="email" className="bg-[#F4F4F4] border-l-4 border-transparent focus:border-[#FF2A2A] p-4 text-[#111111] font-mono text-sm focus:outline-none transition-colors placeholder:text-[#111111]/30 rounded-r-md" placeholder="ENTER EMAIL" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest">Diagnostic Requirement</label>
                <select className="bg-[#F4F4F4] border-l-4 border-transparent focus:border-[#FF2A2A] p-4 text-[#111111] font-mono text-sm focus:outline-none transition-colors appearance-none cursor-pointer rounded-r-md font-bold">
                  <option className="bg-white text-[#111111]">MRI / CT SCAN</option>
                  <option className="bg-white text-[#111111]">BLOOD PATHOLOGY</option>
                  <option className="bg-white text-[#111111]">GENETIC SEQUENCING</option>
                  <option className="bg-white text-[#111111]">CARDIAC TELEMETRY</option>
                </select>
              </div>

              <button type="button" className="w-fit mt-6 bg-[#FF2A2A] text-white px-12 py-5 text-[10px] font-bold font-mono uppercase tracking-[0.3em] hover:bg-[#111111] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 rounded-sm">
                <CheckCircle2 className="w-4 h-4" /> Transmit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#111111]/10 pt-20 pb-10 px-6 md:px-12 mt-12 relative z-10">
        <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-[#FF2A2A] text-white flex items-center justify-center font-bold font-mono text-[10px]">
                +
              </div>
              <span className="font-bold text-xl tracking-widest text-[#111111]">{brandName}</span>
            </div>
            <p className="text-[#111111]/60 text-sm font-medium leading-relaxed max-w-xs">
              Precision diagnostics mapping the architecture of human health through advanced technology.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[#111111] font-bold text-[10px] uppercase tracking-widest mb-6">Protocols</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#111111]/60 font-medium">
              <li><a href="#" className="hover:text-[#FF2A2A] transition-colors">Imaging Modalities</a></li>
              <li><a href="#" className="hover:text-[#FF2A2A] transition-colors">Pathology Assays</a></li>
              <li><a href="#" className="hover:text-[#FF2A2A] transition-colors">Genomics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[#111111] font-bold text-[10px] uppercase tracking-widest mb-6">Network</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#111111]/60 font-medium">
              <li><a href="#" className="hover:text-[#FF2A2A] transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-[#FF2A2A] transition-colors">Physician Access</a></li>
              <li><a href="#" className="hover:text-[#FF2A2A] transition-colors">Data Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[#111111] font-bold text-[10px] uppercase tracking-widest mb-6">Comms</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#111111]/60 font-medium font-mono">
              <li>{email || "admin@neurolab.com"}</li>
              <li>{phone || "+1 800 555 0199"}</li>
              <li className="mt-4 text-xs text-[#111111]/40 font-sans">{address || "Sector 4, Medical District"}</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[100rem] mx-auto border-t border-[#111111]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#111111]/50 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {brandName}. ALL SYSTEMS NORMAL.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF2A2A] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FF2A2A] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FF2A2A] transition-colors">HIPAA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
