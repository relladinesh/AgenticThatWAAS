
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  ArrowRight, Key, Shield, Coffee, MapPin, 
  Menu, X, Sparkles, Building2, ChevronRight, Phone, Mail
} from "lucide-react";

export default function RentalPropertiesT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const businessData = {
    name: data?.title || data?.name || "The Reserve",
    email: data?.email || "concierge@thereserve.com",
    phone: data?.phone || "+1 (800) 555-0199",
    address: data?.address || "100 Grand Avenue, Los Angeles, CA",
    tagline: data?.tagline || "Redefining boutique urban living.",
  };

  const navLinks = ["Residences", "Amenities", "Neighborhood", "Contact"];

  const features = [
    { icon: Sparkles, title: "Designer Finishes", desc: "Italian cabinetry, quartz countertops, and floor-to-ceiling windows." },
    { icon: Coffee, title: "Club Level", desc: "Private barista bar, co-working library, and screening room." },
    { icon: Shield, title: "White-Glove Service", desc: "24/7 lobby concierge, valet parking, and dry cleaning delivery." },
    { icon: MapPin, title: "Prime Location", desc: "Steps away from the city's finest dining, arts, and culture." }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
  ];

  const residences = [
    { type: "Studio", sqft: "550 - 650", price: "Starting at $2,400" },
    { type: "1 Bedroom", sqft: "750 - 900", price: "Starting at $3,200" },
    { type: "2 Bedroom", sqft: "1,100 - 1,400", price: "Starting at $4,800" },
    { type: "Penthouse", sqft: "2,200+", price: "Inquire for Pricing" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1917] font-serif selection:bg-[#B45309] selection:text-white">
      
      {/* Editorial Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E7E5E4] transition-all">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight uppercase flex items-center gap-3">
             <div className="w-2 h-2 bg-[#B45309] rounded-full"></div>
             {businessData.name}
          </div>

          <nav className="hidden lg:flex items-center gap-12 font-sans">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.2em] text-[#57534E] hover:text-[#1C1917] transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#B45309] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hidden lg:inline-flex items-center gap-3 border border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF9F6] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] font-sans transition-colors">
              Schedule Tour
            </a>
            <button suppressHydrationWarning className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-24 bg-[#FAF9F6] z-40 px-6 py-12 flex flex-col font-sans"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-light tracking-tighter border-b border-[#E7E5E4] pb-6">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Asymmetrical Magazine Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl sm:text-7xl lg:text-[90px] leading-[0.9] tracking-tight mb-8">
                A new <br/>
                <span className="italic text-[#B45309]">standard</span> <br/>
                of living.
              </h1>
              <p className="text-xl lg:text-2xl text-[#57534E] font-sans font-light max-w-md leading-relaxed mb-12">
                {businessData.tagline} Experience the pinnacle of boutique urban architecture.
              </p>
              
              <div className="flex items-center gap-8 border-t border-[#E7E5E4] pt-8 font-sans">
                 <div>
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309] mb-2">Availability</p>
                   <p className="text-lg">Now Leasing</p>
                 </div>
                 <div className="w-px h-12 bg-[#E7E5E4]"></div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309] mb-2">Location</p>
                   <p className="text-lg">Arts District</p>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="w-full h-full relative">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
                alt="Luxury Property Exterior"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border border-[#1C1917]/10 m-4 lg:m-8 mix-blend-overlay pointer-events-none"></div>
            </motion.div>
            
            {/* Hover Indicator */}
            <div className="absolute -bottom-12 right-12 w-32 h-32 bg-[#B45309] rounded-full hidden lg:flex items-center justify-center text-[#FAF9F6] rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl z-20 font-sans">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-center leading-tight">View <br/> Floorplans</span>
            </div>
          </div>

        </div>
      </section>

      {/* Boutique Features Grid */}
      <section id="amenities" className="py-24 bg-[#1C1917] text-[#FAF9F6]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 border-b border-[#FAF9F6]/10 pb-12">
            <h2 className="text-5xl lg:text-7xl tracking-tight max-w-2xl">
              Curated for the <span className="italic text-[#B45309]">modern</span> aesthete.
            </h2>
            <p className="text-lg font-sans font-light text-[#A8A29E] max-w-sm">
              Every detail has been meticulously considered to provide an effortless, elevated lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
            {features.map((feature, i) => (
              <div key={i} className="group">
                <feature.icon className="w-10 h-10 text-[#B45309] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-[#A8A29E] font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image Gallery / Interactive Floorplans */}
      <section id="residences" className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Interactive Image Display */}
            <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img src={galleryImages[activeImage % galleryImages.length]} alt="Interior" className="object-cover w-full h-full" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content & Floorplans Accordion */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl lg:text-7xl tracking-tight mb-8">The <span className="italic text-[#B45309]">Residences</span></h2>
              <p className="text-xl font-sans font-light text-[#57534E] mb-16 leading-relaxed">
                Ranging from meticulously crafted studios to expansive penthouses, each residence is an exercise in restraint and quality.
              </p>

              <div className="border-t border-[#E7E5E4] font-sans">
                {residences.map((res, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => setActiveImage(i)}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 border-b border-[#E7E5E4] group cursor-pointer hover:bg-[#F5F5F4] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12"
                  >
                    <div>
                      <h3 className="text-3xl font-serif mb-2 group-hover:text-[#B45309] transition-colors">{res.type}</h3>
                      <p className="text-[#A8A29E] text-sm uppercase tracking-widest">{res.sqft} Sq. Ft.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-8">
                      <p className="text-lg">{res.price}</p>
                      <div className="w-10 h-10 rounded-full border border-[#1C1917] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-[#FAF9F6] transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact & Viewing Form */}
      <section id="contact" className="py-32 bg-[#F5F5F4] border-t border-[#E7E5E4]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            
            <div>
              <h2 className="text-5xl lg:text-7xl tracking-tight mb-8">
                Request a <br/><span className="italic text-[#B45309]">Private Viewing</span>
              </h2>
              <p className="text-xl font-sans font-light text-[#57534E] mb-16 max-w-md">
                Our leasing concierges are available to provide in-depth tours and answer any questions.
              </p>

              <div className="space-y-12 font-sans border-t border-[#E7E5E4] pt-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-3">Visit Us</p>
                  <p className="text-2xl font-serif">{businessData.address}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-3">Direct Line</p>
                  <p className="text-2xl font-serif">{businessData.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-3">Email</p>
                  <p className="text-2xl font-serif">{businessData.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-10 lg:p-16 border border-[#E7E5E4] font-sans">
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] block mb-3">First Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-[#E7E5E4] pb-4 text-xl focus:border-[#B45309] outline-none transition-colors rounded-none placeholder-[#D6D3D1]" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] block mb-3">Last Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-[#E7E5E4] pb-4 text-xl focus:border-[#B45309] outline-none transition-colors rounded-none placeholder-[#D6D3D1]" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] block mb-3">Email Address</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-transparent border-b border-[#E7E5E4] pb-4 text-xl focus:border-[#B45309] outline-none transition-colors rounded-none placeholder-[#D6D3D1]" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] block mb-3">Desired Move-in Date</label>
                  <input suppressHydrationWarning type="date" className="w-full bg-transparent border-b border-[#E7E5E4] pb-4 text-xl focus:border-[#B45309] outline-none transition-colors rounded-none text-[#1C1917]" />
                </div>
                <button suppressHydrationWarning type="button" className="w-full bg-[#1C1917] hover:bg-[#B45309] text-[#FAF9F6] py-6 text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-8">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#1C1917] text-[#FAF9F6] pt-24 pb-12 px-6 lg:px-12 font-sans">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            
            <div className="lg:col-span-1">
              <div className="text-2xl font-serif font-bold tracking-tight uppercase flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 bg-[#B45309] rounded-full"></div>
                 {businessData.name}
              </div>
              <p className="text-[#A8A29E] font-light text-sm max-w-xs leading-relaxed">
                An exclusive collection of boutique residences designed for the discerning urbanite.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Explore</p>
              <div className="space-y-4 text-sm font-light">
                {navLinks.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block hover:text-[#B45309] transition-colors">{link}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Resident Portal</p>
              <div className="space-y-4 text-sm font-light">
                <a href="#" className="block hover:text-[#B45309] transition-colors">Pay Rent</a>
                <a href="#" className="block hover:text-[#B45309] transition-colors">Submit Maintenance</a>
                <a href="#" className="block hover:text-[#B45309] transition-colors">Concierge Desk</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Connect</p>
              <div className="space-y-4 text-sm font-light">
                <a href="#" className="block hover:text-[#B45309] transition-colors">Instagram</a>
                <a href="#" className="block hover:text-[#B45309] transition-colors">Facebook</a>
                <a href="#" className="block hover:text-[#B45309] transition-colors">Pinterest</a>
              </div>
            </div>

          </div>

          <div className="border-t border-[#FAF9F6]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E]">
              © {new Date().getFullYear()} {businessData.name}.
            </p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E]">
              <a href="#" className="hover:text-[#FAF9F6] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#FAF9F6] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#FAF9F6] transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
