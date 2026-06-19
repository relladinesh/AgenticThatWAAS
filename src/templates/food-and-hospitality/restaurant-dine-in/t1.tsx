
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Star, MapPin, Phone, Mail, ArrowRight, Quote, Clock, CalendarDays, Users, Instagram } from "lucide-react";

export default function RestaurantDineInT1({ data }: TemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = data?.name || "Vindhu Kitchen";
  const tagline = data?.tagline || "Authentic flavors. Modern elegance.";
  const about = data?.about || "A celebration of traditional recipes, carefully reimagined for the modern palate. We source only the finest local ingredients to create dishes that tell the story of our rich culinary heritage.";
  const phone = data?.phone || "+91 98765 43210";
  const email = data?.email || "reservations@vindhukitchen.com";
  const address = data?.address || "123 Heritage Lane, Culinary District";

  const signatureDishes = [
    { name: "Saffron Spiced Biryani", desc: "Aromatic basmati, slow-cooked overnight with tender meat", price: "₹850", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
    { name: "Hearth-Baked Breads", desc: "Traditional clay oven breads with infused garlic and herbs", price: "₹250", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop" },
    { name: "Coastal Seafood Curry", desc: "Fresh catch simmered in coconut milk and raw mango", price: "₹950", img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
    { name: "Artisanal Desserts", desc: "Hand-crafted sweets garnished with edible silver and pistachios", price: "₹450", img: "https://images.unsplash.com/photo-1589301760014-d929f39ce9de?q=80&w=800&auto=format&fit=crop" },
    { name: "Fire-Roasted Kebabs", desc: "Succulent bites marinated in secret family spices", price: "₹600", img: "https://images.unsplash.com/photo-1544025162-831e5138f5f6?q=80&w=800&auto=format&fit=crop" },
    { name: "Classic Thali Experience", desc: "A grand platter offering a taste of all our specialties", price: "₹1400", img: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=800&auto=format&fit=crop" }
  ];

  const testimonials = [
    { text: "An absolute masterclass in traditional cooking. The flavors are vibrant, and the ambiance is stunningly elegant.", author: "The Culinary Times" },
    { text: "Vindhu manages to preserve the soul of heritage recipes while presenting them with Michelin-level refinement.", author: "Chef's Weekly" },
    { text: "Every bite tells a story. Easily the best dining experience I've had this year.", author: "Local Food Guide" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C1E16] font-sans selection:bg-[#D45B3E] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="font-serif text-2xl tracking-widest text-[#2C1E16] uppercase">{name.split(" ")[0]}</span>
          </div>

          <div className="hidden md:flex items-center gap-10 font-medium text-[11px] tracking-[0.2em] uppercase text-[#2C1E16]/80">
            <a href="#about" className="hover:text-[#D45B3E] transition-colors">Philosophy</a>
            <a href="#menu" className="hover:text-[#D45B3E] transition-colors">Menus</a>
            <a href="#events" className="hover:text-[#D45B3E] transition-colors">Private Events</a>
            <a href="#press" className="hover:text-[#D45B3E] transition-colors">Press</a>
          </div>

          <div className="hidden md:block">
            <a href="#reservation" className="px-8 py-3 bg-[#2C1E16] text-[#FAF9F6] hover:bg-[#D45B3E] uppercase tracking-[0.15em] text-[10px] font-bold transition-colors duration-300">
              Book a Table
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#2C1E16]">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }} className="md:hidden fixed inset-0 top-[72px] bg-[#FAF9F6] z-40 flex flex-col items-center justify-center space-y-8 border-t border-[#2C1E16]/10">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-[#2C1E16] tracking-widest uppercase">Philosophy</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-[#2C1E16] tracking-widest uppercase">Menus</a>
              <a href="#events" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-[#2C1E16] tracking-widest uppercase">Private Events</a>
              <a href="#press" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-[#2C1E16] tracking-widest uppercase">Press</a>
              <a href="#reservation" onClick={() => setIsMenuOpen(false)} className="mt-8 px-10 py-4 bg-[#2C1E16] text-[#FAF9F6] uppercase tracking-[0.2em] text-xs font-bold">Book a Table</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* SPLIT HERO SECTION */}
      <section className="relative min-h-[90vh] pt-24 lg:pt-0 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-16 lg:pr-20 py-20 lg:py-0 z-10 flex flex-col justify-center h-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <span className="text-[#D45B3E] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Welcome to {name}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C1E16] leading-[1.1] mb-8">
              A Taste of <br />
              <span className="italic font-light">Elegance.</span>
            </h1>
            <p className="text-[#2C1E16]/70 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12">
              {tagline} We invite you to experience a culinary journey that honors heritage and celebrates modern refinement.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#reservation" className="px-8 py-4 bg-[#2C1E16] text-[#FAF9F6] uppercase tracking-[0.15em] text-xs font-bold hover:bg-[#D45B3E] transition-colors duration-300">
                Reserve Now
              </a>
              <a href="#menu" className="flex items-center gap-2 text-[#2C1E16] font-bold uppercase tracking-[0.15em] text-xs hover:text-[#D45B3E] transition-colors group">
                Discover Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden">
          <motion.img 
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Ambience" 
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full relative">
              <img src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1000&auto=format&fit=crop" alt="Chef Preparing Food" className="w-full h-full object-cover" />
            </div>
            {/* Overlapping Badge */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FAF9F6] rounded-full border border-[#2C1E16]/10 flex flex-col items-center justify-center p-4 text-center shadow-lg">
              <Star className="w-6 h-6 text-[#D45B3E] mb-2" />
              <span className="text-[#2C1E16] font-serif font-bold text-sm leading-tight">Award Winning <br/> Cuisine</span>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:col-span-7 lg:pl-16 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C1E16] leading-tight">
              Our Culinary <br /> <span className="italic font-light">Philosophy</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#D45B3E]" />
            <p className="text-[#2C1E16]/70 text-lg font-light leading-relaxed">
              {about} Every plate is thoughtfully curated by our master chefs, ensuring that the legacy of our flavors is preserved while elevating them to contemporary fine-dining standards.
            </p>
            <p className="text-[#2C1E16]/70 text-lg font-light leading-relaxed">
              From the warmth of our hearth-baked breads to the delicate spice blends sourced from artisanal growers, we believe dining should be an immersive, sensory experience.
            </p>
            <div className="pt-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_placeholder.svg" alt="Chef Signature" className="h-12 opacity-80" />
              <p className="text-[#2C1E16] font-bold text-xs uppercase tracking-widest mt-2">Executive Chef</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED MENU GRID */}
      <section id="menu" className="py-32 bg-[#FAF9F6]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-[#D45B3E] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Gastronomy</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C1E16]">A Curated <span className="italic font-light">Menu</span></h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <a href="#" className="border-b border-[#2C1E16] pb-1 text-[#2C1E16] uppercase tracking-widest text-xs font-bold hover:text-[#D45B3E] hover:border-[#D45B3E] transition-colors">
                Download PDF Menu
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {signatureDishes.map((dish, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-serif text-[#2C1E16] mb-2 group-hover:text-[#D45B3E] transition-colors">{dish.name}</h3>
                  <p className="text-[#2C1E16]/60 font-light text-sm mb-4 leading-relaxed line-clamp-2">{dish.desc}</p>
                  <span className="text-[#2C1E16] font-bold tracking-widest">{dish.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS & CATERING */}
      <section id="events" className="py-32 bg-white relative border-y border-[#2C1E16]/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C1E16]">Private Dining <br/> <span className="italic font-light">& Events</span></h2>
            <p className="text-[#2C1E16]/70 text-lg font-light leading-relaxed">
              Host your next milestone with us. Whether it is an intimate corporate gathering, a grand wedding rehearsal, or a private family celebration, our dedicated events team ensures a flawless, tailor-made experience.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4 text-[#2C1E16]/80 font-medium">
                <Users className="w-5 h-5 text-[#D45B3E]" /> Up to 120 Guests Capacity
              </li>
              <li className="flex items-center gap-4 text-[#2C1E16]/80 font-medium">
                <Clock className="w-5 h-5 text-[#D45B3E]" /> Flexible Booking Hours
              </li>
              <li className="flex items-center gap-4 text-[#2C1E16]/80 font-medium">
                <CalendarDays className="w-5 h-5 text-[#D45B3E]" /> Customized Event Menus
              </li>
            </ul>
            <div className="pt-8">
              <a href="#contact" className="px-8 py-4 border border-[#2C1E16] text-[#2C1E16] uppercase tracking-[0.15em] text-xs font-bold hover:bg-[#2C1E16] hover:text-[#FAF9F6] transition-colors duration-300">
                Inquire Now
              </a>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2 h-[500px] lg:h-[700px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop" alt="Long Dining Table" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* PRESS / TESTIMONIALS */}
      <section id="press" className="py-32 bg-[#F5EBE0]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <Quote className="w-12 h-12 text-[#2C1E16]/20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C1E16] italic font-light">"Words from the critics"</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((test, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, delay: i * 0.2 }} variants={fadeUp} className="space-y-6 flex flex-col justify-between">
                <p className="text-[#2C1E16]/80 text-lg leading-relaxed italic font-serif">"{test.text}"</p>
                <div className="text-[#D45B3E] font-bold tracking-[0.2em] uppercase text-xs">— {test.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section id="reservation" className="py-32 bg-[#FAF9F6] relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-10 md:p-16 border border-[#2C1E16]/10 shadow-[0_20px_60px_rgba(44,30,22,0.05)]">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C1E16] mb-4">Book Your Table</h2>
              <p className="text-[#2C1E16]/60 font-light">Experience dining redefined. Please fill out the form below.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] text-[#2C1E16]/50 uppercase tracking-[0.2em] font-bold">Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-[#2C1E16]/20 pb-3 text-[#2C1E16] focus:outline-none focus:border-[#D45B3E] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-[#2C1E16]/50 uppercase tracking-[0.2em] font-bold">Time</label>
                  <select className="w-full bg-transparent border-b border-[#2C1E16]/20 pb-3 text-[#2C1E16] focus:outline-none focus:border-[#D45B3E] transition-colors appearance-none">
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-[#2C1E16]/50 uppercase tracking-[0.2em] font-bold">Party Size</label>
                  <select className="w-full bg-transparent border-b border-[#2C1E16]/20 pb-3 text-[#2C1E16] focus:outline-none focus:border-[#D45B3E] transition-colors appearance-none">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] text-[#2C1E16]/50 uppercase tracking-[0.2em] font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-[#2C1E16]/20 pb-3 text-[#2C1E16] focus:outline-none focus:border-[#D45B3E] transition-colors placeholder:text-[#2C1E16]/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-[#2C1E16]/50 uppercase tracking-[0.2em] font-bold">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent border-b border-[#2C1E16]/20 pb-3 text-[#2C1E16] focus:outline-none focus:border-[#D45B3E] transition-colors placeholder:text-[#2C1E16]/20" />
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                <button className="px-16 py-5 bg-[#2C1E16] text-[#FAF9F6] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#D45B3E] transition-colors duration-300">
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* MARQUEE */}
      <section className="py-12 bg-[#2C1E16] overflow-hidden relative">
        <motion.div 
          className="flex gap-16 w-max items-center font-serif italic text-2xl md:text-4xl text-[#FAF9F6]/40"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Reserve Your Experience</span>
              <Star className="w-6 h-6 text-[#D45B3E]" />
              <span>Taste The Heritage</span>
              <Star className="w-6 h-6 text-[#D45B3E]" />
              <span>Unforgettable Dining</span>
              <Star className="w-6 h-6 text-[#D45B3E]" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* LOCATION & CONTACT */}
      <section id="contact" className="py-32 bg-[#FAF9F6]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C1E16] mb-6">Visit Us</h2>
              <p className="text-[#2C1E16]/70 text-lg font-light leading-relaxed max-w-md">
                Located in the heart of the culinary district, our doors are open to welcome you to an unforgettable dining experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-[#D45B3E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#2C1E16] font-bold tracking-widest text-xs uppercase mb-2">Location</h4>
                  <p className="text-[#2C1E16]/80 font-light leading-relaxed">{address}</p>
                  {data?.googleMapsUrl && (
                    <a href={data.googleMapsUrl} target="_blank" rel="noreferrer" className="inline-block mt-3 text-[#D45B3E] text-xs font-bold uppercase tracking-widest hover:text-[#2C1E16] transition-colors">Get Directions &rarr;</a>
                  )}
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-[#D45B3E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#2C1E16] font-bold tracking-widest text-xs uppercase mb-2">Hours</h4>
                  <ul className="text-[#2C1E16]/80 font-light space-y-1">
                    <li>Lunch: Daily 12:00 PM - 3:00 PM</li>
                    <li>Dinner: Mon-Thu 6:00 PM - 11:00 PM</li>
                    <li>Dinner: Fri-Sun 6:00 PM - 12:00 AM</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-[#D45B3E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#2C1E16] font-bold tracking-widest text-xs uppercase mb-2">Contact</h4>
                  <p className="text-[#2C1E16]/80 font-light">{phone}</p>
                  <p className="text-[#2C1E16]/80 font-light mt-1">{email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full h-[500px] bg-[#F5EBE0] p-4 relative group">
            {/* Elegant Map Container */}
            <div className="w-full h-full overflow-hidden relative shadow-lg">
              {/* Fallback image if map fails to load */}
              <div className="absolute inset-0 bg-[#E8E2D9] flex items-center justify-center -z-10">
                <span className="text-[#2C1E16]/40 uppercase tracking-widest text-xs font-bold">Loading Map...</span>
              </div>
              <iframe 
                src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(name + ', ' + address)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C1E16] text-[#FAF9F6] pt-24 pb-12">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          <div className="md:col-span-6">
            <span className="font-serif text-3xl tracking-widest text-[#FAF9F6] uppercase mb-6 block">{name}</span>
            <p className="text-[#FAF9F6]/60 font-light leading-relaxed mb-8 pr-8 max-w-md">
              A dining destination that honors traditional recipes while embracing modern elegance. Come taste the heritage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-[#FAF9F6]/20 hover:bg-[#D45B3E] hover:border-[#D45B3E] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 border border-[#FAF9F6]/20 hover:bg-[#D45B3E] hover:border-[#D45B3E] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col md:flex-row gap-16 md:justify-end">
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-[#FAF9F6] uppercase mb-6">Explore</h4>
              <ul className="space-y-4 text-[#FAF9F6]/60 font-light">
                <li><a href="#about" className="hover:text-[#D45B3E] transition-colors">Philosophy</a></li>
                <li><a href="#menu" className="hover:text-[#D45B3E] transition-colors">The Menu</a></li>
                <li><a href="#events" className="hover:text-[#D45B3E] transition-colors">Private Events</a></li>
                <li><a href="#press" className="hover:text-[#D45B3E] transition-colors">Press & Accolades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-[#FAF9F6] uppercase mb-6">Reservations</h4>
              <ul className="space-y-4 text-[#FAF9F6]/60 font-light">
                <li><a href="#reservation" className="hover:text-[#D45B3E] transition-colors">Book a Table</a></li>
                <li><a href="#contact" className="hover:text-[#D45B3E] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#D45B3E] transition-colors">Gift Cards</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 border-t border-[#FAF9F6]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#FAF9F6]/40 text-[10px] tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D45B3E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D45B3E] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
