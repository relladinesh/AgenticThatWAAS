
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  MapPin, 
  PhoneCall, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  ShieldCheck
} from "lucide-react";

export default function GeneralTemplate5({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()) as any);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "Local Experts";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Trusted professionals in your neighborhood.";
  const about = data?.about || "We provide top-rated, reliable services to our local community with a commitment to excellence and customer satisfaction.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Residential Services",
    "Commercial Projects",
    "Emergency Support",
    "Maintenance Plans"
  ];
  const email = data?.email || "hello@localexperts.com";
  const phone = data?.phone || "(555) 123-4567";
  const address = data?.address || "123 Main St, Hometown, ST 12345";
  const hours = data?.openingHours || "Mon-Fri: 8am - 6pm";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-[#047857] selection:text-white overflow-x-hidden">
      
      {/* TOP NOTIFICATION BANNER */}
      <div className="bg-[#064E3B] text-white text-xs md:text-sm font-medium py-2 px-6 flex justify-between items-center z-50 relative">
        <div className="max-w-[90rem] mx-auto w-full flex justify-between items-center">
          <div className="flex gap-6">
            <span className="hidden md:flex items-center gap-2"><Clock className="w-4 h-4 text-[#34D399]" /> {hours}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#34D399]" /> {address}</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 font-bold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#FBBF24] fill-[#FBBF24]" />)} 
              <span className="ml-1 hidden md:inline">5.0 Rated</span>
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-4" : "top-8 bg-transparent py-6"}`}>
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#047857] flex items-center justify-center text-white font-bold text-xl shadow-md">
              {name.charAt(0)}
            </div>
            <span className="font-extrabold tracking-tight text-xl md:text-2xl text-[#1C1917]">{name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-[#44403C]">
            <a href="#about" className="hover:text-[#047857] transition-colors">Why Us</a>
            <a href="#services" className="hover:text-[#047857] transition-colors">Our Services</a>
            <a href="#reviews" className="hover:text-[#047857] transition-colors">Reviews</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${phone}`} className="flex items-center gap-2 font-black text-[#047857] hover:text-[#064E3B] transition-colors">
              <PhoneCall className="w-5 h-5" /> {phone}
            </a>
            <a href="#contact" className="bg-[#047857] hover:bg-[#064E3B] text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all">
              Book Now
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#1C1917] p-2">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-stone-200 overflow-hidden absolute top-full left-0 w-full shadow-xl">
              <div className="px-6 py-6 space-y-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#1C1917]">Why Us</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#1C1917]">Our Services</a>
                <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block font-bold text-[#1C1917]">Reviews</a>
                <a href={`tel:${phone}`} className="flex items-center gap-2 font-black text-[#047857] pt-4 border-t border-stone-100">
                  <PhoneCall className="w-5 h-5" /> Call {phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#047857]/5 rounded-bl-[200px] pointer-events-none -z-10"></div>
        <motion.div style={{ y: yParallaxSlow }} className="absolute -left-20 top-40 w-64 h-64 bg-[#34D399]/10 rounded-full blur-[60px] pointer-events-none -z-10"></motion.div>

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full font-bold text-[#064E3B] text-sm shadow-sm border border-stone-200">
              <ShieldCheck className="w-4 h-4 text-[#047857]" /> Licensed, Bonded & Insured
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1C1917] leading-[1.05]">
              The local team you can <br/>
              <span className="text-[#047857]">actually trust.</span>
            </h1>
            
            <p className="text-stone-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              {tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="bg-[#047857] hover:bg-[#064E3B] text-white px-8 py-4 rounded-xl font-black text-lg text-center transition-all shadow-[0_10px_30px_rgba(4,120,87,0.3)]">
                Get a Free Estimate
              </a>
              <a href={`tel:${phone}`} className="bg-white hover:bg-stone-50 text-[#064E3B] border-2 border-stone-200 px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all">
                <PhoneCall className="w-5 h-5" /> {phone}
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Customer" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600">+2k</div>
              </div>
              <div className="text-sm font-bold text-stone-600">
                Happy local customers
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 bg-[#047857] rounded-3xl transform translate-x-4 translate-y-4 z-0 opacity-20"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
              <img src={getImg("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d", 0, data?.image)} alt={name} className="w-full h-full object-cover" />
              
              {/* Floating Badge */}
              <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-[#047857]">
                  <Star className="w-6 h-6 fill-[#047857]" />
                </div>
                <div>
                  <div className="font-black text-[#1C1917]">Top Rated</div>
                  <div className="text-xs font-bold text-stone-500">In {address.split(',')[1] || "your area"}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white border-y border-stone-200">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1C1917] mb-4">How we can help you</h2>
            <p className="text-stone-500 font-medium text-lg max-w-2xl mx-auto">Professional services tailored for your home and business needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#FAFAF9] border border-stone-200 rounded-2xl p-8 hover:border-[#047857] hover:shadow-[0_10px_30px_rgba(4,120,87,0.1)] transition-all duration-300 group cursor-pointer text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#047857] shadow-sm mb-6 group-hover:bg-[#047857] group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-black text-xl text-[#1C1917] mb-2">{service}</h3>
                <p className="text-stone-500 text-sm font-medium">Expert handling and care guaranteed.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section id="about" className="py-24 px-6 bg-[#FAFAF9] relative overflow-hidden">
        <motion.div style={{ y: yParallaxSlow }} className="absolute -right-32 top-20 text-[#047857]/5">
          <ShieldCheck className="w-96 h-96" />
        </motion.div>
        
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <img src={getImg("https://images.unsplash.com/photo-1522071820081-009f0129c71c", 1)} className="rounded-2xl object-cover h-64 w-full shadow-lg" alt="Team" />
                <img src={getImg("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", 2)} className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8" alt="Work" />
             </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1917] leading-tight">
              Community driven. <br/> Locally owned.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-medium">
              {about}
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Upfront Pricing & No Hidden Fees",
                "Fully Licensed & Insured Professionals",
                "100% Satisfaction Guarantee",
                "Available for Emergencies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[#1C1917]">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-[#047857] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 px-6 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-black">Ready to get your project started?</h2>
          <p className="text-green-100 text-lg md:text-xl font-medium">Contact our dispatch team directly or submit a request online. We respond in minutes, not days.</p>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-left text-[#1C1917] max-w-2xl mx-auto relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-stone-100 rounded-bl-full z-0"></div>
             <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
               <div className="space-y-2">
                 <label className="text-sm font-bold text-stone-500 uppercase">What do you need help with?</label>
                 <select className="w-full bg-[#FAFAF9] border border-stone-200 px-4 py-4 rounded-xl font-bold focus:outline-none focus:border-[#047857]">
                   <option>General Service Request</option>
                   <option>Emergency Issue</option>
                   <option>Get a Quote</option>
                 </select>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-stone-500 uppercase">Name</label>
                   <input type="text" className="w-full bg-[#FAFAF9] border border-stone-200 px-4 py-4 rounded-xl font-bold focus:outline-none focus:border-[#047857]" placeholder="Your Name" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-stone-500 uppercase">Phone Number</label>
                   <input type="tel" className="w-full bg-[#FAFAF9] border border-stone-200 px-4 py-4 rounded-xl font-bold focus:outline-none focus:border-[#047857]" placeholder="(555) 000-0000" />
                 </div>
               </div>
               <button className="w-full bg-[#047857] hover:bg-[#064E3B] text-white py-4 rounded-xl font-black text-lg transition-colors shadow-md flex items-center justify-center gap-2">
                 Send Request <ArrowRight className="w-5 h-5" />
               </button>
               <p className="text-center text-sm font-bold text-stone-400">We respect your privacy. No spam.</p>
             </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1917] text-stone-400 py-16 px-6">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#047857] flex items-center justify-center text-white font-bold text-lg">
                {name.charAt(0)}
              </div>
              <span className="font-extrabold text-white text-xl">{name}</span>
            </div>
            <p className="text-sm font-medium max-w-sm">{tagline}</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Contact Information</h4>
            <div className="font-bold text-sm space-y-2">
              <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-[#047857]" /> {phone}</div>
              <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[#047857]" /> {email}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#047857]" /> {address}</div>
            </div>
          </div>
          <div className="space-y-4">
             <h4 className="font-bold text-white uppercase tracking-widest text-xs">Business Hours</h4>
             <div className="font-bold text-sm flex items-center gap-2">
               <Clock className="w-4 h-4 text-[#047857]" /> {hours}
             </div>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-stone-500">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Button for Mobile */}
      <a href={`tel:${phone}`} className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#047857] text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-[#064E3B] transition-colors border-2 border-white">
        <PhoneCall className="w-6 h-6" />
      </a>
    </div>
  );
}
