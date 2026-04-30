import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import FileUploadCard from '../components/FileUploadCard';
import DragDropZone from '../components/DragDropZone';
import PrivacyAlert from '../components/PrivacyAlert';
import { Image as ImageIcon, Mic, ShieldCheck, History, EyeOff, AlertCircle, X, FileText } from 'lucide-react';
import { useReport } from '../context/ReportContext';

const ReportStep4 = ({ onNavigateHome, onBack, onSuccess }) => {
  const { reportData, updateReportData, submitReport, isLoading, error, success } = useReport();

  const handleFileSelect = (newFiles) => {
    updateReportData({ files: [...(reportData.files || []), ...newFiles] });
  };

  const removeFile = (indexToRemove) => {
    updateReportData({
      files: reportData.files.filter((_, index) => index !== indexToRemove)
    });
  };

  const renderFilePreview = (file, index) => {
    const isImage = file.type?.startsWith('image/');
    const isAudio = file.type?.startsWith('audio/');
    const fileUrl = file instanceof File ? URL.createObjectURL(file) : (file.url || file);

    return (
      <div key={index} className="flex items-start justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
        <div className="flex flex-col gap-2 w-full overflow-hidden mr-2">
          <div className="flex items-center gap-3">
            {isImage ? (
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                <img src={fileUrl} alt={file.name || 'Image'} className="w-full h-full object-cover" />
              </div>
            ) : isAudio ? (
              <div className="w-10 h-10 rounded-lg shrink-0 bg-indigo-50 text-indigo-500 flex items-center justify-center border border-indigo-100">
                <Mic size={20} />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-lg shrink-0 bg-slate-100 text-slate-500 flex items-center justify-center border border-slate-200">
                <FileText size={20} />
              </div>
            )}
            
            <div className="flex flex-col overflow-hidden">
              <span className="text-[14px] font-medium text-slate-700 truncate">{file.name || `File ${index + 1}`}</span>
              {file.size && <span className="text-[12px] text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>}
            </div>
          </div>
          
          {isImage && (
             <div className="mt-2 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200 max-h-[200px] flex items-center justify-center">
               <img src={fileUrl} alt={file.name || 'Preview'} className="max-h-[200px] object-contain" />
             </div>
          )}
          {isAudio && (
             <audio controls src={fileUrl} className="h-10 mt-2 w-full max-w-[300px]" />
          )}
        </div>
        
        <button 
          type="button" 
          onClick={() => removeFile(index)}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors shrink-0"
          aria-label="Remove file"
        >
          <X size={18} />
        </button>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitReport();
  };

  // Handle successful submission redirect
  React.useEffect(() => {
    if (success) {
      if (onSuccess) onSuccess();
    }
  }, [success, onSuccess]);

  return (
    <main className="flex-grow flex flex-col w-full">
      <div className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10">
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

          {error && (
            <div className="mt-8 bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-3 border border-red-100">
              <AlertCircle size={20} className="shrink-0" />
              <p className="font-medium text-[14px]">{error}</p>
            </div>
          )}

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

          {reportData.files && reportData.files.length > 0 && (
            <div className="mb-12">
              <h3 className="text-[16px] font-semibold text-[#1e293b] mb-4">Attached Files ({reportData.files.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reportData.files.map((file, index) => renderFilePreview(file, index))}
              </div>
            </div>
          )}

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
      </div>

      {/* Action Bar - FULL WIDTH */}
      <div className="w-full border-t border-slate-200 bg-white/50 backdrop-blur-sm py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
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
              className="bg-white border border-[#cbd5e1] text-[#335368] font-medium py-2.5 px-8 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
            >
              Back
            </button>
            <button 
              onClick={handleSubmit}
              disabled={isLoading}
              type="button"
              className="bg-[#335368] hover:bg-[#2c485a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-2.5 px-8 rounded-full transition-colors shadow-md flex items-center justify-center min-w-[160px]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Submit Report"
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportStep4;
