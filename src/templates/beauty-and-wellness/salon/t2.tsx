
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { 
  Menu, X, Scissors, User, Circle, ArrowRight,
  CheckCircle, Plus, Mail, MapPin, Phone
} from "lucide-react";

const SalonTemplate2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);
  const [heroIdx, setHeroIdx] = useState(0);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Teal color from the image
  const TEAL = "#13B897";
  const TAN = "#E4B676";

  const heroPoses = [
    "/api/local-image?file=media__1781156477150.png",
    "/api/local-image?file=media__1781156485641.png"
  ];

  const seed = data.name ? data.name.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0) : 1;

  useEffect(() => {
    // Alternate hero image on every refresh
    const lastIdx = parseInt(sessionStorage.getItem('lastHeroIdx') || '1');
    const nextIdx = (lastIdx + 1) % 2;
    sessionStorage.setItem('lastHeroIdx', nextIdx.toString());
    setHeroIdx(nextIdx);
    setHasHydrated(true);

    const pool = [
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop"
    ];

    let currentSeed = seed;

    const seededRandom = () => {
      const x = Math.sin(currentSeed++) * 10000;
      return x - Math.floor(x);
    };

    setDynamicImages(pool.sort(() => 0.5 - seededRandom()));
  }, [data.name]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  return (
    <>
    <div className="min-h-screen bg-white font-sans text-[#222222] overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap');
        html { scroll-behavior: smooth; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-body { font-family: 'Open Sans', sans-serif; }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 20s linear infinite; }
      `}} />

      {/* HEADER */}
      <header className="w-full py-5 bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-[100] border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo matching the exact layout */}
          <div className="text-2xl font-bold font-heading tracking-tight text-[#222222] flex items-center">
            {data.name ? data.name.toUpperCase() : <><span className="text-[#222222]">MEN</span><span style={{color: TEAL}}>ZY</span></>}
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-gray-500 font-body">
            <a href="#home" style={{color: TEAL}}>Home</a>
            <a href="#about" className="hover:text-black transition-colors">About Us</a>
            <a href="#team" className="hover:text-black transition-colors">Team</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact Us</a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button className="lg:hidden text-[#222222]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown (Premium UI) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl flex flex-col items-center p-10 gap-8 border-t border-gray-100 z-50 transition-all">
            <a href="#home" className="text-xl font-bold font-heading tracking-widest uppercase hover:text-[#13B897] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-xl font-bold font-heading tracking-widest uppercase hover:text-[#13B897] transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#team" className="text-xl font-bold font-heading tracking-widest uppercase hover:text-[#13B897] transition-colors" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#contact" className="text-xl font-bold font-heading tracking-widest uppercase hover:text-[#13B897] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </header>

      {/* 
        ========================================
        HERO SECTION
        ========================================
      */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        
        {/* Subtle decorative elements matching image */}
        <div className="absolute top-20 left-1/3 opacity-50 hidden lg:block">
           <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-[#13B897] stroke-[3px] fill-none"><path d="M0,10 Q10,0 20,10 T40,10"/></svg>
        </div>
        <div className="absolute top-40 right-1/4 opacity-50 hidden lg:block">
           <svg width="30" height="30" viewBox="0 0 30 30" className="stroke-[#E4B676] stroke-[3px] fill-none"><path d="M0,0 L10,10 L0,20 M10,0 L20,10 L10,20"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="pt-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold font-heading text-[#222222] leading-[1.1] mb-6 uppercase">
              THE PRIME SPOT FOR YOUR <span style={{color: TEAL}}>{data.industry ? data.industry.toUpperCase() : 'HAIR GROOMING'}</span> NEEDS IN YOUR CITY
            </h1>
            <p className="text-gray-500 text-[14px] font-body mb-10 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              {data.about || "Where expertise meets indulgence for a revitalizing experience."}
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="text-white px-8 py-3.5 rounded font-bold text-sm tracking-wider shadow-md hover:opacity-90 transition-opacity whitespace-nowrap" style={{backgroundColor: TEAL}}>
                BOOK NOW
              </a>
              <div className="w-16 h-[2px] bg-gray-200 hidden sm:block"></div>
              <div className="w-12 h-12 border-2 border-gray-200 rounded-full hidden sm:flex items-center justify-center text-gray-400 shrink-0">
                <div className="w-3 h-3 rounded-full border-2 border-gray-400"></div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center items-end mt-10 lg:mt-0 pb-16">
            {/* Wrapper to ensure Arch and Image perfectly align */}
            <div className="relative w-[340px] sm:w-[420px] h-full flex justify-center items-end">
              
              {/* The Solid Arch Background matching the image exact shape */}
              <div className="absolute bottom-0 w-[240px] sm:w-[300px] h-[340px] sm:h-[420px] rounded-t-[200px] rounded-b-none z-0" style={{backgroundColor: TAN}}></div>
              
              {/* Hero Image - Scaled massively from bottom to overlap arch */}
              <img 
                src={hasHydrated ? heroPoses[heroIdx] : heroPoses[0]} 
                alt="Model" 
                className="w-[320px] sm:w-[440px] h-auto object-contain object-bottom relative z-10 drop-shadow-2xl scale-[1.8] origin-bottom"
              />
              
              {/* Floating Teal Icon Badges */}
              {/* Top Right */}
              <div className="absolute top-10 -right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-xl z-20" style={{backgroundColor: TEAL}}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              
              {/* Middle Left */}
              <div className="absolute top-1/2 -left-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-xl z-20" style={{backgroundColor: TEAL}}>
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Top Far Left */}
              <div className="absolute top-1/4 -left-20 sm:-left-28 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-20 opacity-60" style={{backgroundColor: TEAL}}>
                <Scissors className="w-4 h-4" />
              </div>

              {/* Floating Text Box shrunk to match reference proportion */}
              <div className="absolute -bottom-4 -left-8 sm:-left-16 bg-white p-3 sm:p-4 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-30 flex flex-col gap-1 w-[180px] sm:w-[220px] border border-gray-50">
                <p className="font-bold text-[11px] sm:text-[12px] font-heading text-[#222222] leading-tight">Transform Your Look with<br/>Our Expert Stylists</p>
                <a href="#contact" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 mt-1" style={{color: TEAL}}>
                  GET APPOINTMENT <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        DIAGONAL FEATURE STRIP (Exact Match)
        ========================================
      */}
      <section className="relative w-full h-32 my-16 flex items-center justify-center overflow-hidden">
        {/* Black Background Layer (Rotated up towards right) */}
        <div className="absolute w-[110%] h-[60px] bg-black/80 -left-[5%] rotate-[-3deg] z-0 flex items-center overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-reverse text-white/90 font-bold font-heading tracking-[0.1em] uppercase text-[15px] items-center gap-10">
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> PREMIUM GROOMING</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> EXPERT STYLISTS</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> LUXURY EXPERIENCE</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> MODERN TRENDS</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> CLASSIC CUTS</span>
            
            {/* Duplicates for infinite scroll */}
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> PREMIUM GROOMING</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> EXPERT STYLISTS</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> LUXURY EXPERIENCE</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> MODERN TRENDS</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-white" strokeWidth={3} /> CLASSIC CUTS</span>
          </div>
        </div>
        
        {/* Teal Overlay Layer (Rotated down towards right) */}
        <div className="absolute w-[110%] h-[56px] -left-[5%] rotate-[2deg] flex items-center overflow-hidden z-10" style={{backgroundColor: TEAL}}>
          <div className="flex whitespace-nowrap animate-marquee text-white font-bold font-heading tracking-[0.1em] uppercase text-[15px] items-center gap-10">
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> HAIRCUTS</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> COLORING</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> KERATIN TREATMENT</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> BALAYAGE</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> WAXING</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> MICRODERMABRASION</span>
            
            {/* Duplicates for infinite scroll */}
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> HAIRCUTS</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> COLORING</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> KERATIN TREATMENT</span>
            <span className="flex items-center gap-10"><Plus className="w-5 h-5 text-black" strokeWidth={3} /> BALAYAGE</span>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        ABOUT SECTION (With Exact Split Circle)
        ========================================
      */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 lg:left-10 opacity-40 pointer-events-none z-0">
           <svg width="80" height="80" viewBox="0 0 50 50" className="stroke-[#E4B676] stroke-[3px] fill-none"><path d="M0,0 L10,10 L0,20 M10,0 L20,10 L10,20 M20,0 L30,10 L20,20"/></svg>
        </div>
        <div className="absolute bottom-20 right-5 lg:right-20 opacity-40 pointer-events-none z-0">
           <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#13B897] fill-none stroke-[6px] stroke-dasharray-[15,15]"><circle cx="50" cy="50" r="40"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{color: TEAL}}>About Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[#222222] leading-tight mb-6 max-w-sm">
              Discover the expertise and passion behind {data.name || "our salon"}
            </h2>
            <p className="text-gray-500 text-[13px] font-body leading-relaxed mb-8 max-w-md">
              {data.about || "Welcome to the heart of our salon, where expertise and passion collide to bring you the best in beauty and style. Our team of talented stylists and estheticians are dedicated to helping you look and feel your best. From the latest cutting-edge techniques to innovative styling ideas, our team stays ahead of the curve."}
            </p>
            <a href="#contact" className="text-white px-8 py-3 rounded font-bold text-sm tracking-wide transition-opacity hover:opacity-90 inline-block" style={{backgroundColor: TEAL}}>
              Book Appointment
            </a>
          </div>

          <div className="flex justify-center items-center gap-4">
            {/* Left smaller half-circle facing left */}
            <div className="w-[140px] h-[280px] lg:w-[160px] lg:h-[320px] overflow-hidden rounded-l-[160px] translate-y-[-20px]">
              <img src={getImg("https://images.unsplash.com/photo-1560066984-138dadb4c035", 2)} alt="Salon Process" className="w-full h-full object-cover object-right" />
            </div>
            
            {/* Right larger D-shape (half circle facing right) */}
            <div className="w-[140px] h-[280px] lg:w-[160px] lg:h-[320px] overflow-hidden rounded-r-[160px] translate-y-[20px]">
              <img src={getImg("https://images.unsplash.com/photo-1620331311520-246422fd82f9", 3)} alt="Styling" className="w-full h-full object-cover object-left" />
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        TEAM SECTION
        ========================================
      */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 lg:left-10 opacity-40 pointer-events-none z-0">
           <svg width="80" height="80" viewBox="0 0 40 40" className="stroke-[#13B897] stroke-[3px] fill-none"><path d="M0,10 Q10,0 20,10 T40,10"/></svg>
        </div>
        <div className="absolute bottom-10 right-5 lg:right-10 opacity-40 pointer-events-none z-0 transform rotate-45">
           <svg width="80" height="80" viewBox="0 0 50 50" className="stroke-[#E4B676] stroke-[3px] fill-none"><path d="M0,0 L10,10 L0,20 M10,0 L20,10 L10,20 M20,0 L30,10 L20,20"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{color: TEAL}}>Our Professionals</p>
              <h2 className="text-3xl font-bold font-heading text-[#222222] leading-tight max-w-sm">
                Meet the talented team that brings your beauty vision to life
              </h2>
            </div>
            <a href="#team" className="text-white px-8 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90 shrink-0" style={{backgroundColor: TEAL}}>
              View more
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              { name: "Emma Woods", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1" },
              { name: "Sophia Lee", img: "https://images.unsplash.com/photo-1521590832167-7bfc1748b565" },
              { name: "Olivia Davis", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f" },
              { name: "Mia Johnson", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035" }
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-0">
                  <img src={getImg(member.img, i+4)} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white px-6 py-2 rounded-full shadow-lg text-center -mt-6 relative z-10 flex flex-col items-center min-w-[120px]">
                  <p className="font-bold font-heading text-[13px] text-[#222222]">{member.name}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 
        ========================================
        STEP INSIDE SECTION
        ========================================
      */}
      <section className="py-24 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-[10%] lg:right-[20%] opacity-40 pointer-events-none z-0">
           <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#E4B676] fill-none stroke-[6px] stroke-dasharray-[15,15]"><circle cx="50" cy="50" r="40"/></svg>
        </div>
        <div className="absolute bottom-20 left-[5%] opacity-40 pointer-events-none z-0 rotate-12">
           <svg width="80" height="80" viewBox="0 0 40 40" className="stroke-[#13B897] stroke-[3px] fill-none"><path d="M0,10 Q10,0 20,10 T40,10"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Circular Cluster Exact Match */}
          <div className="relative h-[400px] flex justify-center">
            <div className="absolute top-0 right-[20%] w-[180px] h-[180px] rounded-full overflow-hidden shadow-xl z-20">
              <img src={getImg("https://images.unsplash.com/photo-1522337660859-02fbefca4702", 7)} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 left-[10%] w-[220px] h-[220px] rounded-full overflow-hidden shadow-xl z-10">
              <img src={getImg("https://images.unsplash.com/photo-1560066984-138dadb4c035", 8)} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-[15%] w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-lg z-30">
              <img src={getImg("https://images.unsplash.com/photo-1620331311520-246422fd82f9", 9)} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{color: TEAL}}>Experience</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[#222222] leading-tight mb-6 max-w-sm">
              Step inside our salon and experience the magic of transformation
            </h2>
            <p className="text-gray-500 text-[13px] font-body leading-relaxed mb-8 max-w-md">
              Step inside our studio and experience a world accessible only to the most discerning. Our team of expert stylists are dedicated to delivering an unmatched experience designed to elevate your unique beauty.
            </p>
            <a href="#contact" className="text-white px-8 py-3 rounded font-bold text-sm tracking-wide transition-opacity hover:opacity-90 inline-block" style={{backgroundColor: TEAL}}>
              Book Appointment
            </a>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        CONTACT SECTION
        ========================================
      */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{color: TEAL}}>Contact</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[#222222] leading-tight mb-6 max-w-sm">
              Ready to transform your look? Book your appointment today.
            </h2>
            <p className="text-gray-500 text-[13px] font-body leading-relaxed mb-8 max-w-md">
              Fill out the form below to request an appointment. Our team will get back to you shortly to confirm your booking date and time.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm" style={{backgroundColor: TEAL}}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="font-semibold text-sm text-[#222222]">{data.address || "123 Salon Avenue, City"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm" style={{backgroundColor: TEAL}}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="font-semibold text-sm text-[#222222]">{data.phone || "+1 (555) 123-4567"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm" style={{backgroundColor: TEAL}}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="font-semibold text-sm text-[#222222]">{data.email || "hello@menzy.com"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 border border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl" style={{backgroundColor: TEAL}}></div>
            <form className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#13B897] transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-2">Phone</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#13B897] transition-colors" placeholder="Your Phone" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#13B897] transition-colors" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-2">Service</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#13B897] transition-colors">
                    <option>Haircut & Styling</option>
                    <option>Coloring</option>
                    <option>Facial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-2">Preferred Date</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#13B897] transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#13B897] transition-colors" placeholder="Any special requests?"></textarea>
              </div>
              <button type="button" className="w-full text-white py-4 rounded-lg font-bold text-[13px] tracking-widest uppercase hover:opacity-90 transition-opacity shadow-md mt-2" style={{backgroundColor: TEAL}}>
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="bg-[#111111] pt-20 pb-10 border-t-[6px]" style={{borderColor: TEAL}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-3xl font-bold font-heading tracking-tight text-white mb-6 flex items-center">
                {data.name?.toUpperCase() || <><span className="text-white">MEN</span><span style={{color: TEAL}}>ZY</span></>}
              </div>
              <p className="text-gray-400 text-[13px] font-body leading-relaxed mb-8 max-w-xs">
                {data.about || "Where expertise meets indulgence for a revitalizing experience. Elevating your everyday style with precision and care."}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all cursor-pointer">
                  <span className="font-bold text-sm">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all cursor-pointer">
                  <span className="font-bold text-sm">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all cursor-pointer">
                  <span className="font-bold text-sm">TW</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold font-heading uppercase tracking-widest text-xs mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 text-[13px] hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 text-[13px] hover:text-white transition-colors">About Us</a></li>
                <li><a href="#team" className="text-gray-400 text-[13px] hover:text-white transition-colors">Our Professionals</a></li>
                <li><a href="#contact" className="text-gray-400 text-[13px] hover:text-white transition-colors">Book Appointment</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold font-heading uppercase tracking-widest text-xs mb-6">Services</h4>
              <ul className="space-y-4">
                <li className="text-gray-400 text-[13px]">Precision Haircuts</li>
                <li className="text-gray-400 text-[13px]">Custom Coloring</li>
                <li className="text-gray-400 text-[13px]">Keratin Treatments</li>
                <li className="text-gray-400 text-[13px]">Luxury Spas</li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-white font-bold font-heading uppercase tracking-widest text-xs mb-6">Visit Us</h4>
              <p className="text-gray-400 text-[13px] mb-4 flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{color: TEAL}} />
                {data.address || "123 Elegance Blvd, NY"}
              </p>
              <p className="text-gray-400 text-[13px] mb-4 flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{color: TEAL}} />
                {data.phone || "+1 (555) 123-4567"}
              </p>
              <p className="text-gray-400 text-[13px] mb-4 flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{color: TEAL}} />
                {data.email || "hello@menzy.com"}
              </p>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[12px]">
              © {new Date().getFullYear()} {data.name || "Menzy Salon"}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-[12px] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-[12px] hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};
export default SalonTemplate2;
