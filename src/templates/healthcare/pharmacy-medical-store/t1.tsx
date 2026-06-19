
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ShoppingBag, Shield, Truck, FileText, 
  Check, ArrowRight, Clock, Star, Award, HelpCircle,
  Phone, Mail, MapPin, Sparkles, Activity
} from "lucide-react";

export default function MedicalStoreTemplate1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const name = data.name || data.business_name || "Aura Pharmacy";
  const about = data.about || "Your modern wellness partner. Access verified prescriptions, daily supplements, and professional healthcare consulting online.";
  const phone = data.phone || "+1 (800) 555-0199";
  const email = data.email || "hello@aurapharmacy.com";
  const address = data.address || "452 Wellness Way, Suite 100, New York, NY";
  const openingHours = data.openingHours || "Mon - Sat: 8:00 AM - 10:00 PM";
  
  const itemName = data.item_name || "Daily Multivitamin Pack";
  const itemPrice = data.item_price || "$29.99";
  const itemDesc = data.item_description || "A comprehensive daily formula engineered with premium bio-available nutrients to sustain cellular energy and immune support.";
  const itemImage = data.item_image || "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop";

  const PRIMARY = "#4F46E5"; // Indigo 600
  const PRIMARY_LIGHT = "#E0E7FF"; // Indigo 100

  const pool = [
    "https://images.unsplash.com/photo-1586015555751-63bb77f4322a", // Pharmacy counter
    "https://images.unsplash.com/photo-1607619056574-7b8d304a3b24", // Medicine bottles
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef", // Healthcare consulting
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88", // Pharmacist
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de", // Pills organic
  ].map((url) => `${url}?q=80&w=800&auto=format&fit=crop`);

  // Use a completely pure, deterministic offset based on the name length to avoid Hydration mismatches
  const offset = name.length;
  const getImg = (index: number) => pool[(index + offset) % pool.length];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Featured Products", id: "products" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" }
  ];

  const faqs = [
    { q: "How do I upload and transfer my prescription?", a: "Simply click 'Upload Prescription' or visit our Contact section. You can upload a photo of your paper prescription, or provide your doctor's name, and our clinical team will handle the direct transfer." },
    { q: "Do you deliver to my neighborhood?", a: "We provide same-day doorstep express delivery within a 15-mile radius of our wellness hubs, and standard 2-day delivery nationwide." },
    { q: "Are my medications covered by insurance?", a: "Yes! We accept most major private insurance plans, Medicare, and HSA/FSA cards. We'll automatically fetch your coverage details during checkout." }
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFD] text-[#1E293B] font-sans selection:bg-[#4F46E5] selection:text-white pb-0 overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        .font-heading { font-family: 'Outfit', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}} />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-indigo-50/55 shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-heading font-extrabold text-2xl tracking-tight text-[#0F172A]">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{backgroundColor: PRIMARY}}>
              <Activity className="w-5 h-5" />
            </span>
            <span className="flex items-center">
              {name.split(" ")[0]}
              <span className="font-light text-slate-500">{name.split(" ").slice(1).join(" ") || "Rx"}</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-body font-semibold text-sm text-[#475569]">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-[#4F46E5] transition-colors relative group py-1">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4F46E5] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Order Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5" style={{backgroundColor: PRIMARY}}>
              Upload Rx
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#0F172A] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-b border-indigo-50 z-40 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-5 font-body font-bold text-lg">
                {navLinks.map((link) => (
                  <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className="hover:text-[#4F46E5] transition-colors">
                    {link.name}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-4 rounded-xl text-white font-bold tracking-wide mt-2" style={{backgroundColor: PRIMARY}}>
                  Upload Prescription
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 lg:pt-40 pb-24 px-6 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/30 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Pharmacy Experience
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold font-heading text-[#0F172A] leading-[1.05] tracking-tight mb-8">
              Medications <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#4F46E5]">Delivered Straight</span> <br/>
              To Your Door.
            </h1>
            <p className="text-[#475569] font-body text-lg max-w-xl mb-10 leading-relaxed">
              {about}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="#products" className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-center shadow-lg shadow-indigo-900/10 hover:shadow-indigo-950/20 transition-all flex items-center justify-center gap-2 group" style={{backgroundColor: PRIMARY}}>
                Browse Store <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold text-center transition-colors">
                Contact Pharmacist
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-indigo-50 w-full max-w-md">
              <div>
                <p className="text-3xl font-extrabold font-heading text-[#0F172A]">2-Hour</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Local Delivery</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold font-heading text-[#0F172A]">100%</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">FDA Verified</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold font-heading text-[#0F172A]">24/7</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Live Consults</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* SaaS Floating Card */}
            <div className="absolute top-8 left-0 md:-left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(79,70,229,0.12)] border border-indigo-50/50 z-20 flex items-center gap-4 w-60">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#4F46E5] shrink-0" style={{backgroundColor: PRIMARY_LIGHT}}>
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-400">Order Status</p>
                <p className="text-sm font-bold text-[#0F172A]">Out for Delivery</p>
                <span className="text-[10px] text-indigo-600 font-bold">Arriving in 12 mins</span>
              </div>
            </div>

            <div className="absolute -bottom-6 right-0 md:-right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 z-20 flex flex-col gap-2 w-48">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#E4B676] text-[#E4B676]" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#0F172A]">"A complete game changer for getting my daily prescriptions safely!"</p>
              <span className="text-[10px] text-slate-400 font-bold">— Sarah K.</span>
            </div>

            {/* Image Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-4 border-white bg-indigo-50">
              <img src={getImg(0)} alt="Modern Pharmacy Hub" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BENTO TRUST STATS */}
      <section className="py-16 px-6 bg-slate-50 border-y border-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">Secure Clinician Approvals</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Every prescription undergoes double-pharmacist checks and medical matching protocols before leaving our hubs.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">FDA-Approved Wellness</h3>
                <p className="text-slate-500 text-sm leading-relaxed">We source 100% of our products directly from certified manufacturers, ensuring absolute chemical and shelf integrity.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">24/7 Digital Operations</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Our online portal permits medication requests, automated prescription refills, and clinician chat at any hour.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            {/* Visual Overlap circles */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-[3.5rem] overflow-hidden shadow-xl border-4 border-white bg-indigo-50">
              <img src={getImg(2)} alt="Clinical Consultation" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white hidden sm:block">
              <img src={getImg(3)} alt="Organic Formulation" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{color: PRIMARY}}>Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] leading-tight mb-6">
              Reimagining the pharmaceutical experience with ease.
            </h2>
            <p className="text-slate-500 font-body text-base leading-relaxed mb-8">
              We started {name} to bridge the gap between healthcare convenience and clinical excellence. Visiting a local drug store shouldn't feel like a chore. Our technology platform digitizes prescriptions, organizes refilling cycles, and matches you with real consulting pharmacists instantly.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Direct prescription synchronization with your doctors",
                "Temperature-controlled local door deliveries",
                "Fully certified pharmaceutical specialists on call"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#4F46E5]" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-[#1E293B]">{point}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="px-8 py-3.5 rounded-full text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity" style={{backgroundColor: PRIMARY}}>
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* DYNAMIC ITEM / FEATURED PRODUCTS */}
      <section id="products" className="py-24 px-6 bg-slate-50 border-y border-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{color: PRIMARY}}>Product Spotlight</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] leading-tight">
              Featured Health Products
            </h2>
            <p className="text-slate-400 mt-4 text-sm font-bold">Discover our curated medical items delivered on priority demand.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-indigo-50/50">
            {/* Product Image */}
            <div className="lg:col-span-5 relative aspect-square rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50">
              <img src={itemImage} alt={itemName} className="w-full h-full object-cover" />
            </div>

            {/* Product Info */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100">
                Direct Delivery Item
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-[#0F172A] mb-4">
                {itemName}
              </h3>
              <p className="text-slate-500 font-body text-base leading-relaxed mb-6">
                {itemDesc}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-extrabold font-heading" style={{color: PRIMARY}}>{itemPrice}</span>
                <span className="text-xs font-bold text-slate-400 line-through">$39.99</span>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Save 25%</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a href="#contact" className="px-8 py-4 rounded-full text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/10 hover:shadow-indigo-950/20 transition-all w-full sm:w-auto" style={{backgroundColor: PRIMARY}}>
                  <ShoppingBag className="w-4 h-4" /> Order Item Now
                </a>
                <a href={`tel:${phone}`} className="px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold text-center transition-colors w-full sm:w-auto">
                  Call & Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{color: PRIMARY}}>Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-bold text-base md:text-lg text-[#0F172A] hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <HelpCircle className="w-5 h-5 shrink-0 text-slate-400 ml-4" />
              </button>
              <AnimatePresence>
                {faqOpen === i && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-500 font-body leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / APPOINTMENT SECTION */}
      <section id="contact" className="py-24 px-6 bg-slate-50 border-t border-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{color: PRIMARY}}>Need Help?</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] leading-tight mb-8">
                Connect with our wellness team today.
              </h2>
              <p className="text-slate-500 font-body text-base leading-relaxed mb-10">
                Have questions about medicine availability, local deliveries, or prescription uploads? Submit a request or contact our digital helpdesk.
              </p>

              <div className="space-y-6 w-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Our Wellness Hub</p>
                    <p className="font-bold text-sm text-[#0F172A]">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Direct Helpdesk</p>
                    <p className="font-bold text-sm text-[#0F172A]">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email support</p>
                    <p className="font-bold text-sm text-[#0F172A]">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_LIGHT, color: PRIMARY}}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Operating Hours</p>
                    <p className="font-bold text-sm text-[#0F172A]">{openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SaaS Request Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2" style={{backgroundColor: PRIMARY}}></div>
              <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-8">Inquire or Upload Rx</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Your Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#4F46E5] p-4 rounded-xl focus:outline-none transition-colors text-sm font-bold text-[#0F172A]" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Phone Number</label>
                    <input type="text" placeholder="(555) 000-0000" className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#4F46E5] p-4 rounded-xl focus:outline-none transition-colors text-sm font-bold text-[#0F172A]" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email Address</label>
                  <input type="email" placeholder="john@domain.com" className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#4F46E5] p-4 rounded-xl focus:outline-none transition-colors text-sm font-bold text-[#0F172A]" />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Upload Prescription Receipt (Optional)</label>
                  <div className="border-2 border-dashed border-slate-200 hover:border-[#4F46E5] transition-colors rounded-xl p-8 text-center cursor-pointer bg-[#F8FAFC]">
                    <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-400">Click to browse or drag & drop Rx image</p>
                    <span className="text-[10px] text-slate-400">Supports PDF, PNG, JPG</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Inquiry Message</label>
                  <textarea rows={3} placeholder="Please list the medications or supplements you need..." className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#4F46E5] p-4 rounded-xl focus:outline-none transition-colors text-sm font-bold text-[#0F172A]"></textarea>
                </div>

                <button className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-indigo-900/10 hover:shadow-indigo-900/25 transition-all mt-4" style={{backgroundColor: PRIMARY}}>
                  Submit Clinical Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-white pt-20 pb-10 border-t-[6px]" style={{borderColor: PRIMARY}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{backgroundColor: PRIMARY}}>
                  <Activity className="w-4 h-4" />
                </span>
                <span>{name}</span>
              </div>
              <p className="text-slate-400 text-xs font-body leading-relaxed max-w-xs mb-8">
                Bridging convenience and healthcare excellence. Fully certified pharmacy delivering prescription care in minutes.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center hover:text-white hover:border-white transition-all cursor-pointer">
                  <span className="font-bold text-xs">IG</span>
                </div>
                <div className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center hover:text-white hover:border-white transition-all cursor-pointer">
                  <span className="font-bold text-xs">FB</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold font-heading uppercase tracking-widest text-xs mb-6">Explore</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-slate-400 hover:text-white transition-colors text-xs font-semibold">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold font-heading uppercase tracking-widest text-xs mb-6">Categories</h4>
              <ul className="space-y-4 text-xs font-semibold text-slate-400">
                <li>Prescription Refills</li>
                <li>Hormonal Support</li>
                <li>Longevity Vitamins</li>
                <li>Digital Telehealth</li>
              </ul>
            </div>

            {/* Visit Details */}
            <div>
              <h4 className="text-white font-bold font-heading uppercase tracking-widest text-xs mb-6">Our Hub</h4>
              <p className="text-slate-400 text-xs mb-4 flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{color: PRIMARY}} />
                {address}
              </p>
              <p className="text-slate-400 text-xs mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{color: PRIMARY}} />
                {phone}
              </p>
              <p className="text-slate-400 text-xs mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{color: PRIMARY}} />
                {email}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
            <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
