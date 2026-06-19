
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Menu, X, Gem, ShoppingBag } from "lucide-react";
import { TemplateProps } from "@/types";

export default function JewelryTemplate1({ data }: TemplateProps) {
  const {
    name = "Aurélia",
    about = "Discover our premier atelier in the heart of the city. With decades of experience, we meticulously select each gemstone for its purity and brilliance.",
    phone = "+1 234 567 890",
    email = "hello@aurelia.com",
    address = "123 Diamond Avenue, NY 10001",
    openingHours = "Mon-Fri 9AM-6PM",
    item_image,
  } = data;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ name: string, price: number, image: string }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate a consistent seed based on the business name so images change per client but remain stable for the same client
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
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36",
      "https://images.unsplash.com/photo-1515562141207-7a8d73cbc646",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
      "https://images.unsplash.com/photo-1599643477874-cf42d763cebc",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
      "https://images.unsplash.com/photo-1573408301145-b98c4af0508e",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516"
    ].map(url => `${url}?q=80&w=800&auto=format&fit=crop`);

    const shuffled = [...pool].sort(() => 0.5 - random());
    
    if (item_image && !shuffled.includes(item_image)) {
      shuffled.unshift(item_image);
    }

    setDynamicImages(shuffled);
  }, [name, item_image]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  const addToCart = (item: { name: string, price: number, image: string }) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'collections', 'craftsmanship', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const image = item_image || "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop";

  // Colors
  const navy = "#0A1526";
  const roseGold = "#D4A373";

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-[#D4A373] selection:text-white">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center relative z-20">
          <div className={`flex items-center gap-2 text-xl md:text-2xl font-serif uppercase tracking-widest ${isScrolled ? 'text-black' : 'text-black'}`}>
            <Gem className="w-5 h-5 text-[#D4A373]" />
            <span>{name.split(' ')[0] || "Aurélia"}</span>
          </div>

          <nav className={`hidden lg:flex items-center gap-6 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold ${isScrolled ? 'text-black' : 'text-black'}`}>
            <a href="#home" className={`pb-1 transition-all ${activeSection === 'home' ? 'text-[#D4A373] border-b border-[#D4A373]' : 'hover:text-[#D4A373] border-b border-transparent'}`}>Home</a>
            <span className="text-gray-300">|</span>
            <a href="#collections" className={`pb-1 transition-all ${activeSection === 'collections' ? 'text-[#D4A373] border-b border-[#D4A373]' : 'hover:text-[#D4A373] border-b border-transparent'}`}>Collections</a>
            <span className="text-gray-300">|</span>
            <a href="#craftsmanship" className={`pb-1 transition-all ${activeSection === 'craftsmanship' ? 'text-[#D4A373] border-b border-[#D4A373]' : 'hover:text-[#D4A373] border-b border-transparent'}`}>Craftsmanship</a>

            {/* These items fall over the blue background in the hero when at the top */}
            <div className={`flex items-center gap-6 ml-6 pl-6 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              <a href="#journal" className="hover:text-[#D4A373] transition-colors border-b border-transparent">Journal</a>
              <span className="text-gray-500">|</span>
              <a href="#contact" className={`pb-1 transition-all ${activeSection === 'contact' ? 'text-[#D4A373] border-b border-[#D4A373]' : 'hover:text-[#D4A373] border-b border-transparent'}`}>Contact</a>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setIsCartOpen(true)} className={`relative flex items-center transition-colors ${isScrolled ? 'text-black hover:text-[#D4A373]' : 'text-white hover:text-[#D4A373]'}`}>
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4A373] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </button>
            <a href="#contact" className={`border px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#0A1526]'}`}>
              Book consultation
            </a>
          </div>

          <div className="flex items-center gap-5 lg:hidden">
            <button onClick={() => setIsCartOpen(true)} className="relative flex items-center text-black">
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4A373] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button className="text-black bg-white/50 p-2 rounded-full backdrop-blur-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden flex flex-col items-center">
            <nav className="flex flex-col gap-10 text-xl font-serif text-center uppercase tracking-widest">
              <a href="#home" className={`${activeSection === 'home' ? 'text-[#D4A373]' : 'text-black'}`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#collections" className={`${activeSection === 'collections' ? 'text-[#D4A373]' : 'text-black'}`} onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
              <a href="#craftsmanship" className={`${activeSection === 'craftsmanship' ? 'text-[#D4A373]' : 'text-black'}`} onClick={() => setIsMobileMenuOpen(false)}>Craftsmanship</a>
              <a href="#contact" className={`${activeSection === 'contact' ? 'text-[#D4A373]' : 'text-black'}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative w-full h-[100vh] min-h-[850px] lg:min-h-[750px] flex pt-0 pb-0 overflow-hidden bg-[#FDFBF7]">
        {/* Desktop Backgrounds */}
        <div className="hidden lg:block absolute top-0 left-0 w-[55%] h-full z-0 bg-[#FDFBF7]"></div>
        <div className="hidden lg:block absolute top-0 right-0 w-[45%] h-full bg-[#0A1526] z-0"></div>

        {/* Mobile Full-Width Background Image */}
        <div className="absolute inset-0 w-full h-full lg:hidden z-0 overflow-hidden">
          {/* Seamless gradient mask over the entire top portion to eliminate lines */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-transparent z-10 pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full h-[90%]">
             <img src={getImg("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 0)} alt="Bangle" className="w-full h-full object-cover object-bottom" />
             {/* Subtle dark overlay for text readability if it overlaps */}
             <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row h-full relative z-10 pt-32 lg:pt-0">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] h-full flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left lg:pr-12 mt-0 lg:mt-24 z-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 lg:mb-6 flex flex-col items-center lg:items-start">
              <span className="bg-[#D4A373] lg:bg-[#D4A373] px-5 py-2 md:px-4 md:py-2 text-4xl md:text-7xl font-serif text-[#1A1A1A] leading-none block w-fit mb-2 shadow-sm rounded-sm">ADORN</span>
              <span className="bg-[#D4A373] lg:bg-[#D4A373] px-5 py-2 md:px-4 md:py-2 text-4xl md:text-7xl font-serif text-[#1A1A1A] leading-none block w-fit shadow-sm rounded-sm">YOURSELF</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-[28px] md:text-6xl font-serif text-[#1A1A1A] leading-[1.3] mb-10 lg:mb-10 px-4 lg:px-0 drop-shadow-md lg:drop-shadow-none">
              DISCOVER YOUR LEGACY
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <a href="#collections" className="group inline-flex items-center gap-3 bg-[#0A1526] text-white px-8 py-4 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#D4A373] transition-colors font-bold shadow-xl">
                Explore Collection <Gem className="w-3 h-3 text-[#D4A373] group-hover:text-white transition-colors" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-8 lg:mt-auto pt-6 lg:pt-20 text-[9px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#1A1A1A] lg:text-gray-800 pb-8 lg:pb-0 drop-shadow-md lg:drop-shadow-none">
              ETHICALLY SOURCED | GIA CERTIFIED
            </motion.div>
          </div>

          {/* Right Image (Desktop Only) */}
          <div className="w-full lg:w-[45%] hidden lg:flex h-full relative items-center justify-center lg:pt-20 pb-8 lg:pb-0 z-20">
            <div className="w-[90%] h-[80%] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden bg-[#0A1526] border-[6px] border-[#D4A373]/30">
              <img src={getImg("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 0)} alt="Jewelry Bangle" className="w-full h-full object-cover object-center opacity-95" />
            </div>
            {/* Small overlay image (Desktop only) */}
            <div className="absolute bottom-[10%] left-[-15%] w-[45%] bg-[#EFEBE4] p-4 shadow-xl rounded-sm hidden lg:block">
              <img src={getImg("https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop", 1)} alt="Jewelry Detail" className="w-full h-[150px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEXT SECTION */}
      <section className="py-20 lg:py-32 bg-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">{name.split(' ')[0]}: The Essence of Timeless Craft</h2>
        <p className="max-w-3xl mx-auto text-[13px] md:text-base text-gray-600 leading-[2] mb-16 font-light tracking-wide px-2">
          Discover our premier atelier in the heart of the city. With decades of experience, we meticulously select each gemstone for its purity and brilliance. Our master artisans blend traditional techniques with modern innovation to create pieces of eternal beauty. From ethical sourcing to bespoke creations, explore the magic of fine jewelry at {name}.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-xl mx-auto text-center md:text-left bg-[#FDFBF7] p-8 md:p-6 rounded-[2rem] border border-[#D4A373]/20 shadow-sm">
          <div className="w-32 h-32 md:w-24 md:h-24 shrink-0 rounded-full md:rounded-xl overflow-hidden shadow-md border-4 border-white">
            <img src={getImg("https://images.unsplash.com/photo-1515562141207-7a8d73cbc646?q=80&w=800&auto=format&fit=crop", 2)} alt="Ring" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-serif text-[#1A1A1A] mb-2 leading-tight">Eternal Elegance,<br className="md:hidden" /> Guaranteed Quality</h3>
            <p className="text-[11px] md:text-xs text-[#D4A373] tracking-[0.2em] uppercase font-bold">Bespoke Fine Jewelry</p>
          </div>
        </div>
      </section>

      {/* TWO IMAGES BLOCK */}
      <section id="craftsmanship" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <img src={getImg("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 3)} alt="Craftsmanship tools" className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg border border-[#D4A373]/20" />
          <img src={getImg("https://images.unsplash.com/photo-1515562141207-7a8d73cbc646?q=80&w=800&auto=format&fit=crop", 4)} alt="Craftsmanship detailing" className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg border border-[#D4A373]/20" />
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section id="contact" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#1A1A1A] mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border border-[#D4A373] bg-transparent rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4A373]" />
              <input type="email" placeholder="Email" className="w-full border border-[#D4A373] bg-transparent rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4A373]" />
              <input type="tel" placeholder="Phone" className="w-full border border-[#D4A373] bg-transparent rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4A373]" />
              <textarea placeholder="Message" rows={4} className="w-full border border-[#D4A373] bg-transparent rounded-3xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4A373]"></textarea>
              <div className="flex justify-center mt-6">
                <button className="border border-[#1A1A1A] text-[#1A1A1A] px-10 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-2">
                  Submit <Gem className="w-3 h-3 text-[#D4A373]" />
                </button>
              </div>
            </div>
            {/* Map Mockup */}
            <div className="relative w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-[#D4A373]/20">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A1526] text-white px-6 py-3 rounded-full text-xs font-bold shadow-xl flex items-center gap-2 border border-[#D4A373]">
                <MapPin className="w-4 h-4 text-[#D4A373]" /> {name}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / COLLECTIONS */}
      <section id="collections" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-[#1A1A1A] mb-16">The Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: "Diamond Solitaire Ring", price: 3200, img: getImg("https://images.unsplash.com/photo-1515562141207-7a8d73cbc646?q=80&w=800&auto=format&fit=crop", 5) },
              { name: "Sapphire Halo Pendant", price: 1850, img: getImg("https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop", 6) },
              { name: "Rose Gold Earrings", price: 950, img: getImg("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", 7) },
              { name: "Interlocking Bracelets", price: 1400, img: getImg("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 8) }
            ].map((item, i) => (
              <div key={i} className="flex flex-col group bg-[#FDFBF7] rounded-[2rem] p-4 lg:p-5 border border-[#D4A373]/20 hover:border-[#D4A373]/50 transition-colors shadow-sm hover:shadow-xl duration-500">
                <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 bg-white">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95" />

                  {/* Desktop Add to Cart Hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 hidden lg:flex pointer-events-none">
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-white text-[#0A1526] px-6 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-[#D4A373] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2 shadow-lg pointer-events-auto"
                    >
                      Add to Cart <ShoppingBag className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="px-2 flex flex-col flex-1 items-center lg:items-start text-center lg:text-left">
                  <h3 className="text-sm md:text-[15px] font-serif tracking-wide text-[#1A1A1A] line-clamp-1">{item.name}</h3>
                  <p className="text-xs md:text-sm text-[#D4A373] mt-2 font-medium">${item.price.toLocaleString()}</p>

                  {/* Mobile Add to Cart button */}
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-6 w-full border border-[#0A1526] text-[#0A1526] py-3 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#0A1526] hover:text-white transition-colors lg:hidden flex justify-center items-center gap-2"
                  >
                    Add to Cart <ShoppingBag className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPPING CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[90%] md:w-[400px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#FDFBF7]">
                <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-black">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                    <p className="text-sm uppercase tracking-widest">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border border-gray-100" />
                        <div className="flex-1">
                          <h3 className="text-sm font-serif">{item.name}</h3>
                          <p className="text-sm text-[#D4A373] mt-1 font-bold">${item.price.toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))}
                          className="text-gray-400 hover:text-red-500 p-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-[#FDFBF7]">
                  <div className="flex justify-between items-center mb-6 text-lg font-serif">
                    <span>Total</span>
                    <span className="font-bold">${cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-[#0A1526] text-white py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#D4A373] transition-colors shadow-lg">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-[#0A1526] text-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex flex-col text-2xl font-serif tracking-widest text-white mb-2 leading-none">
              <span className="flex items-center gap-2"><Gem className="w-5 h-5 text-[#D4A373]" /> {name.split(' ')[0] || "AURÉLIA"}</span>
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-400 pl-7">Fine Jewelry</div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-widest uppercase text-gray-400">Navigation</h4>
            <ul className="space-y-3 text-xs text-gray-300 tracking-wide">
              <li><a href="#" className="hover:text-[#D4A373]">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4A373]">About</a></li>
              <li><a href="#bespoke" className="hover:text-[#D4A373]">Bespoke</a></li>
              <li><a href="#contact" className="hover:text-[#D4A373]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-widest uppercase text-gray-400">Opening hours</h4>
            <ul className="space-y-3 text-xs text-gray-300 tracking-wide">
              <li>{openingHours}</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-widest uppercase text-gray-400">Contact Us</h4>
            <ul className="space-y-3 text-xs text-gray-300 tracking-wide">
              <li className="flex gap-3 items-start"><MapPin className="w-4 h-4 text-[#D4A373] shrink-0" /> <span className="leading-relaxed">{address}</span></li>
              <li className="flex gap-3 items-center"><Mail className="w-4 h-4 text-[#D4A373] shrink-0" /> {email}</li>
              <li className="flex gap-3 items-center"><Phone className="w-4 h-4 text-[#D4A373] shrink-0" /> {phone}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
