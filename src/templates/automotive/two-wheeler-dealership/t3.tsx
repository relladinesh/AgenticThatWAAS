
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShoppingCart, Menu, X, Star, ChevronRight, 
  Instagram, Facebook, Twitter, Youtube
} from "lucide-react";

const TwoWheelerDealershipT3 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "MotoX";

  const bikes = [
    {
      name: "KTM RC 8C",
      price: "$8000.00",
      img: "https://images.unsplash.com/photo-1558981420-c532902e58b4?w=600&q=80", // Alternative orange bike
    },
    {
      name: "Yamaha R15",
      price: "$6000.00",
      img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80", // Alternative blue/black bike
    },
    {
      name: "Yamaha R1",
      price: "$10000.00",
      img: "https://images.unsplash.com/photo-1620803350172-23c21a115403?w=600&q=80", // Alternative black bike
    },
    {
      name: "Ducati Panigale",
      price: "$15000.00",
      img: "https://images.unsplash.com/photo-1563281488-811cce4051b8?w=600&q=80", // Alternative red bike
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E50914] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center text-2xl font-black tracking-tighter">
            {name.replace('X', '')} <span className="text-[#E50914]">{name.includes('X') ? 'X' : ''}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-300">
            <a href="#" className="text-white hover:text-[#E50914] transition-colors">Home</a>
            <a href="#" className="hover:text-[#E50914] transition-colors flex items-center gap-1">Menu <ChevronRight className="w-3 h-3 rotate-90" /></a>
            <a href="#bikes" className="hover:text-[#E50914] transition-colors">Our Bikes</a>
            <a href="#about" className="hover:text-[#E50914] transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-6">
            <button className="relative p-2 bg-[#E50914] rounded-md hover:bg-red-700 transition-colors hidden md:block">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 p-6 flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-white hover:text-[#E50914]">Home</a>
            <a href="#" className="text-lg font-medium text-white hover:text-[#E50914]">Menu</a>
            <a href="#bikes" className="text-lg font-medium text-white hover:text-[#E50914]">Our Bikes</a>
            <a href="#about" className="text-lg font-medium text-white hover:text-[#E50914]">About</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Subtle Dotted Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-gray-400 font-medium tracking-widest uppercase mb-4 text-sm">
              Born To Ride
            </motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-black leading-[0.9] uppercase tracking-tighter mb-8">
              LIFE ON <br />
              <span className="text-[#E50914]">TWO WHEELS</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed mb-10">
              Risks can be mitigated, two wheels require always a balance and to be in balance there is no other way than sticking to your values. There is no compromise.
            </motion.p>
            <motion.button initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="bg-[#E50914] text-white px-8 py-3 font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(229,9,20,0.4)]">
              Contact Us
            </motion.button>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Soft Red Glow Behind Bike */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E50914] blur-[120px] rounded-full opacity-30 z-0"></div>
            <motion.img 
              initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop" 
              alt="Sports Bike" 
              className="relative z-20 w-full h-full object-contain scale-125 md:scale-150 origin-center drop-shadow-2xl"
              style={{ mixBlendMode: 'lighten' }}
            />
            <motion.img 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 0.4, x: -100 }} transition={{ duration: 1, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1620803350172-23c21a115403?w=600&q=80" 
              alt="Background Bike" 
              className="absolute top-1/2 right-0 -translate-y-1/2 z-10 w-[80%] h-[80%] object-contain scale-100 origin-center blur-[2px] hidden md:block"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>
        </div>
      </section>

      {/* THE RACING DNA */}
      <section id="bikes" className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E50914] blur-[150px] rounded-full opacity-10 pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">THE RACING DNA</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Ride as much or as little as you want. Just make sure to ride. That's what matters!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikes.map((bike, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1A1A1A] rounded-2xl overflow-hidden group cursor-pointer border border-[#2A2A2A] hover:border-[#E50914]/50 transition-colors">
                <div className="h-48 md:h-56 p-6 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                  <img src={bike.img} alt={bike.name} className="relative z-10 w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-6 pt-4 border-t border-[#2A2A2A]">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-[#E50914] text-[#E50914]" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-wider">{bike.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-gray-300 font-medium">{bike.price} <span className="text-xs text-gray-500 font-normal ml-1">(Ex-showroom)</span></div>
                    <button className="w-8 h-8 bg-[#E50914] rounded flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LET US HELP YOU ACCELERATE */}
      <section className="py-24 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">LET US HELP YOU TO<br/>ACCELERATE</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Ride as much or as little as you want. Just make sure to ride. That's what matters!</p>
          <button className="bg-[#E50914] text-white px-8 py-3 font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(229,9,20,0.4)]">
            Order Now
          </button>
        </div>
        
        {/* Abstract gear imagery or jacket textures */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1544604169-7c858b907577?w=600&q=80" alt="Gear" className="w-full h-full object-cover rounded-r-full mix-blend-screen" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1595183491741-f67b5f899e32?w=600&q=80" alt="Gloves" className="w-full h-full object-cover rounded-l-full mix-blend-screen" />
        </div>
      </section>

      {/* RED BANNER SECTION */}
      <section className="bg-[#E50914] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="text-white z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
              NO MATTER HOW BAD<br />
              YOUR DAY IS <span className="text-black">YOUR BIKE<br />
              WILL ALWAYS MAKE YOU<br />
              FEEL BETTER</span>
            </h2>
            <p className="text-white/80 font-medium">Some call it an adventure. We call it life.</p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80" 
              alt="White Red Sports Bike" 
              className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[140%] max-w-none object-contain scale-110 drop-shadow-2xl"
              style={{ filter: "drop-shadow(0px 30px 30px rgba(0,0,0,0.5))" }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT WITH US SECTION */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <div className="relative text-center md:text-left">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full z-0"></div>
             <div className="relative z-10">
               <p className="text-gray-400 text-lg mb-2">When Life Gets Complicated</p>
               <h2 className="text-6xl md:text-8xl font-black text-[#E50914] uppercase tracking-tighter">GO RIDE</h2>
             </div>
          </div>

          <div className="bg-[#0f0f0f] border border-[#222] p-8 md:p-10 rounded-2xl relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">CONTACT WITH US</h3>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Enter your name" className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors" />
              </div>
              <div>
                <input type="text" placeholder="Product ID" className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors" />
              </div>
              <div>
                <input type="tel" placeholder="Enter your phone number" className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors" />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="terms" className="accent-[#E50914]" />
                <label htmlFor="terms" className="text-xs text-gray-500">I agree to policies, privacy and receiving emails</label>
              </div>
              <button type="button" className="bg-[#E50914] text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors w-32 mt-6">
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* JOIN WITH US NEWSLETTER */}
      <section className="bg-[#E50914] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left max-w-md">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">JOIN WITH US</h3>
            <p className="text-sm text-white/80">Subscribe to our newsletter and get exclusive deals, new bike launches directly to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md bg-white/20 p-1 rounded">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent border-none text-white placeholder:text-white/60 px-4 focus:outline-none text-sm" />
            <button className="bg-black text-white px-6 py-2 text-sm font-bold uppercase hover:bg-gray-900 transition-colors">Subscribe</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-[#222]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="text-2xl font-black tracking-tighter mb-6">
              {name.replace('X', '')} <span className="text-[#E50914]">{name.includes('X') ? 'X' : ''}</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Ride as much or as little as you want. Just make sure to ride. That's what matters!
            </p>
            <p className="text-gray-400 text-xs">
              123 Street Name, City, Country<br/>
              Phone: +000 123 456 789<br/>
              Email: info@motox.com
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Important Links</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#E50914] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Our Products</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Bikes</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Bike Accessories</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Riding Gear</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Lubricants</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Admin Links</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-[#222] pt-8 gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
      
    </div>
    </>
  );
};

export default TwoWheelerDealershipT3;
