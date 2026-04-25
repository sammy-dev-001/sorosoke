import React from 'react';
import { ChevronDown } from 'lucide-react';

const SelectField = ({ label, value, onChange, name, id, options = [] }) => {
  return (
    <div className="flex flex-col gap-2 w-full relative">
      <label htmlFor={id} className="text-[#335368] font-medium text-[15px]">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-[#f2f6f9] border border-slate-200 rounded-xl p-3.5 pr-10 text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#335368]/20 focus:border-[#335368]/40 transition-all"
        >
          <option value="" disabled>Select a category</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
          <ChevronDown size={20} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
