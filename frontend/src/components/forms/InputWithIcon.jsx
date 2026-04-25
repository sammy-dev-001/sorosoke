import React from 'react';

const InputWithIcon = ({ label, placeholder, value, onChange, name, id, leftIcon: LeftIcon, rightIcon: RightIcon, type = "text", topRightLabel }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-[#335368] font-medium text-[15px]">
          {label}
        </label>
        {topRightLabel && (
          <span className="text-sm font-semibold text-[#335368] hover:text-[#1e3443] cursor-pointer transition-colors">
            {topRightLabel}
          </span>
        )}
      </div>
      <div className="relative flex items-center">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-600">
            <LeftIcon size={18} strokeWidth={2.5} />
          </div>
        )}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-[#f2f6f9] border border-slate-200 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#335368]/20 focus:border-[#335368]/40 transition-all ${
            LeftIcon ? 'pl-10' : ''
          } ${RightIcon ? 'pr-10' : ''}`}
        />
        {RightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-600">
            <RightIcon size={18} strokeWidth={2.5} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWithIcon;
