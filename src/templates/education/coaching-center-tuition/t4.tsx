
import { TemplateProps, CoachingData } from "@/types";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight, Star, ChevronDown, Check, MessageCircle, MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CoachingTemplate4({ data }: TemplateProps) {
  const coaching = data as CoachingData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [dynamicImages, setDynamicImages] = useState([]);
  
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number) => dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  // Colors: Soft beige/wheat palette
  const bgMain = "#FDFBF7"; // Softest beige/off-white
  const bgAccent = "#F4EFE6"; // Wheat/Beige accent
  const textDark = "#2C2825"; // Very dark warm gray/brown
  const textAccent = "#8A6D4B"; // Gold/Wheat typography

  const courses = coaching.courses?.length ? coaching.courses : [
    "Executive Leadership", "Strategic Vision", "High-Performance Culture", "Mastermind Retreats"
  ];

  return (
    <>
      <main className="min-h-screen font-serif selection:bg-[#8A6D4B] selection:text-white overflow-x-hidden" style={{ backgroundColor: bgMain, color: textDark }}>
      
      {/* 13. WHATSAPP BUTTON */}
      <a href={`https://wa.me/${coaching.phone?.replace(new RegExp('\\D', 'g'), '') || '1234567890'}`} className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* 1. HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? "py-4 shadow-sm backdrop-blur-md" : "py-8"}`} style={{ backgroundColor: isScrolled ? `${bgMain}E6` : 'transparent' }}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-3 group">
            <Menu className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium hidden md:block group-hover:text-[#8A6D4B] transition-colors">Menu</span>
          </button>
          
          <div className="text-2xl md:text-3xl font-light tracking-widest uppercase">
            {coaching.name || "Aura"}
          </div>

          <button className="hover:text-[#8A6D4B] transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col p-12"
            style={{ backgroundColor: bgAccent }}
          >
            <div className="flex justify-between items-center mb-16 max-w-[90rem] mx-auto w-full">
              <div className="text-2xl font-light tracking-widest uppercase">{coaching.name || "Aura"}</div>
              <button onClick={() => setIsMenuOpen(false)} className="hover:rotate-90 transition-transform duration-500">
                <X className="w-8 h-8 stroke-[1]" />
              </button>
            </div>
            <div className="max-w-[90rem] mx-auto w-full flex flex-col gap-8 text-4xl md:text-6xl font-light">
              {["Story", "Programs", "Approach", "Master Coach", "Reviews", "Pricing", "Contact"].map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#8A6D4B] hover:translate-x-4 transition-all duration-500"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-20">
        {/* Subtle geometric background line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black/5 z-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 z-0"></div>

        {/* Floating decorative elements (representing the "wheat" request but abstract) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-32 h-32 border border-[#8A6D4B]/20 rounded-full z-0 hidden lg:block"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-[#8A6D4B]/20 rounded-full z-0 hidden lg:block"
        ></motion.div>

        <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-8" style={{ color: textAccent }}
            >
              Editorial Coaching Excellence
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-light leading-[0.9] tracking-tighter mb-8"
            >
              Elevate <br/>
              <span className="italic" style={{ color: textAccent }}>Perspective.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl max-w-lg mb-12 font-light opacity-80"
            >
              {coaching.about || "Curating high-performance mindsets and strategic mastery for visionary leaders. A transformative journey."}
            </motion.p>
            <motion.button 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-4 border-b border-[#2C2825] pb-2 text-[11px] tracking-[0.2em] uppercase font-sans font-bold hover:gap-6 hover:text-[#8A6D4B] hover:border-[#8A6D4B] transition-all"
            >
              Begin The Journey <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full aspect-[4/5] relative overflow-hidden" style={{ borderRadius: '200px 200px 0 0' }}>
              <motion.img 
                style={{ y: yParallax }}
                src={coaching.image || getImg("https://images.unsplash.com/photo-1542744173-8e7e53415bb0", 0)} 
                className="absolute inset-0 w-full h-[120%] object-cover grayscale-[20%]" 
                alt="Coaching" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT BUSINESS */}
      <section id="story" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-[60rem] mx-auto text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-5xl font-light mb-10 leading-tight"
          >
            "True transformation begins at the intersection of <span className="italic" style={{ color: textAccent }}>clarity</span> and uncompromising <span className="italic" style={{ color: textAccent }}>execution</span>."
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-lg font-light opacity-70 leading-relaxed font-sans"
          >
            We do not just offer advice. We dismantle limiting frameworks and architect high-fidelity strategies tailored exclusively for exceptional individuals. Our approach blends deep psychological insight with rigorous corporate strategy.
          </motion.p>
        </div>
      </section>

      {/* 4. PRODUCTS / SERVICES (Mentorship Programs) */}
      <section id="programs" className="py-32 px-6 md:px-12" style={{ backgroundColor: bgAccent }}>
        <div className="max-w-[90rem] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-4" style={{ color: textAccent }}>Curriculum</p>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight">Signature <br/><span className="italic">Programs.</span></h2>
            </div>
            <button className="border border-[#2C2825] px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-sans font-bold hover:bg-[#2C2825] hover:text-[#FDFBF7] transition-colors">
              View All
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0,4).map((course, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative" style={{ backgroundColor: bgMain }}>
                  <img src={getImg("https://images.unsplash.com/photo-1556761175-5973dc0f32d7", i + 1)} className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={course} />
                </div>
                <h3 className="text-xl font-medium mb-2">{course}</h3>
                <p className="text-sm font-sans opacity-60">Intensive tailored guidance.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (The Advantage) & 6. BAKING PROCESS (Coaching Process) */}
      <section id="approach" className="py-32 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-4" style={{ color: textAccent }}>The Advantage</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-light mb-12">Artisan <span className="italic">Craftsmanship</span> in Mentorship.</motion.h2>
            
            <div className="space-y-8 font-sans">
              {[
                { title: "Proven Methodologies", desc: "Frameworks tested in the world's most demanding environments." },
                { title: "Bespoke Process", desc: "No templates. Every strategy is handcrafted for your unique context." },
                { title: "Daily Execution", desc: "Continuous accountability to ensure microscopic daily growth." }
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="border-t border-black/10 pt-6">
                  <h3 className="text-lg font-serif font-medium mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative"
          >
            <div className="w-full aspect-[4/5] overflow-hidden" style={{ borderRadius: '0 200px 0 200px' }}>
              <img src={getImg("https://images.unsplash.com/photo-1517048676732-d65bc937f952", 5)} className="w-full h-full object-cover filter contrast-125" alt="Process" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl max-w-sm hidden md:block">
              <h4 className="font-serif text-2xl mb-4 italic">The Journey</h4>
              <p className="font-sans text-sm opacity-70">A step-by-step evolution of your strategic thinking and operational execution.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CHEF SHOWCASE (Master Coach) */}
      <section id="master-coach" className="py-32 px-6 md:px-12 text-[#FDFBF7]" style={{ backgroundColor: textDark }}>
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="w-full aspect-square md:aspect-[3/4] overflow-hidden border border-white/20 p-2">
              <img src={getImg("https://images.unsplash.com/photo-1507679799987-c73779587ccf", 6)} className="w-full h-full object-cover filter grayscale" alt="Master Coach" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-16">
            <p className="text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-4" style={{ color: textAccent }}>Master Coach Profile</p>
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tighter">
              {coaching.instructors?.[0]?.name || "Alexander Wright"}
            </h2>
            <h3 className="text-2xl italic opacity-80 mb-8" style={{ color: textAccent }}>
              {coaching.instructors?.[0]?.subject || "Executive Strategy & Performance"}
            </h3>
            <p className="font-sans text-lg opacity-70 leading-relaxed mb-10 max-w-xl">
              With over two decades advising Fortune 500 CEOs and fast-growth founders, my signature technique blends rigorous analytical thinking with deep empathetic understanding.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#8A6D4B]"></div>
              <p className="font-serif italic text-xl opacity-80">"Excellence is not an act, but a habit."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & 9. PRICING */}
      <section id="reviews" className="py-32 px-6 md:px-12" style={{ backgroundColor: bgAccent }}>
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Testimonials */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-4" style={{ color: textAccent }}>Endorsements</p>
            <h2 className="text-4xl md:text-5xl font-light mb-12">Client <span className="italic">Stories.</span></h2>
            
            <div className="space-y-10">
              {(coaching.testimonials || [
                { name: "Eleanor H.", review: "A masterclass in leadership. The return on investment was immediate." },
                { name: "Marcus T.", review: "Unparalleled clarity and vision. My business scaled seamlessly." }
              ]).map((t, i) => (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} key={i} className="bg-white p-10 shadow-sm relative">
                  <div className="absolute top-6 right-8 text-6xl font-serif text-[#8A6D4B] opacity-20">"</div>
                  <div className="flex text-[#8A6D4B] mb-6">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-lg font-light leading-relaxed mb-6 italic">"{t.review}"</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest font-bold">— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing">
            <p className="text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-4" style={{ color: textAccent }}>Investment</p>
            <h2 className="text-4xl md:text-5xl font-light mb-12">Engagement <span className="italic">Tiers.</span></h2>
            
            <div className="space-y-6">
              {[
                { name: "Foundational Clarity", price: "$2,500/mo", desc: "Bi-weekly strategy sessions and core operational mapping." },
                { name: "Elite Mastery", price: "$5,000/mo", desc: "Weekly intensive coaching, board preparation, and on-demand advisory." },
                { name: "Corporate Intervention", price: "Custom", desc: "Full-scale leadership team alignment and offsite facilitation." }
              ].map((tier, i) => (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} key={i} className="border-b border-black/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
                  <div>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-[#8A6D4B] transition-colors">{tier.name}</h3>
                    <p className="font-sans text-sm opacity-60">{tier.desc}</p>
                  </div>
                  <div className="text-xl font-serif">{tier.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. GALLERY */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className={`overflow-hidden ${i===1 || i===4 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
              <img src={getImg("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", i+3)} className="w-full h-full object-cover filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" alt="Gallery" />
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light">Inquiries.</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is the typical duration of an engagement?", a: "Most of our elite coaching relationships span a minimum of 6 to 12 months to ensure compounding, sustainable results." },
              { q: "Is this strictly for C-Suite executives?", a: "While we specialize in C-Suite and founders, we also mentor high-potential directors scaling into executive roles." },
              { q: "How is confidentiality handled?", a: "We operate under strict NDA. Absolute discretion is the cornerstone of our advisory." }
            ].map((faq, i) => (
              <div key={i} className="border border-black/10 bg-white">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left hover:bg-[#FDFBF7] transition-colors">
                  <span className="font-serif text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="p-6 pt-0 font-sans text-sm opacity-70 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION & 14. GOOGLE MAPS (Aesthetic Address) */}
      <section id="contact" className="py-32 px-6 md:px-12" style={{ backgroundColor: textDark, color: '#FDFBF7' }}>
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">Let's <span className="italic" style={{ color: textAccent }}>Connect.</span></h2>
            <p className="font-sans font-light opacity-70 mb-16 max-w-md">Reach out to schedule a private consultation and discover how we can elevate your trajectory.</p>
            
            <div className="space-y-10 font-sans">
              <div className="flex gap-6">
                <MapPin className="w-6 h-6 shrink-0" style={{ color: textAccent }} />
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">The Office</h4>
                  <p className="opacity-80 leading-relaxed">{coaching.address || "100 Prestige Avenue, NY 10001"}</p>
                  <p className="text-xs opacity-50 mt-2">Hours: Mon-Fri 9AM-6PM</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Phone className="w-6 h-6 shrink-0" style={{ color: textAccent }} />
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Direct Line</h4>
                  <p className="opacity-80">{coaching.phone || "+1 555 888 9999"}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Mail className="w-6 h-6 shrink-0" style={{ color: textAccent }} />
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Email</h4>
                  <p className="opacity-80">{coaching.email || "inquiries@auracoaching.com"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <form className="space-y-8 font-sans" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 pb-4 text-sm focus:outline-none focus:border-[#8A6D4B] transition-colors placeholder:text-white/40" />
              <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-white/20 pb-4 text-sm focus:outline-none focus:border-[#8A6D4B] transition-colors placeholder:text-white/40" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 text-sm focus:outline-none focus:border-[#8A6D4B] transition-colors placeholder:text-white/40 resize-none"></textarea>
              <button className="w-full bg-[#8A6D4B] text-white py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-[#2C2825] transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <footer className="py-16 px-6 md:px-12 text-center md:text-left" style={{ backgroundColor: '#1A1816', color: '#FDFBF7' }}>
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-8">
          <div className="text-3xl font-light tracking-widest uppercase">{coaching.name || "Aura"}</div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8A6D4B] hover:border-[#8A6D4B] transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8A6D4B] hover:border-[#8A6D4B] transition-all"><aedin className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8A6D4B] hover:border-[#8A6D4B] transition-all"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs opacity-60">
          <p>© {new Date().getFullYear()} {coaching.name || "Aura Coaching"}. All Rights Reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[9px]">
            <a href="#" className="hover:text-[#8A6D4B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#8A6D4B] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      </main>
    </>
  );
}
