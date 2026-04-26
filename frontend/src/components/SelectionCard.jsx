import React from 'react';

const SelectionCard = ({ title, description, icon: Icon, isSelected, onClick, variant = "default" }) => {
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
        w-full p-5 rounded-xl border transition-all duration-200 flex items-center gap-4
        ${isSelected 
          ? 'border-[#335368] bg-white ring-1 ring-[#335368]' 
          : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
        }
      `}
    >
      {/* Radio Indicator - Left side for focused forms */}
      <div className="flex-shrink-0 flex items-center justify-center">
        {isSelected ? (
          <div className="w-[22px] h-[22px] rounded-full bg-[#335368] flex items-center justify-center transition-all duration-200 shadow-sm">
            <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
          </div>
        ) : (
          <div className="w-[22px] h-[22px] rounded-full border-2 border-slate-300 transition-all duration-200"></div>
        )}
      </div>

      {/* Icon Area - Optional */}
      {Icon && (
        <div className={`
          flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors
          ${isSelected ? 'bg-[#335368] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}
        `}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}

      {/* Text Area */}
      <div className="flex-1 text-left">
        <h3 className={`text-[16px] font-bold mb-0.5 transition-colors ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>
          {title}
        </h3>
        <p className="text-[13px] text-[#64748b] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SelectionCard;
