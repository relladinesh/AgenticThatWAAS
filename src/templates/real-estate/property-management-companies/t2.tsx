
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, ArrowRight, Building2, Users, Shield, 
  Wallet, Wrench, BarChart3, CheckCircle2, ChevronDown,
  Phone, Mail, MapPin, ExternalLink
} from "lucide-react";

export default function PropertyManagementT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamic Data Mapping
  const businessData = {
    name: data?.title || data?.name || "Verdant Property Group",
    email: data?.email || "hello@verdantgroup.com",
    phone: data?.phone || "+1 (800) 555-0199",
    address: data?.address || "100 Emerald Way, Suite 400, Chicago, IL",
    tagline: data?.tagline || "Maximizing asset value through intelligent management.",
  };

  const navLinks = ["Services", "Technology", "Portfolio", "FAQ", "Contact"];

  const stats = [
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "8,500", label: "Doors Managed" },
    { value: "98%", label: "Resident Retention" },
    { value: "24/7", label: "Maintenance Response" },
  ];

  const servicesTabs = [
    {
      id: "owners",
      title: "For Property Owners",
      features: [
        { icon: BarChart3, title: "Financial Optimization", desc: "Detailed monthly reporting, strategic rent pricing algorithms, and expense reduction strategies." },
        { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive background checks, lease enforcement, and rigorous legal compliance." },
        { icon: Wrench, title: "Proactive Maintenance", desc: "Preventative upkeep schedules that extend asset lifespan and reduce emergency repair costs." },
        { icon: Users, title: "High-Quality Placement", desc: "Targeted marketing to attract and retain premium, reliable residents." }
      ],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "residents",
      title: "For Residents",
      features: [
        { icon: Wallet, title: "Seamless Payments", desc: "Mobile-first rent payments with autopay, split payments, and credit-building options." },
        { icon: Wrench, title: "Rapid Resolution", desc: "24/7 dedicated maintenance hotline with guaranteed 4-hour response times for emergencies." },
        { icon: CheckCircle2, title: "Premium Living", desc: "Access to community events, partner discounts, and white-glove concierge services." },
        { icon: Building2, title: "Smart Home Tech", desc: "Keyless entry, smart thermostats, and secure package lockers included in select properties." }
      ],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const faqs = [
    { q: "How do you determine the optimal rent price?", a: "We utilize proprietary software that analyzes real-time market data, comparable neighborhood properties, and current demand trends to price your unit for maximum yield while minimizing vacancy periods." },
    { q: "What is your tenant screening process?", a: "Our 5-point screening process includes national criminal background checks, multi-bureau credit analysis, employment/income verification, and prior landlord references." },
    { q: "How are maintenance requests handled?", a: "Residents submit requests via our app. Our triage team assesses the issue, dispatches our vetted vendor network, and tracks the resolution. Owners receive a transparent invoice with no hidden markups." },
    { q: "When are owner disbursements processed?", a: "Owner draws are processed electronically on the 10th of every month, accompanied by a comprehensive financial ledger detailing all income and expenses." }
  ];

  const bentoFeatures = [
    { title: "Owner Portal", desc: "Real-time visibility into your portfolio's performance.", span: "col-span-1 md:col-span-2", bg: "bg-[#F8FAFC]" },
    { title: "Smart Routing", desc: "AI-driven maintenance dispatch.", span: "col-span-1", bg: "bg-[#064E3B] text-white" },
    { title: "Compliance Engine", desc: "Automated legal and regulatory adherence.", span: "col-span-1", bg: "bg-[#ECFDF5]" },
    { title: "Yield Analytics", desc: "Predictive modeling for future asset valuation and rent increases.", span: "col-span-1 md:col-span-2", bg: "bg-[#F8FAFC]" }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#064E3B] selection:text-white">
      
      {/* Utility Top Bar */}
      <div className="bg-[#064E3B] text-white py-2 px-6 lg:px-12 hidden md:block text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#34D399]" /> {businessData.phone}</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#34D399]" /> {businessData.email}</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#34D399] transition-colors">Resident Login</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-[#34D399] transition-colors">Owner Portal</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#E2E8F0] transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#064E3B] rounded-lg flex items-center justify-center shadow-lg">
               <Building2 className="w-6 h-6 text-white" />
             </div>
             <span className="font-bold text-xl tracking-tight text-[#0F172A]">{businessData.name}</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-semibold text-[#475569] hover:text-[#064E3B] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:flex items-center gap-2 bg-[#064E3B] hover:bg-[#043326] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg">
              Get Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <button suppressHydrationWarning className="lg:hidden text-[#0F172A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              className="absolute top-full left-0 w-full bg-white border-b border-[#E2E8F0] shadow-xl lg:hidden flex flex-col p-6 gap-4"
            >
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-[#0F172A] border-b border-[#F1F5F9] pb-4">
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="#" className="text-center bg-[#F1F5F9] text-[#0F172A] py-3 rounded-lg font-semibold">Resident Login</a>
                <a href="#contact" className="text-center bg-[#064E3B] text-white py-3 rounded-lg font-semibold">Get a Proposal</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECFDF5] text-[#064E3B] text-sm font-bold mb-8">
              <Shield className="w-4 h-4" /> Trusted by 500+ Property Owners
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
              Property Management, <span className="text-[#064E3B]">Elevated.</span>
            </h1>
            
            <p className="text-xl text-[#475569] leading-relaxed mb-10 max-w-lg">
              {businessData.tagline} We handle the complexities of real estate so you can focus on growing your portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex justify-center items-center gap-2 bg-[#064E3B] hover:bg-[#043326] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
                Request Proposal <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="flex justify-center items-center gap-2 bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] px-8 py-4 rounded-xl text-lg font-bold transition-all">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
                alt="Modern Real Estate"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#064E3B]/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-[#F1F5F9] flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#059669]" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#0F172A]">98%</p>
                <p className="text-sm font-semibold text-[#475569]">Owner Satisfaction</p>
              </div>
            </motion.div>
          </div>
          
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[#ECFDF5] rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0F172A] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="pl-6 first:pl-0 border-white/10 text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">{stat.value}</p>
                <p className="text-sm font-medium text-[#94A3B8]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Services Section */}
      <section id="services" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6">A Dual-Focus Approach</h2>
            <p className="text-xl text-[#475569]">
              Exceptional property management requires serving two clients simultaneously: maximizing returns for owners while providing a premium living experience for residents.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-[#E2E8F0] inline-flex">
              {servicesTabs.map((tab, i) => (
                <button 
                  suppressHydrationWarning
                  key={tab.id} 
                  onClick={() => setActiveTab(i)}
                  className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeTab === i ? "bg-[#064E3B] text-white shadow-md" : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]"}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-xl border border-[#E2E8F0]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-[#0F172A]">{servicesTabs[activeTab].title} Solutions</h3>
                  <div className="space-y-8">
                    {servicesTabs[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ECFDF5] flex items-center justify-center">
                          <feature.icon className="w-7 h-7 text-[#059669]" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0F172A] mb-2">{feature.title}</h4>
                          <p className="text-[#475569] leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-lg hidden lg:block">
                  <img
                    src={servicesTabs[activeTab].image}
                    alt={servicesTabs[activeTab].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Technology Bento Grid */}
      <section id="technology" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6">Powered by Technology</h2>
              <p className="text-xl text-[#475569]">
                We leverage enterprise-grade PropTech to eliminate inefficiencies, reduce overhead, and provide total transparency to our clients.
              </p>
            </div>
            <a href="#contact" className="flex items-center gap-2 text-[#064E3B] font-bold hover:underline">
              View Software Demo <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoFeatures.map((feat, i) => (
              <div key={i} className={`${feat.span} ${feat.bg} rounded-[2rem] p-10 border border-[#E2E8F0] hover:shadow-lg transition-shadow`}>
                <h3 className={`text-2xl font-bold mb-4 ${feat.bg.includes('text-white') ? 'text-white' : 'text-[#0F172A]'}`}>{feat.title}</h3>
                <p className={`${feat.bg.includes('text-white') ? 'text-white/80' : 'text-[#475569]'} text-lg`}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-[#0F172A] mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  suppressHydrationWarning
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center font-bold text-lg text-[#0F172A]"
                >
                  {faq.q}
                  <ChevronDown className={`w-6 h-6 text-[#064E3B] transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-[#475569] leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[#064E3B] md:w-1/3 z-0 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col md:flex-row">
            
            <div className="w-full md:w-3/5 p-10 lg:p-16">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">Get a Free Portfolio Assessment</h2>
              <p className="text-lg text-[#475569] mb-10">Fill out the form below to receive a customized management proposal and rent analysis within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">First Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:bg-white transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">Last Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F172A] mb-2">Email Address</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:bg-white transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F172A] mb-2">Portfolio Size</label>
                  <select suppressHydrationWarning className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:bg-white transition-all appearance-none cursor-pointer">
                    <option>1 - 10 Units</option>
                    <option>11 - 50 Units</option>
                    <option>51 - 200 Units</option>
                    <option>200+ Units (Institutional)</option>
                  </select>
                </div>
                <button suppressHydrationWarning type="button" className="w-full bg-[#064E3B] hover:bg-[#043326] text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg mt-4">
                  Request Assessment
                </button>
              </form>
            </div>

            <div className="w-full md:w-2/5 bg-[#F8FAFC] p-10 lg:p-16 flex flex-col justify-center border-l border-[#E2E8F0]">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Corporate Office</p>
                    <p className="text-[#475569]">{businessData.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Direct Phone</p>
                    <p className="text-[#475569]">{businessData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Email Inquiries</p>
                    <p className="text-[#475569]">{businessData.email}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#34D399] rounded-md flex items-center justify-center shadow-lg">
                  <Building2 className="w-5 h-5 text-[#064E3B]" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">{businessData.name}</span>
              </div>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                Providing institutional-grade property management services to private investors and corporate portfolios.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
              <ul className="space-y-4 text-[#94A3B8]">
                <li><a href="#" className="hover:text-white transition-colors">Residential Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Reporting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tenant Placement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-[#94A3B8]">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Client Portals</h4>
              <ul className="space-y-4 text-[#94A3B8]">
                <li><a href="#" className="hover:text-white transition-colors">Owner Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resident Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vendor Network</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#94A3B8] text-sm">
              &copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#94A3B8]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Fair Housing</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
