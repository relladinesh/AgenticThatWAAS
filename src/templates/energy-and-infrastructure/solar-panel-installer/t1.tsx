
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  BatteryCharging,
  Zap,
  Leaf,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  TrendingDown
} from "lucide-react";
import { TemplateProps } from "@/types";

export default function SolarPanelInstallerT1({ data }: TemplateProps) {
  const businessData = {
    name: data?.title || data?.name || "ANVITECH SMART SOLUTIONS",
    email: data?.email || "contact@anvitech.com",
    phone: data?.phone || "+91 98765 43210",
    address: data?.address || "Warangal, Telangana, India",
    tagline: data?.tagline || "Powering the Future with Intelligent Solar",
    rating: data?.rating || "4.8",
    reviews: data?.reviews || 124,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <nav className="absolute w-full z-50 top-0 left-0 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="bg-[#FF6B35] p-2 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white uppercase tracking-wider">
                {businessData.name.split(" ")[0]}
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-3">
              {["Home", "Services", "Installation", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-1.5 bg-white text-sm font-bold text-slate-800 rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors shadow-sm"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 p-2 bg-white rounded-full shadow-md"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full mt-4"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {["Home", "Services", "Installation", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-bold text-slate-800 hover:text-[#FF6B35] hover:bg-slate-50 rounded-lg"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-52 md:pb-48 overflow-hidden bg-slate-900 min-h-[90vh] flex flex-col justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            alt="Solar Panels on Modern Roof"
            className="object-cover w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001736]/90 via-[#001736]/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-medium text-white leading-[1.15] mb-6"
            >
              Solar energy <br />
              <span className="font-extrabold">For your Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl font-bold text-white mb-10 max-w-2xl"
            >
              Clean energy for a better tomorrow
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#quote"
                className="px-8 py-3.5 bg-white text-slate-900 hover:bg-[#FF6B35] hover:text-white text-sm font-extrabold tracking-wide rounded-full transition-colors flex items-center justify-center w-fit shadow-lg"
              >
                More about us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-relaxed mb-16"
          >
            Solar energy is the power harnessed from the sun's radiation, converted into electricity or heat using technologies like photovoltaic panels and solar thermal systems.
          </motion.h2>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <section className="bg-white pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Installations", value: "20+" },
              { label: "Energy Savings", value: "₹2Cr" },
              { label: "Years Experience", value: "10+" },
              { label: "Client Satisfaction", value: "100%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-[#001736] mb-4">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Switch to Solar?</h2>
            <p className="text-lg text-slate-600">The benefits go far beyond just saving money. It's an investment in your property and the planet.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <TrendingDown className="w-8 h-8 text-amber-500" />,
                title: "Slash Energy Bills",
                desc: "Reduce your monthly electricity costs by up to 90% and protect yourself from rising utility rates."
              },
              {
                icon: <Leaf className="w-8 h-8 text-emerald-500" />,
                title: "Eco-Friendly",
                desc: "Significantly reduce your carbon footprint. Clean energy helps combat climate change."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
                title: "Increase Home Value",
                desc: "Properties with solar installations sell faster and at a premium compared to non-solar homes."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Solar Solutions</h2>
              <p className="text-lg text-slate-600">Comprehensive renewable energy systems tailored for every need.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
                title: "Residential Solar",
                features: ["Custom Roof Design", "Tier-1 Panels", "Net Metering Setup"]
              },
              {
                img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop",
                title: "Commercial Solar",
                features: ["High Capacity Systems", "Tax Benefit Assistance", "Minimal Downtime"]
              },
              {
                img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop",
                title: "Battery Storage",
                features: ["24/7 Backup Power", "Off-grid Capability", "Smart Load Management"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full py-3 bg-slate-900 hover:bg-amber-500 text-white font-bold rounded-xl transition-colors">
                    Explore Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="installation" className="py-32 bg-[#0F172A] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">Installation Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Your Path to Solar</h2>
            <p className="text-lg text-slate-400">Our seamless 4-step installation process ensures a hassle-free transition to renewable energy.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/0 via-amber-500/30 to-amber-500/0 transform -translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {[
                { 
                  step: "01", 
                  title: "Consultation & Audit", 
                  desc: "We conduct a free, comprehensive site analysis and evaluate your current energy usage to determine your exact solar potential.",
                  icon: <Sun className="w-6 h-6 text-amber-500" />
                },
                { 
                  step: "02", 
                  title: "Custom 3D Design", 
                  desc: "Our engineers craft a personalized 3D blueprint that maximizes energy production while seamlessly integrating with your property's aesthetics.",
                  icon: <Zap className="w-6 h-6 text-amber-500" />
                },
                { 
                  step: "03", 
                  title: "Professional Installation", 
                  desc: "Our certified, in-house experts handle the complete installation process, securing all permits and ensuring minimal disruption to your daily life.",
                  icon: <CheckCircle2 className="w-6 h-6 text-amber-500" />
                },
                { 
                  step: "04", 
                  title: "System Activation", 
                  desc: "Once inspections are passed, we throw the switch. Your system goes live, and you instantly start generating clean, free electricity.",
                  icon: <BatteryCharging className="w-6 h-6 text-amber-500" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors shadow-2xl relative overflow-hidden group w-full lg:max-w-[400px]">
                      {/* Interactive Accent Bar */}
                      <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-amber-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`} />
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Node (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#0F172A] border-[3px] border-amber-500 rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <span className="text-white font-extrabold text-lg">{item.step}</span>
                  </div>

                  {/* Empty Side for Spacing (Desktop Only) */}
                  <div className="hidden md:block w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Gen Section */}
      <section id="quote" className="py-24 bg-amber-500 relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Ready to cut your energy bill?</h2>
              <p className="text-lg text-slate-600">Get a free, no-obligation solar estimate customized for your home.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="+91 90000 00000" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Average Monthly Bill (₹)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="e.g. 5000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pin Code</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter Pincode" />
                </div>
              </div>
              <button type="button" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl">
                Get My Free Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="w-8 h-8 text-amber-500" fill="currentColor" />
                <span className="text-2xl font-bold tracking-tight text-white uppercase">
                  {businessData.name}
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Empowering communities with sustainable, intelligent, and cost-effective solar energy solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>{businessData.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span>{businessData.email}</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 hover:text-amber-500 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <span>{businessData.address}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Services", "Process", "Benefits", "Get a Quote"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
