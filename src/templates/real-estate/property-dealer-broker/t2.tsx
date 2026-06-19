
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, ArrowRight, MapPin, Phone, Mail, 
  Home, Building2, Key, Search, ChevronLeft, ChevronRight,
  TrendingUp, Award, Clock
} from "lucide-react";

export default function PropertyDealerT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePropertyIndex, setActivePropertyIndex] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Dynamic Data Mapping
  const businessData = {
    name: data?.title || data?.name || "Vanguard Estate",
    email: data?.email || "concierge@vanguardestate.com",
    phone: data?.phone || "+1 (800) 555-0199",
    address: data?.address || "450 Park Avenue, Floor 12, NY",
    tagline: data?.tagline || "Curating the world's most exceptional living spaces.",
  };

  const navLinks = ["Portfolio", "Services", "Market Insights", "Contact"];

  const featuredProperties = [
    {
      title: "The Penthouse at 432",
      location: "Billionaire's Row, NY",
      price: "$24,500,000",
      beds: 4,
      baths: 5.5,
      sqft: "4,500",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Oceanfront Villa",
      location: "Malibu, CA",
      price: "$18,900,000",
      beds: 6,
      baths: 7,
      sqft: "8,200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Modern Glass Estate",
      location: "Beverly Hills, CA",
      price: "$32,000,000",
      beds: 5,
      baths: 6,
      sqft: "12,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Residential Acquisition",
      desc: "Exclusive access to off-market estates and premium residential properties."
    },
    {
      icon: Building2,
      title: "Commercial Investment",
      desc: "Strategic portfolio expansion in high-yield commercial sectors."
    },
    {
      icon: Key,
      title: "Property Management",
      desc: "White-glove management services for ultra-high-net-worth portfolios."
    },
    {
      icon: Search,
      title: "Market Valuation",
      desc: "Data-driven appraisal and precise market positioning strategies."
    }
  ];

  const nextProperty = () => setActivePropertyIndex((prev) => (prev + 1) % featuredProperties.length);
  const prevProperty = () => setActivePropertyIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#0A0A0A] font-sans selection:bg-[#A18A68] selection:text-white">
      
      {/* Structural Top Border */}
      <div className="fixed top-0 inset-x-0 h-2 bg-[#A18A68] z-50"></div>

      {/* Minimalist Navigation */}
      <header className="fixed top-2 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E5E5EA] transition-all">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold tracking-tighter text-2xl uppercase leading-none">{businessData.name.split(" ")[0]}</span>
            {businessData.name.split(" ")[1] && (
              <span className="font-medium tracking-[0.2em] text-[#86868B] text-[10px] uppercase mt-1">
                {businessData.name.split(" ").slice(1).join(" ")}
              </span>
            )}
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#86868B] hover:text-[#0A0A0A] transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#A18A68] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hidden sm:flex items-center gap-3 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors">
              Schedule Viewing <ArrowRight className="w-4 h-4" />
            </a>
            <button className="lg:hidden text-[#0A0A0A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-[88px] bg-white z-40 px-6 py-12 flex flex-col"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-light tracking-tighter border-b border-[#E5E5EA] pb-6">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Editorial Hero Section */}
      <section ref={heroRef} className="relative pt-[120px] pb-24 px-6 lg:px-12 z-10 flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Typography Block */}
        <div className="lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-20 pt-10 lg:pt-0 z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 border border-[#E5E5EA] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A18A68] mb-12">
              <MapPin className="w-3 h-3" /> Exclusive Global Listings
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-light tracking-tighter leading-[0.9] text-[#0A0A0A] mb-10">
              Architecture <br/>
              <span className="font-serif italic text-[#A18A68]">&</span> Lifestyle.
            </h1>
            
            <p className="text-lg sm:text-2xl text-[#86868B] font-light max-w-xl leading-relaxed mb-16">
              {businessData.tagline} We are the premier brokerage for uncompromising architectural excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 border-l border-[#A18A68] pl-6">
               <div className="flex flex-col">
                 <span className="text-4xl font-light tracking-tighter">$2B+</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#86868B] mt-2">Sales Volume</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-4xl font-light tracking-tighter">150+</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#86868B] mt-2">Exclusive Estates</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Image */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="lg:w-1/2 mt-16 lg:mt-0 relative h-[60vh] lg:h-[85vh]"
        >
          <div className="absolute inset-0 bg-[#0A0A0A] z-10">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
              alt="Luxury Architecture"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
          {/* Architectural Lines Overlay */}
          <div className="absolute inset-0 border-[1px] border-white/20 z-20 m-6"></div>
          
          <div className="absolute bottom-12 -left-12 bg-white p-8 z-30 shadow-2xl hidden lg:block border border-[#E5E5EA]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A18A68] mb-2">Featured Property</p>
            <p className="text-2xl font-light tracking-tighter mb-4">The Glass Pavilion</p>
            <a href="#portfolio" className="text-[11px] font-bold uppercase tracking-[0.15em] border-b border-[#0A0A0A] pb-1 hover:text-[#A18A68] hover:border-[#A18A68] transition-colors">
              View Details
            </a>
          </div>
        </motion.div>
      </section>

      {/* Philosophy / About Section (Sticky Scroll) */}
      <section className="border-y border-[#E5E5EA] bg-[#FDFDFD] relative z-20">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 min-h-screen">
          <div className="lg:col-span-5 border-r border-[#E5E5EA] p-6 lg:p-20 lg:sticky top-0 h-auto lg:h-screen flex flex-col justify-center">
            <h2 className="text-4xl sm:text-6xl font-light tracking-tighter mb-8">An <span className="font-serif italic text-[#A18A68]">unrivaled</span> approach to luxury real estate.</h2>
            <p className="text-xl text-[#86868B] font-light leading-relaxed">
              We understand that true luxury isn't just a price point—it's a lifestyle. Our brokers act as discrete advisors, providing unparalleled market intelligence.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col">
            {[
               { icon: TrendingUp, title: "Market Intelligence", desc: "Proprietary data analytics combined with decades of nuanced market experience." },
               { icon: Award, title: "Discrete Representation", desc: "We operate with absolute confidentiality for our high-profile clientele." },
               { icon: Clock, title: "Generational Value", desc: "Sourcing properties that serve as robust financial assets for generations." }
            ].map((item, i) => (
              <div key={i} className="p-10 sm:p-20 border-b border-[#E5E5EA] last:border-b-0 group hover:bg-[#F5F5F7] transition-colors">
                <item.icon className="w-8 h-8 text-[#A18A68] mb-8" />
                <h3 className="text-3xl font-light tracking-tighter mb-4">{item.title}</h3>
                <p className="text-lg text-[#86868B] font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Slider */}
      <section id="portfolio" className="py-32 overflow-hidden bg-[#0A0A0A] text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <h2 className="text-4xl sm:text-6xl font-light tracking-tighter mb-4">Exclusive <span className="font-serif italic text-[#A18A68]">Listings</span></h2>
                <p className="text-[#86868B] font-light max-w-md">A curated selection of the most magnificent properties currently available on the market.</p>
             </div>
             <div className="flex gap-4">
                <button onClick={prevProperty} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextProperty} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
             </div>
          </div>

          <div className="relative">
             <AnimatePresence mode="wait">
               <motion.div 
                 key={activePropertyIndex}
                 initial={{ opacity: 0, x: 100 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -100 }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className="grid lg:grid-cols-2 gap-12"
               >
                 <div className="relative h-[50vh] lg:h-[70vh]">
                    <img
                      src={featuredProperties[activePropertyIndex].image}
                      alt={featuredProperties[activePropertyIndex].title}
                      fill
                      className="object-cover"
                    />
                 </div>
                 <div className="flex flex-col justify-center">
                    <p className="text-[#A18A68] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                      {featuredProperties[activePropertyIndex].location}
                    </p>
                    <h3 className="text-5xl lg:text-7xl font-light tracking-tighter mb-8">
                      {featuredProperties[activePropertyIndex].title}
                    </h3>
                    <p className="text-4xl font-light mb-12">{featuredProperties[activePropertyIndex].price}</p>
                    
                    <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8 mb-12">
                       <div>
                         <p className="text-[10px] uppercase tracking-widest text-[#86868B] mb-2">Beds</p>
                         <p className="text-2xl font-light">{featuredProperties[activePropertyIndex].beds}</p>
                       </div>
                       <div>
                         <p className="text-[10px] uppercase tracking-widest text-[#86868B] mb-2">Baths</p>
                         <p className="text-2xl font-light">{featuredProperties[activePropertyIndex].baths}</p>
                       </div>
                       <div>
                         <p className="text-[10px] uppercase tracking-widest text-[#86868B] mb-2">Sq. Ft.</p>
                         <p className="text-2xl font-light">{featuredProperties[activePropertyIndex].sqft}</p>
                       </div>
                    </div>

                    <a href="#contact" className="inline-flex items-center gap-3 border border-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0A0A0A] transition-colors w-max">
                      Request Details <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl sm:text-6xl font-light tracking-tighter mb-20 text-center">Brokerage <span className="font-serif italic text-[#A18A68]">Services</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5EA] border border-[#E5E5EA]">
            {services.map((svc, i) => (
              <div key={i} className="bg-[#F5F5F7] p-10 lg:p-14 hover:bg-white transition-colors duration-500 group">
                <svc.icon className="w-8 h-8 text-[#0A0A0A] mb-12 group-hover:text-[#A18A68] transition-colors" />
                <h3 className="text-xl font-medium mb-4">{svc.title}</h3>
                <p className="text-[#86868B] font-light leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Form */}
      <section id="contact" className="py-32 bg-white border-t border-[#E5E5EA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            
            <div>
              <h2 className="text-5xl sm:text-7xl font-light tracking-tighter mb-8">
                Private <br/><span className="font-serif italic text-[#A18A68]">Consultation</span>
              </h2>
              <p className="text-xl text-[#86868B] font-light mb-16 max-w-md">
                Connect with our senior partners to discuss your portfolio or view an exclusive listing.
              </p>

              <div className="space-y-12">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] mb-2">Corporate Office</p>
                  <p className="text-xl font-light">{businessData.address}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] mb-2">Direct Inquiry</p>
                  <p className="text-xl font-light mb-1">{businessData.email}</p>
                  <p className="text-xl font-light">{businessData.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFDFD] p-10 sm:p-14 border border-[#E5E5EA]">
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] block mb-3">Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-[#E5E5EA] pb-3 text-lg focus:border-[#0A0A0A] outline-none transition-colors rounded-none" placeholder="First Last" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] block mb-3">Phone</label>
                    <input suppressHydrationWarning type="tel" className="w-full bg-transparent border-b border-[#E5E5EA] pb-3 text-lg focus:border-[#0A0A0A] outline-none transition-colors rounded-none" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] block mb-3">Email</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-transparent border-b border-[#E5E5EA] pb-3 text-lg focus:border-[#0A0A0A] outline-none transition-colors rounded-none" placeholder="email@address.com" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] block mb-3">Inquiry Type</label>
                  <select suppressHydrationWarning className="w-full bg-transparent border-b border-[#E5E5EA] pb-3 text-lg focus:border-[#0A0A0A] outline-none transition-colors rounded-none appearance-none">
                    <option>Property Acquisition</option>
                    <option>Property Sale</option>
                    <option>Portfolio Management</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <button suppressHydrationWarning type="button" className="w-full bg-[#0A0A0A] hover:bg-[#A18A68] text-white py-5 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors mt-8">
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Structured Footer */}
      <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            
            <div className="lg:col-span-1">
              <span className="font-bold tracking-tighter text-2xl uppercase leading-none block mb-2">{businessData.name.split(" ")[0]}</span>
              {businessData.name.split(" ")[1] && (
                <span className="font-medium tracking-[0.2em] text-[#86868B] text-[10px] uppercase block mb-8">
                  {businessData.name.split(" ").slice(1).join(" ")}
                </span>
              )}
              <p className="text-[#86868B] font-light text-sm">
                Excellence in architectural representation and global real estate acquisition.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Offices</p>
              <div className="space-y-4 text-sm font-light text-[#86868B]">
                <p>New York</p>
                <p>Los Angeles</p>
                <p>London</p>
                <p>Dubai</p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Navigation</p>
              <div className="space-y-4 text-sm font-light text-[#86868B]">
                <a href="#portfolio" className="block hover:text-white transition-colors">Portfolio</a>
                <a href="#services" className="block hover:text-white transition-colors">Services</a>
                <a href="#" className="block hover:text-white transition-colors">Journal</a>
                <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Connect</p>
              <div className="space-y-4 text-sm font-light text-[#86868B]">
                <a href="#" className="block hover:text-white transition-colors">Instagram</a>
                <a href="#" className="block hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="block hover:text-white transition-colors">Twitter</a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B]">
              © {new Date().getFullYear()} {businessData.name}. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
