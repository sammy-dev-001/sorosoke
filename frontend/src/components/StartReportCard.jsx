import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const StartReportCard = ({ onStartReport, onLearnPrivacy }) => {
  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-slate-100 mb-8 relative overflow-hidden">
      <div className="bg-[#bce4de] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#2f6a61]">
        <Shield size={28} strokeWidth={2.5} className="fill-[#bce4de]" />
      </div>
      
      <h1 className="text-3xl sm:text-[2.5rem] font-bold text-slate-900 mb-4 tracking-tight leading-tight">
        Start Your Report
      </h1>
      
      <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl">
        You're in control. You can skip any question. Your safety and comfort are our priority as we guide you through this process.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button 
          onClick={onStartReport}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#335368] hover:bg-[#284355] text-white px-7 py-3.5 rounded-xl font-medium transition-colors duration-200 text-base"
        >
          Start Report
          <ArrowRight size={18} />
        </button>
        
        <button 
          onClick={onLearnPrivacy}
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors duration-200 text-base"
        >
          Learn about privacy
        </button>
      </div>
    </div>
  );
};

export default StartReportCard;
