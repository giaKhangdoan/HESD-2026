import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Users, UserPlus, BookOpen, Laptop, MessageSquareQuote, ArrowRight } from 'lucide-react';

const stats = [
  { icon: <CalendarDays className="w-8 h-8" />, number: '06', label: 'Ngày học chuyên sâu' },
  { icon: <Users className="w-8 h-8" />, number: '80', label: 'Học viên tuyển chọn' },
  { icon: <UserPlus className="w-8 h-8" />, number: '4-6', label: 'Thành viên/Nhóm' }
];

const journey = [
  { time: '2h', title: 'Lý thuyết', icon: <BookOpen className="w-6 h-6 text-purple-500" />, bg: 'bg-purple-50', border: 'border-purple-100' },
  { time: '4h', title: 'Thực hành Lab', icon: <Laptop className="w-6 h-6 text-blue-500" />, bg: 'bg-blue-50', border: 'border-blue-100' },
  { time: '2h', title: 'Demo & Phản hồi', icon: <MessageSquareQuote className="w-6 h-6 text-emerald-500" />, bg: 'bg-emerald-50', border: 'border-emerald-100' }
];

const AtAGlance = () => {
  return (
    <section id="glance" className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-[#0a1b33] mb-4">
            Tổng quan Chương trình
          </h2>
        </motion.div>

        {/* 3 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx}
              className="bg-white border border-slate-200/60 rounded-[32px] p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                {stat.icon}
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-[#0a1b33] mb-1">{stat.number}</div>
                <div className="font-sans text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Journey Stepper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white border border-slate-200/60 rounded-[32px] p-10 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <h3 className="font-display text-2xl font-semibold text-[#0a1b33] mb-10 text-center relative z-10">
            Hành trình 1 ngày điển hình
          </h3>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 z-10 max-w-4xl mx-auto">
            {journey.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <div className="flex flex-col items-center flex-1 w-full group">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border shadow-sm mb-6 ${step.bg} ${step.border} group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className="font-mono text-sm font-bold text-slate-400 bg-slate-50 px-4 py-1.5 rounded-full mb-3 border border-slate-100">
                    {step.time}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#0a1b33] text-center">
                    {step.title}
                  </h4>
                </div>

                {/* Arrow connecting steps */}
                {idx < journey.length - 1 && (
                  <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-16">
                    <ArrowRight className="w-8 h-8 text-blue-300 animate-pulse" />
                  </div>
                )}
                
                {/* Mobile Down Arrow */}
                {idx < journey.length - 1 && (
                  <div className="flex md:hidden justify-center w-full py-2">
                    <ArrowRight className="w-6 h-6 text-blue-300 rotate-90 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AtAGlance;
