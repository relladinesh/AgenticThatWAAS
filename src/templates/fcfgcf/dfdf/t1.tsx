import React from 'react';
import { Phone, Calendar, Clock, Star, CheckCircle, MapPin, ChevronRight, Activity, Heart } from 'lucide-react';

export default function DentalCare() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800 tracking-tight">Smile<span className="text-blue-600">Care</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Our Team</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Patient Info</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book Online
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 fill-current" /> Top Rated Dental Clinic in New York
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Your Smile is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Top Priority.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience world-class dental care in a relaxing environment. Our expert team uses state-of-the-art technology to ensure your smile stays healthy and beautiful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-lg flex items-center justify-center gap-2">
                  Schedule Appointment <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" /> (555) 123-4567
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy patient" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From routine cleanings to advanced cosmetic procedures, we offer everything you need for a healthy smile under one roof.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'General Dentistry', desc: 'Routine check-ups, cleanings, and preventive care to keep your teeth healthy.', icon: Heart },
              { title: 'Cosmetic Dentistry', desc: 'Teeth whitening, veneers, and smile makeovers for a confident appearance.', icon: Star },
              { title: 'Orthodontics', desc: 'Clear aligners and traditional braces for patients of all ages.', icon: Activity }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.desc}</p>
                <a href="#" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
