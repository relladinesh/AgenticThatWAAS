
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Search, ShoppingCart, ChevronDown, Play, 
  Star, ArrowUpRight, Menu, X, MapPin, Phone, Mail
} from "lucide-react";

const RestaurantDineInT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Foodie";
  const phone = data?.phone || "+1 234 567 890";
  const address = data?.address || "123 Food Street, Tasty City";

  const features = [
    {
      title: "Fast delivery",
      desc: "Promise to deliver within 30 mins",
      icon: "🛵"
    },
    {
      title: "Pick up",
      desc: "Pickup delivery at your doorstep",
      icon: "📍"
    },
    {
      title: "Dine in",
      desc: "Enjoy your food fresh crispy and hot",
      icon: "🍽️"
    }
  ];

  const popularDishes = [
    { name: "Spicy Chicken Burger", price: "$12.99", rating: 4.8, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { name: "Pasta Carbonara", price: "$14.50", rating: 4.9, img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80" },
    { name: "Margherita Pizza", price: "$16.00", rating: 4.7, img: "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?w=500&q=80" },
    { name: "Fresh Salad Bowl", price: "$9.99", rating: 4.6, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
    <div className="min-h-screen bg-[#FFFDF8] text-[#3e2723] font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFFDF8]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-3xl font-black tracking-tight text-[#3e2723]">
            <span className="text-[#F97316]">🍔</span> {name.split(' ')[0]}
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px] text-[#5d4037]">
            <a href="#" className="hover:text-[#F97316] transition-colors">Menu</a>
            <a href="#" className="hover:text-[#F97316] transition-colors">Offers</a>
            <a href="#" className="flex items-center gap-1 hover:text-[#F97316] transition-colors">Foods <ChevronDown className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#F97316] transition-colors">Services</a>
            <a href="#" className="flex items-center gap-1 hover:text-[#F97316] transition-colors">Restaurants <ChevronDown className="w-4 h-4" /></a>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-[#f5f5f5]">
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none w-32 text-sm text-[#3e2723] placeholder:text-gray-400" />
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-[#3e2723]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#EF4444] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">5</span>
            </div>

            <button className="flex items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] transition-colors text-[#3e2723] px-3 py-1.5 rounded-full font-semibold text-sm shadow-md">
              <div className="w-7 h-7 rounded-full bg-white overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-full h-full object-cover" />
              </div>
              <span>M. Jabel</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <button className="lg:hidden text-[#3e2723]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Subtle background waves */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] z-[-1] opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-radial-gradient(circle at top right, transparent, transparent 20px, #3e2723 20px, #3e2723 21px)' }}></div>

        {/* Left Content */}
        <div className="order-2 lg:order-1 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 bg-[#FFEDD5] text-[#EA580C] px-4 py-2 rounded-full font-semibold text-sm mb-6 shadow-sm">
            <span>🛵</span> Bike delivery
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-5xl md:text-[5.5rem] font-black leading-[1.1] text-[#3e2723] mb-6 tracking-tight">
            Fastest <br />
            <span className="text-[#EA580C]">Delivery</span> & <br />
            Easy <span className="text-[#EA580C]">Pickup</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-[#78909c] text-lg mb-10 max-w-md leading-relaxed">
            Food Delivery is a thriving business, and there are many opportunities for this Business as it Grows.
          </motion.p>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-6 mb-16">
            <button className="bg-[#FBBF24] text-[#3e2723] px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#FBBF24]/30 hover:bg-[#F59E0B] hover:-translate-y-1 transition-all">
              Order Now
            </button>
            <button className="flex items-center gap-3 font-bold text-[#3e2723] hover:text-[#EA580C] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-[#3e2723] group-hover:border-[#EA580C] flex items-center justify-center transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Order Process
            </button>
          </motion.div>

          {/* Features Stack */}
          <div className="space-y-4 max-w-md">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + (i * 0.1) }} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f5f5f5] hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#FFFDF8] border border-[#f0f0f0] flex items-center justify-center text-3xl shadow-inner">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#3e2723] text-[17px] mb-1">{feature.title}</h3>
                  <p className="text-[#78909c] text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content - Arch Image */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="relative w-full max-w-[500px] aspect-[4/5] bg-[#F5F1E6] rounded-t-full rounded-b-[40px] overflow-visible"
          >
            {/* Background Texture for Arch */}
            <div className="absolute inset-0 rounded-t-full rounded-b-[40px] opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)' }}></div>
            
            {/* Delivery Man Image (using a proxy image with transparent bg if possible, otherwise styled nicely) */}
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
              alt="Delivery Man" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none h-auto object-cover rounded-b-[40px] mix-blend-multiply"
              style={{ clipPath: 'inset(0 0 0 0 round 0 0 40px 40px)' }}
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 w-[280px] z-20"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md shrink-0">
                <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=200&q=80" alt="Noodle Chicken" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-[#3e2723] text-base mb-1">Noodle Chicken</h4>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-[#FBBF24] text-[#FBBF24]' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>
                <div className="text-xs text-gray-400 mb-2">(7 Reviews)</div>
                <a href="#" className="text-[#EA580C] text-sm font-bold flex items-center gap-1 hover:underline">
                  Get The Offer <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* POPULAR DISHES MENU */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#3e2723] mb-4">Our Popular Menu</h2>
          <p className="text-[#78909c] max-w-2xl mx-auto">Savor the flavor with our most loved dishes, prepared fresh to order.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularDishes.map((dish, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f5f5f5] hover:shadow-xl transition-shadow group cursor-pointer text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm z-10">
                <Star className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]" /> {dish.rating}
              </div>
              <div className="w-full aspect-square rounded-full overflow-hidden mb-6 mx-auto relative group-hover:-translate-y-2 transition-transform duration-500">
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-[#3e2723] mb-2 px-2 line-clamp-1">{dish.name}</h3>
              <div className="text-[#EA580C] font-black text-xl mb-4">{dish.price}</div>
              <button className="w-full bg-[#FFFDF8] border-2 border-[#3e2723] text-[#3e2723] py-2.5 rounded-full font-bold group-hover:bg-[#3e2723] group-hover:text-white transition-colors">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto bg-[#FBBF24] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-[#FBBF24]/20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, #3e2723 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-[#3e2723] mb-6 leading-tight">Get 20% Discount On Your First Order</h2>
            <p className="text-[#5d4037] text-lg mb-8">Sign up today and experience the best food delivery service in town with an exclusive welcome offer.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <input type="email" placeholder="Enter your email" className="w-full sm:w-auto px-6 py-4 rounded-full border-none outline-none text-[#3e2723] shadow-inner font-medium" />
              <button className="w-full sm:w-auto bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#EA580C]/30 hover:bg-[#c2410c] transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-1/3">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80" alt="Burger" className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FFFDF8] pt-24 pb-12 border-t border-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-3xl font-black tracking-tight text-[#3e2723] mb-6">
              <span className="text-[#F97316]">🍔</span> {name.split(' ')[0]}
            </div>
            <p className="text-[#78909c] text-sm leading-relaxed mb-6">
              Your favorite food delivery partner. We bring the best restaurants straight to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#3e2723] mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#78909c]">
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#3e2723] mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-[#78909c]">
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Food Delivery</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Table Booking</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Event Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#3e2723] mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm text-[#78909c]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span>hello@foodie.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-[#f5f5f5] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#78909c]">&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[#78909c] hover:text-[#EA580C] font-semibold text-sm">Terms of Service</a>
            <a href="#" className="text-[#78909c] hover:text-[#EA580C] font-semibold text-sm">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};

export default RestaurantDineInT2;
