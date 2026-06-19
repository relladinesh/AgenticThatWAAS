
import { TemplateProps, BakeryData } from "@/types";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Star, ChevronRight, ShoppingBag } from "lucide-react";

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function BakeryTemplate3({ data }: TemplateProps) {
  const bakery = data as BakeryData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dynamicImages, setDynamicImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1589367920969-19614cb9fdfa?w=800&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=800&q=80",
    "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=800&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    "https://images.unsplash.com/photo-1517433622965-0e6a5414d316?w=800&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
  ]);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Shuffle images on client mount to ensure uniqueness per load
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

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  const bestSellers = bakery.bestSellers?.length ? bakery.bestSellers : [
    { name: "Signature Sourdough", price: "$12", description: "Naturally leavened, 48-hour fermentation." },
    { name: "Almond Croissant", price: "$6", description: "Twice-baked with frangipane filling." },
    { name: "Cruffin Selection", price: "$8", description: "Flaky layers with seasonal creams." },
    { name: "Artisan Baguette", price: "$5", description: "Traditional French technique." }
  ];

  const teamData = bakery.team?.length ? bakery.team : [
    { name: "Elena Rostova", role: "Executive Pastry Chef", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80" },
    { name: "Marcus Chen", role: "Head Baker", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" },
    { name: "Sarah Jenkins", role: "Viennoiserie Specialist", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A0A0A] selection:bg-[#E8A365] selection:text-white overflow-x-hidden">
      
      {/* SaaS-Level Glassmorphism Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-6"}`}>
        <div className={`max-w-[90rem] mx-auto px-6 transition-all duration-500 ${isScrolled ? "w-[95%] md:w-[80%]" : "w-full"}`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 rounded-2xl px-6 py-3" : "px-2"}`}>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-black tracking-tighter"
            >
              {bakery.name || "Aura Bakery"}
              <span className="text-[#E8A365]">.</span>
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              {["Home", "About", "Our Menu", "Artisans", "Contact"].map((item, i) => {
                const linkId = item === "Home" ? "#" : `#${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <motion.a 
                    key={item}
                    href={linkId}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm font-medium text-[#4A4A4A] hover:text-[#0A0A0A] transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E8A365] transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 text-[#0A0A0A]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-2xl font-black tracking-tighter">{bakery.name || "Aura Bakery"}<span className="text-[#E8A365]">.</span></div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-3xl font-bold tracking-tight">
              {["Home", "About", "Our Menu", "Artisans", "Contact"].map((item, i) => {
                const linkId = item === "Home" ? "#" : `#${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <motion.a 
                    key={item}
                    href={linkId}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    className="hover:text-[#E8A365] transition-colors"
                  >
                    {item}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">{bakery.address || "123 Innovation Drive, Tech District"}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Hero Section with Spatial Design */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        {/* Abstract Background Shapes */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#fde68a]/30 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#fed7aa]/20 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"
        ></motion.div>

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="max-w-2xl z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Freshly baked today</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black leading-[1.05] tracking-tighter mb-6 text-[#0A0A0A]">
              The New Standard of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A365] to-[#d97706]">Artisan Baking.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg">
              {bakery.about || "Experience the perfect synthesis of century-old techniques and modern culinary innovation."}
            </p>
            
            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4 pt-8 border-t border-gray-200/60">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Customer" />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#E8A365]">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-semibold text-gray-500 mt-1">Loved by 2,000+ customers</span>
              </div>
            </div>
          </motion.div>

          {/* SaaS-style Hero Image Grid */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              <motion.div style={{ y: y1 }} className="space-y-4 pt-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-full h-64 rounded-3xl overflow-hidden shadow-2xl relative group"
                >
                  <img src={getImg("https://images.unsplash.com/photo-1589367920969-19614cb9fdfa", 0)} alt="Bread" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="w-full h-48 rounded-3xl overflow-hidden shadow-xl relative group"
                >
                  <img src={getImg("https://images.unsplash.com/photo-1578985545062-69928b1d9587", 1)} alt="Pastry" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
              </motion.div>
              <motion.div style={{ y: y2 }} className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="w-full h-48 rounded-3xl overflow-hidden shadow-xl relative group"
                >
                  <img src={getImg("https://images.unsplash.com/photo-1534620808146-d33bb39128b2", 2)} alt="Cake" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="w-full h-64 rounded-3xl overflow-hidden shadow-2xl relative group"
                >
                  <img src={bakery.image || getImg("https://images.unsplash.com/photo-1560180474-e8563fd75bab", 3)} alt="Signature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Floating SaaS Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Just Sold</p>
                      <p className="text-sm font-black text-[#0A0A0A]">Signature Sourdough</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile Hero Image */}
          <div className="lg:hidden w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl relative mt-8">
            <img src={bakery.image || getImg("https://images.unsplash.com/photo-1589367920969-19614cb9fdfa", 0)} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Bento Grid About Section */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-[90rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A0A0A] mb-4">Crafted with Precision.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Why our customers keep coming back for more.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Item 1 - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#F8F9FA] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative z-10 max-w-md">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-[#E8A365]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Premium Ingredients</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  We source our flour globally, partner with local dairy farms, and use only organic, unrefined sugars. Every element is chosen for uncompromising quality.
                </p>
              </div>
              <img src={getImg("https://images.unsplash.com/photo-1578985545062-69928b1d9587", 1)} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-multiply" alt="bg" />
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A0A0A] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(232,163,101,0.2)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8A365]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-5xl font-black mb-2 tracking-tighter">48<span className="text-[#E8A365]">h</span></h3>
                <p className="font-bold text-xl mb-2">Fermentation</p>
                <p className="text-gray-400 text-sm font-medium">Our signature sourdough takes time. We never rush perfection.</p>
              </div>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:border-[#E8A365]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
               <div className="w-16 h-16 bg-[#FDF8F3] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-[#E8A365]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Locally Loved</h3>
                <p className="text-gray-500 text-sm font-medium">Voted #1 Artisan Bakery in the district for 3 consecutive years.</p>
            </motion.div>

            {/* Bento Item 4 - Wide Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 rounded-3xl overflow-hidden relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <img src={getImg("https://images.unsplash.com/photo-1509440159596-0249088772ff", 4)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Baking Process" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">The Art of Viennoiserie</h3>
                  <p className="text-white/80 font-medium">Mastering the lamination process for the perfect honeycomb structure.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll / Modern Grid Menu */}
      <section id="our-menu" className="py-24 bg-[#FAFAFA] px-6 overflow-hidden">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A0A0A] mb-4">Our Menu.</h2>
              <p className="text-lg text-gray-500 font-medium">Explore our meticulously crafted collection.</p>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#0A0A0A] font-bold hover:text-[#E8A365] transition-colors"
            >
              View Full Menu <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bestSellers.slice(0,4).map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                  <img src={getImg("https://images.unsplash.com/photo-1589367920969-19614cb9fdfa", i + 5)} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out" alt={item.name} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0A0A0A] font-bold px-3 py-1.5 rounded-full text-sm shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">{item.description}</p>
                  <button className="w-full py-3 bg-[#F8F9FA] hover:bg-[#0A0A0A] hover:text-white rounded-xl font-semibold transition-colors duration-300 text-sm">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Artisans / Team - Sleek Dark Mode Section */}
      <section id="artisans" className="py-24 bg-[#0A0A0A] text-white px-6">
        <div className="max-w-[90rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">The Artisans.</h2>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">The passionate hands and creative minds behind every bake.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.slice(0,3).map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[#E8A365] font-bold text-sm tracking-widest uppercase mb-2">{member.role}</p>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Dual-Pane Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden text-[#0A0A0A]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8A365]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                Let's Create <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A365] to-[#d97706]">Something Sweet.</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed">
                Whether it's a bespoke cake for a special occasion, a wholesale inquiry for your café, or just to say hello—our artisans are ready to collaborate.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDF8F3] flex items-center justify-center border border-[#E8A365]/20 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#E8A365]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Visit Us</h4>
                    <p className="text-lg font-bold text-[#0A0A0A]">{bakery.address || "123 Artisan Way, Luxury District, NY 10001"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDF8F3] flex items-center justify-center border border-[#E8A365]/20 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#E8A365]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</h4>
                    <p className="text-lg font-bold text-[#0A0A0A]">{bakery.phone || "+1 234 567 890"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDF8F3] flex items-center justify-center border border-[#E8A365]/20 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#E8A365]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</h4>
                    <p className="text-lg font-bold text-[#0A0A0A]">{bakery.email || "hello@aurabakery.com"}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative"
            >
              <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0A0A0A] focus:outline-none focus:border-[#E8A365] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0A0A0A] focus:outline-none focus:border-[#E8A365] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0A0A0A] focus:outline-none focus:border-[#E8A365] transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0A0A0A] focus:outline-none focus:border-[#E8A365] transition-colors resize-none"></textarea>
                </div>

                <button className="w-full bg-[#0A0A0A] text-white font-bold text-lg rounded-xl px-8 py-4 mt-4 hover:bg-[#E8A365] transition-all duration-300 shadow-xl shadow-[#0A0A0A]/10 hover:shadow-[#E8A365]/30">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* SaaS-Level Footer */}
      <footer className="bg-[#0A0A0A] pt-20 pb-10 px-6 text-white border-t border-white/10">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="text-3xl font-black tracking-tighter mb-6">
                {bakery.name || "Aura Bakery"}
                <span className="text-[#E8A365]">.</span>
              </div>
              <p className="text-gray-400 text-sm font-medium max-w-sm leading-relaxed mb-8">
                Elevating the art of baking through precision, passion, and the finest ingredients globally sourced.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E8A365] hover:text-white transition-all text-gray-400">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "About Us", "Our Menu", "The Artisans", "Contact"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm font-medium">
            <p>© {new Date().getFullYear()} {bakery.name || "Aura Bakery"}. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">Designed with <Star className="w-4 h-4 text-[#E8A365]" /></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
