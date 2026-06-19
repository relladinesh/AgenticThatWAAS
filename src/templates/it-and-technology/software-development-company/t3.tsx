

const Template = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="border-b border-slate-100 py-6 px-10 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="font-semibold text-2xl tracking-tight">Software Development Company</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          <a href="#contact" className="text-indigo-600 hover:text-indigo-700 transition-colors">Contact Us</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-10 pt-24 pb-12">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            IT and Technology
          </div>
          <h1 className="text-6xl font-light tracking-tight mb-8 leading-tight">Premium Template for <br/><span className="font-semibold text-indigo-600">Software Development Company</span></h1>
          <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Welcome to the premium template T3. 
            Experience a clean, modern, minimal, and awwwards-caliber design architecture.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
              Get Started Now
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-colors">
              Learn More
            </button>
          </div>
        </header>
        
        <section id="services" className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">Our Services</h2>
            <p className="text-slate-500 text-lg">Bespoke solutions crafted for your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-14 h-14 bg-white shadow-sm text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-bold text-xl group-hover:scale-110 transition-transform duration-500">0{i}</div>
                <h3 className="text-2xl font-medium mb-4">Premium Service</h3>
                <p className="text-slate-500 leading-relaxed">Highlight your core offerings with elegant typography, soft gradients, and refined spacing.</p>
              </div>
            ))}
          </div>
        </section>
        
        <section id="about" className="bg-slate-900 text-white p-20 rounded-[3rem] mb-32 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="flex-1 relative z-10">
            <h2 className="text-5xl font-light mb-8 leading-tight">Crafting Digital <br/><span className="font-semibold">Excellence</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Build unwavering trust with your audience. This highly readable and emotionally engaging section is tailored to communicate your unique value proposition.
            </p>
            <button className="border border-white/20 px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-slate-900 transition-all duration-300">
              Discover Our Story
            </button>
          </div>
          <div className="flex-1 h-[400px] bg-slate-800 rounded-3xl w-full relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </section>

        <section id="contact" className="mb-32">
          <div className="bg-indigo-50 rounded-[3rem] p-20 text-center">
            <h2 className="text-4xl font-light tracking-tight mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">Let's build something extraordinary together. Reach out to our concierge team today.</p>
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30">
              Contact Concierge
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template;
