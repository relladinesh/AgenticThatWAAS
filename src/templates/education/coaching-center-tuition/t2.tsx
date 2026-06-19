
import { TemplateProps, CoachingData } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, CheckCircle2, ChevronRight, Quote, Calendar, Award, Star } from "lucide-react";

const CoachingTemplate2 = ({ data }: TemplateProps) => {
  const coaching = data as CoachingData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80"
    ];
    setDynamicImages(pool.sort(() => 0.5 - Math.random()));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  const courses = coaching.courses?.length ? coaching.courses : [
    "Executive Leadership Masterclass",
    "Scaling High-Performance Teams",
    "Strategic Vision & Execution"
  ];

  const testimonials = coaching.testimonials?.length ? coaching.testimonials : [
    { name: "Robert V., CEO", review: "The coaching I received here was a massive inflection point for my business. I doubled my company's revenue in 6 months." },
    { name: "Amanda L., Founder", review: "Unmatched expertise. They don't just teach theory, they fundamentally rewire how you approach leadership." }
  ];

  return (
    <>
    <main className="min-h-screen bg-[#0F1014] font-serif text-[#f4f4f5] selection:bg-[#cfa670] selection:text-white">
      
      {/* High-End Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? "py-4 bg-[#0F1014]/90 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-medium tracking-widest uppercase text-white"
          >
            {coaching.name || "Aura Executive"}
          </motion.div>

          <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.2em] uppercase font-semibold text-gray-400">
            {["Expertise", "Programs", "Results", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#cfa670] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:block border border-[#cfa670]/50 text-[#cfa670] px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#cfa670] hover:text-[#0F1014] transition-all">
            Book Consultation
          </button>
          
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0F1014] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="text-xl font-medium tracking-widest uppercase text-[#cfa670]">{coaching.name || "Aura Executive"}</div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-10 text-3xl font-light">
              {["Expertise", "Programs", "Results", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="hover:text-[#cfa670] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={getImg("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", 0)} className="w-full h-full object-cover opacity-20" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1014] via-[#0F1014]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="text-[#cfa670] text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Premium Executive Coaching</p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-8">
              Transform Your <br />
              <span className="font-medium italic text-[#cfa670]">Leadership Impact.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-12 font-sans font-light">
              {coaching.about || "We partner with high-performing executives and founders to scale their influence, drive unprecedented growth, and master strategic execution."}
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#cfa670] text-[#0F1014] px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors flex items-center gap-3">
                Apply for Coaching <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block relative"
          >
            <div className="w-full aspect-[3/4] relative z-10 border border-white/10 p-2">
              <img src={coaching.image || getImg("https://images.unsplash.com/photo-1507679799987-c73779587ccf", 1)} alt="Coach" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
            </div>
            {/* Aesthetic offset border */}
            <div className="absolute -right-6 -bottom-6 w-full h-full border border-[#cfa670]/30 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="py-16 border-y border-white/5 bg-[#0a0b0e]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {[
            { label: "Success Rate", value: coaching.successRate || "99%" },
            { label: "Executives Coached", value: "500+" },
            { label: "Revenue Generated", value: "$2B+" },
            { label: "Years Experience", value: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <p className="text-3xl md:text-5xl font-light text-[#cfa670] mb-2">{stat.value}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-sans font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs / Expertise */}
      <section id="programs" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Core <span className="italic text-[#cfa670]">Expertise</span></h2>
            <p className="text-gray-400 font-sans font-light leading-relaxed">Our proprietary coaching frameworks are designed specifically for the unique challenges faced by modern executives and founders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group border border-white/10 p-10 hover:border-[#cfa670]/50 transition-colors relative overflow-hidden bg-[#0a0b0e]"
              >
                {/* Number Watermark */}
                <div className="absolute top-4 right-6 text-6xl font-black text-white/5 pointer-events-none transition-all group-hover:text-[#cfa670]/10">0{i+1}</div>
                
                <h3 className="text-2xl font-light mb-6 pr-8 leading-snug text-white group-hover:text-[#cfa670] transition-colors">{course}</h3>
                <ul className="space-y-4 mb-10 font-sans font-light text-sm text-gray-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#cfa670] shrink-0 mt-0.5" />
                    Strategic alignment and vision mapping
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#cfa670] shrink-0 mt-0.5" />
                    High-stakes decision making frameworks
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#cfa670] shrink-0 mt-0.5" />
                    Organizational design and scaling
                  </li>
                </ul>
                
                <a href="#" className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold text-[#cfa670] group-hover:gap-4 transition-all">
                  Discover More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Feature Section */}
      <section id="expertise" className="py-24 bg-[#0a0b0e]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="w-full aspect-square md:aspect-[4/3] relative">
              <img src={getImg("https://images.unsplash.com/photo-1542744173-8e7e53415bb0", 2)} className="w-full h-full object-cover grayscale opacity-80" alt="Strategy Session" />
              <div className="absolute inset-0 border border-[#cfa670] m-6 pointer-events-none"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-[#cfa670] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">The Methodology</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8">Data-Driven <span className="italic text-[#cfa670]">Intuition.</span></h2>
            <p className="text-gray-400 font-sans font-light leading-relaxed mb-8">
              We bridge the gap between hard metrics and leadership intuition. Our coaching isn't just motivational—it is rooted in behavioral psychology, organizational design, and proven strategic execution models used by Fortune 500 CEOs.
            </p>
            <div className="space-y-6 font-sans">
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center shrink-0 text-[#cfa670]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Tailored Frameworks</h4>
                  <p className="text-sm text-gray-500 font-light">Custom strategies designed exclusively for your market context.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center shrink-0 text-[#cfa670]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Intensive Retreats</h4>
                  <p className="text-sm text-gray-500 font-light">Immersive multi-day sessions to rapidly accelerate breakthroughs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Testimonials */}
      <section id="results" className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-[#cfa670]/20 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-16">
            "{testimonials[0]?.review || "The insights gained completely revolutionized how I approach executive leadership and board management."}"
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-[#cfa670]"></div>
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#cfa670]">{testimonials[0]?.name || "Jonathan Blake, CEO"}</p>
            <div className="w-16 h-[1px] bg-[#cfa670]"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#0a0b0e] border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-6">Schedule a <br/><span className="italic text-[#cfa670]">Strategy Call.</span></h2>
            <p className="text-gray-400 font-sans font-light leading-relaxed max-w-md mb-12">
              Acceptance into our private coaching programs is strictly by application. Reach out to discover if we are the right fit for your next stage of growth.
            </p>
            
            <div className="space-y-8 font-sans font-light text-sm">
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Direct Line</p>
                <p className="text-xl text-white">{coaching.phone || "+1 (555) 123-4567"}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Executive Office</p>
                <p className="text-lg text-white max-w-[200px]">{coaching.address || "100 Park Avenue, Floor 42, New York, NY"}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Email</p>
                <p className="text-lg text-[#cfa670]">{coaching.email || "executive@auracoaching.com"}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0F1014] p-10 border border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cfa670] to-transparent"></div>
            <h3 className="text-2xl font-light mb-8">Inquiry Form</h3>
            <form className="space-y-6 font-sans" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#cfa670] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#cfa670] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Work Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#cfa670] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Company & Role</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#cfa670] transition-colors" />
              </div>
              <div className="space-y-2 pt-4">
                <button className="w-full bg-[#cfa670] text-[#0F1014] py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center font-sans">
        <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
          © {new Date().getFullYear()} {coaching.name || "Aura Executive Coaching"}. All Rights Reserved.
        </p>
      </footer>
    </main>
    </>
  );
};
export default CoachingTemplate2;
