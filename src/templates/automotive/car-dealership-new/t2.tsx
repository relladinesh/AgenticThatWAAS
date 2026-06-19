
import { TemplateProps } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, CheckCircle2 } from "lucide-react";

const CarDealershipT2 = ({ data }: TemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const name = data?.name || "CAR BAZAR";

  const fleet = [
    { name: "Honda Civic Sport", price: "$35", img: "https://images.unsplash.com/photo-1606016159991-d85c8f2b7d51?w=400&q=80" },
    { name: "Honda Civic LX", price: "$32", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80" },
    { name: "Honda Civic Sport", price: "$35", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80" },
    { name: "Honda Civic Sport", price: "$35", img: "https://images.unsplash.com/photo-1606016159991-d85c8f2b7d51?w=400&q=80" },
    { name: "Honda Civic LX", price: "$32", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80" },
    { name: "Honda Civic LX", price: "$32", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FF5A00] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold uppercase tracking-tight">
            {name}
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Home</a>
            <a href="#" className="hover:text-[#FF5A00] transition-colors">About</a>
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Service</a>
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Course</a>
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4 text-sm font-bold">
            <button className="hover:text-[#FF5A00] transition-colors">SIGN UP</button>
            <button className="bg-[#FF5A00] text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
              SIGN IN
            </button>
          </div>

          <button className="lg:hidden relative z-50 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 lg:hidden z-40 border-t border-gray-100"
          >
            <a href="#" className="font-bold text-lg hover:text-[#FF5A00] transition-colors">Home</a>
            <a href="#" className="font-bold text-lg hover:text-[#FF5A00] transition-colors">About</a>
            <a href="#" className="font-bold text-lg hover:text-[#FF5A00] transition-colors">Service</a>
            <a href="#" className="font-bold text-lg hover:text-[#FF5A00] transition-colors">Course</a>
            <a href="#" className="font-bold text-lg hover:text-[#FF5A00] transition-colors">Contact</a>
            <hr className="border-gray-100 my-2" />
            <div className="flex flex-col gap-3">
              <button className="font-bold text-center py-2 hover:text-[#FF5A00] transition-colors">SIGN UP</button>
              <button className="bg-[#FF5A00] text-white px-6 py-3 rounded-md font-bold hover:bg-orange-700 transition-colors w-full">
                SIGN IN
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#FFF0E5] to-white flex flex-col items-center justify-center">
        {/* Background "CAR" text */}
        <div className="absolute top-[15%] md:top-[20%] left-1/2 -translate-x-1/2 text-[40vw] md:text-[25vw] font-black text-[#FF5A00]/5 leading-none select-none pointer-events-none z-0">
          CAR
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-10 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 md:mb-8"
          >
            Experience the smooth<br />drives of <span className="text-[#FF5A00]">premium rentals</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] md:h-[500px] flex items-center justify-center mb-8"
        >
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1000&q=80" 
            alt="Premium SUV" 
            className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 flex flex-col items-center px-4 text-center"
        >
          <button className="bg-[#FF5A00] text-white px-8 py-4 md:py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition-all hover:scale-105 mb-4 text-sm md:text-base w-full md:w-auto">
            SEE ALL FLEET
          </button>
          <p className="text-xs md:text-sm font-medium text-gray-600">Weekend Getaway: Rent for 3 days and get 1 day free!</p>
        </motion.div>
      </section>

      {/* KEYS TO FREEDOM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Keys to freedom,<br />wheels to adventure.
            </h2>
            <ul className="space-y-4">
              {['Flexible Booking Options.', 'Luxury and Comfort.', '24/7 Roadside Assistance.', 'Affordable Pricing.', 'Loyalty Rewards Program.', 'One-Way Rentals.'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  {i === 1 ? (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-md">
              Discover the freedom to travel on your terms with our reliable and affordable car rental services. Whether you are exploring the city, we offer a wide range of vehicles to suit your needs.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" 
              alt="Luxury Car" 
              className="w-full object-contain mix-blend-multiply drop-shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* OUR IMPRESSIVE FLEET */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">THE CARS</h4>
            <h2 className="text-3xl font-bold">Our Impressive Fleet</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fleet.map((car, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-32 w-full flex items-center justify-center mb-6">
                  <img src={car.img} alt={car.name} className="max-h-full object-contain mix-blend-multiply" />
                </div>
                <div className="w-full flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{car.name}</h3>
                    <div className="text-xs font-bold text-gray-400">{car.price}/day</div>
                  </div>
                  <button className="text-[10px] font-bold text-[#FF5A00] border border-[#FF5A00] px-3 py-1 rounded hover:bg-[#FF5A00] hover:text-white transition-colors">
                    Rent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose<br/>{name}?</h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-md">
              Lorem ipsum is Placeholder Or "Dummy" Text Used In Graphic Design, Web Design, And Printing To Fill Space And Preview Layouts Before The Final Content Is Added. Derived From Cicero's 1st-Century BC Latin Text, It Is Intentionally Scrambled To Be Nonsensical, Allowing Viewers To Focus On Visual Design Elements Like Fonts And Layout.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80" 
              alt="Orange Sports Car" 
              className="w-full object-contain drop-shadow-[0_30px_30px_rgba(255,90,0,0.2)] mix-blend-multiply" 
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#FAFAFA] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">WHAT OUR CUSTOMERS SAY</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
            "My {name} experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable. I'll be back for more."
          </p>
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" 
              alt="Sarah Johnson" 
              className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-white shadow-md" 
            />
            <div className="font-bold">Sarah Johnson</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#211A1D] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Subscribe and get exclusive<br/>deals & offers</h2>
          <div className="flex max-w-md mx-auto mb-12">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-[#FF5A00] px-6 py-3 rounded-r-md font-bold hover:bg-orange-700 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="border-t border-white/10 pt-8 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default CarDealershipT2;
