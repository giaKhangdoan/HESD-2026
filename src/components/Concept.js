import React from 'react';
import { motion } from 'motion/react';
import { MonitorSmartphone, RefreshCw, Network, TrendingUp, Sparkles, FileText, Bot, RefreshCcw, ShieldCheck, CheckCircle, MessageSquare, FileCode, GitBranch, Terminal, Box, Database } from 'lucide-react';

const stats = [
  { icon: <MessageSquare className="w-8 h-8" />, number: '1,200+', label: 'Thành viên Discord' },
  { icon: <FileCode className="w-8 h-8" />, number: '50+', label: 'Harness Templates' },
  { icon: <GitBranch className="w-8 h-8" />, number: '120+', label: 'Open-Source Projects' }
];

const journey = [
  { stepLabel: 'Node 1', title: 'Hệ thống Chỉ dẫn (Instruction)', desc: 'Nơi chứa AGENTS.md (50-200 dòng) làm bản đồ cốt lõi.', icon: <FileText className="w-6 h-6 text-slate-500 group-hover:text-slate-700 transition-colors" />, bg: 'bg-slate-100' },
  { stepLabel: 'Node 2', title: 'Hệ thống Công cụ (Tool)', desc: 'Cấp quyền truy cập shell/terminal dưới nguyên tắc đặc quyền tối thiểu.', icon: <Terminal className="w-6 h-6 text-sky-500 group-hover:text-sky-600 transition-colors" />, bg: 'bg-sky-50' },
  { stepLabel: 'Node 3', title: 'Hệ thống Môi trường (Environment)', desc: 'Khóa chặt phụ thuộc bằng package.json hoặc Docker.', icon: <Box className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors" />, bg: 'bg-blue-50' },
  { stepLabel: 'Node 4', title: 'Hệ thống Trạng thái (State)', desc: 'Lưu giữ trí nhớ phiên làm việc qua PROGRESS.md và DECISIONS.md.', icon: <Database className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors" />, bg: 'bg-indigo-50' },
  { stepLabel: 'Node 5', title: 'Hệ thống Phản hồi (Feedback)', desc: 'Đem lại ROI cao nhất, chứa các thông báo lỗi hướng dẫn AI tự sửa.', icon: <RefreshCcw className="w-6 h-6 text-cyan-500 group-hover:text-cyan-600 transition-colors" />, bg: 'bg-cyan-50' }
];

const Concept = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <section id="concepts" className="w-full px-4 py-16 flex flex-col gap-24">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* --- SECTION 1: WHY HARNESS --- */}
        <div className="mb-24">
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

        {/* --- SECTION 2: 3 PILLARS --- */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
              3 Trụ Cột của Harness Engineering
            </h2>
            <p className="font-sans text-slate-500 max-w-2xl mx-auto">
              Những nguyên lý cốt lõi được đúc kết từ cộng đồng để xây dựng môi trường hoàn hảo cho AI.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="group relative p-8 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 flex flex-col">
              <div className="absolute top-6 right-6 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full font-mono">
                Pillar 01
              </div>
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4 leading-tight">
                Agent-Computer Interface (ACI)
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                Thiết kế giao diện giới hạn dành riêng cho AI. Giúp model không bị "ngợp" thông tin.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <span className="text-blue-500 mr-2 font-bold">•</span> Giới hạn max 50 kết quả tìm kiếm/lần.
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <span className="text-blue-500 mr-2 font-bold">•</span> Đánh số dòng vào file viewer.
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <span className="text-blue-500 mr-2 font-bold">•</span> Công cụ tìm kiếm regex tối ưu.
                </li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="group relative p-8 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-purple-400/30 transition-all duration-300 flex flex-col">
              <div className="absolute top-6 right-6 px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider rounded-full font-mono">
                Pillar 02
              </div>
              <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4 leading-tight">
                Feedforward & Feedback Loop
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Hệ thống định hướng trước khi AI code (Feedforward) và cảm biến bắt lỗi tự động (Feedback) để AI tự nhận thức và sửa chữa.
              </p>
              <div className="mt-auto flex items-center justify-between bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 font-mono text-[11px] text-slate-500 font-medium">
                <span>Agent Code</span>
                <span className="text-slate-300">→</span>
                <span className="text-purple-600 font-bold bg-purple-100/50 px-2 py-1 rounded">Linter/Test</span>
                <span className="text-slate-300">→</span>
                <span>Auto-Fix</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="group relative p-8 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-emerald-400/30 transition-all duration-300 flex flex-col">
              <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider rounded-full font-mono">
                Pillar 03
              </div>
              <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4 leading-tight">
                Multi-Agent Architecture
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                Kiến trúc phân vai rõ ràng để ngăn AI "làm quá nhiều việc một lúc" hoặc "tuyên bố chiến thắng quá sớm".
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="font-mono text-[11px] px-3 py-1.5 bg-emerald-50/80 text-emerald-700 rounded-lg border border-emerald-100">Planner</span>
                <span className="font-mono text-[11px] px-3 py-1.5 bg-emerald-50/80 text-emerald-700 rounded-lg border border-emerald-100">Generator</span>
                <span className="font-mono text-[11px] px-3 py-1.5 bg-emerald-50/80 text-emerald-700 rounded-lg border border-emerald-100">Evaluator</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* --- SECTION 3: CORE MECHANISM (Light Theme Redesign) --- */}
        <div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
            className="bg-white border border-slate-200/80 rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="text-center mb-20 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                <RefreshCcw className="w-4 h-4" />
                Closed-Loop Working System
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#0a1b33]">
                Cơ chế Hoạt động của Harness
              </h3>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
              
              {/* Icons & Line Row */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mb-8">
                
                {/* Aceternity / Magic UI style Animated Beam */}
                <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] z-0">
                  {/* Track */}
                  <div className="absolute inset-0 bg-slate-100 rounded-full overflow-hidden">
                    {/* Glowing Comet Tail (The Beam) */}
                    <motion.div 
                      className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-transparent via-blue-500 to-cyan-300"
                      initial={{ left: "-25%" }}
                      animate={{ left: "100%" }}
                      transition={{ 
                        duration: 3.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        repeatDelay: 0.2
                      }}
                      style={{ filter: "blur(1px) drop-shadow(0 0 6px rgba(59,130,246,0.8))" }}
                    />
                  </div>
                  
                  {/* Subtle pulsing background glow matching the beam path */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-400/10 to-blue-100/0 pointer-events-none" />
                </div>

                {journey.map((step, idx) => (
                  <div className="flex flex-col items-center w-full lg:w-1/5 relative z-10 group" key={idx}>
                    {/* Icon Box */}
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-md border border-slate-100 mb-6 group-hover:-translate-y-2 transition-all duration-300 relative z-10">
                      <div className={`absolute inset-0 ${step.bg} opacity-60 rounded-2xl transition-opacity group-hover:opacity-100`} />
                      {React.cloneElement(step.icon, { className: `w-8 h-8 relative z-10 ${step.icon.props.className}` })}
                    </div>
                    
                    {/* Phase Label */}
                    <div className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {step.stepLabel}
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-display text-[15px] font-bold text-[#0a1b33] text-center mb-2 px-2 leading-tight h-10 flex items-center justify-center">
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="font-sans text-[13px] text-slate-500 text-center px-4 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Loop Back Arrow for the Closed-Loop effect */}
              <div className="hidden lg:block relative mt-16 text-center">
                <div className="flex justify-center items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="h-px w-64 bg-gradient-to-r from-transparent to-slate-300"></div>
                  <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest bg-white px-4 py-1.5 border border-slate-200 rounded-full flex items-center gap-2 shadow-sm">
                    <RefreshCcw className="w-3.5 h-3.5 animate-spin-slow text-blue-500" /> Loop Repeats
                  </div>
                  <div className="h-px w-64 bg-gradient-to-l from-transparent to-slate-300"></div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Concept;
