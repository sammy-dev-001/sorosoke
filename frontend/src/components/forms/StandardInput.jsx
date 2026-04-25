import React from 'react';

const StandardInput = ({ label, placeholder, value, onChange, name, id, type = "text", rightIcon: RightIcon, onRightIconClick }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-[#335368] font-medium text-[14px]">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-[#f8fafc] border border-slate-200 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#335368]/20 focus:border-[#335368]/40 transition-all ${RightIcon ? 'pr-12' : ''}`}
        />
        {RightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute right-3 p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100"
          >
            <RightIcon size={18} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default StandardInput;
