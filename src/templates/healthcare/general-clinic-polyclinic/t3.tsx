
import { TemplateProps } from "@/types";
import { 
  Phone, Mail, MapPin, Calendar, Clock, ChevronRight, ChevronLeft, 
  Star, Shield, Activity, Users, ArrowRight, Play, CheckCircle2, 
  Search, Plus, Minus, MessageCircle, HeartPulse, Award, Stethoscope, Video, Facebook, Twitter, Instagram, Linkedin, User
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      {children}
    </div>
  );
};

export default function DoctorTemplate3({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Dynamic Image Logic
  const [heroImage, setHeroImage] = useState(data.image?.includes('.png') ? data.image : "https://pngimg.com/uploads/doctor/doctor_PNG15988.png");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [expertImages, setExpertImages] = useState<string[]>([]);

  useEffect(() => {
    // Hero
    if (!data.image?.includes('.png')) {
      const DOCTOR_PNGS = [
        "https://pngimg.com/uploads/doctor/doctor_PNG15988.png",
        "https://pngimg.com/uploads/doctor/doctor_PNG16031.png",
        "https://pngimg.com/uploads/doctor/doctor_PNG15959.png"
      ];
      setHeroImage(DOCTOR_PNGS[Math.floor(Math.random() * DOCTOR_PNGS.length)]);
    } else {
      setHeroImage(data.image);
    }

    // Gallery
    const POOL = [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584043720379-b56cd91b4cce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594824436998-ddedce28b14e?q=80&w=800&auto=format&fit=crop"
    ];
    setGalleryImages([...POOL].sort(() => 0.5 - Math.random()).slice(0, 4));

    // Experts
    const EXPERTS = [
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594824436998-ddedce28b14e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop"
    ];
    setExpertImages([...EXPERTS].sort(() => 0.5 - Math.random()).slice(0, 4));

  }, [data.name]);

  const FAQS = [
    { q: "What should I bring to my first appointment?", a: "Please bring your valid ID, insurance card, and any previous medical records or test results related to your visit." },
    { q: "Do you accept my health insurance?", a: "We accept most major health insurance plans. Please contact our billing department or check our website to verify specific coverage." },
    { q: "How can I book an emergency consultation?", a: "For emergencies, please call our 24/7 hotline directly or visit our emergency ward. For urgent but non-life-threatening issues, use our priority booking." },
    { q: "What is your cancellation policy?", a: "We require at least 24 hours notice for cancellations. Late cancellations may be subject to a fee." }
  ];

  const PRICING = [
    { name: "Basic Care", price: "$49", period: "per visit", features: ["General Consultation", "Basic Blood Test", "Prescription", "1 Follow-up Call"] },
    { name: "Standard Plan", price: "$129", period: "monthly", features: ["Unlimited Consultations", "Full Blood Panel", "Priority Booking", "Specialist Referrals", "24/7 Chat Support"], popular: true },
    { name: "Premium Family", price: "$299", period: "monthly", features: ["Cover up to 4 members", "Advanced Diagnostics", "Home Visit (1/mo)", "Dedicated Health Coach", "Zero Wait Time"] }
  ];

  const TESTIMONIALS = [
    { text: "Absolutely the best medical experience I've ever had. The staff is friendly, the environment is comfortable, and Dr. Carter did an amazing job with my treatment. Highly recommended!", author: "Sarah Jenkins" },
    { text: "I was extremely nervous about my procedure, but the team here made me feel completely at ease. Professional, clean, and top-tier expertise. I wouldn't trust any other clinic.", author: "Michael Thompson" },
    { text: "Finally found a clinic that actually listens to my concerns. The wait times are minimal and the doctors genuinely care about long-term health outcomes.", author: "Emily Rodriguez" }
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden scroll-smooth selection:bg-[#1e3a8a] selection:text-white">
      
      {/* Floating WhatsApp CTA */}
      <a href={`https://wa.me/1234567890`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* HEADER ASSEMBLY */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* TOP BAR */}
        <div className="bg-slate-900 text-white text-xs py-2 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-blue-400" /> {data.phone || "+1 234 567 890"}</span>
              <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-blue-400" /> {data.email || "contact@clinic.com"}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Emergency Care: 24/7 Available</span>
              <div className="flex gap-3 ml-4">
                <Facebook className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <header className="bg-white shadow-sm border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 uppercase">{data.name}</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
              <a href="#home" className="text-[#1e3a8a]">Home</a>
              <a href="#about" className="hover:text-[#1e3a8a] transition-colors">About Us</a>
              <a href="#services" className="hover:text-[#1e3a8a] transition-colors">Our Services</a>
              <a href="#specialists" className="hover:text-[#1e3a8a] transition-colors">Specialist</a>
              <a href="#contact" className="hover:text-[#1e3a8a] transition-colors">Contact</a>
            </nav>

            <div className="hidden lg:flex">
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#1e3a8a] transition-colors shadow-lg">
                Book A Meeting
              </button>
            </div>

            <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-current"></span>
                <span className="block w-6 h-0.5 bg-current"></span>
                <span className="block w-6 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-xl z-40 border-t border-slate-100 p-6 flex flex-col gap-6 font-bold text-slate-600 text-center text-lg">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1e3a8a] pb-4 border-b border-slate-100">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-slate-100">About Us</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-slate-100">Our Services</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      )}

      {/* 1. HERO SECTION (Cureon Style) */}
      <section id="home" className="relative bg-[#1e3a8a] rounded-b-[3rem] lg:rounded-b-[5rem] pt-32 lg:pt-48 pb-48 lg:pb-56 overflow-hidden">
        {/* Elegant Sweeping Background Lines (Mimicking Cureon) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
          <svg className="absolute w-[200%] min-w-[1500px] h-auto opacity-[0.06]" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200 500 C 100 200, 400 800, 1200 300" stroke="white" strokeWidth="30" strokeLinecap="round" />
            <path d="M-100 800 C 300 900, 600 100, 1100 400" stroke="white" strokeWidth="30" strokeLinecap="round" />
            <path d="M 200 -100 C 300 300, 800 400, 900 1100" stroke="white" strokeWidth="30" strokeLinecap="round" />
            <path d="M 800 -200 C 700 200, 200 600, 100 1200" stroke="white" strokeWidth="30" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <ScrollReveal>
            <div className="pt-10 lg:pt-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-8">
                <Activity className="w-4 h-4 text-green-400" /> Live Remote Consultations Available
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Dedicated to Long Term <span className="text-blue-300">Health</span> and Well-Being
              </h1>
              <p className="text-blue-100 text-base lg:text-lg max-w-lg mb-10 leading-relaxed opacity-90">
                {data.about || "At our clinic, we provide patient-focused medical care backed by experienced doctors, modern technology, and evidence-based practices."}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl">
                  Get Started Now
                </button>
                <button className="flex items-center gap-3 text-white px-6 py-4 rounded-full font-bold hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                  <div className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center backdrop-blur-md">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                  Watch Video
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative flex justify-center lg:justify-end items-end h-[400px] lg:h-[600px]">
              {/* Trust Badge Floating (Restored with working Unsplash images) */}
              <div className="absolute top-10 right-0 lg:right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hidden md:flex items-center gap-4 z-20">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-[#1e3a8a] object-cover" alt="Patient" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-[#1e3a8a] object-cover" alt="Patient" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-[#1e3a8a] object-cover" alt="Patient" />
                  <div className="w-10 h-10 rounded-full border-2 border-[#1e3a8a] bg-blue-500 flex items-center justify-center text-[11px] font-bold text-white relative z-10">5.5k</div>
                </div>
                <div className="text-white text-xs font-medium leading-tight">
                  Trusted By Happy Patients<br/>For Exceptional Care
                </div>
              </div>

              <img 
                src={heroImage} 
                alt="Lead Doctor" 
                className="relative z-10 w-full max-w-[500px] object-contain object-bottom h-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)] pointer-events-none"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEARCH WIDGET (Overlapping) */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-24 mb-20">
        <ScrollReveal delay={400}>
          <div className="bg-white rounded-3xl p-4 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center gap-6 lg:gap-8 border border-slate-100">
            <div className="flex-1 w-full flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 px-4">
              <Calendar className="w-6 h-6 text-[#1e3a8a] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Dates</p>
                <p className="font-bold text-slate-900 text-sm">Aug 04, 2026</p>
              </div>
            </div>
            <div className="flex-1 w-full flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 px-4">
              <Activity className="w-6 h-6 text-[#1e3a8a] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Specialist</p>
                <p className="font-bold text-slate-900 text-sm truncate">{data.specialization || "Orthodontics"}</p>
              </div>
            </div>
            <div className="flex-1 w-full flex items-center gap-4 px-4 pb-4 lg:pb-0">
              <MapPin className="w-6 h-6 text-[#1e3a8a] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-slate-900 text-sm truncate">{data.address || "New York, USA"}</p>
              </div>
            </div>
            <button className="w-full lg:w-auto bg-[#1e3a8a] text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-colors shadow-lg shrink-0 flex justify-center items-center gap-2">
              <Search className="w-5 h-5" /> Search Doctor
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* 2. TRUSTED CARE (Metrics & About) */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Trusted Care</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">We pride ourselves on offering comprehensive medical solutions with a high success rate and patient satisfaction.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-black text-[#1e3a8a] mb-2">10k+</h3>
              <p className="text-sm font-bold text-slate-400 mb-12">Patients Treated</p>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">Committed to restoring health and improving lives every day.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-black text-[#1e3a8a] mb-2">95%</h3>
              <p className="text-sm font-bold text-slate-400 mb-12">Patient Satisfaction</p>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">Trusted by our community for compassionate, reliable medical care.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative rounded-3xl overflow-hidden group h-full">
              <img src={galleryImages[0]} alt="Care" className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <h3 className="text-2xl font-black text-[#1e3a8a] mb-1">150+</h3>
                <p className="text-xs font-bold text-slate-600">Expert Doctors</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300 h-full">
              <h3 className="text-4xl font-black text-[#1e3a8a] mb-2">60+</h3>
              <p className="text-sm font-bold text-slate-400 mb-12">Specialized Wards</p>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">A dedicated team of specialists to address all your medical needs.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. OUR EXPERTS */}
      <section id="specialists" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Our Experts</h2>
                <p className="text-slate-500 max-w-xl font-medium">Meet our team of board-certified specialists dedicated to providing you with the highest standard of care.</p>
              </div>
              <div className="hidden md:flex gap-4">
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors bg-white shadow-sm">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Neil Wilms", role: "Surgeon", exp: "14 years of Experience" },
              { name: "Dr. Emily Carter", role: "Neurologist", exp: "9 years of Experience" },
              { name: "Dr. Katrina Kiehn", role: "Pediatrician", exp: "12 years of Experience" },
              { name: "Dr. James Rodriguez", role: "Orthopedic", exp: "8 years of Experience" }
            ].map((doc, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group cursor-pointer">
                  <div className="bg-[#1e3a8a] rounded-3xl overflow-hidden aspect-[4/5] relative mb-6 shadow-md">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 z-10"></div>
                    {/* Subtle grid background pattern inside blue card */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                    {expertImages[i] && <img src={expertImages[i]} alt={doc.name} className="absolute bottom-0 w-full h-[90%] object-cover object-top filter contrast-125 transition-transform duration-500 group-hover:scale-105 z-0" />}
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-[#1e3a8a] transition-colors">{doc.name}</h4>
                    <p className="text-xs font-bold text-[#1e3a8a] mb-2">{doc.role}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{doc.exp}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES / SPECIALIZED CARE (Split View) */}
      <section id="services" className="py-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-[#1e3a8a] rounded-[3rem] overflow-hidden shadow-2xl mx-6 lg:mx-0">
              
              {/* Left Options */}
              <div className="p-10 lg:p-16 flex-1 text-white flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-black mb-12 leading-tight">Specialized<br/>Care Options</h2>
                
                <div className="relative space-y-10 pl-8">
                  {/* Continuous Timeline Line */}
                  <div className="absolute left-0 top-2 bottom-4 w-0.5 bg-blue-800/50"></div>

                  <div className="relative group cursor-pointer">
                    {/* Active Indicator */}
                    <div className="absolute -left-[33px] top-2 w-[11px] h-[11px] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                    <h4 className="text-xl font-bold mb-3 flex items-center justify-between text-white">
                      Modern Treatment Rooms <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
                    </h4>
                    <p className="text-blue-200 text-sm font-medium leading-relaxed max-w-md">
                      Spacious, clean, and designed for your comfort, our treatment rooms are equipped with the latest medical technology.
                    </p>
                  </div>

                  <div className="relative group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="absolute -left-[33px] top-2 w-[11px] h-[11px] rounded-full bg-blue-800 group-hover:bg-blue-400 transition-colors"></div>
                    <h4 className="text-xl font-bold mb-3 text-white">Digital X-Rays and Imaging</h4>
                  </div>

                  <div className="relative group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="absolute -left-[33px] top-2 w-[11px] h-[11px] rounded-full bg-blue-800 group-hover:bg-blue-400 transition-colors"></div>
                    <h4 className="text-xl font-bold mb-3 text-white">Patient Education Resources</h4>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 relative min-h-[400px] lg:min-h-auto">
                 <img src={galleryImages[1]} alt="Treatment Room" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. PRICING & PACKAGES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Healthcare Packages</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium">Transparent pricing with no hidden fees. Choose a plan that suits your family's needs.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PRICING.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className={`bg-white rounded-[2rem] p-8 border ${plan.popular ? 'border-[#1e3a8a] shadow-[0_20px_50px_rgba(30,58,138,0.15)] scale-100 md:scale-105 relative z-10' : 'border-slate-100 shadow-sm'} transition-transform duration-300 hover:-translate-y-2`}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e3a8a] text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-full">Most Popular</div>}
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">{plan.name}</h4>
                  <div className="text-center mb-8">
                    <span className="text-4xl font-black text-[#1e3a8a]">{plan.price}</span>
                    <span className="text-slate-400 text-sm font-medium">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-[#1e3a8a] text-white hover:bg-blue-800 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                    Choose Plan
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-slate-900 mb-4">See Why Patients Trust Us</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium mb-16">Read what our patients have to say about their recovery and experience.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative transition-all duration-500 ease-in-out">
              <span className="text-8xl font-serif text-[#1e3a8a]/10 absolute top-4 left-8 leading-none">"</span>
              
              <div key={activeTestimonial} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-xl md:text-2xl font-bold text-[#1e3a8a] leading-relaxed mb-10 relative z-10">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-8 mt-8">
                <div className="flex items-center gap-4 mb-6 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center">
                    <User className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-slate-900 text-sm transition-opacity duration-300" key={activeTestimonial}>{TESTIMONIALS[activeTestimonial].author}</h5>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                      <span className="text-xs font-bold text-slate-500 ml-1">5.0/5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500 font-medium">Find answers to common questions about our services and policies.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`bg-white border ${activeFaq === i ? 'border-[#1e3a8a] shadow-md' : 'border-slate-200'} rounded-2xl overflow-hidden transition-all duration-300`}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${activeFaq === i ? 'text-[#1e3a8a]' : 'text-slate-800'}`}>{faq.q}</span>
                    {activeFaq === i ? <Minus className="w-5 h-5 text-[#1e3a8a] shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  <div 
                    className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT & MAPS */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Book an Appointment</h2>
              <p className="text-slate-500 font-medium mb-10 leading-relaxed">Fill out the form below and our team will get back to you within 2 hours to confirm your appointment details.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all" />
                  <input type="text" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all" />
                  <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all text-slate-500" />
                </div>
                <textarea placeholder="Tell us about your symptoms or reason for visit..." rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all resize-none"></textarea>
                <button type="button" className="bg-[#1e3a8a] text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg w-full md:w-auto">
                  Submit Request
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-slate-100 rounded-3xl overflow-hidden min-h-[400px] h-full relative border border-slate-200 group">
               {/* Fallback Map Image or Iframe */}
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Map View" />
               <div className="absolute inset-0 bg-[#1e3a8a]/20"></div>
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-900 z-10 pointer-events-none">
                  <div className="bg-white p-4 rounded-full shadow-2xl mb-4 animate-bounce">
                    <MapPin className="w-8 h-8 text-[#1e3a8a]" />
                  </div>
                  <div className="bg-white px-6 py-3 rounded-xl shadow-xl font-bold text-sm">
                    {data.address || "123 Healthcare Ave, NY"}
                  </div>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e3a8a] pt-24 pb-12 border-t border-blue-900 relative overflow-hidden mt-10 rounded-t-[3rem] lg:rounded-t-[5rem]">
        
        {/* Elegant Medical Background Design */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Ambient Glowing Orbs */}
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[80px]"></div>
          
          {/* Subtle Pulse/EKG Line */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-[0.03]">
            <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 H 300 L 330 20 L 380 180 L 420 60 L 450 100 H 750 L 780 20 L 830 180 L 870 60 L 900 100 H 1200" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 text-white">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black tracking-tight text-white uppercase drop-shadow-md">{data.name}</span>
              </div>
              <p className="text-blue-100 text-sm font-medium leading-relaxed mb-10 max-w-sm opacity-90">
                Providing world-class medical care with compassion. Your health is our priority. Contact us today to schedule your appointment.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-sm hover:scale-110"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-sm hover:scale-110"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-sm hover:scale-110"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-sm hover:scale-110"><aedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs opacity-60">General</h4>
              <ul className="space-y-5 text-sm font-bold text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs opacity-60">About</h4>
              <ul className="space-y-5 text-sm font-bold text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Culture</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs opacity-60">Resource</h4>
              <ul className="space-y-5 text-sm font-bold text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Free Content</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 opacity-50" /> Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-blue-200">
            <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy and Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
