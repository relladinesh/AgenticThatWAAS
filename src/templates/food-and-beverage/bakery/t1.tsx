
import { TemplateProps, BakeryData } from "@/types";
import { useState, useEffect, useRef, ReactNode } from "react";
import { Search, User, ShoppingCart, ChevronRight, Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Menu, X } from "lucide-react";

// Custom ScrollReveal Hook
const ScrollReveal = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => {
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Reusable Product Grid Component
const ProductGrid = ({ title, preHeader, items, showViewAll = false }: { title: string, preHeader: string, items: any[], showViewAll?: boolean }) => (
  <section className="py-16 max-w-[90rem] mx-auto px-6 md:px-12 border-b border-slate-100">
    <ScrollReveal>
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-3">{preHeader}</span>
        <h2 className="text-3xl md:text-4xl font-serif italic font-normal text-[#4a3f35] tracking-wide">{title}</h2>
        <div className="w-8 h-[1px] bg-[#c28455]/40 mt-4"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {items.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-slate-100 shadow-sm relative">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-110 group-hover:brightness-100 transition-all duration-700" />
            </div>
            <h3 className="font-bold text-sm mb-1 truncate text-[#4a3f35]">{item.name}</h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
              <span className="font-bold text-xs text-[#6b5c4f]">{item.price}</span>
              <div className="flex gap-[1px]">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-3 h-3 ${idx < item.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export default function BakeryTemplate1({ data }: TemplateProps) {
  const bakery = data as BakeryData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroImage, setHeroImage] = useState(bakery.image || "https://pngimg.com/uploads/bread/bread_PNG2275.png");

  useEffect(() => {
    if (bakery.image) {
      setHeroImage(bakery.image);
    } else {
      const HERO_PNGS = [
        "https://pngimg.com/uploads/bread/bread_PNG2275.png",
        "https://pngimg.com/uploads/croissant/croissant_PNG21.png",
        "https://pngimg.com/uploads/bread/bread_PNG2272.png",
        "https://www.pngmart.com/files/16/Bread-Basket-PNG-Transparent-Image.png"
      ];
      let seed = bakery.name ? bakery.name.charCodeAt(0) : 1;
      setHeroImage(HERO_PNGS[seed % HERO_PNGS.length]);
    }
  }, [bakery.name, bakery.image]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [dynamicImages, setDynamicImages] = useState<string[]>([]);
  useEffect(() => {
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
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&q=80",
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80",
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&q=80",
      "https://images.unsplash.com/photo-1601000938259-9e92002320b2?w=800&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
      "https://images.unsplash.com/photo-1586985289906-406988974504?w=800&q=80"
    ];

    let seed = bakery.name ? bakery.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    setDynamicImages(pool.sort(() => 0.5 - seededRandom()));
  }, [bakery.name]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;


  const breadImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80";
  const cakeImage = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80";
  const brownieImage = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80";

  const MOST_LOVED = [
    { name: "Choco cupcake", price: "10$ (500gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&q=80", 0) },
    { name: "Choco Doughnut", price: "4$ (1ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1551024506-0cb4a1cb1cdd?w=400&q=80", 1) },
    { name: "White Bread", price: "6$ (300gm)", rating: 5, img: getImg(breadImage, 2) },
    { name: "Cheese Cake", price: "24$ (500gm)", rating: 4, img: getImg(cakeImage, 3) },
    { name: "Chip Cookies", price: "2$ (1ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80", 4) },
  ];

  const BREADS = [
    { name: "Whole wheat", price: "4$ (500gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1589367920969-19614cb9fdfa?w=400&q=80", 5) },
    { name: "Sour Dough", price: "5$ (1ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80", 6) },
    { name: "Nuts and choco", price: "8$ (300gm)", rating: 4, img: getImg("https://images.unsplash.com/photo-1601000938259-9e92002320b2?w=400&q=80", 7) },
    { name: "Baguette", price: "3$ (1ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=400&q=80", 8) },
    { name: "White Bread", price: "2$ (400gm)", rating: 5, img: getImg(breadImage, 9) },
  ];

  const CAKES = [
    { name: "Chocolate overload", price: "20$ (700gm)", rating: 5, img: getImg(cakeImage, 10) },
    { name: "Rainbow cake", price: "18$ (700gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80", 11) },
    { name: "Choco lava cake", price: "15$ (500gm)", rating: 4, img: getImg("https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80", 12) },
    { name: "Swiss roll", price: "10$ (300gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1586985289906-406988974504?w=400&q=80", 13) },
    { name: "Custom cakes", price: "30$+ (1000gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80", 14) },
  ];

  const BROWNIES = [
    { name: "Choco sizzle", price: "12$ (400gm)", rating: 5, img: getImg(brownieImage, 15) },
    { name: "Vanilla top", price: "10$ (2ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=400&q=80", 16) },
    { name: "Almond brownie", price: "14$ (500gm)", rating: 4, img: getImg("https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80", 17) },
    { name: "Raspberry", price: "15$ (500gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=400&q=80", 18) },
    { name: "Berries delight", price: "18$ (500gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1605807646983-377bc5a7644e?w=400&q=80", 19) },
  ];

  const MIXED_GRID = [
    { name: "Macarons", price: "1$ (1ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80", 20) },
    { name: "Whole wheat", price: "14$ (500gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1589367920969-19614cb9fdfa?w=400&q=80", 21) },
    { name: "Apple Pie", price: "16$ (500gm)", rating: 4, img: getImg("https://images.unsplash.com/photo-1562007908-17c67e878c88?w=400&q=80", 22) },
    { name: "Gingerbread", price: "1$ (2ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1512353087810-254cb3617011?w=400&q=80", 23) },
    { name: "Chocolate Truffle", price: "20$ (500gm)", rating: 5, img: getImg("https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400&q=80", 24) },
    { name: "Chocolate Cookies", price: "2$ (1ps)", rating: 5, img: getImg("https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80", 25) },
    { name: "Resin Muffins", price: "3$ (1ps)", rating: 4, img: getImg("https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&q=80", 26) },
    { name: "Specials", price: "get quote", rating: 5, img: getImg("https://images.unsplash.com/photo-1549903072-7e6e0d65bd0f?w=400&q=80", 27) },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#4a3f35] selection:bg-[#eaddca] overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight text-[#4a3f35]">{bakery.name || "Cravory"}</div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a href="#home" className="hover:text-amber-700 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">About Us</a>
            <a href="#collections" className="hover:text-amber-700 transition-colors">Collections</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Contact Us</a>
          </nav>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="md:hidden hover:text-amber-700 transition-colors p-2"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex flex-col justify-between p-8 md:p-12`}
        style={{ backgroundColor: '#231b15' }}
      >
        {/* Top Header inside Menu */}
        <div className="flex justify-between items-center z-10 w-full">
          <div className="text-lg font-serif italic text-[#c28455] tracking-wide">
            {bakery.name || "Cravory"}
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
            { num: "I", label: "Home", href: "#home", desc: "the start of flavor" },
            { num: "II", label: "About Us", href: "#about", desc: "our baking philosophy & heritage" },
            { num: "III", label: "Collections", href: "#collections", desc: "explore our crafted bakes" },
            { num: "IV", label: "Contact Us", href: "#contact", desc: "find our kitchen & reach out" },
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
      <section id="home" className="relative pt-32 pb-48 md:pt-40 md:pb-64 bg-[#eaddca]">
        {/* Exact Asymmetrical Bottom Curve matching the design */}
        <svg viewBox="0 0 1440 300" className="absolute bottom-0 left-0 w-full h-auto min-h-[150px] z-0 pointer-events-none" preserveAspectRatio="none">
           <path fill="#ffffff" d="M0,100 C500,300 900,300 1440,0 L1440,300 L0,300 Z" />
        </svg>

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <ScrollReveal delay={100} className="relative z-20">
            <h1 className="text-5xl md:text-7xl font-black text-[#4a3f35] leading-[1.1] mb-6 tracking-tight">
              Freshly Baked Delights, <br /> Every Day
            </h1>
            <p className="text-[#6b5c4f] font-medium leading-relaxed max-w-lg mb-10 text-lg">
              Discover the magic of freshly baked goodness. Handcrafted with love and the finest ingredients. Delight in every bite, every day.
            </p>
            <div className="flex flex-wrap items-center gap-8 font-bold">
              <a 
                href="#collections" 
                className="md:hidden bg-[#5a4d42] text-white px-8 py-4 rounded-full hover:bg-[#3d332c] hover:shadow-xl transition-all text-center inline-block w-full max-w-[280px]"
              >
                Browse Collections
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="relative h-[400px] md:h-[600px] flex items-center justify-center -translate-y-10">
            {/* The exact aesthetic flat blob shapes behind bread */}
            <svg viewBox="0 0 200 200" className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-90">
              <path fill="#fceceb" d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.2,-40.8C85.3,-26.3,91.3,-11.3,88.9,2.6C86.5,16.5,75.7,29.3,65.2,40.9C54.7,52.5,44.5,62.9,31.7,71.2C18.9,79.5,3.5,85.7,-11.1,84.6C-25.7,83.5,-39.5,75.1,-52.1,64.4C-64.7,53.7,-76.1,40.7,-81.9,25.3C-87.7,9.9,-87.9,-7.9,-81.5,-23.1C-75.1,-38.3,-62.1,-50.9,-47.9,-57.5C-33.7,-64.1,-18.3,-64.7,-1.8,-61.7C14.7,-58.7,29.4,-52.1,45.7,-76.3Z" transform="translate(100 100) scale(1.1)" />
              <path fill="#eae6e5" d="M38.1,-63.9C51.3,-55.5,65.3,-47.5,74.1,-34.5C82.9,-21.5,86.5,-3.5,82.8,12.8C79.1,29.1,68.1,43.7,54.8,54.3C41.5,64.9,25.9,71.5,9.6,73.6C-6.7,75.7,-23.7,73.3,-38.1,64.8C-52.5,56.3,-64.3,41.7,-71.4,25.2C-78.5,8.7,-80.9,-9.7,-75.4,-25.2C-69.9,-40.7,-56.5,-53.3,-41.8,-61.1C-27.1,-68.9,-11.1,-71.9,1.8,-74.4C14.7,-76.9,29.4,-78.9,38.1,-63.9Z" transform="translate(90 110) scale(0.9)" />
            </svg>
            <img 
              src={heroImage} 
              alt="Bread Basket" 
              className="relative z-10 w-[95%] max-w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://pngimg.com/uploads/bread/bread_PNG2275.png"; }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCT SECTIONS */}
      <ProductGrid title="Most Loved" preHeader="Customer Favorites" items={MOST_LOVED} />
      <ProductGrid title="Breads" preHeader="Freshly Baked" items={BREADS} />

      {/* DAILY DOUGH (Newsletter/Promo) */}
      <section className="py-16 my-16 bg-[#e6d5c3] relative max-w-[90rem] mx-auto px-6 md:px-12 rounded-lg">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 relative z-10">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-black mb-4">Daily Dough</h2>
            <p className="text-xs font-medium text-[#6b5c4f] mb-6 leading-relaxed max-w-xs">
              Subscribe to experience the convenience of freshly baked goods delivered right to your doorstep every day.
            </p>
            <a href="#" className="text-[10px] font-bold underline underline-offset-4 uppercase tracking-wider text-[#6b5c4f]">search area</a>
          </div>
          <div className="md:col-span-1 flex justify-center lg:justify-start">
            <div className="flex w-full max-w-sm bg-white rounded-full overflow-hidden shadow-sm p-1">
              <input type="email" placeholder="email id here" className="w-full px-4 text-xs outline-none bg-transparent" />
              <button className="bg-[#5a4d42] text-white px-6 py-3 text-xs font-bold rounded-full whitespace-nowrap hover:bg-[#3d332c] transition-colors">Subscribe</button>
            </div>
          </div>
          <div className="md:col-span-1 relative h-full hidden md:block">
            {/* Floating Bakery Box */}
            <img src="https://pngimg.com/uploads/box/box_PNG58.png" alt="Bakery Box" className="absolute -top-32 right-12 w-[220px] drop-shadow-2xl hover:translate-y-2 transition-transform duration-500" />
          </div>
        </ScrollReveal>
      </section>

      {/* MORE PRODUCTS */}
      <ProductGrid title="Cakes" preHeader="Sweet Masterpieces" items={CAKES} showViewAll />
      <ProductGrid title="Brownies" preHeader="Decadent Treats" items={BROWNIES} showViewAll />

      {/* INFO BLOCKS (Baked Fresh / See Magic) */}
      <section id="about" className="py-24 max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col gap-24">
        <ScrollReveal className="text-center mb-8">
          <span className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-serif italic font-normal text-[#4a3f35] tracking-wide">About the Bakery</h2>
          <div className="w-8 h-[1px] bg-[#c28455]/40 mx-auto mt-4"></div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="pr-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-[#4a3f35]">Baked Fresh For You, <br/> Straight From The Oven</h2>
            <p className="text-[#6b5c4f] font-medium text-sm leading-relaxed mb-8">
              Start your morning or your special day, each bite is a testament to our commitment to quality and flavor. With every order, experience the joy of indulging in freshly baked treats that elevate comforting moments to celebratory feasts.
            </p>
            <a href="#" className="text-xs font-bold underline underline-offset-4 uppercase text-[#6b5c4f] hover:text-amber-700">read more</a>
          </div>
          <div className="h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1556206079-a71af51db8f8?w=800&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Baking fresh" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Magic happen" />
          </div>
          <div className="pl-0 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-[#4a3f35]">See Magic Happen, Right <br/> Here In Our Bakery</h2>
            <p className="text-[#6b5c4f] font-medium text-sm leading-relaxed mb-8">
              Step into our bakery and be captivated by the enchanting sight of our talented bakers in action. From the careful mixing of ingredients to the precise artistry of decorating, inviting you to witness the creation of our delectable delights right before your eyes.
            </p>
            <a href="#" className="text-xs font-bold underline underline-offset-4 uppercase text-[#6b5c4f] hover:text-amber-700">read more</a>
          </div>
        </ScrollReveal>
      </section>

      {/* 8 ITEM GRID (Bottom) */}
      <section id="collections" className="py-24 max-w-[90rem] mx-auto px-6 md:px-12 mb-16 border-b border-slate-100">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">Bespoke Recipes</span>
            <h2 className="text-3xl md:text-4xl font-serif italic font-normal text-[#4a3f35] tracking-wide">Our Collections</h2>
            <div className="w-8 h-[1px] bg-[#c28455]/40 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {MIXED_GRID.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-slate-100 shadow-sm relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-110 group-hover:brightness-100 transition-all duration-700" />
                </div>
                <h3 className="font-bold text-sm mb-1 truncate text-[#4a3f35]">{item.name}</h3>
                <div className="flex justify-between items-center gap-1">
                  <span className="font-bold text-xs text-[#6b5c4f]">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* TESTIMONIAL BLOCK - PREMIUM EDITORIAL DESIGN */}
      <section className="w-full bg-[#FAF6F0] py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-slate-100">
        {/* Subtle floral watermark in feedback */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="#c28455" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <path d="M50 10 L50 90 M10 50 L90 50" />
          </svg>
        </div>
        
        <ScrollReveal className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          {/* Elegant Section Header */}
          <span className="text-[#c28455] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Guest Reviews</span>
          
          {/* Star Rating */}
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#c28455] fill-[#c28455]" />
            ))}
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#c28455]/15 shadow-xl max-w-2xl">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#5a4d42] flex items-center justify-center text-white font-serif text-3xl shadow-lg leading-none">“</span>
            
            <p className="text-xl md:text-2xl font-serif italic font-normal leading-relaxed text-[#4a3f35] mb-8 mt-4">
              the eggless cakes here are really good. <br className="hidden md:block" />
              Had ordered a kit kat cake which was <br className="hidden md:block" />
              really good. Surely worth a try.
            </p>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full p-1 border border-[#c28455] mb-4 shadow-md bg-white">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" className="w-full h-full rounded-full object-cover" alt="Jerry Wilson" />
              </div>
              <h4 className="font-bold text-sm text-[#4a3f35] tracking-wide">Jerry Wilson</h4>
              <span className="text-[10px] text-[#c28455] uppercase tracking-widest font-bold mt-1">Local Shopper</span>
            </div>
          </div>

          {/* Premium Dots Indicator */}
          <div className="flex gap-2.5 mt-10">
            <div className="w-2 h-2 rounded-full bg-[#5a4d42] scale-110 transition-transform duration-300"></div>
            <div className="w-2 h-2 rounded-full bg-[#5a4d42]/20"></div>
            <div className="w-2 h-2 rounded-full bg-[#5a4d42]/20"></div>
          </div>
        </ScrollReveal>
      </section>

      {/* CONTACT US SECTION */}
      <section id="contact" className="py-24 max-w-[90rem] mx-auto px-6 md:px-12 border-t border-slate-100 bg-white">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#c28455] text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-serif italic font-normal text-[#4a3f35] tracking-wide">Contact Us</h2>
          <div className="w-8 h-[1px] bg-[#c28455]/40 mx-auto mt-4"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Contact Information */}
          <ScrollReveal delay={100} className="lg:col-span-5 flex flex-col justify-between bg-[#FAF6F0] p-10 md:p-12 rounded-[2rem] border border-[#c28455]/10">
            <div>
              <h3 className="text-2xl font-serif italic text-[#4a3f35] mb-6">Come Visit Our Kitchen</h3>
              <p className="text-[#6b5c4f] text-sm leading-relaxed mb-8">
                There is nothing like the smell of fresh dough and sweet spices. Drop by our shop, or reach out to place a bespoke order for your special occasion.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a4d42]/10 flex items-center justify-center text-[#5a4d42] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#5a4d42] mb-1">Our Bakery</h4>
                    <p className="text-sm text-[#6b5c4f]">{bakery.address || "123 Baker Street, London"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a4d42]/10 flex items-center justify-center text-[#5a4d42] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#5a4d42] mb-1">Call Us</h4>
                    <p className="text-sm text-[#6b5c4f]">{bakery.phone || "+44 20 7946 0958"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a4d42]/10 flex items-center justify-center text-[#5a4d42] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#5a4d42] mb-1">Email Us</h4>
                    <p className="text-sm text-[#6b5c4f]">hello@{bakery.name?.replace(/\s+/g, '').toLowerCase() || 'cravory'}.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#c28455]/20">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#5a4d42] mb-3">Kitchen Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-[#6b5c4f]">
                <div>
                  <span className="block font-medium">Monday - Friday</span>
                  <span className="text-xs opacity-80">7:00 AM - 7:00 PM</span>
                </div>
                <div>
                  <span className="block font-medium">Saturday - Sunday</span>
                  <span className="text-xs opacity-80">8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200} className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#c28455]/10 rounded-[2rem] shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-serif italic text-[#4a3f35] mb-8">Send Us A Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-[#5a4d42]">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="w-full px-5 py-3.5 bg-[#FAF6F0] rounded-xl border border-transparent outline-none focus:border-[#c28455]/30 focus:bg-white transition-all text-sm text-[#4a3f35]"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-[#5a4d42]">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    className="w-full px-5 py-3.5 bg-[#FAF6F0] rounded-xl border border-transparent outline-none focus:border-[#c28455]/30 focus:bg-white transition-all text-sm text-[#4a3f35]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-[#5a4d42]">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Bespoke orders, catering, feedback..." 
                  className="w-full px-5 py-3.5 bg-[#FAF6F0] rounded-xl border border-transparent outline-none focus:border-[#c28455]/30 focus:bg-white transition-all text-sm text-[#4a3f35]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-[#5a4d42]">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-5 py-3.5 bg-[#FAF6F0] rounded-xl border border-transparent outline-none focus:border-[#c28455]/30 focus:bg-white transition-all text-sm text-[#4a3f35] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#5a4d42] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#3d332c] hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* DARK BROWN FOOTER */}
      <footer className="w-full bg-[#5a4d42] text-white pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & About (Spans 4 cols) */}
          <div className="md:col-span-4">
            <div className="text-2xl font-black text-white mb-6 tracking-tight">{bakery.name || "Cravory"}</div>
            <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-sm">
              Discover the magic of freshly baked goodness. Handcrafted with love and the finest ingredients. Delight in every bite, every day. Taste the artisan difference.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-amber-300 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-300 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-300 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Contact (Spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-white/50">Reach Us</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/50" /> 
                <span>{bakery.address || "California, US"}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-white/50" /> 
                <span>{bakery.phone || "+1 234 567 890"}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-white/50" /> 
                <span>hello@{bakery.name?.replace(/\s+/g, '').toLowerCase() || 'cravory'}.com</span>
              </li>
            </ul>
          </div>

          {/* Links (Spans 2 cols) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-white/50">Links</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#collections" className="hover:text-amber-300 transition-colors">Collections</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter (Spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-white/50">Stay Updated</h4>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">Join our mailing list to get the latest updates on fresh batches and special discounts.</p>
            <div className="flex w-full bg-white/10 rounded-full overflow-hidden border border-white/20 p-1">
              <input type="email" placeholder="Enter your email" className="w-full px-4 text-xs outline-none bg-transparent text-white placeholder-white/50" />
              <button className="bg-white text-[#5a4d42] px-6 py-2 text-xs font-bold rounded-full whitespace-nowrap hover:bg-amber-100 transition-colors">Subscribe</button>
            </div>
          </div>

        </div>

        <div className="max-w-[90rem] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {bakery.name || "Cravory"}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
