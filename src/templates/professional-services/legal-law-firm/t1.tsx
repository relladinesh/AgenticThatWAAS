
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Scale, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowRight, 
  BookOpen, 
  Building, 
  Menu,
  X,
  Award, 
  MapPin,
  CheckCircle
} from "lucide-react";

export default function LawFirmPremiumT1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Sterling & Associates";
  const tagline = data?.tagline || "Unwavering commitment. Unmatched results.";
  const about = data?.about || "We are a premier law firm dedicated to providing exceptional legal representation. Our elite team of attorneys brings decades of experience to complex litigation, corporate law, and personal injury cases.";
  
  const practiceAreas = [
    { title: "Corporate Law", desc: "Navigating complex corporate governance and M&A.", icon: Building },
    { title: "Civil Litigation", desc: "Aggressive representation in high-stakes disputes.", icon: Scale },
    { title: "Intellectual Property", desc: "Protecting your most valuable ideas and assets.", icon: BookOpen },
    { title: "Criminal Defense", desc: "Relentless advocacy when your freedom is on the line.", icon: ShieldCheck }
  ];

  const email = data?.email || "consultations@sterlinglaw.com";
  const phone = data?.phone || "+1 (800) 555-0199";
  const address = data?.address || "100 Justice Avenue, Suite 400, New York, NY";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-sans selection:bg-[#B8985B] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-none flex items-center justify-center transition-colors duration-500 ${isScrolled ? "bg-[#111827] text-[#B8985B]" : "bg-[#B8985B] text-[#111827]"}`}>
              <Scale className="w-5 h-5" />
            </div>
            <span className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-500 ${isScrolled ? "text-[#111827]" : "text-white"}`}>
              {name.split(' ')[0]}<span className="font-light text-[#B8985B]">LAW</span>
            </span>
          </div>

          <div className={`hidden md:flex items-center gap-10 font-medium text-sm tracking-widest uppercase transition-colors duration-500 ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>
            <a href="#about" className="hover:text-[#B8985B] transition-colors">Firm Overview</a>
            <a href="#practice" className="hover:text-[#B8985B] transition-colors">Practice Areas</a>
            <a href="#attorneys" className="hover:text-[#B8985B] transition-colors">Attorneys</a>
            <a href="#contact" className="hover:text-[#B8985B] transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className={`px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all border ${isScrolled ? "bg-[#111827] text-white border-[#111827] hover:bg-[#B8985B] hover:border-[#B8985B]" : "bg-transparent text-white border-white hover:bg-white hover:text-[#111827]"}`}>
              Free Consultation
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? "text-[#111827]" : "text-white"}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? "text-[#111827]" : "text-white"}`} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#111827] border-t border-gray-800 overflow-hidden">
              <div className="px-8 py-8 space-y-6 text-white text-sm uppercase tracking-widest font-semibold">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#B8985B]">Firm Overview</a>
                <a href="#practice" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#B8985B]">Practice Areas</a>
                <a href="#attorneys" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#B8985B]">Attorneys</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[#B8985B]">Free Consultation</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center bg-[#111827] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1600&q=80" 
            alt="Law Library" 
            className="w-full h-full object-cover opacity-[0.35] grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full mt-20">
          <div className="max-w-3xl space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 text-[#B8985B]">
              <div className="h-px w-12 bg-[#B8985B]"></div>
              <span className="uppercase tracking-[0.3em] text-xs font-semibold">Elite Legal Representation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-white leading-[1.1]"
            >
              Justice. <br />
              <span className="text-gray-400 font-light italic">Integrity.</span> <br />
              <span className="text-[#B8985B]">Results.</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="text-gray-300 text-lg md:text-xl leading-relaxed font-light max-w-xl">
              {tagline}
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-6 pt-8">
              <a href="#contact" className="bg-[#B8985B] text-[#111827] px-10 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 flex items-center gap-3">
                Review Your Case <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Available 24/7</div>
                  <div className="font-serif text-lg">{phone}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0A0F1A] border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {[
            { label: "Combined Experience", value: "50+ Years" },
            { label: "Cases Won", value: "2,500+" },
            { label: "Settlements", value: "$500M+" },
            { label: "Client Satisfaction", value: "99%" }
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i === 0 ? "pl-0" : ""}`}>
              <div className="text-3xl md:text-4xl font-serif text-[#B8985B] mb-2">{stat.value}</div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-4 text-[#B8985B]">
              <div className="h-px w-8 bg-[#B8985B]"></div>
              <span className="uppercase tracking-widest text-xs font-bold">Firm Overview</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-[#111827] leading-[1.2]">
              A legacy of uncompromising advocacy and legal brilliance.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed font-light">
              {about}
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              {[
                "Award-winning trial attorneys",
                "Aggressive negotiation strategies",
                "Personalized attention to every case",
                "Unwavering ethical standards"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="w-5 h-5 text-[#B8985B] flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="pt-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_of_John_Hancock.svg" alt="Signature" className="h-16 opacity-40" />
              <div className="mt-2 text-sm uppercase tracking-widest font-semibold text-gray-900">Managing Partner</div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#B8985B]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#B8985B]"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80" 
              alt="Lawyers in meeting" 
              className="w-full h-auto grayscale relative z-10 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" className="py-32 px-8 bg-[#111827] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="flex items-center justify-center gap-4 text-[#B8985B]">
              <div className="h-px w-8 bg-[#B8985B]"></div>
              <span className="uppercase tracking-widest text-xs font-bold">Areas of Focus</span>
              <div className="h-px w-8 bg-[#B8985B]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our Practice Areas</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {practiceAreas.map((area, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative border border-white/10 p-10 bg-white/5 hover:bg-white/10 transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#B8985B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <area.icon className="w-12 h-12 text-[#B8985B] mb-6" />
                <h3 className="text-2xl font-serif text-white mb-4">{area.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">{area.desc}</p>
                
                <div className="flex items-center gap-2 text-sm text-[#B8985B] uppercase tracking-widest font-semibold group-hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-4 text-[#B8985B]">
              <div className="h-px w-8 bg-[#B8985B]"></div>
              <span className="uppercase tracking-widest text-xs font-bold">Request Evaluation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827] leading-[1.2]">
              Confidential Case <br />Consultation
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Time is critical in legal matters. Contact our office immediately to schedule a private consultation with our managing partners.
            </p>

            <div className="space-y-8 pt-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-[#B8985B] flex items-center justify-center text-[#B8985B] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Call Our Office</div>
                  <div className="font-serif text-2xl text-[#111827]">{phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-[#B8985B] flex items-center justify-center text-[#B8985B] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Direct Email</div>
                  <div className="font-serif text-xl text-[#111827]">{email}</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-[#B8985B] flex items-center justify-center text-[#B8985B] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Headquarters</div>
                  <div className="font-serif text-xl text-[#111827] max-w-xs">{address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="bg-[#111827] p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#B8985B] opacity-5"></div>
            <h3 className="text-2xl font-serif text-white mb-8 relative z-10">Secure Your Rights</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#B8985B] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#B8985B] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#B8985B] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Case Description</label>
                <textarea rows={4} className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#B8985B] transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-[#B8985B] text-[#111827] py-4 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors duration-300 mt-4">
                Submit For Review
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0F1A] text-gray-400 py-16 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4">
            <Scale className="w-6 h-6 text-[#B8985B]" />
            <span className="font-serif font-bold text-xl text-white tracking-tight">
              {name.split(' ')[0]}<span className="font-light text-[#B8985B]">LAW</span>
            </span>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-semibold">
            <a href="#about" className="hover:text-[#B8985B] transition-colors">Firm Overview</a>
            <a href="#practice" className="hover:text-[#B8985B] transition-colors">Practice Areas</a>
            <a href="#contact" className="hover:text-[#B8985B] transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} {name}. Attorney Advertising.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Disclaimer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
