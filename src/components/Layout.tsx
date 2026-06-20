import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutTemplate, Menu, X, LogOut } from 'lucide-react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === '/';
  // Check if we are on a page that takes full height and needs custom height calculation
  const isShowcase = location.pathname.startsWith('/showcase') || location.pathname.startsWith('/b2b/templates');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate('/');
  };

  const navClass = (isHome && !isScrolled) 
    ? 'bg-transparent py-5' 
    : 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-slate-100';

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#0F172A]">
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#2563EB]/20 group-hover:scale-105 transition-transform">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">ShowcasePro</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <Link to="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <Link to="/showcase" className="hover:text-[#2563EB] transition-colors">Showcase</Link>
              {user?.role === 'admin' && (
                <Link to="/b2b" className="hover:text-[#2563EB] transition-colors">B2B Hub</Link>
              )}
            </div>

            <div className="hidden md:flex items-center gap-4 relative" ref={dropdownRef}>
              {isAuthenticated ? (
                <div>
                  <div 
                    className="relative group cursor-pointer" 
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#2563EB]/20 hover:ring-4 ring-[#2563EB]/20 transition-all">
                      {user?.username?.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-slate-50 bg-slate-50/50">
                          <p className="text-sm font-medium text-slate-900 truncate">{user?.username}</p>
                          <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
                        </div>
                        <div className="p-2">
                          <button 
                            onClick={() => { navigate('/b2b'); setUserMenuOpen(false); }}
                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#2563EB] rounded-lg transition-colors flex items-center gap-2"
                          >
                            <LayoutTemplate className="w-4 h-4" /> Dashboard
                          </button>
                          <button 
                            onClick={handleLogout}
                            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 mt-1"
                          >
                            <LogOut className="w-4 h-4" /> Sign out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login" className="text-sm font-bold bg-[#0F172A] text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                  Client Login
                </Link>
              )}
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-900/40 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-6 text-lg font-medium text-slate-700">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/showcase" onClick={() => setMobileMenuOpen(false)}>Showcase</Link>
                {user?.role === 'admin' && (
                  <Link to="/b2b" onClick={() => setMobileMenuOpen(false)}>B2B Hub</Link>
                )}
                <div className="h-px bg-slate-100 my-2" />
                {isAuthenticated ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {user?.username?.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Logged in</span>
                        <span className="font-bold text-slate-900">{user?.username}</span>
                      </div>
                    </div>
                    <Link 
                      to="/b2b"
                      className="bg-[#2563EB] text-white py-4 rounded-xl text-center shadow-lg shadow-[#2563EB]/20 font-bold" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Go to Dashboard
                    </Link>
                    <button 
                      onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                      className="bg-red-50 text-red-600 py-4 rounded-xl text-center font-bold mt-2" 
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="bg-[#2563EB] text-white py-4 rounded-xl text-center shadow-lg shadow-[#2563EB]/20" onClick={() => setMobileMenuOpen(false)}>
                    Client Login
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`flex-1 flex flex-col ${isHome ? '' : 'pt-[76px]'} ${isShowcase ? 'h-[calc(100vh-76px)] overflow-hidden' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}
