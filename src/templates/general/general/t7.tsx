
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, X, ArrowRight, ArrowUpRight, 
  Sparkles, CheckCircle2, ChevronRight,
  Phone, Mail, MapPin, Globe, Shield, Zap
} from "lucide-react";

export default function GeneralTemplate7({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);

  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "Lumina Paradigm";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Elevating experiences through intelligent design.";
  const about = data?.about || "We believe in the power of refined simplicity. Our team crafts bespoke solutions that bridge the gap between vision and reality, driving growth and inspiring innovation.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Strategic Consulting",
    "Digital Transformation",
    "Experience Design",
    "Growth Analytics"
  ];
  const email = data?.email || "hello@lumina.design";
  const phone = data?.phone || "+1 (800) 555-0199";
  const address = data?.address || "120 Innovation Blvd, Tech District";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#3B82F6] selection:text-white overflow-x-hidden">
      
      {/* Soft Gradient Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-100 to-transparent blur-[120px] opacity-70"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-purple-100 to-transparent blur-[120px] opacity-60"></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">{name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">Our Vision</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/20">
              Get Started
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-900 p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden">
              <div className="px-6 py-6 space-y-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Our Vision</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Expertise</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8 max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Welcome to the Future
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Redefining <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              {tagline}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a href="#contact" className="w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
                Partner With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all shadow-sm flex items-center justify-center gap-2">
                Discover Services
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10 bottom-0 h-1/2"></div>
            <div className="rounded-[2.5rem] p-2 bg-white/50 backdrop-blur-sm border border-white shadow-2xl">
              <div className="rounded-[2rem] overflow-hidden aspect-video relative">
                <img src={getImg("https://images.unsplash.com/photo-1497366216548-37526070297c", 0, data?.image)} className="w-full h-full object-cover" alt="Hero Office" />
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div style={{ y: yParallaxFast }} className="absolute -left-4 md:-left-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Verified</p>
                <p className="text-xs text-slate-500">Premium Quality</p>
              </div>
            </motion.div>
            
            <motion.div style={{ y: yParallaxSlow }} className="absolute -right-4 md:-right-12 bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Global</p>
                <p className="text-xs text-slate-500">Scale Worldwide</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src={getImg("https://images.unsplash.com/photo-1542744173-8e7e53415bb0", 1)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="About 1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src={getImg("https://images.unsplash.com/photo-1556761175-4b46a572b786", 2)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="About 2" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2 space-y-8">
              <motion.div variants={fadeUp} className="text-sm font-bold tracking-wider text-blue-600 uppercase">Our Story</motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Empowering your vision with unmatched clarity.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed font-light">
                {about}
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-6">
                {[
                  "Industry-leading expertise",
                  "Tailored, scalable solutions",
                  "Commitment to sustainable growth"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENTO GRID SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4">Our Expertise</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Capabilities designed for you.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">We bring together strategy, design, and technology to deliver transformative results across multiple disciplines.</p>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 5).map((service, i) => {
              // Creating a varied bento layout
              const isLarge = i === 0 || i === 3;
              const icons = [<Shield/>, <Zap/>, <Globe/>, <Layers/>, <Code/>];
              
              return (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  className={`group bg-[#F8FAFC] border border-slate-100 rounded-[2rem] p-8 md:p-10 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10">
                    {icons[i % icons.length]}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{service}</h3>
                  <p className="text-slate-600 leading-relaxed relative z-10">
                    Delivering high-impact strategies tailored to solve complex challenges and drive measurable success in this domain.
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10 cursor-pointer">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-900 rounded-[3rem] p-10 md:p-20 overflow-hidden relative shadow-2xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-600/30 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8 text-white">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready to transform <br/> your business?
                </h2>
                <p className="text-slate-300 text-lg max-w-md font-light">
                  Reach out to our team to discuss your next big project. We're here to help you navigate the journey.
                </p>
                <div className="space-y-6 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10"><Phone className="w-5 h-5" /></div>
                    <span className="text-lg font-medium">{phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10"><Mail className="w-5 h-5" /></div>
                    <span className="text-lg font-medium">{email}</span>
                  </div>
                  {address && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10"><MapPin className="w-5 h-5" /></div>
                      <span className="text-lg font-medium">{address}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 mt-4">
                    Submit Inquiry <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-slate-900 text-lg tracking-tight">{name}</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
