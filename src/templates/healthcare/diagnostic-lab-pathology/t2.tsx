
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield, Activity, Dna, HeartPulse, MapPin, Phone, Mail } from "lucide-react";

const DiagnosisTemplate2 = ({ data }: TemplateProps) => {
  const { business_name: name, about, phone, email, address, item_image } = data;
  const brandName = name || "Medit Diagnostic";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Synchronous deterministic seeding
  let seed = 0;
  const str = name || "diagnosis2";
  for (let i = 0; i < str.length; i++) {
    seed = str.charCodeAt(i) + ((seed << 5) - seed);
  }
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const pool = [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118", // Lab clean
    "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e", // Modern clinic
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", // Hospital bright
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef", // Doctor patient
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b", // Lab tech
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", // MRI
  ].map((url) => `${url}?q=80&w=1200&auto=format&fit=crop`);

  const dynamicImages = [...pool].sort(() => 0.5 - random());
  if (item_image && !dynamicImages.includes(item_image)) {
    dynamicImages.unshift(item_image);
  }

  const getImg = (index: number) => dynamicImages[index % dynamicImages.length];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Diagnostic Array', id: 'services' },
    { name: 'Contact Us', id: 'contact' }
  ];

  return (
    <>
    <div className="min-h-screen bg-[#F4F6F8] text-[#1E293B] font-sans selection:bg-[#FF8B5E] selection:text-white pb-20 overflow-x-hidden">
      
      {/* NAVIGATION - SOFT PILL */}
      <header className="fixed top-4 md:top-6 w-full z-50 px-4 md:px-6 pointer-events-none">
        <div className={`mx-auto max-w-[90rem] transition-all duration-500 pointer-events-auto rounded-full flex items-center justify-between px-6 py-4 ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1E293B]/5" : "bg-transparent"}`}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-[#1E293B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#1E293B]/60"></div>
              <div className="w-2 h-2 rounded-full bg-[#1E293B]/30"></div>
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#1E293B]">{brandName}</span>
          </a>

          <nav className="hidden lg:flex items-center gap-2 bg-white px-2 py-2 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#1E293B]/5">
            {navLinks.map((item, i) => (
              <a key={item.name} href={`#${item.id}`} className={`text-sm font-semibold px-6 py-2 rounded-full transition-colors ${i === 0 ? "bg-[#EEF2FF] text-[#4F46E5]" : "text-[#64748B] hover:text-[#1E293B] hover:bg-[#F8FAFC]"}`}>
                {item.name}
              </a>
            ))}
          </nav>

          <button className="hidden md:flex bg-[#FF8B5E] text-white px-8 py-3 rounded-full text-sm font-bold shadow-[0_8px_20px_rgba(255,139,94,0.3)] hover:shadow-[0_8px_25px_rgba(255,139,94,0.4)] hover:-translate-y-0.5 transition-all">
            Book Test
          </button>
          
          <button className="lg:hidden text-[#1E293B] bg-white p-3 rounded-full shadow-md border border-slate-100" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#F4F6F8] flex flex-col pt-24 px-6 pb-6 pointer-events-auto"
          >
            <button className="absolute top-8 right-6 text-[#1E293B] bg-white shadow-md p-4 rounded-full border border-slate-100" onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-6 mt-12 text-center h-full justify-center pb-20">
              {navLinks.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="text-3xl md:text-4xl font-bold text-[#1E293B] bg-white py-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  {item.name}
                </a>
              ))}
              <button className="mt-8 bg-[#FF8B5E] text-white py-6 rounded-[2rem] text-xl font-bold shadow-[0_8px_20px_rgba(255,139,94,0.3)]">
                Book Test
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PREMIUM MINIMAL HERO */}
      <section id="home" className="relative pt-40 md:pt-48 pb-20 px-6 md:px-12 max-w-[100rem] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div className="flex flex-col gap-8 lg:pr-10 z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#1E293B] leading-[1.05] tracking-tight">
              Personal<br/>Tests and<br/>Analysis
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-[#64748B] text-lg md:text-xl max-w-md font-medium leading-relaxed">
              {about || "Advanced preventative diagnostics powered by unparalleled clinical technology. Fast, accurate, and completely frictionless."}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="pt-4">
              <button className="bg-[#FF8B5E] text-white px-10 py-5 rounded-full text-base font-bold shadow-[0_8px_20px_rgba(255,139,94,0.3)] hover:shadow-[0_8px_25px_rgba(255,139,94,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                Book a Test <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-white overflow-hidden relative aspect-square md:aspect-[4/3] group">
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-lg border border-slate-100">
              <span className="text-4xl font-bold text-[#1E293B] block">B</span>
              <span className="text-sm font-medium text-slate-500 block mb-2">Structure</span>
              <span className="text-2xl font-bold text-[#1E293B] block">23.3</span>
              <span className="text-xs font-medium text-slate-500">Angstrom</span>
            </div>
            
            <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#1E293B]" />
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Dna className="w-5 h-5 md:w-6 md:h-6 text-[#1E293B]" />
              </div>
            </div>

            <motion.img style={{ y: y1 }} src={getImg(0)} alt="DNA Structure" className="w-full h-[120%] object-cover opacity-90 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 origin-center" />
          </motion.div>
        </div>
      </section>

      {/* BIG CENTERED ABOUT US */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="text-[#4F46E5] text-xs font-bold uppercase tracking-[0.2em] mb-6 block bg-[#EEF2FF] w-fit mx-auto px-6 py-2.5 rounded-full shadow-sm">About Us</span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1E293B] leading-[1.1] tracking-tight mb-8">
            Modern medical diagnostics.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            We bring precision and clarity to your personal health. By combining next-generation imaging with advanced blood pathology, we empower you with the data you need to live a healthier, longer life.
          </p>
        </div>

        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-white bg-white p-4 max-w-5xl mx-auto">
           <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
             <img src={getImg(1)} alt="Facility" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
           </div>
        </div>
      </section>

      {/* BIG CENTERED DIAGNOSTIC ARRAY (SERVICES) */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20 px-4">
          <span className="text-[#FF8B5E] text-xs font-bold uppercase tracking-[0.2em] mb-6 block bg-[#FFE4D6] w-fit mx-auto px-6 py-2.5 rounded-full shadow-sm">Diagnostic Array</span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1E293B] leading-[1.1] tracking-tight">
            Comprehensive Tests.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Blood Pressure Test", name: "Dr. Wesley Cain", date: "15 Feb", val1: 120, val2: 80, icon: <Activity className="w-6 h-6 text-[#4F46E5]" />, bg: "bg-[#EEF2FF]" },
            { title: "Cardiogram Test", name: "Dr. Sofia Frank", date: "28 Feb", val1: 85, val2: 60, icon: <HeartPulse className="w-6 h-6 text-[#FF8B5E]" />, bg: "bg-[#FFE4D6]" },
            { title: "Longevity Panel", name: "Dr. Elena Rostova", date: "02 Mar", val1: 99, val2: 95, icon: <Shield className="w-6 h-6 text-[#10B981]" />, bg: "bg-[#D1FAE5]" }
          ].map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-white hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] transition-shadow duration-500"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 shadow-sm">
                  <img src={getImg(i + 3)} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-base">{srv.name}</h4>
                  <p className="text-sm text-slate-400 font-bold">Specialist</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{srv.title}</h3>
              <p className="text-sm font-bold text-slate-400 mb-10">{srv.date}</p>

              {/* Mock Graph Area */}
              <div className="h-32 flex items-end justify-between gap-2 border-b border-slate-100 pb-4 relative">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d={`M0,50 Q25,${srv.val1} 50,50 T100,${srv.val2}`} fill="none" stroke={i === 1 ? "#FF8B5E" : "#4F46E5"} strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LUXURY CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-6 block bg-[#D1FAE5] w-fit mx-auto px-6 py-2.5 rounded-full shadow-sm">Contact Us</span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1E293B] leading-[1.1] tracking-tight">
            Schedule a checkup.
          </h2>
        </div>

        <div className="bg-white rounded-[3rem] p-4 md:p-6 max-w-6xl mx-auto shadow-[0_20px_60px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-[#F8FAFC] rounded-[2.5rem] overflow-hidden">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-[#1E293B] text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4F46E5] rounded-full blur-[100px] opacity-30 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF8B5E] rounded-full blur-[100px] opacity-20 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
                <p className="text-slate-300 mb-12 text-sm leading-relaxed max-w-xs">Our concierge team is available 24/7 to assist with your booking or answer any medical inquiries.</p>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#FF8B5E]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Phone</p>
                      <p className="font-bold text-lg">{phone || "+1 (800) 123-4567"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#4F46E5]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Email</p>
                      <p className="font-bold text-lg">{email || "care@meditdiagnostic.com"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Location</p>
                      <p className="font-bold text-sm text-slate-200 leading-relaxed max-w-[200px]">{address || "1200 Medical Center Dr. Suite 400, Beverly Hills, CA"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-3 p-10 md:p-14 bg-white rounded-r-[2.5rem] lg:rounded-l-none rounded-b-[2.5rem]">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-8">Send a Message</h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-2">First Name</label>
                    <input type="text" className="w-full bg-[#F4F6F8] border border-transparent focus:border-[#4F46E5] p-4 rounded-2xl focus:outline-none transition-colors font-bold text-[#1E293B]" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-2">Last Name</label>
                    <input type="text" className="w-full bg-[#F4F6F8] border border-transparent focus:border-[#4F46E5] p-4 rounded-2xl focus:outline-none transition-colors font-bold text-[#1E293B]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-2">Email Address</label>
                  <input type="email" className="w-full bg-[#F4F6F8] border border-transparent focus:border-[#4F46E5] p-4 rounded-2xl focus:outline-none transition-colors font-bold text-[#1E293B]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-2">Department</label>
                  <select className="w-full bg-[#F4F6F8] border border-transparent focus:border-[#4F46E5] p-4 rounded-2xl focus:outline-none transition-colors font-bold text-[#1E293B] appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Book MRI Scan</option>
                    <option>Longevity Blood Panel</option>
                  </select>
                </div>
                <button className="w-full bg-[#FF8B5E] text-white py-5 rounded-2xl font-bold text-base hover:bg-[#1E293B] transition-colors mt-4 shadow-[0_8px_20px_rgba(255,139,94,0.3)] hover:shadow-xl hover:-translate-y-1">
                  Send Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 md:px-12 max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm font-bold border-t border-slate-200 mt-12">
        <div className="flex items-center gap-2 text-[#1E293B]">
          <div className="w-4 h-4 rounded-full bg-[#1E293B]"></div>
          <span className="font-bold text-lg">{brandName}</span>
        </div>
        <p>© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-[#4F46E5] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#4F46E5] transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
    </>
  );
};

export default DiagnosisTemplate2;
