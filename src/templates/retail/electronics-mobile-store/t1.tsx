
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, Search, ShoppingBag, ArrowRight, Check, Plus, Moon, Activity,
  Star, MapPin, Phone, Mail, Clock, ShieldCheck, Zap, Headphones
} from "lucide-react";

export default function ElectronicsMobileT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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
    name: data?.name || data?.business_name || "HUB Store",
    email: data?.email || "hello@hubstore.com",
    phone: data?.phone || "+1 (800) 999-0000",
    address: data?.address || "Atelier 01, Silicon Valley",
    about: data?.about || "Experience blazing fast speeds and incredible efficiency with our latest lineup of smart devices engineered for the future.",
    itemName: data?.item_name || "Premium Headset",
    itemPrice: data?.item_price || "$199",
    rating: data?.rating || "4.9",
    reviewsCount: data?.reviews_count || "1.2k",
    city: data?.city || "Wireless Edition"
  };

  const nameParts = businessData.name.split(" ");
  const firstNamePart = nameParts[0] || "Simplify";
  const restNameParts = nameParts.slice(1).join(" ") || "Your Shopping";

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Features", id: "features" },
    { name: "Store Info", id: "store" },
    { name: "Contact us", id: "contact-us" }
  ];

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Ensure deterministic hydration for images
  const pool = [
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop", // Headphones
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop", // Earbuds
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop", // Smartwatch
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop", // Mobile Phone
    "https://images.unsplash.com/photo-1550029402-226115b7c579?q=80&w=800&auto=format&fit=crop", // Setup
  ];

  const mainImage = data?.item_image || pool[0];

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-[#2563EB] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide flex items-center gap-4 shadow-xl"
          >
            <div className="w-6 h-6 bg-white text-[#2563EB] rounded-full flex items-center justify-center"><Check className="w-4 h-4" /></div>
            Item Added to Cart
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER WITH SCROLL SPY */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="font-bold text-2xl tracking-tight text-[#0F172A] flex items-center gap-2 hover:scale-105 transition-transform">
             <span className="text-[#2563EB]">{firstNamePart.toUpperCase()}</span> {restNameParts}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 bg-slate-100/50 rounded-full p-1 border border-slate-200 backdrop-blur-sm">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full z-10 ${isActive ? 'text-white' : 'text-slate-500 hover:text-[#0F172A]'}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill" 
                      className="absolute inset-0 bg-[#2563EB] rounded-full -z-10 shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-slate-500 hover:text-[#2563EB] transition-colors p-2 rounded-full hover:bg-blue-50">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-slate-500 hover:text-[#2563EB] transition-colors p-2 rounded-full hover:bg-blue-50" onClick={handleAddToCart}>
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute 0 top-0 right-0 bg-[#BEF264] text-[#0F172A] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>

          <button className="lg:hidden text-[#0F172A] bg-white p-2 rounded-full shadow-sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 overflow-hidden shadow-2xl absolute w-full top-full"
            >
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-700 hover:bg-slate-50'}`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* BENTO HERO */}
      <section id="home" className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-[95vh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          <div className="absolute inset-0 pointer-events-none opacity-20 -z-10" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            <h1 className="text-6xl md:text-[5rem] font-bold text-[#0F172A] leading-[1.1] tracking-tight relative z-10 break-words drop-shadow-sm">
              {firstNamePart}
            </h1>
            
            <div className="relative mt-2 z-10 w-fit">
              <div className="bg-[#2563EB] w-[120%] h-[110%] absolute -left-6 -top-4 -z-10 rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)]"></div>
              <h1 className="text-6xl md:text-[5rem] font-bold text-white leading-[1.1] tracking-tight pl-2 py-4 break-words line-clamp-2">
                {restNameParts}
              </h1>
              <p className="text-white/90 text-lg font-medium mt-6 pl-2 max-w-[280px] line-clamp-3">
                {businessData.about}
              </p>
            </div>

            <div className="mt-24 lg:mt-32 w-40 h-40 bg-[#BEF264] p-6 rounded-2xl shadow-[0_20px_40px_rgba(190,242,100,0.4)] flex flex-col justify-end group hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-lime-200" onClick={handleAddToCart}>
               <h3 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-none mb-2 line-clamp-1">{businessData.itemPrice}</h3>
               <p className="font-bold text-[#0F172A]/80 text-sm line-clamp-2">{businessData.itemName}</p>
               <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                 <ArrowRight className="w-4 h-4 text-[#0F172A]" />
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] flex flex-col justify-between mt-12 lg:mt-0">
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute bottom-1/4 w-[250px] md:w-[350px] h-[200px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] rotate-[-5deg] skew-x-[10deg] -z-10 border border-slate-100"></div>
              
              <motion.div 
                animate={{ y: [-15, 15, -15] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[500px] aspect-square z-20"
              >
                 <img src={mainImage} alt={businessData.itemName} className="w-full h-full object-contain drop-shadow-2xl mix-blend-darken scale-110" />
              </motion.div>

              <div className="absolute top-1/4 left-0 lg:-left-12 flex items-center gap-3 z-30 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#BEF264] shadow-[0_0_10px_rgba(190,242,100,0.8)]"></div>
                 <span className="text-xs font-bold text-slate-700 uppercase">Premium</span>
              </div>

              <div className="absolute bottom-1/3 right-0 lg:-right-8 flex flex-col items-center gap-2 z-30">
                 <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                   <span className="text-xs font-bold text-slate-700 uppercase">{businessData.city}</span>
                 </div>
                 <div className="w-px h-16 bg-slate-300 border-l border-dashed border-slate-400"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              </div>
            </div>

            {/* Bottom Bento Boxes */}
            <div className="mt-auto grid grid-cols-2 gap-4 relative z-40">
              <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl flex items-center gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group" onClick={handleAddToCart}>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0 group-hover:scale-110 transition-transform">
                  <Moon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg line-clamp-1">{firstNamePart} Products</h4>
                  <p className="text-xs font-medium text-slate-500">Highly Recommended</p>
                </div>
              </div>

              <div className="bg-[#0F172A] p-6 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden relative group cursor-pointer">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border-[20px] border-[#BEF264]/10 border-t-[#BEF264] border-l-[#BEF264] rotate-45 group-hover:rotate-[225deg] transition-transform duration-[1.5s] ease-in-out"></div>
                <div className="text-center z-10">
                  <h4 className="text-4xl md:text-5xl font-black text-white">{businessData.reviewsCount}</h4>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-[#BEF264] fill-[#BEF264]" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">Rating {businessData.rating}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-white border-t border-slate-100 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-50 -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2 block">Our Collection</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">Latest Arrivals</h2>
              <p className="text-slate-500 max-w-md text-lg">Discover our highly curated selection of premium electronics and accessories.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-white bg-[#0F172A] px-6 py-3 rounded-full hover:bg-[#2563EB] hover:shadow-lg transition-all">
              View All Catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Pro Series Earbuds", price: "$249", img: pool[1], badge: "New" },
              { name: "Vitality Smartwatch", price: "$399", img: pool[2], badge: "Bestseller" },
              { name: "Aura Smartphone", price: "$1,199", img: pool[3], badge: "" },
            ].map((product, i) => (
              <div key={i} className="group bg-[#F8FAFC] rounded-[2rem] p-6 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="relative aspect-square w-full bg-white rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm">
                   <img src={product.img} alt={product.name} className="w-3/4 h-3/4 object-contain mix-blend-darken group-hover:scale-110 transition-transform duration-500" />
                   {product.badge && (
                     <div className="absolute top-4 right-4 bg-[#0F172A] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-md">
                       {product.badge}
                     </div>
                   )}
                </div>
                <div className="flex justify-between items-end px-2">
                  <div>
                    <h3 className="font-extrabold text-xl text-[#0F172A] mb-1">{product.name}</h3>
                    <p className="text-lg font-black text-[#2563EB]">{product.price}</p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleAddToCart(); }} className="w-12 h-12 bg-[#0F172A] text-white rounded-2xl flex items-center justify-center hover:bg-[#BEF264] hover:text-[#0F172A] transition-colors shadow-md">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETING / FEATURES BENTO SECTION */}
      <section id="features" className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A]">Engineered for the Future</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            
            {/* Feature 1 - Large Box */}
            <div className="bg-[#2563EB] rounded-[2.5rem] p-10 lg:col-span-2 text-white relative overflow-hidden shadow-xl flex flex-col justify-between group">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <ShieldCheck className="w-10 h-10 mb-6 text-[#BEF264]" />
                <h3 className="text-4xl font-extrabold mb-4 max-w-sm">Unleash Next-Gen Performance.</h3>
                <p className="text-white/80 max-w-md text-lg">Experience blazing fast speeds and incredible efficiency with our latest lineup of smart devices.</p>
              </div>
              <button className="w-fit bg-white text-[#2563EB] px-8 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all relative z-10 mt-6">
                Learn More
              </button>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="w-16 h-16 bg-[#BEF264] rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-[#0F172A]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Precision Tracking</h3>
                <p className="text-slate-500">Advanced telemetry sensors for accurate monitoring in real-time.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0F172A] rounded-[2.5rem] p-10 shadow-xl flex flex-col justify-between text-white group relative overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center relative z-10 group-hover:rotate-12 transition-transform">
                <Zap className="w-8 h-8 text-[#BEF264]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Hyper Charging</h3>
                <p className="text-slate-400">0 to 100% in under 15 minutes. Never be tethered to a wall again.</p>
              </div>
            </div>

            {/* Feature 4 - Spans 2 cols */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm lg:col-span-2 flex flex-col md:flex-row items-center gap-8 group hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="flex-1">
                <div className="w-16 h-16 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#0F172A] mb-4">Immersive Spatial Audio</h3>
                <p className="text-slate-500 text-lg">Studio-quality sound reproduction designed to wrap completely around you. Dive deeper into the music.</p>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-[#F8FAFC] rounded-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden p-6">
                <img src={pool[1]} className="w-full h-full object-contain mix-blend-darken group-hover:scale-125 transition-transform duration-700" alt="Audio" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STORE INFO & FAQ SECTION */}
      <section id="store" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Store Details */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8">Our Flagship Store</h2>
              
              <div className="w-full h-64 bg-slate-100 rounded-3xl overflow-hidden mb-10 border border-slate-200 relative group">
                <img src={pool[4]} alt="Store Front" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent flex items-end p-6">
                   <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Open Now</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-lg">Location</h4>
                    <p className="text-slate-500">{businessData.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#BEF264]/20 rounded-xl flex items-center justify-center shrink-0 border border-[#BEF264]/40">
                    <Clock className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-lg">Operating Hours</h4>
                    <p className="text-slate-500">Mon - Sat: 10:00 AM - 9:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2 block">Got Questions?</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8">FAQ</h2>
              
              <div className="space-y-4">
                {[
                  { q: "Do you offer international shipping?", a: "Yes, we ship globally! Delivery times and fees vary depending on the destination region." },
                  { q: "What is your return policy?", a: "We accept returns within 30 days of purchase for a full refund, provided the item is in its original packaging." },
                  { q: "Are the electronics covered under warranty?", a: "Absolutely. All our premium devices come with a standard 1-year manufacturer's warranty, with options to extend." },
                  { q: "Can I trade in my old device?", a: "Yes! Bring your old device to our physical store for a direct evaluation and receive instant credit towards your new purchase." }
                ].map((faq, i) => (
                  <div key={i} className={`border rounded-2xl overflow-hidden transition-colors ${faqOpen === i ? 'border-[#2563EB] bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-bold text-[#0F172A] pr-4">{faq.q}</span>
                      <Plus className={`w-5 h-5 shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-45 text-[#2563EB]' : 'text-slate-400'}`} />
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-[#2563EB]/10"
                        >
                          <div className="px-6 py-5 text-slate-600 leading-relaxed bg-white">
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
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact-us" className="bg-[#0F172A] pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 mb-20 backdrop-blur-md">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to upgrade?</h3>
              <p className="text-slate-400 text-lg">Join {businessData.reviewsCount} happy customers and elevate your tech today.</p>
            </div>
            <button className="w-full md:w-auto bg-[#BEF264] text-[#0F172A] px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-xl">
              Shop Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-1">
              <div className="font-bold text-3xl tracking-tight text-white flex items-center gap-2 mb-6">
                 <span className="text-[#2563EB]">{firstNamePart.toUpperCase()}</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Your ultimate destination for the latest electronic gadgets and smart devices. Simplify your shopping experience.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:text-white text-slate-400 transition-colors cursor-pointer"><Phone className="w-4 h-4" /></div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:text-white text-slate-400 transition-colors cursor-pointer"><Mail className="w-4 h-4" /></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Shop</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Smartphones</a></li>
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Laptops & PCs</a></li>
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Audio Wearables</a></li>
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Support</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Order Tracking</a></li>
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Warranty Info</a></li>
                <li><a href="#" className="hover:text-[#BEF264] transition-colors">Return Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Subscribe</h4>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Get the latest updates on new products and upcoming sales directly to your inbox.</p>
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 focus-within:border-[#2563EB] transition-colors">
                <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-sm px-4 w-full text-white placeholder:text-slate-500" />
                <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors">Join</button>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <p>&copy; {new Date().getFullYear()} {businessData.name}. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
