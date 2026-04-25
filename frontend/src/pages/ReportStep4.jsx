import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import FileUploadCard from '../components/FileUploadCard';
import DragDropZone from '../components/DragDropZone';
import PrivacyAlert from '../components/PrivacyAlert';
import { Image as ImageIcon, Mic, ShieldCheck, History, EyeOff } from 'lucide-react';

const ReportStep4 = ({ onNavigateHome, onBack }) => {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (newFiles) => {
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ready to send FormData to API", files);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] font-sans">
      <Header onHomeClick={onNavigateHome} />
      
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10 w-full">
        <div className="w-full max-w-4xl mt-4">
          <ProgressBar 
            currentStep={4} 
            totalSteps={4} 
            stepLabel="Evidence Submission"
          />
          
          <div className="mt-14 mb-8">
            <h1 className="text-[28px] font-medium text-[#1e293b] mb-3">
              Add Supporting Files
            </h1>
            <p className="text-[#64748b] text-[15px] leading-relaxed max-w-2xl">
              Providing evidence helps us verify and act on your report faster. All files are encrypted and handled with the highest confidentiality.
            </p>
          </div>

          <PrivacyAlert 
            title="End-to-End Encrypted Upload"
            message="Your files are anonymized before being shared with the review committee." 
            icon={ShieldCheck}
            iconStyle="outline"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
            <FileUploadCard
              title="Upload Images"
              subtitle="Attach photos of documents, logs, or relevant visuals (Max 10MB per file)."
              icon={ImageIcon}
              buttonText="Select Images"
              onFileSelect={handleFileSelect}
              accept="image/*"
            />
            <FileUploadCard
              title="Audio Recordings"
              subtitle="Upload voice memos or recorded testimonies (Supported: MP3, WAV, M4A)."
              icon={Mic}
              buttonText="Select Audio"
              onFileSelect={handleFileSelect}
              accept="audio/*"
            />
          </div>

          <div className="mb-12">
            <DragDropZone onFilesDrop={handleFileSelect} />
          </div>

          {/* Security Features */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3 text-[#475569]">
              <History size={20} strokeWidth={2} />
              <span className="text-[14px] font-medium">Data is auto-deleted from local cache after upload</span>
            </div>
            <div className="flex items-center gap-3 text-[#475569]">
              <EyeOff size={20} strokeWidth={2} />
              <span className="text-[14px] font-medium">Anonymous metadata stripping enabled</span>
            </div>
          </div>
        </div>
      </main>

      {/* Action Bar */}
      <div className="w-full border-t border-slate-200 bg-white py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            type="button"
            className="text-[#64748b] hover:text-[#334155] font-medium text-[15px] transition-colors"
          >
            Skip for now
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              type="button"
              className="bg-white border border-[#cbd5e1] text-[#335368] font-medium py-2.5 px-8 rounded-full hover:bg-slate-50 transition-colors"
            >
              Back
            </button>
            <button 
              onClick={handleSubmit}
              type="button"
              className="bg-[#335368] hover:bg-[#2c485a] text-white font-medium py-2.5 px-8 rounded-full transition-colors shadow-sm"
            >
              Submit Report
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReportStep4;
