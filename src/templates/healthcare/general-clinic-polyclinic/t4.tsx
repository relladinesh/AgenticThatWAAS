
import { TemplateProps } from "@/types";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin,
  Menu, X, Plus, Clock, HeartPulse, Stethoscope, ChevronRight, Activity
} from "lucide-react";
import { useState, useEffect } from "react";

export default function DoctorTemplate4({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1200&auto=format&fit=crop");
  const [doctorImage, setDoctorImage] = useState("https://images.unsplash.com/photo-1594824436998-ddedce28b14e?q=80&w=600&auto=format&fit=crop");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (data.image) {
      if (data.image.includes(".png")) {
        setHeroImage("https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1200&auto=format&fit=crop");
      } else {
        setHeroImage(data.image);
      }
    }
  }, [data.image]);

  const SERVICES = [
    { title: "PRIMARY CARE", icon: Stethoscope, desc: "Comprehensive health check-ups and preventive screenings for everyday wellness." },
    { title: "FAMILY MEDICINE", icon: HeartPulse, desc: "Dedicated, compassionate care for adults, children, and seniors." },
    { title: "WOMEN'S HEALTH", icon: Activity, desc: "Routine exams, prenatal care, and specialized wellness programs." }
  ];

  const TESTIMONIALS = [
    { text: "Absolutely the best medical experience I've ever had. Highly recommended! The staff is incredibly professional, caring, and attentive.", author: "Sarah Jenkins" },
    { text: "They truly listen to your concerns. I never felt rushed during my consultation. A completely refreshing healthcare experience.", author: "Michael Thompson" }
  ];

  // Helper for safe data rendering
  const safeName = data.name || "Clinic Name";

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-slate-800 selection:bg-[#159b9a] selection:text-white overflow-x-hidden">
      
      {/* --- TOP BAR --- */}
      <div className="bg-[#159b9a] text-white py-2 px-4 sm:px-6 lg:px-8 text-center sm:text-right text-xs md:text-sm font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-6 opacity-90">
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {data.phone || "555-123-4567"}</span>
          <span className="hidden sm:flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {data.city || "Springfield"}</span>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`bg-white border-b transition-all duration-300 sticky top-0 z-50 ${isScrolled ? "py-3 shadow-md border-transparent" : "py-5 border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#159b9a] to-[#0f7a79] text-white rounded-lg flex items-center justify-center shadow-lg shadow-teal-900/20 shrink-0">
              <Plus className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0b2b46] leading-none flex flex-col">
              {safeName.split(" ").slice(0, 2).join(" ")}
              <span className="text-slate-500 font-medium text-xs sm:text-sm tracking-normal mt-0.5">{safeName.split(" ").slice(2).join(" ")}</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-sm font-bold text-[#159b9a] uppercase tracking-wider relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#159b9a] transition-colors">Home</a>
            <a href="#about" className="text-sm font-bold text-slate-600 hover:text-[#159b9a] uppercase tracking-wider transition-colors">About Us</a>
            <a href="#services" className="text-sm font-bold text-slate-600 hover:text-[#159b9a] uppercase tracking-wider transition-colors">Services</a>
            <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-[#159b9a] uppercase tracking-wider transition-colors">Contact</a>
            
            <a href="#contact" className="ml-4 bg-[#0b2b46] text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#159b9a] hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              Patient Portal
            </a>
          </div>

          <button className="lg:hidden text-[#0b2b46] p-2 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl absolute w-full z-40 animate-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-6 flex flex-col gap-5 font-bold text-slate-700 uppercase tracking-wider text-sm">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-[#159b9a] flex items-center justify-between">Home <ChevronRight className="w-4 h-4" /></a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between">About Us <ChevronRight className="w-4 h-4" /></a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between">Services <ChevronRight className="w-4 h-4" /></a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between">Contact <ChevronRight className="w-4 h-4" /></a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-gradient-to-r from-[#159b9a] to-[#0f7a79] text-white py-3.5 rounded-xl text-center shadow-lg">Book Appointment</a>
          </div>
        </div>
      )}

      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative bg-white pt-10 md:pt-20 pb-24 md:pb-40 lg:pb-48">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-10 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-block bg-[#eef8f8] text-[#159b9a] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-teal-100 shadow-sm">
              Welcome to {safeName}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold text-[#0b2b46] leading-[1.1] mb-6 uppercase tracking-tight">
              Compassionate Care <br className="hidden lg:block"/> For Your Family
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Dr. Emily Carter and her team are committed to providing comprehensive, personalized medical care for patients of all ages.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#159b9a] to-[#118281] text-white px-8 sm:px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-teal-900/20 transition-all w-full sm:w-auto justify-center">
                Book An Appointment <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10 order-1 lg:order-2 group"
          >
             <motion.img 
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src={heroImage} alt="Doctor and Patient" className="w-full h-full object-cover object-top" 
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0b2b46]/30 to-transparent mix-blend-multiply"></div>
          </motion.div>
        </div>

        {/* --- OVERLAPPING SERVICES BANNER (Responsive & Animated) --- */}
        <div className="relative lg:absolute lg:bottom-0 lg:translate-y-1/2 mt-12 lg:mt-0 px-4 sm:px-6 lg:px-8 z-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-6xl mx-auto bg-gradient-to-b from-[#eef8f8] to-[#e4f4f4] rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-teal-900/10 flex flex-col md:flex-row justify-between gap-8 border border-white"
          >
            {SERVICES.map((srv, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}
                className="flex-1 flex items-start gap-5 p-4 rounded-2xl hover:bg-white/80 transition-colors group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-md shadow-teal-900/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  <srv.icon className="w-7 h-7 text-[#d4af37]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0b2b46] uppercase tracking-wide mb-2">{srv.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="hidden lg:block h-32 bg-[#fafbfc]"></div>

      {/* --- 2. ABOUT SECTION --- */}
      <section id="about" className="py-20 lg:py-32 bg-[#fafbfc] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#159b9a]/20 to-transparent rounded-[3rem] transform -rotate-6 -z-10 blur-xl"></div>
            <div className="absolute -inset-4 bg-[#eef8f8] rounded-[3rem] transform -rotate-3 -z-10 shadow-inner"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#0b2b46]/10 aspect-[3/4] border-4 border-white relative group">
              <img src={doctorImage} alt="Lead Doctor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <motion.div 
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-[#0b2b46] text-white p-6 rounded-3xl shadow-2xl hidden sm:block border-4 border-[#fafbfc]"
            >
              <h4 className="text-3xl font-black text-[#159b9a] mb-1">15+</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Years Experience</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2b46] mb-4 tracking-tight">Meet Dr. Emily Carter</h2>
            <h3 className="text-[#159b9a] font-bold text-lg mb-8 uppercase tracking-wider">Dedicated Family Physician</h3>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              {data.about || "Dr. Emily Carter is dedicated to comprehensive screening, and medical care based on your family's needs. We provide evidence-based medicine while fostering a warm, welcoming environment for our patients."}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our clinic eliminates the stress from healthcare. We offer priority scheduling, extended consultations, and a proactive approach to maintaining your health and wellness annually.
            </p>
            
            <motion.a 
              whileHover={{ x: 5 }} transition={{ type: "spring" }}
              href="#contact" className="inline-flex items-center gap-2 text-[#159b9a] font-bold text-lg hover:text-[#0b2b46] transition-colors border-b-2 border-[#159b9a] pb-1 hover:border-[#0b2b46]"
            >
              Learn More About Our Clinic <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* --- 3. TESTIMONIALS SECTION --- */}
      <section className="py-20 lg:py-32 bg-[#eef8f8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#159b9a] rounded-full blur-[120px] opacity-[0.15]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px] opacity-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-[#0b2b46] uppercase tracking-wider mb-4">Patient Testimonials</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#e4c55a] mx-auto rounded-full shadow-sm"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {TESTIMONIALS.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-lg rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-teal-900/5 border border-white relative group"
              >
                <div className="text-8xl text-[#159b9a] font-serif leading-none absolute -top-2 right-8 opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-500">"</div>
                <p className="text-slate-700 italic leading-relaxed mb-8 text-lg relative z-10 font-medium">
                  {test.text}
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#159b9a] to-[#0f7a79] shadow-lg shadow-teal-900/20 flex items-center justify-center font-bold text-white text-xl border-2 border-white">
                      {test.author.charAt(0)}
                   </div>
                   <div>
                     <span className="font-bold text-[#0b2b46] uppercase tracking-wide block">{test.author}</span>
                     <span className="text-sm text-[#d4af37] font-semibold flex items-center gap-1 mt-1">
                       <Clock className="w-3.5 h-3.5 fill-current" /> Verified Patient
                     </span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CONTACT / BOOKING SECTION --- */}
      <section id="contact" className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0b2b46] rounded-[3rem] overflow-hidden shadow-2xl relative">
            {/* Background elements for the form container */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#159b9a] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              {/* Left Side - Info */}
              <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-between relative z-10">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 uppercase tracking-tight">Request an <br/>Appointment</h2>
                  <p className="text-slate-300 mb-10 leading-relaxed font-medium">
                    Fill out the form and our scheduling team will reach out to confirm your preferred time. We are currently accepting new patients.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Phone className="w-5 h-5 text-[#159b9a]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Call Us</p>
                      <p className="text-lg text-white font-semibold">{data.phone || "555-123-4567"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Mail className="w-5 h-5 text-[#159b9a]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email Us</p>
                      <p className="text-lg text-white font-semibold">{data.email || "hello@clinic.com"}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Form */}
              <div className="lg:col-span-3 bg-white p-10 lg:p-14 m-2 rounded-[2.5rem] shadow-inner relative z-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#159b9a] focus:border-transparent transition-all font-medium" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" placeholder="(555) 000-0000" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#159b9a] focus:border-transparent transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#159b9a] focus:border-transparent transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help?</label>
                    <textarea rows={4} placeholder="Briefly describe your symptoms or reason for visit..." className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#159b9a] focus:border-transparent transition-all font-medium resize-none"></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#159b9a] to-[#118281] text-white font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-teal-900/20 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Submit Request <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / LOCATION INFO --- */}
      <footer className="bg-[#0f1f38] text-white pt-24 pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#159b9a] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-12 border-b border-slate-700/60">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#159b9a] transition-colors duration-300">
                <MapPin className="w-6 h-6 text-[#159b9a] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">Location</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {data.address || "123 Wellness Way"}<br/>
                  {data.city || "Springfield"}, {data.state || "IL"} {data.pincode || "62704"}
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#159b9a] transition-colors duration-300">
                <Phone className="w-6 h-6 text-[#159b9a] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">Contact Us</h4>
                <p className="text-slate-400 font-medium mb-1 hover:text-white transition-colors cursor-pointer">{data.phone || "555-123-4567"}</p>
                <p className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">{data.email || "info@medical.com"}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#159b9a] transition-colors duration-300">
                <Clock className="w-6 h-6 text-[#159b9a] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">Clinic Hours</h4>
                <p className="text-slate-400 font-medium mb-1">Monday - Friday: <br className="sm:hidden"/> 8:00 AM - 5:00 PM</p>
                <p className="text-slate-400 font-medium text-sm mt-2 text-[#d4af37]">Saturday & Sunday: Closed</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            <p>www.{data.slug || "clinic"}.com</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Patient Portal</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
