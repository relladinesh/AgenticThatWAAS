
import { TemplateProps, CoachingData } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight, Quote, BarChart, Users, Target, Activity, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, CheckCircle2, ChevronRight, Briefcase, Heart, Rocket, Code2, Cpu, Server, Database } from "lucide-react";

export default function CoachingTemplate3({ data }: TemplateProps) {
  const coaching = data as CoachingData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1531545514251-b159e16b4eee?w=1200&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()) as any);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  // Exact Colors from the reference image
  const bgBlue = "#3B4895";
  const accentPink = "#ED3D62";
  const accentGreen = "#A9D38B";
  const textDark = "#1E2245";
  const bgLight = "#FFFFFF";

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const navLinks = ["Story", "Programs", "Process", "Reviews", "Contact"];

  return (
    <>
      <main className="min-h-screen font-sans overflow-x-hidden selection:bg-[#ED3D62] selection:text-white bg-white text-[#1E2245]">
        
        {/* HEADER */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 shadow-md bg-[#3B4895]" : "py-6 bg-transparent"}`}>
          <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2 text-white">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              {coaching.name || "empower coaching"}
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#A9D38B] transition-colors">{link}</a>
              ))}
            </div>

            <a href={`tel:${coaching.phone || "206-588-5826"}`} className="hidden md:flex items-center gap-2 bg-[#F8F9FA] text-[#A9D38B] px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">
              Call {coaching.phone || "206-588-5826"}
            </a>

            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.4 }} className="fixed inset-0 z-[100] bg-[#3B4895] flex flex-col p-8">
              <div className="flex justify-between items-center mb-12">
                <div className="text-2xl font-bold text-white">{coaching.name || "empower"}</div>
                <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8 text-white" /></button>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold">
                {navLinks.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#A9D38B]">{link}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION WITH CURVE */}
        <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 px-6" style={{ backgroundColor: bgBlue }}>
          
          {/* Abstract Geometric Shapes with Parallax */}
          {/* 1. Original Zig-Zag */}
          <motion.div style={{ y: yParallaxFast }} animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] left-[5%] opacity-20 pointer-events-none z-0">
            <svg width="60" height="150" viewBox="0 0 60 150" fill="none" stroke="white" strokeWidth="2"><path d="M10 10 L50 30 L10 50 L50 70 L10 90 L50 110 L10 130"/></svg>
          </motion.div>
          
          {/* 2. Tech Dotted Grid */}
          <motion.div style={{ y: yParallaxSlow }} className="absolute top-[10%] right-[5%] opacity-[0.05] pointer-events-none z-0 hidden lg:block">
            <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="white"/></pattern></defs>
              <rect width="300" height="300" fill="url(#dotGrid)"/>
            </svg>
          </motion.div>

          {/* 3. Large Intersecting Circles */}
          <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-[10%] left-[2%] opacity-10 pointer-events-none z-0">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" stroke="white" strokeWidth="1">
              <circle cx="150" cy="150" r="100" />
              <circle cx="150" cy="150" r="140" strokeDasharray="10 10" />
              <line x1="150" y1="0" x2="150" y2="300" />
              <line x1="0" y1="150" x2="300" y2="150" />
            </svg>
          </motion.div>

          {/* 4. Abstract Circuit Line */}
          <motion.div style={{ y: yParallaxFast }} className="absolute top-[50%] left-[45%] opacity-20 pointer-events-none z-0 hidden md:block">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="2">
              <path d="M0 100 H70 L100 40 H200" />
              <circle cx="100" cy="40" r="4" fill="white" />
              <circle cx="70" cy="100" r="4" fill="white" />
              <circle cx="200" cy="40" r="4" fill="white" />
            </svg>
          </motion.div>

          {/* 5. Original Floating Orbs */}
          <motion.div style={{ y: yParallaxSlow }} animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] right-[10%] w-16 h-16 rounded-full bg-[#A9D38B] opacity-80 z-0 pointer-events-none"></motion.div>
          <motion.div style={{ y: yParallaxReverse }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] right-[40%] w-8 h-8 rounded-full bg-[#ED3D62] opacity-90 z-0 pointer-events-none"></motion.div>

          <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                Let's get <br />
                you UN-STUCK
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-md leading-relaxed font-medium">
                A life-changing path to <span className="text-white font-bold underline decoration-[#ED3D62] decoration-2 underline-offset-4">clarity</span> —<br/>
                <span className="text-white font-bold underline decoration-[#A9D38B] decoration-2 underline-offset-4">confidence</span> .. and the <span className="font-bold text-white">career you're meant to have.</span>
              </p>
              <button className="bg-[#ED3D62] text-white px-10 py-4 rounded-md font-bold shadow-[0_10px_30px_rgba(237,61,98,0.3)] hover:shadow-[0_15px_40px_rgba(237,61,98,0.5)] hover:-translate-y-1 transition-all duration-300">
                Enroll Now
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
              {/* Green Offset Block */}
              <div className="absolute -right-6 -bottom-6 w-[90%] h-[90%] bg-[#A9D38B] rounded-3xl z-0 transform rotate-3"></div>
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border-4 border-white z-10 shadow-2xl">
                <img src={getImg("https://images.unsplash.com/photo-1556761175-5973dc0f32d7", 0, coaching.image)} className="w-full h-full object-cover" alt="Coaching Session" />
              </div>
            </motion.div>
          </div>

          {/* SVG Wavy Curve Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1440 160" fill="none" className="w-full h-[80px] md:h-[160px]" preserveAspectRatio="none">
              <path d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z" fill="#FFFFFF"></path>
            </svg>
          </div>
        </section>

        {/* 3 CARDS & UN-STUCK TEAMS */}
        <section id="programs" className="py-24 px-6 relative bg-white">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[10%] w-12 h-12 rounded-full bg-[#ED3D62] opacity-90 z-0"></motion.div>
          <div className="absolute right-0 top-[20%] w-32 h-64 bg-[#A9D38B]/20 rounded-l-full z-0"></div>

          <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#1E2245] leading-tight">
                Don't waste another <br/>
                precious day in a job that's <br/>
                wrong for you
              </h2>
              <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                Feeling direction-less at work? Stop wishing away the days! Our programmatic discovery phase maps out exactly where you are losing momentum.
              </p>
            </motion.div>

            <motion.div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
              {/* Card 1: Green */}
              <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center aspect-[3/4] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300">
                <Heart className="w-10 h-10 text-[#A9D38B] mb-6" />
                <h3 className="text-3xl font-black text-[#A9D38B] mb-2">A Life</h3>
                <p className="text-sm font-medium text-slate-500">That's utterly fulfilling</p>
              </motion.div>

              {/* Card 2: Solid Blue */}
              <motion.div variants={fadeInUp} className="bg-[#3B4895] p-8 rounded-[2rem] flex flex-col justify-center aspect-[3/4] shadow-[0_20px_40px_rgba(59,72,149,0.3)] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#ED3D62] rounded-full opacity-90"></motion.div>
                <Briefcase className="w-10 h-10 text-white mb-6 relative z-10" />
                <h3 className="text-3xl font-black text-white mb-2 relative z-10">A Job</h3>
                <p className="text-sm font-medium text-white/80 relative z-10">Free from work stress</p>
              </motion.div>

              {/* Card 3: Pink */}
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center aspect-[3/4] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-[#ED3D62] mb-6" />
                <h3 className="text-3xl font-black text-[#ED3D62] mb-2">A Future</h3>
                <p className="text-sm font-medium text-slate-500">You're in complete command of</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS WE TEACH / CURRICULUM - PREMIUM MARQUEE */}
        <section id="curriculum" className="py-24 bg-[#F8F9FA] relative overflow-hidden">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-5xl font-black text-[#1E2245] mb-4">Engineering Skills We Teach</motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-slate-500 max-w-2xl mx-auto text-lg">Master the modern technical stack to become an unstoppable force in the tech industry.</motion.p>
            </div>
          </div>

          <div className="w-full relative py-10 flex overflow-hidden">
            {/* Fade Edges for premium look */}
            <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[
                { title: "Java Architecture", desc: "Enterprise-grade backend systems, Spring Boot, and highly scalable microservices.", icon: <Server className="w-8 h-8 text-[#3B4895]" />, accent: "from-[#3B4895] to-[#262f63]" },
                { title: "MERN Stack", desc: "Full-stack Javascript, React, Node.js, and high-performance databases.", icon: <Code2 className="w-8 h-8 text-[#ED3D62]" />, accent: "from-[#ED3D62] to-[#b32746]" },
                { title: "AI Engineering", desc: "Machine Learning models, LLMs, and Python-driven AI integration into apps.", icon: <Cpu className="w-8 h-8 text-[#A9D38B]" />, accent: "from-[#A9D38B] to-[#719658]" },
                { title: "Cloud Native", desc: "AWS, Kubernetes, Docker orchestration, and distributed system design.", icon: <Database className="w-8 h-8 text-[#3B4895]" />, accent: "from-[#3B4895] to-[#262f63]" },
                // Duplicate for infinite scroll
                { title: "Java Architecture", desc: "Enterprise-grade backend systems, Spring Boot, and highly scalable microservices.", icon: <Server className="w-8 h-8 text-[#3B4895]" />, accent: "from-[#3B4895] to-[#262f63]" },
                { title: "MERN Stack", desc: "Full-stack Javascript, React, Node.js, and high-performance databases.", icon: <Code2 className="w-8 h-8 text-[#ED3D62]" />, accent: "from-[#ED3D62] to-[#b32746]" },
                { title: "AI Engineering", desc: "Machine Learning models, LLMs, and Python-driven AI integration into apps.", icon: <Cpu className="w-8 h-8 text-[#A9D38B]" />, accent: "from-[#A9D38B] to-[#719658]" },
                { title: "Cloud Native", desc: "AWS, Kubernetes, Docker orchestration, and distributed system design.", icon: <Database className="w-8 h-8 text-[#3B4895]" />, accent: "from-[#3B4895] to-[#262f63]" }
              ].map((skill, i) => (
                <div key={i} className="w-[320px] md:w-[400px] shrink-0 bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(59,72,149,0.15)] transition-all duration-500 cursor-pointer">
                  {/* Floating blurred background orb */}
                  <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${skill.accent} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 blur-3xl z-0`}></div>
                  
                  <div className="relative z-10 w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100">
                    {skill.icon}
                  </div>
                  
                  <h3 className="relative z-10 text-2xl font-black text-[#1E2245] mb-4">{skill.title}</h3>
                  <p className="relative z-10 text-slate-500 font-medium leading-relaxed">{skill.desc}</p>
                  
                  <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-black text-[#1E2245] group-hover:text-[#ED3D62] transition-colors">
                    Explore Program <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* REVIEWS SECTION - SOLID BLUE */}
        <section id="reviews" className="py-32 px-6 bg-[#3B4895] relative overflow-hidden">
          <motion.div style={{ y: yParallaxFast }} className="absolute top-10 right-[20%] text-white/5 rotate-12 pointer-events-none">
            <Quote className="w-64 h-64" />
          </motion.div>
          <motion.div style={{ y: yParallaxSlow }} animate={{ y: [0, -30, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-[10%] w-32 h-32 rounded-full border-[10px] border-[#A9D38B]/20"></motion.div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex justify-center items-center gap-4 mb-8">
                <img src={getImg("https://images.unsplash.com/photo-1507679799987-c73779587ccf", 2, coaching.testimonials?.[0]?.image)} className="w-16 h-16 rounded-full object-cover border-4 border-white" alt="Lyamen Savy" />
                <div className="text-left text-white">
                  <h4 className="font-bold text-lg">{coaching.testimonials?.[0]?.name || "Lyamen Savy"}</h4>
                  <p className="text-xs text-white/70">Founder and CEO, 321 Ignition</p>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-10">
                "Now, I'm living my passion as a female tech entrepreneur disrupting the automotive industry. Don't even think about it for another second. Just do it."
              </p>
              <button className="bg-[#A9D38B] text-[#1E2245] px-8 py-3 rounded-md font-bold shadow-lg hover:bg-white transition-all duration-300">
                More Success Stories
              </button>
            </motion.div>
          </div>
        </section>

        {/* TRUST LOGOS */}
        <section className="py-24 px-6 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-black text-[#1E2245] mb-12">
              Trust the coaching team <br/> that's trusted by Fortune 100 companies
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-black">Microsoft</div>
              <div className="text-xl font-serif font-black tracking-widest">NORDSTROM</div>
              <div className="text-xl font-black italic">CenturyLink</div>
              <div className="text-xl font-bold text-pink-600">T-Mobile</div>
            </div>
          </div>
        </section>

        {/* SECOND STORY SECTION */}
        <section id="story" className="py-32 px-6 bg-white relative">
          <div className="absolute right-0 top-1/2 w-16 h-32 bg-[#3B4895] rounded-l-full"></div>
          <div className="absolute right-[5%] top-[60%] w-8 h-8 bg-[#ED3D62] rounded-full"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
              <div className="absolute -left-6 -top-6 w-[80%] h-[100%] bg-[#A9D38B] rounded-3xl z-0 transform -rotate-3"></div>
              <img src={getImg("https://images.unsplash.com/photo-1517048676732-d65bc937f952", 3)} className="relative z-10 w-full aspect-[4/3] object-cover rounded-3xl shadow-xl" alt="Coaches" />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-black text-[#1E2245] leading-tight mb-6">
                Hundreds of people just like you have already transformed their lives.
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                <span className="font-bold text-[#1E2245]">{coaching.instructors?.[0]?.name || "Jennifer Malloy"}, Cyndee Kraiger</span>, and <span className="font-bold text-[#1E2245]">Julie Schaller</span> are a combustion engine at career coaching know-how. Enroll now in the Empower Experience OR Book a FREE 30-Minute Career Jump Start Session.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#ED3D62] text-white px-8 py-3 rounded-md font-bold hover:bg-[#3B4895] transition-colors">
                  Enroll Now
                </button>
                <button className="border-2 border-[#ED3D62] text-[#ED3D62] px-8 py-3 rounded-md font-bold hover:bg-[#ED3D62] hover:text-white transition-colors">
                  Book Your Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section id="process" className="py-32 px-6 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-[#1E2245]">Progressive Levels of <br/> Discovery</h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-[40px] left-0 w-full border-t-2 border-dashed border-slate-300 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  { step: "Level 1", title: "Radical Fulfillment", desc: "The Blueprint for Radical Fulfillment, 10 Weeks", icon: <Target className="w-8 h-8 text-[#3B4895]" /> },
                  { step: "Level 2", title: "Hidden Circuitry", desc: "Rewire the Hidden Circuitry that Blocks Your Path to Success, 10 Weeks", icon: <Activity className="w-8 h-8 text-[#A9D38B]" /> },
                  { step: "Level 3", title: "System to Realize", desc: "Craft the Vision and System to Realize Your Potential, 10 Weeks", icon: <Rocket className="w-8 h-8 text-[#ED3D62]" /> }
                ].map((item, i) => (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-6">
                      {item.icon}
                    </div>
                    <div className="text-[#3B4895] font-black mb-2 tracking-widest uppercase text-sm">{item.step}</div>
                    <p className="text-sm text-slate-500 px-4">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (Premium) */}
        <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8F9FA] -z-10 rounded-l-[100px]"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E2245] mb-6">
                Ready to get <span className="text-[#ED3D62]">UN-STUCK?</span>
              </h2>
              <p className="text-lg text-slate-500 mb-10 max-w-md">
                Drop us a message or schedule your free 30-minute discovery call to map out your career trajectory.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-[#3B4895]/10 rounded-full flex items-center justify-center text-[#3B4895]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Call Us Directly</div>
                    <div className="font-bold text-[#1E2245]">{coaching.phone || "206-588-5826"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-[#A9D38B]/20 rounded-full flex items-center justify-center text-[#A9D38B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Email Us</div>
                    <div className="font-bold text-[#1E2245]">{coaching.email || "hello@empowercoaching.com"}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
              <h3 className="text-2xl font-black text-[#1E2245] mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name" className="w-full bg-[#F8F9FA] px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B4895] transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full bg-[#F8F9FA] px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B4895] transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-[#F8F9FA] px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B4895] transition-all" />
                <textarea placeholder="How can we help you get UN-STUCK?" rows={4} className="w-full bg-[#F8F9FA] px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B4895] transition-all resize-none"></textarea>
                <button className="w-full bg-[#3B4895] text-white py-4 rounded-xl font-bold hover:bg-[#1E2245] transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* PREMIUM FOOTER */}
        <footer className="bg-[#1E2245] text-white pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
            <div className="md:col-span-4">
              <div className="text-2xl font-bold tracking-tight flex items-center gap-2 mb-6">
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {coaching.name || "empower coaching"}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                Empowering leaders to break through plateaus, find absolute clarity, and achieve unhindered organizational momentum.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ED3D62] hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3B4895] hover:text-white transition-all"><aedin className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A9D38B] hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="font-bold mb-6 text-white text-lg">Company</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coaching Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Results</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Meet Coaches</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-bold mb-6 text-white text-lg">Contact Us</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 shrink-0 text-[#ED3D62]" /> <span>{coaching.address || "Seattle, WA"}</span></li>
                <li className="flex items-start gap-3"><Phone className="w-5 h-5 shrink-0 text-[#A9D38B]" /> <span>{coaching.phone || "206-588-5826"}</span></li>
                <li className="flex items-start gap-3"><Mail className="w-5 h-5 shrink-0 text-[#3B4895]" /> <span>{coaching.email || "hello@empowercoaching.com"}</span></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
            <div>© {new Date().getFullYear()} {coaching.name || "Empower Coaching"}. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
