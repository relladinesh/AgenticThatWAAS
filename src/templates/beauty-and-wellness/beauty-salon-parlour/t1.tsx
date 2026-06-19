
import { TemplateProps } from "@/types";
import {
  Phone, Play, MapPin, Calendar, Sparkles, Star, Scissors, Heart, 
  Facebook, Twitter, Instagram, Mail, Menu, X, User, ChevronLeft, ChevronRight, Crown
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function BeautyTemplate1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroImage, setHeroImage] = useState(
    data.image || "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
  );
  
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data.image) setHeroImage(data.image);

    // Beautiful premium imagery for parlour
    const POOL = [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596178010629-9e2c4cb70dd7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080661-46b0d9197c0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
    ];

    // Create a simple deterministic seed from the business name
    let seed = data.name ? data.name.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0) : 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    setGalleryImages([...POOL].sort(() => 0.5 - seededRandom()).slice(0, 8));
  }, [data.name, data.image]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? sliderRef.current.clientWidth : sliderRef.current.clientWidth / 3;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? sliderRef.current.clientWidth : sliderRef.current.clientWidth / 3;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-play the slider slowly
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = window.innerWidth < 768 ? clientWidth : clientWidth / 3;
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  const SERVICES = [
    { title: "Hair Styling & Color", desc: "Expert styling, coloring, and treatments for vibrant, healthy hair." },
    { title: "Bridal & Special Occasion", desc: "Flawless makeup and elegant updos for your most important days." },
    { title: "Skincare & Facials", desc: "Rejuvenating treatments to glow and maintain youthful skin." },
    { title: "Nail Care & Art", desc: "Luxury manicures, pedicures, and intricate nail artistry." }
  ];

  const TESTIMONIALS = [
    { name: "Sophia Reynolds", type: "Regular Client", text: "Absolutely wonderful experience! The ambiance is so relaxing, and the staff is incredibly skilled. I always leave feeling like a queen." },
    { name: "Mia Thompson", type: "Bride", text: "They did my makeup and hair for my wedding, and it was pure perfection. Highly recommend their bridal packages!" },
    { name: "Isabella Garcia", type: "Verified Client", text: "The best facial I've ever had. My skin has never looked so clear and radiant. The products they use are top-tier." },
    { name: "Olivia Williams", type: "Regular Client", text: "I've been coming here for a year for my manicures and hair coloring. The consistency and luxury service never drops." },
    { name: "Emma Davis", type: "Verified Client", text: "A truly premium salon experience. The attention to detail and customer care is unmatched in the city." },
  ];

  return (
    <div className="min-h-screen bg-[#fff5f7] font-sans text-slate-800 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden scroll-smooth relative">
      
      {/* Soft Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex justify-center items-center">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-200/40 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-300/30 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-amber-100/40 blur-[80px]"></div>
      </div>

      {/* HEADER WITH GLASSMORPHISM */}
      <header className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-50 bg-white/70 backdrop-blur-xl rounded-b-[2rem] shadow-sm border border-white/80 mt-2">
        <div className="flex items-center gap-3">
          <Crown className="w-7 h-7 text-rose-500" />
          <span className="text-xl font-black tracking-widest text-slate-900 uppercase font-serif">{data.name}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#home" className="text-slate-900 relative">
            Home
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-rose-500"></span>
          </a>
          <a href="#about" className="hover:text-rose-500 transition-colors">About Us</a>
          <a href="#service" className="hover:text-rose-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-rose-500 transition-colors shadow-lg shadow-rose-500/20 uppercase">
            Book Now
          </button>
        </div>

        <button 
          className="md:hidden text-slate-900 p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-28 left-4 right-4 bg-white/90 backdrop-blur-2xl shadow-xl z-40 rounded-2xl border border-white p-6 flex flex-col gap-6 font-bold text-slate-600 text-center text-sm uppercase tracking-widest">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-rose-500 pb-4 border-b border-rose-50">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-rose-50">About Us</a>
          <a href="#service" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-rose-50">Services</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 pt-16 pb-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="relative z-10 pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 text-rose-600 text-[10px] font-bold uppercase tracking-widest mb-8 border border-rose-200">
              <Sparkles className="w-3.5 h-3.5" />
              Luxury Beauty Parlour & Spa
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-[1.1]">
              Discover Your <br/>
              <span className="text-rose-500 italic pr-2">True Radiance</span>
            </h1>
            
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-md font-medium">
              {data.about || "Experience premium beauty treatments in a relaxing and luxurious atmosphere. Our expert stylists and therapists are dedicated to making you feel elegant and confident."}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <button className="w-full sm:w-auto bg-rose-500 text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-rose-600 transition-all shadow-xl shadow-rose-500/30 uppercase">
                Explore Services
              </button>
              <div className="flex items-center gap-3 group cursor-pointer">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-md group-hover:scale-105 transition-transform border border-slate-100">
                  <Play className="w-4 h-4 ml-1 fill-rose-500" />
                </button>
                <span className="font-bold text-slate-900 text-xs uppercase tracking-widest">Watch Video</span>
              </div>
            </div>

            <div className="flex items-center gap-8 border-t border-rose-200/50 pt-8">
              <div>
                <h4 className="text-3xl font-serif text-slate-900 mb-1">4.9</h4>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">500+ Reviews</p>
              </div>
              <div className="w-px h-12 bg-rose-200/50"></div>
              <div>
                <h4 className="text-3xl font-serif text-slate-900 mb-1">10+</h4>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-3">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right Image Layout (Premium Collage) */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main Arch Image */}
            <div className="absolute top-0 right-10 w-[380px] h-[500px] overflow-hidden rounded-t-full rounded-b-[2rem] border-[8px] border-white shadow-2xl z-20">
               <img src={galleryImages[0] || heroImage} alt="Main Beauty" className="w-full h-full object-cover" />
            </div>
            
            {/* Accent Floating Image */}
            <div className="absolute bottom-10 left-0 w-[240px] h-[280px] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl z-30">
               <img src={galleryImages[1] || heroImage} alt="Accent Beauty" className="w-full h-full object-cover" />
            </div>

            {/* Decorative Element */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-rose-200 rounded-full mix-blend-multiply opacity-60 animate-pulse"></div>
            <div className="absolute bottom-40 right-0 w-16 h-16 bg-amber-200 rounded-full mix-blend-multiply opacity-60"></div>
          </div>
        </div>
      </section>

      {/* FLOATING BOOKING WIDGET (Glassmorphism) */}
      <div className="max-w-6xl mx-auto px-6 relative z-30 -mt-24 mb-32 hidden md:block">
        <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-white flex flex-row items-center justify-between gap-8">
          <div className="flex-1 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</p>
              <p className="font-bold text-sm text-slate-900">{data.address || "123 Elegance Blvd, NY"}</p>
            </div>
          </div>
          <div className="w-px h-12 bg-slate-100"></div>
          <div className="flex-1 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Service Type</p>
              <p className="font-bold text-sm text-slate-900">Hair & Makeup</p>
            </div>
          </div>
          <div className="w-px h-12 bg-slate-100"></div>
          <div className="flex-1 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date</p>
              <p className="font-bold text-sm text-slate-900">Choose Date</p>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-xs font-bold tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 uppercase shrink-0">
            Book Appointment
          </button>
        </div>
      </div>

      {/* ABOUT & SERVICES (Bento Box Layout) */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-rose-500 tracking-widest uppercase mb-3">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">A Sanctuary for Your Senses</h3>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">
            We believe that beauty is not just about appearances, but about how you feel inside. Our premium salon offers a holistic approach to beauty, combining expert techniques with luxurious products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="md:col-span-2 bg-white rounded-3xl p-10 flex flex-col justify-center border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-full opacity-10 bg-gradient-to-l from-rose-200 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <Heart className="w-10 h-10 text-rose-400 mb-6" />
            <h4 className="text-2xl font-serif text-slate-900 mb-4">Personalized Care</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">Every client is unique. We tailor our services to match your specific beauty goals, ensuring a personalized experience that brings out your best features.</p>
          </div>
          <div className="bg-rose-500 rounded-3xl p-10 flex flex-col justify-center text-white shadow-lg shadow-rose-500/20 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-20">
               <Crown className="w-48 h-48" />
            </div>
            <h4 className="text-5xl font-serif mb-2">100%</h4>
            <p className="text-sm font-bold tracking-widest uppercase opacity-90">Premium Quality Products</p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section id="service" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-sm font-bold text-rose-500 tracking-widest uppercase mb-3">Our Offerings</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Signature Services</h3>
            </div>
            <button className="border-b-2 border-slate-900 text-slate-900 pb-1 font-bold text-sm hover:text-rose-500 hover:border-rose-500 transition-colors uppercase tracking-widest">
              View All Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((srv, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                  <img src={galleryImages[i+2] || heroImage} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="bg-white/20 backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest w-full hover:bg-white hover:text-slate-900 transition-colors">
                      Book Service
                    </button>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-serif">{srv.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM TESTIMONIALS (Glassmorphism Cards) */}
      <section className="py-32 relative z-10 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[#fff5f7]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-rose-100/50 blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
          <h2 className="text-sm font-bold text-rose-500 tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Words From Our Clients</h3>
        </div>

        <div className="max-w-[100rem] mx-auto px-4 relative group z-10">
          <button onClick={scrollLeft} className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 items-center justify-center text-slate-900 z-30 hover:bg-rose-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
             <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={scrollRight} className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 items-center justify-center text-slate-900 z-30 hover:bg-rose-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
             <ChevronRight className="w-6 h-6" />
          </button>

          <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-16 pt-8 px-6 md:px-16 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.5rem)] snap-start relative bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(225,29,72,0.1)] transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 mx-auto mb-6">
                  <User className="w-8 h-8" />
                </div>
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8 italic">"{testimonial.text}"</p>
                <h4 className="font-bold text-slate-900 text-base font-serif">{testimonial.name}</h4>
                <p className="text-[10px] text-rose-400 font-bold mt-1 uppercase tracking-widest">{testimonial.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER PRE-SECTION */}
      <section id="contact" className="py-24 bg-slate-900 relative z-10 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-white">
              <h2 className="text-sm font-bold text-rose-400 tracking-widest uppercase mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8">Book Your Session</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
                Ready to transform your look? Contact us today to schedule your appointment. We look forward to welcoming you to our sanctuary.
              </p>
              
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-white/80">{data.address || "123 Elegance Blvd, NY 10001"}</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-white/80">{data.phone || "+1 (234) 567-8900"}</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-white/80">{data.email || "hello@beautyparlour.com"}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                <div className="relative">
                  <select className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm text-slate-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all appearance-none">
                    <option>Select Service</option>
                    <option>Hair Styling</option>
                    <option>Skincare</option>
                    <option>Bridal Makeup</option>
                    <option>Nail Care</option>
                  </select>
                  <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90" />
                </div>
                <textarea placeholder="Message (Optional)" rows={3} className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-rose-200 outline-none resize-none transition-all"></textarea>
                <button type="button" className="w-full bg-rose-500 text-white px-10 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30 uppercase mt-2">
                  Submit Request
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Crown className="w-6 h-6 text-rose-500" />
              <span className="text-xl font-black tracking-widest text-white uppercase font-serif">{data.name}</span>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 text-white transition-all cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 text-white transition-all cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 text-white transition-all cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="text-center text-white/40 text-xs font-medium uppercase tracking-widest pt-8 border-t border-white/10">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
