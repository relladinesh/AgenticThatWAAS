
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, Phone, Mail, MapPin, 
  ArrowRight, BarChart3, ShieldCheck, Landmark, 
  PieChart, Briefcase, Award, Users, CheckCircle2
} from "lucide-react";

const CharteredAccountantFirmT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Apex Financial & Associates";
  const email = data?.email || "consult@apexfinancial.com";
  const phone = data?.phone || "+1 (555) 890-1234";
  const address = data?.address || "100 Financial District, Suite 400";
  const about = data?.about || "We provide expert financial guidance, tax advisory, and corporate structuring to help businesses and individuals maximize their wealth and maintain strict compliance.";

  const services = [
    { icon: <Landmark className="w-6 h-6" />, title: "Tax Advisory & Planning", desc: "Strategic tax planning for individuals and corporations to minimize liabilities and ensure compliance." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Corporate Finance", desc: "Expert guidance on mergers, acquisitions, capital raising, and financial restructuring." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Audit & Assurance", desc: "Independent and rigorous auditing services that provide credibility to your financial statements." },
    { icon: <PieChart className="w-6 h-6" />, title: "Wealth Management", desc: "Comprehensive portfolio management and advisory to secure and grow your personal wealth." }
  ];

  const metrics = [
    { icon: <Briefcase className="w-8 h-8" />, value: "25+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, value: "1,500+", label: "Clients Served" },
    { icon: <Landmark className="w-8 h-8" />, value: "$2B+", label: "Capital Advised" },
    { icon: <Award className="w-8 h-8" />, value: "50+", label: "Industry Awards" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#B45309] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center text-[#D97706] font-bold text-xl rounded">
              {name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#0F172A] leading-none">{name}</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Chartered Accountants</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#" className="text-[#D97706]">Home</a>
            <a href="#services" className="hover:text-[#D97706] transition-colors">Expertise</a>
            <a href="#about" className="hover:text-[#D97706] transition-colors">Firm Profile</a>
            <a href="#metrics" className="hover:text-[#D97706] transition-colors">Impact</a>
            <a href="#contact" className="hover:text-[#D97706] transition-colors">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="bg-[#0F172A] text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#D97706] transition-colors shadow-lg">
              Consult With Us
            </button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: "auto", opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a href="#" className="text-slate-900 font-semibold text-lg hover:text-[#D97706]">Home</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-semibold text-lg hover:text-[#D97706]">Expertise</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-semibold text-lg hover:text-[#D97706]">Firm Profile</a>
                <a href="#metrics" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-semibold text-lg hover:text-[#D97706]">Impact</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-semibold text-lg hover:text-[#D97706]">Contact</a>
                <button className="bg-[#0F172A] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#D97706] transition-colors mt-4">
                  Consult With Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-[#B45309] text-xs font-bold uppercase tracking-wider rounded-sm mb-6">
              <Award className="w-3.5 h-3.5" /> Premier Advisory Firm
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
              Empowering Your <span className="text-[#D97706]">Financial Future.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {about}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0F172A] text-white px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#D97706] transition-colors shadow-lg">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-[#0F172A] border border-slate-200 px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                Explore Services
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 pt-8 border-t border-slate-200">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Partner" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="Partner" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" alt="Partner" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div>
                <div className="flex items-center text-[#D97706] text-sm font-bold">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Trusted by 500+ Corporations</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706] to-transparent rounded-lg translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" 
              alt="Financial professionals in a meeting" 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 text-[#D97706] flex items-center justify-center rounded-full">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Client Growth</div>
                  <div className="text-2xl font-bold text-[#0F172A]">+145%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D97706] font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Comprehensive Financial Solutions</h3>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="group border border-slate-100 rounded-lg p-8 hover:shadow-[0_20px_40px_rgba(15,23,42,0.05)] hover:border-slate-200 transition-all bg-white hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D97706] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 bg-slate-50 text-[#0F172A] flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#0F172A] group-hover:text-[#D97706] transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center gap-1 text-[#0F172A] font-semibold text-sm group-hover:text-[#D97706] transition-colors">
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&q=80" 
              alt="Accounting documents and calculator" 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-[4/3] lg:aspect-square opacity-90"
            />
            <div className="absolute inset-0 border-2 border-[#D97706] rounded-lg translate-x-6 translate-y-6 z-0 hidden md:block"></div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-[#D97706] font-bold tracking-wider uppercase text-sm mb-3">Firm Profile</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Built on Trust. <br/> Driven by Results.</h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg font-light">
              For over two decades, {name} has been the cornerstone of financial stability for businesses and high-net-worth individuals. We don't just crunch numbers; we engineer financial strategies that ensure sustainable growth.
            </p>
            <ul className="space-y-4 mb-10">
              {["Uncompromising integrity and transparency", "Global perspective with local expertise", "Proactive and personalized advisory", "Strict adherence to regulatory compliance"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D97706] shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#D97706] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#B45309] transition-colors shadow-lg shadow-amber-900/50">
              Discover Our History
            </button>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-200 text-center"
          >
            {metrics.map((metric, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
                <div className="text-[#D97706] mb-4 bg-amber-50 p-4 rounded-full">{metric.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-2">{metric.value}</div>
                <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D97706] font-bold tracking-wider uppercase text-sm mb-3">Client Success</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Trusted by Industry Leaders</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Their corporate tax planning saved us millions. They are not just accountants; they are strategic partners in our growth.", author: "James Wilson", role: "CEO, TechNova Inc." },
              { text: "The level of detail in their audit reports is unmatched. It has brought immense clarity and credibility to our board.", author: "Sarah Jenkins", role: "CFO, Global Retail Ltd." },
              { text: "Managing personal wealth has never been easier. Their proactive approach ensures my assets are secure and growing.", author: "Dr. Robert Chen", role: "Private Investor" }
            ].map((test, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="bg-slate-50 p-8 rounded-lg border border-slate-100 relative">
                <div className="text-[#D97706] text-4xl font-serif absolute top-6 right-8 opacity-20">"</div>
                <div className="flex gap-1 text-[#D97706] mb-6">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={test.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A]">{test.author}</div>
                    <div className="text-xs text-slate-500">{test.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-[#D97706] font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Finances?</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Schedule a confidential consultation with our senior partners to discuss your specific financial requirements and discover how we can add value.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#D97706] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Head Office</h4>
                  <p className="text-slate-400 text-sm">{address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#D97706] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone Inquiry</h4>
                  <p className="text-slate-400 text-sm">{phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#D97706] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Connect</h4>
                  <p className="text-slate-400 text-sm">{email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Request a Consultation</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Service of Interest</label>
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all bg-white">
                  <option>Tax Advisory</option>
                  <option>Corporate Finance</option>
                  <option>Audit & Assurance</option>
                  <option>Wealth Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-[#0F172A] text-white py-4 rounded-sm font-bold hover:bg-[#D97706] transition-colors mt-2">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] py-16 border-t border-white/10 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center text-[#D97706] font-bold rounded">
                {name.charAt(0)}
              </div>
              <span className="font-bold text-lg tracking-tight text-white leading-none">{name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premier chartered accountant firm delivering strategic financial solutions, rigorous auditing, and comprehensive tax planning.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Firm Profile</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Reach</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Taxation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Finance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advisory Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Engagement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};

export default CharteredAccountantFirmT2;
