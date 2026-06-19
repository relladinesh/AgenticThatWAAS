
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Scale, 
  BookOpen, 
  Briefcase, 
  Landmark, 
  ShieldAlert, 
  Award, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Quote
} from "lucide-react";

const LegalLawFirmT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Sterling & Partners";
  const about = data?.about || "We provide exceptional legal counsel to businesses and individuals. With decades of combined experience, our firm is dedicated to achieving the best possible outcomes through rigorous advocacy, strategic thinking, and an unwavering commitment to our clients.";
  const services = data?.services || [
    "Corporate Litigation",
    "Mergers & Acquisitions",
    "Intellectual Property",
    "Real Estate Law",
    "Employment & Labor",
    "Wealth & Estate Planning"
  ];
  const email = data?.email || "consult@sterlinglaw.com";
  const phone = data?.phone || "+1 (800) 555-0198";
  const address = data?.address || "100 Financial District, Suite 400";

  // Images tailored for a premium law firm
  const images = [
    data?.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80", // Courthouse scales / Architecture
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", // Premium office
    "https://images.unsplash.com/photo-1505664159858-80a69620d18f?w=1200&q=80", // Law books / Details
  ];

  const serviceIcons = [
    <Landmark className="w-5 h-5" />,
    <Briefcase className="w-5 h-5" />,
    <BookOpen className="w-5 h-5" />,
    <Scale className="w-5 h-5" />,
    <Briefcase className="w-5 h-5" />,
    <ShieldAlert className="w-5 h-5" />
  ];

  // Framer variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const lineGrow = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1, ease: "easeInOut" } }
  };

  return (
    <>
    <div className="min-h-screen bg-[#FDFDFD] text-[#111827] font-sans selection:bg-[#B4975A] selection:text-white overflow-x-hidden">
      
      {/* MINIMALIST NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-4 border-b border-gray-100" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center text-[#B4975A]">
              <Scale className="w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-xl tracking-wide uppercase text-[#0F172A] hidden sm:block">
              {name}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#firm" className="text-sm font-medium tracking-widest uppercase text-gray-500 hover:text-[#B4975A] transition-colors">Our Firm</a>
            <a href="#practices" className="text-sm font-medium tracking-widest uppercase text-gray-500 hover:text-[#B4975A] transition-colors">Practices</a>
            <a href="#contact" className="text-sm font-medium tracking-widest uppercase text-gray-500 hover:text-[#B4975A] transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="px-7 py-3 bg-[#0F172A] text-white text-sm font-medium tracking-widest uppercase hover:bg-[#B4975A] transition-colors duration-300 border border-[#0F172A] hover:border-[#B4975A]">
              Consultation
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#0F172A]">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#firm" onClick={() => setIsMenuOpen(false)} className="font-serif text-2xl text-[#0F172A]">Our Firm</a>
                <a href="#practices" onClick={() => setIsMenuOpen(false)} className="font-serif text-2xl text-[#0F172A]">Practice Areas</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-serif text-2xl text-[#0F172A]">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* EDITORIAL HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-0 px-6 min-h-[95vh] flex items-center bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <motion.div className="lg:col-span-6 space-y-10 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#B4975A]"></div>
              <span className="text-[#B4975A] text-xs font-bold tracking-[0.2em] uppercase">Est. Legal Counsel</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-serif text-[#0F172A] leading-[1.05]"
            >
              Advocacy <br/>
              <span className="italic text-gray-400 font-light">&</span> Authority.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed font-light"
            >
              {about.split('.')[0]}. We navigate complex legal landscapes to protect your legacy and future.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
              className="pt-4 flex items-center gap-8"
            >
              <a href="#contact" className="group flex items-center gap-4 text-[#0F172A] font-medium tracking-widest uppercase text-sm">
                <span className="border-b border-[#0F172A] pb-1 group-hover:border-[#B4975A] group-hover:text-[#B4975A] transition-colors">Schedule Review</span>
                <ArrowRight className="w-4 h-4 text-[#B4975A] group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6 relative h-[60vh] lg:h-[85vh] w-full">
            <motion.div 
              initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute inset-0 bg-gray-100"
            >
              <motion.img 
                style={{ y: yParallax }}
                src={images[0]} 
                alt="Legal Architecture" 
                className="w-full h-[120%] object-cover object-center origin-top scale-105" 
              />
            </motion.div>
            {/* Elegant overlay box */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}
              className="absolute -left-12 bottom-12 bg-white p-8 shadow-2xl max-w-xs hidden md:block"
            >
              <Quote className="w-8 h-8 text-[#B4975A] mb-4 opacity-50" />
              <p className="font-serif text-lg text-[#0F172A] leading-snug">
                "Uncompromising integrity in every counsel we provide."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REPUTATION BAR */}
      <section className="border-y border-gray-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "$1B+", label: "Settlements Reached" },
            { value: "500+", label: "Cases Won" },
            { value: "Top 1%", label: "Legal Rating" }
          ].map((stat, idx) => (
            <div key={idx} className="w-full text-center py-4 md:py-0 md:px-8 first:pl-0 last:pr-0">
              <div className="font-serif text-4xl text-[#0F172A] mb-2">{stat.value}</div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR FIRM */}
      <section id="firm" className="py-32 px-6 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative aspect-[3/4] lg:aspect-auto lg:h-[700px]">
              <img src={images[1]} alt="Office" className="w-full h-full object-cover grayscale opacity-90" />
              <div className="absolute inset-0 border border-[#B4975A]/30 m-6"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F4F4F5] -z-10 hidden md:block"></div>
            </motion.div>

            <div className="space-y-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[#B4975A]"></div>
                  <span className="text-[#B4975A] text-xs font-bold tracking-[0.2em] uppercase">About Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] leading-tight mb-8">
                  A legacy built on <br/> relentless pursuit of justice.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed font-light mb-6">
                  {about}
                </p>
                <p className="text-gray-500 text-lg leading-relaxed font-light">
                  Our multidisciplinary approach ensures that every angle is covered, providing you with comprehensive protection and strategic advantages in any legal matter.
                </p>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-8 border-t border-gray-100 flex items-center gap-6">
                <Award className="w-12 h-12 text-[#B4975A] stroke-[1.5]" />
                <div>
                  <div className="text-sm font-bold tracking-widest uppercase text-[#0F172A]">Recognized Excellence</div>
                  <div className="text-gray-400 text-sm italic">Awarded National Tier 1 Firm</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS - ELEGANT ACCORDION/LIST */}
      <section id="practices" className="py-32 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-1/3">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[#B4975A]"></div>
                  <span className="text-[#B4975A] text-xs font-bold tracking-[0.2em] uppercase">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                  Areas of <br/> Practice.
                </h2>
                <p className="text-gray-400 font-light leading-relaxed mb-10">
                  Focused knowledge. Comprehensive strategy. We represent clients across a spectrum of complex legal domains.
                </p>
                <a href="#contact" className="inline-flex items-center gap-4 text-white text-sm font-medium tracking-widest uppercase hover:text-[#B4975A] transition-colors group">
                  Discuss Your Case <ArrowRight className="w-4 h-4 text-[#B4975A] group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>

            <div className="lg:w-2/3 flex flex-col">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group relative border-b border-white/10 last:border-b-0 cursor-pointer"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={lineGrow}
                    className="absolute bottom-0 left-0 h-[1px] bg-[#B4975A] z-10"
                    style={{ width: activeService === index ? "100%" : "0%" }}
                  />
                  <div className="py-10 flex items-center justify-between transition-all duration-500 group-hover:pl-6">
                    <div className="flex items-center gap-8">
                      <span className="text-gray-600 font-serif text-xl italic opacity-50 group-hover:opacity-100 group-hover:text-[#B4975A] transition-colors">0{index + 1}</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-gray-300 group-hover:text-white transition-colors">{service}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#B4975A] group-hover:border-[#B4975A] transition-all duration-500">
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION - PREMIUM FORM */}
      <section id="contact" className="py-32 px-6 bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto bg-white shadow-xl flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-5/12 bg-[#0F172A] p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div>
              <h3 className="text-3xl font-serif mb-4">Private Consultation</h3>
              <p className="text-gray-400 font-light mb-12 max-w-sm">
                All communications are strictly confidential. Contact us to schedule an initial review of your matter.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#B4975A] mt-1" />
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1">Office Location</div>
                    <div className="font-light text-gray-300">{address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#B4975A] mt-1" />
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1">Direct Line</div>
                    <div className="font-light text-gray-300">{phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#B4975A] mt-1" />
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1">Email Inquiries</div>
                    <div className="font-light text-gray-300">{email}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/10">
              <div className="text-sm font-serif italic text-gray-400">
                Available 24/7 for urgent legal matters.
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-12 md:p-20">
            <h3 className="text-2xl font-serif text-[#0F172A] mb-10">Submit an Inquiry</h3>
            <form onSubmit={e => e.preventDefault()} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative border-b border-gray-300 focus-within:border-[#B4975A] transition-colors pb-2">
                  <input type="text" id="name" placeholder=" " className="w-full bg-transparent focus:outline-none text-[#0F172A] peer" />
                  <label htmlFor="name" className="absolute left-0 top-0 text-sm text-gray-400 font-light transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#B4975A] peer-focus:font-medium peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
                    Full Legal Name
                  </label>
                </div>
                <div className="relative border-b border-gray-300 focus-within:border-[#B4975A] transition-colors pb-2">
                  <input type="text" id="phone" placeholder=" " className="w-full bg-transparent focus:outline-none text-[#0F172A] peer" />
                  <label htmlFor="phone" className="absolute left-0 top-0 text-sm text-gray-400 font-light transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#B4975A] peer-focus:font-medium peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
                    Phone Number
                  </label>
                </div>
              </div>
              
              <div className="relative border-b border-gray-300 focus-within:border-[#B4975A] transition-colors pb-2">
                <input type="email" id="email" placeholder=" " className="w-full bg-transparent focus:outline-none text-[#0F172A] peer" />
                <label htmlFor="email" className="absolute left-0 top-0 text-sm text-gray-400 font-light transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#B4975A] peer-focus:font-medium peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
                  Email Address
                </label>
              </div>
              
              <div className="relative border-b border-gray-300 focus-within:border-[#B4975A] transition-colors pb-2 pt-4">
                <textarea id="message" rows={3} placeholder=" " className="w-full bg-transparent focus:outline-none text-[#0F172A] resize-none peer"></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-sm text-gray-400 font-light transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#B4975A] peer-focus:font-medium peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
                  Brief description of your matter
                </label>
              </div>

              <button className="bg-[#B4975A] hover:bg-[#0F172A] text-white px-10 py-4 font-medium tracking-widest uppercase text-sm transition-colors duration-300">
                Request Counsel
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0F1C] text-gray-400 py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#B4975A] flex items-center justify-center text-[#0A0F1C]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-lg tracking-wide uppercase text-white">
                {name}
              </span>
            </div>
            <p className="font-light text-sm max-w-xs leading-relaxed">
              Excellence in legal advocacy. Providing strategic counsel for the most complex matters.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">Navigation</div>
            <div className="flex flex-col gap-3 font-light text-sm">
              <a href="#firm" className="hover:text-[#B4975A] transition-colors w-max">Our Firm</a>
              <a href="#practices" className="hover:text-[#B4975A] transition-colors w-max">Practice Areas</a>
              <a href="#contact" className="hover:text-[#B4975A] transition-colors w-max">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">Legal</div>
            <div className="flex flex-col gap-3 font-light text-sm">
              <span className="hover:text-[#B4975A] transition-colors cursor-pointer w-max">Privacy Policy</span>
              <span className="hover:text-[#B4975A] transition-colors cursor-pointer w-max">Terms of Service</span>
              <span className="hover:text-[#B4975A] transition-colors cursor-pointer w-max">Attorney Advertising</span>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide text-gray-600 gap-4">
          <div>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</div>
          <div>Disclaimer: Prior results do not guarantee a similar outcome.</div>
        </div>
      </footer>
    </div>
    </>
  );
};
export default LegalLawFirmT2;
