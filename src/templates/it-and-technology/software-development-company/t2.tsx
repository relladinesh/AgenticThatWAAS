
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Globe2, 
  Layout, 
  Mail, 
  MapPin, 
  Menu, 
  Phone, 
  Shield, 
  Smartphone, 
  Sparkles, 
  X,
  Zap,
  ChevronRight
} from "lucide-react";

const SoftwareDevT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const name = data?.name || "Nexus Engineering";
  const about = data?.about || "We engineer scalable software solutions for forward-thinking enterprises. Our approach combines elegant code with exceptional user experiences to drive digital transformation.";
  const services = data?.services || [
    "Enterprise Software Development",
    "Cloud Architecture & Migration",
    "AI & Machine Learning Integration",
    "Mobile App Engineering",
    "UI/UX Systems Design",
    "DevOps & Automation"
  ];
  const email = data?.email || "hello@nexus-engineering.com";
  const phone = data?.phone || "+1 (800) 123-4567";
  const address = data?.address || "One Tech Plaza, Innovation District";

  // Framer variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  // Tech images for the template
  const images = [
    data?.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80", // Coding
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80", // Laptop desk
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", // Data analytics
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", // Team collaboration
  ];

  const serviceIcons = [
    <Code2 className="w-6 h-6" />,
    <Globe2 className="w-6 h-6" />,
    <Cpu className="w-6 h-6" />,
    <Smartphone className="w-6 h-6" />,
    <Layout className="w-6 h-6" />,
    <Zap className="w-6 h-6" />
  ];

  return (
    <>
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans selection:bg-[#3B82F6] selection:text-white overflow-x-hidden">
      
      {/* FLOATING NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-4 sm:px-8`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/50 px-6 py-3" : "bg-transparent px-2 py-4"}`}>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
              {name.charAt(0)}
            </div>
            <span className="font-bold text-lg tracking-tight text-[#0F172A] hidden sm:block">{name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/50">
            <a href="#expertise" className="text-sm font-semibold text-slate-600 hover:text-[#3B82F6] transition-colors">Expertise</a>
            <a href="#approach" className="text-sm font-semibold text-slate-600 hover:text-[#3B82F6] transition-colors">Approach</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-[#3B82F6] transition-colors">Solutions</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="group relative px-6 py-2.5 bg-[#0F172A] text-white rounded-xl text-sm font-bold overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-900/10">
              <span className="relative z-10 flex items-center gap-2">
                Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-[#0F172A]">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 md:hidden z-50 flex flex-col gap-6"
            >
              <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-[#0F172A]">Expertise</a>
              <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-[#0F172A]">Approach</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-[#0F172A]">Solutions</a>
              <div className="h-px bg-slate-100 w-full"></div>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-center rounded-xl font-bold">
                Start Project
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION - AIRY & PREMIUM */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#E0F2FE] via-[#EDE9FE] to-transparent rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#DBEAFE] to-transparent rounded-full blur-[80px] opacity-50 -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Typography Side */}
          <motion.div 
            style={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
            className="lg:col-span-7 space-y-8 relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#3B82F6] font-bold text-xs uppercase tracking-widest shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Software Studio
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-[#0F172A] leading-[1.05]"
            >
              Engineering the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">digital future.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium"
            >
              {about.split('.')[0]}. We build scalable, high-performance applications that transform businesses and elevate user experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#contact" className="px-8 py-4 bg-[#3B82F6] text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:bg-[#2563EB] hover:shadow-lg hover:shadow-blue-500/25">
                Discuss Your Vision
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-[#0F172A] border border-slate-200 rounded-2xl font-bold flex items-center gap-2 transition-all hover:bg-slate-50 hover:border-slate-300">
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            style={{ x: mousePosition.x * 2, y: mousePosition.y * 2, y: yParallaxSlow }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5]">
              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50 border border-white p-2"
              >
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent z-10"></div>
                  <img src={images[0]} alt="Engineering" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              {/* Floating Element 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -right-12 top-20 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 z-20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">Clean Code</div>
                  <div className="text-xs text-slate-500 font-medium">Scalable architecture</div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -40, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -left-10 bottom-32 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[#3B82F6] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">+5</div>
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">Top Engineers</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS MARQUEE */}
      <section className="py-10 border-y border-slate-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Projects Delivered", value: "250+" },
            { label: "Uptime Guaranteed", value: "99.9%" },
            { label: "Global Clients", value: "50+" },
            { label: "Engineering Experts", value: "100+" }
          ].map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#0F172A] mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH / ABOUT - BENTO STYLE */}
      <section id="approach" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[#3B82F6] font-bold uppercase text-xs tracking-widest mb-4">Our Approach</motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-6">
              Intelligence applied to software design.
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-500 text-lg leading-relaxed">
              {about}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Box 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 max-w-lg">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-4">Enterprise Grade Security</h3>
                <p className="text-slate-500 leading-relaxed text-lg mb-8">
                  Security isn't an afterthought. We build robust, compliance-ready architectures designed to protect your data at scale.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]"><Zap className="w-4 h-4 text-[#3B82F6]" /> ISO Certified</div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]"><Zap className="w-4 h-4 text-[#3B82F6]" /> GDPR Compliant</div>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-4 rounded-[2.5rem] overflow-hidden relative"
            >
              <img src={images[1]} alt="Workspace" className="w-full h-full object-cover min-h-[300px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Modern Agile Workflow</h3>
              </div>
            </motion.div>

            {/* Bento Box 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-4 bg-[#0F172A] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tl from-[#3B82F6] to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Global Delivery Model</h3>
              <p className="text-slate-400 relative z-10 mb-8">Seamless collaboration across time zones to ensure continuous integration and rapid deployment.</p>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center relative z-10 backdrop-blur-md">
                <Globe2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>

            {/* Bento Box 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-8 bg-white rounded-[2.5rem] p-2 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="w-full sm:w-1/2 aspect-video rounded-[2rem] overflow-hidden">
                <img src={images[2]} alt="Analytics" className="w-full h-full object-cover" />
              </div>
              <div className="w-full sm:w-1/2 p-6 sm:pr-10">
                <h3 className="text-2xl font-black text-[#0F172A] mb-3">Data-Driven Engineering</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Every decision we make is backed by metrics, ensuring performance, scalability, and user retention.
                </p>
                <button className="text-[#3B82F6] font-bold flex items-center gap-2 group">
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - GLASS CARDS */}
      <section id="services" className="py-32 px-6 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[#3B82F6] font-bold uppercase text-xs tracking-widest mb-4">Solutions</motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A]">
              Comprehensive engineering capabilities.
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white border border-slate-200 p-8 rounded-[2rem] group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:border-[#3B82F6]/30 relative"
              >
                <div className="w-12 h-12 bg-slate-50 text-[#0F172A] group-hover:bg-blue-50 group-hover:text-[#3B82F6] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  {serviceIcons[i % serviceIcons.length]}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{service}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  End-to-end solutions tailored to your unique technical requirements and business objectives.
                </p>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto bg-[#0F172A] rounded-[3rem] overflow-hidden relative shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#3B82F6]/20 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest w-max mb-8 backdrop-blur-md">
                Start Building
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to transform your tech stack?
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                Partner with our engineering team to bring your vision to life with precision and scale.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-5 h-5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email Us</div>
                    <div className="font-medium text-lg">{email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Phone className="w-5 h-5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Call Us</div>
                    <div className="font-medium text-lg">{phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-20 bg-white/5 backdrop-blur-xl border-l border-white/10">
              <form onSubmit={e => e.preventDefault()} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all font-medium" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all font-medium" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Project Scope</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all font-medium resize-none" placeholder="Tell us about your technical requirements..."></textarea>
                </div>
                <button className="w-full bg-white text-[#0F172A] hover:bg-[#3B82F6] hover:text-white py-5 rounded-2xl font-bold transition-colors duration-300 mt-4 shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white font-black text-sm">
              {name.charAt(0)}
            </div>
            <span className="font-bold text-[#0F172A] tracking-tight">{name}</span>
          </div>
          
          <div className="text-sm font-semibold text-slate-500 flex gap-8">
            <a href="#approach" className="hover:text-[#3B82F6] transition-colors">Approach</a>
            <a href="#services" className="hover:text-[#3B82F6] transition-colors">Solutions</a>
            <a href="#contact" className="hover:text-[#3B82F6] transition-colors">Contact</a>
          </div>
          
          <div className="text-sm font-medium text-slate-400">
            &copy; {new Date().getFullYear()} {name}. Built for Scale.
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default SoftwareDevT2;
