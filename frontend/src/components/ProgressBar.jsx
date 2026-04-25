import React from 'react';

const ProgressBar = ({ 
  currentStep = 1, 
  totalSteps = 4, 
  stepLabel = "Getting Started",
  leftLabel,
  rightLabel
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className={`font-semibold text-[#335368] ${leftLabel ? 'text-[13px]' : 'text-xs uppercase tracking-widest'}`}>
          {leftLabel || `Step ${currentStep} of ${totalSteps}`}
        </span>
        <span className="text-[13px] text-slate-500 font-medium">
          {rightLabel || stepLabel}
        </span>
      </div>
      <div className="flex w-full gap-2 h-1.5">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index}
            className={`flex-1 rounded-full transition-colors duration-300 ${
              index < currentStep ? 'bg-[#335368]' : 'bg-[#e4ebf1]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
