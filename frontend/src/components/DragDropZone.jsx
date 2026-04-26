import React, { useRef, useState } from 'react';
import { FileUp } from 'lucide-react';

const DragDropZone = ({ onFilesDrop, title, subtitle, icon: Icon = FileUp, accept }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesDrop(Array.from(e.target.files));
      e.target.value = '';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesDrop(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div 
      className={`
        border-dashed border-[2px] rounded-2xl py-10 px-6 flex flex-col items-center text-center cursor-pointer transition-colors
        ${isDragging ? 'border-[#335368] bg-[#f0f7ff]' : 'border-slate-300 hover:border-slate-400 bg-transparent'}
      `}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept={accept}
      />
      <div className="text-slate-800 mb-4 bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <h3 className="text-[15px] font-medium text-slate-600 mb-1">
        {title || "Click to upload or drag documents, photos, or recordings"}
      </h3>
      {subtitle && (
        <p className="text-[13px] text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default DragDropZone;
