import React from 'react';
import { motion } from 'motion/react';
import { Mail, Paperclip, Building2 } from 'lucide-react';

const skills = [
  { 
    year: '2022-2024', 
    title: 'Prompt Engineering', 
    desc: 'Tập trung vào câu hỏi - Giống như việc viết một email.', 
    gradient: 'from-blue-500/10 to-cyan-300/10',
    icon: <Mail className="w-5 h-5 text-blue-500" />
  },
  { 
    year: '2025', 
    title: 'Context Engineering', 
    desc: 'Tập trung vào dữ liệu - Giống như việc đính kèm đúng file vào email.', 
    gradient: 'from-purple-500/10 to-pink-300/10',
    icon: <Paperclip className="w-5 h-5 text-purple-500" />
  },
  { 
    year: '2026', 
    title: 'Harness Engineering', 
    desc: 'Tập trung hệ sinh thái - Giống như thiết kế toàn bộ văn phòng & quy trình.', 
    gradient: 'from-emerald-500/10 to-teal-300/10',
    icon: <Building2 className="w-5 h-5 text-emerald-500" />
  }
];

const Marquee = () => {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden py-4">
      {/* Masking Gradient */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{ 
          background: 'linear-gradient(to right, #f9fafb 0%, transparent 10%, transparent 90%, #f9fafb 100%)' 
        }}
      />
      
      {/* Scroller Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
        {/* Render multiple times for seamless loop */}
        {[...skills, ...skills, ...skills].map((item, index) => (
          <div 
            key={index} 
            className="group relative h-28 w-[420px] shrink-0 flex items-center p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all overflow-hidden cursor-default"
          >
            {/* Gradient Background on Hover */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`}
            />
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="mt-1 p-2 bg-slate-50 border border-slate-100 rounded-xl shadow-sm group-hover:bg-white transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-slate-400">{item.year}</span>
                  <h4 className="font-display text-base font-bold text-[#0a1b33]">{item.title}</h4>
                </div>
                <p className="font-sans text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
