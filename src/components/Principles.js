import React from 'react';
import { motion } from 'motion/react';
import { Moon, Puzzle, Unlock, Activity, GitBranch, ShieldCheck, Eye, Target, Layers, Box } from 'lucide-react';

const patterns = [
  { 
    id: '01', 
    title: 'AutoDream', 
    problem: 'Khi làm việc thời gian dài, bộ nhớ của Agent bị phình to (context rot) và chứa nhiều thông tin mâu thuẫn làm giảm chất lượng suy luận.', 
    solution: 'Hệ thống ngầm tạo sub-agent tổng hợp quan sát, loại bỏ logic mâu thuẫn và nén thông tin thành "sự thật" rõ ràng khi đang idle.', 
    icon: 'moon',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  },
  { 
    id: '02', 
    title: 'Ambient Affordances', 
    problem: 'Các hệ thống mã nguồn cũ (legacy) thiếu cấu trúc chuẩn, khiến AI dễ đi chệch hướng.', 
    solution: 'Tích hợp "khả năng dễ điều khiển" từ đầu: Dùng kiểu dữ liệu mạnh (strongly typed), ranh giới rõ ràng hoặc framework trừu tượng hóa chi tiết.', 
    icon: 'puzzle',
    color: 'text-amber-600 bg-amber-50 border-amber-200'
  },
  { 
    id: '03', 
    title: 'Progressive Disclosure', 
    problem: 'Việc nạp toàn bộ hàng tá công cụ cùng một lúc (như MCP) tiêu tốn một lượng token khổng lồ.', 
    solution: 'Chỉ cung cấp metadata ban đầu (200 tokens). Khi Agent cần dùng công cụ nào, hệ thống mới mở rộng hướng dẫn và cấp phát tài nguyên động.', 
    icon: 'unlock',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  { 
    id: '04', 
    title: 'Continuous Drift Sensors', 
    problem: 'Nợ kỹ thuật hoặc sai lệch kiến trúc (architectural drift) tích tụ ngầm mà test ngắn hạn không phát hiện được.', 
    solution: 'AI "lao công" (janitor army) liên tục quét nền độc lập để tìm dead code, phân tích bao phủ test, hoặc giám sát log anomalies.', 
    icon: 'activity',
    color: 'text-rose-600 bg-rose-50 border-rose-200'
  },
  { 
    id: '05', 
    title: 'Subagent Isolation Models', 
    problem: 'Sub-agents làm việc song song dễ can thiệp vào bộ nhớ của nhau hoặc làm hỏng mã nguồn chính.', 
    solution: '3 mô hình cô lập: Fork (chung KV cache để chạy nhanh), Teammate (giao tiếp qua mailbox), Worktree (chạy trên Git branch riêng biệt).', 
    icon: 'branch',
    color: 'text-blue-600 bg-blue-50 border-blue-200'
  },
  { 
    id: '06', 
    title: 'Layered Permission Gates', 
    problem: 'Cho phép AI tự do chạy các lệnh bash commands hoặc thay đổi database là rủi ro bảo mật thảm họa.', 
    solution: 'Tách bạch "Model muốn làm gì" và "Hệ thống cho phép làm gì". Mọi công cụ phải qua các cổng kiểm duyệt bảo mật phân lớp (như GoClaw).', 
    icon: 'shield',
    color: 'text-purple-600 bg-purple-50 border-purple-200'
  },
  { 
    id: '07', 
    title: 'Reveal on Demand', 
    problem: 'Hiệu ứng "Lost in the Middle" làm AI quên hướng dẫn nằm ở giữa các file documents khổng lồ.', 
    solution: 'Đập tan các file lớn. Chỉ dùng AGENTS.md cực ngắn làm menu và đưa link tài liệu chi tiết (URL file) khi Agent thực sự cần.', 
    icon: 'eye',
    color: 'text-teal-600 bg-teal-50 border-teal-200'
  },
  { 
    id: '08', 
    title: 'WIP = 1 (Work-In-Progress)', 
    problem: 'Bản năng "thấy gì sửa nấy" (Overreach) khiến AI thay đổi một đống code không liên quan gây nát project.', 
    solution: 'Kỷ luật thép: Ép Agent chỉ làm đúng 1 task (việc đang làm = 1) tại 1 thời điểm. Xong việc A mới được chuyển sang việc B.', 
    icon: 'target',
    color: 'text-red-600 bg-red-50 border-red-200'
  },
  { 
    id: '09', 
    title: 'Three-Layer Termination Check', 
    problem: 'AI thường xuyên bị ảo giác (hallucination) và "tuyên bố chiến thắng sớm" dù code chưa chạy được.', 
    solution: 'Cấm Agent tự cho là xong nếu chưa vượt qua 3 lớp phòng ngự: Linter (Cú pháp) -> Unit Test (Hành vi) -> E2E Test (Luồng người dùng).', 
    icon: 'layers',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
  },
  { 
    id: '10', 
    title: 'Initialization Isolation', 
    problem: 'Setup môi trường cài gói npm thường xuyên sinh ra lỗi phức tạp, làm AI loạn nhịp khi vừa cài đặt vừa code.', 
    solution: 'Tách biệt bước khởi tạo. Phiên làm việc (Session) đầu tiên CHỈ dùng để cài đặt môi trường trơn tru. Tuyệt đối không code logic ở bước này.', 
    icon: 'box',
    color: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200'
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
