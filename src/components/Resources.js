import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Video, BookOpen, Code, Terminal, Download } from 'lucide-react';

const resourceData = [
  { id: 1, title: 'HESD 2026 Curriculum Guide', category: 'Document', icon: 'file', link: '#' },
  { id: 2, title: 'AI-Native Architecture Patterns', category: 'Video', icon: 'play', link: '#' },
  { id: 3, title: 'Context Window Optimization Strategies', category: 'Article', icon: 'book', link: '#' },
  { id: 4, title: 'GitHub Repo: Boilerplate Agent', category: 'Code', icon: 'code', link: '#' },
  { id: 5, title: 'Harness Setup Script (Bash)', category: 'Code', icon: 'terminal', link: '#' }
];

const categories = ['All', 'Document', 'Video', 'Article', 'Code'];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredResources = activeTab === 'All' 
    ? resourceData 
    : resourceData.filter(r => r.category === activeTab);

  const renderIcon = (type) => {
    switch(type) {
      case 'file': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'play': return <Video className="w-5 h-5 text-purple-500" />;
      case 'book': return <BookOpen className="w-5 h-5 text-emerald-500" />;
      case 'code': return <Code className="w-5 h-5 text-orange-500" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-slate-700" />;
      default: return <FileText className="w-5 h-5 text-slate-400" />;
    }
  };

  const renderBg = (type) => {
    switch(type) {
      case 'file': return 'bg-blue-50 border-blue-100';
      case 'play': return 'bg-purple-50 border-purple-100';
      case 'book': return 'bg-emerald-50 border-emerald-100';
      case 'code': return 'bg-orange-50 border-orange-100';
      case 'terminal': return 'bg-slate-100 border-slate-200';
      default: return 'bg-slate-50 border-slate-100';
    }
  };

  return (
    <section id="resources" className="w-full px-4 py-16 bg-white border-y border-slate-200/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Thư Viện Tài Nguyên
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto">
            Hệ thống tài liệu, mã nguồn và kiến thức để triển khai sản phẩm thực tế.
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all ${
                activeTab === cat 
                  ? 'bg-[#0a1b33] text-white shadow-md' 
                  : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources List */}
        <div className="flex flex-col gap-4">
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
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mr-5 shrink-0 ${renderBg(item.icon)}`}>
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-[#0a1b33] mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <a 
                  href={item.link} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-[#0a1b33] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  Tải xuống
                  <Download className="w-4 h-4 text-slate-400" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resources;
