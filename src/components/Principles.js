import React from 'react';
import { motion } from 'motion/react';
import { Moon, Puzzle, Unlock, Activity, GitBranch, ShieldCheck, Eye, Target, Layers, Box } from 'lucide-react';

const patterns = [
  { 
    id: '01', 
    title: 'Single Source of Truth', 
    problem: <>Quy trình làm việc không được lưu vào code sẽ khiến AI hoàn toàn mù tịt ở các phiên tiếp theo.</>, 
    solution: <>Mọi luật lệ, ngữ cảnh đều phải ghi vào file. <span className="font-mono bg-blue-100 text-blue-700 px-1 rounded">Repository = Nguồn sự thật duy nhất</span>. Không nằm trong repo thì không tồn tại.</>, 
    icon: 'branch',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  },
  { 
    id: '02', 
    title: 'Reveal on Demand', 
    problem: <>Hội chứng <span className="font-mono bg-amber-100 text-amber-700 px-1 rounded">Lost in the Middle</span> khiến AI quên hướng dẫn nếu nạp file document quá dài.</>, 
    solution: <>Đập tan file hướng dẫn. Chỉ dùng file <span className="font-mono">AGENTS.md</span> ngắn gọn làm mục lục, AI sẽ đọc URL chi tiết khi thực sự cần.</>, 
    icon: 'eye',
    color: 'text-amber-600 bg-amber-50 border-amber-200'
  },
  { 
    id: '03', 
    title: 'WIP = 1 (Work-In-Progress)', 
    problem: <>Bản năng ôm đồm <span className="font-mono bg-emerald-100 text-emerald-700 px-1 rounded">Overreach</span> khiến AI sửa đổi lung tung gây nát luồng mã nguồn chính.</>, 
    solution: <>Áp dụng kỷ luật thép với cấu trúc bộ ba: Mô tả hành vi + Lệnh kiểm tra + Trạng thái. Ép AI chỉ làm đúng 1 task tại 1 thời điểm.</>, 
    icon: 'target',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  { 
    id: '04', 
    title: 'Three-Layer Termination Check', 
    problem: <>Bệnh <span className="font-mono bg-rose-100 text-rose-700 px-1 rounded">Confidence Calibration Bias</span> làm AI tự đánh giá quá cao và tuyên bố chiến thắng sớm.</>, 
    solution: <>Không cho kết thúc nếu chưa qua 3 cổng: Phân tích Cú pháp (Linter) ➔ Kiểm tra Hành vi (Unit) ➔ Luồng người dùng (E2E).</>, 
    icon: 'layers',
    color: 'text-rose-600 bg-rose-50 border-rose-200'
  },
  { 
    id: '05', 
    title: 'Clean Handoff', 
    problem: <>Giới hạn cửa sổ ngữ cảnh khiến AI kiệt sức ở cuối phiên làm việc, dẫn đến bỏ mứa công việc.</>, 
    solution: <>Bàn giao sạch qua 5 điều kiện bắt buộc: Build xanh, Test pass, Cập nhật <span className="font-mono">PROGRESS.md</span>, Xóa file rác, và Môi trường trơn tru.</>, 
    icon: 'shield',
    color: 'text-blue-600 bg-blue-50 border-blue-200'
  },
  { 
    id: '06', 
    title: 'Layered Observability', 
    problem: <>Logs cơ bản không cho biết AI đang nghĩ gì (Tại sao làm) mà chỉ biết AI đã chạy lệnh gì (Đã làm gì).</>, 
    solution: <>Thu thập khả năng quan sát kép. Mọi thông báo lỗi phải là <span className="font-mono bg-purple-100 text-purple-700 px-1 rounded">Actionable Error Feedback</span> để hướng dẫn AI cách tự sửa chữa.</>, 
    icon: 'activity',
    color: 'text-purple-600 bg-purple-50 border-purple-200'
  }
];

const renderIcon = (type) => {
  switch(type) {
    case 'moon': return <Moon className="w-5 h-5" />;
    case 'puzzle': return <Puzzle className="w-5 h-5" />;
    case 'unlock': return <Unlock className="w-5 h-5" />;
    case 'activity': return <Activity className="w-5 h-5" />;
    case 'branch': return <GitBranch className="w-5 h-5" />;
    case 'shield': return <ShieldCheck className="w-5 h-5" />;
    case 'eye': return <Eye className="w-5 h-5" />;
    case 'target': return <Target className="w-5 h-5" />;
    case 'layers': return <Layers className="w-5 h-5" />;
    case 'box': return <Box className="w-5 h-5" />;
    default: return <Moon className="w-5 h-5" />;
  }
};

const Principles = () => {
  return (
    <section id="principles" className="w-full px-4 py-20 bg-white border-y border-slate-200/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 text-slate-500 font-mono text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200">
            Advanced Architecture
          </div>
          <h2 className="font-display text-[32px] md:text-[44px] font-semibold text-[#0a1b33] mb-6 leading-tight">
            Advanced Harness Patterns
          </h2>
          <p className="font-sans text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            6 triết lý thiết kế (Patterns) nâng cao giúp khẳng định đẳng cấp kỹ thuật của hệ thống, xử lý triệt để bài toán rác ngữ cảnh, bảo mật và khả năng kiểm soát AI.
          </p>
        </motion.div>
        
        {/* CSS Carousel */}
        <div className="w-full overflow-x-auto pb-16 pt-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
          <div className="flex gap-6 px-4 w-max mx-auto md:px-8">
            {patterns.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                className="snap-center group relative w-[360px] md:w-[400px] bg-white border border-slate-200 rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 flex flex-col"
                key={index}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full shadow-sm group-hover:text-[#0a1b33] group-hover:border-slate-300 transition-colors">
                    Pattern {item.id}
                  </div>
                  <div className={`p-3 rounded-2xl border ${item.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    {renderIcon(item.icon)}
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-[#0a1b33] mb-8 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Vấn đề</h4>
                    <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  
                  <div className="h-px w-full bg-slate-100" />
                  
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-500 mb-2">Giải pháp Pattern</h4>
                    <p className="font-sans text-[15px] text-[#0a1b33] font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
