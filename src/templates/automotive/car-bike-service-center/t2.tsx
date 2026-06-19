
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, MapPin, Calendar, Search, 
  ChevronDown, Star, ChevronRight,
  Shield, Wrench, Settings, ChevronUp
} from "lucide-react";

const CarBikeServiceT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("car");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState("booking");

  const name = data?.name || "Drivee Service";
  
  // FAQs
  const faqs = [
    { q: "How can I book a service appointment?", a: "You can book easily through our website by selecting your vehicle type and preferred date." },
    { q: "Am I responsible for fuel during pickup?", a: "If you opt for our pick-up and drop service, we will take care of the transit fuel within a 5km radius." },
    { q: "Can I cancel my appointment?", a: "Yes, you can cancel or reschedule up to 24 hours before your appointment time without any charges." },
    { q: "How do I apply a promo code?", a: "You can enter your promo code during the checkout process before confirming the booking." }
  ];

  // Reviews
  const reviews = [
    { name: "Jovan Reels", title: "Excellent Service!", img: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=400&q=80", text: "I have been using their service center for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful." },
    { name: "Kanesha Kayton", title: "Trustworthy & Reliable", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", text: "Endorsed by industry experts, they are the car service solution you can trust. With years of experience in the field, we provide fast, reliable, and secure maintenance." },
    { name: "Michael Chen", title: "Fast Turnaround", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", text: "Dropped my bike off for a major service and it was ready the next day. The pricing was transparent and the mechanics really know what they are doing." }
  ];

  // Locations
  const locations = [
    { name: "Downtown", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=300&q=80" },
    { name: "North Hills", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300&q=80" },
    { name: "Westside", img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=300&q=80" },
    { name: "South Park", img: "https://images.unsplash.com/photo-1444723121698-e65a3d0900f4?w=300&q=80" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
    <div className="min-h-screen bg-white text-[#111] font-sans selection:bg-[#111] selection:text-white">
      
      {/* DARK HERO SECTION */}
      <section className="relative bg-[#0A0A0A] text-white pt-6 pb-48 overflow-hidden rounded-b-[2.5rem]">
        {/* Background abstract lines */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,200 Q250,300 500,100 T1000,200" fill="none" stroke="#00FF88" strokeWidth="2" />
            <path d="M0,400 Q300,500 600,200 T1000,400" fill="none" stroke="#00FF88" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="800" cy="150" r="10" fill="#00FF88" />
            <circle cx="800" cy="150" r="20" fill="none" stroke="#00FF88" strokeWidth="1" />
          </svg>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">{name}</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="flex items-center gap-1 hover:text-white">Hosting <ChevronDown className="w-4 h-4" /></a>
            <a href="#about" className="hover:text-white">Contact Us</a>
            <a href="#" className="flex items-center gap-1 hover:text-white">Account <ChevronDown className="w-4 h-4" /></a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 text-sm font-medium border border-gray-600 rounded-lg hover:border-white transition-colors">Sign In</button>
            <button className="px-5 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Sign Up</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 mt-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="max-w-xl">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
              Unlock Endless Driving With {name.split(' ')[0]}
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              To contribute to positive change and achieve our sustainability goals with many extraordinary maintenance solutions.
            </motion.p>
            
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="flex gap-4">
              <button 
                onClick={() => setActiveTab("car")}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${activeTab === 'car' ? 'bg-white text-black' : 'border border-gray-600 text-white hover:border-white'}`}
              >
                Service Car
              </button>
              <button 
                onClick={() => setActiveTab("bike")}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${activeTab === 'bike' ? 'bg-white text-black' : 'border border-gray-600 text-white hover:border-white'}`}
              >
                Service Bike
              </button>
            </motion.div>
          </div>

          {/* Vehicles Image Composition */}
          <div className="relative hidden lg:block">
            {/* We'll use absolute positioning to compose a car and bike like the reference */}
            <motion.img 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop" 
              alt="Luxury Car" 
              className="absolute top-0 right-10 w-[120%] max-w-[600px] object-cover rounded-xl shadow-2xl brightness-75"
              style={{ mixBlendMode: 'lighten' }}
            />
            {/* A transparent background car/bike would be ideal here. Using high quality images. */}
          </div>
        </div>
      </section>

      {/* FLOATING SEARCH/BOOKING BAR */}
      <div className="max-w-5xl mx-auto px-6 relative z-30 -mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-gray-100">
          
          <div className="w-full md:flex-1 border-r border-gray-100 pr-4">
            <label className="block text-sm font-bold mb-2">Location</label>
            <div className="flex items-center justify-between text-gray-500 cursor-pointer hover:text-black">
              <span className="text-sm">Select Location</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          
          <div className="w-full md:flex-1 border-r border-gray-100 px-4">
            <label className="block text-sm font-bold mb-2">Service Type</label>
            <div className="flex items-center justify-between text-gray-500 cursor-pointer hover:text-black">
              <span className="text-sm">Select Service</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="w-full md:flex-1 px-4">
            <label className="block text-sm font-bold mb-2">Date</label>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">10/9/2026 - 14/9/2026</span>
            </div>
          </div>

          <button className="w-full md:w-auto px-8 py-4 bg-[#111] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg">
            Search Now
          </button>
        </motion.div>
      </div>

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customer Saying...</h2>
          <div className="hidden md:flex gap-16 text-center">
            <div>
              <div className="text-2xl font-bold">45K+</div>
              <div className="text-sm text-gray-500">Success Tour</div>
            </div>
            <div>
              <div className="text-2xl font-bold">1M+</div>
              <div className="text-sm text-gray-500">Happy Customer</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-gray-500">Year Experience</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer">
              <img src={rev.img} alt={rev.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="text-[#00FF88] font-semibold text-sm mb-2">{rev.title}</div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-4">{rev.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-white/50"></div>
                  <span className="text-sm font-medium">{rev.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCAL SERVICE WE PROVIDE */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Faded World Map Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

          <div className="flex justify-between items-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold">Local Service We Provide</h2>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar w-full">
              {locations.map((loc, i) => (
                <div key={i} className="flex flex-col items-center gap-4 min-w-[120px] group cursor-pointer">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#111] transition-colors duration-300">
                    <img src={loc.img} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">{loc.name}</span>
                </div>
              ))}
            </div>
            <button className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg shrink-0 border border-gray-100 hover:bg-gray-50">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Have Any Question</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['General', 'Security', 'Booking', 'Payment', 'Others'].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFaqCategory(cat.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFaqCategory === cat.toLowerCase() ? 'bg-[#111] text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-sm md:text-base"
              >
                {faq.q}
                {activeFaq === i ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-5 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* RENT A CAR / SERVICE CAR */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Service A Car</h2>
            <div className="flex gap-3 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-xs font-bold rounded uppercase tracking-wider text-gray-500">Luxury</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-bold rounded uppercase tracking-wider text-gray-500">Comfort</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-bold rounded uppercase tracking-wider text-gray-500">Prestige</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Booking a service with us is simple and easy. You can browse our selection of maintenance packages online, choose the one that best fits your needs, and book it for the duration of your choice. Our user-friendly platform allows you to manage your bookings and view your vehicle's service history with ease.
            </p>
            <button className="px-8 py-3 bg-[#111] text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Book Service
            </button>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-gray-100 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" alt="Happy Customer in Car" className="w-full rounded-3xl object-cover shadow-xl aspect-[4/3]" />
          </div>
        </div>

        {/* RENT A BIKE / SERVICE BIKE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gray-100 -translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80" alt="Motorcycle Service" className="w-full rounded-3xl object-cover shadow-xl aspect-[4/3]" />
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Service A Bike</h2>
            <div className="flex gap-3 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-xs font-bold rounded uppercase tracking-wider text-gray-500">Sport</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-bold rounded uppercase tracking-wider text-gray-500">Cruiser</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-bold rounded uppercase tracking-wider text-gray-500">Off-Road</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Keeping your two-wheeler in top condition is our priority. From oil changes to complete engine overhauls, our specialized technicians ensure your bike performs at its peak. Book your slot online and experience hassle-free maintenance.
            </p>
            <button className="px-8 py-3 bg-white border-2 border-[#111] text-[#111] rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Book Service
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 rounded-t-[2.5rem] mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold tracking-tight mb-6">{name}</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering your journey with top-tier automotive maintenance and unparalleled customer service.
            </p>
            <button className="text-sm font-medium border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">Take Control</button>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">About Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">• About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Fee Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Terms And Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">City</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">• Dhaka</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Chittagong</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Sylhet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Khulna</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Barishal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Rajshahi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Rangpur</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Vehicle Types</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">• Car</a></li>
              <li><a href="#" className="hover:text-white transition-colors">• Bike</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
        </div>
      </footer>
    </div>
    </>
  );
};
export default CarBikeServiceT2;
