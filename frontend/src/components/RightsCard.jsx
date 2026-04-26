import React from 'react';
import { ExternalLink } from 'lucide-react';

const RightsCard = () => {
  const rights = [
    "Confidentiality and anonymity",
    "Fair treatment by authorities",
    "Access to legal counsel",
    "Support services regardless of status"
  ];

  return (
    <div className="bg-[#e6eff5] rounded-[1.5rem] p-8 h-full flex flex-col">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Know Your Rights</h3>
      
      <div className="flex-grow">
        <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
          Every individual has the right to a life free from violence and harassment. Submitting this report is a protected act under privacy laws.
        </p>
        
        <p className="text-slate-700 font-medium text-[15px] mb-4">You have the right to:</p>
        
        <ul className="space-y-3 mb-8">
          {rights.map((right, index) => (
            <li key={index} className="text-slate-600 text-[15px] pl-4 border-l-2 border-slate-300">
              {right}
            </li>
          ))}
        </ul>
      </div>

      <a 
        href="#" 
        className="inline-flex items-center gap-2 text-blue-700 font-semibold text-[15px] hover:underline transition-all"
        onClick={(e) => e.preventDefault()}
      >
        Read full legal guide
        <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default RightsCard;
