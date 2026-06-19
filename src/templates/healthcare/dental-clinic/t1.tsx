
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, Sparkles, ArrowRight, Star, Clock, MapPin, Phone, 
  ChevronRight, ArrowUpRight, CheckCircle2, Shield
} from "lucide-react";

export default function DentalClinicT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
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

  // Dynamic Data Mapping
  const businessData = {
    name: data?.name || data?.business_name || "Aura Dental Studio",
    email: data?.email || "concierge@auradental.com",
    phone: data?.phone || "+1 (800) 123-4567",
    address: data?.address || "456 Wellness Avenue, Beverly Hills, CA",
    openingHours: data?.openingHours || "Mon-Sat: 9:00 AM - 6:00 PM",
    rating: data?.rating || "4.9",
    reviews: data?.reviews_count || "1,200",
    about: data?.about || "We redefine dental care by blending advanced medical precision with an ultra-luxurious, stress-free environment.",
    image: data?.item_image || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
  };

  const navLinks = [
    { name: "Philosophy", id: "philosophy" },
    { name: "Expertise", id: "expertise" },
    { name: "Experience", id: "experience" },
    { name: "Concierge", id: "contact" }
  ];

  const nameParts = businessData.name.split(" ");
  const brandFirst = nameParts[0] || "Aura";
  const brandRest = nameParts.slice(1).join(" ") || "Dental";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans selection:bg-[#B8902E] selection:text-white overflow-x-hidden">
      
      {/* ULTRA PREMIUM NAVIGATION - LIGHT MODE */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-white/90 backdrop-blur-2xl border-b border-[#1C1917]/5 py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#B8902E]/30 flex items-center justify-center group-hover:bg-[#B8902E] transition-colors duration-500">
              <Sparkles className="w-4 h-4 text-[#B8902E] group-hover:text-white transition-colors" />
            </div>
            <span className="font-serif text-2xl tracking-widest uppercase text-[#1C1917]">
              {brandFirst} <span className="text-[#1C1917]/50 italic font-light">{brandRest}</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a key={item.id} href={`#${item.id}`} className="relative text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors group">
                  <span className={isActive ? "text-[#B8902E]" : "text-[#1C1917]/50 group-hover:text-[#1C1917]"}>{item.name}</span>
                  {isActive && (
                    <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-px bg-[#B8902E]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#contact" className="relative group overflow-hidden rounded-full border border-[#1C1917] bg-transparent px-8 py-3">
              <div className="absolute inset-0 bg-[#1C1917] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
              <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1917] group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                Book Consultation <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </div>

          <button className="lg:hidden text-[#1C1917]/80 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#1C1917]/5 p-6 flex flex-col gap-6 shadow-2xl"
            >
              {navLinks.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-[#1C1917]/80 hover:text-[#B8902E] transition-colors uppercase tracking-widest">
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#1C1917] text-white text-center px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest mt-4">
                Book Consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CINEMATIC HERO SECTION - LIGHT MODE */}
      <section id="home" ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 bg-[#FDFBF7]">
          {/* Light overlay over the image */}
          <div className="absolute inset-0 bg-white/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-transparent z-10"></div>
          
          <img src={businessData.image} alt="Luxury Dental Clinic" className="w-full h-full object-cover scale-105 opacity-80" />
        </motion.div>

        <div className="relative z-20 max-w-[1600px] w-full mx-auto px-6 lg:px-12 mt-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#1C1917]/10 bg-white/50 backdrop-blur-md mb-10 shadow-sm"
          >
            <Star className="w-4 h-4 text-[#B8902E] fill-[#B8902E]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#1C1917]/80">
              {businessData.rating} Rating / {businessData.reviews} Reviews
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-8xl lg:text-[140px] font-serif leading-[0.85] tracking-tight mb-8 text-[#1C1917]"
          >
            The <span className="italic text-[#B8902E]">Art</span> of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1917] to-[#1C1917]/40">Dentistry.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl text-[#1C1917]/60 font-light max-w-2xl mx-auto leading-relaxed mb-16"
          >
            {businessData.about}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#1C1917]/40">Scroll to Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#1C1917]/30 to-transparent"></div>
        </motion.div>
      </section>

      {/* CONTINUOUS MARQUEE */}
      <div className="py-8 bg-white border-y border-[#1C1917]/5 overflow-hidden flex whitespace-nowrap shadow-sm relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center gap-12 text-sm font-bold tracking-[0.3em] uppercase text-[#1C1917]/40"
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Aesthetic Makeovers</span> <span className="w-1.5 h-1.5 bg-[#B8902E] rounded-full"></span>
              <span>Invisible Aligners</span> <span className="w-1.5 h-1.5 bg-[#B8902E] rounded-full"></span>
              <span>Laser Whitening</span> <span className="w-1.5 h-1.5 bg-[#B8902E] rounded-full"></span>
              <span>Implantology</span> <span className="w-1.5 h-1.5 bg-[#B8902E] rounded-full"></span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-32 lg:py-48 px-6 lg:px-12 max-w-[1600px] mx-auto relative bg-[#FDFBF7]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] lg:h-[800px] rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#1C1917]/5">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop" alt="Philosophy" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
            <div className="absolute bottom-10 left-10 z-20 w-32 h-32 bg-white/80 backdrop-blur-xl border border-white rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-[#B8902E]" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-[#B8902E]"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B8902E]">The Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif leading-[1.1] tracking-tight mb-10 text-[#1C1917]">
              We believe a smile is the <br/><span className="italic text-[#1C1917]/40">ultimate signature.</span>
            </h2>
            <p className="text-lg text-[#1C1917]/70 font-light leading-relaxed mb-8">
              At {brandFirst}, we discard the clinical and sterile approach of traditional dentistry. Instead, we embrace a holistic philosophy where medical precision meets bespoke luxury. 
            </p>
            <p className="text-lg text-[#1C1917]/70 font-light leading-relaxed mb-16">
              Every procedure is an exercise in meticulous craftsmanship, utilizing cutting-edge technology to ensure your comfort, safety, and a profoundly beautiful outcome.
            </p>
            
            <div className="grid grid-cols-2 gap-10 border-t border-[#1C1917]/10 pt-10">
              <div>
                <p className="text-5xl font-serif text-[#B8902E] mb-2">15<span className="text-2xl text-[#1C1917]/30">+</span></p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50">Years Excellence</p>
              </div>
              <div>
                <p className="text-5xl font-serif text-[#B8902E] mb-2">10<span className="text-2xl text-[#1C1917]/30">k</span></p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50">Smiles Transformed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE BENTO GRID - LIGHT MODE */}
      <section id="expertise" className="py-32 bg-white border-y border-[#1C1917]/5 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#B8902E]"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B8902E]">Our Expertise</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif tracking-tight text-[#1C1917]">Curated <span className="italic text-[#1C1917]/40">Treatments.</span></h2>
            </div>
            <p className="text-[#1C1917]/60 font-light max-w-sm leading-relaxed">
              From subtle enhancements to complete reconstructive artistry, our suite of services is tailored entirely to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Massive Hero Bento */}
            <div className="lg:col-span-2 relative h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden group cursor-pointer border border-[#1C1917]/10 shadow-md hover:shadow-xl transition-shadow duration-500">
              <div className="absolute inset-0 bg-[#1C1917]/20 z-10 transition-colors duration-500 group-hover:bg-[#1C1917]/10"></div>
              <img src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?q=80&w=1200&auto=format&fit=crop" alt="Cosmetic" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 lg:p-14 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent">
                <h3 className="text-4xl font-serif mb-4 text-white">Aesthetic Veneers</h3>
                <p className="text-white/80 font-light max-w-md mb-8">Ultra-thin, custom-crafted porcelain shells designed to flawlessly correct shape, color, and alignment.</p>
                <div className="flex items-center gap-3 text-[#B8902E] text-xs font-bold uppercase tracking-widest group-hover:gap-6 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Top Right Bento */}
            <div className="bg-[#FDFBF7] rounded-[2rem] p-10 border border-[#1C1917]/5 hover:border-[#1C1917]/10 hover:shadow-lg transition-all duration-500 flex flex-col justify-between group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-[#1C1917]/10 flex items-center justify-center bg-white mb-10 group-hover:scale-110 transition-transform shadow-sm">
                <Shield className="w-6 h-6 text-[#B8902E]" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3 text-[#1C1917]">Implantology</h3>
                <p className="text-[#1C1917]/60 font-light leading-relaxed mb-6">Titanium integration for permanent, flawless tooth replacement that mimics natural biology.</p>
                <div className="w-10 h-10 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917]/40 group-hover:bg-[#1C1917] group-hover:text-white transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Right Bento */}
            <div className="bg-[#FDFBF7] rounded-[2rem] p-10 border border-[#1C1917]/5 hover:border-[#1C1917]/10 hover:shadow-lg transition-all duration-500 flex flex-col justify-between group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-[#1C1917]/10 flex items-center justify-center bg-white mb-10 group-hover:scale-110 transition-transform shadow-sm">
                <Sparkles className="w-6 h-6 text-[#B8902E]" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3 text-[#1C1917]">Laser Whitening</h3>
                <p className="text-[#1C1917]/60 font-light leading-relaxed mb-6">Advanced photodynamic systems to safely and dramatically elevate your natural shade.</p>
                <div className="w-10 h-10 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917]/40 group-hover:bg-[#1C1917] group-hover:text-white transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Full Width Bento */}
            <div className="lg:col-span-2 bg-[#1C1917] rounded-[2rem] p-10 border border-[#1C1917]/10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
              <div>
                <h3 className="text-3xl font-serif mb-4 text-white">Invisible Aligners</h3>
                <p className="text-white/60 font-light leading-relaxed max-w-md">Discreet, digitally-mapped orthodontic realignment for achieving perfect symmetry without metal braces.</p>
              </div>
              <div className="w-32 h-32 rounded-full border-[8px] border-white/10 flex items-center justify-center relative bg-[#1C1917]">
                <div className="absolute inset-0 rounded-full border-[8px] border-[#B8902E] border-t-transparent border-l-transparent rotate-45"></div>
                <span className="text-2xl font-serif text-white">3D</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE EXPERIENCE SECTION */}
      <section id="experience" className="py-32 relative overflow-hidden bg-[#FDFBF7]">
        <div className="absolute inset-0 bg-[#B8902E]/[0.02]"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-6xl font-serif mb-8 text-[#1C1917]">
              An atmosphere of <br/><span className="italic text-[#B8902E]">absolute calm.</span>
            </h2>
            <div className="space-y-6 mt-12">
              {[
                "Noise-canceling acoustic environments",
                "Aromatherapy and ambient lighting",
                "Private recovery suites",
                "Zero-gravity treatment chairs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-[#1C1917]/10">
                  <CheckCircle2 className="w-5 h-5 text-[#B8902E]" />
                  <span className="text-lg text-[#1C1917]/80 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" className="rounded-3xl border border-[#1C1917]/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]" alt="Lobby" />
            </div>
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" className="rounded-3xl border border-[#1C1917]/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]" alt="Tools" />
              <div className="bg-white rounded-3xl p-8 border border-[#1C1917]/5 shadow-lg aspect-square flex flex-col justify-center text-center">
                <Star className="w-8 h-8 text-[#B8902E] fill-[#B8902E]/20 mx-auto mb-4" />
                <p className="text-sm text-[#1C1917]/60 italic leading-relaxed">"A profoundly different dental experience. It felt more like a spa retreat than a clinic visit."</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONCIERGE / CONTACT FORM - LIGHT MODE */}
      <section id="contact" className="py-32 bg-white border-t border-[#1C1917]/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#B8902E]"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B8902E]">Concierge</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif tracking-tight mb-8 text-[#1C1917]">Begin your <br/><span className="italic text-[#1C1917]/40">journey.</span></h2>
              <p className="text-[#1C1917]/60 font-light leading-relaxed max-w-md mb-12">
                Connect with our dedicated patient concierge to schedule a private consultation, request pricing, or arrange a facility tour.
              </p>
            </div>

            <div className="space-y-8 bg-[#FDFBF7] p-10 rounded-[2rem] border border-[#1C1917]/5 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-[#1C1917]/10 bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#B8902E]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/40 mb-1">Direct Line</p>
                  <p className="text-lg font-serif text-[#1C1917]">{businessData.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-[#1C1917]/10 bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#B8902E]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/40 mb-1">Location</p>
                  <p className="text-lg font-serif text-[#1C1917]">{businessData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-[#1C1917]/10 bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-[#B8902E]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/40 mb-1">Hours</p>
                  <p className="text-lg font-serif text-[#1C1917]">{businessData.openingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FDFBF7] rounded-[3rem] p-10 lg:p-16 border border-[#1C1917]/5 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8902E]/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
            
            <form className="relative z-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50 ml-4">First Name</label>
                  <input suppressHydrationWarning type="text" className="w-full bg-white border border-[#1C1917]/10 rounded-full px-6 py-4 text-[#1C1917] focus:outline-none focus:border-[#B8902E] transition-colors shadow-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50 ml-4">Last Name</label>
                  <input suppressHydrationWarning type="text" className="w-full bg-white border border-[#1C1917]/10 rounded-full px-6 py-4 text-[#1C1917] focus:outline-none focus:border-[#B8902E] transition-colors shadow-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50 ml-4">Email Address</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-white border border-[#1C1917]/10 rounded-full px-6 py-4 text-[#1C1917] focus:outline-none focus:border-[#B8902E] transition-colors shadow-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50 ml-4">Phone Number</label>
                  <input suppressHydrationWarning type="tel" className="w-full bg-white border border-[#1C1917]/10 rounded-full px-6 py-4 text-[#1C1917] focus:outline-none focus:border-[#B8902E] transition-colors shadow-sm" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50 ml-4">Treatment Interest</label>
                <select suppressHydrationWarning className="w-full bg-white border border-[#1C1917]/10 rounded-full px-6 py-4 text-[#1C1917] focus:outline-none focus:border-[#B8902E] transition-colors appearance-none shadow-sm">
                  <option value="consult">Complete Smile Makeover</option>
                  <option value="veneers">Porcelain Veneers</option>
                  <option value="aligners">Invisible Aligners</option>
                  <option value="implants">Dental Implants</option>
                  <option value="other">General Consultation</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/50 ml-4">Message (Optional)</label>
                <textarea suppressHydrationWarning rows={4} className="w-full bg-white border border-[#1C1917]/10 rounded-3xl px-6 py-4 text-[#1C1917] focus:outline-none focus:border-[#B8902E] transition-colors resize-none shadow-sm"></textarea>
              </div>

              <button suppressHydrationWarning type="button" className="w-full bg-[#1C1917] text-white py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B8902E] transition-colors duration-500 mt-4 shadow-lg">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ATELIER FOOTER */}
      <footer className="bg-white py-12 px-6 lg:px-12 border-t border-[#1C1917]/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#B8902E]" />
            <span className="font-serif text-xl tracking-widest uppercase text-[#1C1917]">
              {brandFirst} <span className="text-[#1C1917]/40 italic font-light">{brandRest}</span>
            </span>
          </div>

          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/40 text-center">
            &copy; {new Date().getFullYear()} {businessData.name}. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/60">
            <a href="#" className="hover:text-[#B8902E] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#B8902E] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#B8902E] transition-colors">Instagram</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
