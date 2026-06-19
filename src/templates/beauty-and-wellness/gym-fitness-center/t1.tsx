
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, X, ArrowRight, CheckCircle2, Dumbbell, Activity, Star, Quote, 
  MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, Instagram, Facebook, Twitter, 
  ShieldCheck, Users, Flame, Trophy, HeartPulse
} from "lucide-react";

export default function GymTemplate1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "VITALITY FITNESS";
  const tagline = data?.tagline || "Forge your body, sharpen your mind.";
  const about = data?.about || "We are a premium fitness facility dedicated to helping you achieve your ultimate physical potential. Our expert trainers and state-of-the-art equipment provide the perfect environment for your transformation.";
  const phone = data?.phone || "+1 (555) 123-4567";
  const email = data?.email || "join@vitalityfitness.com";
  const address = data?.address || "123 Muscle Ave, Iron City, NY 10001";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const services = [
    { title: "Personal Training", desc: "1-on-1 coaching tailored to your specific goals.", icon: <Users className="w-8 h-8" /> },
    { title: "Strength & Conditioning", desc: "Build raw power and athletic endurance.", icon: <Dumbbell className="w-8 h-8" /> },
    { title: "CrossFit Elements", desc: "High-intensity functional movements.", icon: <Flame className="w-8 h-8" /> },
    { title: "Nutrition Coaching", desc: "Fuel your body for maximum performance.", icon: <Activity className="w-8 h-8" /> }
  ];

  const pricing = [
    { name: "Essential", price: "49", period: "month", features: ["Access to gym floor", "Basic equipment use", "Locker room access", "1 Free assessment"], popular: false },
    { name: "Premium", price: "89", period: "month", features: ["24/7 Gym access", "All group classes", "Advanced equipment", "Monthly body scan", "Nutrition guide"], popular: true },
    { name: "Elite", price: "149", period: "month", features: ["Everything in Premium", "4 Personal training sessions", "Private locker", "Recovery room access", "VIP support"], popular: false }
  ];

  const trainers = [
    { name: "Marcus Thorne", role: "Head Coach", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80" },
    { name: "Sarah Jenkins", role: "CrossFit Specialist", img: "https://images.unsplash.com/photo-1611562635956-2db473458e0a?w=600&q=80" },
    { name: "David Chen", role: "Strength & Conditioning", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" }
  ];

  const faqs = [
    { q: "What are your opening hours?", a: "We are open 24/7 for Premium and Elite members. Essential members have access from 5 AM to 11 PM daily." },
    { q: "Do you offer a free trial?", a: "Yes, we offer a 3-day free pass for local residents to experience our facilities and classes." },
    { q: "Can I cancel my membership anytime?", a: "We offer both flexible month-to-month and discounted annual commitments. Month-to-month can be canceled with a 30-day notice." },
    { q: "Are personal training sessions included?", a: "Our Elite plan includes 4 sessions per month. Other plans can add personal training packages separately." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-[#FF5A00] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-[#FF5A00]" />
            <span className="font-black tracking-tight text-2xl text-white uppercase">{name}</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-widest uppercase">
            <a href="#about" className="text-white hover:text-[#FF5A00] transition-colors">About</a>
            <a href="#services" className="text-white hover:text-[#FF5A00] transition-colors">Services</a>
            <a href="#trainers" className="text-white hover:text-[#FF5A00] transition-colors">Trainers</a>
            <a href="#pricing" className="text-white hover:text-[#FF5A00] transition-colors">Pricing</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="bg-transparent border border-[#FF5A00] text-[#FF5A00] hover:bg-[#FF5A00] hover:text-white px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-all duration-300">
              Free Trial
            </a>
            <a href="#pricing" className="bg-[#FF5A00] text-white hover:bg-[#e04e00] px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-all duration-300">
              Join Now
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#111] border-b border-white/5 overflow-hidden">
              <div className="px-6 py-8 space-y-6 flex flex-col items-center">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-bold text-xl text-white uppercase tracking-widest">About</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-bold text-xl text-white uppercase tracking-widest">Services</a>
                <a href="#trainers" onClick={() => setIsMenuOpen(false)} className="block font-bold text-xl text-white uppercase tracking-widest">Trainers</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block font-bold text-xl text-white uppercase tracking-widest">Pricing</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#FF5A00] text-white px-6 py-4 mt-4 font-bold uppercase tracking-wider">Join Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
        {/* Background Graphic & Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-end">
          {/* Subtle grid pattern for premium tech feel */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]"></div>
          
          <motion.div style={{ y: yParallax }} className="w-full md:w-[60%] h-[90%] relative z-10 opacity-30 md:opacity-100 flex items-end justify-center pt-10">
             {/* Using the static image path. User needs to drop the AI image into public/hero-builder.png */}
             <img src="/hero-builder.png" alt="Elite Bodybuilder" className="w-auto h-full object-contain object-bottom drop-shadow-2xl" />
             
             {/* Floating Badges */}
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="hidden md:block absolute top-[25%] right-[15%] lg:right-[25%] bg-white rounded-md p-3 shadow-2xl z-20 w-40">
               <div className="text-black font-black text-[0.65rem] uppercase leading-tight">GLOBAL<br/>FINISHER <span className="font-normal text-slate-400">|</span> TOP 1%</div>
               <div className="w-full h-1 bg-slate-200 mt-2 rounded-full overflow-hidden">
                 <div className="w-[80%] h-full bg-[#FF5A00]"></div>
               </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="hidden md:block absolute top-[55%] left-[20%] lg:left-[25%] bg-white rounded-md p-3 shadow-2xl z-20 w-36">
               <div className="text-black font-black text-[0.65rem] uppercase leading-tight">CONSISTENCY<br/>AWARD</div>
               <div className="w-full h-1 bg-slate-200 mt-2 rounded-full overflow-hidden">
                 <div className="w-[60%] h-full bg-[#FF5A00]"></div>
               </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="hidden md:block absolute top-[60%] right-[10%] lg:right-[18%] bg-white rounded-md p-3 shadow-2xl z-20 w-40">
               <div className="text-black font-black text-[0.65rem] uppercase leading-tight">ELITE PROGRAM<br/>GRADUATE</div>
               <div className="w-full h-1 bg-slate-200 mt-2 rounded-full overflow-hidden">
                 <div className="w-[90%] h-full bg-[#FF5A00]"></div>
               </div>
             </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent md:via-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex justify-between items-center">
          <div className="max-w-2xl pt-20 flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4">
              <span className="text-slate-300 uppercase text-xs font-medium tracking-[0.15em]">EXPERIENCE THE REVOLUTION</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.95] mb-6 uppercase tracking-tighter"
            >
              TRANSFORM <br/>
              YOUR <span className="text-[#FF5A00]">POTENTIAL.</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-slate-300 text-sm md:text-[0.95rem] max-w-md mb-10 leading-relaxed font-normal">
              Step into an elite training community designed for high-achievers. Access premium programs, world-class coaching, and a driven community to push you past your limits. Join the 1% who define strength.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <a href="#pricing" className="bg-[#FF5A00] text-white px-8 py-3.5 font-bold uppercase tracking-wider text-xs hover:bg-[#e04e00] transition-colors rounded shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                Join The Elite
              </a>
              <a href="#services" className="bg-transparent border border-white text-white px-8 py-3.5 font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-colors rounded">
                Explore Programs
              </a>
            </motion.div>

            {/* Stat Boxes */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex gap-4">
              <div className="border border-white/20 rounded-lg p-5 w-[110px] flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/5">
                <span className="text-3xl font-black text-white mb-1">25k+</span>
                <span className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-widest leading-tight">GLOBAL<br/>MEMBERS</span>
              </div>
              <div className="border border-white/20 rounded-lg p-5 w-[110px] flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/5">
                <span className="text-3xl font-black text-white mb-1">98%</span>
                <span className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-widest leading-tight">SUCCESS<br/>RATE</span>
              </div>
              <div className="border border-white/20 rounded-lg p-5 w-[110px] flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/5">
                <span className="text-3xl font-black text-white mb-1">12</span>
                <span className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-widest leading-tight">ELITE<br/>PROGRAMS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 bg-[#0f0f0f] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            <div className="absolute inset-0 bg-[#FF5A00] transform translate-x-4 translate-y-4"></div>
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470" alt="About Us" className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-8 -left-8 bg-[#111] border border-white/10 p-8 z-20 shadow-2xl hidden md:block">
              <div className="text-[#FF5A00] font-black text-6xl mb-2">15+</div>
              <div className="text-white font-bold uppercase tracking-widest text-sm">Years of <br/> Experience</div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
              <span className="text-[#FF5A00] font-bold tracking-[0.2em] uppercase text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tracking-tighter">
              We Have A Great Deal of Experience With <span className="text-[#FF5A00]">Fitness</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {about} Workouts at our gym are planned physical activities carried out in a state-of-the-art fitness center equipped with a range of exercise equipment, free weights, and expert guidance.
            </p>
            
            <ul className="space-y-4 pt-4">
              {['More than 15 years of experience', 'Authorized and certified trainers', 'Outstanding facilities and equipment', 'Proven transformation results'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[#FF5A00] shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <a href="#services" className="bg-transparent border-2 border-[#FF5A00] text-white hover:bg-[#FF5A00] px-8 py-4 font-bold uppercase tracking-wider transition-all inline-block">
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 bg-[#0a0a0a] relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5A00]/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
              <span className="text-[#FF5A00] font-bold tracking-[0.2em] uppercase text-sm">Our Programs</span>
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Push Your <span className="text-[#FF5A00]">Limits</span>
            </motion.h2>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#111] border border-white/5 p-10 hover:bg-[#FF5A00] group transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1a1a1a] group-hover:bg-white/20 rounded-full flex items-center justify-center text-[#FF5A00] group-hover:text-white mb-8 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-4 group-hover:text-white transition-colors tracking-tight">{service.title}</h3>
                <p className="text-slate-400 group-hover:text-white/80 leading-relaxed mb-8 transition-colors">
                  {service.desc}
                </p>
                <div className="text-[#FF5A00] group-hover:text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800" alt="Gym" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="bg-[#111] p-6 text-center border border-white/5">
                <div className="text-4xl font-black text-[#FF5A00] mb-2">24/7</div>
                <div className="text-white font-bold uppercase tracking-widest text-xs">Access Available</div>
              </div>
            </div>
            <div className="space-y-4">
               <div className="bg-[#FF5A00] p-6 text-center flex flex-col items-center justify-center h-48">
                <Users className="w-12 h-12 text-white mb-4" />
                <div className="text-white font-black text-xl uppercase tracking-widest">Community</div>
              </div>
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800" alt="Training" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
              <span className="text-[#FF5A00] font-bold tracking-[0.2em] uppercase text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tracking-tighter">
              Energizing Exercise Program For Both <span className="text-[#FF5A00]">Body</span> and <span className="text-[#FF5A00]">Mind</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We provide more than just a place to sweat. We offer a comprehensive fitness ecosystem designed to optimize every aspect of your health, from strength and endurance to mental resilience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck />, text: "Certified Trainers" },
                { icon: <Activity />, text: "Modern Equipment" },
                { icon: <Dumbbell />, text: "Free Weights Area" },
                { icon: <CheckCircle2 />, text: "Nutrition Guidance" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#111] p-4 border border-white/5">
                  <div className="text-[#FF5A00]">{item.icon}</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
              <span className="text-[#FF5A00] font-bold tracking-[0.2em] uppercase text-sm">Pricing Plans</span>
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Find Your <span className="text-[#FF5A00]">Perfect Plan</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricing.map((plan, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative p-10 border ${plan.popular ? 'bg-[#FF5A00] border-[#FF5A00] transform md:-translate-y-4 shadow-2xl shadow-[#FF5A00]/20' : 'bg-[#111] border-white/10 hover:border-[#FF5A00]/50 transition-colors'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#FF5A00] px-4 py-1 font-black uppercase text-xs tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 ${plan.popular ? 'text-white' : 'text-[#FF5A00]'}`}>{plan.name}</h3>
                <div className="mb-8">
                  <span className={`text-6xl font-black ${plan.popular ? 'text-white' : 'text-white'}`}>${plan.price}</span>
                  <span className={`text-sm uppercase font-bold tracking-widest ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-[#FF5A00]'}`} />
                      <span className={`font-medium ${plan.popular ? 'text-white' : 'text-slate-300'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-black uppercase tracking-widest transition-colors ${plan.popular ? 'bg-white text-[#FF5A00] hover:bg-slate-100' : 'bg-transparent border-2 border-[#FF5A00] text-[#FF5A00] hover:bg-[#FF5A00] hover:text-white'}`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section id="trainers" className="py-32 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
              <span className="text-[#FF5A00] font-bold tracking-[0.2em] uppercase text-sm">Expert Staff</span>
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Meet Our <span className="text-[#FF5A00]">Proficient Trainers</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group relative overflow-hidden bg-[#111]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{trainer.name}</h3>
                  <p className="text-[#FF5A00] font-bold uppercase tracking-widest text-xs mb-4">{trainer.role}</p>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href="#" className="text-white hover:text-[#FF5A00]"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-white hover:text-[#FF5A00]"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="text-white hover:text-[#FF5A00]"><Facebook className="w-5 h-5" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
              <span className="text-[#FF5A00] font-bold tracking-[0.2em] uppercase text-sm">Success Stories</span>
              <div className="h-[2px] w-8 bg-[#FF5A00]"></div>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              What Our <span className="text-[#FF5A00]">Members Say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Mercer", role: "Lost 40 lbs", text: "Joining this gym was the best decision I've made. The trainers push you to your limits, and the community is incredibly supportive. I've completely transformed my body and mind in just 6 months.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
              { name: "Sarah Jenkins", role: "Muscle Gain", text: "The equipment here is top-notch, and the environment is always motivating. You surround yourself with people who want to see you win. Absolutely love it.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
              { name: "Mike Thompson", role: "Elite Athlete", text: "As a competitive athlete, I needed a facility that catered to high performance. The 24/7 access and elite coaching staff provided exactly what I needed to prepare for my season.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" }
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#111] border border-white/10 p-8 hover:border-[#FF5A00]/50 transition-colors relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-[#FF5A00]/10" />
                <div className="flex gap-1 mb-6 text-[#FF5A00]">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-400 italic mb-8 relative z-10 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[#FF5A00]">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">{t.name}</h4>
                    <div className="text-[#FF5A00] text-xs font-bold uppercase mt-1">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Questions?</h2>
            <p className="text-slate-400">Everything you need to know about joining our facility.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#111] border border-white/5">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FF5A00] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="p-6 pt-0 text-slate-400 border-t border-white/5 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="py-32 px-6 bg-[#FF5A00] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6">
              Ready to <br/> Make a Change?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-md">
              Don't wait for tomorrow. Your transformation begins the moment you step through our doors. Contact us now to claim your free trial pass.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest">Location</div>
                  <div className="font-medium text-lg">{address}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest">Phone</div>
                  <div className="font-medium text-lg">{phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest">Email</div>
                  <div className="font-medium text-lg">{email}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-10 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Get Your Free Pass</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-[#1a1a1a] border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF5A00] transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-[#1a1a1a] border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF5A00] transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-[#1a1a1a] border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF5A00] transition-colors" />
              <button className="w-full bg-[#FF5A00] text-white py-4 font-black uppercase tracking-widest hover:bg-[#e04e00] transition-colors mt-4">
                Claim Free Trial
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] pt-20 pb-10 px-6 border-t border-white/10 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Flame className="w-8 h-8 text-[#FF5A00]" />
              <span className="font-black tracking-tight text-2xl text-white uppercase">{name}</span>
            </div>
            <p className="text-slate-400 mb-6">{tagline}</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#FF5A00] hover:border-[#FF5A00] transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#FF5A00] hover:border-[#FF5A00] transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#FF5A00] hover:border-[#FF5A00] transition-all"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-[#FF5A00] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FF5A00] transition-colors">Classes</a></li>
              <li><a href="#trainers" className="hover:text-[#FF5A00] transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-[#FF5A00] transition-colors">Memberships</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-[#FF5A00] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#FF5A00] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#FF5A00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FF5A00] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6">Working Hours</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li>Saturday: 6:00 AM - 10:00 PM</li>
              <li>Sunday: 7:00 AM - 8:00 PM</li>
              <li className="text-[#FF5A00] font-bold mt-4">24/7 Access for Elite Members</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p>Designed for Performance.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-slate-900 font-bold text-xs py-2 px-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

    </div>
  );
}
