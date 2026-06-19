
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  BarChart3,
  BatteryCharging,
  Zap,
  CheckCircle2
} from "lucide-react";
import { TemplateProps } from "@/types";

export default function SolarPanelInstallerT2({ data }: TemplateProps) {
  const businessData = {
    name: data?.title || data?.name || "ANVITECH SMART SOLUTIONS",
    email: data?.email || "contact@anvitech.com",
    phone: data?.phone || "+91 98765 43210",
    address: data?.address || "Warangal, Telangana, India",
    tagline: data?.tagline || "Power your business with solar energy",
    rating: data?.rating || "4.8",
    reviews: data?.reviews || 124,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordions = [
    { title: "Energy & Site Audit", content: "We dive deep into your energy usage, roof structure, and sunlight exposure to uncover the full solar potential of your property." },
    { title: "Precision System Design", content: "Our engineers create a custom blueprint maximizing energy output while ensuring seamless integration with your existing infrastructure." },
    { title: "Professional Installation", content: "Certified technicians handle the entire installation process with minimal disruption to your daily operations." },
    { title: "Performance & Optimization", content: "We provide 24/7 monitoring and regular maintenance to ensure your system operates at peak efficiency." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FF5A36] selection:text-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-4 mb-16 md:mb-24">
        <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 min-h-[600px] md:min-h-[750px] flex items-center">
          
          {/* Navigation Overlay */}
          <nav className="absolute w-full z-50 top-0 left-0 pt-6 px-4 md:px-8">
            <div className="flex justify-between items-center h-16 bg-white/10 backdrop-blur-md rounded-full px-6 border border-white/20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <Sun className="w-6 h-6 text-white" />
                <span className="text-xl font-bold tracking-tight text-white uppercase">
                  {businessData.name.split(" ")[0]}
                </span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {["Home", "About", "Installation", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="hidden md:block">
                <a
                  href="#quote"
                  className="px-6 py-2.5 bg-[#FF5A36] hover:bg-[#e04b2a] text-white text-sm font-semibold rounded-full transition-colors"
                >
                  Get a quote
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white mt-2 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="px-4 py-4 space-y-1">
                    {["Home", "About", "Installation", "Projects", "Contact"].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#FF5A36] rounded-xl"
                      >
                        {item}
                      </a>
                    ))}
                    <div className="pt-4 px-4 pb-2">
                      <a
                        href="#quote"
                        className="block w-full text-center px-6 py-3 bg-[#FF5A36] text-white font-semibold rounded-xl"
                      >
                        Get a quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                alt="Industrial Solar Installation"
                className="object-cover w-full h-full object-center opacity-80"
              />
            </motion.div>
            {/* Gradient Overlay left-to-right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-8 md:px-16 flex justify-between items-end h-full py-16 md:py-24">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-medium text-white leading-[1.1] mb-6 tracking-tight"
              >
                Power your <br />
                business with <br />
                solar energy
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed font-medium"
              >
                We design and install large-scale solar systems for office buildings, warehouses, retail centers, and industrial facilities built to last, engineered to perform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#quote"
                  className="inline-block px-8 py-3.5 bg-[#FF5A36] text-white text-sm font-semibold rounded-lg shadow-[0_0_20px_rgba(255,90,54,0.3)] hover:shadow-[0_0_30px_rgba(255,90,54,0.5)] transition-shadow"
                >
                  Request a free audit
                </motion.a>
              </motion.div>
            </div>

            {/* Floating Project Card (Hidden on mobile) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex bg-white rounded-2xl p-4 shadow-2xl max-w-sm gap-4 items-center mb-8 mr-8"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                  alt="GreenLogix Hub"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 mb-1">GreenLogix Hub</h4>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">Optimized rooftop solar system for a high-demand logistics hub.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 underline cursor-pointer hover:text-[#FF5A36] transition-colors">See Project</span>
                  <span className="text-xs font-bold text-slate-400">01/03</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-l border-slate-100 pl-4">
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors"><ArrowRight className="w-4 h-4 text-slate-400 rotate-180" /></button>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors"><ArrowRight className="w-4 h-4 text-slate-900" /></button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Bento Grid */}
      <motion.section 
        id="about" 
        className="py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-sm font-bold text-slate-900 mb-4">Who we are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-sm">
                Built for business-scale solar
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                <span className="font-bold text-slate-900">{businessData.name.split(" ")[0]} specializes exclusively in commercial and industrial solar not residential.</span> Every system we design is sized for the real energy demands of operating businesses, from 100kW rooftop arrays to multi-MW ground-mount installations.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-[350px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Card 1 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#E5EEF2] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start z-10">
                <div className="bg-white p-2 rounded-lg shadow-sm"><Sun className="w-5 h-5 text-slate-700" /></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Solar Installation</span>
              </div>
              <div className="mt-auto z-10 flex flex-col items-center">
                <div className="relative w-full h-32 mb-4">
                   <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Panel" className="object-cover w-full h-full rounded-xl" />
                </div>
                <div className="text-4xl font-bold text-slate-900 self-start">5,200<span className="text-sm text-slate-500 font-medium"> kWh/day</span></div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#FF5A36] rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-start z-10">
                <div>
                  <h3 className="font-medium text-sm mb-1 text-white/90">System</h3>
                  <h3 className="font-medium text-sm text-white/90">Efficiency</h3>
                </div>
                <div className="bg-white/20 p-2 rounded-full"><Zap className="w-4 h-4 text-white" /></div>
              </div>
              <div className="mt-8 z-10">
                <p className="text-xs text-white/80 mb-2">Of rated output</p>
                <div className="text-5xl font-bold">97.4%</div>
              </div>
            </motion.div>

            {/* Card 3 (Image) */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rounded-3xl overflow-hidden relative group h-64 md:h-auto shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                alt="Solar Panel Wiring"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#E5EEF2] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start z-10">
                <div className="bg-white p-2 rounded-full shadow-sm"><BatteryCharging className="w-4 h-4 text-slate-700" /></div>
              </div>
              <div className="mt-8 z-10">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-bold">Commercial Installations</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">Up to 68%<br/>energy savings.</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Grid Export</p>
                    <p className="text-sm font-bold text-slate-900">Active</p>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">42.3<span className="text-xs text-slate-500">kw</span></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section 
        id="installation" 
        className="py-24 bg-white border-t border-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#FF5A36] uppercase tracking-wider mb-4">Installation Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6 max-w-sm">
                How We Will Install Your Solar System
              </h2>
              <p className="text-sm text-slate-500 mb-12 max-w-sm leading-relaxed">
                A streamlined, end-to-end process designed to minimize downtime, maximize efficiency, and deliver long-term energy performance for your business.
              </p>

              <div className="space-y-2">
                {accordions.map((item, index) => (
                  <div 
                    key={index} 
                    className={`border-b border-slate-200 py-4 ${activeAccordion === index ? '' : 'cursor-pointer'}`}
                    onClick={() => setActiveAccordion(index)}
                  >
                    <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                        <h3 className={`text-sm font-bold transition-colors ${activeAccordion === index ? 'text-slate-900' : 'text-slate-900 group-hover:text-[#FF5A36]'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeAccordion === index ? 'rotate-180 text-slate-900' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-slate-500 mt-4 pl-10 pr-4 leading-relaxed">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
                alt="Solar Engineer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0A0F16] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <p className="text-xs font-bold text-slate-400 mb-4">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Real Projects.<br/>Measurable Impact.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Explore how we've helped businesses across industries reduce energy costs, minimize carbon footprints, and transition to clean, reliable solar power.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="relative h-56 m-2 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                  alt="Retail Center"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-6 py-5 relative z-10 text-white flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-bold text-[#FF5A36] mb-1">Retail Center</p>
                  <h3 className="text-sm font-bold">Sunmart Shopping Plaza</h3>
                </div>
              </div>
            </motion.div>

            {/* Project 2 (Highlight) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-[#FF5A36] relative cursor-pointer shadow-2xl shadow-[#FF5A36]/20"
            >
              <div className="relative h-48 m-2 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                  alt="Corporate Tower"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full">
                  <ArrowRight className="w-4 h-4 text-[#FF5A36] -rotate-45" />
                </div>
              </div>
              <div className="px-6 py-4 bg-[#FF5A36] relative z-10 text-white">
                <p className="text-[10px] font-bold text-white/80 mb-1">Office Building</p>
                <h3 className="text-sm font-bold mb-2">Skyline Corporate Tower</h3>
                <p className="text-[10px] text-white/90 leading-relaxed group-hover:opacity-100 transition-opacity">Premium optimized rooftop array for a multi-tenant corporate office.</p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="relative h-56 m-2 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
                  alt="Manufacturing Plant"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-6 py-5 relative z-10 text-white flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-bold text-[#FF5A36] mb-1">Manufacturing</p>
                  <h3 className="text-sm font-bold">EcoSteel Factory</h3>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-full transition-colors shadow-lg"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-sm">
                Driving Measurable Impact Through Clean Energy
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                See how our solar solutions are transforming businesses—reducing costs, minimizing carbon footprints, and creating a sustainable future.
              </p>
            </div>
          </motion.div>

          <div className="space-y-0">
            {/* Impact Item 1 */}
            <div className="py-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-1 text-xs font-bold text-slate-400">01/</div>
              <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-[10px] font-bold text-slate-500 mb-2">Cost Efficiency</p>
                <h3 className="text-xl font-bold text-slate-900">Lower Operational Expenses</h3>
              </div>
              <div className="md:col-span-3 flex justify-center md:justify-end">
                <button className="px-5 py-2 border border-slate-200 rounded-full text-xs font-bold hover:bg-slate-50 transition-colors">Learn More</button>
              </div>
            </div>

            {/* Impact Item 2 (Expanded) */}
            <div className="py-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 text-xs font-bold text-slate-400">02/</div>
              <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-[10px] font-bold text-slate-500 mb-2">Sustainability</p>
                <h3 className="text-xl font-bold text-slate-900 mb-8">Reduce Carbon Footprint</h3>
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end w-full">
                  <div className="relative w-full sm:w-40 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Solar Farm" className="object-cover w-full h-full" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">4,000+</div>
                    <p className="text-[10px] text-slate-500 max-w-xs leading-relaxed">Tons of CO2 Reduced Annually. Switching to solar energy helps your business actively contribute to a cleaner, greener environment.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 flex justify-center md:justify-end">
                <button className="px-5 py-2 bg-[#FF5A36] text-white rounded-full text-xs font-bold hover:bg-[#e04b2a] transition-colors">Learn More</button>
              </div>
            </div>

            {/* Impact Item 3 */}
            <div className="py-8 border-t border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-1 text-xs font-bold text-slate-400">03/</div>
              <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-[10px] font-bold text-slate-500 mb-2">Property Value</p>
                <h3 className="text-xl font-bold text-slate-900">Increase Property Value</h3>
              </div>
              <div className="md:col-span-3 flex justify-center md:justify-end">
                <button className="px-5 py-2 border border-slate-200 rounded-full text-xs font-bold hover:bg-slate-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote / Lead Gen Form */}
      <section id="quote" className="py-24 bg-[#E5EEF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request a Free Audit</h2>
              <p className="text-slate-500">Provide your details below and our energy consultants will get in touch.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A36] focus:border-[#FF5A36] outline-none transition-all" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A36] focus:border-[#FF5A36] outline-none transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A36] focus:border-[#FF5A36] outline-none transition-all" placeholder="contact@company.com" />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="button" 
                className="w-full py-4 bg-[#FF5A36] text-white text-base font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(255,90,54,0.3)] hover:shadow-[0_8px_30px_rgba(255,90,54,0.4)]"
              >
                Get My Free Estimate
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0A0F16] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="w-8 h-8 text-[#FF5A36]" />
                <span className="text-2xl font-bold tracking-tight text-white uppercase">
                  {businessData.name.split(" ")[0]}
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 text-lg">
                Engineered for performance. Built for the future.
              </p>
              <h3 className="text-3xl font-bold text-white mb-2">{businessData.phone}</h3>
              <p className="text-slate-400">{businessData.email}</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Our Projects</a></li>
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Commercial Solar</a></li>
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Industrial Solar</a></li>
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Battery Storage</a></li>
                <li><a href="#" className="hover:text-[#FF5A36] transition-colors">Maintenance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
