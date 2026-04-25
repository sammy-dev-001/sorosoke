import React, { useRef } from 'react';

const FileUploadCard = ({ title, subtitle, icon: Icon, buttonText, onFileSelect, accept }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(Array.from(e.target.files));
      // Reset input value so same file can be uploaded again if removed
      e.target.value = '';
    }
  };

  return (
    <div 
      className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer hover:border-[#335368] hover:shadow-sm transition-all group"
      onClick={handleClick}
    >
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={accept}
        multiple
      />
      <div className="w-14 h-14 bg-[#f0f7ff] rounded-full flex items-center justify-center text-[#335368] mb-5 group-hover:bg-[#e0efff] transition-colors">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-[#1e293b] mb-1.5">{title}</h3>
      <p className="text-[14px] text-slate-500 mb-6 px-2">{subtitle}</p>
      
      <button 
        type="button"
        className="bg-[#e8f1f8] text-[#335368] font-medium px-6 py-2.5 rounded-full text-[14px] hover:bg-[#dce9f4] transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FileUploadCard;
