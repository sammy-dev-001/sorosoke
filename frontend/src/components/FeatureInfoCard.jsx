import React from 'react';

const FeatureInfoCard = ({ icon: Icon, title, description, variant = 'default' }) => {
  const isOutlined = variant === 'outlined';

  return (
    <div className={`rounded-2xl p-6 flex flex-col gap-3 ${
      isOutlined 
        ? 'bg-white border border-slate-200 shadow-sm' 
        : 'bg-[#f2f6f9]'
    }`}>
      <div className="flex items-center gap-3 text-slate-800">
        {isOutlined ? (
          <div className="bg-[#e2f3f0] w-9 h-9 rounded-full flex items-center justify-center text-[#2f6a61]">
            <Icon size={18} strokeWidth={2.5} />
          </div>
        ) : (
          <Icon size={20} strokeWidth={2.5} className="text-slate-700" />
        )}
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className={`text-sm leading-relaxed max-w-[90%] ${
        isOutlined ? 'text-slate-500' : 'text-slate-600'
      }`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureInfoCard;
