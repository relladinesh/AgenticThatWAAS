
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, X, ArrowRight, ArrowUpRight, 
  Sparkles, CheckCircle2, ChevronRight,
  Phone, Mail, MapPin, Star, ShieldCheck, TrendingUp
} from "lucide-react";

export default function GeneralTemplate8({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);

  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Provide a mix of premium images
    const pool = [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "Premium Business";
  const type = data?.business_type || data?.businessType || data?.designation || "Business";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Delivering excellence tailored to your needs.";
  const about = data?.about || "We provide top-tier services driven by passion, dedication, and a commitment to outstanding results. Experience the difference of true quality.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Premium Consulting",
    "Expert Analysis",
    "Tailored Strategies",
    "Dedicated Support"
  ];
  const email = data?.email || "contact@business.com";
  const phone = data?.phone || "+1 (800) 123-4567";
  const address = data?.address || "100 Prestige Avenue, Center District";

  // Dynamic Theme Generator
  const getTheme = (bizType: string) => {
    const t = bizType.toLowerCase();
    if (t.includes("doctor") || t.includes("clinic") || t.includes("hospital") || t.includes("medical")) {
      return {
        gradient: "from-teal-400 to-cyan-600",
        text: "text-teal-600",
        bgLight: "bg-teal-50",
        bgSolid: "bg-teal-600",
        border: "border-teal-200",
        shadow: "shadow-teal-500/25",
        hover: "hover:bg-teal-700",
        ring: "focus:ring-teal-500"
      };
    }
    if (t.includes("bakery") || t.includes("cafe") || t.includes("restaurant")) {
      return {
        gradient: "from-amber-400 to-orange-600",
        text: "text-amber-600",
        bgLight: "bg-amber-50",
        bgSolid: "bg-amber-600",
        border: "border-amber-200",
        shadow: "shadow-amber-500/25",
        hover: "hover:bg-amber-700",
        ring: "focus:ring-amber-500"
      };
    }
    if (t.includes("coach") || t.includes("tutor") || t.includes("education")) {
      return {
        gradient: "from-indigo-400 to-purple-600",
        text: "text-indigo-600",
        bgLight: "bg-indigo-50",
        bgSolid: "bg-indigo-600",
        border: "border-indigo-200",
        shadow: "shadow-indigo-500/25",
        hover: "hover:bg-indigo-700",
        ring: "focus:ring-indigo-500"
      };
    }
    if (t.includes("gym") || t.includes("fitness")) {
      return {
        gradient: "from-red-500 to-rose-600",
        text: "text-red-600",
        bgLight: "bg-red-50",
        bgSolid: "bg-red-600",
        border: "border-red-200",
        shadow: "shadow-red-500/25",
        hover: "hover:bg-red-700",
        ring: "focus:ring-red-500"
      };
    }
    if (t.includes("jewelry") || t.includes("luxury")) {
      return {
        gradient: "from-yellow-600 to-amber-800",
        text: "text-yellow-700",
        bgLight: "bg-yellow-50",
        bgSolid: "bg-yellow-700",
        border: "border-yellow-200",
        shadow: "shadow-yellow-700/25",
        hover: "hover:bg-yellow-800",
        ring: "focus:ring-yellow-600"
      };
    }
    if (t.includes("beauty") || t.includes("salon") || t.includes("spa")) {
      return {
        gradient: "from-pink-400 to-rose-500",
        text: "text-pink-500",
        bgLight: "bg-pink-50",
        bgSolid: "bg-pink-500",
        border: "border-pink-200",
        shadow: "shadow-pink-500/25",
        hover: "hover:bg-pink-600",
        ring: "focus:ring-pink-500"
      };
    }
    
    // Default universal theme
    return {
      gradient: "from-blue-600 to-indigo-600",
      text: "text-blue-600",
      bgLight: "bg-blue-50",
      bgSolid: "bg-blue-600",
      border: "border-blue-200",
      shadow: "shadow-blue-500/25",
      hover: "hover:bg-blue-700",
      ring: "focus:ring-blue-500"
    };
  };

  const theme = getTheme(type);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Mesh based on Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className={`absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br ${theme.gradient} blur-[140px] opacity-10`}></div>
         <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl ${theme.gradient} blur-[120px] opacity-10`}></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white shadow-lg ${theme.shadow}`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">{name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#about" className={`hover:${theme.text} transition-colors`}>About</a>
            <a href="#services" className={`hover:${theme.text} transition-colors`}>Services</a>
            <a href="#contact" className={`hover:${theme.text} transition-colors`}>Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className={`${theme.bgSolid} ${theme.hover} text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${theme.shadow}`}>
              Book Now
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-900 p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden">
              <div className="px-6 py-6 space-y-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">About</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Services</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeUp} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${theme.bgLight} ${theme.border} border text-sm font-medium ${theme.text}`}>
              <span className={`w-2 h-2 rounded-full ${theme.bgSolid} animate-pulse`}></span> {type.charAt(0).toUpperCase() + type.slice(1)} Excellence
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Experience the <br/>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>Gold Standard.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              {tagline}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className={`${theme.bgSolid} ${theme.hover} text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl flex items-center gap-2 group`}>
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all shadow-sm flex items-center gap-2">
                View Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
            <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} rounded-full blur-[80px] opacity-20 z-0`}></div>
            <div className="relative z-10 rounded-[2.5rem] bg-white/50 backdrop-blur-md border border-white shadow-2xl p-2">
               <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
                 <img src={getImg("https://images.unsplash.com/photo-1556761175-4b46a572b786", 0, data?.image)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Hero Image" />
               </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div style={{ y: yParallaxFast }} className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${theme.bgLight} flex items-center justify-center ${theme.text}`}>
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Top Rated</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${theme.text} fill-current`} />)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 relative z-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] mt-8">
                  <img src={getImg("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", 1)} className="w-full h-full object-cover" alt="About 1" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                  <img src={getImg("https://images.unsplash.com/photo-1522071820081-009f0129c71c", 2)} className="w-full h-full object-cover" alt="About 2" />
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeUp} className={`text-sm font-bold tracking-wider uppercase ${theme.text}`}>Why Choose Us</motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Committed to delivering unparalleled results.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed font-light">
                {about}
              </motion.p>
              
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  { title: "Trusted Professionals", icon: <ShieldCheck className="w-5 h-5"/> },
                  { title: "Proven Track Record", icon: <TrendingUp className="w-5 h-5"/> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className={`w-10 h-10 rounded-full ${theme.bgLight} flex items-center justify-center ${theme.text}`}>
                      {item.icon}
                    </div>
                    <span className="text-slate-800 font-bold text-sm">{item.title}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className={`text-sm font-bold tracking-wider uppercase ${theme.text} mb-4`}>Our Services</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What we offer.</h2>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${theme.gradient} rounded-bl-full pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className={`w-14 h-14 rounded-2xl ${theme.bgLight} flex items-center justify-center ${theme.text} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Experience premium delivery and outstanding quality that exceeds expectations every single time.
                </p>
                
                <div className={`flex items-center gap-2 text-sm font-bold ${theme.text} group-hover:translate-x-2 transition-transform duration-300`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 text-white">
              <div className={`text-sm font-bold tracking-wider uppercase ${theme.text}`}>Get in Touch</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Let's create something extraordinary.
              </h2>
              <p className="text-slate-300 text-lg font-light">
                Reach out today to discuss how we can help elevate your experience.
              </p>
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"><Phone className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium">{phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"><Mail className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium">{email}</span>
                </div>
                {address && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"><MapPin className="w-5 h-5 text-white" /></div>
                    <span className="text-lg font-medium">{address}</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 shadow-2xl relative">
              <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${theme.gradient} rounded-t-[2rem]`}></div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5 pt-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 ${theme.ring} focus:border-transparent transition-all`} placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 ${theme.ring} focus:border-transparent transition-all`} placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                  <textarea rows={4} className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 ${theme.ring} focus:border-transparent transition-all resize-none`} placeholder="How can we help?"></textarea>
                </div>
                <button className={`w-full ${theme.bgSolid} ${theme.hover} text-white py-4 rounded-xl font-bold transition-all shadow-lg ${theme.shadow} flex items-center justify-center gap-2 mt-4`}>
                  Submit Request <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-white/5 relative z-10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className={`w-5 h-5 ${theme.text}`} />
            <span className="font-bold text-lg tracking-tight">{name}</span>
          </div>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
