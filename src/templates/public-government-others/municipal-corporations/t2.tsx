
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TemplateProps } from "@/types";
import { 
  Menu, X, Search, ArrowUpRight, 
  Settings, Shield, Zap, FileCode, Landmark,
  Activity, Database, Terminal, AlertTriangle, ChevronRight
} from "lucide-react";

export default function MunicipalCorpT2({ data }: TemplateProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cityData = {
    name: data?.title || data?.name || "Civic Systems",
    tagline: data?.tagline || "Modern municipal infrastructure, simplified for everyone.",
    phone: data?.phone || "311 Local",
  };

  const navLinks = ["Services", "Infrastructure", "Permits", "Council", "Security"];

  const coreSystems = [
    { icon: Shield, title: "Public Safety", id: "PS-01", status: "Active" },
    { icon: Zap, title: "Grid & Utilities", id: "GU-02", status: "Optimal" },
    { icon: Settings, title: "Public Works", id: "PW-03", status: "Maintenance" },
    { icon: FileCode, title: "Digital Identity", id: "DI-04", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-sans selection:bg-[#E5E7EB] selection:text-[#111827] overflow-x-clip">
      
      {/* Utility System Bar - Minimal */}
      <div className="w-full bg-white border-b border-[#F3F4F6] py-2 px-6 flex justify-between items-center text-[11px] font-medium text-[#6B7280]">
        <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-[#10B981]" /> System Status: Optimal</span>
        <span>Secure Gateway v4.2</span>
      </div>

      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#F3F4F6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center">
              <Landmark className="w-4 h-4 text-white" />
            </div>
            <div className="font-semibold text-xl tracking-tight">
              {cityData.name}
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button suppressHydrationWarning className="hidden sm:flex items-center justify-center text-[#4B5563] hover:text-[#111827] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button suppressHydrationWarning className="hidden sm:block bg-[#111827] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#374151] hover:shadow-md transition-all">
              Access Portal
            </button>
            <button suppressHydrationWarning className="lg:hidden text-[#111827]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 inset-x-0 bg-white border-b border-[#F3F4F6] p-6 z-40"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-light tracking-tight text-[#111827]">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Minimal Split Hero */}
      <section className="relative w-full border-b border-[#F3F4F6] bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 min-h-[75vh]">
          
          <div className="p-6 lg:p-12 xl:pr-24 flex flex-col justify-center relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] rounded-full text-[11px] font-semibold text-[#4B5563] mb-8">
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                Version 4.0 Live
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-medium tracking-tighter leading-[1.05] mb-8 text-[#111827]">
                Run the <br/> City.
              </h1>
              
              <p className="text-lg text-[#6B7280] font-light max-w-md leading-relaxed mb-10">
                {cityData.tagline} Access essential services, apply for zoning permits, and monitor civic data in real-time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button suppressHydrationWarning className="bg-[#111827] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#374151] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Pay Taxes <ArrowUpRight className="w-4 h-4" />
                </button>
                <button suppressHydrationWarning className="bg-white border border-[#E5E7EB] text-[#111827] px-8 py-3.5 rounded-full text-sm font-medium hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-all">
                  Directory
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[50vh] lg:min-h-full p-6 lg:py-12 lg:pr-12">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#F3F4F6]">
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop" 
                alt="City Infrastructure Data" 
                fill 
                className="object-cover opacity-90" 
                priority
              />
              
              {/* Soft Glass Overlay Card */}
              <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1">Active Projects</p>
                <p className="text-3xl font-light text-[#111827]">1,204</p>
                <div className="mt-4 w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3B82F6] w-[68%] rounded-full"></div>
                </div>
                <p className="text-[10px] font-medium text-right mt-2 text-[#4B5563]">68% Executed</p>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl max-w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280]">Traffic Grid</p>
                </div>
                <p className="text-xs font-medium leading-relaxed text-[#4B5563]">North corridor congestion detected. Re-routing recommended.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Soft Fading System Logs Marquee */}
      <div className="bg-[#FAFAFA] border-b border-[#F3F4F6] py-4 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-12 items-center text-[11px] font-medium text-[#9CA3AF] whitespace-nowrap w-max"
        >
          <span>[LOG] Water treatment facility #04 nominal.</span>
          <span className="text-[#F59E0B]">[ALERT] Substation B maintenance scheduled.</span>
          <span>[DATA] 14,203 active civic connections.</span>
          <span>[LOG] Budget Q3 finalized.</span>
          <span>[SYS] Firewall updated to v12.4.</span>
          <span>[LOG] Water treatment facility #04 nominal.</span>
          <span className="text-[#F59E0B]">[ALERT] Substation B maintenance scheduled.</span>
          <span>[DATA] 14,203 active civic connections.</span>
          <span>[LOG] Budget Q3 finalized.</span>
          <span>[SYS] Firewall updated to v12.4.</span>
        </motion.div>
      </div>

      {/* Minimal Systems Grid */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSystems.map((system, i) => (
              <div key={i} className="bg-white border border-[#F3F4F6] p-8 rounded-3xl hover:shadow-xl hover:border-[#E5E7EB] hover:-translate-y-1 transition-all duration-300 cursor-pointer h-[260px] flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#F9FAFB] rounded-xl flex items-center justify-center group-hover:bg-[#EFF6FF] transition-colors">
                    <system.icon className="w-5 h-5 text-[#4B5563] group-hover:text-[#3B82F6]" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-semibold text-[#9CA3AF] mb-1.5">{system.id}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${system.status === 'Optimal' ? 'bg-[#ECFDF5] text-[#10B981]' : system.status === 'Maintenance' ? 'bg-[#FEF3C7] text-[#D97706]' : 'bg-[#F3F4F6] text-[#4B5563]'}`}>{system.status}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-2 text-[#111827]">{system.title}</h3>
                  <p className="text-sm font-light text-[#6B7280] flex items-center gap-1 group-hover:text-[#3B82F6] transition-colors">Access portal <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Allocation & Budgets (Clean Data Viz) */}
      <section className="py-24 bg-[#FAFAFA] border-y border-[#F3F4F6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#F3F4F6] flex items-center justify-center mb-8">
              <Database className="w-5 h-5 text-[#4B5563]" />
            </div>
            <h2 className="text-4xl font-medium tracking-tight mb-6 leading-tight text-[#111827]">Capital <br/> Allocation.</h2>
            <p className="text-lg font-light text-[#6B7280] mb-10 max-w-md">
              Complete transparency into municipal spending. View live budgetary allocations across all civic sectors.
            </p>
            <button suppressHydrationWarning className="bg-white text-[#111827] border border-[#E5E7EB] px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all">
              Download Raw CSV
            </button>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-[#F3F4F6] shadow-xl p-8 lg:p-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] border-b border-[#F3F4F6] pb-4 mb-8 flex justify-between items-end">
              <span>FY 2026 Budget</span>
              <span className="text-3xl font-light text-[#111827] normal-case tracking-tight">$4.2 Billion</span>
            </h3>
            
            <div className="space-y-8">
              {[
                { dept: "Education & Schools", amount: "$1.4B", percent: 33, color: "bg-[#3B82F6]" },
                { dept: "Public Safety", amount: "$980M", percent: 23, color: "bg-[#10B981]" },
                { dept: "Infrastructure", amount: "$850M", percent: 20, color: "bg-[#F59E0B]" },
                { dept: "Health & Human Services", amount: "$640M", percent: 15, color: "bg-[#8B5CF6]" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-medium mb-3">
                    <span className="text-[#4B5563]">{item.dept}</span>
                    <span className="text-[#111827]">{item.amount}</span>
                  </div>
                  <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Forms & Permits - Minimal List */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#F3F4F6] flex items-center justify-center mb-8">
              <Terminal className="w-5 h-5 text-[#4B5563]" />
            </div>
            <h2 className="text-4xl font-medium tracking-tight mb-4 text-[#111827]">Registry Forms</h2>
            <p className="text-lg font-light text-[#6B7280] max-w-xl">
              All municipal forms are now digitized. Select a category below to initiate an application.
            </p>
          </div>
          <button suppressHydrationWarning className="bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F3F4F6] transition-all whitespace-nowrap">
            View All Schema
          </button>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-[#E5E7EB] bg-[#F9FAFB] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
            <div className="col-span-6 lg:col-span-4">Form Title</div>
            <div className="col-span-3 hidden lg:block">Department</div>
            <div className="col-span-3 hidden lg:block">Processing Time</div>
            <div className="col-span-6 lg:col-span-2 text-right">Action</div>
          </div>
          
          {[
            { title: "Commercial Zoning Variance", dept: "Urban Planning", time: "14-21 Days" },
            { title: "Residential Building Permit", dept: "Construction", time: "7-10 Days" },
            { title: "Special Event License", dept: "Public Works", time: "30 Days" },
            { title: "Business Tax Registration", dept: "Finance", time: "Instant" },
            { title: "Street Closure Request", dept: "Traffic Mgmt", time: "14 Days" },
          ].map((form, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 p-6 border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB] transition-colors items-center group">
              <div className="col-span-6 lg:col-span-4 font-medium text-[#111827]">{form.title}</div>
              <div className="col-span-3 hidden lg:block text-sm font-light text-[#6B7280]">{form.dept}</div>
              <div className="col-span-3 hidden lg:block text-sm font-medium text-[#3B82F6] bg-[#EFF6FF] w-max px-3 py-1 rounded-full">{form.time}</div>
              <div className="col-span-6 lg:col-span-2 text-right flex justify-end">
                <button suppressHydrationWarning className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center group-hover:bg-[#111827] group-hover:border-[#111827] group-hover:text-white transition-all text-[#6B7280]">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Emergency Protocols */}
      <section className="bg-[#FAFAFA] border-t border-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#F3F4F6] flex items-center justify-center mb-8">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
            </div>
            <h2 className="text-4xl font-medium tracking-tight mb-6 text-[#111827]">Emergency <br/> Protocols.</h2>
            <p className="text-lg font-light text-[#6B7280] mb-10 max-w-md leading-relaxed">
              The municipal emergency broadcast system is operational. Register your device to receive immediate evacuation or weather alerts.
            </p>
            <button suppressHydrationWarning className="w-max bg-[#EF4444] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#DC2626] transition-colors shadow-md shadow-red-500/20">
              Register Device
            </button>
          </div>
          
          <div className="flex flex-col gap-6 justify-center">
             <div className="bg-white p-8 rounded-3xl border border-[#F3F4F6] shadow-sm hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-4">
                 <h4 className="font-semibold text-[#111827]">Medical Emergency</h4>
                 <span className="bg-[#FEE2E2] text-[#EF4444] px-4 py-1 rounded-full font-bold text-lg">911</span>
               </div>
               <p className="text-sm font-light text-[#6B7280]">Immediate dispatch of EMTs, Police, and Fire Services.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-[#F3F4F6] shadow-sm hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-4">
                 <h4 className="font-semibold text-[#111827]">Non-Emergency / Utilities</h4>
                 <span className="bg-[#EFF6FF] text-[#3B82F6] px-4 py-1 rounded-full font-bold text-lg">311</span>
               </div>
               <p className="text-sm font-light text-[#6B7280]">Report civic issues, outages, and severe weather damages.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-[#F3F4F6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="font-semibold text-2xl tracking-tight mb-6 flex items-center gap-3 text-[#111827]">
                 <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center">
                   <Landmark className="w-4 h-4 text-white" />
                 </div>
                 {cityData.name}
              </div>
              <p className="text-sm font-light text-[#6B7280] max-w-sm mb-8 leading-relaxed">
                Operating the municipal grid. A modern civic infrastructure platform built for transparency, speed, and resilience.
              </p>
              <div className="flex gap-2 max-w-xs">
                <input suppressHydrationWarning type="text" placeholder="Citizen ID" className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-full px-5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#3B82F6] w-full" />
                <button suppressHydrationWarning className="bg-[#111827] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#374151] transition-colors">Verify</button>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] mb-6">Infrastructure</h4>
              <ul className="space-y-4 text-sm font-medium text-[#4B5563]">
                <li><a href="#" className="hover:text-[#111827] transition-colors">Transit Network</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Water & Power</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Waste Mgmt</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Digital Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] mb-6">Operations</h4>
              <ul className="space-y-4 text-sm font-medium text-[#4B5563]">
                <li><a href="#" className="hover:text-[#111827] transition-colors">Budget 2026</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">City Council</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Public Hearings</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Employment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] mb-6">Directives</h4>
              <ul className="space-y-4 text-sm font-medium text-[#4B5563]">
                <li><a href="#" className="hover:text-[#111827] transition-colors">Mayoral Orders</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Zoning Laws</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Code Enforcement</a></li>
                <li><a href="#" className="hover:text-[#111827] transition-colors">Court Records</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#F3F4F6] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#9CA3AF]">
            <p>&copy; {new Date().getFullYear()} {cityData.name} CIVIC OS. VER 4.2</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#4B5563] transition-colors">System Logs</a>
              <a href="#" className="hover:text-[#4B5563] transition-colors">API Access</a>
              <a href="#" className="hover:text-[#4B5563] transition-colors">Compliance</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
