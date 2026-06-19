
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { 
  Menu, X, ArrowRight, Sparkles, Droplet, Leaf, 
  MapPin, Phone, Mail, Instagram, Facebook, Twitter,
  Play
} from "lucide-react";

export default function BeautyTemplate3({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    if (data.image) setHeroImage(data.image);

    const pool = [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a1faab45778a?q=80&w=800&auto=format&fit=crop"
    ];

    let seed = data.name ? data.name.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0) : 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    setDynamicImages(pool.sort(() => 0.5 - seededRandom()));
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.name, data.image]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  const SERVICES = [
    { icon: Sparkles, name: "Aesthetic Enhancements", desc: "Advanced, non-invasive treatments designed to subtly elevate your natural features and restore youthful radiance.", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop" },
    { icon: Droplet, name: "Signature Hydration", desc: "Bespoke facials utilizing clinical-grade serums to deeply nourish, repair, and illuminate your skin from within.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" },
    { icon: Leaf, name: "Holistic Therapies", desc: "Transformative body treatments that align physical relaxation with mental clarity, using organic botanical blends.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" },
    { icon: Play, name: "Bridal Curation", desc: "An exclusive, multi-week beauty itinerary ensuring you look absolutely flawless on your most important day.", img: "https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans text-[#2A2522] selection:bg-[#CBA399] selection:text-white overflow-x-hidden">
      
      {/* 
        ========================================
        GLOBAL STYLES & LUXURY ANIMATIONS 
        ========================================
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
        
        /* Premium Film Grain Overlay */
        .noise-overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none; z-index: 9999;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.06"/%3E%3C/svg%3E');
        }

        /* Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        
        /* Reveal Animation */
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .reveal-up { animation: revealUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        /* Slow Pan Animation for Images */
        @keyframes slowPan {
          0% { transform: scale(1.05) translateY(0); }
          50% { transform: scale(1.05) translateY(-3%); }
          100% { transform: scale(1.05) translateY(0); }
        }
        .slow-pan { animation: slowPan 20s ease-in-out infinite; }

        /* Custom Scrollbar for extreme luxury feel */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #FDFBF9; }
        ::-webkit-scrollbar-thumb { background: #CBA399; border-radius: 10px; }
      `}} />

      {/* The Grain Layer */}
      <div className="noise-overlay"></div>

      {/* 
        ========================================
        PREMIUM FLOATING HEADER 
        ========================================
      */}
      <header className={`fixed w-[95%] max-w-7xl left-1/2 -translate-x-1/2 z-50 transition-all duration-700 font-jost rounded-full border shadow-2xl ${scrolled ? "top-4 bg-[#FDFBF9]/90 backdrop-blur-xl py-3 border-[#E8DFD8]/60 shadow-[0_20px_40px_rgba(42,37,34,0.08)]" : "top-6 bg-[#FDFBF9]/70 backdrop-blur-md py-5 border-white/20 shadow-[0_10px_30px_rgba(42,37,34,0.03)]"}`}>
        <div className="px-6 lg:px-10 flex items-center justify-between">
          
          <div className="text-xl lg:text-2xl font-cormorant tracking-[0.3em] uppercase text-[#2A2522]">
            {data.name || "AURA"}
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-medium text-[#2A2522]/80">
            <a href="#home" className="hover:text-[#CBA399] transition-colors relative group">
              The Experience
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-[#CBA399] transition-colors relative group">
              Philosophy
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a href="#services" className="hover:text-[#CBA399] transition-colors relative group">
              Curations
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden lg:block">
            <button className="relative overflow-hidden group bg-[#2A2522] text-[#FDFBF9] px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-medium rounded-full">
              <span className="relative z-10 group-hover:text-[#2A2522] transition-colors duration-500">Reserve</span>
              <div className="absolute inset-0 bg-[#CBA399] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </button>
          </div>

          <button 
            className="lg:hidden z-50 relative text-[#2A2522] w-10 h-10 flex items-center justify-center rounded-full bg-[#F4EBE8]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-[#2A2522] transition-opacity duration-700 lg:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center gap-10">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF9] text-5xl font-cormorant italic tracking-wider hover:text-[#CBA399] transition-colors">The Experience</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF9] text-5xl font-cormorant italic tracking-wider hover:text-[#CBA399] transition-colors">Philosophy</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF9] text-5xl font-cormorant italic tracking-wider hover:text-[#CBA399] transition-colors">Curations</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF9] text-5xl font-cormorant italic tracking-wider hover:text-[#CBA399] transition-colors">Contact</a>
        </nav>
      </div>

      {/* 
        ========================================
        HERO SECTION: AVANT-GARDE EDITORIAL 
        ========================================
      */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-0 px-6 overflow-hidden">
        <div className="max-w-[90rem] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow">
          
          <div className="lg:col-span-6 lg:pr-12 order-2 lg:order-1 reveal-up">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#CBA399]"></span>
              <span className="font-jost text-[9px] uppercase tracking-[0.4em] text-[#CBA399]">
                High-End Aesthetics
              </span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-cormorant font-light text-[#2A2522] leading-[0.9] mb-10 tracking-tight">
              The pure <br/>
              <span className="italic text-[#CBA399] pr-4">essence</span> <br/>
              of you.
            </h1>
            
            <p className="font-jost text-sm leading-relaxed text-[#2A2522]/60 mb-12 max-w-md font-light">
              {data.about || "A sanctuary of modern elegance where advanced aesthetics meet holistic tranquility. Experience bespoke treatments tailored to your unique beauty."}
            </p>
            
            <button className="group flex items-center gap-6 text-xs uppercase tracking-[0.25em] font-jost text-[#2A2522] hover:text-[#CBA399] transition-all">
              <span className="border-b border-[#2A2522] pb-1 group-hover:border-[#CBA399] transition-colors">Begin Your Journey</span> 
              <div className="w-10 h-10 rounded-full border border-[#2A2522] flex items-center justify-center group-hover:border-[#CBA399] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2 h-[50vh] lg:h-[85vh] w-full reveal-up delay-300">
            <div className="w-full h-full rounded-t-[15rem] rounded-bl-[15rem] rounded-br-2xl overflow-hidden relative shadow-2xl">
              <img 
                src={heroImage} 
                alt="Luxury Beauty" 
                className="w-full h-full object-cover object-center slow-pan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522]/40 to-transparent"></div>
            </div>
            
            <div className="absolute -left-12 bottom-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden lg:flex items-center gap-4 animate-[bounce_10s_infinite]">
              <div className="text-4xl font-cormorant italic text-[#CBA399]">No. 1</div>
              <div className="font-jost text-[10px] uppercase tracking-widest text-[#2A2522] leading-tight">
                Premium<br/>Salon in<br/>The City
              </div>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-b border-[#E8DFD8] py-4 mt-12 overflow-hidden flex whitespace-nowrap bg-[#FDFBF9] reveal-up delay-500">
          <div className="animate-marquee flex items-center gap-12 font-jost text-[10px] uppercase tracking-[0.3em] text-[#2A2522]/40">
            <span>Elevating Modern Beauty</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            <span>Bespoke Aesthetics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            <span>Holistic Wellness</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            <span>Luxury Care</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            
            <span>Elevating Modern Beauty</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            <span>Bespoke Aesthetics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            <span>Holistic Wellness</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
            <span>Luxury Care</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA399]"></span>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        PHILOSOPHY SECTION: DARK EDITORIAL 
        ========================================
      */}
      <section id="about" className="py-32 bg-[#2A2522] text-[#FDFBF9] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-cormorant font-black text-[#FDFBF9] opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
          PHILOSOPHY
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-tr-[10rem] rounded-bl-[10rem]">
                <img src={getImg("https://images.unsplash.com/photo-1522337660859-02fbefca4702", 0)} alt="Treatment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] slow-pan" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#CBA399] rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#CBA399] rounded-full -z-10"></div>
            </div>

            <div className="lg:col-span-7 lg:pl-16">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-cormorant font-light mb-12 leading-tight">
                True beauty is <i className="text-[#CBA399]">revealed</i>, <br/>not manufactured.
              </h2>
              
              <div className="pl-8 border-l border-[#CBA399]">
                <p className="font-jost text-[15px] leading-loose text-[#FDFBF9]/70 mb-8 font-light">
                  Our atelier is designed as a minimalist sanctuary, stripping away the noise of the outside world so you can focus entirely on your personal renewal.
                </p>
                <p className="font-jost text-[15px] leading-loose text-[#FDFBF9]/70 font-light mb-10">
                  By blending cutting-edge dermatological science with ancient botanical wisdom, we curate an experience that honors the natural architecture of your skin.
                </p>
                
                <div className="flex items-center gap-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-50 invert" />
                  <div className="font-jost text-xs tracking-widest text-[#CBA399] uppercase">Lead Aesthetician</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        INTERACTIVE CURATIONS (SERVICES) 
        ========================================
      */}
      <section id="services" className="py-32 bg-[#FDFBF9]">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="font-jost text-[10px] uppercase tracking-[0.4em] text-[#CBA399] mb-4">The Menu</span>
            <h2 className="text-5xl md:text-6xl font-cormorant font-light text-[#2A2522]">
              Bespoke <i className="text-[#CBA399]">Curations</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Interactive Image Display */}
            <div className="lg:col-span-5 hidden lg:block relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {SERVICES.map((srv, i) => (
                <img 
                  key={i}
                  src={srv.img}
                  alt={srv.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeService === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-[#2A2522]/10"></div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {SERVICES.map((srv, i) => (
                <div 
                  key={i} 
                  className={`group border-b border-[#E8DFD8] py-8 cursor-pointer transition-all duration-500 ${activeService === i ? 'pl-8 border-[#CBA399]' : 'hover:pl-4 hover:border-[#2A2522]/30'}`}
                  onMouseEnter={() => setActiveService(i)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-3xl font-cormorant transition-colors duration-500 ${activeService === i ? 'text-[#CBA399] italic' : 'text-[#2A2522]'}`}>
                      {srv.name}
                    </h3>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${activeService === i ? 'border-[#CBA399] bg-[#CBA399] text-white' : 'border-[#E8DFD8] text-[#2A2522] group-hover:border-[#2A2522]'}`}>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${activeService === i ? '-rotate-45' : ''}`} />
                    </div>
                  </div>
                  <p className={`font-jost text-sm leading-relaxed font-light transition-all duration-500 max-w-lg ${activeService === i ? 'text-[#2A2522]/80 h-auto opacity-100' : 'text-[#2A2522]/40'}`}>
                    {srv.desc}
                  </p>
                </div>
              ))}
              
              <button className="mt-12 uppercase tracking-[0.2em] font-jost text-[10px] font-medium text-[#2A2522] border border-[#2A2522] px-8 py-4 self-start hover:bg-[#2A2522] hover:text-white transition-colors duration-500">
                View Full Treatment Menu
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        ASYMMETRICAL GALLERY 
        ========================================
      */}
      <section id="gallery" className="py-20 bg-[#F4EBE8]">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-1 flex flex-col justify-center pr-8 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-cormorant font-light text-[#2A2522] mb-6">
                A visual <i className="text-[#CBA399]">journey</i> through our spaces.
              </h2>
              <p className="font-jost text-sm text-[#2A2522]/60 font-light mb-8 leading-relaxed">
                Explore the serene environment of our atelier, designed meticulously to calm the senses and elevate the spirit. Every corner is crafted for ultimate relaxation.
              </p>
              <button className="text-xs font-jost uppercase tracking-widest text-[#CBA399] border-b border-[#CBA399] self-start pb-1 hover:text-[#2A2522] hover:border-[#2A2522] transition-colors">
                Follow @AuraBeauty
              </button>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-6 mt-12">
                <div className="w-full aspect-square overflow-hidden rounded-xl">
                   <img src={getImg("https://images.unsplash.com/photo-1512496015851-a1faab45778a", 2)} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
                </div>
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl">
                   <img src={getImg("https://images.unsplash.com/photo-1595152772835-219674b2a8a6", 3)} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl">
                   <img src={getImg("https://images.unsplash.com/photo-1562322140-8baeececf3df", 4)} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
                </div>
                <div className="w-full aspect-square overflow-hidden rounded-xl">
                   <img src={getImg("https://images.unsplash.com/photo-1521590832167-7bfc1748b565", 5)} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        FOOTER: HAUTE COUTURE 
        ========================================
      */}
      <footer id="contact" className="bg-[#1c1816] pt-32 pb-12 text-[#FDFBF9] relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
          
          {/* Newsletter / CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24 border-b border-[#FDFBF9]/10 mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-cormorant font-light text-[#FDFBF9] mb-4">
                Join the <i className="text-[#CBA399]">Inner Circle</i>
              </h2>
              <p className="font-jost text-sm text-[#FDFBF9]/60 font-light max-w-md">
                Subscribe to receive exclusive invitations, expert skincare insights, and early access to our seasonal curations.
              </p>
            </div>
            <div className="flex items-center">
              <div className="relative w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-transparent border-b border-[#FDFBF9]/30 py-4 pr-12 text-sm font-jost text-[#FDFBF9] placeholder:text-[#FDFBF9]/40 focus:outline-none focus:border-[#CBA399] transition-colors rounded-none"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#CBA399] hover:text-[#FDFBF9] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-24">
            
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-2xl lg:text-3xl font-cormorant tracking-[0.2em] uppercase text-[#FDFBF9] mb-8">
                {data.name || "AURA"}
              </div>
              <p className="font-jost text-sm text-[#FDFBF9]/50 font-light leading-relaxed max-w-xs">
                A sanctuary of modern elegance where advanced aesthetics meet holistic tranquility.
              </p>
            </div>

            <div>
              <h4 className="font-jost text-[10px] uppercase tracking-[0.2em] text-[#CBA399] mb-8">The Atelier</h4>
              <ul className="space-y-5 font-jost text-[13px] text-[#FDFBF9]/70 font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#CBA399]" />
                  <span className="leading-relaxed">{data.address || "450 Luxury Lane, Suite 100\nBeverly Hills, CA 90210"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-[#CBA399]" />
                  <span>{data.phone || "+1 (555) 123-4567"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0 text-[#CBA399]" />
                  <span>{data.email || "concierge@aura.com"}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-jost text-[10px] uppercase tracking-[0.2em] text-[#CBA399] mb-8">Curations</h4>
              <ul className="space-y-4 font-jost text-[13px] text-[#FDFBF9]/70 font-light">
                <li><a href="#" className="hover:text-[#CBA399] transition-colors relative group inline-block">Aesthetic Enhancements<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="hover:text-[#CBA399] transition-colors relative group inline-block">Signature Hydration<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="hover:text-[#CBA399] transition-colors relative group inline-block">Holistic Therapies<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="hover:text-[#CBA399] transition-colors relative group inline-block">Bridal Curation<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CBA399] transition-all duration-300 group-hover:w-full"></span></a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-jost text-[10px] uppercase tracking-[0.2em] text-[#CBA399] mb-8">Social Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#FDFBF9]/20 flex items-center justify-center text-[#FDFBF9] hover:bg-[#CBA399] hover:border-[#CBA399] hover:text-[#1c1816] transition-all duration-500"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#FDFBF9]/20 flex items-center justify-center text-[#FDFBF9] hover:bg-[#CBA399] hover:border-[#CBA399] hover:text-[#1c1816] transition-all duration-500"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#FDFBF9]/20 flex items-center justify-center text-[#FDFBF9] hover:bg-[#CBA399] hover:border-[#CBA399] hover:text-[#1c1816] transition-all duration-500"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>

          </div>
          
          {/* Bottom Area with Massive Faded Watermark Logo */}
          <div className="w-full border-t border-[#FDFBF9]/10 pt-10 mt-16 relative">
            <h2 className="text-[18vw] md:text-[16vw] font-cormorant font-black text-[#FDFBF9] opacity-[0.02] leading-none tracking-widest pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center whitespace-nowrap overflow-hidden mix-blend-overlay">
              {data.name?.toUpperCase() || "AURA"}
            </h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center font-jost text-[10px] uppercase tracking-widest text-[#FDFBF9]/40 relative z-10">
              <p>© {new Date().getFullYear()} {data.name || "Aura"}. All Rights Reserved.</p>
              <div className="flex gap-8 mt-6 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
