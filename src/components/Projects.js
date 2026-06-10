import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projectList = [
  {
    title: 'CodeReviewer AI',
    desc: 'Hệ thống tự động review pull request, phát hiện lỗi bảo mật và tối ưu hóa hiệu suất thông qua phân tích ngữ cảnh codebase.',
    tags: ['Context Eng', 'Security', 'GitHub API'],
    status: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  {
    title: 'AutoDeploy Agent',
    desc: 'Agent tự động viết kịch bản CI/CD, thiết lập môi trường staging và tự động rollback khi phát hiện lỗi qua E2E testing.',
    tags: ['AI Agent', 'DevOps', 'Testing'],
    status: 'In Progress',
    statusColor: 'text-blue-600 bg-blue-50 border-blue-200'
  },
  {
    title: 'Smart DocGen',
    desc: 'Công cụ sinh tài liệu kỹ thuật tự động từ mã nguồn, luôn đồng bộ với các thay đổi mới nhất mà không cần can thiệp thủ công.',
    tags: ['Documentation', 'LLM', 'AST Parsing'],
    status: 'Planning',
    statusColor: 'text-purple-600 bg-purple-50 border-purple-200'
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
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Showcase Dự Án
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto">
            Các sản phẩm AI-Native tiêu biểu được thiết kế và vận hành bởi hệ thống tự động hóa.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((proj, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group flex flex-col bg-white border border-slate-200/80 rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              key={idx}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${proj.statusColor} flex items-center`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${proj.statusColor.split(' ')[0].replace('text', 'bg')}`}></span>
                  {proj.status}
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0a1b33] group-hover:text-white group-hover:border-[#0a1b33] transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-4">
                {proj.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, tIdx) => (
                  <span className="font-sans text-[11px] font-medium px-3 py-1 bg-slate-50 text-slate-500 rounded-lg border border-slate-100" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
