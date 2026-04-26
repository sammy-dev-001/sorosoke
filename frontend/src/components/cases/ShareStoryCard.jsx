import React from 'react';
import { Plus } from 'lucide-react';

const ShareStoryCard = ({ onReportClick }) => {
  return (
    <div className="bg-transparent rounded-3xl p-8 border-dashed border-2 border-slate-300 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
      <div className="w-16 h-16 rounded-full bg-[#e3f2fd] flex items-center justify-center text-blue-600 mb-6 shadow-sm">
        <Plus size={32} strokeWidth={2.5} />
      </div>
      
      <h3 className="text-[18px] font-bold text-slate-800 mb-3">
        Share Your Story
      </h3>
      
      <p className="text-slate-500 text-[14px] leading-relaxed max-w-[220px] mb-8">
        Don't see your experience listed? Reporting helps build community awareness.
      </p>

      <button 
        onClick={onReportClick}
        className="bg-[#335368] hover:bg-[#2c485a] text-white px-8 py-3 rounded-xl font-bold text-[14px] transition-all shadow-md active:scale-95"
      >
        Report New Case
      </button>
    </div>
  );
};

export default ShareStoryCard;
