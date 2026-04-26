import React from 'react';
import { UserCircle } from 'lucide-react';

const ExperienceCard = ({ date, quote }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-[#335368] font-semibold text-[14px]">
          <UserCircle size={20} className="text-slate-400" />
          <span>Anonymous</span>
        </div>
        <span className="text-slate-400 text-[12px] font-medium">{date}</span>
      </div>
      
      <p className="text-slate-600 text-[14px] leading-relaxed italic">
        "{quote}"
      </p>
    </div>
  );
};

export default ExperienceCard;
