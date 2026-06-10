import React from 'react';
import { motion } from 'motion/react';

const teamMembers = [
  { name: 'Dr. Alan Walker', role: 'Chief AI Architect', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alan&backgroundColor=b6e3f4' },
  { name: 'Sarah Jenkins', role: 'Context Engineering Lead', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede' },
  { name: 'David Chen', role: 'Harness & Testing Expert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=b1e5d3' },
  { name: 'Elena Rostova', role: 'LLM Ops Engineer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=e2e8f0' }
];

const About = () => {
  return (
    <section id="about" className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-6">
            Về Chúng Tôi
          </h2>
          <p className="font-sans text-lg text-slate-500 leading-relaxed">
            Sứ mệnh của chúng tôi là định hình lại tư duy phát triển phần mềm cho kỷ nguyên AI. 
            Thay vì xem AI là một trợ lý viết code thụ động, HESD 2026 đào tạo kỹ sư cách thiết kế 
            toàn bộ vòng đời sản phẩm từ góc nhìn <span className="font-semibold text-[#0a1b33]">"AI-Native"</span>.
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
