
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ShoppingCart, Search, FileText, 
  PhoneCall, Phone, ShieldCheck, HeartPulse, Activity,
  Pill, Stethoscope, Baby, Clock, MapPin, Mail, ArrowRight, CheckCircle2, ChevronRight,
  Sparkles
} from "lucide-react";

const MedicalStoreTemplate2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const name = data?.name || data?.business_name || "Apollo Pharmacy";
  const about = data?.about || "Your trusted neighborhood healthcare partner. We provide 100% genuine medicines, expert consultations, and lightning-fast delivery to ensure your family's health is never compromised.";
  const phone = data?.phone || "1800-425-425";
  const email = data?.email || "customercare@apollopharmacy.com";
  const address = data?.address || "No. 11/29/212, Desaipet Rd, Kothawada, Warangal";
  
  // Custom Color Palette: Trusted Medical Teal & Deep Navy
  const TEAL = "#0D9488"; // Medical Teal
  const TEAL_LIGHT = "#CCFBF1";
  const NAVY = "#0F172A"; // Slate 900
  const GRAY_BG = "#F8FAFC"; // Slate 50

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["home", "categories", "products", "upload", "contact"];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Shop by Category", id: "categories" },
    { name: "Top Products", id: "products" },
    { name: "Upload Rx", id: "upload" },
    { name: "Contact", id: "contact" }
  ];

  const categories = [
    { icon: <Pill className="w-8 h-8" />, name: "Medicines", desc: "100% Genuine Rx" },
    { icon: <HeartPulse className="w-8 h-8" />, name: "Vitamins", desc: "Immunity Boosters" },
    { icon: <Activity className="w-8 h-8" />, name: "Devices", desc: "BP & Sugar Monitors" },
    { icon: <Baby className="w-8 h-8" />, name: "Baby Care", desc: "Gentle & Safe" },
    { icon: <Stethoscope className="w-8 h-8" />, name: "Lab Tests", desc: "Home Collection" },
    { icon: <Sparkles className="w-8 h-8" />, name: "Personal Care", desc: "Skin & Hair" }
  ];

  const products = [
    { name: "Complete Multivitamin Formula", price: "₹450", oldPrice: "₹600", discount: "25% OFF", image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=500&auto=format&fit=crop" },
    { name: "Advanced BP Monitor Pro", price: "₹1,299", oldPrice: "₹1,999", discount: "35% OFF", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500&auto=format&fit=crop" },
    { name: "Daily Omega-3 Fish Oil", price: "₹899", oldPrice: "₹1,199", discount: "20% OFF", image: "https://images.unsplash.com/photo-1607619056574-7b8d304a3b24?q=80&w=500&auto=format&fit=crop" },
    { name: "Organic Baby Care Kit", price: "₹599", oldPrice: "₹750", discount: "15% OFF", image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=500&auto=format&fit=crop" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#0D9488] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white border-b border-slate-200 py-4"}`}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div onClick={() => scrollToSection("home")} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#0D9488] to-[#0F766E] shadow-lg group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl">+</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-[#0F172A]">
              {name.split(" ")[0]}
              <span className="text-[#0D9488]">{name.split(" ").slice(1).join(" ") ? " " + name.split(" ").slice(1).join(" ") : ""}</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-slate-600">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className={`relative py-2 transition-colors hover:text-[#0D9488] ${activeSection === link.id ? "text-[#0D9488]" : ""}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D9488] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 hover:text-[#0D9488] cursor-pointer transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <div className="relative text-slate-500 hover:text-[#0D9488] cursor-pointer transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[#EF4444] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
            <button onClick={() => scrollToSection("upload")} className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#0D9488] hover:bg-[#0F766E] transition-colors shadow-[0_4px_14px_0_rgba(13,148,136,0.39)]">
              Order Medicines
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="relative text-[#0D9488]">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#EF4444] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
            <button className="text-[#0F172A] p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 overflow-hidden shadow-2xl z-40"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollToSection(link.id)} 
                    className={`text-left text-lg font-bold py-3 border-b border-slate-100 flex items-center justify-between ${activeSection === link.id ? "text-[#0D9488]" : "text-[#0F172A]"}`}
                  >
                    {link.name}
                    <ChevronRight className={`w-5 h-5 ${activeSection === link.id ? "opacity-100" : "opacity-0"}`} />
                  </button>
                ))}
                <button onClick={() => scrollToSection("upload")} className="w-full mt-4 py-4 rounded-xl text-white font-bold text-center bg-[#0D9488] shadow-lg shadow-[#0D9488]/20">
                  Upload Prescription
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden relative bg-white">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CCFBF1] rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CCFBF1] text-[#0F766E] text-xs font-bold uppercase tracking-widest mb-8 border border-[#99F6E4]">
              <PhoneCall className="w-4 h-4" /> 24/7 Delivery Available
            </motion.div>
            
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-5xl lg:text-[4.5rem] font-extrabold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
              Health Delivered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#0284C7]">Safely & Quickly.</span>
            </motion.h1>
            
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              {about} Get flat 15% off on all prescription medicines on your first order.
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full">
              <button onClick={() => scrollToSection("upload")} className="px-8 py-4 bg-[#0D9488] text-white rounded-xl font-bold text-lg hover:bg-[#0F766E] transition-all shadow-[0_8px_30px_rgb(13,148,136,0.3)] flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" /> Order via Rx
              </button>
              <div className="relative w-full sm:w-auto flex-1 max-w-sm">
                <input type="text" placeholder="Search for medicines..." className="w-full h-full min-h-[56px] pl-12 pr-4 bg-white border-2 border-slate-200 rounded-xl focus:border-[#0D9488] focus:outline-none text-slate-700 font-medium transition-colors shadow-sm" />
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-100 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CCFBF1] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm">100% Genuine</p>
                  <p className="text-xs text-slate-500">Quality Assured</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm">Expert Pharmacists</p>
                  <p className="text-xs text-slate-500">Free Consultation</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center">
            {/* Interactive Badge */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring", stiffness: 200 }} className="absolute -left-4 top-20 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="font-bold text-[#0F172A]">Delivery in 15 mins</p>
                <p className="text-xs text-slate-500">In select pin codes</p>
              </div>
            </motion.div>

            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative z-10 border-8 border-white shadow-2xl bg-slate-50">
              <img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1000&auto=format&fit=crop" alt="Pharmacy Professional" className="w-full h-full object-cover object-top" />
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[radial-gradient(#0D9488_2px,transparent_2px)] [background-size:16px_16px] opacity-20 z-0" />
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section id="categories" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">Shop by Category</h2>
              <p className="text-slate-500 max-w-xl text-lg">Everything you need for your family's health, conveniently organized.</p>
            </div>
            <button className="text-[#0D9488] font-bold flex items-center gap-1 hover:text-[#0F766E] transition-colors">
              View All Categories <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#F0FDFA] rounded-full flex items-center justify-center text-[#0D9488] mb-4 group-hover:scale-110 group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-1">{cat.name}</h3>
                <p className="text-xs text-slate-500">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="products" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#0D9488] font-bold uppercase tracking-widest text-xs mb-3 block">Top Sellers</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">Trending Health Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow group">
                <div className="relative aspect-square bg-slate-50 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 bg-[#EF4444] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10">
                    {product.discount}
                  </div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2 line-clamp-1 group-hover:text-[#0D9488] transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-extrabold text-[#0F172A]">{product.price}</span>
                    <span className="text-sm font-semibold text-slate-400 line-through">{product.oldPrice}</span>
                  </div>
                  <button className="w-full py-3 rounded-xl border-2 border-[#0D9488] text-[#0D9488] font-bold hover:bg-[#0D9488] hover:text-white transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESCRIPTION UPLOAD (WORKFLOW) */}
      <section id="upload" className="py-24 bg-[#F0FDFA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none" />
        
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-6">
              Have a Prescription? <br /> <span className="text-[#0D9488]">Upload & Relax.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Upload your valid prescription and our expert pharmacists will arrange your medicines. Enjoy doorstep delivery with guaranteed authenticity.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { step: "1", title: "Upload your Prescription", desc: "Take a clear photo of your Rx." },
                { step: "2", title: "Pharmacist Verification", desc: "Our team verifies the dosage and availability." },
                { step: "3", title: "Doorstep Delivery", desc: "Pay online and receive medicines quickly." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold shrink-0 mt-1 shadow-md shadow-[#0D9488]/30">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-lg">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Upload Prescription</h3>
            
            <div className="border-2 border-dashed border-[#0D9488]/30 bg-[#F0FDFA]/50 rounded-2xl p-10 text-center hover:bg-[#F0FDFA] transition-colors cursor-pointer mb-6 group">
              <div className="w-16 h-16 bg-[#CCFBF1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-[#0D9488]" />
              </div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">Click to browse files</p>
              <p className="text-sm text-slate-500">Supports JPG, PNG, PDF (Max 5MB)</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="terms" className="w-4 h-4 text-[#0D9488] rounded border-slate-300 focus:ring-[#0D9488]" />
              <label htmlFor="terms" className="text-sm text-slate-600 font-medium">
                I have a valid prescription from a registered practitioner.
              </label>
            </div>

            <button className="w-full py-4 bg-[#0F172A] text-white rounded-xl font-bold text-lg hover:bg-[#1E293B] transition-colors shadow-xl">
              Proceed to Order
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-[#0F172A] text-white pt-24 pb-10">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#0D9488] to-[#0F766E] shadow-lg">
                  <span className="font-extrabold text-xl">+</span>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  {name.split(" ")[0]}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                Your neighborhood healthcare partner. Quality medicines, expert care, and swift delivery.
              </p>
              <div className="flex items-center gap-4">
                {/* Social Icons Placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0D9488] transition-colors cursor-pointer">
                  <span className="font-bold text-xs">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0D9488] transition-colors cursor-pointer">
                  <span className="font-bold text-xs">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0D9488] transition-colors cursor-pointer">
                  <span className="font-bold text-xs">TW</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#categories" className="hover:text-white transition-colors">Shop Categories</a></li>
                <li><a href="#upload" className="hover:text-white transition-colors">Upload Prescription</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Online Medicine Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lab Tests at Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Doctor Consultations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare Devices</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#0D9488] shrink-0" />
                  <span className="leading-relaxed">{address}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-[#0D9488] shrink-0" />
                  <span>{phone}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-[#0D9488] shrink-0" />
                  <span>{email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default MedicalStoreTemplate2;
