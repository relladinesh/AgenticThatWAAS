
import { TemplateProps } from "@/types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Microscope, FileText, ChevronRight, Phone, CheckCircle } from "lucide-react";

export default function DiagnosisTemplate3({ data }: TemplateProps) {
  const heroImage = data.image?.includes('http') ? data.image : "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80";

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#102A43] font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-white border-b border-[#D9E2EC] py-5 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-2xl tracking-tight text-[#0A558C] flex items-center gap-2">
          <Microscope className="w-6 h-6" /> {data.name || "Precision Labs"}
        </div>
        <button className="bg-[#0A558C] hover:bg-[#0B69A3] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-sm">
          Book Test
        </button>
      </nav>

      {/* HERO */}
      <section className="relative bg-white py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-block px-3 py-1 bg-[#E0E8F9] text-[#0A558C] rounded-full text-sm font-bold">
              ISO Certified Laboratory
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#102A43] leading-tight">
              Accurate diagnostics.<br/>
              <span className="text-[#0A558C]">Faster results.</span>
            </h1>
            <p className="text-lg text-[#486581] max-w-lg">
              {data.about || "Advanced pathological and imaging services delivering precise insights for your health and peace of mind."}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#0A558C] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#0A558C]/30 hover:bg-[#0B69A3]">
                View Test Catalog
              </button>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A558C]/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img src={heroImage} alt="Laboratory" className="rounded-3xl shadow-xl w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Core Capabilities</h2>
          <p className="text-[#486581] text-lg">Comprehensive testing utilizing the latest medical technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-10 border border-[#D9E2EC] shadow-sm flex flex-col justify-between group hover:border-[#0A558C] transition-colors">
            <div>
              <Activity className="w-10 h-10 text-[#0A558C] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Clinical Pathology</h3>
              <p className="text-[#486581] max-w-md">Complete blood counts, biochemistry, immunology, and molecular diagnostics performed with extreme precision.</p>
            </div>
          </div>
          <div className="bg-[#0A558C] text-white rounded-2xl p-10 shadow-lg">
            <FileText className="w-10 h-10 text-[#9FB3C8] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Online Reports</h3>
            <p className="text-[#D9E2EC] mb-6">Secure, instant access to your test results online.</p>
            <button className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Login Portal <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#102A43] text-white py-16 px-8 mt-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{data.name || "Precision Labs"}</h3>
            <p className="text-[#9FB3C8] mb-6 max-w-sm">{data.address || "100 Medical Center Drive"}</p>
            <div className="flex items-center gap-3 font-bold">
              <Phone className="w-5 h-5 text-[#334E68]" /> {data.phone || "800-TEST-NOW"}
            </div>
          </div>
          <div className="bg-[#243B53] p-8 rounded-2xl">
            <h4 className="font-bold mb-4">Schedule Home Collection</h4>
            <p className="text-[#9FB3C8] text-sm mb-6">Our phlebotomists can collect samples from the comfort of your home.</p>
            <button className="w-full bg-white text-[#102A43] py-3 rounded-lg font-bold">Request Home Visit</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
