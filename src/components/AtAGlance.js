import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, FileCode, GitBranch, FileText, Bot, CheckCircle, RefreshCcw, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: <MessageSquare className="w-8 h-8" />, number: '1,200+', label: 'Thành viên Discord' },
  { icon: <FileCode className="w-8 h-8" />, number: '50+', label: 'Harness Templates' },
  { icon: <GitBranch className="w-8 h-8" />, number: '120+', label: 'Open-Source Projects' }
];

const journey = [
  { stepLabel: 'Phase 1', title: 'Khởi tạo (Initialization)', desc: 'Sử dụng AGENTS.md và init.sh.', icon: <FileText className="w-6 h-6 text-purple-500" />, bg: 'bg-purple-50', border: 'border-purple-200' },
  { stepLabel: 'Phase 2', title: 'Chạy tác vụ (Run Tasks)', desc: 'AI Agent bắt đầu thực thi.', icon: <Bot className="w-6 h-6 text-blue-500" />, bg: 'bg-blue-50', border: 'border-blue-200' },
  { stepLabel: 'Phase 3', title: 'Phản hồi hệ thống (Runtime Feedback)', desc: 'Ghi nhận lỗi và tự động sửa qua CLI/Logs.', icon: <RefreshCcw className="w-6 h-6 text-orange-500" />, bg: 'bg-orange-50', border: 'border-orange-200' },
  { stepLabel: 'Phase 4', title: 'Kiểm duyệt (Verify & QA)', desc: 'Đánh giá qua bộ test tự động (Test suite).', icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { stepLabel: 'Phase 5', title: 'Dọn dẹp & Bàn giao (Cleanup & Handoff)', desc: 'Lưu trạng thái vào claude-progress.md.', icon: <CheckCircle className="w-6 h-6 text-teal-500" />, bg: 'bg-teal-50', border: 'border-teal-200' }
];

const AtAGlance = () => {
  return (
    <section id="glance" className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Hệ sinh thái Cộng đồng
          </h2>
        </motion.div>

        {/* 3 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx}
              className="bg-white border border-slate-200/60 rounded-[32px] p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                {stat.icon}
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-[#0a1b33] mb-1">{stat.number}</div>
                <div className="font-sans text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closed-Loop Mechanism */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#050b14] rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Closed-Loop Working System
            </div>
            <h3 className="font-display text-3xl font-semibold text-white">
              Cơ chế Hoạt động của Harness
            </h3>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* SVG Glowing Line Background */}
            <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-full pointer-events-none z-0">
              <svg width="100%" height="100px" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
                <path 
                  d="M 50,50 L 950,50" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeDasharray="10 10"
                />
                <motion.path 
                  d="M 50,50 L 950,50" 
                  stroke="#00D4FF" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                  cx="50" cy="50" r="6" fill="#00D4FF" 
                  style={{ filter: "drop-shadow(0 0 8px #00D4FF)" }}
                  initial={{ cx: 50, opacity: 0 }}
                  animate={{ cx: 950, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">
              {journey.map((step, idx) => (
                <div className="flex flex-col items-center flex-1 w-full relative group" key={idx}>
                  <div className={`w-24 h-24 rounded-[32px] flex items-center justify-center border-2 shadow-lg mb-6 bg-[#0a1526] ${step.border} group-hover:scale-110 group-hover:bg-opacity-80 transition-all duration-300 relative`}>
                    {/* Glowing effect under icon */}
                    <div className="absolute inset-0 bg-current opacity-20 blur-xl rounded-full" />
                    {React.cloneElement(step.icon, { className: 'w-8 h-8 relative z-10' })}
                  </div>
                  <div className="font-mono text-xs font-bold text-blue-400 bg-blue-900/30 px-4 py-1.5 rounded-full mb-3 border border-blue-500/30">
                    {step.stepLabel}
                  </div>
                  <h4 className="font-display text-base font-semibold text-white text-center mb-2 px-2">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 text-center px-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Loop Back Arrow for the Closed-Loop effect */}
            <div className="hidden lg:block relative mt-16 text-center">
              <div className="flex justify-center items-center gap-4 opacity-50">
                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent to-blue-500/50"></div>
                <div className="font-mono text-xs text-blue-300 uppercase tracking-widest bg-[#050b14] px-4 py-1 border border-blue-500/20 rounded-full flex items-center gap-2">
                  <RefreshCcw className="w-3 h-3 animate-spin-slow" /> Loop Repeats
                </div>
                <div className="h-[1px] w-64 bg-gradient-to-l from-transparent to-blue-500/50"></div>
              </div>
            </div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AtAGlance;

