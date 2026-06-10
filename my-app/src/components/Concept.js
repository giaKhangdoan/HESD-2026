import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Layers, GitBranch } from 'lucide-react';

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
    <section id="concepts" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Hệ Sinh Thái Kiến Thức
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto">
            Nền tảng cốt lõi giúp bạn làm chủ quy trình phát triển phần mềm trong kỷ nguyên AI.
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
              Foundation
            </div>
            <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4 leading-tight">
              AI-Native Software Engineering
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              Tư duy phát triển phần mềm mà trong đó AI không chỉ là công cụ hỗ trợ mà là thành phần trung tâm của quy trình kiến trúc.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-slate-600">
                <span className="text-blue-500 mr-2 font-bold">•</span> Codebase linh hoạt, tối ưu cho LLMs.
              </li>
              <li className="flex items-start text-sm text-slate-600">
                <span className="text-blue-500 mr-2 font-bold">•</span> Tự động hóa testing & refactoring.
              </li>
              <li className="flex items-start text-sm text-slate-600">
                <span className="text-blue-500 mr-2 font-bold">•</span> Kiến trúc module hướng AI-first.
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="group relative p-8 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-purple-400/30 transition-all duration-300 flex flex-col">
            <div className="absolute top-6 right-6 px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider rounded-full font-mono">
              Core Skill
            </div>
            <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4 leading-tight">
              Context Engineering
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Kỹ năng đóng gói, phân luồng và quản lý ngữ cảnh (context window) giúp AI hiểu toàn diện hệ thống mã nguồn phức tạp.
            </p>
            <div className="mt-auto flex items-center justify-between bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 font-mono text-[11px] text-slate-500 font-medium">
              <span>Input</span>
              <span className="text-slate-300">→</span>
              <span className="text-purple-600 font-bold bg-purple-100/50 px-2 py-1 rounded">Context</span>
              <span className="text-slate-300">→</span>
              <span>Output</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="group relative p-8 bg-white border border-slate-200/60 rounded-[32px] shadow-sm hover:shadow-xl hover:border-emerald-400/30 transition-all duration-300 flex flex-col">
            <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider rounded-full font-mono">
              Applied
            </div>
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GitBranch className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4 leading-tight">
              Harness Engineering
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              Xây dựng "dây đai an toàn" (harness) và môi trường kiểm thử hộp đen để đảm bảo code do AI tạo ra luôn hoạt động đúng chức năng.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="font-mono text-[11px] px-3 py-1.5 bg-emerald-50/80 text-emerald-700 rounded-lg border border-emerald-100">Unit Testing</span>
              <span className="font-mono text-[11px] px-3 py-1.5 bg-emerald-50/80 text-emerald-700 rounded-lg border border-emerald-100">E2E Specs</span>
              <span className="font-mono text-[11px] px-3 py-1.5 bg-emerald-50/80 text-emerald-700 rounded-lg border border-emerald-100">CI/CD</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Concept;
