import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Marquee from './Marquee';

const Hero = () => {
  return (
    <div className="w-full px-4 pt-4 pb-12">
      {/* Hero Container */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">

        {/* Video Background Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-[42px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[1.1] mb-6">
              Harness<br />Engineering
            </h1>
            <p className="font-sans text-[14px] md:text-[15px] text-slate-500 mb-8 max-w-lg leading-relaxed">
              Chương trình huấn luyện kỹ năng phát triển phần mềm thế hệ mới, kết hợp trí tuệ nhân tạo và kỹ thuật luồng ngữ cảnh chuyên sâu.
            </p>
            <motion.a 
              href="https://forms.gle/JBmDf7n7Lsd4SZrB8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#0a152d] text-white px-8 py-3.5 rounded-full font-medium text-[15px] tracking-wide transition-colors hover:bg-[#1a253d] shadow-lg shadow-blue-900/20"
            >
              Đăng ký ngay
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Bottom Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
        >
          {/* Logo Placeholder */}
          <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center mr-4 ml-1">
            <span className="text-[#0a1b33] font-bold text-lg leading-none mt-0.5">✦</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 px-4">
            <a href="#concepts" className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">Khái niệm</a>
            <a href="#principles" className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">Nguyên lý</a>
            <a href="#projects" className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">Dự án</a>
            <a href="#resources " className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">Tài nguyên</a>
            <a href="#about" className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">Về Chúng Tôi</a>

          </div>

          {/* CTA Button inside Nav */}
          <a 
            href="https://forms.gle/JBmDf7n7Lsd4SZrB8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1 ml-4 group"
          >
            Đăng ký
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.nav>
      </div>

      {/* Seamless Marquee Scroller */}
      <div className="mt-10">
        <Marquee />
      </div>
    </div>
  );
};

export default Hero;
