import React from 'react';
import { Info } from 'lucide-react';

const PrivacyAlert = ({ 
  title = "Privacy Assurance", 
  message = "Your information is encrypted. You can choose to remain anonymous in the final step.",
  hideTitle = false,
  icon: Icon = Info,
  iconStyle = "solid"
}) => {
  return (
    <div className="bg-[#d0f0eb] rounded-xl p-4 flex items-start gap-3 my-8">
      <div className="mt-0.5 flex-shrink-0">
        {iconStyle === "solid" && !hideTitle ? (
          <div className="bg-[#415a72] rounded-full w-6 h-6 flex items-center justify-center text-white">
            <Icon size={14} strokeWidth={3} />
          </div>
        ) : (
          <Icon size={20} strokeWidth={2} className="text-[#415a72]" />
        )}
      </div>
      <div className="flex-1">
        {!hideTitle && <h4 className="text-[15px] text-[#2c4051] font-medium mb-0.5">{title}</h4>}
        <p className="text-[14px] text-[#415a72] leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
};

export default PrivacyAlert;
