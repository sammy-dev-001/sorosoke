import React, { useRef, useState } from 'react';
import { FileUp } from 'lucide-react';

const DragDropZone = ({ onFilesDrop }) => {
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
        border-dashed border-[2px] rounded-2xl py-14 px-6 flex flex-col items-center text-center cursor-pointer transition-colors
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
        accept=".pdf,.docx,.zip"
      />
      <div className="text-[#64748b] mb-4">
        <FileUp size={28} strokeWidth={2} />
      </div>
      <h3 className="text-[16px] font-medium text-[#334155] mb-1.5">
        Drag and drop any other supporting documents here
      </h3>
      <p className="text-[13px] text-slate-500">
        PDF, DOCX, or ZIP files accepted
      </p>
    </div>
  );
};

export default DragDropZone;
