
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ShoppingBag, Plus, Trash2, ArrowUpRight } from "lucide-react";

const JewelryTemplate2 = ({ data }: TemplateProps) => {
  const { 
    name = "Aurélia", 
    about = "Born from a passion for the rarest gemstones, each piece is a masterpiece of architectural precision and poetic design. We don't just make jewelry; we craft heirlooms that capture the light of your most precious moments.", 
    phone = "+1 234 567 890", 
    email = "hello@aurelia.com", 
    address = "123 Diamond Avenue, NY 10001", 
    item_image 
  } = data;
  const brandName = name ? name.toUpperCase() : "AURELIA";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Cart State
  const [cartItems, setCartItems] = useState<{ name: string, price: number, image: string }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Pure Deterministic Image Logic
  let seed = 0;
  const str = name || "jewelry";
  for (let i = 0; i < str.length; i++) {
    seed = str.charCodeAt(i) + ((seed << 5) - seed);
  }
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const pool = [
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36",
    "https://images.unsplash.com/photo-1515562141207-7a8d73cbc646",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
    "https://images.unsplash.com/photo-1599643477874-cf42d763cebc",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    "https://images.unsplash.com/photo-1573408301145-b98c4af0508e",
    "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
    "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516",
  ].map((url) => `${url}?q=80&w=800&auto=format&fit=crop`);

  const dynamicImages = [...pool].sort(() => 0.5 - random());
  if (item_image && !dynamicImages.includes(item_image)) {
    dynamicImages.unshift(item_image);
  }

  const getImg = (fallback: string, index: number) =>
    dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (item: { name: string, price: number, image: string }, e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCartItems(cartItems.filter((_, i) => i !== indexToRemove));
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1816] font-sans selection:bg-[#A87B51] selection:text-white overflow-x-hidden">
      
      {/* UNIQUE GLASSY NAVIGATION BAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"}`}>
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <a href="#home" className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-[#1A1816] z-10 drop-shadow-sm flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border border-[#1A1816] flex items-center justify-center">
               <span className="font-sans font-bold text-xs">A</span>
             </div>
            {brandName}
          </a>

          {/* Desktop Nav - Floating Glass Pill */}
          <nav className={`hidden lg:flex items-center gap-10 px-10 py-4 rounded-full transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/50" : "bg-transparent"}`}>
            <a href="#home" className="text-[10px] uppercase tracking-[0.2em] text-[#1A1816] hover:text-[#A87B51] transition-colors font-bold">Home</a>
            <a href="#about" className="text-[10px] uppercase tracking-[0.2em] text-[#1A1816] hover:text-[#A87B51] transition-colors font-bold">About Us</a>
            <a href="#collections" className="text-[10px] uppercase tracking-[0.2em] text-[#1A1816] hover:text-[#A87B51] transition-colors font-bold">Collections</a>
            <a href="#contact" className="text-[10px] uppercase tracking-[0.2em] text-[#1A1816] hover:text-[#A87B51] transition-colors font-bold">Contact Us</a>
          </nav>

          <div className="flex items-center gap-4 z-10">
            <button 
              className="text-[#1A1816] hover:text-[#F9F8F6] hover:bg-[#1A1816] transition-all bg-white/80 backdrop-blur-md p-4 rounded-full shadow-sm hover:shadow-xl border border-[#1A1816]/10 relative group" 
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#A87B51] rounded-full text-white text-[10px] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden text-[#1A1816] hover:text-[#F9F8F6] hover:bg-[#1A1816] transition-all bg-white/80 backdrop-blur-md p-4 rounded-full shadow-sm border border-[#1A1816]/10" 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* AVANT-GARDE MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#F9F8F6] text-[#1A1816] flex flex-col justify-between overflow-hidden"
          >
            {/* Huge Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden z-0">
               <span className="text-[40vw] font-serif italic whitespace-nowrap">{brandName}</span>
            </div>

            {/* Menu Header */}
            <div className="px-6 md:px-12 py-8 flex justify-between items-center relative z-10 border-b border-[#1A1816]/5">
              <span className="font-serif text-xl tracking-[0.2em] italic">Navigation</span>
              <button className="hover:rotate-90 transition-transform duration-500 bg-[#1A1816] text-[#F9F8F6] p-4 rounded-full shadow-xl" onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 relative z-10">
              <nav className="flex flex-col gap-6 md:gap-10">
                {[
                  { name: 'Home', id: 'home', num: '01' }, 
                  { name: 'About Us', id: 'about', num: '02' }, 
                  { name: 'Collections', id: 'collections', num: '03' }, 
                  { name: 'Contact Us', id: 'contact', num: '04' }
                ].map((item, i) => (
                  <motion.a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="group flex items-center gap-6 w-fit"
                  >
                    <span className="text-xs md:text-sm font-sans font-bold text-[#A87B51] w-8">{item.num}</span>
                    <span className="font-serif text-5xl md:text-8xl text-[#1A1816] group-hover:text-[#A87B51] transition-colors italic tracking-tight relative pr-8">
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#A87B51] group-hover:w-full transition-all duration-500"></span>
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 border-t border-[#1A1816]/5 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1816]/50">Get in touch</span>
                <a href="#" className="text-xl md:text-2xl font-serif italic text-[#1A1816] hover:text-[#A87B51] transition-colors">{email || "hello@aurelia.com"}</a>
              </div>
              <div className="flex gap-8">
                {['Instagram', 'Pinterest', 'Twitter'].map(social => (
                  <a key={social} href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#A87B51] transition-colors border-b border-transparent hover:border-[#A87B51] pb-1">{social}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CART DRAWER OVERLAY */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-[#1A1816]/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#F9F8F6] shadow-2xl z-[101] flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-[#1A1816]/10 bg-white">
                <h3 className="font-serif text-3xl text-[#1A1816] italic">Shopping Cart</h3>
                <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform p-3 bg-[#F2EFE9] hover:bg-[#1A1816] hover:text-white rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-[#1A1816]/40 gap-6">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#1A1816]/5">
                      <ShoppingBag className="w-10 h-10 stroke-[1]" />
                    </div>
                    <p className="uppercase tracking-[0.2em] text-xs font-bold">Your cart is empty</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-4 border border-[#1A1816]/20 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1A1816] hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cartItems.map((item, i) => (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={i} className="flex gap-6 bg-white p-4 rounded-3xl shadow-sm border border-[#1A1816]/5 group hover:shadow-lg transition-all">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#F2EFE9]">
                        <img src={item.image} className="w-full h-full object-cover mix-blend-multiply" alt={item.name} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h4 className="font-serif text-[#1A1816] text-lg leading-tight mb-1">{item.name}</h4>
                          <p className="text-[#A87B51] text-sm font-bold tracking-widest">${item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1816]/40">Qty: 1</span>
                          <button onClick={() => removeFromCart(i)} className="text-[#1A1816]/30 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full border border-transparent hover:border-red-100">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-8 bg-white border-t border-[#1A1816]/10 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                  <div className="flex justify-between items-center mb-6 text-[#1A1816]">
                    <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Subtotal</span>
                    <span className="font-serif text-4xl">${cartTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-[10px] text-[#1A1816]/50 uppercase tracking-[0.2em] font-bold mb-8 text-center bg-[#F2EFE9] py-3 rounded-xl">Shipping & taxes calculated at checkout</p>
                  <button className="w-full bg-[#1A1816] text-white py-5 rounded-full uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#A87B51] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* UNIQUE AVANT-GARDE HERO */}
      <section id="home" className="relative w-full min-h-[100svh] bg-[#F9F8F6] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
        <div className="max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative z-20 order-2 lg:order-1 flex flex-col justify-center">
             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
               <h1 className="text-6xl md:text-[8rem] xl:text-[9rem] font-serif leading-[0.85] tracking-tighter text-[#1A1816]">
                 RARE <br />
                 <span className="italic font-light text-[#A87B51] md:ml-24 flex items-center gap-6">
                   <div className="hidden md:block w-32 h-[1px] bg-[#A87B51]"></div>
                   beauty
                 </span>
               </h1>
               <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 pl-2 md:pl-4 border-l-2 border-[#A87B51]">
                 <p className="text-sm md:text-base text-[#1A1816]/70 max-w-sm leading-relaxed font-light">
                   A curated collection of the world's most exquisite pieces. Handcrafted for the modern visionary.
                 </p>
               </div>
               
               <div className="mt-16 flex items-center gap-8">
                 <a href="#collections" className="bg-[#1A1816] text-[#F9F8F6] px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#A87B51] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-4 group">
                   Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </a>
                 <div className="hidden md:flex -space-x-4 shadow-lg rounded-full">
                   <img src={getImg("https://images.unsplash.com/photo-1599643477874-cf42d763cebc?q=80&w=800&auto=format&fit=crop", 2)} className="w-14 h-14 rounded-full border-4 border-[#F9F8F6] object-cover" alt="Preview 1"/>
                   <img src={getImg("https://images.unsplash.com/photo-1515562141207-7a8d73cbc646?q=80&w=800&auto=format&fit=crop", 3)} className="w-14 h-14 rounded-full border-4 border-[#F9F8F6] object-cover" alt="Preview 2"/>
                   <div className="w-14 h-14 rounded-full border-4 border-[#F9F8F6] bg-[#A87B51] text-white flex items-center justify-center text-[10px] font-bold z-10">+24</div>
                 </div>
               </div>
             </motion.div>
          </div>

          <div className="lg:col-span-6 relative z-10 order-1 lg:order-2 h-[50vh] lg:h-[80vh] flex justify-end">
            {/* Arched image container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full lg:w-[85%] h-full relative"
            >
              <div className="absolute inset-0 rounded-t-[50vw] lg:rounded-t-[30vw] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white">
                 <img src={getImg("https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop", 0)} alt="Hero" className="w-full h-full object-cover scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/20 to-transparent"></div>
              </div>
              
              {/* Floating aesthetic spinning badge */}
              <div className="hidden md:flex absolute -bottom-10 -left-16 w-40 h-40 bg-white rounded-full items-center justify-center shadow-2xl z-20">
                 <div className="w-full h-full animate-[spin_20s_linear_infinite] p-2">
                   <svg viewBox="0 0 100 100" className="w-full h-full uppercase text-[9px] tracking-[0.3em] font-bold fill-current text-[#1A1816]">
                    <path id="circle2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text><textPath href="#circle2">High Jewelry • Maison • Paris • </textPath></text>
                   </svg>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#A87B51] rounded-full shadow-inner border-2 border-white"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UNIQUE BENTO BOX COLLECTIONS GRID */}
      <section id="collections" className="py-32 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
             <span className="text-[#A87B51] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">The Gallery</span>
             <h2 className="text-4xl md:text-6xl font-serif text-[#1A1816] leading-none">Curated <span className="italic text-[#A87B51]">Masterpieces</span></h2>
           </div>
          <a href="#" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1816] hover:text-[#A87B51] transition-all group border border-[#1A1816]/10 px-6 py-3 rounded-full hover:bg-white hover:shadow-md">
            View Full Gallery <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* Item 1 - Large Feature (Spans 2 cols, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            onClick={(e) => addToCart({ name: "Celestial Drop Pendant", price: 14200, image: getImg("https://images.unsplash.com/photo-1599643477874-cf42d763cebc?q=80&w=800&auto=format&fit=crop", 1) }, e)}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-700 cursor-pointer border border-[#1A1816]/5"
          >
             <img src={getImg("https://images.unsplash.com/photo-1599643477874-cf42d763cebc?q=80&w=800&auto=format&fit=crop", 1)} alt="Celestial Drop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/90 via-[#1A1816]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
             
             <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
                <div className="text-white z-10">
                   <p className="text-[10px] uppercase tracking-[0.4em] mb-4 font-bold text-[#A87B51] bg-white/10 w-fit px-4 py-1.5 rounded-full backdrop-blur-md">High Jewelry</p>
                   <h3 className="font-serif text-4xl md:text-6xl italic drop-shadow-xl">Celestial Drop</h3>
                   <p className="text-white/70 font-light mt-4 max-w-sm hidden md:block">An extraordinary piece featuring an extremely rare teardrop diamond enveloped in white gold.</p>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-4 z-10">
                   <span className="text-white font-sans text-2xl font-bold tracking-widest">$14,200</span>
                   <button className="w-14 h-14 rounded-full bg-white text-[#1A1816] flex items-center justify-center hover:bg-[#A87B51] hover:text-white transition-colors md:transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 shadow-xl">
                      <ShoppingBag className="w-6 h-6" />
                   </button>
                </div>
             </div>
          </motion.div>

          {/* Regular Items using mapping */}
          {[
            { name: "Eternity Band", price: 2850, category: "Rose Gold", img: 2 },
            { name: "Serpent Motif", price: 6100, category: "18K Gold", img: 3 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
              onClick={(e) => addToCart({ name: item.name, price: item.price, image: getImg("https://images.unsplash.com/photo-1599643477874-cf42d763cebc?q=80&w=800&auto=format&fit=crop", item.img) }, e)}
              className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm border border-[#1A1816]/5 hover:shadow-2xl transition-all duration-500 flex flex-col p-4 cursor-pointer"
            >
              <div className="w-full h-[55%] rounded-[1.5rem] overflow-hidden relative bg-[#F2EFE9]">
                 <img src={getImg("https://images.unsplash.com/photo-1599643477874-cf42d763cebc?q=80&w=800&auto=format&fit=crop", item.img)} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                 <div className="absolute inset-0 bg-[#1A1816]/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between pt-6 px-4 pb-2">
                 <div>
                    <h4 className="font-serif text-2xl text-[#1A1816] mb-2 group-hover:text-[#A87B51] transition-colors">{item.name}</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1816]/40 font-bold">{item.category}</p>
                 </div>
                 <div className="flex justify-between items-center pt-4 border-t border-[#1A1816]/5">
                    <span className="font-bold text-lg text-[#1A1816] tracking-widest">${item.price.toLocaleString()}</span>
                    <button className="w-12 h-12 rounded-full bg-[#F2EFE9] text-[#1A1816] flex items-center justify-center group-hover:bg-[#1A1816] group-hover:text-white transition-colors shadow-sm">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-32 md:py-48 px-6 md:px-12 max-w-[100rem] mx-auto relative bg-white my-24 rounded-[4rem] shadow-sm border border-[#1A1816]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2EFE9] rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A87B51] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl"
          >
            <img src={getImg("https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=800&auto=format&fit=crop", 4)} alt="Jewelry Craftsmanship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left"
          >
            <div className="w-16 h-16 rounded-full border border-[#A87B51] flex items-center justify-center mb-8">
              <span className="text-[#A87B51] font-serif text-2xl italic">A</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-[#1A1816]">
              Defining the <span className="italic text-[#A87B51]">avant-garde</span> of luxury jewelry.
            </h2>
            <p className="mt-12 text-sm md:text-base text-[#1A1816]/60 leading-relaxed font-light">
              {about || "Born from a passion for the rarest gemstones, each piece is a masterpiece of architectural precision and poetic design. We don't just make jewelry; we craft heirlooms that capture the light of your most precious moments."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="order-2 md:order-1">
            <p className="text-[#A87B51] text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Client Services</p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1816] mb-6">The <span className="italic text-[#A87B51]">Concierge</span></h2>
            <p className="text-[#1A1816]/60 font-light mb-12 max-w-md leading-relaxed text-sm md:text-base">
              Whether you are looking for a bespoke creation, wish to book a private viewing, or have a question about our collections, our concierge team is at your absolute disposal.
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-[#1A1816]/20 py-4 outline-none focus:border-[#A87B51] transition-colors text-sm font-light placeholder:text-[#1A1816]/40 text-[#1A1816] peer" />
              </div>
              <div className="relative group">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-[#1A1816]/20 py-4 outline-none focus:border-[#A87B51] transition-colors text-sm font-light placeholder:text-[#1A1816]/40 text-[#1A1816]" />
              </div>
              <div className="relative group">
                <select defaultValue="" className="w-full bg-transparent border-b border-[#1A1816]/20 py-4 outline-none focus:border-[#A87B51] transition-colors text-sm font-light text-[#1A1816] appearance-none cursor-pointer">
                  <option value="" disabled className="text-[#1A1816]/40">Nature of Inquiry</option>
                  <option value="bespoke">Bespoke Creation</option>
                  <option value="appointment">Private Appointment</option>
                  <option value="general">General Inquiry</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ArrowRight className="w-4 h-4 text-[#1A1816]/40 rotate-90" />
                </div>
              </div>
              <div className="relative group mt-2">
                <textarea placeholder="Your Message" rows={3} className="w-full bg-transparent border-b border-[#1A1816]/20 py-4 outline-none focus:border-[#A87B51] transition-colors text-sm font-light placeholder:text-[#1A1816]/40 text-[#1A1816] resize-none" />
              </div>
              
              <button type="button" className="w-fit mt-8 border border-[#1A1816] text-[#1A1816] px-12 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1A1816] hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                Send Inquiry
              </button>
            </form>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative border border-[#1A1816]/5"
          >
             <img src={getImg("https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", 5)} alt="Boutique" className="w-full h-full object-cover scale-105" />
             <div className="absolute inset-0 bg-[#1A1816]/5 mix-blend-multiply"></div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-32 pb-12 px-6 md:px-12 bg-[#1A1816] text-[#F9F8F6] mt-10 rounded-t-[4rem] shadow-2xl relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto relative z-10">
          
          <div className="flex flex-col items-center text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-serif text-[#F9F8F6] mb-8">Experience <span className="italic text-[#A87B51]">Excellence</span></h2>
            <p className="text-[#F9F8F6]/60 max-w-md font-light text-lg">Visit our boutique or get in touch with our concierge team for bespoke inquiries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 pt-16 border-t border-white/10">
            <div className="md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A87B51] mb-8">Client Care</h4>
              <div className="flex flex-col gap-6 text-xs font-bold tracking-widest text-white/50">
                <a href="#" className="hover:text-white transition-colors w-fit">Contact Us</a>
                <a href="#" className="hover:text-white transition-colors w-fit">Book an Appointment</a>
                <a href="#" className="hover:text-white transition-colors w-fit">FAQs</a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A87B51] mb-8">The Maison</h4>
              <div className="flex flex-col gap-6 text-xs font-bold tracking-widest text-white/50">
                <a href="#about" className="hover:text-white transition-colors w-fit">Our History</a>
                <a href="#" className="hover:text-white transition-colors w-fit">Sustainability</a>
                <a href="#" className="hover:text-white transition-colors w-fit">Boutiques</a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A87B51] mb-8">Newsletter</h4>
              <p className="text-xs font-light tracking-widest text-white/50 mb-8 leading-relaxed max-w-md">
                Receive the latest news, exclusive invitations, and stories from {brandName}.
              </p>
              <div className="flex items-center bg-white/5 p-2 rounded-full border border-white/10">
                <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none w-full text-sm font-light text-white placeholder:text-white/30 tracking-widest px-6" />
                <button className="bg-white text-[#1A1816] px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#A87B51] hover:text-white transition-colors">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[9px] uppercase tracking-[0.2em] text-white/30 gap-6 font-bold">
            <p>© {new Date().getFullYear()} {brandName}. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};
export default JewelryTemplate2;
