import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const teamMembers = [
  { name: '@giaKhangdoan', role: 'Core Maintainer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=giaKhangdoan&backgroundColor=b6e3f4' },
  { name: '@alex_dev', role: 'Template Creator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=c0aede' },
  { name: '@harness_master', role: 'PR Contributor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=harness&backgroundColor=b1e5d3' },
  { name: '@ai_builder', role: 'PR Contributor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ai&backgroundColor=e2e8f0' }
];

const About = () => {
  return (
    <section id="about" className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        
        {/* The Role of the Human Manifesto */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/60 rounded-[32px] p-10 md:p-14 mb-24 relative overflow-hidden"
        >
          <Quote className="absolute -top-4 -left-4 w-32 h-32 text-slate-200/50 rotate-12" />
          <div className="relative z-10 md:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              Community Manifesto
            </div>
            <h3 className="font-display text-[28px] md:text-[36px] font-semibold text-[#0a1b33] mb-6 leading-tight">
              The Role of the Human
            </h3>
            <div className="space-y-6 font-sans text-lg md:text-xl text-slate-600 leading-relaxed">
              <p>
                Harness Engineering không sinh ra để loại bỏ lập trình viên. Một AI không có "sự xấu hổ" khi viết ra một function spaghetti dài 300 dòng, cũng không hiểu ngữ cảnh văn hóa hay mục tiêu kinh doanh đằng sau tính năng đó.
              </p>
              <p className="font-medium text-[#0a1b33]">
                Xây dựng Harness chính là cách con người "số hóa" kinh nghiệm, kỷ luật và trực giác của mình để điều hướng AI. 
              </p>
              <p>
                Harness giúp tập trung sức người vào những nơi quan trọng nhất, biến lập trình viên từ <span className="line-through text-slate-400">người gõ code</span> thành <strong className="text-blue-600">người thiết kế hệ thống và kiểm soát chất lượng</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-6">
            Hall of Fame
          </h2>
          <p className="font-sans text-lg text-slate-500 leading-relaxed">
            Tôn vinh những cá nhân đóng góp nổi bật nhất vào mã nguồn và kiến trúc của cộng đồng. 
            Nền tảng Harness Engineering được xây dựng và duy trì bởi <span className="font-semibold text-[#0a1b33]">trí tuệ tập thể</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="group text-center bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-2xl hover:border-slate-300 hover:-translate-y-2 transition-all duration-300"
              key={idx}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#f9fafb] bg-slate-100 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#0a1b33] mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-xs uppercase font-bold text-blue-500 tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
