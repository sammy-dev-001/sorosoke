import React from 'react';

const TextAreaField = ({ label, placeholder, value, onChange, name, id }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-[#335368] font-medium text-[15px]">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full min-h-[140px] bg-[#f2f6f9] border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#335368]/20 focus:border-[#335368]/40 transition-all resize-y"
      />
    </div>
  );
};

export default TextAreaField;
