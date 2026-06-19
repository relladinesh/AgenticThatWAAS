
import { TemplateProps } from "@/types";
import { motion } from "framer-motion";
import {
  HeartPulse, Activity, Lock, Video, UserPlus, Link, MonitorSmartphone,
  CheckCircle2, ArrowRight, Menu, X, Plus, PlayCircle, Star, Phone, Mail,
  MapPin, MessageCircle, ChevronDown, Clock, Stethoscope
} from "lucide-react";
import { useState, useEffect } from "react";

export default function DoctorTemplate5({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const safeName = data.name || "PatientCare";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const TESTIMONIALS = [
    { text: "Absolutely the best medical experience I've ever had. Highly recommended! The staff is incredibly professional, caring, and attentive.", author: "Sarah Jenkins" },
    { text: "This platform completely changed how I manage my chronic condition. The automated alerts give me and my family incredible peace of mind.", author: "David Chen" },
    { text: "They truly listen to your concerns. I never felt rushed during my consultation. A completely refreshing healthcare experience.", author: "Michael Thompson" },
    { text: "The virtual consultations are flawless. I can talk to my doctor from home without any technical issues. Five stars!", author: "Emily Rodriguez" },
    { text: "Having all my health data synced automatically has saved me so much time. The AI insights are surprisingly accurate.", author: "James Wilson" }
  ];

  const FEATURES = [
    { icon: HeartPulse, title: "Real-Time Health Tracking", desc: "Monitor vitals with automatic sync to your smart devices and instant alerts for abnormal readings." },
    { icon: Video, title: "Virtual Doctor Consultations", desc: "HD video calls with secure chat messaging. Connect with medical experts and schedule seamlessly." },
    { icon: Activity, title: "Smart Wellness Insights", desc: "AI-powered health reports with trend analysis graphs and personalized suggestions tailored to you." },
    { icon: Lock, title: "Secure Patient Data", desc: "End-to-end encryption with HIPAA-level protection. Multi-device secure login keeps your data private." }
  ];

  const HOW_IT_WORKS = [
    { icon: UserPlus, title: "Create Your Account", steps: ["Sign up as a patient or provider", "Secure login with OTP", "Set up your basic health profile"], active: false },
    { icon: Link, title: "Connect Your Devices", steps: ["Sync smart devices (BP Monitor, etc)", "Receive automated alerts", "Enable real-time data tracking"], active: true },
    { icon: MonitorSmartphone, title: "Start Monitoring & Consulting", steps: ["View live health data", "Receive automated alerts", "Book instant doctor consultations"], active: false }
  ];

  const FAQS = [
    { q: "Do you accept insurance?", a: "Yes, we accept most major insurance providers. Please contact our front desk to verify your specific coverage." },
    { q: "How do virtual consultations work?", a: "Once booked, you'll receive a secure link via email. Simply click it at your appointment time to connect with your doctor." },
    { q: "Is my medical data secure?", a: "Absolutely. Our platform utilizes bank-level encryption and is fully HIPAA-compliant to ensure your privacy." },
    { q: "Can I cancel or reschedule my appointment?", a: "Yes, you can reschedule up to 24 hours before your appointment through the patient portal without any fees." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-purple-600 selection:text-white overflow-x-hidden">

      {/* --- NAVIGATION --- */}
      <nav className={`bg-slate-50/90 backdrop-blur-md border-b transition-all duration-300 sticky top-0 z-50 ${isScrolled ? "py-4 border-slate-200 shadow-sm" : "py-6 border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white">
              <Plus strokeWidth={3} className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">{safeName}</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-100">
            <a href="#home" className="text-sm font-bold text-purple-700">Home</a>
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-purple-700 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-purple-700 transition-colors">How It Works</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-purple-700 transition-colors">About</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-800 transition-all shadow-md shadow-purple-900/20">
              Contact &rarr;
            </a>
          </div>

          <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 absolute w-full z-40 px-6 py-6 flex flex-col gap-4 shadow-xl font-semibold">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-purple-700">Home</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-purple-700 text-white px-6 py-3 rounded-full text-center mt-2">Contact &rarr;</a>
        </div>
      )}

      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative pt-12 md:pt-20 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-purple-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        {/* Abstract Medical Sketch */}
        <Activity className="absolute -left-20 top-10 w-[600px] h-[600px] text-purple-900 opacity-10 -rotate-12 pointer-events-none" strokeWidth={0.5} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold text-xs uppercase tracking-wide px-4 py-2 rounded-full mb-6 border border-purple-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-600" /> Trusted Healthcare Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Health Tracking <br className="hidden lg:block" /> Without Limits. Stay <br className="hidden lg:block" /> Connected to Your <br className="hidden lg:block" /> Wellness.
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-lg">
              Easily monitor your key health data, secure virtual doctor consultations, and actively manage your wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-purple-700 text-white px-8 py-3.5 rounded-full font-bold text-sm text-center shadow-lg shadow-purple-900/20 hover:bg-purple-800 transition-all">
                Book Appointment
              </a>
              <a href="#features" className="bg-white text-purple-700 border-2 border-purple-100 px-8 py-3.5 rounded-full font-bold text-sm text-center hover:border-purple-200 hover:bg-purple-50 transition-all">
                For Healthcare Providers
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10"></div>
            <img src={data.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"} alt="Healthcare Professional" className="w-full h-full object-cover object-center" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. FEATURES --- */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-purple-50 text-purple-700 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Smart Features That Make Health <br className="hidden sm:block" /> Monitoring Effortless</h2>
            <p className="text-slate-500 font-medium text-lg">Stay ahead of your wellness with powerful tools designed for patients & providers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5 transition-all group">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6 text-sm">{feature.desc}</p>
                <a href="#" className="inline-flex items-center text-slate-400 text-sm font-semibold hover:text-purple-600 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. HOW IT WORKS --- */}
      <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Abstract Medical Sketch */}
        <Stethoscope className="absolute -right-32 top-10 w-[700px] h-[700px] text-purple-900 opacity-10 -rotate-6 pointer-events-none" strokeWidth={0.5} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Simple steps. Powerful monitoring.</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">How It Works</h2>
            <p className="text-slate-500 font-medium text-lg">Follow these easy steps to start your remote health tracking journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-[2rem] p-8 sm:p-10 ${item.active ? 'bg-purple-700 text-white shadow-2xl shadow-purple-900/20 scale-105 z-10 relative' : 'bg-purple-50 text-slate-800'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.active ? 'bg-white/20 text-white' : 'bg-white text-purple-600 shadow-sm'}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-6 ${item.active ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <ul className="space-y-4">
                  {item.steps.map((step, idx) => (
                    <li key={idx} className={`text-sm font-medium flex items-start gap-3 ${item.active ? 'text-purple-100' : 'text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.active ? 'bg-purple-300' : 'bg-purple-300'}`}></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. ABOUT BUSINESS --- */}
      <section id="about" className="py-24 bg-white overflow-hidden relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-purple-50 text-purple-700 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Healthcare Reimagined</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">About {safeName}</h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">A modern platform designed to help patients and doctors stay connected through smart, real-time health monitoring.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Mockup UI */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-purple-700 rounded-[2.5rem] p-8 pb-0 sm:p-12 sm:pb-0 shadow-2xl shadow-purple-900/20">
              <div className="bg-white rounded-t-3xl p-6 pb-12 shadow-inner border border-b-0 border-purple-200">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl shrink-0">
                    {data.name?.charAt(0) || "D"}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. Wajid</h4>
                    <p className="text-xs text-slate-400 font-medium">Reviewing patient data</p>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Patient Vitals</span>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span> Live</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <HeartPulse className="w-5 h-5 text-rose-500 mx-auto mb-2" />
                    <p className="text-2xl font-black text-slate-900">74</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">BPM</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <Activity className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-black text-slate-900">98%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">SpO2</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <MonitorSmartphone className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                    <p className="text-2xl font-black text-slate-900">120/80</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">BP</p>
                  </div>
                </div>

                {/* Decorative Chart Line */}
                <svg className="w-full h-12 mt-8 text-purple-200" preserveAspectRatio="none" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20C10 20 15 5 25 5C35 5 40 35 50 35C60 35 65 15 75 15C85 15 90 25 100 25C110 25 115 10 125 10C135 10 140 30 150 30C160 30 165 20 175 20C185 20 190 5 200 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Dr. Wajid</p>
                  <p className="text-xs text-slate-500">Reviewing records now</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Text & Stats */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">Bridging the Gap Between Patients & Doctors</h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                {data.about || "PatientCare is built to make remote health monitoring simpler, faster, and more reliable. Our platform bridges the gap between patients and doctors by providing real-time updates, smart alerts, and easy-to-read health reports."}
              </p>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">
                We believe that healthcare should be accessible, transparent, and efficient. That's why we've created a solution that empowers both patients to take control of their health and doctors to provide better, more informed care — all designed to improve care quality.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-100 py-6 mb-8">
                <div>
                  <p className="text-3xl font-black text-purple-700 mb-1">10K+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Patients</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-purple-700 mb-1">500+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Doctors</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-purple-700 mb-1">99.9%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Uptime</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <span className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> HIPAA Compliant</span>
                <span className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> 256-bit Encryption</span>
                <span className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 5. TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Abstract Medical Sketch */}
        <MessageCircle className="absolute -left-20 top-20 w-[600px] h-[600px] text-purple-900 opacity-10 rotate-12 pointer-events-none" strokeWidth={0.5} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">What Our Patients Say</h2>
            <p className="text-slate-500 font-medium text-lg mb-8">Trusted by thousands of users worldwide.</p>
            
            {/* Controls */}
            <div className="flex items-center justify-center gap-4 relative z-30">
              <button 
                onClick={() => setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-purple-700 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                &larr;
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)} className={`block h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-purple-600 w-8' : 'bg-slate-300 w-2.5 hover:bg-purple-400'}`}></button>
                ))}
              </div>
              <button 
                onClick={() => setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-purple-700 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="relative h-[500px] sm:h-[400px] w-full max-w-6xl mx-auto flex items-center justify-center">
            {TESTIMONIALS.map((test, i) => {
              let diff = i - activeIndex;
              if (diff < -Math.floor(TESTIMONIALS.length / 2)) diff += TESTIMONIALS.length;
              if (diff > Math.floor(TESTIMONIALS.length / 2)) diff -= TESTIMONIALS.length;

              const isMiddle = diff === 0;
              const isVisible = Math.abs(diff) <= 1;

              return (
                <motion.div 
                  key={i} 
                  initial={false}
                  animate={{ 
                    x: `${diff * 105}%`, 
                    scale: isMiddle ? 1.05 : 0.85,
                    opacity: isVisible ? (isMiddle ? 1 : 0.5) : 0,
                    zIndex: isMiddle ? 20 : 10
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-full max-w-xs sm:max-w-sm md:max-w-md p-8 sm:p-10 rounded-[2rem] shadow-xl overflow-hidden transition-colors duration-500 cursor-pointer ${isMiddle ? 'bg-purple-700 text-white shadow-purple-900/20' : 'bg-white text-slate-800 border border-slate-100'}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className={`absolute -right-2 -top-6 text-9xl font-serif leading-none opacity-50 select-none transition-colors duration-500 ${isMiddle ? 'text-purple-600' : 'text-slate-100'}`}>"</div>
                  
                  <div className="flex mb-6 text-yellow-400">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current drop-shadow-sm" />)}
                  </div>
                  
                  <p className={`font-medium mb-8 leading-relaxed relative z-10 transition-colors duration-500 ${isMiddle ? 'text-purple-50' : 'text-slate-600'}`}>
                    "{test.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-500 ${isMiddle ? 'bg-white text-purple-700 shadow-inner' : 'bg-purple-100 text-purple-700'}`}>
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm transition-colors duration-500 ${isMiddle ? 'text-white' : 'text-slate-900'}`}>{test.author}</h4>
                      <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 transition-colors duration-500 ${isMiddle ? 'text-purple-300' : 'text-slate-400'}`}>Verified Patient</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 6. PRICING --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Transparent Pricing</h2>
            <p className="text-slate-500 font-medium text-lg">Choose a plan that fits your healthcare needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
              <p className="text-slate-500 text-sm font-medium mb-6">For individuals needing simple tracking.</p>
              <div className="mb-8"><span className="text-4xl font-black text-slate-900">$0</span><span className="text-slate-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600" /> 1 Connected Device</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600" /> Basic Health Reports</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-400 opacity-50"><CheckCircle2 className="w-5 h-5" /> Virtual Consultations</li>
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-purple-200 text-purple-700 font-bold hover:bg-purple-50 transition-colors">Get Started</button>
            </div>

            {/* Pro */}
            <div className="bg-purple-700 rounded-[2rem] p-8 shadow-2xl shadow-purple-900/20 text-white relative scale-105 z-10">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-black uppercase tracking-wider py-1 px-3 rounded-full">Popular</div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-purple-200 text-sm font-medium mb-6">Complete health monitoring suite.</p>
              <div className="mb-8"><span className="text-4xl font-black">$29</span><span className="text-purple-200 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-purple-300" /> Unlimited Devices</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-purple-300" /> AI-Powered Insights</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-purple-300" /> 2 Virtual Consults/mo</li>
              </ul>
              <button className="w-full py-3 rounded-full bg-white text-purple-700 font-bold hover:bg-slate-50 transition-colors shadow-lg">Start Free Trial</button>
            </div>

            {/* Family */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Family</h3>
              <p className="text-slate-500 text-sm font-medium mb-6">Keep the whole family connected.</p>
              <div className="mb-8"><span className="text-4xl font-black text-slate-900">$79</span><span className="text-slate-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600" /> Up to 5 Profiles</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600" /> Shared Dashboards</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600" /> Unlimited Consults</li>
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-purple-200 text-purple-700 font-bold hover:bg-purple-50 transition-colors">Choose Family</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FAQ --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Abstract Medical Sketch */}
        <a className="absolute -right-32 bottom-0 w-[600px] h-[600px] text-purple-900 opacity-10 rotate-45 pointer-events-none" strokeWidth={0.5} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-purple-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 font-medium text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. CONTACT FORM & MAP --- */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-purple-900 rounded-[3rem] overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-2">

            {/* Form */}
            <div className="p-10 sm:p-14 relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-2">Get in Touch</h2>
              <p className="text-purple-200 font-medium mb-10 text-sm">Our team is ready to assist you. Fill out the form below.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 text-white placeholder-purple-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all font-medium text-sm" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 text-white placeholder-purple-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all font-medium text-sm" />
                </div>
                <div>
                  <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/10 border border-white/20 text-white placeholder-purple-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all font-medium text-sm resize-none"></textarea>
                </div>
                <button className="w-full bg-white text-purple-900 font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-purple-50 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 relative min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-100">
                <MapPin className="w-12 h-12 mb-4 text-purple-400" />
                <p className="font-bold text-slate-600">Google Maps Integration</p>
                <p className="text-sm">{data.address || "123 Healthcare Ave, Springfield"}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#2e1065] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-purple-800/50">

            {/* Column 1 */}
            <div className="lg:pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                  <Plus strokeWidth={3} className="w-5 h-5" />
                </div>
                <span className="text-xl font-black tracking-tight">{safeName}</span>
              </div>
              <p className="text-purple-200 text-sm leading-relaxed font-medium">
                Monitor patient health remotely with secure, real-time insights for better clinical decisions.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-6 text-white tracking-wide">Platform</h4>
              <ul className="space-y-4 text-sm font-medium text-purple-200">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-6 text-white tracking-wide">Resources</h4>
              <ul className="space-y-4 text-sm font-medium text-purple-200">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold mb-6 text-white tracking-wide">Contact</h4>
              <ul className="space-y-4 text-sm font-medium text-purple-200">
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-purple-400" /> {data.email || "support@patientcare.com"}</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-purple-400" /> {data.phone || "+1 (555) 123-4567"}</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-purple-400" /> 24/7 Support Available</li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-purple-300 font-medium">
            <p>&copy; {new Date().getFullYear()} {safeName}. All Rights Reserved.</p>
            <p className="flex items-center gap-1">Designed with <HeartPulse className="w-4 h-4 text-rose-500" /> for Healthcare</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={`https://wa.me/${(data.phone || "1234567890").replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageCircle className="w-7 h-7" />
      </a>

    </div>
  );
}
