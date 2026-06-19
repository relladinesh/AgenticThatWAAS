
import { TemplateProps, BakeryData } from "@/types";
import { useState, useEffect, useRef, ReactNode } from "react";
import { Search, Menu, ArrowRight, ArrowLeft, Star, Plus, Minus, MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle, Clock, ArrowDown, X } from "lucide-react";

// Custom ScrollReveal Hook
const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: { children: ReactNode, className?: string, delay?: number, direction?: "up" | "left" | "right" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let translateClass = "translate-y-12";
  if (direction === "left") translateClass = "-translate-x-12";
  if (direction === "right") translateClass = "translate-x-12";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${translateClass}`
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const defaultTeam = [
  {
    name: "Alessandro Rossi",
    role: "Master Baker",
    experience: "With over two decades of experience in artisanal bread making, Chef Alessandro brings authentic European rustic traditions and a masterful touch to every single sourdough loaf.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
  },
  {
    name: "Isabella Chen",
    role: "Head Pastry Artist",
    experience: "Trained in Paris, Isabella crafts the visual and flavorful language of our bakery. Her delicate macarons and avant-garde tartlets ensure every pastry is a true work of art.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80"
  },
  {
    name: "Marcus Thorne",
    role: "Viennoiserie Expert",
    experience: "Specializing in laminated doughs, Marcus is the genius behind our perfectly flaky croissants and rich morning pastries, dedicating his craft to the science of butter and yeast.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
  }
];

const BakeryTemplate2 = ({ data }: TemplateProps) => {
  const bakery = data as BakeryData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [dynamicImages, setDynamicImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1589367920969-19614cb9fdfa?w=600&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=600&q=80",
    "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=600&q=80"
  ]);

  const teamData = bakery.team?.length ? bakery.team : defaultTeam;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1589367920969-19614cb9fdfa?w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=800&q=80",
      "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
      "https://images.unsplash.com/photo-1517433622965-0e6a5414d316?w=800&q=80",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80",
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80",
      "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
      "https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=800&q=80",
      "https://images.unsplash.com/photo-1601000689947-f4044155db36?w=800&q=80",
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (teamData && teamData.length > 1) {
      const interval = setInterval(() => {
        setCurrentTeamIndex((prev) => (prev + 1) % teamData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [teamData]);

  // Use bakery data or fallbacks
  const heroDescription = bakery.about || "The bakery is an establishment that produces food baked in an oven such as bread, cookies, cakes, pastries, and pies. Some retail bakeries are also categorized as cafés.";
  const bestSellers = bakery.bestSellers?.length ? bakery.bestSellers : [
    { name: "Rustic Sourdough", price: "$12", description: "Freshly baked classic sourdough." },
    { name: "Chocolate Artisan", price: "$24", description: "Rich chocolate infused bread." },
    { name: "French Baguette", price: "$6", description: "Crisp outside, soft inside." },
    { name: "Berry Tartlet", price: "$18", description: "Seasonal berries on a buttery crust." }
  ];
  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  const specialties = bakery.specialties?.length ? bakery.specialties : ["Corn Flour", "Soy Flakes", "Oat Flakes", "Olive Oil"];

  // Dynamic font sizing for long business names (mobile only)
  const nameLength = bakery.name?.length || 6;

  let mobileTitleClass = "text-[5rem] md:text-[8rem]";
  if (nameLength > 18) mobileTitleClass = "text-[2.5rem] md:text-[4rem]";
  else if (nameLength > 12) mobileTitleClass = "text-[3.5rem] md:text-[5.5rem]";
  else if (nameLength > 8) mobileTitleClass = "text-[4rem] md:text-[6.5rem]";

  return (
    <>
    <div className="min-h-screen bg-[#ffffff] font-sans text-[#333333] selection:bg-[#c28455] selection:text-white overflow-x-hidden">

      {/* Floating WhatsApp CTA */}
      <a href={`https://wa.me/${bakery.phone?.replace(/\D/g, '') || '1234567890'}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 hover:shadow-green-500/30 transition-all duration-300">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-4" : "bg-transparent py-6 md:py-8"}`}>
        <div className="max-w-[100rem] mx-auto px-6 md:px-16 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-medium tracking-tight text-[#333333]">
            {bakery.name || "Bakery"}
          </div>

          <nav className="hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-[#555555]">
            <a href="#" className="hover:text-[#c28455] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#c28455] transition-colors">About Us</a>
            <a href="#team" className="hover:text-[#c28455] transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-[#c28455] transition-colors">Contact Us</a>
          </nav>

          <div className="flex items-center gap-6">
            <button className="hover:text-[#c28455] transition-colors"><Search className="w-5 h-5 stroke-[1.5]" /></button>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden hover:text-[#c28455] transition-colors"><Menu className="w-5 h-5 stroke-[1.5]" /></button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex flex-col justify-between p-8 md:p-12`}
        style={{ backgroundColor: '#111111' }}
      >
        
        {/* Top Header inside Menu */}
        <div className="flex justify-between items-center z-10 w-full">
          <div className="text-lg font-serif italic text-[#c28455] tracking-wide">
            {bakery.name || "Bakery"}
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="text-white hover:text-[#c28455] transition-colors p-2 -mr-2 bg-white/5 rounded-full backdrop-blur-sm"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Decorative thin flower stroke background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[140%] h-[140%] animate-[pulse_10s_ease-in-out_infinite]">
            <path d="M100 600C100 600 70 350 150 100" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
            <circle cx="130" cy="200" r="10" fill="#ffffff" />
            <circle cx="140" cy="250" r="12" fill="#ffffff" />
            <circle cx="145" cy="300" r="14" fill="#ffffff" />
            <circle cx="140" cy="350" r="12" fill="#ffffff" />
            <circle cx="130" cy="400" r="10" fill="#ffffff" />
          </svg>
        </div>

        {/* Navigation Links (Editorial Dark Grid) */}
        <nav className="relative z-10 flex flex-col gap-10 my-auto pl-4 border-l border-white/10">
          {[
            { num: "I", label: "Home", href: "#", desc: "the beginning of taste" },
            { num: "II", label: "About Us", href: "#about", desc: "our sourdough story & heritage" },
            { num: "III", label: "Our Team", href: "#team", desc: "meet our master bakers" },
            { num: "IV", label: "Contact Us", href: "#contact", desc: "visit our kitchen & get in touch" },
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="group flex flex-col text-left transition-all duration-300 transform hover:translate-x-2"
            >
              <div className="flex items-baseline">
                <span className="font-serif italic text-sm text-[#c28455] mr-4 font-bold">{item.num}</span>
                <span className="text-xl uppercase tracking-[0.2em] font-medium text-white group-hover:text-[#c28455] transition-colors">
                  {item.label}
                </span>
              </div>
              <span className="text-[10px] font-sans lowercase text-[#888888] tracking-widest pl-6 mt-1 opacity-80 group-hover:text-white/60 transition-colors">
                {item.desc}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer info inside Menu */}
        <div className="relative z-10 w-full border-t border-white/10 pt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-[9px] tracking-widest text-[#888888] uppercase font-medium">
            <span className="text-white/70">{bakery.address || "123 Baker Street, London"}</span>
            <span>{bakery.phone || "+44 20 7946 0958"}</span>
          </div>

          <div className="flex items-center gap-6 mt-2">
            <a href="#" className="text-white/60 hover:text-[#c28455] transition-colors"><Instagram className="w-5 h-5 stroke-[1.5]" /></a>
            <a href="#" className="text-white/60 hover:text-[#c28455] transition-colors"><Facebook className="w-5 h-5 stroke-[1.5]" /></a>
            <a href="#" className="text-white/60 hover:text-[#c28455] transition-colors"><Twitter className="w-5 h-5 stroke-[1.5]" /></a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-40 pb-24 md:pb-32 min-h-[90vh] flex flex-col justify-center max-w-[100rem] mx-auto lg:pl-32 xl:pl-48 overflow-hidden">

        {/* Vertical Designation Text (Visible only on large screens) */}
        <div
          className="hidden lg:flex absolute left-8 xl:left-12 top-0 bottom-0 items-center justify-center text-[8rem] xl:text-[9rem] font-black text-black hover:text-[#c28455] transition-colors duration-[2000ms] leading-none tracking-tighter select-none z-10 uppercase whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          BAKERY
        </div>

        {/* Decorative Wireframe Circles */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 mix-blend-multiply hidden md:flex">
          <div className="w-[500px] h-[500px] border-[0.5px] border-[#999999] rounded-full absolute translate-x-12 -translate-y-20"></div>
          <div className="w-[700px] h-[700px] border-[0.5px] border-[#999999] rounded-full absolute -translate-x-32 translate-y-32"></div>
        </div>

        {/* Desktop Decorative Wheat Stalk */}
        <div className="absolute top-[15%] right-[5%] md:right-[10%] w-[120px] md:w-[250px] opacity-[0.15] z-20 hover:rotate-6 transition-transform duration-1000 rotate-[15deg] pointer-events-none hidden md:block">
          <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 600C100 600 70 350 150 100" stroke="#c28455" strokeWidth="4" strokeLinecap="round" />
            <path d="M130 200C100 180 80 220 110 240C130 260 160 220 130 200Z" fill="#c28455" />
            <path d="M140 250C110 230 90 270 120 290C140 310 170 270 140 250Z" fill="#c28455" />
            <path d="M145 300C115 280 95 320 125 340C145 360 175 320 145 300Z" fill="#c28455" />
            <path d="M140 350C110 330 90 370 120 390C140 410 170 370 140 350Z" fill="#c28455" />
            <path d="M130 400C100 380 80 420 110 440C130 460 160 420 130 400Z" fill="#c28455" />
            <path d="M115 450C85 430 65 470 95 490C115 510 145 470 115 450Z" fill="#c28455" />
            <path d="M150 170C120 150 100 190 130 210C150 230 180 190 150 170Z" fill="#c28455" />
            <path d="M160 220C130 200 110 240 140 260C160 280 190 240 160 220Z" fill="#c28455" />
            <path d="M165 270C135 250 115 290 145 310C165 330 195 290 165 270Z" fill="#c28455" />
            <path d="M160 320C130 300 110 340 140 360C160 380 190 340 160 320Z" fill="#c28455" />
          </svg>
        </div>

        {/* Mobile Vertical Watermark (Aligned with desktop design) */}
        <div
          className="lg:hidden absolute left-4 top-12 bottom-12 flex items-center justify-center text-[7rem] font-black text-black opacity-[0.02] leading-none tracking-tighter select-none z-0 uppercase whitespace-nowrap pointer-events-none"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          BAKERY
        </div>

        {/* Mobile Background SVG - Soft Premium Watermark */}
        <div className="md:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.25]">
          <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-auto absolute top-0 -translate-y-24 translate-x-20">
            <line x1="80" y1="800" x2="350" y2="100" stroke="#c28455" strokeWidth="2" strokeOpacity="0.3" />

            {/* Left side circles */}
            <circle cx="130" cy="660" r="35" fill="#c28455" fillOpacity="0.1" />
            <circle cx="170" cy="550" r="40" fill="#c28455" fillOpacity="0.1" />
            <circle cx="210" cy="440" r="45" fill="#c28455" fillOpacity="0.1" />
            <circle cx="250" cy="330" r="40" fill="#c28455" fillOpacity="0.1" />

            {/* Right side circles */}
            <circle cx="180" cy="730" r="30" fill="#c28455" fillOpacity="0.1" />
            <circle cx="220" cy="610" r="38" fill="#c28455" fillOpacity="0.1" />
            <circle cx="260" cy="490" r="42" fill="#c28455" fillOpacity="0.1" />
            <circle cx="290" cy="380" r="35" fill="#c28455" fillOpacity="0.1" />
            <circle cx="310" cy="280" r="30" fill="#c28455" fillOpacity="0.1" />
          </svg>
        </div>
        <img src="https://pngimg.com/uploads/bread/bread_PNG2272.png" alt="Small bread" className="absolute bottom-[5%] left-[5%] md:bottom-[10%] md:left-[20%] w-[80px] md:w-[120px] opacity-90 z-20 -rotate-12 drop-shadow-xl hidden md:block" />

        <div className="w-full px-6 md:px-16 flex flex-col lg:grid lg:grid-cols-12 items-center relative z-20 mt-8 md:mt-0">

          {/* Mobile Title (Visible only on small screens) - Integrated into natural document flow */}
          <div className="lg:hidden w-full text-center z-30 mb-12 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c28455] font-bold mb-3">Artisanal Bakery</span>
            <h1 className="text-4xl font-serif italic font-normal text-[#1a1a1a] tracking-wide leading-tight mb-4 capitalize">
              {bakery.name?.toLowerCase() || "Artisan Bakery"}
            </h1>
            <p className="text-[#555555] text-xs leading-[1.8] font-medium max-w-[280px] mx-auto tracking-wide">
              {heroDescription}
            </p>
            {/* Elegant Mobile Decorative Divider */}
            <div className="flex items-center gap-2 mt-6">
              <div className="w-8 h-[1px] bg-[#c28455]/30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#c28455]"></div>
              <div className="w-8 h-[1px] bg-[#c28455]/30"></div>
            </div>
          </div>

          {/* Center Dynamic Image - Wrapped in organic blob mask */}
          <div className="lg:col-span-8 flex justify-center relative w-full lg:w-auto">
            {/* Glowing Backdrop Blob for Premium Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] md:w-[70%] md:h-[70%] bg-[#c28455]/15 blur-[60px] md:blur-[100px] rounded-full z-0 pointer-events-none animate-pulse"></div>

            <ScrollReveal delay={200} className="relative w-full flex justify-center z-10">
              <div className="w-[90%] md:w-[85%] max-w-[600px] aspect-[4/3] relative rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border-4 md:border-8 border-white/80 transform hover:scale-[1.02] transition-transform duration-700">
                <img
                  src={bakery.image || bestSellers[0]?.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587"}
                  alt="Featured Item"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Text (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-4 mt-24 lg:mt-0 lg:pl-8 text-center lg:text-left justify-center lg:justify-start">
            <ScrollReveal delay={300} direction="left">
              <p className="text-[#555555] text-sm leading-[2] font-medium max-w-[300px]">
                {heroDescription}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* UNIFIED ABOUT US & ANIMATED FEATURES SECTION */}
      <section id="about" className="py-24 md:py-32 relative max-w-[90rem] mx-auto px-6 md:px-16 text-center">

        {/* Animated Background Wheat */}
        <div className="absolute top-[10%] -left-16 md:-left-32 w-[200px] md:w-[350px] opacity-[0.8] -rotate-[15deg] z-0 hidden lg:block mix-blend-multiply transition-transform duration-1000 hover:rotate-0">
          <img src="https://pngimg.com/uploads/wheat/wheat_PNG44.png" alt="Wheat decorative" className="w-full drop-shadow-xl" />
        </div>

        {/* Floating bread right */}
        <img src="https://pngimg.com/uploads/bread/bread_PNG2272.png" alt="Bread" className="absolute bottom-[10%] -right-12 w-[150px] md:w-[250px] opacity-[0.9] z-20 rotate-12 drop-shadow-2xl hidden lg:block hover:scale-110 transition-transform duration-700" />

        <ScrollReveal className="relative z-10 flex flex-col items-center mb-24 md:mb-40">
          <h2 className="text-4xl md:text-6xl font-medium text-[#c28455] mb-6 tracking-tight">About US</h2>
          <p className="text-[#777777] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            From the harmonious union between a mixes of cereals flours and legumes flours, a new line of tasty specialities rich in fiber and vegetable proteins is born.
          </p>
          <button className="bg-[#333333] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Order Now <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

        {/* The Animated Intersecting Circles Section */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-auto md:aspect-[5/4] mt-12 md:mt-24 pb-12 md:pb-0">

          {/* Animated SVG Lines Background (Desktop Only) */}
          <div className="hidden md:block absolute inset-0 z-0">
            <svg viewBox="0 0 1000 800" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <style>
                {`
                  @keyframes drawArc {
                    to { stroke-dashoffset: 0; }
                  }
                  .animated-arc {
                    stroke-dasharray: 600;
                    stroke-dashoffset: 600;
                    animation: drawArc 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                  }
                  .animated-arc-1 { animation-delay: 0.2s; }
                  .animated-arc-2 { animation-delay: 1.0s; }
                  .animated-arc-3 { animation-delay: 1.8s; }
                  .thin-arc {
                    stroke-dasharray: 4 8;
                  }
                `}
              </style>

              {/* TOP CIRCLE ARC (cx: 500, cy: 250) - 1st to animate */}
              <circle cx="500" cy="250" r="220" stroke="#f0f0f0" strokeWidth="1" className="thin-arc" />
              <circle cx="500" cy="250" r="220" stroke="#333333" strokeWidth="6" strokeLinecap="round" className="animated-arc animated-arc-1" style={{ transformOrigin: "500px 250px", transform: "rotate(-140deg)" }} />

              {/* BOTTOM LEFT CIRCLE ARC (cx: 320, cy: 550) - 3rd to animate (Tasty) */}
              <circle cx="320" cy="550" r="220" stroke="#f0f0f0" strokeWidth="1" className="thin-arc" />
              <circle cx="320" cy="550" r="220" stroke="#333333" strokeWidth="6" strokeLinecap="round" className="animated-arc animated-arc-3" style={{ transformOrigin: "320px 550px", transform: "rotate(90deg)" }} />

              {/* BOTTOM RIGHT CIRCLE ARC (cx: 680, cy: 550) - 2nd to animate (Natural) */}
              <circle cx="680" cy="550" r="220" stroke="#f0f0f0" strokeWidth="1" className="thin-arc" />
              <circle cx="680" cy="550" r="220" stroke="#333333" strokeWidth="6" strokeLinecap="round" className="animated-arc animated-arc-2" style={{ transformOrigin: "680px 550px", transform: "rotate(-20deg)" }} />
            </svg>
          </div>

          <div className="w-full h-full flex flex-col md:block items-center gap-12 md:gap-0 relative z-10 pt-12 md:pt-0">

            {/* 1. FRESH (Top Center) */}
            <ScrollReveal delay={200} className="md:absolute md:top-[31.25%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center w-full md:w-auto z-30">
              <div className="w-[180px] md:w-[260px] relative flex flex-col items-center justify-center">
                <img src="https://pngimg.com/uploads/bread/bread_PNG2275.png" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-20" alt="Fresh Bread Basket" />

                {/* Text Block - RIGHT */}
                <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[135%] flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 relative z-10">
                  <h3 className="text-3xl md:text-2xl font-black text-[#333333] uppercase tracking-[0.15em] drop-shadow-sm whitespace-nowrap">1. Fresh</h3>
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile Arrow Down (1 to 2) */}
            <div className="md:hidden flex justify-center w-full py-4 opacity-40">
              <ArrowDown className="w-10 h-10 text-[#c28455] animate-bounce" />
            </div>

            {/* 2. NATURAL (Bottom Right) */}
            <ScrollReveal delay={1000} direction="left" className="md:absolute md:top-[68.75%] md:left-[68%] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center w-full md:w-auto z-20">
              <div className="w-[180px] md:w-[280px] relative flex flex-col items-center justify-center">
                <img src="https://pngimg.com/uploads/bread/bread_PNG2270.png" className="w-[90%] md:w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-20" alt="Natural Breads" />

                {/* Text block - BELOW */}
                <div className="md:absolute md:top-[180%] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center text-center mt-8 md:mt-0 relative z-10">
                  <h3 className="text-3xl md:text-2xl font-black text-[#333333] uppercase tracking-[0.15em] drop-shadow-sm whitespace-nowrap">2. Natural</h3>
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile Arrow Down (2 to 3) */}
            <div className="md:hidden flex justify-center w-full py-4 opacity-40">
              <ArrowDown className="w-10 h-10 text-[#c28455] animate-bounce" />
            </div>

            {/* 3. TASTY (Bottom Left) */}
            <ScrollReveal delay={1800} direction="right" className="md:absolute md:top-[68.75%] md:left-[32%] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center w-full md:w-auto z-20">
              <div className="w-[180px] md:w-[280px] relative flex flex-col items-center justify-center">
                <img src="https://pngimg.com/uploads/bread/bread_PNG2272.png" className="w-[90%] md:w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-20" alt="Tasty Loaves" />

                {/* Text block - LEFT */}
                <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[135%] flex flex-col items-center md:items-end text-center md:text-right mt-8 md:mt-0 relative z-10">
                  <h3 className="text-3xl md:text-2xl font-black text-[#333333] uppercase tracking-[0.15em] drop-shadow-sm whitespace-nowrap">3. Tasty</h3>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* HOW IT'S MADE SECTION (Dynamic Specialties) */}
      <section id="process" className="py-24 md:py-32 max-w-[90rem] mx-auto px-6 md:px-16 border-t border-slate-100 md:mt-24 relative overflow-hidden">

        {/* Decorative Floating Cookie / Pastry in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 hidden lg:block pointer-events-none">
          <img src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png" alt="Cookie" className="w-[120px] drop-shadow-xl rotate-12 hover:rotate-45 transition-transform duration-1000" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center relative z-10">
          <ScrollReveal direction="right" className="text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-12">
            <h2 className="text-3xl md:text-5xl font-medium text-[#c28455] mb-6 tracking-tight">How it's made?</h2>
            <p className="text-[#777777] text-sm leading-[2] mb-10 max-w-[320px] mx-auto lg:mx-0 font-medium">
              We pride ourselves on using only the finest ingredients. {specialties.join(", ")} and premium grains form the foundation of our artisan baking process.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#333333] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Order Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-20 lg:pr-12">
            {specialties.slice(0, 4).map((spec, i) => {
              const icons = [
                "https://pngimg.com/uploads/flour/flour_PNG17.png",
                "https://pngimg.com/uploads/cereal/cereal_PNG61.png",
                "https://pngimg.com/uploads/oats/oats_PNG25.png",
                "https://pngimg.com/uploads/olive_oil/olive_oil_PNG12.png"
              ];
              return (
                <div key={i} className="flex flex-col items-center text-center group cursor-default">
                  <div className="h-12 md:h-16 mb-5 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                    <img src={icons[i] || icons[0]} alt={spec} className="max-h-full max-w-[60px] md:max-w-[70px] object-contain drop-shadow-md" />
                  </div>
                  <h4 className="font-bold text-[#333333] text-sm md:text-base mb-2">{spec}</h4>
                  <p className="text-[10px] md:text-[11px] text-[#999999] leading-relaxed max-w-[140px]">
                    Carefully sourced for the highest quality baking and perfect taste.
                  </p>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* UNIFIED TEAM CAROUSEL (Animated Mastermind Layout) */}
      <section id="team" className="py-32 relative max-w-[100rem] mx-auto px-6 md:px-16 overflow-hidden bg-white">

        {/* HUGE CENTERED HEADING LIKE "ABOUT US" */}
        <ScrollReveal className="relative z-10 flex flex-col items-center mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-medium text-[#c28455] mb-6 tracking-tight">Our Team</h2>
          <p className="text-[#777777] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Meet the masterminds behind every creation, bringing decades of experience and a masterful touch to our bakery.
          </p>
        </ScrollReveal>

        {/* Background decorative typography */}
        <div className="absolute top-0 right-0 opacity-[0.03] text-[20rem] font-black leading-none pointer-events-none uppercase tracking-tighter">
          Artisan
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-24 items-center relative z-10 lg:h-[600px]">

          {/* Text wrapper - Order 1 on mobile (above image), Order 2 on desktop (right side) */}
          <ScrollReveal delay={200} className="order-1 lg:order-2 lg:col-span-7 pl-0 lg:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left relative w-full h-[250px] md:h-[300px]">
            {teamData.map((member, i) => (
              <div
                key={i}
                className={`absolute top-0 left-0 w-full flex flex-col items-center lg:items-start transition-all duration-1000 ease-in-out ${i === currentTeamIndex ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}
              >
                <h2 className="text-4xl md:text-6xl font-medium text-[#333333] mb-4 tracking-tight">{member.name}</h2>
                <p className="text-[#c28455] text-xs tracking-widest uppercase font-bold mb-6">{member.role}</p>
                <p className="text-[#777777] text-sm md:text-base leading-[2] mb-8 max-w-xl font-medium">
                  {member.experience || "With decades of experience traversing the globe, bringing a masterful touch to every loaf. Combining rustic traditions with modern elegance."}
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Signature_placeholder.svg" alt="Signature" className="h-16 opacity-60 filter grayscale brightness-0" />
              </div>
            ))}
          </ScrollReveal>

          {/* Image wrapper - Order 2 on mobile (below text), Order 1 on desktop (left side) */}
          <ScrollReveal direction="right" className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-end relative w-full aspect-[3/4] lg:aspect-auto lg:h-full mt-8 lg:mt-0">
            {teamData.map((member, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex justify-center lg:justify-end items-start lg:items-center transition-all duration-1000 ease-in-out ${i === currentTeamIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
              >
                {/* Elegant Arch Portrait */}
                <div className="w-[85%] max-w-[400px] h-full lg:h-auto lg:aspect-[3/4] relative rounded-t-full overflow-hidden shadow-2xl border-x-[8px] md:border-x-[12px] border-t-[8px] md:border-t-[12px] border-white bg-slate-100 group">
                  <img src={member.image || "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"} alt={member.name} className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                </div>
              </div>
            ))}

            {/* Overlapping Copper Badge */}
            <div className="absolute -top-12 md:top-auto bottom-auto md:bottom-24 right-0 md:-right-12 bg-[#c28455] text-white p-6 md:p-8 rounded-full aspect-square flex flex-col justify-center items-center shadow-2xl z-20 w-[120px] md:w-[160px] animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text className="text-[12px] tracking-[0.2em] font-bold fill-white">
                  <textPath href="#curve" startOffset="0%">
                    10 YEARS IN FIELD • 10 YEARS IN FIELD •
                  </textPath>
                </text>
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MENU/GALLERY PREVIEW GRID - EDITORIAL DESIGN */}
      <section id="menu" className="py-32 bg-[#faf9f8] relative max-w-[100rem] mx-auto px-6 md:px-16 border-y border-slate-200 mt-24">
        <ScrollReveal className="text-center mb-20">
          <h4 className="text-[#c28455] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Taste The Magic</h4>
          <h2 className="text-4xl md:text-5xl font-medium text-[#333333] tracking-tight">Our Collection</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
          {Array.from({ length: 8 }).map((_, i) => {
            const item = bestSellers[i] || {
              name: ["Artisan Sourdough", "Croissant Aux Amandes", "Rustic Baguette", "Pain Au Chocolat", "Cinnamon Cruffin", "Matcha Mille Crêpe", "Classic Brioche", "Tartine Box"][i],
              description: "A delicate, handcrafted masterpiece baked fresh this morning using century-old techniques.",
              price: ["$12", "$6", "$5", "$6", "$7", "$9", "$8", "$24"][i]
            };
            return (
              <ScrollReveal key={i} delay={(i % 4) * 100} className="group cursor-pointer flex flex-col items-center">
                {/* Image Container with Hover Copper Border Effect */}
                <div className="w-full aspect-[4/5] relative mb-8 overflow-hidden rounded-[40px] md:rounded-[60px] bg-white shadow-xl">
                  <img src={getImg("https://images.unsplash.com/photo-1589367920969-19614cb9fdfa", i)} alt={item.name} className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c28455]/50 rounded-[40px] md:rounded-[60px] transition-colors duration-700 pointer-events-none z-10 m-3"></div>
                </div>

                <div className="w-full text-center px-4">
                  <h3 className="font-bold text-xl text-[#333333] mb-3 group-hover:text-[#c28455] transition-colors">{item.name}</h3>
                  <p className="text-[#888888] text-xs leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-8 bg-[#dddddd]"></div>
                    <p className="text-[#c28455] font-bold tracking-widest">{item.price}</p>
                    <div className="h-[1px] w-8 bg-[#dddddd]"></div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400} className="flex justify-center mt-20">
          <a href="#" className="inline-block border-b-2 border-[#333333] pb-1 text-xs font-bold tracking-widest uppercase hover:border-[#c28455] hover:text-[#c28455] transition-colors">
            View Full Menu
          </a>
        </ScrollReveal>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-[#faf9f8] relative border-t border-slate-200 mt-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-16">
          <ScrollReveal className="relative z-10 flex flex-col items-center mb-16 md:mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-medium text-[#c28455] mb-6 tracking-tight">Contact Us</h2>
            <p className="text-[#777777] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              We would love to hear from you. Drop us a message, give us a call, or visit our bakery.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
            <ScrollReveal delay={200} direction="right" className="bg-white p-8 md:p-12 shadow-xl rounded-[40px] border-4 border-white/50">
              <form className="flex flex-col gap-6">
                <input type="text" placeholder="Your Name" className="border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-[#c28455] bg-transparent transition-colors" />
                <input type="email" placeholder="Your Email" className="border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-[#c28455] bg-transparent transition-colors" />
                <textarea placeholder="Your Message" rows={4} className="border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-[#c28455] bg-transparent transition-colors resize-none"></textarea>
                <button type="button" className="bg-[#333333] text-white py-4 rounded-full font-bold tracking-widest uppercase text-[10px] hover:bg-[#c28455] hover:-translate-y-1 hover:shadow-xl transition-all mt-4 w-fit px-12">Send Message</button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="left" className="flex flex-col justify-center gap-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#c28455] transition-colors">
                  <MapPin className="w-5 h-5 text-[#c28455] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 uppercase tracking-widest text-[11px]">Visit Our Bakery</h3>
                  <p className="text-[#777777] leading-relaxed text-sm">{bakery.address || "123 Artisan Way, Luxury District, NY 10001"}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#c28455] transition-colors">
                  <Phone className="w-5 h-5 text-[#c28455] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 uppercase tracking-widest text-[11px]">Call Us</h3>
                  <p className="text-[#777777] leading-relaxed text-sm">{bakery.phone || "+1 234 567 890"}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#c28455] transition-colors">
                  <Mail className="w-5 h-5 text-[#c28455] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 uppercase tracking-widest text-[11px]">Email Us</h3>
                  <p className="text-[#777777] leading-relaxed text-sm">{bakery.email || "hello@artisanbakery.com"}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ULTRA-PREMIUM FOOTER */}
      <footer id="contact" className="bg-[#111111] text-white pt-32 pb-12 px-6 md:px-16 border-t-[8px] border-[#c28455] relative overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-black text-white/5 uppercase select-none pointer-events-none">
          {bakery.name?.substring(0, 3) || "BKR"}
        </div>

        <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 mb-24">

          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">{bakery.name || "Bakery"}</h2>
            <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-medium mb-10">
              {bakery.about || "Elevating the art of baking. Handcrafted pastries, artisanal breads, and bespoke cakes baked fresh daily using traditional methods."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#c28455] transition-colors group"><Facebook className="w-5 h-5 text-[#888888] group-hover:text-white" /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#c28455] transition-colors group"><Instagram className="w-5 h-5 text-[#888888] group-hover:text-white" /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#c28455] transition-colors group"><Twitter className="w-5 h-5 text-[#888888] group-hover:text-white" /></a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-center lg:text-left">
            <div>
              <h4 className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Navigation</h4>
              <ul className="space-y-5 text-sm text-[#cccccc]">
                <li><a href="#about" className="hover:text-white transition-colors relative group">Our Story<span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#c28455] transition-all group-hover:w-full"></span></a></li>
                <li><a href="#menu" className="hover:text-white transition-colors relative group">Collection<span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#c28455] transition-all group-hover:w-full"></span></a></li>
                <li><a href="#process" className="hover:text-white transition-colors relative group">Process<span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#c28455] transition-all group-hover:w-full"></span></a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Visit Us</h4>
              <ul className="space-y-6 text-sm text-[#cccccc]">
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <MapPin className="w-4 h-4 shrink-0 text-[#c28455] mt-1 hidden lg:block" />
                  <span className="leading-relaxed">{bakery.address || "123 Artisan Way, Luxury District, NY 10001"}</span>
                </li>
                <li className="flex flex-col lg:flex-row items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-[#c28455] hidden lg:block" />
                  <a href={`tel:${bakery.phone}`} className="hover:text-white transition-colors">{bakery.phone || "+1 234 567 890"}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Newsletter</h4>
            <p className="text-[#888888] text-xs leading-relaxed mb-6">Subscribe to receive updates on new seasonal menus and special offers.</p>
            <div className="relative w-full max-w-[300px] mx-auto lg:mx-0">
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="w-full bg-[#1a1a1a] border border-[#333333] text-white text-[10px] tracking-widest uppercase px-6 py-4 rounded-full focus:outline-none focus:border-[#c28455] transition-colors" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#c28455] rounded-full flex items-center justify-center hover:bg-white hover:text-[#c28455] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-[100rem] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-[#666666] text-center md:text-left relative z-10">
          <p>© {new Date().getFullYear()} {bakery.name || "Bakery"}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};
export default BakeryTemplate2;
