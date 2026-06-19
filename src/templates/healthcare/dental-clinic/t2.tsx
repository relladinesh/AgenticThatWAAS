
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Calendar, ChevronDown, ArrowRight, Menu, X, Phone, MapPin, Clock, 
  Star, CheckCircle2, ShieldCheck, HeartPulse, Sparkles, Quote, Plus
} from "lucide-react";

export default function DentalClinicT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const businessData = {
    name: data?.name || data?.business_name || "Happy Dental",
    email: data?.email || "hello@happydental.com",
    phone: data?.phone || "+1 (555) 123-4567",
    address: data?.address || "123 Smile Boulevard, NY",
    openingHours: data?.openingHours || "8 AM - 3 PM",
    rating: data?.rating || "4.9",
    reviews: data?.reviews_count || "852",
    about: data?.about || "With our team of experienced dentists and state-of-the-art technology, we deliver comprehensive treatments in a comfortable and welcoming environment.",
    image: data?.item_image || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
  };

  const nameParts = businessData.name.split(" ");
  const firstName = nameParts[0] || "Happy";
  const lastName = nameParts.slice(1).join(" ") || "Dental";

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "reviews" },
    { name: "FAQ", id: "faq" },
  ];

  const pool = [
    "https://images.unsplash.com/photo-1598256989800-fea5f67dba27?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 font-sans selection:bg-[#00C896] selection:text-white">
      
      {/* HEADER */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-2 group">
            <div className="text-[#00C896] shrink-0 group-hover:rotate-12 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              {firstName} <span className="font-light">{lastName}</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md p-1 rounded-full border border-slate-200 shadow-sm">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`relative px-5 py-2 text-sm font-semibold transition-colors rounded-full z-10 ${isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {isActive && (
                    <motion.div layoutId="nav-pill" className="absolute inset-0 bg-[#00C896] rounded-full -z-10 shadow-md" />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col items-end pr-4 border-r border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</span>
              <span className="text-sm font-bold text-slate-900">{businessData.phone}</span>
            </div>
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#00C896] transition-colors flex items-center gap-2 shadow-lg">
              <Calendar className="w-4 h-4" /> Book Online
            </a>
          </div>

          <button className="lg:hidden p-2 text-slate-900 bg-white rounded-full shadow-sm border border-slate-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-4 right-4 bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 flex flex-col gap-4 mt-2"
            >
              {navLinks.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-[#00C896] p-2 bg-slate-50 rounded-xl">
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#00C896] text-white text-center px-6 py-4 rounded-xl text-sm font-bold mt-2 shadow-md flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-28 pb-12 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] p-8 lg:p-16 relative overflow-hidden shadow-sm border border-slate-100 min-h-[85vh] flex items-center">
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00C896]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10 w-full items-center">
            
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse"></span>
                Accepting New Patients
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-[90px] font-medium leading-[0.9] tracking-tight mb-8">
                <span className="block text-slate-900">Exceptional</span>
                <span className="block text-[#00C896]">Dental Care.</span>
              </h1>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
                {businessData.about}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#00C896] transition-colors flex items-center gap-2 shadow-xl hover:-translate-y-1">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">😊</div>)}
                  </div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#00C896] fill-[#00C896]" /> {businessData.rating}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative h-[500px] lg:h-[700px]">
              {/* Abstract decorative shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F0F2F5] rounded-full opacity-50 -z-10"></div>
              <img src="/dental-hero.png" alt="Clear Aligners" className="w-full h-full object-contain mix-blend-darken scale-110 drop-shadow-2xl" />
              
              {/* Floating Badges */}
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><ShieldCheck className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Certified</p>
                  <p className="text-xs text-slate-500 font-medium">Top Orthodontists</p>
                </div>
              </motion.div>
              
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-32 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#00C896]"><HeartPulse className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Painless</p>
                  <p className="text-xs text-slate-500 font-medium">Modern Techniques</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURES / HIGHLIGHTS */}
      <section className="py-12 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Expert Doctors", desc: "Highly qualified professionals", icon: <Star /> },
            { title: "Modern Tech", desc: "Advanced dental equipment", icon: <Sparkles /> },
            { title: "Emergency", desc: "24/7 dental assistance", icon: <Clock /> },
            { title: "Insurance", desc: "We accept all major plans", icon: <ShieldCheck /> }
          ].map((feat, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#00C896]/10 text-[#00C896] flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{feat.title}</h4>
              <p className="text-xs text-slate-500 font-medium">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden relative">
              <img src={pool[2]} alt="Doctor" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#00C896] mix-blend-color opacity-20"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-slate-900">{businessData.rating}</div>
                <div className="flex text-[#00C896]"><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /></div>
              </div>
              <p className="text-sm font-bold text-slate-500 leading-relaxed">"The most professional and painless dental experience I've ever had."</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-bold uppercase tracking-wider text-[#00C896] mb-4 block">About Us</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-tight">
              Pioneering the future of <br/> dental wellness.
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Our practice is built on the foundation of providing exceptional care that exceeds expectations. We combine advanced dental technologies with a compassionate approach.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "Comprehensive dental diagnostics",
                "Minimally invasive treatment protocols",
                "Dedicated pediatric dentistry wing",
                "Relaxing, spa-like clinic environment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00C896]" /> {item}
                </li>
              ))}
            </ul>
            <a href="#about" className="text-slate-900 font-bold border-b-2 border-slate-900 hover:text-[#00C896] hover:border-[#00C896] transition-colors pb-1">
              Read Our Full Story
            </a>
          </motion.div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-[#00C896] mb-4 block">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">World-Class Treatments.</h2>
            <p className="text-lg text-slate-500 font-medium">From routine checkups to full mouth rehabilitations, our comprehensive services are designed for your unique smile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.services || [
              "Invisalign & Clear Aligners", 
              "Cosmetic Dentistry", 
              "Dental Implants", 
              "Teeth Whitening", 
              "Preventive Care", 
              "Root Canal Therapy"
            ]).map((service: string, idx: number) => (
              <motion.div 
                key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-[#F0F2F5] rounded-[2rem] p-8 lg:p-10 hover:bg-slate-900 hover:text-white transition-colors duration-500 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-slate-900 flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#00C896] group-hover:text-white transition-colors">
                  <span className="text-xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed mb-8 transition-colors">
                  Advanced treatments tailored to restore function and enhance the natural beauty of your smile utilizing cutting edge tech.
                </p>
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 group-hover:text-[#00C896] transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS & FAQ SECTION */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          
          {/* Reviews List */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#00C896] mb-4 block">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-10">Patient Stories</h2>
            
            <div className="space-y-6">
              {[
                { name: "Sarah Jenkins", text: "I've always been terrified of the dentist, but this clinic completely changed my perspective. The staff is incredibly gentle and the results of my Invisalign are stunning." },
                { name: "Michael Chang", text: "State of the art facility. The dental implant procedure was virtually painless and the recovery was much faster than I anticipated. Highly recommend." },
                { name: "Emily Roberts", text: "The teeth whitening session gave me an instant confidence boost. The environment feels more like a luxury spa than a medical office." }
              ].map((rev, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex text-[#00C896] mb-4"><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /><Star className="w-4 h-4 fill-[#00C896]" /></div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">"{rev.text}"</p>
                  <p className="font-bold text-slate-900">— {rev.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div id="faq">
            <span className="text-sm font-bold uppercase tracking-wider text-[#00C896] mb-4 block">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-10">Common Questions</h2>
            
            <div className="space-y-4">
              {[
                { q: "Do you accept my insurance?", a: "We accept most major dental insurance plans. Our billing specialists will be happy to verify your coverage before your appointment." },
                { q: "What should I expect on my first visit?", a: "Your first visit involves a comprehensive exam, digital X-rays, and a consultation with the doctor to discuss your dental goals and create a custom treatment plan." },
                { q: "Do you offer emergency dental services?", a: "Yes, we provide same-day emergency appointments to address severe pain, broken teeth, or other urgent dental issues." },
                { q: "How long does Invisalign treatment take?", a: "Treatment time varies depending on the complexity of your case, but most patients achieve their desired results within 6 to 18 months." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-lg text-slate-900">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${faqOpen === i ? 'bg-[#00C896] text-white rotate-45' : 'bg-slate-100 text-slate-600'}`}>
                      <Plus className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="px-8 pb-6 pt-2 text-slate-500 font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA / CONTACT FORM */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto bg-slate-900 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C896]/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-tight">
                Ready to transform <br/>
                <span className="text-[#00C896]">your smile?</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg max-w-md mb-12">
                Book your consultation today and take the first step towards a healthier, brighter, and more confident smile.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 text-white bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-2xl bg-[#00C896] flex items-center justify-center shadow-lg shadow-[#00C896]/20">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us Now</p>
                    <p className="text-xl font-bold">{businessData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-white bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#00C896]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Clinic</p>
                    <p className="text-lg font-bold">{businessData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Request Appointment</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <input suppressHydrationWarning type="text" placeholder="First Name" className="w-full bg-[#F0F2F5] border-none rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#00C896] outline-none transition-all font-semibold" />
                  <input suppressHydrationWarning type="text" placeholder="Last Name" className="w-full bg-[#F0F2F5] border-none rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#00C896] outline-none transition-all font-semibold" />
                </div>
                <input suppressHydrationWarning type="tel" placeholder="Phone Number" className="w-full bg-[#F0F2F5] border-none rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#00C896] outline-none transition-all font-semibold" />
                <input suppressHydrationWarning type="email" placeholder="Email Address" className="w-full bg-[#F0F2F5] border-none rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#00C896] outline-none transition-all font-semibold" />
                <select suppressHydrationWarning className="w-full bg-[#F0F2F5] border-none rounded-2xl px-6 py-4 text-slate-500 focus:ring-2 focus:ring-[#00C896] outline-none transition-all font-semibold appearance-none">
                  <option value="">Select Service Needed</option>
                  <option value="consultation">General Consultation</option>
                  <option value="invisalign">Invisalign & Aligners</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="emergency">Emergency Care</option>
                </select>
                <button suppressHydrationWarning type="button" className="w-full bg-[#00C896] hover:bg-[#00b386] text-white py-5 rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-[#00C896]/30 mt-4">
                  Confirm Booking
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#home" className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00C896]" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              {firstName} <span className="font-light">{lastName}</span>
            </span>
          </a>
          
          <p className="text-slate-500 text-sm font-semibold text-center">
            © {new Date().getFullYear()} {businessData.name}. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-[#00C896] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00C896] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
