
import { TemplateProps } from "@/types";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Star, ArrowRight, Activity, MapPin, Phone, Mail,
  CheckCircle2, Calendar, MessageCircle, ChevronDown,
  Award, Clock, Shield, HeartPulse, Stethoscope,
  Users, Play, Quote, Navigation, Search, ArrowUpRight,
  Menu, X, MessageSquare, Send, User, ChevronLeft, ChevronRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Mock Data
// Moved inside the component to allow dynamic static-content based on client specialization

// Reusable Components
const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-light text-slate-900 leading-tight"
    >
      {title.split(' ').map((word, i) => (
        i % 2 !== 0 ? <span key={i} className="font-serif italic text-emerald-800">{word} </span> : <span key={i}>{word} </span>
      ))}
    </motion.h2>
  </div>
);

const DoctorTemplate2 = ({ data }: TemplateProps) => {
  const isCardiology = data.name?.toLowerCase().includes('cardiology') || data.specialization?.toLowerCase().includes('cardio');

  const WHY_CHOOSE_US = isCardiology ? [
    { icon: Stethoscope, title: "Heart Specialists", desc: "Board-certified cardiologists with decades of combined experience." },
    { icon: Clock, title: "24/7 Cardiac Care", desc: "Round-the-clock emergency cardiovascular assistance." },
    { icon: Shield, title: "Advanced ECG/Echo", desc: "State-of-the-art cardiovascular imaging and diagnostic equipment." },
    { icon: HeartPulse, title: "Heart First", desc: "Personalized cardiovascular plans tailored to your specific heart goals." },
  ] : [
    { icon: Stethoscope, title: "Expert Specialists", desc: "Board-certified doctors with decades of combined experience and international training." },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock medical assistance for your peace of mind, whenever you need it." },
    { icon: Shield, title: "Advanced Tech", desc: "State-of-the-art medical equipment ensuring accurate diagnostics and precise treatments." },
    { icon: HeartPulse, title: "Patient First", desc: "Personalized care plans tailored specifically to your unique health goals and needs." },
  ];

  const PACKAGES = isCardiology ? [
    { name: "Basic Heart Check", price: "$149", features: ["Cardiology Consultation", "Blood Pressure", "Basic Lipid Panel", "ECG"] },
    { name: "Comprehensive Cardio", price: "$349", features: ["Specialist Consultation", "Echocardiogram", "Advanced Lipid Panel", "Stress Test", "Priority Support"], popular: true },
    { name: "Premium Cardiac", price: "$699", features: ["Senior Cardiologist Consult", "Full Cardiac MRI", "Genetic Heart Screening", "1-Year Follow-up", "24/7 Direct Line"] },
  ] : [
    { name: "Essential Checkup", price: "$99", features: ["General Consultation", "Blood Pressure & BMI", "Basic Blood Work", "Health Report"] },
    { name: "Comprehensive Care", price: "$249", features: ["Specialist Consultation", "Full Body Scan", "Advanced Blood Panel", "Dietary Plan", "Priority Support"], popular: true },
    { name: "Premium Wellness", price: "$499", features: ["Senior Specialist Consult", "Complete Diagnostics", "Genetic Screening", "1-Year Follow-up", "24/7 Direct Line"] },
  ];

  const PROCESS = isCardiology ? [
    { step: "01", title: "Book Appointment", desc: "Schedule your cardiac evaluation seamlessly online." },
    { step: "02", title: "Diagnostic Testing", desc: "Undergo non-invasive cardiac imaging and stress testing." },
    { step: "03", title: "Heart Roadmap", desc: "Receive a personalized, evidence-based roadmap for cardiovascular health." },
    { step: "04", title: "Ongoing Tracking", desc: "Continuous heart rate monitoring and dedicated follow-up support." },
  ] : [
    { step: "01", title: "Book Appointment", desc: "Schedule your visit seamlessly online or over the phone at your convenience." },
    { step: "02", title: "Initial Consultation", desc: "Meet with our specialists for a thorough evaluation and open discussion of your health." },
    { step: "03", title: "Custom Treatment", desc: "Receive a highly personalized, evidence-based roadmap tailored for your well-being." },
    { step: "04", title: "Ongoing Care", desc: "Continuous monitoring and dedicated support to ensure your long-term health goals are met." },
  ];

  const FAQS = isCardiology ? [
    { q: "What should I avoid before a stress test?", a: "Please avoid caffeine, smoking, and heavy meals for at least 4 hours before your cardiac stress test." },
    { q: "Do you accept major insurance plans?", a: "Yes, we work with most major insurance providers. Our billing department can help verify your specific coverage before your visit." },
    { q: "What should I bring to my first consultation?", a: "Please bring a valid ID, your insurance card, previous ECG/Echo results, and a list of current medications." },
    { q: "Are emergency cardiac consultations available?", a: "Yes, we reserve slots for urgent cardiac needs. If you are experiencing severe chest pain, please call 911 immediately." },
  ] : [
    { q: "How do I book an appointment?", a: "You can book an appointment directly through our website by clicking the 'Book Appointment' button, or by calling our clinic's dedicated reception line." },
    { q: "Do you accept major insurance plans?", a: "Yes, we work with most major insurance providers. Our billing department can help verify your specific coverage before your visit." },
    { q: "What should I bring to my first consultation?", a: "Please bring a valid ID, your insurance card, and any relevant medical records, previous test results, or a list of current medications." },
    { q: "Are emergency consultations available?", a: "We reserve specific slots daily for urgent care needs. Please call our emergency helpline for immediate assistance." },
  ];

  const BLOG_POSTS = isCardiology ? [
    { title: "Understanding Heart Health in Your 40s", category: "Cardiology", date: "Oct 12, 2026" },
    { title: "The Role of Nutrition in Managing Cholesterol", category: "Diet", date: "Oct 05, 2026" },
    { title: "Recognizing the Early Signs of Heart Disease", category: "Prevention", date: "Sep 28, 2026" }
  ] : [
    { title: "Understanding Heart Health in Your 40s", category: "Cardiology", date: "Oct 12, 2026" },
    { title: "The Role of Nutrition in Preventive Care", category: "Wellness", date: "Oct 05, 2026" },
    { title: "Managing Stress for Better Physical Health", category: "Mental Health", date: "Sep 28, 2026" }
  ];

  const GALLERY = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-cebb47acdd4e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.clientWidth : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">

      {/* --- FLOATING WHATSAPP --- */}
      <a
        href={`https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* --- FLOATING FEEDBACK --- */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
        <AnimatePresence>
          {isFeedbackOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white p-5 md:p-6 rounded-l-2xl shadow-2xl border border-slate-100 border-r-0 w-[85vw] max-w-[320px] mr-0 md:mr-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-slate-900">Send Feedback</h3>
                <button onClick={() => setIsFeedbackOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <textarea
                placeholder="Tell us what you think..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500 mb-3 resize-none"
                rows={4}
              ></textarea>
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="w-full bg-emerald-600 text-white py-3 md:py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors flex justify-center items-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isFeedbackOpen && (
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="flex bg-slate-900 text-white py-3 px-2 md:py-4 md:px-3 rounded-l-xl shadow-xl hover:bg-emerald-600 transition-colors flex-col items-center gap-1 md:gap-2 border border-slate-700 border-r-0 group"
          >
            <MessageSquare className="w-4 h-4 md:mb-1 text-emerald-400 group-hover:text-white" />
            <span className="text-[10px] md:text-xs font-medium tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>FEEDBACK</span>
          </button>
        )}
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-0' : 'bg-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xl font-medium tracking-tight text-slate-900">
              {data.name}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { id: 'home', label: 'Home', href: '#' },
              { id: 'about', label: 'About Us', href: '#about' },
              { id: 'services', label: 'Services', href: '#services' },
              { id: 'contact', label: 'Contact Us', href: '#contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`relative pb-1 transition-colors ${
                  activeTab === item.id ? 'text-emerald-600 font-semibold' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div layoutId="nav-indicator" className="absolute left-0 right-0 -bottom-1 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-slate-900 text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-3">
              Contact Us
              <span className="bg-white text-slate-900 rounded-full p-1.5">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-6 flex flex-col gap-6 text-base font-medium">
                {[
                  { id: 'home', label: 'Home', href: '#' },
                  { id: 'about', label: 'About Us', href: '#about' },
                  { id: 'services', label: 'Services', href: '#services' },
                  { id: 'contact', label: 'Contact Us', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`transition-colors ${
                      activeTab === item.id ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="bg-slate-900 text-white px-6 py-4 rounded-full text-sm font-medium w-full mt-2 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-gradient-to-b from-white via-white to-[#e8f1f5] min-h-[90vh] flex items-center">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-200/40 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[100px]" />
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <img src={data.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop"} alt="Background" className="w-full h-full object-cover object-top opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/90" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl pb-20"
            >
              <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Your Health <br />
                Deserves the <span className="font-serif italic text-slate-900">right</span> <br />
                {data.specialization ? data.specialization.toLowerCase() : "specialist"}
              </h1>

              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-md">
                Connect with top rated doctors who listen and prioritize your health journey
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="#services" className="bg-slate-900 text-white border border-slate-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 w-max shadow-lg shadow-slate-900/20">
                  <ArrowUpRight className="w-4 h-4" /> Explore Services
                </a>
                <a href="#contact" className="bg-white text-slate-900 border border-slate-200 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 w-max">
                  Contact Clinic
                </a>
              </div>

              <div className="flex gap-12 border-t border-slate-200/60 pt-8">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Free Checkup</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">Comprehensive evaluation with no upfront costs. Limited time offer.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Custom Treatment Plan</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">From diagnosis to recovery, we map every step for your unique needs.</p>
                </div>
              </div>
            </motion.div>

            <div className="hidden lg:flex relative h-full min-h-[600px] items-end justify-center">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] border-[10px] border-white bg-slate-50 mt-10"
              >
                <img
                  src={data.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop"}
                  alt="Doctor"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Floating Cards - Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-[-15%] z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white max-w-[220px]"
              >
                <div className="flex items-center gap-[-10px] mb-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white -ml-3 z-10">
                    30M+
                  </div>
                </div>
                <p className="text-[10px] text-slate-600 leading-tight">Join millions who found the right doctor for their unique health needs.</p>
              </motion.div>

              {/* Floating Cards - Right Top (Working Hours) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 right-[-5%] z-20 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-white flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-slate-900 mb-0.5">Opening Hours</p>
                  <p className="text-[9px] text-slate-500 leading-tight">{data.openingHours || "Mon-Fri 9AM-5PM"}</p>
                </div>
              </motion.div>

              {/* Floating Cards - Right Bottom */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[15%] right-[-10%] z-20 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-white flex gap-3 max-w-[240px]"
              >
                <img src={`https://i.pravatar.cc/100?img=32`} alt="Doctor" className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold text-slate-900 mb-0.5">24/7 Virtual Care<br />Team at Your Service</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Board certified doctors available anytime</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. ABOUT BUSINESS --- */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={GALLERY[0]} alt="Clinic" className="rounded-3xl w-full h-64 object-cover transform translate-y-8" />
                <img src={GALLERY[1]} alt="Doctor" className="rounded-3xl w-full h-64 object-cover" />
              </div>
              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-emerald-600 ml-1" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading subtitle="About Our Practice" title="A Legacy of Care & Excellence" />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                {data.about || "We believe in a holistic approach to medicine, combining advanced technological diagnostics with compassionate, personalized patient care. Our experienced team is dedicated to providing you with the highest standard of health and wellness services."}
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Board-certified specialists with international experience",
                  "State-of-the-art diagnostic and treatment facilities",
                  "Comprehensive, patient-first care philosophy",
                  "Dedicated support team available around the clock"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-8 border-t border-slate-100 pt-8">
                <div>
                  <p className="text-4xl font-light text-emerald-600 mb-1">50k+</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Happy Patients</p>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <p className="text-4xl font-light text-emerald-600 mb-1">15+</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Expert Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES --- */}
      <section id="services" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Our Specialties" title="Comprehensive Medical Services" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from(new Set([
              ...(data.services || []),
              isCardiology ? "Echocardiogram" : "General Checkup",
              isCardiology ? "Cardiac Stress Test" : "Pediatric Care",
              isCardiology ? "Preventative Cardiology" : "Vaccinations",
              isCardiology ? "Arrhythmia Monitoring" : "Diagnostic Imaging",
              isCardiology ? "Heart Failure Management" : "Chronic Disease Management"
            ])).map((service: string | unknown, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <HeartPulse className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">{service}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">
                  Advanced diagnostic and therapeutic procedures utilizing the latest evidence-based medical protocols.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3 block">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Why Patients <span className="font-serif italic text-emerald-300">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 13. HEALTHCARE PROCESS --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-50/60 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Patient Journey" title="Your Path to Recovery" centered />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative mt-24">
            {/* Connecting Line with Animation (Desktop) */}
            <div className="hidden md:block absolute top-[3rem] left-[12%] right-[12%] h-[1px] bg-slate-200 -z-10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden md:block absolute top-[3rem] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-emerald-500 to-emerald-200 origin-left -z-10"
            />

            {PROCESS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group cursor-default"
              >
                {/* Glowing Aura on Hover */}
                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-24 h-24 mx-auto bg-white border border-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-[0_10px_40px_rgb(16,185,129,0.1)] group-hover:shadow-[0_15px_50px_rgb(16,185,129,0.2)] group-hover:-translate-y-2 transition-all duration-500 relative z-10">
                  <span className="text-3xl font-light font-serif italic text-emerald-600 group-hover:scale-110 transition-transform duration-500">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">{step.title}</h3>
                <p className="text-slate-500 font-light px-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. PRICING / PACKAGES --- */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Clear Pricing" title="Health Packages" centered />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto items-center">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-[2rem] p-8 ${pkg.popular
                    ? 'bg-emerald-600 text-white shadow-2xl scale-100 lg:scale-105 relative z-10'
                    : 'bg-white text-slate-900 shadow-lg border border-slate-100'
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-amber-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-medium mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-light">{pkg.price}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${pkg.popular ? 'text-emerald-200' : 'text-emerald-500'}`} />
                      <span className={pkg.popular ? 'text-emerald-50' : 'text-slate-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-medium transition-colors ${pkg.popular
                    ? 'bg-white text-emerald-700 hover:bg-slate-50'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="mb-0">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Patient Stories</span>
              <h2 className="text-4xl font-light text-slate-900">Words of Healing</h2>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden pb-12 w-full">
          <motion.div 
            className="flex gap-8 w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {/* We duplicate the array to create a seamless infinite marquee */}
            {[...(data.testimonials && data.testimonials.length > 0 ? data.testimonials : [
              { name: "Jhon Smith", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Smith Jhon", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Devid Jhon", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Alice Brown", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Robert Wilson", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." }
            ]), ...(data.testimonials && data.testimonials.length > 0 ? data.testimonials : [
              { name: "Jhon Smith", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Smith Jhon", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Devid Jhon", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Alice Brown", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
              { name: "Robert Wilson", review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy-nibh euismod tincidunt. Ut wisi enim ad minim veniam." }
            ])].map((test, idx) => {
              const colors = [
                { border: 'border-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-400' },
                { border: 'border-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-500' },
                { border: 'border-emerald-600', text: 'text-emerald-600', bg: 'bg-emerald-600' },
              ];
              const theme = colors[idx % colors.length];

              return (
                <div
                  key={idx}
                  className="relative pt-6 pl-10 pb-6 shrink-0 w-[320px] md:w-[350px] lg:w-[380px]"
                >
                  <div className={`relative bg-white rounded-[2rem] border-2 ${theme.border} p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full`}>

                    {/* Left Avatar Mask & Circle */}
                    <div className={`absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-white border-2 ${theme.border} rounded-full flex items-center justify-center z-10`}>
                      <div className={`w-10 h-10 ${theme.bg} rounded-full flex items-center justify-center`}>
                        <User className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Top Left Quote */}
                    <div className={`absolute -top-5 left-8 w-10 h-10 ${theme.bg} rounded-full flex items-center justify-center z-10 ring-4 ring-slate-50`}>
                      <Quote className="w-5 h-5 text-white fill-white transform rotate-180" />
                    </div>

                    {/* Bottom Right Quote */}
                    <div className={`absolute -bottom-5 right-8 w-10 h-10 ${theme.bg} rounded-full flex items-center justify-center z-10 ring-4 ring-slate-50`}>
                      <Quote className="w-5 h-5 text-white fill-white" />
                    </div>

                    {/* Card Content */}
                    <div className="pl-6">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{test.name}</h3>
                          <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">Client Designation</p>
                        </div>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Colored Horizontal Line */}
                      <div className={`w-16 h-[2px] ${theme.bg} my-4`}></div>

                      <p className="text-sm text-slate-500 italic leading-relaxed min-h-[80px]">
                        "{test.review}"
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- 8. FAQ --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Got Questions?" title="Frequently Asked Questions" centered />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-slate-600 font-light leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 9 & 11. CONTACT & MAPS --- */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              {/* Contact Info & Form */}
              <div className="p-12 lg:p-20 text-white">
                <h2 className="text-4xl font-light mb-4">Request a <span className="font-serif italic text-emerald-400">Consultation</span></h2>
                <p className="text-slate-400 font-light mb-12">Fill out the form below and our team will get back to you to confirm your appointment time.</p>

                <form className="space-y-6 mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors" />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors" />
                  <textarea placeholder="How can we help you?" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none"></textarea>
                  <button className="bg-emerald-500 text-white w-full py-4 rounded-xl font-medium text-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                    Submit Request
                  </button>
                </form>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Call Us Direct</p>
                      <p className="text-lg font-medium text-white">{data.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email Us</p>
                      <p className="text-lg font-medium text-white">{data.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Visit Clinic</p>
                      <p className="text-lg font-medium text-white">{data.address || "123 Healing Way"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Opening Hours</p>
                      <p className="text-lg font-medium text-white">{data.openingHours || "Mon-Fri 9AM-5PM"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] lg:h-auto w-full bg-slate-800">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(data.address || "New York")}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                  className="filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 pt-24 pb-12 relative overflow-hidden text-slate-300 mt-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-2xl font-medium tracking-tight text-white">
                  {data.name}
                </span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed mb-8">
                Providing premium, personalized {data.specialization ? data.specialization.toLowerCase() : 'healthcare'} services with a commitment to excellence and your complete well-being.
              </p>
              <div className="flex gap-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm opacity-80" style={{ maskImage: `url('https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', backgroundColor: 'currentColor' }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'About Our Practice', 'Specialized Services', 'Patient Success Stories', 'Frequently Asked Questions'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 -ml-5 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-medium mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{data.address || "123 Healing Way, Medical District"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{data.phone || "(555) 123-4567"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{data.email || "hello@clinic.com"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{data.openingHours || "Mon-Fri 9AM-5PM"}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium mb-6">Health Tips</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Subscribe to receive weekly medical advice, nutrition tips, and wellness strategies.
              </p>
              <form className="relative group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-12 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button type="button" className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};
export default DoctorTemplate2;
