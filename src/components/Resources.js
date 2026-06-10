import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, BookOpen, Code, Terminal, Copy, Activity, ShieldCheck, CheckSquare, Download } from 'lucide-react';

const resourceData = [
  { id: 1, title: 'AGENTS.md (Minimal)', category: 'Minimal Pack', icon: 'file', desc: 'Quy định luật lệ và ranh giới cho AI (50 dòng)', content: '# Hướng dẫn Cốt lõi\n1. Không dùng Tailwind nếu chưa hỏi.\n2. Cập nhật PROGRESS.md sau mỗi bước.\n3. Luôn test trước khi bàn giao.' },
  { id: 2, title: 'feature_list.json', category: 'Minimal Pack', icon: 'code', desc: 'Khóa chặt các tính năng, tránh ôm đồm', content: '[\n  {\n    "id": "F1",\n    "name": "Auth",\n    "status": "pending",\n    "test_cmd": "npm run test:auth"\n  }\n]' },
  { id: 3, title: 'init.sh', category: 'Minimal Pack', icon: 'terminal', desc: 'Script khởi tạo tự động, cô lập môi trường', content: '#!/bin/bash\necho "Initializing environment..."\nnpm ci\ncp .env.example .env\necho "Ready to code!"' },
  { id: 4, title: 'PROGRESS.md Template', category: 'State Management', icon: 'check', desc: 'Chống lo âu ngữ cảnh (Đã xong/Đang làm/Bị kẹt)', content: '# Tiến độ hiện tại\n\n## Đã xong [x]\n- Thiết kế DB\n\n## Đang làm [/]\n- API Đăng nhập\n\n## Bị kẹt [!]\n- Lỗi CORS trên Staging' },
  { id: 5, title: 'DECISIONS.md Template', category: 'State Management', icon: 'book', desc: 'Lưu trữ quyết định thiết kế cho phiên sau', content: '# Sổ tay Quyết định\n\n## 2026-06-10\n**Vấn đề:** Chọn thư viện Animation.\n**Quyết định:** Framer Motion.\n**Lý do:** Hỗ trợ exit animations tốt hơn.' }
];

const categories = ['All', 'Minimal Pack', 'State Management'];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredResources = activeTab === 'All' 
    ? resourceData 
    : resourceData.filter(r => r.category === activeTab);

  const renderIcon = (type) => {
    switch(type) {
      case 'file': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'book': return <BookOpen className="w-5 h-5 text-emerald-500" />;
      case 'code': return <Code className="w-5 h-5 text-orange-500" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-slate-700" />;
      case 'activity': return <Activity className="w-5 h-5 text-purple-500" />;
      case 'shield': return <ShieldCheck className="w-5 h-5 text-red-500" />;
      case 'check': return <CheckSquare className="w-5 h-5 text-teal-500" />;
      default: return <FileText className="w-5 h-5 text-slate-400" />;
    }
  };

  const renderBg = (type) => {
    switch(type) {
      case 'file': return 'bg-blue-50 border-blue-100';
      case 'book': return 'bg-emerald-50 border-emerald-100';
      case 'code': return 'bg-orange-50 border-orange-100';
      case 'terminal': return 'bg-slate-100 border-slate-200';
      case 'activity': return 'bg-purple-50 border-purple-100';
      case 'shield': return 'bg-red-50 border-red-100';
      case 'check': return 'bg-teal-50 border-teal-100';
      default: return 'bg-slate-50 border-slate-100';
    }
  };

  return (
    <section id="resources" className="w-full px-4 py-16 bg-white border-y border-slate-200/50">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Minimal Harness Pack Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200/60 rounded-[40px] p-10 md:p-14 mb-24 relative overflow-hidden text-center md:text-left shadow-xl"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                <Download className="w-4 h-4" /> Bắt đầu nhanh
              </div>
              <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4 leading-tight">
                Minimal Harness Pack
              </h2>
              <p className="font-sans text-slate-500 text-lg leading-relaxed mb-8">
                Đừng để AI lạc lối. Copy 3 file cốt lõi này vào thư mục dự án của bạn để thiết lập ngay ranh giới, cấu trúc và theo dõi tiến trình làm việc.
              </p>
              
              <button className="bg-[#0a1b33] text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-blue-600 hover:scale-105 transition-all shadow-md shadow-blue-500/20">
                Tải Minimal Pack (.zip)
              </button>
            </div>
            
            <div className="flex-1 w-full flex flex-col gap-3">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                <FileText className="w-8 h-8 text-blue-500 shrink-0" />
                <div className="text-left">
                  <div className="text-[#0a1b33] font-mono font-bold text-sm">AGENTS.md</div>
                  <div className="text-slate-500 text-xs">File quy định luật lệ và ranh giới cho AI</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-orange-50/50 hover:border-orange-100 transition-colors">
                <Code className="w-8 h-8 text-orange-500 shrink-0" />
                <div className="text-left">
                  <div className="text-[#0a1b33] font-mono font-bold text-sm">feature_list.json</div>
                  <div className="text-slate-500 text-xs">Ngăn AI tự ý sửa đổi tính năng bừa bãi</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-emerald-50/50 hover:border-emerald-100 transition-colors">
                <CheckSquare className="w-8 h-8 text-emerald-500 shrink-0" />
                <div className="text-left">
                  <div className="text-[#0a1b33] font-mono font-bold text-sm">claude-progress.md</div>
                  <div className="text-slate-500 text-xs">Bàn giao (handoff) giữa các phiên làm việc</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Template Hub Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Advanced Template Hub
          </h2>
          <p className="font-sans text-slate-500 leading-relaxed">
            Áp dụng triết lý 3 chuẩn phân loại chuyên sâu của chuyên gia Birgitta Böckeler để xây dựng hệ sinh thái Harness bảo vệ mọi khía cạnh của phần mềm.
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-[#0a1b33] text-white shadow-lg scale-105' 
                  : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100 hover:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col sm:flex-row items-center justify-between bg-[#f9fafb] border border-slate-200/80 p-5 rounded-2xl hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all"
                key={item.id}
              >
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mr-5 shrink-0 transition-transform group-hover:scale-110 ${renderBg(item.icon)}`}>
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#0a1b33] mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {item.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span className="font-sans text-sm text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(item.content);
                    alert('Đã copy nội dung của ' + item.title + ' vào clipboard!');
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-[#0a1b33] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm group-hover:border-blue-300 group-hover:text-blue-600"
                >
                  Copy to clipboard
                  <Copy className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resources;

