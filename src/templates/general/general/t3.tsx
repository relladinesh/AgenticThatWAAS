
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Star,
  Shield,
  Award
} from "lucide-react";

export default function GeneralTemplate3({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()) as any);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "The Estate";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Elegance defined. Excellence delivered.";
  const about = data?.about || "We curate an unparalleled standard of luxury, offering bespoke services for those who appreciate the finest things in life.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Private Concierge",
    "Estate Management",
    "Luxury Acquisitions",
    "Bespoke Advisory"
  ];
  const email = data?.email || "concierge@estate.com";
  const phone = data?.phone || "+1 (800) 888-0000";
  const address = data?.address || "1 Avenue de la Paix, Paris";

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1C1A17] selection:bg-[#9E8A78] selection:text-white font-serif overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? "bg-[#FCFBF8]/95 backdrop-blur-md border-b border-[#1C1A17]/10 py-6" : "bg-transparent py-10"}`}>
        <div className="max-w-[90rem] mx-auto px-8 md:px-12 flex items-center justify-between">
          <span className="font-serif text-2xl tracking-widest uppercase">
            {name}
          </span>

          <div className="hidden md:flex items-center gap-12 font-sans text-xs uppercase tracking-[0.2em] text-[#1C1A17]/70">
            <a href="#about" className="hover:text-[#9E8A78] transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-[#9E8A78] transition-colors">Curations</a>
            <a href="#gallery" className="hover:text-[#9E8A78] transition-colors">Gallery</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="font-sans text-xs uppercase tracking-[0.2em] border border-[#1C1A17] px-8 py-3 hover:bg-[#1C1A17] hover:text-white transition-all duration-500">
              Inquire
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="w-8 h-8 font-light" /> : <Menu className="w-8 h-8 font-light" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-full left-0 w-full bg-[#FCFBF8] border-b border-[#1C1A17]/10 py-8 px-8 font-sans">
              <div className="flex flex-col gap-6 text-sm uppercase tracking-[0.2em]">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#9E8A78]">Philosophy</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#9E8A78]">Curations</a>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-[#9E8A78]">Gallery</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#9E8A78]">Inquire</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 min-h-screen flex items-center justify-center">
        <motion.div style={{ opacity: opacityParallax }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
           <div className="text-[30vw] font-serif text-[#1C1A17]/5 whitespace-nowrap select-none">
             {name.slice(0, 3)}
           </div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="w-[1px] h-24 bg-[#9E8A78]"></div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[1.1]">
              The Art of <br/>
              <span className="italic text-[#9E8A78]">Refinement</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex justify-center">
               <p className="text-lg md:text-xl font-sans font-light tracking-wide text-[#1C1A17]/70 max-w-2xl leading-relaxed">
                 {tagline}
               </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8">
              <a href="#contact" className="inline-flex items-center gap-4 font-sans uppercase tracking-[0.2em] text-xs pb-2 border-b border-[#1C1A17] hover:text-[#9E8A78] hover:border-[#9E8A78] transition-colors group">
                Request an Audience <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMAGE BREAK & MARQUEE */}
      <section className="py-20 relative overflow-hidden bg-[#1C1A17]">
        <motion.div style={{ y: yParallaxSlow }} className="absolute inset-0 opacity-40">
          <img src={getImg("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", 0, data?.image)} className="w-full h-[150%] object-cover object-center" alt="Estate" />
        </motion.div>
        <div className="absolute inset-0 bg-[#1C1A17]/60"></div>

        <div className="relative z-10 py-32">
          <motion.div 
            className="flex gap-24 w-max items-center font-serif text-5xl md:text-7xl italic text-[#FCFBF8] opacity-80"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center">
                <span>Timeless Elegance</span>
                <span className="text-[#9E8A78]">✦</span>
                <span>Unrivaled Prestige</span>
                <span className="text-[#9E8A78]">✦</span>
                <span>Absolute Discretion</span>
                <span className="text-[#9E8A78]">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="about" className="py-40 px-6 md:px-12 bg-[#FCFBF8] relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
            <div className="aspect-[3/4] w-[80%] ml-auto overflow-hidden">
              <img src={getImg("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00", 1)} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" alt="Philosophy" />
            </div>
            <motion.div style={{ y: yParallaxFast }} className="absolute bottom-10 left-0 w-1/2 aspect-square bg-[#1C1A17] p-10 text-[#FCFBF8] flex flex-col justify-center items-center text-center">
               <Star className="w-8 h-8 text-[#9E8A78] mb-6" />
               <div className="font-sans uppercase tracking-[0.2em] text-xs mb-2">Established</div>
               <div className="text-4xl font-serif italic">Excellence</div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-12">
            <div>
              <div className="font-sans uppercase tracking-[0.2em] text-xs text-[#9E8A78] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9E8A78]"></span> Our Philosophy
              </div>
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Crafting legacies <br/> through <span className="italic text-[#9E8A78]">meticulous curation.</span>
              </h2>
            </div>
            
            <p className="text-xl text-[#1C1A17]/70 font-light leading-relaxed max-w-xl">
              {about}
            </p>

            <div className="space-y-6 pt-8">
               <div className="flex items-start gap-6">
                 <Shield className="w-6 h-6 text-[#9E8A78] shrink-0 mt-1" strokeWidth={1} />
                 <div>
                   <h4 className="text-xl font-serif mb-2">Unwavering Integrity</h4>
                   <p className="font-sans text-sm text-[#1C1A17]/60 leading-relaxed">Absolute discretion and trust in every engagement.</p>
                 </div>
               </div>
               <div className="flex items-start gap-6">
                 <Award className="w-6 h-6 text-[#9E8A78] shrink-0 mt-1" strokeWidth={1} />
                 <div>
                   <h4 className="text-xl font-serif mb-2">Bespoke Mastery</h4>
                   <p className="font-sans text-sm text-[#1C1A17]/60 leading-relaxed">Tailored experiences designed specifically for your unique standard.</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CURATIONS / SERVICES */}
      <section id="services" className="py-40 px-6 md:px-12 bg-[#1C1A17] text-[#FCFBF8]">
        <div className="max-w-[90rem] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-32 space-y-6">
            <div className="font-sans uppercase tracking-[0.2em] text-xs text-[#9E8A78] flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-[#9E8A78]"></span> The Collection <span className="w-8 h-[1px] bg-[#9E8A78]"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light">Exclusive <span className="italic text-[#9E8A78]">Curations</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {services.map((service, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group cursor-pointer">
                <div className="w-full h-[1px] bg-[#FCFBF8]/20 mb-8 group-hover:bg-[#9E8A78] transition-colors duration-500"></div>
                <div className="flex items-start justify-between">
                  <div className="space-y-4 max-w-sm">
                    <span className="font-sans text-xs text-[#9E8A78] tracking-[0.2em]">0{i+1}</span>
                    <h3 className="text-3xl font-serif font-light group-hover:text-[#9E8A78] transition-colors duration-500">{service}</h3>
                    <p className="font-sans text-sm text-[#FCFBF8]/60 leading-relaxed">
                      Impeccable attention to detail ensuring that your lifestyle is maintained at the absolute highest echelon.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#FCFBF8]/20 flex items-center justify-center group-hover:bg-[#FCFBF8] group-hover:text-[#1C1A17] transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5 font-light" strokeWidth={1} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-40 px-6 bg-[#FCFBF8] overflow-hidden">
        <div className="max-w-[90rem] mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24 flex justify-between items-end">
              <h2 className="text-5xl md:text-7xl font-light">Visual <br/> <span className="italic text-[#9E8A78]">Symphony</span></h2>
              <a href="#" className="hidden md:inline-flex items-center gap-2 font-sans uppercase tracking-[0.2em] text-xs hover:text-[#9E8A78] transition-colors">
                View Archives <ArrowRight className="w-4 h-4" />
              </a>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
             <motion.div style={{ y: yParallaxSlow }} className="md:col-span-5 aspect-[3/4] overflow-hidden">
               <img src={getImg("https://images.unsplash.com/photo-1513694203232-719a280e022f", 2)} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </motion.div>
              <div className="md:col-span-7 grid grid-rows-2 gap-8 h-full">
               <motion.div style={{ y: yParallaxFast }} className="aspect-[16/9] overflow-hidden">
                 <img src={getImg("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", 3)} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
               </motion.div>
               <motion.div style={{ y: yParallaxSlow }} className="aspect-[16/9] overflow-hidden">
                 <img src={getImg("https://images.unsplash.com/photo-1578683010236-d716f9a3f461", 4)} alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
               </motion.div>
             </div>
           </div>
        </div>
      </section>

      {/* CONTACT / INQUIRE */}
      <section id="contact" className="py-40 px-6 md:px-12 bg-[#FCFBF8] border-t border-[#1C1A17]/10">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-16">
            <div>
              <div className="font-sans uppercase tracking-[0.2em] text-xs text-[#9E8A78] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9E8A78]"></span> Private Inquiries
              </div>
              <h2 className="text-5xl md:text-7xl font-light leading-tight">
                Request an <br/> <span className="italic text-[#9E8A78]">Audience.</span>
              </h2>
            </div>
            
            <div className="font-sans space-y-12 text-sm tracking-widest uppercase">
              <div className="flex items-start gap-8 border-b border-[#1C1A17]/10 pb-8">
                <MapPin className="w-5 h-5 text-[#9E8A78] shrink-0" strokeWidth={1} />
                <div className="space-y-2">
                  <div className="text-[#1C1A17]/50">Headquarters</div>
                  <div className="font-bold">{address}</div>
                </div>
              </div>
              <div className="flex items-start gap-8 border-b border-[#1C1A17]/10 pb-8">
                <Phone className="w-5 h-5 text-[#9E8A78] shrink-0" strokeWidth={1} />
                <div className="space-y-2">
                  <div className="text-[#1C1A17]/50">Direct Line</div>
                  <div className="font-bold">{phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-8 border-b border-[#1C1A17]/10 pb-8">
                <Mail className="w-5 h-5 text-[#9E8A78] shrink-0" strokeWidth={1} />
                <div className="space-y-2">
                  <div className="text-[#1C1A17]/50">Concierge Desk</div>
                  <div className="font-bold lowercase tracking-normal">{email}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1C1A17] text-[#FCFBF8] p-12 md:p-20 flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-light mb-12">Submit your details for a private consultation.</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-10 font-sans">
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.2em] text-[#FCFBF8]/50">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-[#FCFBF8]/20 py-4 focus:outline-none focus:border-[#9E8A78] transition-colors font-light text-lg" />
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.2em] text-[#FCFBF8]/50">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-[#FCFBF8]/20 py-4 focus:outline-none focus:border-[#9E8A78] transition-colors font-light text-lg" />
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.2em] text-[#FCFBF8]/50">Nature of Inquiry</label>
                <input type="text" className="w-full bg-transparent border-b border-[#FCFBF8]/20 py-4 focus:outline-none focus:border-[#9E8A78] transition-colors font-light text-lg" />
              </div>
              <button className="pt-8 flex items-center gap-4 text-xs uppercase tracking-[0.2em] hover:text-[#9E8A78] transition-colors group">
                Send Request <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1A17] text-[#FCFBF8]/50 py-24 px-6 md:px-12 font-sans text-xs uppercase tracking-[0.2em]">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-serif text-3xl font-light text-[#FCFBF8] tracking-widest">
            {name}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="#about" className="hover:text-[#FCFBF8] transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-[#FCFBF8] transition-colors">Curations</a>
            <a href="#gallery" className="hover:text-[#FCFBF8] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#FCFBF8] transition-colors">Inquire</a>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto mt-24 pt-12 border-t border-[#FCFBF8]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-[#FCFBF8] transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-[#FCFBF8] transition-colors">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
