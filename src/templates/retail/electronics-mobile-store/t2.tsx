
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, Search, ShoppingBag, ArrowUpRight, 
  Battery, Wifi, Cpu, Speaker, MoveRight
} from "lucide-react";

export default function ElectronicsMobileT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const businessData = {
    name: data?.title || data?.name || "Volt Electronics",
    email: data?.email || "hello@voltelectronics.com",
    phone: data?.phone || "+1 (800) 555-VOLT",
    address: data?.address || "Terminal 4, Tech District, NY",
    tagline: data?.tagline || "High-performance gear for the modern creator.",
  };

  const navLinks = ["Drops", "Audio", "Computing", "Wearables", "Sale"];

  const trendingProducts = [
    { name: "V-Pro Wireless Headphones", price: "$299.00", tag: "Hot", bg: "bg-[#F3F4F6]", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop" },
    { name: "Neon Mechanical Keyboard", price: "$149.00", tag: "New", bg: "bg-[#FAFAFA]", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2000&auto=format&fit=crop" },
    { name: "Aura 4K Drone", price: "$899.00", tag: "Limited", bg: "bg-[#F3F4F6]", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2000&auto=format&fit=crop" },
    { name: "Titan Smartwatch", price: "$199.00", tag: "Sale", bg: "bg-[#FAFAFA]", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2000&auto=format&fit=crop" }
  ];

  const features = [
    { icon: Battery, title: "72Hr Battery", desc: "Industry-leading power retention." },
    { icon: Wifi, title: "Zero Latency", desc: "Sub-1ms wireless transmission." },
    { icon: Cpu, title: "Neural Core", desc: "AI-powered adaptive performance." },
    { icon: Speaker, title: "Spatial Audio", desc: "360-degree acoustic engineering." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-[#EA580C] selection:text-white overflow-x-clip">
      
      {/* Brutalist Add to Cart Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-[100] bg-[#EA580C] text-white px-6 py-4 border-4 border-[#0A0A0A] shadow-[8px_8px_0px_0px_rgba(10,10,10,1)] font-black uppercase tracking-widest flex items-center gap-4"
          >
            ITEM ADDED TO CART
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brutalist Scrolling Marquee Top Bar */}
      <div className="bg-[#EA580C] text-white py-2 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]"
        >
          <span>Free Express Shipping on Orders Over $100</span>
          <span>•</span>
          <span>Next Gen. Now.</span>
          <span>•</span>
          <span>Student Discount: 15% Off</span>
          <span>•</span>
          <span>Free Express Shipping on Orders Over $100</span>
          <span>•</span>
          <span>Next Gen. Now.</span>
          <span>•</span>
          <span>Student Discount: 15% Off</span>
          <span>•</span>
        </motion.div>
      </div>

      {/* Industrial Navigation */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA] border-b-2 border-[#0A0A0A] transition-all">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4 lg:gap-12 min-w-0 pr-4">
            <div className="font-extrabold text-xl sm:text-3xl tracking-tighter uppercase italic truncate">
              {businessData.name}
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-black uppercase tracking-widest hover:text-[#EA580C] transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button suppressHydrationWarning className="hidden lg:block hover:text-[#EA580C] transition-colors">
              <Search className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button suppressHydrationWarning className="flex items-center gap-2 hover:text-[#EA580C] transition-colors relative group">
              <ShoppingBag className="w-6 h-6 stroke-[2.5]" />
              <span className="hidden lg:block text-sm font-bold">( {cartCount} )</span>
              {/* Mobile Badge */}
              {cartCount > 0 && (
                <span className="lg:hidden absolute -top-1 -right-1 bg-[#EA580C] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-[#0A0A0A]">
                  {cartCount}
                </span>
              )}
            </button>
            <button suppressHydrationWarning className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-7 h-7 stroke-[2.5]" /> : <Menu className="w-7 h-7 stroke-[2.5]" />}
            </button>
          </div>

        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0A0A0A] text-white border-b-2 border-[#0A0A0A] z-40 p-6 flex flex-col gap-4 shadow-2xl"
            >
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase italic tracking-tighter border-b border-white/10 pb-4">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Brutalist Asymmetrical Hero */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">
          
          {/* Left Text Content */}
          <div className="p-6 sm:p-12 lg:p-20 flex flex-col justify-center bg-[#FAFAFA] w-full overflow-hidden">
            <div className="inline-block bg-[#0A0A0A] text-[#FAFAFA] px-4 py-2 font-bold uppercase tracking-widest text-xs w-max mb-6">
              Season 04 Drop
            </div>
            
            <h1 className="text-[14vw] sm:text-8xl lg:text-[100px] font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-[#0A0A0A] break-words break-all">
              Power <br/> <span className="text-[#EA580C]">Unleashed.</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-2xl font-medium text-[#525252] max-w-md leading-snug mb-10 w-full">
              {businessData.tagline} Discover the tools that define the next generation of performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a href="#shop" className="w-full sm:w-auto bg-[#EA580C] hover:bg-[#C2410C] text-white px-4 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-3">
                Shop The Drop <ArrowUpRight className="w-5 h-5 stroke-[3]" />
              </a>
              <a href="#features" className="w-full sm:w-auto border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-4 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-black uppercase tracking-widest transition-colors flex items-center justify-center">
                Tech Specs
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative h-[50vh] lg:h-[85vh] bg-[#F3F4F6] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2000&auto=format&fit=crop"
              alt="High-end headphones"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-multiply"
            />
            {/* Absolute Badge */}
            <div className="absolute top-8 right-8 bg-[#FAFAFA] border-2 border-[#0A0A0A] p-4 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_rgba(10,10,10,1)] rotate-3">
               <span className="font-black text-3xl uppercase italic leading-none">V-Pro</span>
               <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mt-1">Headphones</span>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Specs / Trust Bar */}
      <section id="features" className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white py-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-4">
              <feature.icon className="w-8 h-8 text-[#EA580C]" />
              <h3 className="font-black uppercase tracking-widest text-lg">{feature.title}</h3>
              <p className="text-[#A3A3A3] text-sm font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid Collection */}
      <section id="shop" className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none">Trending<br/>Gear.</h2>
          <a href="#" className="font-bold uppercase tracking-widest border-b-2 border-[#0A0A0A] pb-1 hover:text-[#EA580C] hover:border-[#EA580C] transition-colors flex items-center gap-2">
            View All Collection <MoveRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`${product.bg} border-2 border-[#0A0A0A] aspect-[4/5] relative mb-6 overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(10,10,10,1)]`}>
                
                {/* Product Tag */}
                <div className="absolute top-4 left-4 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 z-10">
                  {product.tag}
                </div>

                <img src={product.img} alt={product.name} className="object-cover w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                
                {/* Hover Add to Cart */}
                <button suppressHydrationWarning onClick={handleAddToCart} className="absolute bottom-4 left-4 right-4 bg-[#EA580C] text-white text-center py-4 font-black uppercase tracking-widest translate-y-24 group-hover:translate-y-0 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(10,10,10,1)] border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#EA580C]">
                  Add to Cart
                </button>
              </div>
              
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg leading-tight pr-4 group-hover:text-[#EA580C] transition-colors">{product.name}</h3>
                <span className="font-black">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Massive Graphic Banner */}
      <section className="border-y-2 border-[#0A0A0A] bg-[#EA580C] text-white py-32 overflow-hidden relative">
        {/* Background typographic noise */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[300px] font-black italic uppercase tracking-tighter leading-none opacity-10 pointer-events-none">
          VOLT
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
              Built for <br/> creators.
            </h2>
            <p className="text-xl font-medium text-white/80 max-w-md mb-12">
              Our latest drop of studio-grade equipment is designed to eliminate friction between your ideas and reality.
            </p>
            <button suppressHydrationWarning className="bg-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] text-white px-10 py-5 text-sm font-black uppercase tracking-[0.2em] transition-colors">
              Explore The Studio Collection
            </button>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] border-4 border-[#0A0A0A] bg-white shadow-[16px_16px_0px_0px_rgba(10,10,10,1)] rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1598331668908-1478631bece3?q=80&w=2000&auto=format&fit=crop" alt="Studio Gear" className="object-cover w-full h-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
            <div className="absolute bottom-6 left-6 bg-[#EA580C] text-white px-4 py-2 font-black uppercase tracking-widest text-sm border-2 border-[#0A0A0A]">
              Creator Series
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Newsletter */}
      <footer className="bg-[#FAFAFA] pt-32 pb-12 border-b-8 border-[#0A0A0A]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h3 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-6">Join the drop list.</h3>
              <p className="font-medium text-[#525252] mb-8">Get exclusive access to new releases, restocks, and sales before anyone else.</p>
              
              <form className="flex border-2 border-[#0A0A0A] shadow-[8px_8px_0px_0px_rgba(10,10,10,1)] focus-within:shadow-[4px_4px_0px_0px_rgba(10,10,10,1)] focus-within:translate-x-1 focus-within:translate-y-1 transition-all">
                <input suppressHydrationWarning type="email" placeholder="ENTER YOUR EMAIL" className="flex-1 bg-transparent px-6 py-5 outline-none font-bold placeholder:text-[#A3A3A3] text-lg uppercase" />
                <button suppressHydrationWarning type="button" className="bg-[#0A0A0A] text-white px-8 font-black uppercase tracking-widest hover:bg-[#EA580C] transition-colors flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 stroke-[3]" />
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="font-black uppercase tracking-widest text-sm mb-6">Shop</p>
                <div className="flex flex-col gap-4 font-bold text-[#525252]">
                  <a href="#" className="hover:text-[#EA580C]">Audio</a>
                  <a href="#" className="hover:text-[#EA580C]">Computing</a>
                  <a href="#" className="hover:text-[#EA580C]">Wearables</a>
                  <a href="#" className="hover:text-[#EA580C]">Accessories</a>
                </div>
              </div>
              <div>
                <p className="font-black uppercase tracking-widest text-sm mb-6">Support</p>
                <div className="flex flex-col gap-4 font-bold text-[#525252]">
                  <a href="#" className="hover:text-[#EA580C]">FAQ</a>
                  <a href="#" className="hover:text-[#EA580C]">Shipping</a>
                  <a href="#" className="hover:text-[#EA580C]">Returns</a>
                  <a href="#" className="hover:text-[#EA580C]">Warranty</a>
                </div>
              </div>
              <div>
                <p className="font-black uppercase tracking-widest text-sm mb-6">Social</p>
                <div className="flex flex-col gap-4 font-bold text-[#525252]">
                  <a href="#" className="hover:text-[#EA580C]">Instagram</a>
                  <a href="#" className="hover:text-[#EA580C]">Twitter/X</a>
                  <a href="#" className="hover:text-[#EA580C]">TikTok</a>
                  <a href="#" className="hover:text-[#EA580C]">Discord</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t-2 border-[#E5E5E5] pt-8 font-bold text-sm text-[#A3A3A3]">
            <p>&copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#0A0A0A]">Privacy Policy</a>
              <a href="#" className="hover:text-[#0A0A0A]">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
