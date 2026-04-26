import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-16 mb-20">
      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
        <ChevronLeft size={20} />
      </button>
      
      <button className="w-10 h-10 rounded-xl bg-[#335368] flex items-center justify-center text-white font-bold text-[15px]">
        1
      </button>
      
      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-medium text-[15px] transition-colors">
        2
      </button>
      
      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-medium text-[15px] transition-colors">
        3
      </button>
      
      <span className="px-2 text-slate-400">...</span>
      
      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-medium text-[15px] transition-colors">
        12
      </button>
      
      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
