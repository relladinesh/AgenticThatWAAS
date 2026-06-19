
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Building2, 
  Briefcase, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Menu,
  X,
  Gem,
  Award, MapPin } from "lucide-react";

export default function AutomotiveTwoWheelerDealershipT1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Premium Business";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Delivering exceptional quality and service.";
  const about = data?.about || "We provide high-impact solutions, operational optimization, and growth consulting for businesses globally.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Strategic Planning",
    "Operational Efficiency",
    "Client Success Management",
    "Financial Advisory"
  ];
  const email = data?.email || "contact@business.com";
  const phone = data?.phone || "+1 (555) 019-2834";
  const address = data?.address || "100 Main Street, City, State";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors duration-500 ${isScrolled ? "bg-[#0F172A] text-white" : "bg-white text-[#0F172A]"}`}>
              {name.charAt(0)}
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-500 ${isScrolled ? "text-[#0F172A]" : "text-white"}`}>{name}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 font-semibold text-sm transition-colors duration-500 ${isScrolled ? "text-slate-600" : "text-white/80"}`}>
            <a href="#about" className="hover:text-[#2563EB] transition-colors">About</a>
            <a href="#services" className="hover:text-[#2563EB] transition-colors">Services</a>
            <a href="#metrics" className="hover:text-[#2563EB] transition-colors">Impact</a>
            <a href="#contact" className="hover:text-[#2563EB] transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg ${isScrolled ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]" : "bg-white text-[#0F172A] hover:bg-[#2563EB] hover:text-white"}`}>
              Get in Touch
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? "text-[#0F172A]" : "text-white"}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? "text-[#0F172A]" : "text-white"}`} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-slate-200 overflow-hidden">
              <div className="px-6 py-6 space-y-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#0F172A]">About</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#0F172A]">Services</a>
                <a href="#metrics" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#0F172A]">Impact</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#0F172A]">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* PREMIUM HERO SECTION */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-36 bg-[#0F172A] overflow-hidden">
        {/* Faded Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&q=80" 
            alt="Racing Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-screen grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]"></div>
        </div>

        <motion.div style={{ y: yParallaxSlow }} className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-full blur-[100px] opacity-80 z-0 pointer-events-none"></motion.div>
        <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-tl from-[#2563EB]/20 to-transparent rounded-full blur-[80px] z-0 pointer-events-none"></motion.div>

        <div className="max-w-[90rem] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm">
              <Building2 className="w-3.5 h-3.5 text-[#2563EB]" /> Premium Excellence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Ride with passion. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">Live to explore.</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              {tagline}
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="bg-[#2563EB] hover:bg-white text-white hover:text-[#0F172A] px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] flex items-center gap-2 group">
                Work With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative grid grid-cols-2 gap-4">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#2563EB] to-transparent opacity-20 blur-2xl"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-slate-800 border-4 border-[#0F172A] z-10 shadow-2xl translate-y-8">
                <img 
                  src={"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80"} 
                  alt="Sports Bike" 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100" 
                />
              </div>
              <div className="space-y-4">
                <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-slate-800 border-4 border-[#0F172A] z-10 shadow-2xl">
                  <img 
                    src={"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80"} 
                    alt="Cruiser Bike" 
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100" 
                  />
                </div>
                <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-slate-800 border-4 border-[#0F172A] z-10 shadow-2xl">
                  <img 
                    src={"https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80"} 
                    alt="Street Bike" 
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100" 
                  />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
      <section className="py-12 bg-white border-b border-slate-200 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <motion.div 
          className="flex gap-16 w-max items-center opacity-40 font-black uppercase tracking-[0.2em] text-sm text-[#0F172A]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Trusted Partner</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
              <span>Proven Results</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
              <span>Industry Leaders</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
              <span>Unmatched Quality</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 bg-[#F8FAFC] relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="space-y-8">
            <div className="text-[#2563EB] font-bold uppercase text-xs tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
              Built on a foundation of trust and precision.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {about}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="flex gap-5">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center text-[#2563EB] shadow-[0_10px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                  <Gem className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">Premium Quality</h4>
                  <p className="text-sm text-slate-500 mt-1">Excellence in every detail.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center text-[#2563EB] shadow-[0_10px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">Local & Global</h4>
                  <p className="text-sm text-slate-500 mt-1">Serving clients everywhere.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg">
                  <img src={"https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80"} alt="Strategy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg">
                  <img src={"https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&q=80"} alt="Execution" className="w-full h-full object-cover" />
                </div>
                <div className="bg-[#0F172A] rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB] opacity-20 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-700"></div>
                  <Award className="w-10 h-10 text-[#60A5FA] mb-4" />
                  <div className="text-3xl font-black mb-1">Top Tier</div>
                  <div className="text-sm text-slate-400 font-medium">Service Provider</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 bg-white relative">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-20 space-y-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[#2563EB] font-bold uppercase text-xs tracking-widest">Our Expertise</motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[#0F172A]">Core Services</motion.h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.slice(0, 4).map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-[#0F172A] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] cursor-pointer aspect-[4/5] relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white rounded-full opacity-50 group-hover:bg-[#2563EB]/20 transition-colors duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="text-[#0F172A] group-hover:text-white font-black text-5xl mb-6 transition-colors duration-500 opacity-10 group-hover:opacity-20">
                    0{i+1}
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] group-hover:text-white mb-4 transition-colors duration-500">{service}</h3>
                </div>
                
                <div className="relative z-10 mt-8 w-12 h-12 rounded-full bg-white group-hover:bg-[#2563EB] flex items-center justify-center text-[#0F172A] group-hover:text-white shadow-sm transition-colors duration-500 group-hover:-translate-y-2">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-24 bg-[#0F172A] text-white px-6 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="text-5xl md:text-7xl font-black text-white mb-4">10<span className="text-[#2563EB]">+</span></div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Years Active</div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="text-5xl md:text-7xl font-black text-white mb-4">1<span className="text-[#2563EB]">K+</span></div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Clients Served</div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="text-5xl md:text-7xl font-black text-white mb-4">99<span className="text-[#2563EB]">%</span></div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Satisfaction</div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="text-5xl md:text-7xl font-black text-white mb-4">24<span className="text-[#2563EB]">/7</span></div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Support</div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-5 space-y-8">
            <div className="text-[#2563EB] font-bold uppercase text-xs tracking-widest">Connect</div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.1]">Let's start <br/> a conversation</h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Reach out to discuss how our services can directly impact your goals.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#60A5FA]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <div className="font-bold text-xl text-[#0F172A]">{phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#60A5FA]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <div className="font-bold text-xl text-[#0F172A]">{email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#60A5FA]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Location</div>
                  {data?.googleMapsUrl ? (
                    <a href={data.googleMapsUrl} target="_blank" rel="noreferrer" className="font-bold text-xl text-[#0F172A] hover:text-[#2563EB] transition-colors line-clamp-1">{address}</a>
                  ) : (
                    <div className="font-bold text-xl text-[#0F172A] line-clamp-1">{address}</div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-7 bg-white p-10 md:p-14 border border-slate-100 rounded-[2.5rem] shadow-[0_30px_60px_rgba(15,23,42,0.05)] relative overflow-hidden">
            <h3 className="text-3xl font-black text-[#0F172A] mb-8 relative z-10">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-all font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-all resize-none font-medium"></textarea>
              </div>
              <button className="w-full bg-[#0F172A] text-white hover:bg-[#2563EB] py-5 rounded-xl font-bold transition-colors duration-300 shadow-md">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-slate-400 py-20 px-6 border-t border-[#0F172A]">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {name.charAt(0)}
            </div>
            <span className="font-bold text-white text-xl tracking-tight">{name}</span>
          </div>
          <div className="flex gap-10 text-sm font-semibold">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#metrics" className="hover:text-white transition-colors">Impact</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-slate-500 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
