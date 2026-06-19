
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ShieldCheck, HeartPulse, Car, Home, 
  Briefcase, ArrowRight, CheckCircle, Clock, 
  ThumbsUp, Users, ChevronDown, PhoneCall
} from "lucide-react";

const InsuranceAgencyBrokerT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "SecureLife Insurance Brokers";
  const email = data?.email || "quotes@securelife.com";
  const phone = data?.phone || "+1 (800) 555-0199";
  const about = data?.about || "We provide comprehensive, tailored insurance solutions to protect your family, business, and most valuable assets with peace of mind.";

  const insuranceTypes = [
    { icon: <HeartPulse className="w-8 h-8 text-rose-500" />, title: "Health & Life", desc: "Comprehensive coverage ensuring your family's medical needs and future financial stability." },
    { icon: <Car className="w-8 h-8 text-blue-500" />, title: "Auto Insurance", desc: "Protect your vehicles against accidents, theft, and third-party liabilities with premium plans." },
    { icon: <Home className="w-8 h-8 text-emerald-500" />, title: "Home Insurance", desc: "Safeguard your sanctuary and belongings against natural disasters, fire, and theft." },
    { icon: <Briefcase className="w-8 h-8 text-indigo-500" />, title: "Business Coverage", desc: "Tailored commercial policies protecting your enterprise from unforeseen operational risks." }
  ];

  const benefits = [
    { icon: <Clock className="w-6 h-6" />, title: "Lightning Fast Claims", desc: "We ensure your claims are processed within 24-48 hours, eliminating stressful waiting periods." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "100% Claim Settlement Ratio", desc: "Our unmatched track record ensures you get what you deserve when you need it most." },
    { icon: <ThumbsUp className="w-6 h-6" />, title: "Lowest Premium Guarantee", desc: "We compare plans across 30+ providers to guarantee you the best possible coverage rates." },
    { icon: <Users className="w-6 h-6" />, title: "Dedicated Advisor", desc: "Get a personal insurance expert who understands your exact needs and advocates for you." }
  ];

  const faqs = [
    { q: "How do I choose the right insurance policy?", a: "Our dedicated advisors analyze your lifestyle, financial goals, and risk factors to recommend personalized plans tailored specifically for you." },
    { q: "Can I switch my current policy to your agency?", a: "Absolutely! We handle the entire portability process seamlessly without any loss of your existing accumulated benefits." },
    { q: "What happens if I miss a premium payment?", a: "Most policies offer a 15-30 day grace period. We also send automated reminders so your coverage never lapses unintentionally." },
    { q: "Are your consultation services free?", a: "Yes, our expert consultations and policy comparisons are 100% free with absolutely no hidden fees or obligations." }
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white rounded-xl shadow-lg shadow-blue-600/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>{name.split(' ')[0]}</span>
              <span className={`text-[10px] uppercase tracking-widest font-bold mt-1 ${isScrolled ? 'text-blue-600' : 'text-blue-600 md:text-blue-400'}`}>Insurance Brokers</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-8 font-semibold text-sm ${isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-slate-200'}`}>
            <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#insurance" className="hover:text-blue-500 transition-colors">Policies</a>
            <a href="#benefits" className="hover:text-blue-500 transition-colors">Why Us</a>
            <a href="#faq" className="hover:text-blue-500 transition-colors">FAQs</a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center gap-2 font-bold ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              <PhoneCall className="w-4 h-4 text-blue-500" /> {phone}
            </div>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5">
              Get Free Quote
            </button>
          </div>

          <button className={`lg:hidden ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#" className="text-slate-900 font-bold text-lg hover:text-blue-600">Home</a>
                <a href="#insurance" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-bold text-lg hover:text-blue-600">Policies</a>
                <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-bold text-lg hover:text-blue-600">Why Us</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-bold text-lg hover:text-blue-600">FAQs</a>
                <div className="w-full h-px bg-slate-100"></div>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <PhoneCall className="w-5 h-5 text-blue-600" /> {phone}
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg">
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
        {/* Background Image for Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600&q=80" 
            alt="Family Protection" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl md:text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 md:bg-blue-500/20 text-blue-600 md:text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm border border-blue-100 md:border-blue-400/30">
              <ShieldCheck className="w-4 h-4" /> Award Winning Brokers
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Protecting What <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Matters Most.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 md:text-slate-300 mb-10 leading-relaxed font-light">
              {about}
            </p>
            
            {/* Quick Quote Form */}
            <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2 max-w-xl">
              <select className="px-6 py-4 bg-transparent border-none text-slate-600 font-medium focus:ring-0 w-full md:w-auto outline-none cursor-pointer">
                <option>Health Insurance</option>
                <option>Life Insurance</option>
                <option>Auto Insurance</option>
                <option>Home Insurance</option>
              </select>
              <div className="w-px h-8 bg-slate-200 hidden md:block self-center"></div>
              <input type="tel" placeholder="Phone Number" className="px-6 py-4 bg-transparent border-none text-slate-900 font-medium focus:ring-0 w-full outline-none" />
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl md:rounded-full font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Get Quote
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-500 md:text-slate-400">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Free Consultation</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Zero Hidden Fees</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY LOGOS */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted partners & providers</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Simulated partner logos text */}
            <div className="text-xl font-black">HDFC ERGO</div>
            <div className="text-xl font-black">STAR HEALTH</div>
            <div className="text-xl font-black">LIC INDIA</div>
            <div className="text-xl font-black">MAX LIFE</div>
            <div className="text-xl font-black">BAJAJ ALLIANZ</div>
          </div>
        </div>
      </section>

      {/* POLICIES SECTION */}
      <section id="insurance" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Coverage Plans</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Tailored Insurance Solutions</h3>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {insuranceTypes.map((type, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all group border border-slate-100 relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {type.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{type.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all absolute bottom-8">
                  View Plans <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="benefits" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Why SecureLife</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">Experience the Ultimate Peace of Mind.</h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg font-light">
              We don't just sell policies; we build long-term relationships based on trust, transparency, and unwavering support during your times of need.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80" 
              alt="Insurance Consultation" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
            />
            {/* Trust Badge */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden md:flex">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Protected Clients</div>
                <div className="text-2xl font-black text-slate-900">50,000+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Clear Doubts</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-slate-800/80 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === i ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white rounded-xl shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight leading-none text-slate-900">{name.split(' ')[0]} <br/><span className="text-blue-600 text-sm">Brokers</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Dedicated to securing your future with tailored, affordable, and comprehensive insurance policies from top-rated providers.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-slate-900">Insurance Plans</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Family Health Insurance</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Term Life Insurance</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Auto & Two-Wheeler</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Corporate Liability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-slate-900">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Claim Process</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Premium Calculator</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog & News</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-slate-900">{phone}</span>
              </li>
              <li>{email}</li>
              <li>100 Insurance Boulevard, Financial District</li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};

export default InsuranceAgencyBrokerT2;
