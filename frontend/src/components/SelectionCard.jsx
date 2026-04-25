import React from 'react';

const SelectionCard = ({ title, description, icon: Icon, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      className={`
        w-full p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-center gap-5
        ${isSelected 
          ? 'border-[#335368] bg-white shadow-sm' 
          : 'border-slate-200 bg-white hover:border-slate-300'
        }
      `}
    >
      {/* Icon Area */}
      <div className={`
        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors
        ${isSelected ? 'bg-[#335368] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}
      `}>
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Text Area */}
      <div className="flex-1 text-left">
        <h3 className={`text-[17px] font-semibold mb-1 transition-colors ${isSelected ? 'text-[#1e293b]' : 'text-[#334155]'}`}>
          {title}
        </h3>
        <p className="text-[14px] text-[#64748b] leading-snug">
          {description}
        </p>
      </div>

      {/* Radio Indicator */}
      <div className="flex-shrink-0 ml-2 flex items-center justify-center">
        {isSelected ? (
          <div className="w-[22px] h-[22px] rounded-full bg-[#335368] flex items-center justify-center transition-all duration-200 shadow-sm">
            <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
          </div>
        ) : (
          <div className="w-[22px] h-[22px] rounded-full border-[2px] border-slate-300 transition-all duration-200"></div>
        )}
      </div>
    </div>
  );
};

export default SelectionCard;
