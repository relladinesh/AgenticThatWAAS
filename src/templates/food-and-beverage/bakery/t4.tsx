
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Croissant, Cake, Coffee, Wheat, Star, MapPin, Phone, Mail,
  Clock, ArrowRight, CheckCircle2, ChevronDown, MessageCircle, 
  Instagram, Facebook, Send, ShoppingBag, Heart
} from "lucide-react";

export default function BakeryTemplate4({ data }: { data: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const safeName = data.name || "Crustique Bakery";
  const whatsappNumber = data.phone?.replace(/\D/g, '') || "1234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello ${safeName}, I would like to place an order!`)}`;

  const PRODUCTS = [
    { name: "Artisan Breads", desc: "Sourdough, Rye, & Baguettes", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=800&auto=format&fit=crop" },
    { name: "Flaky Pastries", desc: "Croissants & Danishes", image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=800&auto=format&fit=crop" },
    { name: "Signature Cakes", desc: "Custom cakes for all occasions", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" },
    { name: "Cookies & Muffins", desc: "Freshly baked daily", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop" },
  ];

  const WHY_US = [
    { icon: Wheat, title: "Chef's Touch", desc: "Family Recipes" },
    { icon: Clock, title: "Baked Fresh Daily", desc: "Perfect Texture" },
    { icon: Heart, title: "Premium Ingredients", desc: "Quality You Taste" },
    { icon: ShoppingBag, title: "Seamless Ordering", desc: "Fast Delivery" },
  ];

  const TESTIMONIALS = [
    { text: "The sourdough bread here is exactly like what I had in Paris. Absolutely incredible crust and perfectly chewy inside.", author: "Emma S." },
    { text: "Ordered a custom cake for my daughter's birthday and it was a masterpiece. Tasted even better than it looked!", author: "David L." },
    { text: "Their morning croissants and a hot coffee are the only way I start my weekends now. Best bakery in town.", author: "Sophia R." },
  ];

  const PRICING = [
    { title: "Daily Bread Box", price: "$24", period: "Weekly", desc: "A fresh selection of 3 artisan loaves delivered to your door every week." },
    { title: "Pastry Assortment", price: "$35", period: "Per Box", desc: "A baker's dozen of our finest sweet and savory morning pastries." },
    { title: "Custom Celebration Cake", price: "$65+", period: "Starting At", desc: "Fully customizable layered cakes for birthdays, weddings, and events." }
  ];

  const FAQS = [
    { q: "Do you offer gluten-free options?", a: "Yes, we have a dedicated selection of gluten-free breads, cookies, and cakes baked in a separate area to prevent cross-contamination." },
    { q: "How far in advance should I order a custom cake?", a: "We recommend placing custom cake orders at least 72 hours in advance. For wedding cakes, please contact us 3-4 weeks prior." },
    { q: "Do you deliver?", a: "Yes! We offer local delivery within a 10-mile radius for orders over $30. Delivery fees may apply based on distance." },
    { q: "What are your most popular items?", a: "Our classic butter croissants and rustic sourdough boules sell out almost every morning!" }
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans text-[#2d1a11] selection:bg-[#d8ba8e] selection:text-[#2d1a11] overflow-x-hidden">
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-16 bg-white text-[#2d1a11] px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap pointer-events-none">
          Order via WhatsApp
        </span>
      </a>

      {/* --- PREMIUM NAVIGATION --- */}
      <div className="fixed w-full z-50 top-0 left-0 flex justify-center px-4 sm:px-6 transition-all duration-500 pt-4 pointer-events-none">
        <nav className={`w-full pointer-events-auto transition-all duration-500 ${isScrolled ? 'max-w-5xl bg-[#3b1d14]/80 backdrop-blur-xl border border-[#d8ba8e]/20 shadow-[0_10px_40px_rgba(59,29,20,0.5)] rounded-full py-3 px-8' : 'max-w-7xl bg-transparent border-transparent py-4 px-2'}`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-serif font-black text-[#d8ba8e] tracking-widest uppercase">{safeName}</h1>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`relative text-[#f8f5f0] text-xs font-bold uppercase tracking-[0.2em] group overflow-hidden py-1 transition-colors ${activeSection === item.toLowerCase() ? 'text-[#d8ba8e]' : ''}`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#d8ba8e] transition-all duration-300 opacity-80 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a href="#contact" className="relative overflow-hidden group bg-transparent border border-[#d8ba8e] text-[#d8ba8e] px-8 py-2.5 rounded-full uppercase text-xs font-bold tracking-widest hover:text-[#3b1d14] transition-all shadow-[0_0_15px_rgba(216,186,142,0.1)]">
                <span className="relative z-10 transition-colors duration-300">Order Online</span>
                <div className="absolute inset-0 bg-[#d8ba8e] transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left z-0"></div>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#d8ba8e] hover:scale-110 transition-transform p-2">
              {isMobileMenuOpen ? <ChevronDown className="w-6 h-6" /> : <div className="w-6 h-6 flex flex-col justify-center gap-1.5"><span className="block w-full h-0.5 bg-current"></span><span className="block w-full h-0.5 bg-current"></span><span className="block w-full h-0.5 bg-current"></span></div>}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-[#3b1d14] z-30 pt-24 px-6 flex flex-col gap-6 text-[#d8ba8e] text-xl font-serif">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-40 lg:pt-48 lg:pb-56">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={data.image || "/bakery-hero.jpg"} 
            alt="Bakery Hero" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b1d14]/80 via-[#3b1d14]/40 to-[#3b1d14]/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl lg:text-[7rem] font-serif font-black text-[#d8ba8e] leading-[1.1] mb-8 tracking-wide drop-shadow-2xl"
          >
            Warm, Fluffy, <br /> Delicious
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[#f8f5f0] text-lg sm:text-xl font-medium max-w-2xl mb-12 opacity-90 leading-relaxed drop-shadow-lg"
          >
            Welcome to {safeName}, where every bite is crafted with love and the finest ingredients. Freshly baked for you.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <a href="#menu" className="inline-block bg-[#d8ba8e] text-[#3b1d14] px-10 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_40px_rgba(216,186,142,0.4)]">
              Order Now
            </a>
          </motion.div>
        </div>

        {/* Torn Paper Divider SVG */}
        <div className="absolute -bottom-1 left-0 w-full leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[100px]" fill="#f8f5f0">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.68,23.11,105.77,41.94,161.7,51.87,215.11,61.42,269.83,63.46,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* --- 2. ABOUT US --- */}
      <section id="about" className="py-24 relative bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Images */}
            <div className="relative">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative z-10 border-8 border-white shadow-2xl rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556206079-747a7a424d3d?q=80&w=800&auto=format&fit=crop" alt="Baker" className="w-full h-[500px] object-cover" />
              </motion.div>
              {/* Decorative flour dust / coffee beans simulated */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2Q4YmE4ZSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-60"></div>
            </div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:pl-8">
              <h2 className="text-4xl sm:text-5xl font-serif font-black text-[#2d1a11] mb-8 leading-[1.2]">
                We Deliver <br className="hidden sm:block"/> Happiness right <br className="hidden sm:block"/> on your Table!
              </h2>
              <p className="text-[#5c4a42] text-lg font-medium leading-relaxed mb-6">
                Welcome to {safeName}, where every bite is crafted with love and the finest ingredients. From warm, flaky pastries to freshly baked breads and indulgent sweets, we bring you the taste of home in every treat.
              </p>
              <p className="text-[#5c4a42] text-lg font-medium leading-relaxed mb-10">
                {data.about || "Come savor the goodness—baked fresh, just for you! Our artisans wake up before the sun to ensure that every loaf and pastry meets our exacting standards of quality and flavor."}
              </p>
              <a href="#menu" className="inline-flex items-center gap-2 text-[#8c5738] font-bold uppercase tracking-wider text-sm hover:text-[#3b1d14] transition-colors border-b-2 border-[#8c5738] pb-1">
                Discover Our Menu <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED PRODUCTS (MENU) --- */}
      <section id="menu" className="py-24 bg-white relative">
        {/* Decorative SVG */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
          <Wheat className="w-full h-full text-[#3b1d14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#8c5738] font-bold uppercase tracking-widest text-sm mb-2 block">Our Specialties</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#2d1a11]">Artisanal Breads & Sweets</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PRODUCTS.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer flex flex-col items-center text-center">
                <div className="relative w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden p-2 border border-[#d8ba8e]/30 shadow-[0_10px_30px_rgba(59,29,20,0.05)] group-hover:shadow-[0_20px_40px_rgba(216,186,142,0.2)] transition-all duration-500 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-[#3b1d14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-black text-[#2d1a11] mb-2 group-hover:text-[#8c5738] transition-colors">{product.name}</h3>
                <p className="text-[#5c4a42] text-sm font-medium tracking-wide uppercase">{product.desc}</p>
                <div className="mt-4 w-12 h-0.5 bg-[#d8ba8e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#contact" className="inline-block border border-[#2d1a11] text-[#2d1a11] px-8 py-3 rounded uppercase text-xs font-bold tracking-widest hover:bg-[#2d1a11] hover:text-[#f8f5f0] transition-colors">
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US (The Crustique Experience) --- */}
      <section className="py-24 bg-[#e3d2b2] relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b1d14_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#2d1a11]">The {safeName} Experience</h2>
            <p className="text-[#5c4a42] mt-4 font-medium text-lg">Artisanal Excellence in Every Bite</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#f8f5f0] rounded-xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#d8ba8e]/30">
                <div className="w-16 h-16 mx-auto bg-[#3b1d14] text-[#d8ba8e] rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#2d1a11] mb-2">{item.title}</h3>
                <p className="text-[#8c5738] text-sm font-semibold uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. GALLERY --- */}
      <section id="gallery" className="py-24 bg-[#f8f5f0] relative">
        {/* Top torn paper divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 transform -translate-y-[1px] rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px]" fill="#e3d2b2">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.68,23.11,105.77,41.94,161.7,51.87,215.11,61.42,269.83,63.46,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#2d1a11] mb-4">Where Baking Feels Like Home</h2>
            <p className="text-[#5c4a42] font-medium">"Where Memories are Baked and Shared."</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col-span-2 row-span-2 h-[400px]">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" alt="Bakery Display" className="w-full h-full object-cover rounded-lg shadow-md" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-[192px]">
              <img src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=400&auto=format&fit=crop" alt="Baking Process" className="w-full h-full object-cover rounded-lg shadow-md" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-[192px]">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop" alt="Pastries" className="w-full h-full object-cover rounded-lg shadow-md" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="h-[192px]">
              <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=400&auto=format&fit=crop" alt="Coffee and Cake" className="w-full h-full object-cover rounded-lg shadow-md" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="h-[192px]">
              <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=400&auto=format&fit=crop" alt="Baker Smiling" className="w-full h-full object-cover rounded-lg shadow-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#2d1a11]">Loved by Locals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#f8f5f0] p-8 rounded-2xl relative border border-[#e3d2b2]">
                <div className="text-[#d8ba8e] mb-6">
                  <Star className="w-6 h-6 fill-current inline-block" />
                  <Star className="w-6 h-6 fill-current inline-block" />
                  <Star className="w-6 h-6 fill-current inline-block" />
                  <Star className="w-6 h-6 fill-current inline-block" />
                  <Star className="w-6 h-6 fill-current inline-block" />
                </div>
                <p className="text-[#5c4a42] font-medium leading-relaxed mb-6 italic">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#3b1d14] rounded-full flex items-center justify-center text-[#d8ba8e] font-bold font-serif">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d1a11]">{test.author}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. PRICING & CUSTOM ORDERS --- */}
      <section className="py-24 bg-[#e3d2b2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#2d1a11]">Special Packages</h2>
            <p className="text-[#5c4a42] mt-4 font-medium text-lg">Perfect for events or daily indulgence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 border ${i === 1 ? 'border-[#3b1d14] shadow-2xl scale-105 z-10 relative' : 'border-transparent shadow-lg'} text-center`}>
                <h3 className="text-2xl font-serif font-bold text-[#2d1a11] mb-2">{plan.title}</h3>
                <div className="my-6">
                  <span className="text-5xl font-black text-[#8c5738]">{plan.price}</span>
                  <span className="text-[#5c4a42] text-sm uppercase tracking-wider block mt-1">{plan.period}</span>
                </div>
                <p className="text-[#5c4a42] mb-8 font-medium">{plan.desc}</p>
                <button className={`w-full py-3 rounded uppercase text-sm font-bold tracking-widest transition-colors ${i === 1 ? 'bg-[#3b1d14] text-[#d8ba8e] hover:bg-[#2d1a11]' : 'border-2 border-[#3b1d14] text-[#3b1d14] hover:bg-[#3b1d14] hover:text-[#f8f5f0]'}`}>
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FAQ --- */}
      <section className="py-24 bg-[#f8f5f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-[#2d1a11] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-[#e3d2b2] rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-[#2d1a11] focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-serif text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#8c5738] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 text-[#5c4a42] font-medium leading-relaxed border-t border-[#f8f5f0] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 9. NEWSLETTER & CONTACT --- */}
      <section id="contact" className="bg-[#d8ba8e] py-16 border-y border-[#3b1d14]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#2d1a11] mb-6">Join the {safeName} Family: Get Exclusive Recipes & Offers</h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" className="px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1d14] flex-1 max-w-sm border-0 font-medium text-[#2d1a11] placeholder:text-[#8c5738]" />
            <input type="text" placeholder="Your Name" className="px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1d14] flex-1 max-w-xs border-0 font-medium text-[#2d1a11] placeholder:text-[#8c5738]" />
            <button className="bg-[#3b1d14] text-[#d8ba8e] px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#2d1a11] transition-colors flex items-center justify-center gap-2">
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* --- 10. FOOTER --- */}
      <footer className="bg-[#202c39] text-[#f8f5f0] pt-20 pb-10 border-t-8 border-[#3b1d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif font-bold text-[#d8ba8e] mb-6">{safeName}</h2>
            <p className="text-[#a0aab2] text-sm leading-relaxed mb-6">
              Welcome to {safeName}, where every bite is crafted with love and the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2d3a4a] flex items-center justify-center hover:bg-[#d8ba8e] hover:text-[#202c39] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2d3a4a] flex items-center justify-center hover:bg-[#d8ba8e] hover:text-[#202c39] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Shop</h3>
            <ul className="space-y-4 text-[#a0aab2] text-sm">
              <li><a href="#" className="hover:text-[#d8ba8e] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#d8ba8e] transition-colors">Learn More</a></li>
              <li><a href="#" className="hover:text-[#d8ba8e] transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-[#a0aab2] text-sm">
              <li><a href="#" className="hover:text-[#d8ba8e] transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-[#d8ba8e] transition-colors">Contact Info</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-4 text-[#a0aab2] text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#d8ba8e] shrink-0" /> {data.address || "123 Bakery Lane, Sweet City, NY 10001"}</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#d8ba8e] shrink-0" /> {data.phone || "+1 (555) 123-4567"}</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#d8ba8e] shrink-0" /> {data.email || "hello@crustique.com"}</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2d3a4a] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#a0aab2]">
          <p>Copyright © {new Date().getFullYear()} {safeName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with passion for artisanal baking.</p>
        </div>
      </footer>
    </div>
  );
}
