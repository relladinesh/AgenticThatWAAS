
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Layers, 
  ArrowUpRight,
  Sparkles,
  Compass
} from "lucide-react";

const GeneralTemplate2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicImages, setDynamicImages] = useState([]);

  const { scrollYProgress } = useScroll();
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()) as any);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number, override?: string) => {
    if (override) return override;
    return dynamicImages.length !== 0 ? dynamicImages[index % dynamicImages.length] : fallback;
  };

  const name = data?.name || "The Studio";
  const tagline = data?.tagline || data?.about?.slice(0, 60) + "..." || "Crafting experiences that cannot be ignored.";
  const about = data?.about || "We are a multidisciplinary team dedicated to creating visceral digital products, elegant spaces, and premium experiences.";
  const services = data?.services || data?.courses || data?.specialties || [
    "Brand Strategy",
    "Digital Experience",
    "Creative Direction",
    "Interactive Design"
  ];
  const email = data?.email || "hello@studio.co";
  const phone = data?.phone || "+1 (555) 304-9811";
  const address = data?.address || "Arts District, Los Angeles, CA";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Background Grids */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0"></div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-neutral-800 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          <span className="font-black text-2xl tracking-tighter uppercase text-white flex items-center gap-1">
            {name} <span className="text-neutral-500">.</span>
          </span>

          <div className="hidden md:flex items-center gap-10 font-bold uppercase tracking-widest text-xs text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">Vision</a>
            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
            <a href="#work" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Inquire</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all">
              Start Project
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0A0A0A] border-b border-neutral-800 overflow-hidden">
              <div className="px-6 py-8 space-y-6">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-bold uppercase tracking-widest text-neutral-400 hover:text-white">Vision</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-bold uppercase tracking-widest text-neutral-400 hover:text-white">Expertise</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-bold uppercase tracking-widest text-neutral-400 hover:text-white">Inquire</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col justify-center min-h-screen">
        <motion.div style={{ y: yParallaxReverse }} className="absolute top-[20%] right-[10%] w-64 h-64 border border-neutral-800 rounded-full opacity-50 z-0 pointer-events-none"></motion.div>
        
        <div className="max-w-[90rem] mx-auto w-full relative z-10 space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 text-neutral-400 font-bold text-xs uppercase tracking-widest backdrop-blur-sm bg-black/50">
            <Sparkles className="w-3.5 h-3.5" /> Redefining Standards
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl sm:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white"
          >
            We design <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">visceral</span> <br />
            experiences.
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 items-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="lg:col-span-6">
              <p className="text-neutral-400 text-lg md:text-2xl font-light leading-relaxed max-w-xl">
                {tagline}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.7 }} className="lg:col-span-6 flex justify-start lg:justify-end">
              <a href="#contact" className="w-32 h-32 rounded-full border border-white text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-500 hover:scale-110">
                <ArrowUpRight className="w-10 h-10" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800 overflow-hidden relative">
        <motion.div 
          className="flex gap-24 w-max items-center opacity-50 font-black uppercase tracking-tighter text-4xl text-white"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span>Bold</span>
              <span className="text-neutral-600">Authentic</span>
              <span>Visceral</span>
              <span className="text-neutral-600">Uncompromising</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-40 px-6 bg-[#0A0A0A] relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants} className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="text-neutral-500 font-bold uppercase tracking-widest text-xs">The Vision</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              Ditching the <br/> playbook.
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants} className="lg:col-span-7 space-y-12">
            <div className="rounded-[3rem] overflow-hidden aspect-[16/10] grayscale hover:grayscale-0 transition-all duration-1000">
              <img src={getImg("https://images.unsplash.com/photo-1542744173-8e7e53415bb0", 1)} className="w-full h-full object-cover" alt="Vision" />
            </div>
            <p className="text-neutral-300 text-2xl md:text-3xl font-light leading-relaxed">
              {about}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-neutral-800">
              <div className="pt-8">
                <h4 className="font-black text-white uppercase tracking-widest text-sm mb-4">Philosophy</h4>
                <p className="text-neutral-400 leading-relaxed">
                  If the brand is comfortable, it's already dead. We nudge systems past their safety lines into highly interactive territories.
                </p>
              </div>
              <div className="pt-8">
                <h4 className="font-black text-white uppercase tracking-widest text-sm mb-4">Execution</h4>
                <p className="text-neutral-400 leading-relaxed">
                  We don't do standard. Every detail is custom drafted and optimized for maximum fluidity and impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-40 px-6 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <div className="text-neutral-500 font-bold uppercase tracking-widest text-xs mb-4">Capabilities</div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">Our Mediums</h2>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-black border border-neutral-800 p-12 md:p-16 rounded-[3rem] flex flex-col justify-between aspect-square md:aspect-[4/3] group hover:border-neutral-500 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-700 pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-neutral-700 font-black text-5xl">/0{i+1}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">{service}</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed group-hover:text-neutral-300 transition-colors">
                    Combining visual layout logic, high-fidelity rendering, and structured aesthetics to construct solutions that respond dynamically.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY / SHOWCASE */}
      <section id="work" className="py-40 px-6 bg-[#0A0A0A] overflow-hidden relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div style={{ y: yParallaxSlow }} className="lg:col-span-8 relative rounded-[3rem] overflow-hidden aspect-[16/10] border border-neutral-800">
            <img 
              src={getImg("https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1200&q=80", 2)} 
              alt="Creative office" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105" 
            />
          </motion.div>
          <motion.div style={{ y: yParallaxReverse }} className="lg:col-span-4 space-y-8 px-4">
            <motion.div style={{ rotate: rotateParallax }} className="w-24 h-24 rounded-full border border-neutral-800 flex items-center justify-center text-white">
              <Compass className="w-10 h-10 text-neutral-500" />
            </motion.div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">Pure <br/> Aesthetics</h3>
            <p className="text-neutral-400 leading-relaxed text-lg">
              We design for visionaries who want to lead, not copy. Standard boring components are forbidden here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-40 px-6 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <div className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Brief Us</div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                Let's make <br /> it custom.
              </h2>
              <p className="text-neutral-400 text-xl leading-relaxed max-w-md font-light">
                Got a project that needs a high-end visual edge? Shoot us your brief and let's configure something special.
              </p>
            </div>

            <div className="space-y-8 font-bold text-sm tracking-widest uppercase">
              <div className="flex items-center gap-6 text-neutral-400 hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center"><Phone className="w-4 h-4 text-white" /></div>
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-6 text-neutral-400 hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center"><Mail className="w-4 h-4 text-white" /></div>
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-6 text-neutral-400 hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center"><MapPin className="w-4 h-4 text-white" /></div>
                <span>{address}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="lg:col-span-7 bg-black border border-neutral-800 p-12 md:p-20 rounded-[3rem]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Your Identity</label>
                <input type="text" className="w-full px-0 py-4 border-b border-neutral-800 bg-transparent text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-neutral-800" placeholder="e.g. John Doe" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Secure Email</label>
                <input type="email" className="w-full px-0 py-4 border-b border-neutral-800 bg-transparent text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-neutral-800" placeholder="john@example.com" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-neutral-500">The Mission</label>
                <textarea rows={3} className="w-full px-0 py-4 border-b border-neutral-800 bg-transparent text-white text-xl focus:outline-none focus:border-white transition-colors resize-none placeholder-neutral-800" placeholder="Tell us about the impact you want to create..."></textarea>
              </div>
              <button className="bg-white hover:bg-neutral-200 text-black py-6 w-full rounded-full font-black uppercase tracking-widest text-sm transition-colors duration-300 mt-8">
                Initiate Project
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-neutral-900 text-neutral-500 text-sm">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pb-16 border-b border-neutral-900">
          <div className="font-black text-3xl uppercase tracking-tighter text-white">
            {name}<span className="text-neutral-600">.</span>
          </div>
          <div className="flex gap-12 font-bold text-xs uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">Vision</a>
            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
            <a href="#work" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Inquire</a>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase text-neutral-600">
          <p>&copy; {new Date().getFullYear()} {name}. Built by Visionaries.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
            <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};
export default GeneralTemplate2;
