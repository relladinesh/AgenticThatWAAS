
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronRight, Menu, X, ArrowRight, CheckCircle2, Star, Dumbbell, Users, Target, Activity, Quote, Instagram, Facebook, Twitter, Map, MessageCircle } from "lucide-react";
import { TemplateProps } from "@/types";

const GymTemplate2 = ({ data }: TemplateProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    name = "Jones Gym",
    phone = "+1 234 567 890",
    email = "hello@jonesgym.com",
    address = "123 Fitness Ave, NY",
    openingHours = "Mon - Sun: 5:00 AM - 11:00 PM",
    about = "Discover our premier unisex gym with state-of-the-art facilities and expert trainers.",
    services = ["Personal Training", "CrossFit", "Yoga", "Cardio"],
    image = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000"
  } = data || {};

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* FLOATING WHATSAPP */}
      <a href={`https://wa.me/${phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-900 tracking-tighter uppercase flex flex-col leading-none">
            <span>{name.split(' ')[0] || "Jones"}</span>
            <span className="text-blue-600">{name.split(' ').slice(1).join(' ') || "Gym"}</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#" className="text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#facilities" className="hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          </nav>
          
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

          <button className="lg:hidden text-blue-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            transition={{ duration: 0.4 }} 
            className="fixed inset-0 z-40 bg-white/90 lg:hidden flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Soft decorative background blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-100 rounded-full blur-[80px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-pink-100 rounded-full blur-[80px] opacity-70 pointer-events-none"></div>
            
            <nav className="flex flex-col gap-8 text-3xl sm:text-4xl font-black text-center text-blue-950 tracking-tighter relative z-10 w-full px-6">
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} href="#" className="text-[#1a4bb8]" onClick={() => setIsMobileMenuOpen(false)}>Home</motion.a>
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} href="#about" className="hover:text-[#1a4bb8] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</motion.a>
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} href="#services" className="hover:text-[#1a4bb8] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</motion.a>
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} href="#facilities" className="hover:text-[#1a4bb8] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</motion.a>
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} href="#pricing" className="hover:text-[#1a4bb8] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</motion.a>
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} href="#contact" className="mt-4 bg-[#1a4bb8] text-white px-8 py-4 rounded-full text-xl shadow-[0_10px_20px_rgba(26,75,184,0.3)] mx-auto inline-block" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white min-h-[90vh] flex items-center">
        
        {/* Exact background from the user's reference */}
        {/* Right side blue block with rounded bottom left (Desktop Only) */}
        <div className="absolute top-0 right-0 w-[55%] lg:w-[45%] h-[95%] bg-gradient-to-br from-[#1e40af] to-[#1a4bb8] rounded-bl-[100px] z-0 hidden lg:block overflow-hidden shadow-2xl shadow-blue-900/20">
          {/* Decorative Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]"></div>

          {/* Pink mound inside the blue block */}
          <div className="absolute bottom-[-5%] left-[-15%] w-[130%] h-[75%] bg-gradient-to-t from-[#ff8fa3] to-[#ffb6c1] rounded-t-[50%] z-0"></div>
          
          {/* Additional large soft light bloom */}
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl z-0"></div>

          {/* Thin white curvy outline swirls */}
          <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" viewBox="0 0 400 400" fill="none">
            <path d="M-50,200 C100,350 250,150 450,200" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M-50,250 C100,400 250,200 450,250" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M-50,300 C100,450 250,250 450,300" stroke="white" strokeWidth="1" fill="none" strokeDasharray="6,6" />
          </svg>
        </div>

        {/* Mobile Background Accents */}
        <div className="absolute inset-0 overflow-hidden lg:hidden z-0 pointer-events-none">
          <div className="absolute top-[-5%] right-[-10%] w-[250px] h-[250px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-[40%] left-[-10%] w-[200px] h-[200px] bg-pink-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pt-8 lg:pt-0">
          
          {/* Text Content */}
          <div className="relative z-10 mt-6 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-bold text-sm shadow-sm border border-blue-100/50">
               🔥 Premium Fitness Studio
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} 
              className="text-5xl sm:text-6xl lg:text-[6rem] font-black leading-[1.05] tracking-tighter text-blue-950 mb-8 lg:mb-10"
            >
              Build <br className="hidden lg:block"/>
              Your <span className="text-[#1a4bb8]">Body</span><br/>
              Transform<br className="hidden lg:block"/>
              Your Life
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col items-center lg:items-start gap-4 relative w-full lg:w-auto lg:pl-4">
              <a href="#contact" className="bg-[#1a4bb8] text-white px-10 py-4 lg:py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-[0_10px_20px_rgba(26,75,184,0.3)] w-full sm:w-auto text-lg">
                Join Now <ArrowRight className="w-5 h-5" />
              </a>
              
              {/* Squiggly arrow pointing to button (Desktop Only) */}
              <div className="absolute -left-12 -top-10 hidden lg:block transform -rotate-[15deg]">
                <svg width="70" height="90" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-300 drop-shadow-sm">
                   <path d="M10 10 C30 10 50 40 40 70" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                   <path d="M28 58 L40 70 L52 58" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Desktop Image Composite */}
          <div className="relative h-[450px] lg:h-[600px] hidden lg:flex items-center justify-center mt-12 lg:mt-0">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 w-full h-full flex items-end justify-center">
              <img 
                src="/group-athletes.png" 
                onError={(e) => { e.currentTarget.src = image; }}
                alt="Athletes" 
                className="w-full lg:w-[120%] max-w-none h-auto object-contain drop-shadow-2xl z-10 relative lg:left-[-10%]" 
              />
            </motion.div>
          </div>

          {/* Mobile Image Composite */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:hidden mt-10 flex items-end justify-center">
            {/* Mobile background shapes behind athletes */}
            <div className="absolute bottom-0 w-[110%] h-[75%] bg-[#1a4bb8] rounded-t-[40%] z-0 overflow-hidden">
               <div className="absolute bottom-0 left-[-10%] w-[120%] h-[60%] bg-[#ffaaab] rounded-t-[50%] z-0"></div>
               <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400" fill="none">
                 <path d="M-50,250 C100,350 250,150 450,200" stroke="white" strokeWidth="1.5" fill="none" />
                 <path d="M-50,300 C100,400 250,200 450,250" stroke="white" strokeWidth="1.5" fill="none" />
               </svg>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative z-10 w-full h-full flex items-end justify-center">
              <img 
                src="/group-athletes.png" 
                onError={(e) => { e.currentTarget.src = image; }}
                alt="Athletes" 
                className="w-full h-[110%] object-contain object-bottom drop-shadow-2xl relative" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-2 border-blue-600/10 bg-white rounded-[40px] p-10 lg:p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-blue-600 rounded-tl-[40px]"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-blue-600 rounded-br-[40px]"></div>
            
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Welcome</span>
              <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-8 leading-tight">{name} <br/><span className="text-blue-600">The Magic Of Fitness</span></h2>
            <p className="text-slate-600 leading-relaxed text-lg lg:text-xl max-w-4xl mx-auto font-medium">
              {about} With years of experience, we're your ultimate fitness destination. Our facility boasts state-of-the-art machines imported from top global brands, a dedicated crossfit area, and highly certified expert trainers who provide personalized programs to guide you to unprecedented success. Experience the magic of true fitness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black text-blue-950 mb-4">Elite <span className="text-pink-400">Programs</span></h2>
              <p className="text-slate-500 text-lg">Push past your limits with our scientifically designed training programs, tailored to transform your physique and lifestyle.</p>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
              View All Programs <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } } }} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-white text-blue-600 shadow-sm group-hover:bg-blue-500 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-950 group-hover:text-white">{service}</h3>
                <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-medium">
                  Achieve your goals with our highly effective programs tailored specifically to maximize your results in record time.
                </p>
                <div className="mt-8 flex items-center gap-2 font-bold text-blue-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Learn more <ChevronRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / WHY CHOOSE US */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden relative rounded-3xl mx-4 lg:mx-12 mb-24">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative order-2 lg:order-1">
            <div className="bg-pink-300 rounded-[40px] absolute -inset-6 transform -rotate-6 z-0"></div>
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000" alt="Results" className="w-full h-[400px] lg:h-[550px] object-cover rounded-[30px] relative z-10 shadow-2xl" />
            
            <div className="absolute -bottom-10 -right-10 bg-white text-blue-950 p-6 rounded-3xl shadow-2xl z-20 hidden md:block border-4 border-blue-950">
               <div className="text-4xl font-black mb-1 text-blue-600">25+</div>
               <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Years Experience</div>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
            <div className="bg-blue-800/50 inline-block px-4 py-2 rounded-full text-pink-300 font-bold mb-6 text-sm tracking-wider uppercase backdrop-blur-sm">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">100% Results <br/><span className="text-pink-300">Guaranteed.</span></h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-lg">
              We stand firmly behind our training methodologies. With consistency, our expert guidance, and state-of-the-art facilities, you are guaranteed to witness the transformation you've always desired. 
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-6xl font-black text-white mb-2 flex items-baseline">98<span className="text-3xl text-pink-300">%</span></div>
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Success Rate</div>
              </div>
              <div>
                <div className="text-6xl font-black text-white mb-2 flex items-baseline">10<span className="text-3xl text-pink-300">k+</span></div>
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Happy Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="facilities" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-4">World-Class Facilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Explore our premium equipment, spacious workout zones, and luxurious amenities designed for your absolute comfort.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
              "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800"
            ].map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }} className={`rounded-3xl overflow-hidden group relative ${i === 0 || i === 3 ? 'aspect-[4/5]' : 'aspect-square lg:aspect-[4/5] lg:mt-12'}`}>
                <img src={img} alt="Gym Facility" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Premium Zone</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-blue-950 mb-6">Choose Your Plan</h2>
            <div className="w-24 h-2 bg-pink-300 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Flexible membership options crafted to fit your goals and lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Basic */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 rounded-[40px] p-10 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-black text-blue-950 mb-2">Basic</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">Perfect for beginners</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-blue-600">$29</span>
                <span className="text-slate-500 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-pink-400" /> Gym Access</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-pink-400" /> Standard Equipment</li>
                <li className="flex items-center gap-3 text-slate-400 font-medium"><CheckCircle2 className="w-5 h-5 text-slate-300" /> Group Classes</li>
              </ul>
              <button className="w-full py-4 rounded-full border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">Select Plan</button>
            </motion.div>

            {/* Premium */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-blue-700 text-white rounded-[40px] p-12 shadow-2xl relative transform md:-translate-y-8 border-4 border-blue-500">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pink-300 text-blue-950 font-black text-xs uppercase px-6 py-2 rounded-full tracking-widest shadow-lg">Most Popular</div>
              <h3 className="text-2xl font-black mb-2">Premium</h3>
              <p className="text-blue-200 text-sm mb-6 font-medium">Everything you need</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-6xl font-black text-white">$59</span>
                <span className="text-blue-300 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-pink-300" /> 24/7 Gym Access</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-pink-300" /> All Group Classes</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-pink-300" /> Locker & Sauna Access</li>
              </ul>
              <button className="w-full py-4 rounded-full bg-white text-blue-700 font-black hover:bg-slate-100 transition-colors shadow-xl">Select Premium</button>
            </motion.div>

            {/* Elite */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-slate-50 rounded-[40px] p-10 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-black text-blue-950 mb-2">Elite</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">Ultimate experience</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-blue-600">$99</span>
                <span className="text-slate-500 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-pink-400" /> All Premium Perks</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-pink-400" /> 4x Personal Training</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-pink-400" /> Custom Nutrition Plan</li>
              </ul>
              <button className="w-full py-4 rounded-full border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">Select Plan</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-[40px] p-10 lg:p-14 shadow-xl border border-slate-100">
            <h2 className="text-3xl lg:text-4xl font-black text-blue-950 mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Full Name</label>
                  <input type="text" className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 w-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Email Address</label>
                  <input type="email" className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 w-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Phone Number</label>
                <input type="tel" className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 w-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Message</label>
                <textarea rows={4} className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 w-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium resize-none"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/30 w-full flex items-center justify-center gap-2 mt-4">
                Submit Inquiry <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-blue-50 rounded-[40px] p-4 relative overflow-hidden h-[500px] lg:h-full min-h-[500px]">
             <div className="w-full h-full bg-slate-200 rounded-[30px] overflow-hidden relative border border-blue-100">
               <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none gap-4">
                 <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(37,99,235,0.4)] border-4 border-white animate-bounce">
                   <MapPin className="w-8 h-8" />
                 </div>
                 <a 
                    href={data.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-950 font-bold px-6 py-3 rounded-full shadow-xl pointer-events-auto cursor-pointer hover:bg-blue-50 transition-colors inline-block"
                  >
                    Get Directions
                  </a>
               </div>
               {/* Grayscale map background for modern clean look */}
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" alt="Map" />
             </div>
          </motion.div>
        </div>
      </section>





      {/* FOOTER */}
      <footer className="bg-blue-700 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Col 1 */}
            <div>
              <div className="text-3xl font-black tracking-tighter uppercase leading-[0.9]">
                <span className="block text-white mb-1">{name.split(' ')[0] || "Jones"}</span>
                <span className="block text-white">{name.split(' ').slice(1).join(' ') || "Gym"}</span>
              </div>
            </div>
            
            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-white tracking-wide">Navigation</h4>
              <ul className="space-y-4 text-blue-200 text-xs font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Classes</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-white tracking-wide">Opening Hours</h4>
              <ul className="space-y-4 text-blue-200 text-xs font-medium">
                <li>{openingHours.split(',')[0] || "Mon-Fri 8AM-8PM"}</li>
                <li>Closed on Holidays</li>
                <li>Sunday Closed</li>
              </ul>
            </div>
            
            {/* Col 4 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-white tracking-wide">Contact Us</h4>
              <ul className="space-y-4 text-blue-200 text-xs font-medium">
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" /> <span className="leading-relaxed">{address}</span></li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-300 shrink-0" /> <span>{email}</span></li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-300 shrink-0" /> <span>{phone}</span></li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-300 shrink-0" /> <span>+1 987 654 3210</span></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-600/50 pt-8 mt-12 gap-6">
            <div className="text-blue-300 text-[10px] uppercase font-bold tracking-wider">
              &copy; {new Date().getFullYear()} {name}. All rights reserved.
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};
export default GymTemplate2;
