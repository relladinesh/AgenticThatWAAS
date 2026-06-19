
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Network,
  Globe
} from "lucide-react";

export default function GeneralTemplate4({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()) as any);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "NextGen App";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Modern solutions for a connected world.";
  const about = data?.about || "We build scalable, high-performance systems that empower teams to achieve their highest potential.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Platform Engineering",
    "Data Intelligence",
    "Cloud Architecture",
    "Security & Scale"
  ];
  const email = data?.email || "hello@nextgen.dev";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGMUY1RjkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none z-0"></div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-slate-100 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#60A5FA] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-extrabold tracking-tight text-xl text-slate-900">{name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#features" className="hover:text-[#2563EB] transition-colors">Platform</a>
            <a href="#about" className="hover:text-[#2563EB] transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-[#2563EB] transition-colors">Start Free Trial</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-900 p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-slate-100 overflow-hidden">
              <div className="px-6 py-6 space-y-4">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="block font-semibold text-slate-900">Platform</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-semibold text-slate-900">Architecture</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-semibold text-[#2563EB]">Start Free Trial</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 px-6 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#60A5FA]/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] font-bold text-xs uppercase tracking-widest shadow-sm">
            <Activity className="w-4 h-4" /> System Online
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            The new standard for <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">modern infrastructure.</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            {tagline}
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="#contact" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              Start Building <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
              View Documentation
            </a>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="max-w-6xl mx-auto mt-24 relative z-10">
          <div className="rounded-[2rem] bg-white p-2 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
            <div className="rounded-[1.5rem] overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/9] relative group">
              <img src={getImg("https://images.unsplash.com/photo-1551288049-bebda4e38f71", 0, data?.image)} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" alt="Dashboard" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INFINITE TECH MARQUEE */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <motion.div 
          className="flex gap-24 w-max items-center font-bold text-slate-400 text-xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="flex items-center gap-2"><Globe className="w-6 h-6" /> GLOBAL EDGE</span>
              <span className="flex items-center gap-2"><Cpu className="w-6 h-6" /> NEURAL SYNC</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-6 h-6" /> ZERO TRUST</span>
              <span className="flex items-center gap-2"><Network className="w-6 h-6" /> DISTRIBUTED</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FEATURES / SERVICES */}
      <section id="features" className="py-32 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[#2563EB] font-bold uppercase text-xs tracking-widest bg-blue-100/50 inline-block px-3 py-1 rounded-full">Core Features</motion.div>
             <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900">Everything you need to scale</motion.h2>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] mb-8">
                  {i % 2 === 0 ? <Zap className="w-7 h-7" /> : <Network className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Automated workflows, real-time analytics, and enterprise-grade security built directly into the platform core.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT / ARCHITECTURE */}
      <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
              Architected for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">absolute speed.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {about}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="border-l-2 border-[#2563EB] pl-6">
                 <div className="text-3xl font-black text-slate-900 mb-1">99.9%</div>
                 <div className="text-sm font-semibold text-slate-500">Uptime SLA guarantee</div>
              </div>
              <div className="border-l-2 border-[#60A5FA] pl-6">
                 <div className="text-3xl font-black text-slate-900 mb-1">&lt;50ms</div>
                 <div className="text-sm font-semibold text-slate-500">Global latency</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2563EB] to-transparent opacity-10 blur-2xl rounded-full z-0"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 aspect-square">
                  <img src={getImg("https://images.unsplash.com/photo-1460925895917-afdab827c52f", 1)} className="w-full h-full object-cover" alt="Data" />
                </div>
                <div className="rounded-3xl bg-slate-900 p-6 shadow-xl aspect-square flex flex-col justify-between text-white">
                   <Activity className="w-8 h-8 text-[#60A5FA]" />
                   <div>
                     <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Active Users</div>
                     <div className="text-2xl font-black">1.2M+</div>
                   </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/5]">
                  <img src={getImg("https://images.unsplash.com/photo-1504384308090-c894fdcc538d", 2)} className="w-full h-full object-cover" alt="Network" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl">
            {/* Abstract Background for CTA */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#60A5FA] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white">Deploy your infrastructure today.</h2>
              <p className="text-slate-400 text-lg">
                Join thousands of forward-thinking companies building on {name}. Enter your email to create a free sandbox account.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 pt-4">
                <input type="email" placeholder="work@company.com" className="flex-1 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-[#60A5FA] focus:bg-white/15 transition-all" />
                <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg whitespace-nowrap">
                  Get Started Free
                </button>
              </form>
              <div className="text-xs text-slate-500 font-medium">No credit card required. 14-day free trial. Direct support at <a href={`mailto:${email}`} className="text-[#60A5FA] hover:underline">{email}</a></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
              <Zap className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-slate-900">{name}</span>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#features" className="hover:text-[#2563EB] transition-colors">Platform</a>
            <a href="#about" className="hover:text-[#2563EB] transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-[#2563EB] transition-colors">Pricing</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>&copy; {new Date().getFullYear()} {name} Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-600 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-slate-600 cursor-pointer transition-colors">System Status</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
