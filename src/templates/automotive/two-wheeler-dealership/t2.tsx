
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Search, Heart, User, 
  ArrowRight, ArrowUpRight, Play, Star, 
  Settings, Zap, MapPin, Phone, Mail, ChevronRight
} from "lucide-react";

const TwoWheelerDealershipT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState<any | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Velocity Motors";
  const phone = data?.phone || "+91 98765 43210";
  const address = data?.address || "123 Apex Avenue, Performance District";

  const bikes = [
    {
      id: 1,
      name: "Stryker 900",
      brand: "Apex Motorsport",
      price: "₹ 8,90,000",
      rating: "5.0",
      variants: "1 Variant",
      img: "/hero-bike.jpg",
      desc: "The pinnacle of high-performance engineering. Features a stunning matte black finish, carbon fiber details, and striking neon accents."
    },
    {
      id: 2,
      name: "Classic 350",
      brand: "Royal Enfield",
      price: "₹ 1,89,000",
      rating: "5.0",
      variants: "5 Variants",
      img: "https://images.unsplash.com/photo-1620803350172-23c21a115403?w=800&q=80",
      desc: "The timeless classic, reborn. Experience the legacy of pure motorcycling with unmatched elegance."
    },
    {
      id: 3,
      name: "Pulsar NS200",
      brand: "Bajaj",
      price: "₹ 1,45,000",
      rating: "4.7",
      variants: "2 Variants",
      img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&q=80",
      desc: "Aggressive street fighter styling combined with raw, unadulterated power for the urban jungle."
    },
    {
      id: 4,
      name: "Honda SP 125",
      brand: "Honda",
      price: "₹ 99,000",
      rating: "4.8",
      variants: "3 Variants",
      img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
      desc: "An incredible blend of efficiency and style. Engineered meticulously for the modern commuter."
    }
  ];

  // Mobile App Sidebar
  const Sidebar = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-[400px] bg-[#09090B] z-[70] text-white p-8 shadow-2xl flex flex-col xl:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="text-2xl font-black tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FF4F00] rounded-lg flex items-center justify-center text-white text-sm">
                  {name.charAt(0)}
                </div>
                {name}
              </div>
              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors" onClick={() => setIsMenuOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-4 flex-1">
              {['Home', 'Inventory', 'Services', 'About Us', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between text-2xl font-bold py-3 border-b border-white/10 hover:text-[#FF4F00] transition-colors group">
                  {item}
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </a>
              ))}
            </nav>
            
            <div className="mt-auto pt-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-sm text-gray-400 mb-4">Need assistance?</p>
                <a href={`tel:${phone}`} className="flex items-center gap-3 text-lg font-bold hover:text-[#FF4F00] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#FF4F00]/20 flex items-center justify-center text-[#FF4F00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  {phone}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-white text-[#09090B] font-outfit selection:bg-[#FF4F00] selection:text-white relative">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        html { scroll-behavior: smooth; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <Sidebar />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 z-50">
            <div className="w-10 h-10 rounded-xl bg-[#09090B] flex items-center justify-center text-white font-black text-xl shadow-lg">
              {name.charAt(0)}
            </div>
            <span className="font-black text-xl tracking-tight hidden sm:block">{name}</span>
          </div>
          
          <nav className="hidden xl:flex items-center gap-10 font-semibold text-sm tracking-wide">
            <a href="#" className="hover:text-[#FF4F00] transition-colors">Home</a>
            <a href="#inventory" className="hover:text-[#FF4F00] transition-colors">Inventory</a>
            <a href="#services" className="hover:text-[#FF4F00] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#FF4F00] transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:border-gray-900 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:border-gray-900 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button className="hidden sm:flex px-6 py-2.5 bg-[#09090B] text-white rounded-full font-bold text-sm hover:bg-[#FF4F00] transition-colors">
              Book Ride
            </button>
            <button className="xl:hidden w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] pt-28 pb-12 flex items-center justify-center overflow-hidden bg-[#F4F4F5]">
        {/* Abstract Blur Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF4F00]/20 to-orange-400/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[100svh] lg:min-h-0 justify-center">
           
           {/* TEXT CONTENT */}
           <div className="relative z-20 text-left pt-32 pb-12 lg:pt-0 w-full flex flex-col justify-center h-full lg:col-span-5">
             <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease: "easeOut"}}>
               <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                 Ride The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F00] to-orange-500">Future.</span>
               </h1>
             </motion.div>
             <motion.p initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2, ease: "easeOut"}} className="mt-6 text-lg sm:text-xl text-gray-800 lg:text-gray-600 font-semibold lg:font-normal max-w-[280px] sm:max-w-md lg:max-w-lg lg:mx-0">
               Experience uncompromised power and world-class engineering. Discover our premium collection of performance motorcycles.
             </motion.p>
             <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.4, ease: "easeOut"}} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-start">
               <a href="#inventory" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-[#09090B] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#FF4F00] hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10">
                 Explore Lineup <ArrowRight className="w-5 h-5" />
               </a>
               <button className="w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full border-2 border-[#09090B] lg:border-gray-300 font-bold flex items-center justify-center gap-3 hover:border-[#FF4F00] lg:hover:border-gray-900 transition-colors">
                 <Play className="w-5 h-5" /> Watch Video
               </button>
             </motion.div>
             
             {/* Stats */}
             <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.8}} className="mt-16 flex flex-wrap items-center justify-start gap-6 sm:gap-12 border-t border-gray-900/20 lg:border-gray-300 pt-8 w-full">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#09090B]">15k+</div>
                  <div className="text-xs sm:text-sm font-bold lg:font-medium text-gray-800 lg:text-gray-500">Bikes Sold</div>
                </div>
                <div className="w-px h-10 bg-gray-900/20 lg:bg-gray-300 hidden sm:block"></div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#09090B]">4.9</div>
                  <div className="text-xs sm:text-sm font-bold lg:font-medium text-gray-800 lg:text-gray-500">User Rating</div>
                </div>
                <div className="w-px h-10 bg-gray-900/20 lg:bg-gray-300 hidden sm:block"></div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#09090B]">20+</div>
                  <div className="text-xs sm:text-sm font-bold lg:font-medium text-gray-800 lg:text-gray-500">Top Brands</div>
                </div>
             </motion.div>
           </div>

           {/* IMAGE (Background on Mobile) */}
           <div className="absolute inset-0 lg:relative lg:inset-auto h-full lg:h-[100svh] w-full flex items-center justify-center z-10 lg:z-10 pointer-events-none lg:pointer-events-auto overflow-hidden lg:overflow-visible lg:col-span-7">
             <div className="absolute inset-0 bg-gradient-to-r from-[#F4F4F5] via-[#F4F4F5]/80 to-transparent z-20 lg:hidden" />
             <motion.img 
               initial={{opacity:0, scale:0.8, x: 50, rotate: -5}}
               animate={{opacity:1, scale:1, x: 0, rotate: 0}}
               transition={{duration:1.2, type:"spring", bounce: 0.4}}
               src={bikes[0].img}
               alt="Hero Bike"
               className="w-full h-full object-cover object-[75%_center] lg:object-contain lg:object-center mix-blend-multiply filter drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)] z-10"
             />
             {/* Decorative Circle */}
             <motion.div 
               initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 1, delay: 0.3}}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[100%] lg:w-[80%] aspect-square rounded-full border border-gray-400 lg:border-gray-300 border-dashed z-0"
             />
           </div>
        </div>
      </section>

      {/* FEATURED INVENTORY (BENTO GRID) */}
      <section id="inventory" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#FF4F00] tracking-widest uppercase mb-3">The Garage</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#09090B] leading-[1.1]">Featured <br/> Models</h3>
            </div>
            <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-[#FF4F00] transition-colors group w-max">
              View Full Lineup 
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FF4F00]/10 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {bikes.map((bike, i) => (
               <motion.div 
                 initial={{opacity: 0, y: 40}}
                 whileInView={{opacity: 1, y: 0}}
                 viewport={{once: true, margin: "-100px"}}
                 transition={{duration: 0.6, delay: i * 0.1, ease: "easeOut"}}
                 key={bike.id}
                 className={`bg-[#F4F4F5] rounded-[2rem] p-6 sm:p-8 group cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200/50 hover:border-gray-300 relative overflow-hidden ${i === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col' : 'flex flex-col'}`}
                 onClick={() => setSelectedBike(bike)}
               >
                 <div className="flex justify-between items-start mb-6 relative z-10">
                   <div>
                     <p className="text-[#FF4F00] font-bold text-xs tracking-widest uppercase mb-1">{bike.brand}</p>
                     <h4 className={`${i === 0 ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'} font-black text-[#09090B]`}>{bike.name}</h4>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-[#09090B] group-hover:text-white transition-colors">
                     <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                   </div>
                 </div>
                 
                 <div className={`relative w-full ${i === 0 ? 'h-64 sm:h-96 mt-auto' : 'h-48 sm:h-56 my-6'} flex items-center justify-center z-10`}>
                   <img src={bike.img} alt={bike.name} className={`w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out filter drop-shadow-xl ${i === 0 ? 'object-right-bottom' : 'object-center'}`} />
                 </div>
                 
                 <div className="flex justify-between items-end border-t border-gray-300 pt-6 mt-auto relative z-10">
                   <div>
                     <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Starting at</p>
                     <p className={`${i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-black text-[#09090B]`}>{bike.price}</p>
                   </div>
                   <div className="flex items-center gap-1.5 text-sm font-bold bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                     <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {bike.rating}
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* SERVICES / DEALERSHIP ADVANTAGE (DARK SECTION) */}
      <section id="services" className="py-24 sm:py-32 bg-[#09090B] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4F00]/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#FF4F00] tracking-widest uppercase mb-3">Our Advantage</h2>
              <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-8 leading-[1.1]">Why Ride <br/> With Us?</h3>
              <p className="text-gray-400 text-lg sm:text-xl mb-12 leading-relaxed max-w-lg">
                We don't just sell motorcycles; we deliver an unmatched ownership experience. From exclusive financing to world-class servicing, we fuel your passion.
              </p>
              
              <div className="space-y-8">
                <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.5}} className="flex gap-5">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                     <Settings className="w-8 h-8 text-[#FF4F00]" />
                   </div>
                   <div>
                     <h4 className="text-xl sm:text-2xl font-bold mb-2">Expert Servicing</h4>
                     <p className="text-gray-400 leading-relaxed">Factory-trained technicians utilizing state-of-the-art diagnostic equipment to keep your machine flawless.</p>
                   </div>
                </motion.div>
                
                <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0.1}} className="flex gap-5">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                     <Zap className="w-8 h-8 text-[#FF4F00]" />
                   </div>
                   <div>
                     <h4 className="text-xl sm:text-2xl font-bold mb-2">Instant Financing</h4>
                     <p className="text-gray-400 leading-relaxed">Get pre-approved in minutes with our highly competitive rates and flexible, rider-focused terms.</p>
                   </div>
                </motion.div>
              </div>
              
              <button className="mt-12 px-8 py-4 bg-white text-[#09090B] rounded-full font-bold flex items-center gap-2 hover:bg-[#FF4F00] hover:text-white transition-all">
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <motion.div 
              initial={{opacity:0, scale:0.95}} 
              whileInView={{opacity:1, scale:1}} 
              viewport={{once:true}} 
              transition={{duration:0.8}}
              className="relative h-[400px] sm:h-[600px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1000&q=80" alt="Dealership Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl flex items-center justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">10k+</div>
                    <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-bold">Happy Riders</div>
                  </div>
                  <div className="w-px h-16 bg-white/20" />
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">15+</div>
                    <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-bold">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#09090B] flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  {name.charAt(0)}
                </div>
                <span className="font-black text-2xl tracking-tight">{name}</span>
              </div>
              <p className="text-gray-500 mb-8 leading-relaxed">
                The ultimate destination for premium motorcycles. Ride with passion, perform with excellence.
              </p>
              <div className="flex items-center gap-4">
                {['facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FF4F00] hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current" style={{maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>')`, maskSize: 'cover'}} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Inventory</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Pre-Owned</a></li>
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Test Rides</a></li>
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Special Offers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Book Service</a></li>
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-[#FF4F00] transition-colors">Spare Parts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Visit Us</h4>
              <ul className="space-y-5 text-gray-500 font-medium">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF4F00] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="mt-2">{address}</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF4F00] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{phone}</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF4F00] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@velocitymotors.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-400">
            <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* PREMIUM BIKE DETAILS MODAL */}
      <AnimatePresence>
        {selectedBike && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative flex flex-col lg:flex-row no-scrollbar"
            >
              <button 
                onClick={() => setSelectedBike(null)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 z-50 transition-colors shadow-sm"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              <div className="w-full lg:w-[55%] bg-[#F4F4F5] p-8 sm:p-12 lg:p-20 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)]" />
                <motion.img 
                  initial={{ x: -100, opacity: 0, rotate: -5 }} 
                  animate={{ x: 0, opacity: 1, rotate: 0 }} 
                  transition={{ delay: 0.2, type: "spring", damping: 20 }}
                  src={selectedBike.img} alt={selectedBike.name} 
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)] relative z-10" 
                />
              </div>
              
              <div className="w-full lg:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col bg-white relative z-20 rounded-t-[2rem] lg:rounded-t-none -mt-8 lg:mt-0">
                <div className="mb-8">
                  <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="text-[#FF4F00] font-bold tracking-widest uppercase text-sm mb-2">{selectedBike.brand}</motion.p>
                  <motion.h2 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="text-4xl sm:text-5xl font-black text-[#09090B] mb-4 uppercase tracking-tight">{selectedBike.name}</motion.h2>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.5}} className="text-3xl font-black text-gray-400">{selectedBike.price}</motion.div>
                </div>
                
                <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.6}} className="text-gray-600 text-lg leading-relaxed mb-10">
                  {selectedBike.desc}
                </motion.p>
                
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.7}} className="grid grid-cols-2 gap-4 mb-10">
                  <div className="border border-gray-200 rounded-3xl p-5 bg-gray-50">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Rating</p>
                    <div className="flex items-center gap-2 font-black text-2xl text-[#09090B]"><Star className="w-6 h-6 fill-yellow-400 text-yellow-400" /> {selectedBike.rating}</div>
                  </div>
                  <div className="border border-gray-200 rounded-3xl p-5 bg-gray-50">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Available</p>
                    <div className="font-black text-2xl text-[#09090B]">{selectedBike.variants}</div>
                  </div>
                </motion.div>
                
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.8}} className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-5 bg-[#09090B] text-white rounded-full font-bold text-lg hover:bg-[#FF4F00] hover:scale-[1.02] transition-all shadow-xl shadow-black/10">
                    Book Test Ride
                  </button>
                  <button className="h-[68px] sm:w-[68px] rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-colors group">
                    <Heart className="w-6 h-6 text-gray-400 group-hover:text-red-500 group-hover:fill-red-500 transition-colors" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TwoWheelerDealershipT2;
