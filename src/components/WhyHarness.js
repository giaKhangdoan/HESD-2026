import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles } from 'lucide-react';

const WhyHarness = () => {
  return (
    <section id="why" className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Tại sao lại là Harness Engineering?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Left Card: The BIG Number (takes 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 relative p-10 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 flex flex-col justify-center overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/20 transition-colors" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-6 w-max">
              <TrendingUp className="w-4 h-4" />
              Hiệu suất AI
            </div>
            
            <h2 className="font-display text-[80px] md:text-[100px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0a1b33] via-blue-800 to-blue-500 mb-2">
              64%
            </h2>
            <p className="font-display text-xl font-medium text-slate-400 tracking-tight">
              Mức tăng trưởng trung bình
            </p>
          </motion.div>

          {/* Right Card: The Explanation (takes 3 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 relative p-10 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 flex flex-col justify-center"
          >
            <div className="relative">
              <Sparkles className="absolute -left-6 -top-4 w-8 h-8 text-yellow-400 opacity-30" />
              <blockquote className="font-sans text-xl md:text-2xl text-[#0a1b33] leading-relaxed mb-6 font-medium">
                "Model là thứ suy nghĩ. Harness là thứ mà nó suy nghĩ VỀ. Hiểu đúng sự khác biệt này - bạn thắng."
              </blockquote>
            </div>
            
            <p className="font-sans text-slate-500 leading-relaxed mb-6">
              Chúng tôi là những kỹ sư tin rằng: Thay vì cố gắng "nhồi nhét" hướng dẫn vào một prompt duy nhất, chìa khóa để khai mở AI là thiết kế một hệ sinh thái mã nguồn mở bao gồm các công cụ, luồng ngữ cảnh và kiểm thử để bao bọc lấy model.
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="font-mono text-xs px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-200">System Design</span>
              <span className="font-mono text-xs px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-200">Context Flow</span>
              <span className="font-mono text-xs px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-200">Automated Evals</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyHarness;
