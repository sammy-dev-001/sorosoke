import React from 'react';

const CaseProgressBox = ({ count, progressPercent }) => {
  return (
    <div className="bg-[#f4f7fb] rounded-2xl p-7 mb-10">
      <h3 className="text-[22px] font-bold text-[#1e293b] mb-6">
        {count} people have shared similar experiences
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center text-[13px] font-medium text-[#64748b]">
          <span>More voices are being added</span>
          <span>{progressPercent}% towards collective action</span>
        </div>
        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#335368] rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CaseProgressBox;
