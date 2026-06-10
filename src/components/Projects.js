import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star, CheckCircle2, Beaker, MinusCircle } from 'lucide-react';

const projectList = [
  {
    title: 'ClaudeKit',
    desc: 'Harness in harness (Harness bậc 2) với 5 lớp bảo vệ dành riêng cho các coding agents dựa trên hệ sinh thái Claude.',
    tags: ['Security Layers', 'Context Wrapper', 'Tier-2'],
    status: 'Essential',
    statusColor: 'text-purple-600 bg-purple-50 border-purple-200',
    author: 'Anthropic Ecosystem'
  },
  {
    title: 'GoClaw',
    desc: 'Hệ thống Harness cấp độ doanh nghiệp (Production agents) hỗ trợ kiến trúc multi-tenant, bảo mật 5 lớp và 20+ mô hình LLM.',
    tags: ['Production', 'Enterprise', 'Multi-LLM'],
    status: 'Enterprise',
    statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
    author: 'GoClaw Team'
  },
  {
    title: 'SWE-agent',
    desc: 'Thiết kế ACI (Agent-Computer Interface) chuẩn mực từ đại học Princeton, bằng chứng thực tế cho việc thiết kế môi trường cho AI.',
    tags: ['Princeton', 'ACI', 'Research'],
    status: 'Academic',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    author: 'Princeton NLP'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-600 font-mono text-sm font-bold uppercase tracking-wider mb-6 border border-yellow-200">
            <Star className="w-4 h-4" /> Awesome List
          </div>
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Awesome Harness Ecosystem
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Danh sách các công cụ, framework và dự án nghiên cứu vệ tinh xuất sắc nhất đang dẫn dắt ngành công nghiệp thiết kế môi trường cho AI.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((proj, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group flex flex-col bg-white border border-slate-200/80 rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              key={idx}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${proj.statusColor} flex items-center bg-white`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${proj.statusColor.split(' ')[0].replace('text', 'bg')}`}></span>
                  {proj.status}
                </div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#0a1b33] hover:text-white hover:border-[#0a1b33] transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex flex-col items-start gap-1 mb-4 relative z-10">
                <h3 className="font-display text-2xl font-semibold text-[#0a1b33] group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
                <span className="font-mono text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                  {proj.author}
                </span>
              </div>
              
              <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow relative z-10">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {proj.tags.map((tag, tIdx) => (
                  <span className="font-sans text-[11px] font-medium px-3 py-1.5 bg-white shadow-sm text-slate-500 rounded-lg border border-slate-100" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Guidelines Section --- */}
        <div className="mt-32 pt-16 border-t border-slate-200/50">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-mono text-[11px] font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Star className="w-4 h-4" /> Tiêu chuẩn Cộng đồng
            </div>
            <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-6 leading-tight">
              Tiêu chuẩn Đóng góp & Showcase
            </h2>
            <p className="font-sans text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Để đảm bảo các dự án được đưa lên Showcase luôn duy trì chất lượng cao nhất, chúng tôi khuyến khích các lập trình viên tuân thủ 3 nguyên tắc bảo trì nền tảng sau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/20"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0a1b33] text-xl mb-3">Clean Handoff (Bàn giao Sạch)</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed mb-4">
                Một phiên làm việc chỉ được tính là "hoàn tất" nếu Agent đáp ứng đủ 5 điều kiện:
              </p>
              <ul className="text-slate-500 text-[13px] space-y-2 list-disc list-inside">
                <li>Code Build thành công.</li>
                <li>Test Suite (Luồng chính) Pass 100%.</li>
                <li>Cập nhật tiến độ vào PROGRESS.md.</li>
                <li>Xóa bỏ các file rác/nháp.</li>
                <li>Môi trường khởi động trơn tru cho phiên sau.</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/20"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0a1b33] text-xl mb-3">Ablation Test</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                Chúng tôi khuyến khích bạn làm trắc nghiệm "Xóa một yếu tố". Hãy thử gỡ bỏ lần lượt từng phần trong cấu trúc Harness của bạn (ví dụ: tắt Linter, xóa Feature List) để đo lường xem hiệu suất suy luận và code của AI bị sụt giảm bao nhiêu. Chứng minh bằng data thực tế!
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/20"
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 border border-orange-100">
                <MinusCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0a1b33] text-xl mb-3">Đơn giản hóa Harness</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                Khi các model AI (như Claude 3.5 Sonnet) ngày càng thông minh, nhiều luật lệ gò bó cũ có thể trở nên thừa thãi. Hãy liên tục review và loại bỏ bớt các rào cản không còn cần thiết để Agent có không gian sáng tạo lớn hơn, giảm thiểu chi phí token vô ích.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

