
import { TemplateProps } from "@/types";
import { useState, useEffect, useRef } from "react";
import { 
  Menu, X, ArrowRight, Gem, BadgeCheck, Award, 
  Brush, Leaf, Scissors, Heart, Sparkles, Droplet,
  MapPin, Phone, Mail, Facebook, Instagram, Twitter, 
  ChevronDown, Star, ArrowUpRight 
} from "lucide-react";

const BeautyTemplate2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  const [dynamicImages, setDynamicImages] = useState<string[]>([]);
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Deterministic Hero Image Logic for Cutout Models
    if (data.image?.includes('.png')) {
      setHeroImage(data.image);
    } else {
      const fallbackModels = [
        "/model-1.png",
        "/model-2.png"
      ];
      // Create a simple seed from the business name
      let seed = data.name ? data.name.charCodeAt(0) + data.name.charCodeAt(data.name.length - 1) : 1;
      setHeroImage(fallbackModels[seed % fallbackModels.length]);
    }

    const pool = [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a1faab45778a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop"
    ];

    let seed = data.name ? data.name.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0) : 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    setDynamicImages(pool.sort(() => 0.5 - seededRandom()));
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.name, data.image]);

  const getImg = (fallback: string, index: number) => dynamicImages.length > 0 ? dynamicImages[index % dynamicImages.length] : fallback;

  const SERVICES = [
    { icon: Brush, name: "Makeup Artist" },
    { icon: Leaf, name: "Wellness Center" },
    { icon: Scissors, name: "Barber Salon" },
    { icon: Scissors, name: "Friseur Salon" },
    { icon: Heart, name: "Massage Clinic" },
    { icon: Droplet, name: "Pedicure" },
    { icon: Sparkles, name: "Skin Care" },
    { icon: Gem, name: "Manicure" }
  ];

  const FAQS = [
    { q: "How do I book an appointment?", a: "You can book an appointment directly through our website using the 'Book Appointment' button, or by calling our salon during business hours." },
    { q: "What products do you use?", a: "We use only premium, salon-exclusive products from top global beauty brands to ensure the best results for your skin and hair." },
    { q: "Do you offer bridal packages?", a: "Yes, we offer comprehensive bridal packages that include hair, makeup, and pre-wedding wellness treatments. Please contact us for a consultation." },
    { q: "Is there parking available?", a: "Yes, we provide complimentary parking for all our clients right in front of the salon." }
  ];

  const TESTIMONIALS = [
    { name: "Sonia Styles", role: "Model", text: "The most luxurious salon experience I've ever had. Their attention to detail and premium service is truly unmatched." },
    { name: "Elena Rostova", role: "Regular Client", text: "I've been coming here for a year. The wellness treatments have completely transformed my skin. Highly recommended!" },
    { name: "Clara M.", role: "Bride", text: "They made me look like an absolute princess on my wedding day. The makeup artist was incredibly talented and professional." }
  ];

  return (
    <>
    <div className="min-h-screen bg-white font-sans text-[#333333] selection:bg-[#F54C9A] selection:text-white overflow-x-hidden">
      
      {/* Import Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .hexagon-clip { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
        .hero-wave { clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%); }
      `}} />

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 font-poppins ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white/80 py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-[#F54C9A]" />
              <h1 className="text-2xl font-playfair font-bold text-[#F54C9A] italic">{data.name || "Ladies Salon"}</h1>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-semibold text-[#333333]">
            <a href="#home" className="text-[#F54C9A] hover:text-[#F54C9A] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#F54C9A] transition-colors">About</a>
            <a href="#services" className="hover:text-[#F54C9A] transition-colors">Services</a>
            <a href="#offers" className="hover:text-[#F54C9A] transition-colors">Offers</a>
            <a href="#contact" className="hover:text-[#F54C9A] transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:block">
            <button className="bg-[#F54C9A] text-white px-8 py-3 rounded text-xs font-bold tracking-wider hover:bg-[#d43d83] transition-colors shadow-lg shadow-[#F54C9A]/30 uppercase">
              Request A Quote
            </button>
          </div>

          <button 
            className={`lg:hidden z-50 relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isMenuOpen ? 'bg-white/10 text-white shadow-none' : 'bg-[#FFEAF3] text-[#F54C9A] hover:scale-105'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </header>

      {/* PREMIUM MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-[#1A1A1A] transition-all duration-500 ease-in-out lg:hidden flex flex-col ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F54C9A]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="flex flex-col h-full pt-32 px-10 pb-12 relative z-10">
          <nav className="flex flex-col gap-8">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-[#F54C9A] text-[2.5rem] font-playfair font-bold italic tracking-wide">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#F54C9A] transition-colors text-[2.5rem] font-playfair font-bold tracking-wide">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#F54C9A] transition-colors text-[2.5rem] font-playfair font-bold tracking-wide">Services</a>
            <a href="#offers" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#F54C9A] transition-colors text-[2.5rem] font-playfair font-bold tracking-wide">Offers</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#F54C9A] transition-colors text-[2.5rem] font-playfair font-bold tracking-wide">Contact</a>
          </nav>
          
          <div className="mt-auto border-t border-white/10 pt-8">
            <div className="flex justify-center gap-6 mb-8 text-white/50">
              <Facebook className="w-5 h-5 hover:text-[#F54C9A] transition-colors" />
              <Instagram className="w-5 h-5 hover:text-[#F54C9A] transition-colors" />
              <Twitter className="w-5 h-5 hover:text-[#F54C9A] transition-colors" />
            </div>
            <button className="w-full bg-[#F54C9A] text-white py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#F54C9A] transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION & FEATURE STRIP WRAPPER */}
      <section id="home" className="relative pt-24 lg:pt-32 flex flex-col bg-white overflow-hidden min-h-[90vh]">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-[120%] lg:w-[70%] h-[80%] bg-gradient-to-br from-[#FFEAF3] to-[#FFB6D5]/40" style={{ borderBottomRightRadius: '50% 30%', borderBottomLeftRadius: '10% 10%' }}></div>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F54C9A]" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center">
          
          <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
            {/* Left Content */}
            <div className="font-poppins lg:w-[45%] z-20 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-[2.75rem] md:text-5xl lg:text-[4.5rem] leading-[1.1] font-playfair font-bold text-[#F54C9A] mb-6">
                Always Make Room for a Little Beauty in Your Life
              </h1>
              <p className="text-[#333333] text-sm md:text-[15px] leading-relaxed mb-8 max-w-[420px] mx-auto lg:mx-0 font-medium">
                {data.about || "Lorem ipsum dolor sit amet consectetur. Tempor donec dictum libero mattis magna iaculis justo augue proin."}
              </p>
              <button className="text-[#F54C9A] font-bold text-sm tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 hover:gap-4 transition-all group">
                BOOK APPOINTMENT <ArrowRight className="w-5 h-5 transition-transform" />
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-30">
              <div className="relative w-[90%] md:w-[70%] lg:w-[85%] max-w-[650px] aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <div className="absolute inset-0 bg-[#FFEAF3] opacity-50 z-0"></div>
                <img 
                  src={heroImage} 
                  alt="Beauty Salon" 
                  className="relative z-10 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Feature Strip */}
      <section className="hidden md:block bg-[#F54C9A] py-6 md:py-10 lg:py-14 relative z-20 border-t border-[#F54C9A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 text-center text-white">
            <div className="flex flex-col items-center group">
              <Gem className="hidden md:block w-10 h-10 mb-4 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium text-[15px] md:text-base tracking-wide">Quality Products</h3>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center group">
              <BadgeCheck className="hidden md:block w-10 h-10 mb-4 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium text-[15px] md:text-base tracking-wide">Qualified Personnel</h3>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center group">
              <Award className="hidden md:block w-10 h-10 mb-4 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium text-[15px] md:text-base tracking-wide">High Standards</h3>
            </div>
          </div>
        </div>
      </section>

      {/* HEXAGON SERVICES */}
      <section id="services" className="pt-24 pb-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#F54C9A]"></span>
              <span className="text-[#F54C9A] text-xs font-bold tracking-[0.2em] uppercase">What We Offer</span>
              <span className="w-8 h-[2px] bg-[#F54C9A]"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#333333]">Our Premium Services</h2>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-6">
            {SERVICES.slice(0, 6).map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div key={i} className="w-[140px] h-[160px] sm:w-[160px] sm:h-[185px] lg:w-[180px] lg:h-[200px] relative group cursor-pointer flex-shrink-0">
                  <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full drop-shadow-sm" preserveAspectRatio="none">
                    <polygon 
                      points="50,3 97,27 97,88 50,112 3,88 3,27" 
                      fill="white" 
                      stroke="#F54C9A" 
                      strokeWidth="2.5" 
                      strokeLinejoin="round"
                      className="group-hover:fill-[#FFEAF3] transition-colors duration-300" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pt-6">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#F54C9A] mb-3 stroke-[1.2]" />
                    <span className="text-[12px] sm:text-[14px] font-bold text-[#333333] font-playfair text-center leading-tight px-1 z-10">
                      {srv.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM ABOUT US SECTION */}
      <section id="about" className="py-32 bg-[#FAFAFA] font-poppins overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFEAF3]/30 skew-x-12 translate-x-20 z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Collage */}
            <div className="relative">
              <div className="w-[85%] relative z-10 rounded-t-[10rem] rounded-b-xl overflow-hidden shadow-2xl">
                <img src={getImg("https://images.unsplash.com/photo-1560066984-138dadb4c035", 0)} alt="Salon Interior" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-10 -right-4 w-[55%] z-20 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white">
                <img src={getImg("https://images.unsplash.com/photo-1522337660859-02fbefca4702", 1)} alt="Beauty Treatment" className="w-full aspect-square object-cover" />
              </div>
              <div className="absolute top-20 -left-8 z-30 bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl border border-gray-50 animate-[bounce_10s_infinite]">
                <span className="text-[#F54C9A] text-3xl font-playfair font-black">15+</span>
                <span className="text-[#333333] text-xs font-bold tracking-widest uppercase mt-1">Years</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="pt-10 lg:pt-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-[#F54C9A]"></span>
                <span className="text-[#F54C9A] text-xs font-bold tracking-[0.25em] uppercase">The Art of Beauty</span>
              </div>
              
              <h2 className="text-5xl lg:text-[4rem] font-playfair font-bold text-[#333333] mb-8 leading-[1.15]">
                About <span className="italic font-light text-[#F54C9A]">Us</span>
              </h2>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6 font-medium">
                {data.about || "Step into a world of unparalleled luxury. We believe that true beauty radiates from within, and our mission is to nurture that inner glow through world-class treatments."}
              </p>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                Our master stylists and aesthetic professionals combine timeless techniques with modern innovations, using only the most prestigious products to ensure your experience is nothing short of perfection.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFEAF3] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#F54C9A]" />
                  </div>
                  <div>
                    <h4 className="text-[#333333] font-playfair font-bold text-lg mb-1">Premium Care</h4>
                    <p className="text-xs text-gray-500">Exclusive luxury products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFEAF3] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#F54C9A]" />
                  </div>
                  <div>
                    <h4 className="text-[#333333] font-playfair font-bold text-lg mb-1">Elite Experts</h4>
                    <p className="text-xs text-gray-500">Award-winning stylists.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <button className="bg-[#333333] text-white px-10 py-4 rounded-none text-sm font-bold tracking-widest hover:bg-[#F54C9A] transition-colors uppercase">
                  Discover Our Story
                </button>
                <div className="hidden sm:block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_of_John_Hancock.svg" alt="Signature" className="h-10 opacity-30" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIAL OFFER BANNER */}
      <section id="offers" className="py-20 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${getImg("https://images.unsplash.com/photo-1512496015851-a1faab45778a", 1)})` }}>
        <div className="absolute inset-0 bg-[#F54C9A]/85 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
          <span className="font-poppins text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Limited Time Offer</span>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8">15% OFF <br/> Beauty Package</h2>
          <p className="font-poppins text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Book your complete makeover today and enjoy a premium discount on our signature spa and styling packages.
          </p>
          <button className="bg-white text-[#F54C9A] px-10 py-4 rounded font-poppins font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-xl">
            Book Now
          </button>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#F54C9A] mb-4">Our Gallery</h2>
            <p className="font-poppins text-gray-500">A glimpse into our world of beauty and relaxation.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[2, 3, 4, 5, 6, 7].map((num, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl break-inside-avoid">
                <div className="absolute inset-0 bg-[#F54C9A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <img src={getImg("https://images.unsplash.com/photo-1522337660859-02fbefca4702", num)} alt={`Gallery ${num}`} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#FFEAF3] font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#333333] mb-4">Client Feedback</h2>
            <p className="text-[#F54C9A] font-semibold">What our beautiful clients say about us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(245,76,154,0.05)] relative border-t-4 border-[#F54C9A]">
                <div className="flex text-[#FFB6D5] mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 italic">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFEAF3] flex items-center justify-center text-[#F54C9A] font-bold text-xl">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333]">{test.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CONTACT */}
      <section id="contact" className="py-24 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* FAQ Accordion */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#333333] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full text-left px-6 py-5 bg-gray-50 hover:bg-[#FFEAF3] transition-colors flex justify-between items-center font-semibold text-[#333333]"
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 text-[#F54C9A] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === i && (
                      <div className="px-6 py-5 text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#333333] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#F54C9A] rounded-full blur-[50px] opacity-50"></div>
              
              <h3 className="text-3xl font-playfair font-bold mb-2 relative z-10">Get In Touch</h3>
              <p className="text-gray-400 text-sm mb-8 relative z-10">Leave us a message and we'll get back to you shortly.</p>
              
              <form className="space-y-5 relative z-10" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded px-5 py-4 text-sm focus:outline-none focus:border-[#F54C9A] transition-colors text-white placeholder-gray-400" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded px-5 py-4 text-sm focus:outline-none focus:border-[#F54C9A] transition-colors text-white placeholder-gray-400" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded px-5 py-4 text-sm focus:outline-none focus:border-[#F54C9A] transition-colors text-white placeholder-gray-400" />
                </div>
                <textarea placeholder="Your Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded px-5 py-4 text-sm focus:outline-none focus:border-[#F54C9A] transition-colors text-white placeholder-gray-400 resize-none"></textarea>
                <button className="w-full bg-[#F54C9A] text-white px-8 py-4 rounded text-sm font-bold tracking-wider hover:bg-[#d43d83] transition-colors uppercase mt-2">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#F54C9A]" />
                <h3 className="text-2xl font-playfair font-bold text-[#F54C9A] italic">{data.name || "Ladies Salon"}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium beauty salon offering world-class styling, makeup, and wellness treatments in a luxurious environment.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F54C9A] transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F54C9A] transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F54C9A] transition-colors"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-playfair font-bold mb-6 border-b border-white/10 pb-4 inline-block">Our Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F54C9A] transition-colors">Hair Styling</a></li>
                <li><a href="#" className="hover:text-[#F54C9A] transition-colors">Makeup Artist</a></li>
                <li><a href="#" className="hover:text-[#F54C9A] transition-colors">Massage Therapy</a></li>
                <li><a href="#" className="hover:text-[#F54C9A] transition-colors">Nail Care</a></li>
                <li><a href="#" className="hover:text-[#F54C9A] transition-colors">Bridal Packages</a></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-playfair font-bold mb-6 border-b border-white/10 pb-4 inline-block">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-[#F54C9A] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#F54C9A] transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-[#F54C9A] transition-colors">Gallery</a></li>
                <li><a href="#offers" className="hover:text-[#F54C9A] transition-colors">Special Offers</a></li>
                <li><a href="#contact" className="hover:text-[#F54C9A] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-playfair font-bold mb-6 border-b border-white/10 pb-4 inline-block">Contact Info</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F54C9A] shrink-0" />
                  <span>{data.address || "123 Beauty Blvd, Dubai"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F54C9A] shrink-0" />
                  <span>{data.phone || "+971 50 123 4567"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F54C9A] shrink-0" />
                  <span>{data.email || "hello@ladiessalon.com"}</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} {data.name || "Ladies Salon"}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};
export default BeautyTemplate2;
