
import { TemplateProps } from "@/types";
import {
  Phone, Play, MapPin, Calendar, Pill, CheckCircle2, Star, HeartPulse, Facebook, Twitter, Instagram, Mail, Clock, Menu, X, User, ChevronLeft, ChevronRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function DoctorTemplate1({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isCardiology = data.name?.toLowerCase().includes('cardiology') || data.specialization?.toLowerCase().includes('cardio');

  // Dynamic Content logic
  const [heroImage, setHeroImage] = useState(data.image?.includes('.png') ? data.image : "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aphysician-14215268569422rwtm.png");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Randomize Hero Image
    if (!data.image?.includes('.png')) {
      const DOCTOR_PNGS = [
        "https://pngimg.com/uploads/doctor/doctor_PNG15988.png", // Full body standing doctor
        "https://pngimg.com/uploads/doctor/doctor_PNG16031.png", // Female full body standing
        "https://www.pngmart.com/files/21/Medical-Doctor-PNG-HD.png", // Standing male
        "https://www.pngmart.com/files/21/Medical-Doctor-PNG-Clipart.png", // Standing female
        "https://pngimg.com/uploads/doctor/doctor_PNG15959.png" // Standing
      ];
      setHeroImage(DOCTOR_PNGS[Math.floor(Math.random() * DOCTOR_PNGS.length)]);
    } else {
      setHeroImage(data.image);
    }

    // Randomize Gallery (Now exclusively "Doctors Standing / Medical Teams")
    const POOL = [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop", // Doctors standing
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop", // Male doctor standing
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop", // Team standing
      "https://images.unsplash.com/photo-1584043720379-b56cd91b4cce?q=80&w=800&auto=format&fit=crop", // Surgeons standing
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop", // Female doctor standing
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", // Doctor working standing
      "https://images.unsplash.com/photo-1594824436998-ddedce28b14e?q=80&w=800&auto=format&fit=crop", // Team of doctors standing smiling
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop", // Doctor standing hallway
      "https://images.unsplash.com/photo-1527613426401-41d310148469?q=80&w=800&auto=format&fit=crop", // Doctor holding clipboard standing
      "https://images.unsplash.com/photo-1582750433449-648ed127d098?q=80&w=800&auto=format&fit=crop"  // Professional doctor standing
    ];
    setGalleryImages([...POOL].sort(() => 0.5 - Math.random()).slice(0, 8));
  }, [data.name]);

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
        // If reached the end, snap back to start. Otherwise, move to the next slide.
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = window.innerWidth < 768 ? clientWidth : clientWidth / 3;
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3500); // Moves slowly every 3.5 seconds

    return () => clearInterval(autoScroll);
  }, []);

  const BLOG_POSTS = isCardiology ? [
    { title: "Heart Case Study", desc: "Detailed analysis of recent cardiovascular treatments." },
    { title: "Arrhythmia Study", desc: "Understanding irregular heartbeats and new tech." },
    { title: "Diet Case Study", desc: "Impact of nutrition on long-term cholesterol." },
    { title: "Prevention Study", desc: "Early warning signs in younger adults." }
  ] : [
    { title: "General Case Study", desc: "Comprehensive review of routine checkup benefits." },
    { title: "Immunity Case Study", desc: "Understanding the role of modern vaccines." },
    { title: "Diet Case Study", desc: "Impact of balanced nutrition on daily energy." },
    { title: "Recovery Case Study", desc: "Post-treatment rehabilitation effectiveness." }
  ];

  const TESTIMONIALS = [
    { name: "John Smith", type: "Patient", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
    { name: "Sarah Jenkins", type: "Verified Client", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
    { name: "Michael Doe", type: "Patient", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
    { name: "Emma Watson", type: "Verified Client", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
    { name: "David Brown", type: "Patient", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden scroll-smooth relative">
      
      {/* Global Original Background Pattern (Parallax Capsules) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[80px] rounded-[100px] border-4 border-blue-200/40 rotate-[-15deg]"></div>
        <div className="absolute top-[25%] left-[-5%] w-[600px] h-[120px] rounded-[100px] bg-white/60 rotate-[35deg] shadow-sm"></div>
        <div className="absolute top-[45%] right-[-10%] w-[500px] h-[60px] rounded-[100px] border-8 border-white/80 rotate-[10deg]"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[100px] rounded-[100px] bg-blue-100/30 rotate-[-25deg]"></div>
        <div className="absolute bottom-[-5%] right-[20%] w-[800px] h-[150px] rounded-[100px] border-[12px] border-white/60 rotate-[45deg]"></div>
      </div>

      {/* HEADER WITH ACTIVE NAV AND MOBILE MENU */}
      <header className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-50 bg-white/60 backdrop-blur-md rounded-b-3xl shadow-sm border border-white mt-4">
        <div className="flex items-center gap-2">
          <Pill className="w-6 h-6 text-blue-500 transform -rotate-45" fill="currentColor" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">{data.name}</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-400">
          <a href="#home" className="text-slate-900 relative">
            Home
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500"></span>
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About Us</a>
          <a href="#service" className="hover:text-blue-500 transition-colors">Service</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-700">
          <Phone className="w-4 h-4 text-slate-400" />
          {data.phone || "+1 234 567 890"}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900 p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-xl z-40 border-t border-slate-100 p-6 flex flex-col gap-6 font-bold text-slate-600 text-center text-lg">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-500 pb-4 border-b border-slate-100">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-slate-100">About Us</a>
          <a href="#service" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-slate-100">Service</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 pt-12 pb-32 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="relative z-10 pt-10">
            <p className="text-blue-500 font-bold text-xs tracking-wide mb-4 uppercase">
              40% Off <span className="text-slate-500">Your Second Time Visit</span>
            </p>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-none">
              <span className="text-blue-500">{data.name}</span> <br/> Care
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md font-medium">
              {data.about || "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}
            </p>
            
            <div className="flex gap-8 mb-10">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Best protection
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
                Selected vaccines
              </div>
            </div>

            <div className="flex items-center gap-4 mb-16">
              <button className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform shrink-0">
                <Play className="w-5 h-5 ml-1 fill-white" />
              </button>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">Play Now</h4>
                <p className="text-xs font-medium text-slate-400">About clinic and get to know me well</p>
              </div>
            </div>

            {/* Floating Booking Bar */}
            <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgb(0,0,0,0.08)] border border-slate-50 w-full lg:w-[120%] max-w-3xl lg:absolute -bottom-16 z-20">
              <div className="flex items-center gap-2 mb-5 text-blue-500 text-xs font-bold uppercase tracking-wide">
                <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-blue-500" />
                </div>
                Schedule your appointments
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 flex items-center gap-3 w-full">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Location</p>
                    <p className="font-extrabold text-sm text-slate-900 truncate w-24">{data.address || "California, US"}</p>
                  </div>
                </div>
                <div className="w-full md:w-px h-px md:h-10 bg-slate-100"></div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <Calendar className="w-5 h-5 text-blue-300" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Date</p>
                    <p className="font-extrabold text-sm text-slate-900">9 June 2026</p>
                  </div>
                </div>
                <div className="w-full md:w-px h-px md:h-10 bg-slate-100"></div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <Pill className="w-5 h-5 text-blue-300 transform -rotate-45" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Type</p>
                    <p className="font-extrabold text-sm text-slate-900 truncate w-20">{data.specialization || "Pfizer"}</p>
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-8 py-3 w-full md:w-auto rounded text-sm font-bold hover:bg-blue-600 transition-colors shrink-0">
                  Submit
                </button>
              </div>
            </div>

          </div>

          {/* Right Image (Desktop Hero) */}
          <div className="relative h-[650px] flex items-end justify-center z-0 ml-0 lg:ml-12 mt-10 lg:mt-0 overflow-visible hidden md:flex">
            
            {/* The diagonal background pill shape (Matches screenshot perfectly) */}
            <div className="absolute top-[-5%] right-[-25%] bottom-[-5%] left-[20%] rounded-[140px] border-l-[24px] border-slate-900 transform rotate-[35deg] z-0 bg-blue-500 shadow-xl"></div>
            
            {/* Transparent Doctor PNG */}
            <img 
              src={heroImage} 
              alt="Doctor" 
              className="relative z-10 w-[110%] max-w-[550px] object-contain object-bottom h-[115%] drop-shadow-2xl translate-x-10"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://www.pngmart.com/files/21/Medical-Doctor-PNG-HD.png";
              }}
            />
          </div>
        </div>
      </section>

      {/* PERSONA INFO & SUCCESS RATIO */}
      <section id="about" className="pt-40 pb-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pr-0 md:pr-12">
            <h2 className="text-3xl font-black mb-4 text-slate-900 tracking-tight">About Us</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-16 font-medium">
              {data.about || "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
            
            <h3 className="text-xl font-black mb-10 text-slate-900">Success Ratio</h3>
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Top Consultant", val: "80%" },
                { label: "Patient Recovery", val: "85%" },
                { label: "Successful Care", val: "75%" }
              ].map((item, i) => (
                <div key={i} className="text-center w-24">
                  <div className="w-20 h-20 rounded-full border-[6px] border-slate-100 flex items-center justify-center relative mb-4 mx-auto bg-white shadow-sm">
                    <svg className="absolute inset-[-6px] w-[80px] h-[80px] transform -rotate-90">
                      <circle cx="40" cy="40" r="37" fill="transparent" stroke="currentColor" strokeWidth="6" className="text-blue-500" strokeDasharray="232" strokeDashoffset={232 * (1 - parseInt(item.val)/100)} strokeLinecap="round" />
                    </svg>
                    <span className="font-extrabold text-lg text-slate-900">{item.val}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight font-bold px-2 uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="text-center w-64">
              <div className="bg-[#4a84f3] w-64 h-64 flex flex-col items-center justify-center text-white mb-6 p-8 shadow-2xl shadow-blue-500/20">
                <span className="text-7xl font-black mb-2">10.</span>
                <span className="text-xs font-bold px-4 opacity-90 leading-snug uppercase tracking-widest">
                  Years of Professional Experience
                </span>
              </div>
              <button className="bg-slate-900 text-white w-full py-4 font-black tracking-wider text-xs hover:bg-slate-800 transition-colors uppercase">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FEEDBACK CARDS (Carousel Slider) */}
      <section className="py-24 bg-white/40 backdrop-blur-xl border-y border-white text-center relative z-10 overflow-hidden">
        <h2 className="text-3xl font-black mb-4 text-slate-900">Valuable Appreciations</h2>
        <p className="text-slate-400 text-sm font-medium max-w-xl mx-auto mb-16 leading-relaxed">
          Hear directly from our patients. Real stories of incredible care and full recoveries at our state-of-the-art facility.
        </p>

        <div className="max-w-[90rem] mx-auto px-4 relative group">
          
          {/* Slider Controls */}
          <button 
            onClick={scrollLeft} 
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 items-center justify-center text-blue-500 z-30 hover:bg-blue-50 hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
          >
             <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight} 
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 items-center justify-center text-blue-500 z-30 hover:bg-blue-50 hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
          >
             <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 pt-8 px-6 md:px-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <div 
                key={i} 
                className="min-w-[100%] md:min-w-[calc(33.333%-1.33rem)] snap-start relative bg-white rounded-[2rem] p-8 pt-10 pb-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] text-left hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-300 mt-4 mb-4"
              >
                {/* The colored flap on top right */}
                <div className="absolute -top-4 right-6 w-32 h-8 bg-blue-600 rounded-t-lg z-0" style={{ clipPath: 'polygon(0% 100%, 15% 0%, 100% 0%, 85% 100%)' }}></div>
                <div className="absolute top-4 right-6 w-5 h-5 bg-blue-800 z-0" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>

                {/* Avatar Circle on the left edge */}
                <div className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500 border-4 border-slate-50 flex items-center justify-center shadow-md z-20 overflow-hidden">
                   <User className="w-8 h-8 text-white" />
                </div>

                <div className="pl-6 relative z-10">
                  <span className="text-4xl font-serif text-blue-200 leading-none absolute -top-4 left-6">"</span>
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-4 pt-4 italic line-clamp-4">
                    {testimonial.text}
                  </p>
                  <h4 className="font-black text-blue-600 text-base mb-0.5">{testimonial.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-wider">{testimonial.type}</p>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 text-blue-400 fill-blue-400" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY GRID / SERVICES */}
      <section id="service" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 text-slate-900">Our Services & Facilities</h2>
          <p className="text-slate-400 text-sm font-medium max-w-xl mx-auto">A glimpse into our state-of-the-art medical environment and the specialized treatments we provide daily.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.length > 0 && galleryImages.map((img, i) => (
            <div key={i} className="aspect-square bg-slate-100 overflow-hidden rounded-xl">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* RECENT BLOG */}
      <section className="py-12 bg-white/40 backdrop-blur-xl border-y border-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-slate-900">Recent Blog</h2>
          <p className="text-slate-400 text-xs font-medium max-w-xl mx-auto mb-12 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-[#0b1021] aspect-[4/3] rounded mb-4 flex items-center justify-center overflow-hidden relative">
                  <HeartPulse className="w-12 h-12 text-blue-500/50" strokeWidth={1} />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>
                <h4 className="font-extrabold text-xs mb-2 text-slate-900">{post.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium mb-3 leading-relaxed">
                  {post.desc} It is a long established fact that a reader will be distracted.
                </p>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SPLIT CARD (Replicating Image 3) */}
      <section id="contact" className="py-24 relative z-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden relative">
          
          {/* Left Side (Blue Info) */}
          <div className="bg-[#4a84f3] text-white p-12 md:w-[45%] flex flex-col justify-center relative z-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-10">Contact Us</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0 opacity-80 mt-1" />
                <span className="text-sm leading-relaxed">{data.address || "32, Avenue de Newyork\n321994 Newyork"}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 shrink-0 opacity-80" />
                <span className="text-sm">{data.email || "hello@loremipsum.com"}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 shrink-0 opacity-80" />
                <span className="text-sm">{data.phone || "+3356 1589 2105"}</span>
              </li>
            </ul>
          </div>

          {/* Right Side (Form) */}
          <div className="bg-slate-50 p-12 md:w-[55%] flex flex-col justify-center relative z-0">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h3>
            <p className="text-sm text-slate-500 mb-8 font-medium">Feel free to drop us a line below!</p>
            
            <form className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm" />
              <input type="email" placeholder="Your Email" className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm" />
              <textarea placeholder="Typing your message here..." rows={4} className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all shadow-sm"></textarea>
              <button type="button" className="bg-[#4a84f3] text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 uppercase mt-2 inline-block w-fit">
                Send
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PREMIUM FOOTER (Replicating Image 4) */}
      <footer className="relative bg-gradient-to-br from-[#1a1b3a] to-[#2d2f5a] text-white pt-32 pb-12 overflow-hidden mt-10">
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-24">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Want to partner with us?</h2>
          <p className="text-white/70 text-sm font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            If you're interested in our partnership and would like to find out some more information, one of our advisors is excited to help.
          </p>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-md font-bold hover:bg-blue-50 transition-colors shadow-xl shadow-black/20 tracking-wider">
            GET IN TOUCH
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Pill className="w-6 h-6 text-white transform -rotate-45" fill="currentColor" />
                <span className="text-2xl font-black tracking-tight text-white uppercase">{data.name}</span>
              </div>
              <p className="text-white/60 text-xs font-medium mt-16">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[11px] mb-6 uppercase tracking-widest text-blue-300">Partnerships</h4>
              <ul className="space-y-4 text-[13px] font-medium text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Websites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[11px] mb-6 uppercase tracking-widest text-blue-300">About</h4>
              <ul className="space-y-4 text-[13px] font-medium text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[11px] mb-6 uppercase tracking-widest text-blue-300">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                  <Facebook className="w-3.5 h-3.5" />
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                  <Twitter className="w-3.5 h-3.5" />
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-white/60 text-xs font-medium mt-12 text-right">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
