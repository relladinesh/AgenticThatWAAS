
import { useState } from "react";
import { motion } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  Key,
  Home,
  Building,
  TrendingUp,
  Star,
  ChevronRight
} from "lucide-react";

export default function PropertyDealerBrokerT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic Data Mapping
  const businessData = {
    name: data?.title || data?.name || "Vanguard Estate Brokers",
    email: data?.email || "contact@vanguardestates.com",
    phone: data?.phone || "+1 (310) 555-0199",
    address: data?.address || "100 Wilshire Blvd, Santa Monica, CA",
    tagline: data?.tagline || "Curating exceptional properties for discerning clients.",
    rating: data?.rating || "4.9",
    reviews: data?.reviews || "320+",
  };

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Expertise", href: "#expertise" },
    { name: "Market Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-[#C5A880] selection:text-white">
      
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#111111] flex items-center justify-center text-[#C5A880]">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-medium tracking-tight text-[#111111]">
              {businessData.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm tracking-widest uppercase font-medium text-slate-500 hover:text-[#C5A880] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex items-center gap-2 bg-[#111111] text-white px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-[#C5A880] transition-all duration-300">
              Inquire
            </a>
            <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} 
            className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-100 shadow-2xl p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif text-slate-600 hover:text-[#C5A880]">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#111111] text-white px-6 py-4 text-center font-medium uppercase tracking-widest text-sm mt-2">
              Inquire Now
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Estate"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-[#C5A880] uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              Premier Real Estate Brokerage
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
              Elevating the standard of <span className="italic text-[#C5A880]">luxury living.</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto font-light mb-12">
              {businessData.tagline} We provide unparalleled access to the world's most exclusive properties.
            </p>
            <a href="#portfolio" className="inline-flex items-center gap-3 bg-[#C5A880] hover:bg-[#b09570] text-white px-10 py-5 text-sm uppercase tracking-widest font-medium transition-all duration-300">
              Explore Portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-70">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
              className="w-full h-1/2 bg-white" 
            />
          </div>
        </div>
      </section>

      {/* Philosophy / About */}
      <section className="py-24 lg:py-32 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-[#C5A880] translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                alt="Interior Design"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-6xl font-serif mb-8 leading-tight">
              A legacy of <span className="text-[#C5A880] italic">excellence</span> and discretion.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              We specialize in the acquisition and sale of premier residential and commercial real estate. Our approach is built on a foundation of absolute discretion, unmatched market intelligence, and a relentless commitment to our clients' success.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-serif text-white mb-2">$2B+</p>
                <p className="text-xs uppercase tracking-widest text-[#C5A880]">Sales Volume</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-white mb-2">{businessData.rating}</p>
                <div className="flex text-[#C5A880] gap-1 mb-2">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Portfolio */}
      <section id="portfolio" className="py-24 lg:py-32 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[#C5A880] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Exclusive Listings</p>
              <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 tracking-tight">Curated Portfolio</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-slate-900 hover:text-[#C5A880] transition-colors border-b border-slate-900 hover:border-[#C5A880] pb-1">
              View All Properties <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Beverly Estate", price: "$12,500,000", loc: "Beverly Hills, CA", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
              { title: "Oceanfront Villa", price: "$8,950,000", loc: "Malibu, CA", img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=800&auto=format&fit=crop" },
              { title: "Modern Penthouse", price: "$5,200,000", loc: "Downtown LA", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" }
            ].map((prop, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[450px] w-full overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={prop.img}
                    alt={prop.title}
                    className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                    {prop.price}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">{prop.title}</h3>
                <p className="text-slate-500 flex items-center gap-2 text-sm font-medium uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-[#C5A880]" /> {prop.loc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Services */}
      <section id="expertise" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6">Comprehensive Expertise</h2>
             <p className="text-lg text-slate-500 font-light">Navigating the complexities of high-end real estate requires specialized knowledge and an expansive network.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {(data.services || [
              { title: "Buyer Representation", desc: "Securing off-market gems and negotiating the best terms for your acquisition.", icon: Key },
              { title: "Seller Representation", desc: "Targeted global marketing strategies to ensure maximum value for your asset.", icon: Home },
              { title: "Commercial Real Estate", desc: "Strategic advisory for investment properties and commercial portfolios.", icon: Building },
              { title: "Market Analytics", desc: "Data-driven insights to guide your investment decisions with precision.", icon: TrendingUp }
            ]).map((svc: any, idx: number) => {
              const Icon = svc.icon || Key;
              return (
                <div key={idx} className="group">
                  <div className="w-16 h-16 bg-[#FDFCFB] border border-slate-100 flex items-center justify-center text-[#C5A880] mb-6 group-hover:bg-[#111111] transition-colors duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-4">{svc.title || svc}</h3>
                  <p className="text-slate-500 leading-relaxed font-light text-sm">
                    {svc.desc || "Professional real estate services tailored to meet your unique lifestyle and financial objectives."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="contact" className="py-24 lg:py-32 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-4xl lg:text-6xl font-serif mb-6 leading-tight">
              Begin your <span className="text-[#C5A880] italic">journey.</span>
            </h2>
            <p className="text-slate-400 mb-12 font-light text-lg">
              Contact our brokerage to schedule a private consultation or request an appraisal of your current property.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                  <p className="text-lg font-serif">{businessData.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#C5A880] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Headquarters</p>
                  <p className="text-lg font-serif">{businessData.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <form className="bg-white/5 p-8 lg:p-12 border border-white/10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">First Name</label>
                  <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-[#C5A880] outline-none transition-colors font-serif text-lg" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">Last Name</label>
                  <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-[#C5A880] outline-none transition-colors font-serif text-lg" placeholder="Doe" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">Email Address</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-[#C5A880] outline-none transition-colors font-serif text-lg" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">Phone Number</label>
                  <input suppressHydrationWarning type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-[#C5A880] outline-none transition-colors font-serif text-lg" placeholder="+1 (000) 000-0000" />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <label className="text-xs uppercase tracking-widest text-slate-400">Inquiry Type</label>
                <select suppressHydrationWarning className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-[#C5A880] outline-none transition-colors font-serif text-lg appearance-none">
                  <option className="bg-[#111111]">I am looking to Buy</option>
                  <option className="bg-[#111111]">I am looking to Sell</option>
                  <option className="bg-[#111111]">General Inquiry</option>
                </select>
              </div>
              <button suppressHydrationWarning type="button" className="w-full bg-[#C5A880] hover:bg-[#b09570] text-white py-5 mt-8 text-sm uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-3">
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C5A880] flex items-center justify-center text-[#111111]">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-xl font-serif text-white tracking-tight">
                {businessData.name}
              </span>
            </div>
            <div className="flex gap-8 text-xs uppercase tracking-widest font-medium text-slate-500">
              <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#C5A880] transition-colors">Accessibility</a>
            </div>
          </div>
          <p className="text-slate-600 text-xs text-center font-medium">
            © {new Date().getFullYear()} {businessData.name}. All rights reserved. Equal Housing Opportunity.
          </p>
        </div>
      </footer>

    </div>
  );
}
