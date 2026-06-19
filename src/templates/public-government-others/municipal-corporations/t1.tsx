
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, Search, FileText, AlertTriangle, CreditCard,
  MapPin, Phone, Mail, ArrowRight, Building, Leaf, Users,
  CloudSun, Train, ShieldCheck, MessageSquare, Briefcase, Landmark
} from "lucide-react";

export default function MunicipalCorpT1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cityData = {
    name: data?.title || data?.name || "Metropolis Civic",
    email: data?.email || "contact@metropolis.gov",
    phone: data?.phone || "311 (Local) or +1 800-CITY-HL",
    address: data?.address || "1 Civic Center Plaza, Metropolis",
    tagline: data?.tagline || "Building a sustainable, equitable future for all residents.",
  };

  const mainNav = ["Services", "Leadership", "Initiatives", "News", "Transparency"];

  const quickServices = [
    { icon: CreditCard, title: "Pay Utility Bill", desc: "Water, waste, and local municipal taxes." },
    { icon: AlertTriangle, title: "Report an Issue", desc: "Potholes, graffiti, or grid outages." },
    { icon: FileText, title: "Permits & Licenses", desc: "Business, construction, and zoning." },
    { icon: Building, title: "Housing Assistance", desc: "Affordable housing & tenant resources." },
  ];

  const newsItems = [
    { date: "Oct 24", title: "City council approves new green transit initiative for downtown sector.", tag: "Transit", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop" },
    { date: "Oct 21", title: "Public library renovations complete. Grand reopening scheduled.", tag: "Community", img: "https://images.unsplash.com/photo-1568668392383-58c369615742?q=80&w=1000&auto=format&fit=crop" },
    { date: "Oct 18", title: "Quarterly municipal budget report now available for public review.", tag: "Transparency", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" },
  ];

  const projects = [
    { name: "Downtown Eco-Corridor", status: "In Progress", completion: "2027", budget: "$14.2M" },
    { name: "Public Wifi Expansion", status: "Phase 2", completion: "2026", budget: "$3.5M" },
    { name: "Water Treatment Modernization", status: "Planning", completion: "2028", budget: "$42.8M" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-white overflow-x-clip">
      
      {/* Utility Top Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-2 px-6 lg:px-12 text-[10px] sm:text-xs font-medium text-[#64748B] flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Official Website of {cityData.name}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#" className="hover:text-[#0A0A0A] transition-colors">Accessibility</a>
          <a href="#" className="hover:text-[#0A0A0A] transition-colors">Translate</a>
          <a href="#" className="hover:text-[#0A0A0A] transition-colors">A-Z Index</a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#0A0A0A] rounded-full flex items-center justify-center">
              <Landmark className="w-4 h-4 text-white" />
            </div>
            <div className="font-bold text-lg leading-none tracking-tight">
              {cityData.name.split(" ")[0]}<br/>
              <span className="text-sm font-normal text-[#64748B]">{cityData.name.split(" ").slice(1).join(" ")}</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-tight text-[#0A0A0A] hover:text-[#2563EB] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button suppressHydrationWarning className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] hover:border-[#0A0A0A] hover:bg-[#FAFAFA] transition-all">
              <Search className="w-4 h-4" />
            </button>
            <button suppressHydrationWarning className="hidden sm:block bg-[#0A0A0A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              I Want To...
            </button>
            <button suppressHydrationWarning className="lg:hidden text-[#0A0A0A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-x-0 top-20 bg-white z-40 px-6 py-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                {mainNav.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-bold border-b border-[#F1F5F9] pb-4">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Editorial Civic Hero */}
      <section className="pt-20 pb-16 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-6xl sm:text-7xl lg:text-[90px] font-semibold tracking-tighter leading-[0.95] mb-8 text-[#0A0A0A]">
              Digital <br/> <span className="text-[#2563EB]">City Hall.</span>
            </h1>
            <p className="text-xl text-[#475569] font-light max-w-lg leading-relaxed mb-12">
              Access civic services, stay informed on local government initiatives, and participate in building a stronger community.
            </p>
            
            <div className="relative max-w-md">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
              <input 
                suppressHydrationWarning
                type="text" 
                placeholder="Search services, forms, or news..." 
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-full pl-14 pr-6 py-5 text-sm font-medium focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/5] lg:aspect-[3/4] bg-[#F8FAFC] rounded-[2.5rem] overflow-hidden group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop" 
              alt="City Architecture" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[3s] ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent"></div>
            
            {/* Floating City Metric */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-white">
              <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Live City Status</p>
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-light mb-1">72°</p>
                  <p className="text-xs font-medium text-white/70">Clear Skies</p>
                </div>
                <div>
                  <p className="text-3xl font-light mb-1">42 AQI</p>
                  <p className="text-xs font-medium text-[#10B981]">Good Air Quality</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Live Bento Dashboard */}
      <section className="pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] p-8 rounded-3xl flex flex-col justify-between h-48 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Train className="w-5 h-5 text-[#2563EB]" />
              </div>
              <span className="bg-[#DBEAFE] text-[#1D4ED8] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">On Time</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#1E3A8A]">Public Transit</h3>
              <p className="text-sm text-[#3B82F6] font-medium">All lines running normally.</p>
            </div>
          </div>
          
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] p-8 rounded-3xl flex flex-col justify-between h-48 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
              </div>
              <span className="bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Secure</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#14532D]">Public Safety</h3>
              <p className="text-sm text-[#22C55E] font-medium">No active civic alerts.</p>
            </div>
          </div>

          <div className="bg-[#FEFCE8] border border-[#FEF08A] p-8 rounded-3xl flex flex-col justify-between h-48 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Briefcase className="w-5 h-5 text-[#CA8A04]" />
              </div>
              <span className="bg-[#FEF9C3] text-[#A16207] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Active</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#713F12]">City Council</h3>
              <p className="text-sm text-[#EAB308] font-medium">Session in progress. Watch live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Services Grid (Swiss Design) */}
      <section id="services" className="py-32 bg-[#FAFAFA] border-y border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-sm font-bold text-[#2563EB] uppercase tracking-widest mb-3">Resident Portal</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0A0A0A]">Top Services.</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
              View Directory <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-[#E2E8F0] p-8 rounded-3xl hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EFF6FF] transition-colors">
                  <service.icon className="w-6 h-6 text-[#0A0A0A] group-hover:text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A] tracking-tight">{service.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-8">{service.desc}</p>
                
                <div className="mt-auto flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership & Council Section */}
      <section id="leadership" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop" 
              alt="Mayor's Office" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white p-8 rounded-3xl">
              <p className="text-2xl font-serif italic text-[#0A0A0A] mb-4">"A city is only as strong as its commitment to the most vulnerable among us."</p>
              <p className="font-bold uppercase tracking-widest text-[10px] text-[#64748B]">— Honorable Mayor Sarah Jenkins</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-[#2563EB] uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0A0A0A] mb-8">Office of the Mayor.</h2>
            <p className="text-lg text-[#475569] font-light leading-relaxed mb-12">
              The Office of the Mayor is committed to transparency, equitable development, and driving the long-term vision of our municipality forward.
            </p>
            
            <div className="space-y-6">
              <a href="#" className="flex items-center justify-between p-6 border border-[#E2E8F0] rounded-2xl hover:border-[#0A0A0A] transition-colors group">
                <span className="font-semibold text-[#0A0A0A]">Meet the City Council</span>
                <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#0A0A0A]" />
              </a>
              <a href="#" className="flex items-center justify-between p-6 border border-[#E2E8F0] rounded-2xl hover:border-[#0A0A0A] transition-colors group">
                <span className="font-semibold text-[#0A0A0A]">Boards & Commissions Directory</span>
                <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#0A0A0A]" />
              </a>
              <a href="#" className="flex items-center justify-between p-6 border border-[#E2E8F0] rounded-2xl hover:border-[#0A0A0A] transition-colors group">
                <span className="font-semibold text-[#0A0A0A]">Request a Mayoral Proclamation</span>
                <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#0A0A0A]" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Civic Updates & Projects (Dark Section) */}
      <section id="news" className="py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24">
          
          {/* News Board */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-semibold tracking-tight">Civic News.</h2>
              <a href="#" className="text-sm font-semibold hover:text-[#2563EB] transition-colors">View All</a>
            </div>
            
            <div className="flex flex-col gap-6">
              {newsItems.map((news, i) => (
                <a key={i} href="#" className="group relative h-48 rounded-3xl overflow-hidden flex flex-col justify-end p-6 border border-white/10 hover:border-white/30 transition-colors">
                  <img src={news.img} alt="News" className="object-cover w-full h-full opacity-40 group-hover:opacity-50 transition-opacity duration-500 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                      {news.tag}
                    </span>
                    <h3 className="text-xl font-medium leading-snug group-hover:text-[#3B82F6] transition-colors max-w-md">
                      {news.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Capital Projects */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-semibold tracking-tight">Capital Projects.</h2>
              <a href="#" className="text-sm font-semibold hover:text-[#2563EB] transition-colors">Project Map</a>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between">
              <p className="text-white/60 font-light leading-relaxed mb-12">
                Tracking major infrastructure investments and civic development initiatives across all municipal districts.
              </p>
              
              <div className="flex flex-col gap-6">
                {projects.map((proj, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <div>
                      <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-widest mb-1 block">{proj.status}</span>
                      <span className="text-lg font-medium">{proj.name}</span>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-2xl font-light block">{proj.budget}</span>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Est. {proj.completion}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button suppressHydrationWarning className="mt-12 w-full bg-white text-[#0A0A0A] py-4 rounded-xl text-sm font-bold hover:bg-[#F8FAFC] transition-colors">
                Open Project Tracker
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Citizen Feedback Portal */}
      <section className="py-24 bg-[#EFF6FF] border-y border-[#BFDBFE]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <MessageSquare className="w-12 h-12 text-[#2563EB] mx-auto mb-6" />
          <h2 className="text-4xl font-semibold tracking-tight text-[#0A0A0A] mb-4">Your Voice Matters.</h2>
          <p className="text-[#475569] leading-relaxed mb-10 max-w-2xl mx-auto">
            The city planning commission is currently collecting feedback on the proposed redesign of Centennial Park. Submit your thoughts directly to the council.
          </p>
          <div className="bg-white p-2 rounded-full border border-[#BFDBFE] flex max-w-xl mx-auto shadow-sm">
            <input suppressHydrationWarning type="text" placeholder="Enter your comments or concerns..." className="flex-1 bg-transparent border-none outline-none px-6 text-sm" />
            <button suppressHydrationWarning className="bg-[#2563EB] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#1D4ED8] transition-colors">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="font-bold text-2xl tracking-tight mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0A0A0A] rounded-full flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-white" />
                </div>
                {cityData.name}
              </div>
              <p className="text-sm text-[#64748B] max-w-xs leading-relaxed mb-8">
                {cityData.tagline}
              </p>
              <div className="space-y-4">
                <p className="text-sm font-medium flex items-center gap-3"><MapPin className="w-4 h-4 text-[#94A3B8]" /> {cityData.address}</p>
                <p className="text-sm font-medium flex items-center gap-3"><Phone className="w-4 h-4 text-[#94A3B8]" /> {cityData.phone}</p>
                <p className="text-sm font-medium flex items-center gap-3"><Mail className="w-4 h-4 text-[#94A3B8]" /> {cityData.email}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-6 text-[#0A0A0A]">Government</h4>
              <ul className="space-y-4 text-sm text-[#64748B]">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Mayor's Office</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">City Council</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Departments</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Boards & Commissions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-6 text-[#0A0A0A]">Residents</h4>
              <ul className="space-y-4 text-sm text-[#64748B]">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Pay Bills Online</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Trash & Recycling</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Parks & Recreation</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Public Safety</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-6 text-[#0A0A0A]">Business</h4>
              <ul className="space-y-4 text-sm text-[#64748B]">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Start a Business</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Apply for Permits</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Bids & RFPs</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Economic Development</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#94A3B8]">
            <p>Copyright © {new Date().getFullYear()} {cityData.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#0A0A0A]">Privacy Policy</a>
              <a href="#" className="hover:text-[#0A0A0A]">Terms of Use</a>
              <a href="#" className="hover:text-[#0A0A0A]">Accessibility Statement</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
