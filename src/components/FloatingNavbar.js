import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FloatingNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/concepts', label: 'Khái niệm' },
    { path: '/principles', label: 'Nguyên lý' },
    { path: '/projects', label: 'Dự án' },
    { path: '/resources', label: 'Tài nguyên' },
    { path: '/about', label: 'Về Chúng Tôi' }
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
      >
        {/* Logo Placeholder */}
        <Link to="/" className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center mr-2 md:mr-4 ml-1 hover:bg-slate-50 transition-colors z-50">
          <span className="text-[#0a1b33] font-bold text-lg leading-none mt-0.5">✦</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 px-4">
          {links.map((link, idx) => (
            <Link 
              key={idx}
              to={link.path} 
              className={`text-[12px] font-semibold transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-500 hover:text-[#0a1b33]'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button inside Nav (Desktop) */}
        <a 
          href="https://discord.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all items-center gap-1 ml-4 group"
        >
          Tham gia Discord
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-[#0a1b33] hover:bg-slate-100 rounded-full transition-colors mr-1 z-50"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 w-64 bg-white/95 backdrop-blur-3xl rounded-[32px] p-6 shadow-2xl border border-slate-200/50 z-40 md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3 border-b border-slate-100 pb-4">
              {links.map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-[14px] font-semibold transition-colors px-4 py-2 rounded-xl ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-[#0a1b33]'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0a1b33] text-white px-5 py-3 rounded-xl text-[14px] font-semibold transition-all flex items-center justify-center gap-2 hover:bg-[#1a2b4b]"
            >
              Tham gia Discord
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
