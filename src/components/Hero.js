import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Marquee from './Marquee';

const Hero = () => {
  return (
    <div className="w-full px-4 pt-4 pb-12">
      {/* Hero Container */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[32px] md:rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden min-h-[500px] md:h-[600px] flex flex-col">

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
        <div className="relative z-20 flex-1 px-6 md:px-16 pt-20 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl w-full"
          >
            <h1 className="font-display text-[36px] sm:text-[42px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[1.1] mb-6">
              The Harness<br className="hidden md:block" /> Builders
            </h1>
            <p className="font-sans text-[14px] md:text-[15px] text-slate-500 mb-8 max-w-lg leading-relaxed">
              Cộng đồng những người xây dựng môi trường cho AI. Nơi các lập trình viên cùng nhau thiết kế luồng ngữ cảnh và định hình tương lai của Harness Engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <motion.a 
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#0a152d] text-white px-8 py-3.5 rounded-full font-medium text-[15px] tracking-wide transition-colors hover:bg-[#1a253d] shadow-lg shadow-blue-900/20"
              >
                Tham gia Discord
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/resources"
                  className="inline-flex items-center gap-2 bg-white text-[#0a1b33] border border-slate-200/80 px-8 py-3.5 rounded-full font-medium text-[15px] tracking-wide transition-colors hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                >
                  Get Started (Minimal Pack)
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Concept Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:absolute md:bottom-10 md:right-10 z-20 w-[calc(100%-3rem)] mx-6 md:mx-0 md:w-[440px] mb-6 md:mb-0 p-8 bg-white/80 backdrop-blur-3xl border border-white/60 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors pointer-events-none" />
          
          <div className="mb-5">
            <Quote className="w-8 h-8 text-blue-300" />
          </div>
          
          <div className="space-y-6 relative z-10">
            <p className="font-display text-[#0a1b33] text-[17px] md:text-[19px] leading-relaxed font-medium">
              Chuyển đổi từ việc <span className="text-blue-600">"Viết prompt để xin AI làm việc"</span> sang <span className="text-blue-600">"Xây dựng một hệ thống quy trình, giới hạn và kiểm thử để ép AI làm việc kỷ luật"</span>.
            </p>
            
            <div className="flex items-center gap-3 pt-5 border-t border-slate-200/60">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
              <p className="text-slate-500 text-[12px] font-bold uppercase tracking-wider font-mono">
                Harness Engineering
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Seamless Marquee Scroller */}
      <div className="mt-10">
        <Marquee />
      </div>
    </div>
  );
};

export default Hero;
