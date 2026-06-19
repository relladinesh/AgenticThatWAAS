
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { 
  Menu, X, ArrowRight, Instagram, Facebook, 
  MapPin, Phone, Mail, ChevronRight
} from "lucide-react";

export default function SalonTemplate1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    if (data.image) setHeroImage(data.image);

    const pool = [
      "https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop"
    ];

    let seed = data.name ? data.name.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0) : 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    setDynamicImages(pool.sort(() => 0.5 - seededRandom()));

    // Scroll Reveal Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [data.name, data.image]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#E2D4C1] selection:text-[#050505] overflow-x-hidden">
      
      {/* 
        ========================================
        GLOBAL STYLES & EDITORIAL ANIMATIONS
        ========================================
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,400&family=Manrope:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-manrope { font-family: 'Manrope', sans-serif; }
        
        /* Slow Cinematic Pan */
        @keyframes cinematicPan {
          0% { transform: scale(1.05) translateY(0); }
          50% { transform: scale(1.05) translateY(-4%); }
          100% { transform: scale(1.05) translateY(0); }
        }
        .cinematic-pan { animation: cinematicPan 25s ease-in-out infinite; }

        /* Elegant Fade Up */
        @keyframes elegantUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .elegant-up { animation: elegantUp 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        
        /* Scroll Reveal Utility Classes */
        .reveal-on-scroll { opacity: 0; transform: translateY(50px); transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        
        /* Delays */
        .delay-1 { transition-delay: 0.1s; animation-delay: 0.1s; }
        .delay-2 { transition-delay: 0.3s; animation-delay: 0.3s; }
        .delay-3 { transition-delay: 0.5s; animation-delay: 0.5s; }

        /* Outline Text for High Fashion Look */
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }

        /* Custom Dark Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #E2D4C1; }
      `}} />

      {/* 
        ========================================
        HEADER (GLASS & BORDERS)
        ========================================
      */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 font-manrope ${scrolled ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 py-5" : "bg-transparent border-transparent py-8"}`}>
        <div className="w-[95%] mx-auto flex items-center justify-between">
          
          <div className="text-xl lg:text-3xl font-bodoni tracking-widest uppercase text-[#E2D4C1]">
            {data.name || "GLOW SALON"}
          </div>
          
          <nav className="hidden lg:flex items-center gap-14 text-[10px] uppercase tracking-[0.25em] font-light text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Concept</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#lookbook" className="hover:text-white transition-colors">Lookbook</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="border border-white/20 text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#050505] transition-colors duration-500 inline-block">
              Book Appointment
            </a>
          </div>

          <button 
            className="lg:hidden z-50 relative text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8 stroke-1" /> : <Menu className="w-8 h-8 stroke-1" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-[#050505] transition-opacity duration-700 lg:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center gap-12">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white text-4xl font-bodoni italic tracking-widest hover:text-[#E2D4C1] transition-colors">Concept</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-white text-4xl font-bodoni italic tracking-widest hover:text-[#E2D4C1] transition-colors">Services</a>
          <a href="#lookbook" onClick={() => setIsMenuOpen(false)} className="text-white text-4xl font-bodoni italic tracking-widest hover:text-[#E2D4C1] transition-colors">Lookbook</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white text-4xl font-bodoni italic tracking-widest hover:text-[#E2D4C1] transition-colors">Contact</a>
        </nav>
      </div>

      {/* 
        ========================================
        HERO SECTION: VOGUE EDITORIAL
        ========================================
      */}
      <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Massive Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          <h1 className="text-[25vw] font-bodoni font-black text-outline whitespace-nowrap opacity-[0.15]">
            HAIR ART
          </h1>
        </div>

        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 h-full">
          
          <div className="lg:col-span-6 flex flex-col justify-center mt-20 lg:mt-0 order-2 lg:order-1 elegant-up">
            <div className="flex items-center gap-6 mb-12">
              <span className="w-16 h-[1px] bg-[#E2D4C1]"></span>
              <span className="font-manrope text-[10px] uppercase tracking-[0.3em] text-[#E2D4C1]">
                Master Stylists
              </span>
            </div>
            
            <h2 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bodoni text-white leading-[1.05] tracking-tight mb-12">
              The art of <br/>
              <span className="italic font-light text-[#E2D4C1]">sculpting</span> <br/>
              beauty.
            </h2>
            
            <p className="font-manrope text-[13px] leading-loose text-white/50 mb-14 max-w-sm font-light uppercase tracking-widest">
              {data.about || "Experience the pinnacle of hair styling. Where modern technique meets high-fashion artistry."}
            </p>
            
            <a href="#services" className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] font-manrope text-[#E2D4C1] border border-[#E2D4C1]/30 px-8 py-4 w-max hover:bg-[#E2D4C1] hover:text-[#050505] transition-all duration-500">
              Discover The Studio <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-6 relative h-[60vh] lg:h-[80vh] w-full order-1 lg:order-2 elegant-up delay-2">
            <div className="w-full h-full overflow-hidden relative border border-white/10">
              <img 
                src={heroImage} 
                alt="Salon Interior" 
                className="w-full h-full object-cover object-top cinematic-pan opacity-80"
              />
              {/* Subtle Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-60"></div>
            </div>
            {/* Minimal floating text */}
            <div className="absolute -left-10 bottom-20 rotate-[-90deg] origin-bottom-left font-manrope text-[10px] uppercase tracking-[0.4em] text-white/40 hidden lg:block">
              Est. {new Date().getFullYear()} — City Luxe
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        MANIFESTO (ABOUT)
        ========================================
      */}
      <section className="py-40 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#E2D4C1]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="w-[95%] max-w-5xl mx-auto text-center relative z-10 reveal-on-scroll">
          <span className="font-manrope text-[10px] uppercase tracking-[0.4em] text-[#E2D4C1] mb-10 block">Our Manifesto</span>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bodoni font-light text-white leading-tight mb-16">
            "Your hair is the <i className="text-[#E2D4C1]">crown</i> you never take off. We treat it with the ultimate reverence."
          </h3>
          <div className="w-px h-24 bg-[#E2D4C1]/30 mx-auto"></div>
        </div>
      </section>

      {/* 
        ========================================
        SERVICES: HIGH FASHION LIST
        ========================================
      */}
      <section id="services" className="py-32 bg-[#050505]">
        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 sticky top-32 h-max reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-[1px] bg-[#E2D4C1]"></span>
              <span className="font-manrope text-[10px] uppercase tracking-[0.3em] text-[#E2D4C1]">Menu</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bodoni text-white mb-8">
              Curated <br/> <i className="text-[#E2D4C1] font-light">Services</i>
            </h2>
            <p className="font-manrope text-[13px] leading-relaxed text-white/50 font-light max-w-xs mb-10 uppercase tracking-widest">
              A bespoke menu of high-end styling, cutting, and advanced coloring techniques.
            </p>
            <button className="border-b border-[#E2D4C1] text-[#E2D4C1] text-[10px] uppercase tracking-[0.2em] pb-1 hover:text-white hover:border-white transition-colors">
              Download Full Menu
            </button>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {[
                { name: "Signature Cut & Style", price: "FROM $120", desc: "Consultation, precision tailoring, luxury wash, and high-fashion blowout." },
                { name: "Balayage & Dimensional Color", price: "FROM $250", desc: "Hand-painted highlights providing seamless, natural dimension." },
                { name: "Full Color Alchemy", price: "FROM $180", desc: "All-over chromatic application using premium glossing formulations." },
                { name: "Keratin Smoothing Therapy", price: "FROM $300", desc: "Advanced frizz-eliminating protein treatment lasting up to 12 weeks." },
                { name: "Special Event Editorial", price: "FROM $150", desc: "Avant-garde styling, updos, and elegant waves for special occasions." }
              ].map((srv, i) => (
                <div key={i} className={`group border-b border-white/10 py-10 hover:border-[#E2D4C1]/50 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 reveal-on-scroll`} style={{transitionDelay: `${i * 0.1}s`}}>
                  <div>
                    <h3 className="text-3xl font-bodoni text-white group-hover:text-[#E2D4C1] transition-colors mb-4">{srv.name}</h3>
                    <p className="font-manrope text-[13px] text-white/40 tracking-wider font-light max-w-md">{srv.desc}</p>
                  </div>
                  <div className="flex items-center gap-8 shrink-0">
                    <span className="font-manrope text-sm tracking-[0.2em] text-[#E2D4C1]">{srv.price}</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E2D4C1] group-hover:bg-[#E2D4C1] group-hover:text-[#050505] transition-all duration-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        LOOKBOOK: MASONRY ASYMMETRY
        ========================================
      */}
      <section id="lookbook" className="py-32 bg-[#0A0A0A]">
        <div className="w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-on-scroll">
            <div>
               <span className="font-manrope text-[10px] uppercase tracking-[0.4em] text-[#E2D4C1] mb-6 block">Portfolio</span>
               <h2 className="text-5xl md:text-7xl font-bodoni text-white">
                 The <i className="text-[#E2D4C1] font-light">Lookbook</i>
               </h2>
            </div>
            <a href="#" className="flex items-center gap-4 font-manrope text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white border border-white/10 px-6 py-3 rounded-full transition-all hover:border-white/30">
              <Instagram className="w-4 h-4" /> @glowsalon
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="w-full aspect-square overflow-hidden relative group reveal-on-scroll">
                <img src={getImg("https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1", 1)} alt="Style" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden relative group md:w-3/4 self-end reveal-on-scroll delay-1">
                <img src={getImg("https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388", 2)} alt="Style" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-12 pt-0 md:pt-32">
              <div className="w-full aspect-[3/4] overflow-hidden relative group md:w-5/6 reveal-on-scroll delay-2">
                <img src={getImg("https://images.unsplash.com/photo-1580618672591-eb180b1a973f", 3)} alt="Style" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
              <div className="w-full aspect-video overflow-hidden relative group reveal-on-scroll">
                <img src={getImg("https://images.unsplash.com/photo-1620331311520-246422fd82f9", 4)} alt="Style" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        CONTACT FORM SECTION
        ========================================
      */}
      <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="w-[95%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-[1px] bg-[#E2D4C1]"></span>
              <span className="font-manrope text-[10px] uppercase tracking-[0.3em] text-[#E2D4C1]">Inquiries</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bodoni text-white mb-8 leading-[1.1]">
              Reserve your <br/> <i className="text-[#E2D4C1] font-light">Experience</i>
            </h2>
            <p className="font-manrope text-[13px] leading-relaxed text-white/50 font-light max-w-md mb-10 uppercase tracking-widest">
              Please complete the form below to request an appointment. Our concierge will be in touch shortly to confirm your booking.
            </p>
          </div>
          
          <div className="reveal-on-scroll delay-2">
            <form className="flex flex-col gap-10">
              <div className="relative group">
                <input type="text" placeholder="FULL NAME" required className="w-full bg-transparent border-b border-white/20 pb-4 font-manrope text-[11px] tracking-[0.2em] text-white outline-none focus:border-[#E2D4C1] transition-colors placeholder:text-white/30" />
              </div>
              <div className="relative group">
                <input type="email" placeholder="EMAIL ADDRESS" required className="w-full bg-transparent border-b border-white/20 pb-4 font-manrope text-[11px] tracking-[0.2em] text-white outline-none focus:border-[#E2D4C1] transition-colors placeholder:text-white/30" />
              </div>
              <div className="relative group">
                <input type="text" placeholder="REQUESTED SERVICE" className="w-full bg-transparent border-b border-white/20 pb-4 font-manrope text-[11px] tracking-[0.2em] text-white outline-none focus:border-[#E2D4C1] transition-colors placeholder:text-white/30" />
              </div>
              <button type="submit" onClick={(e) => e.preventDefault()} className="group flex items-center justify-between border border-white/20 px-8 py-5 hover:bg-[#E2D4C1] hover:border-[#E2D4C1] transition-colors duration-500 mt-4">
                <span className="font-manrope text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-[#050505] transition-colors">Submit Request</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:text-[#050505] transition-colors" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        FOOTER: MINIMALIST LUXURY
        ========================================
      */}
      <footer className="bg-[#050505] pt-16 pb-12">
        <div className="w-[95%] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-white/10 pb-20 mb-12">
            <div className="md:col-span-5 reveal-on-scroll">
              <h3 className="text-4xl font-bodoni uppercase tracking-widest text-[#E2D4C1] mb-8">
                {data.name || "GLOW SALON"}
              </h3>
              <p className="font-manrope text-[13px] text-white/50 max-w-sm font-light leading-relaxed uppercase tracking-widest mb-10">
                Redefining the architecture of hair. Providing unparalleled styling in a sanctuary of luxury.
              </p>
            </div>

            <div className="md:col-span-4 reveal-on-scroll delay-1">
              <h4 className="font-manrope text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Atelier Location</h4>
              <ul className="space-y-4 font-manrope text-[13px] text-white/80 font-light tracking-wide">
                <li className="leading-relaxed flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-[#E2D4C1] shrink-0 mt-1" />
                  {data.address || "123 Fashion Ave, Suite A\nNew York, NY 10001"}
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 reveal-on-scroll delay-2">
              <h4 className="font-manrope text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Concierge</h4>
              <ul className="space-y-4 font-manrope text-[13px] text-white/80 font-light tracking-wide">
                <li className="flex items-center gap-4"><Phone className="w-4 h-4 text-[#E2D4C1]" /> {data.phone || "+1 (555) 123-4567"}</li>
                <li className="flex items-center gap-4"><Mail className="w-4 h-4 text-[#E2D4C1]" /> {data.email || "hello@glowsalon.com"}</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center font-manrope text-[10px] uppercase text-white/30 tracking-[0.2em]">
            <p>© {new Date().getFullYear()} {data.name || "Glow Salon"}. All Rights Reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
