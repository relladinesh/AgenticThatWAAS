
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  MapPin, Search, Heart, Home, 
  Building, Star, Wifi, Dumbbell, 
  Coffee, Shield, ArrowRight, Menu, X
} from "lucide-react";

export default function RentalPropertiesT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const businessData = {
    name: data?.title || data?.name || "Lumina Rentals",
    email: data?.email || "leasing@luminarentals.com",
    phone: data?.phone || "+1 (888) 555-0199",
    address: data?.address || "One Lumina Plaza, NY",
    tagline: data?.tagline || "Curated urban living spaces for the modern professional.",
  };

  const navLinks = ["Explore", "Neighborhoods", "Amenities", "Contact"];
  const filters = ["All", "Penthouses", "Lofts", "Studios"];

  const properties = [
    { name: "The Obsidian Penthouse", price: "$4,500/mo", beds: 2, baths: 2, type: "Penthouses", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop" },
    { name: "Skyline Glass Loft", price: "$3,200/mo", beds: 1, baths: 1.5, type: "Lofts", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" },
    { name: "Neon District Studio", price: "$2,800/mo", beds: 1, baths: 1, type: "Studios", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop" },
    { name: "Aura Tower Residences", price: "$5,100/mo", beds: 3, baths: 2, type: "Penthouses", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" },
  ];

  const amenities = [
    { icon: Wifi, title: "Gigabit Fiber", desc: "Enterprise-grade internet included in all units." },
    { icon: Dumbbell, title: "Wellness Center", desc: "Peloton-equipped gym, sauna, and yoga studio." },
    { icon: Coffee, title: "Co-Working Lounge", desc: "Private pods, conference rooms, and espresso bar." },
    { icon: Shield, title: "Biometric Access", desc: "Keyless entry and 24/7 digital concierge security." }
  ];

  const filteredProperties = activeFilter === "All" ? properties : properties.filter(p => p.type === activeFilter);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#3B82F6] selection:text-white overflow-clip relative">
      
      {/* Dynamic Background Gradients */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#3B82F6]/10 blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8B5CF6]/10 blur-[150px] pointer-events-none mix-blend-multiply"></div>

      {/* Floating Apple-Style Dock Navigation (Desktop) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-3xl border border-[#E2E8F0] px-4 py-3 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="flex items-center pr-6 border-r border-[#E2E8F0] mr-2">
           <Building className="w-5 h-5 text-[#3B82F6] mr-2" />
           <span className="font-bold text-sm tracking-tight text-[#0F172A]">{businessData.name.split(" ")[0]}</span>
        </div>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="px-5 py-2 rounded-full text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-all">
            {link}
          </a>
        ))}
        <a href="#contact" className="ml-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all">
          Book Tour
        </a>
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] px-6 py-4 flex justify-between items-center shadow-sm">
        <span className="font-bold text-xl tracking-tight flex items-center gap-2 text-[#0F172A]">
          <Building className="w-5 h-5 text-[#3B82F6]" /> {businessData.name}
        </span>
        <button suppressHydrationWarning onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0F172A]">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold border-b border-[#E2E8F0] pb-4 text-[#0F172A]">
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-[#3B82F6] text-white text-center py-4 rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
              Book a Tour
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Map & Search Hero */}
      <section className="relative pt-32 lg:pt-0 min-h-[100svh] flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-12 max-w-[1800px] mx-auto z-10">
        
        {/* Left Typography */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-sm font-bold text-[#2563EB] mb-8">
              <Star className="w-4 h-4" /> Next-Generation Living Spaces
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-[80px] font-extrabold tracking-tighter leading-[1.1] mb-6 text-[#0F172A]">
              Find Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Perfect</span> Urban <br/> Sanctuary.
            </h1>
            <p className="text-xl text-[#475569] mb-10 max-w-md leading-relaxed">
              {businessData.tagline} Immerse yourself in spaces designed for aesthetics, performance, and unparalleled comfort.
            </p>

            {/* Glassmorphic Search Bar */}
            <div className="bg-white/80 backdrop-blur-2xl border border-[#E2E8F0] p-2 rounded-2xl flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.06)] max-w-lg">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-[#94A3B8] mr-3" />
                <input suppressHydrationWarning type="text" placeholder="Search neighborhoods, zips..." className="w-full bg-transparent text-[#0F172A] placeholder-[#94A3B8] outline-none font-medium" />
              </div>
              <button suppressHydrationWarning className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-sm">
                Search
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right "Map UI" Parallax Element */}
        <div className="w-full lg:w-7/12 relative h-[50vh] lg:h-[85vh]">
           <motion.div style={{ y: yParallax }} className="absolute inset-0 bg-white/60 backdrop-blur-3xl border border-[#E2E8F0] rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)] flex items-center justify-center">
              {/* Decorative Map Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
              
              {/* Floating Property Cards */}
              <motion.div style={{ y: yParallaxSlow }} className="absolute top-[15%] left-[10%] bg-white/90 backdrop-blur-xl border border-[#E2E8F0] p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                 <div className="w-16 h-16 rounded-xl overflow-hidden relative"><img src={properties[0].img} alt="" className="object-cover w-full h-full"/></div>
                 <div>
                   <p className="font-bold text-sm text-[#0F172A]">{properties[0].name}</p>
                   <p className="text-[#3B82F6] font-bold">{properties[0].price}</p>
                 </div>
              </motion.div>

              <motion.div style={{ y: yParallax }} className="absolute bottom-[20%] right-[10%] bg-white/90 backdrop-blur-xl border border-[#E2E8F0] p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                 <div className="w-16 h-16 rounded-xl overflow-hidden relative"><img src={properties[1].img} alt="" className="object-cover w-full h-full"/></div>
                 <div>
                   <p className="font-bold text-sm text-[#0F172A]">{properties[1].name}</p>
                   <p className="text-[#8B5CF6] font-bold">{properties[1].price}</p>
                 </div>
              </motion.div>

              {/* Center Radar */}
              <div className="w-32 h-32 border border-[#3B82F6]/30 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#3B82F6]" />
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Dynamic Property Gallery */}
      <section id="explore" className="py-32 relative z-10 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4 text-[#0F172A]">Curated Residences</h2>
              <p className="text-[#475569] text-lg max-w-md">Discover properties meticulously vetted for design, location, and unparalleled amenities.</p>
            </div>
            
            <div className="flex gap-2 p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl shadow-inner">
              {filters.map(filter => (
                <button
                  suppressHydrationWarning
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeFilter === filter ? "bg-white text-[#0F172A] shadow-sm border border-[#E2E8F0]" : "text-[#64748B] hover:text-[#0F172A]"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProperties.map((prop, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={prop.name} 
                  className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-[#CBD5E1] transition-all cursor-pointer"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <img src={prop.img} alt={prop.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#ef4444] hover:text-white text-[#0F172A] transition-colors shadow-sm">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-[#E2E8F0] text-[#0F172A] shadow-sm">
                      {prop.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold leading-tight text-[#0F172A]">{prop.name}</h3>
                      <p className="text-[#3B82F6] font-extrabold text-xl">{prop.price}</p>
                    </div>
                    <div className="flex gap-4 text-[#64748B] text-sm font-medium border-t border-[#F1F5F9] pt-4 mt-4">
                      <span className="flex items-center gap-1.5"><Home className="w-4 h-4"/> {prop.beds} Beds</span>
                      <span className="flex items-center gap-1.5">🛀 {prop.baths} Baths</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 flex justify-center">
            <button suppressHydrationWarning className="bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-sm">
              Load More Listings <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
            </button>
          </div>
        </div>
      </section>

      {/* Glowing Amenities Grid */}
      <section id="amenities" className="py-32 bg-[#F8FAFC] relative z-10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-[#0F172A]">Uncompromising Quality</h2>
            <p className="text-xl text-[#475569]">Every property in our network is held to the highest standard of modern living.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-[#E2E8F0] hover:border-[#3B82F6]/50 hover:shadow-xl transition-all group relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center border border-[#E2E8F0] mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    <amenity.icon className="w-7 h-7 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">{amenity.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">{amenity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Contact / Tour Form */}
      <section id="contact" className="py-32 bg-white relative z-10 border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8 text-[#0F172A]">Ready to Elevate?</h2>
          <p className="text-xl text-[#475569] mb-12 max-w-2xl mx-auto">
            Schedule a private, guided tour of our exclusive listings. Virtual and in-person viewings available.
          </p>

          <div className="bg-white border border-[#E2E8F0] rounded-[3rem] p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.06)] text-left relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <form className="relative z-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#475569] mb-2 pl-4">Full Name</label>
                  <input suppressHydrationWarning type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-[#0F172A]" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#475569] mb-2 pl-4">Email Address</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-[#0F172A]" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#475569] mb-2 pl-4">Select Property Type</label>
                <select suppressHydrationWarning className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all appearance-none cursor-pointer text-[#0F172A] font-medium">
                  <option>Penthouse Collection</option>
                  <option>Designer Lofts</option>
                  <option>Executive Studios</option>
                  <option>Unsure - Show me options</option>
                </select>
              </div>
              <button suppressHydrationWarning type="button" className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-lg py-5 rounded-2xl transition-all shadow-[0_10px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:-translate-y-0.5">
                Confirm Tour Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#0F172A] py-12 px-6 relative z-10 pb-32 lg:pb-12 text-white">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Building className="w-6 h-6 text-[#3B82F6]" />
             <span className="font-bold text-xl tracking-tight">{businessData.name}</span>
          </div>
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} {businessData.name}. Elevating urban living.</p>
          <div className="flex gap-6 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Fair Housing</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
