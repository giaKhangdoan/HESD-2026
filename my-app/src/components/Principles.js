import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, ShieldCheck } from 'lucide-react';

const days = [
  { day: 1, title: 'Foundation & LLM Architecture', activities: ['Hiểu sâu về cấu trúc Transformer', 'Prompting Engineering nâng cao', 'Zero-shot & Few-shot learning'] },
  { day: 2, title: 'Context Management', activities: ['RAG (Retrieval-Augmented Gen)', 'Vector Database Integration', 'Semantic Search Optimization'] },
  { day: 3, title: 'Agentic Workflows', activities: ['Thiết kế tự động hóa đa Agent', 'LangChain & LlamaIndex', 'Xử lý lỗi tự phục hồi'] },
  { day: 4, title: 'Harness & Testing', evaluate: true, activities: ['CI/CD cho mô hình AI', 'Đánh giá độ chính xác (Evals)', 'Bảo mật prompt injection'] },
  { day: 5, title: 'Production Deployment', activities: ['Tối ưu hóa độ trễ (Latency)', 'Edge AI deployment', 'Giám sát chi phí API'] },
  { day: 6, title: 'Final Hackathon', evaluate: true, activities: ['Xây dựng MVP trong 12 giờ', 'Pitching trước hội đồng', 'Trao giải & Bế mạc'] }
];

const Principles = () => {
  return (
    <section id="principles" className="w-full px-4 py-16 bg-white border-y border-slate-200/50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Nguyên Lý Huấn Luyện
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto">
            Lộ trình 6 ngày chuyên sâu, từ lý thuyết cốt lõi đến triển khai sản phẩm thực tế.
          </p>
        </motion.div>
        
        <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
          <div className="flex gap-6 px-4 w-max mx-auto">
            {days.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                className="snap-center group relative w-[320px] bg-[#f9fafb] border border-slate-200/80 rounded-[32px] p-8 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                key={index}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="font-mono text-sm font-bold text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm group-hover:text-blue-500 group-hover:border-blue-200 transition-colors">
                    Day 0{item.day}
                  </div>
                  <div className={`p-2.5 rounded-xl ${item.evaluate ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                    {item.evaluate ? <ShieldCheck className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-[#0a1b33] mb-6 leading-snug">
                  {item.title}
                </h3>
                
                <ul className="space-y-4 flex-grow">
                  {item.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-500 leading-relaxed">
                      <span className="text-slate-300 mr-2 font-mono mt-0.5">›</span> 
                      {act}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
