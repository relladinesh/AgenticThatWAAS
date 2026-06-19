
import { TemplateProps, CoachingData } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, BookOpen, Users, Trophy, Star, MapPin, Phone, Mail, GraduationCap, Target, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CoachingTemplate1({ data }: TemplateProps) {
  const coaching = data as CoachingData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const pool = [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1513258496099-481620d4ce8d?w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
    ];
    let seed = coaching.name ? coaching.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    setDynamicImages(pool.sort(() => 0.5 - seededRandom()));

    return () => window.removeEventListener("scroll", handleScroll);
  }, [coaching.name]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  const courses = coaching.courses?.length ? coaching.courses : [
    "Advanced Leadership Mastery",
    "Digital Marketing Accelerator",
    "Full-Stack Web Development",
    "Data Science & Analytics",
    "Business Strategy & Management",
    "Financial Literacy 101"
  ];

  const instructors = coaching.instructors?.length ? coaching.instructors : [
    { name: "Dr. Sarah Jenkins", subject: "Business Strategy" },
    { name: "Prof. Michael Chen", subject: "Data Science" },
    { name: "Elena Rostova", subject: "Leadership" }
  ];

  const testimonials = coaching.testimonials?.length ? coaching.testimonials : [
    { name: "David R.", review: "This program completely transformed my career trajectory. The instructors are world-class." },
    { name: "Jessica M.", review: "Intensive, practical, and incredibly rewarding. I landed my dream job within weeks of graduating." },
    { name: "James T.", review: "The curriculum is meticulously designed for real-world application. Highly recommended." }
  ];

  const teamMembers = coaching.team?.length ? coaching.team : instructors.map(i => ({ name: i.name, role: i.subject }));

  return (
    <main className="min-h-screen bg-[#f8f9fc] font-sans text-[#1e293b] selection:bg-[#3b82f6] selection:text-white">
      
      {/* Modern EdTech Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100" : "py-6 bg-transparent"}`}>
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-black tracking-tight text-[#0f172a]"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            {coaching.name || "Aura Academy"}
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            {["Home", "Programs", "Instructors", "Success Stories", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Apply Now
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-2xl font-black tracking-tight text-blue-600">{coaching.name || "Aura Academy"}</div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {["Home", "Programs", "Instructors", "Success Stories", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Target className="w-4 h-4" /> Expert Coaching & Training
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6 text-[#0f172a]">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Potential.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {coaching.about || "Join the elite academy designed to transform ambition into achievement through expert-led mentorship and rigorous curriculums."}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Explore Programs <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                Talk to Advisor
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-8">
              <div>
                <p className="text-3xl font-black text-[#0f172a]">{coaching.successRate || "98%"}</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Success Rate</p>
              </div>
              <div className="w-[1px] h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-black text-[#0f172a]">{courses.length}+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Programs</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img src={coaching.image || getImg("https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 0)} alt="Education" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />)}
                  </div>
                  <span className="text-sm font-medium">Join 5,000+ Students</span>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-16 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <p className="font-bold text-[#0f172a] text-lg">Top Rated</p>
              <p className="text-sm text-gray-500 font-medium">Award winning curriculum</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs / Courses Section */}
      <section id="programs" className="py-24 bg-white px-6">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-4 tracking-tight">Featured Programs</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Comprehensive courses designed to accelerate your growth and career.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8f9fc] rounded-3xl p-8 border border-gray-100 group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-tight">{course}</h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                  Master the fundamentals and advanced techniques with our comprehensive curriculum tailored for real-world success.
                </p>
                <a href="#" className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-24 bg-[#0f172a] text-white px-6">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Learn from the Best.</h2>
              <p className="text-lg text-gray-400 font-medium">Our faculty consists of industry leaders and experienced professionals.</p>
            </div>
            <button className="bg-white/10 text-white hover:bg-white hover:text-[#0f172a] px-6 py-3 rounded-full font-bold transition-colors">
              View All Instructors
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((instructor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <img src={instructor.image || getImg("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", i + 5)} alt={instructor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-blue-400 font-semibold text-sm tracking-wide uppercase">{instructor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="success-stories" className="py-24 bg-white px-6">
        <div className="max-w-[90rem] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-16 tracking-tight">Student Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0,3).map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8f9fc] p-8 rounded-3xl text-left border border-gray-100 shadow-sm relative"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8">"{test.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black text-xl">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">{test.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">Alumni</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-24 bg-blue-600 text-white px-6 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-[90rem] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 max-w-xl">
              Get in touch with our admissions team to learn more about the curriculum, schedule, and how we can help you achieve your goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-lg font-semibold">{coaching.address || "Innovation Hub, Tech Park, NY"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-bold uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-semibold">{coaching.phone || "+1 234 567 8900"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-lg font-semibold">{coaching.email || "admissions@auraacademy.com"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-[#0f172a] rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-black mb-6">Request Information</h3>
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-colors" />
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-colors text-gray-500">
                <option value="">Select Program of Interest</option>
                {courses.map((c,i) => <option key={i} value={c}>{c}</option>)}
              </select>
              <textarea placeholder="Tell us about your goals" rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-colors resize-none"></textarea>
              <button className="w-full bg-blue-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 font-medium text-sm">
          <p>© {new Date().getFullYear()} {coaching.name || "Aura Academy"}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
