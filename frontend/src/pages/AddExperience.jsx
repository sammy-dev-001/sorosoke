import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Send, UploadCloud } from 'lucide-react';
import SelectionCard from '../components/SelectionCard';
import DragDropZone from '../components/DragDropZone';
import PrivacyAlert from '../components/PrivacyAlert';
import { createComplaint } from '../services/api';

const AddExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    story: '',
    files: [],
    privacy: 'anonymous'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFilesDrop = (newFiles) => {
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...newFiles]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Use FormData for multipart/form-data support
      const submitData = new FormData();
      submitData.append('caseId', id);
      submitData.append('content', formData.story);
      submitData.append('privacy', formData.privacy);
      
      formData.files.forEach((file) => {
        submitData.append('attachments', file);
      });

      await createComplaint(submitData);
      
      setIsLoading(false);
      navigate(`/cases/${id}/success`);
    } catch (err) {
      console.error("Submission failed:", err);
      setError(err.response?.data?.message || err.message || "Failed to add experience.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Minimal Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="ml-4 flex items-baseline gap-1">
          <span className="font-bold text-slate-900 text-lg tracking-tight">SpeakUp</span>
          <span className="font-medium text-slate-900 text-lg tracking-tight">(Sọrọsókè)</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center py-12 px-6">
        <div className="w-full max-w-3xl">
          {/* Typography */}
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-[32px] font-bold text-slate-900 mb-2">Add Your Experience</h1>
            <p className="text-slate-500 text-[16px]">Your voice helps others feel less alone.</p>
          </div>

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 px-6 py-4 rounded-2xl mb-8 text-[14px] flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
              {error}
            </div>
          )}

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 mb-8">
            <div className="space-y-10">
              
              {/* Field 1: Story */}
              <div>
                <label htmlFor="story" className="block text-[15px] font-bold text-slate-800 mb-4">
                  What happened?
                </label>
                <textarea 
                  id="story"
                  required
                  value={formData.story}
                  onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                  placeholder="Share your story in your own words..."
                  className="w-full min-h-[220px] bg-slate-50 border border-slate-100 rounded-2xl p-6 text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all resize-none"
                />
              </div>

              {/* Field 2: Evidence */}
              <div>
                <label className="block text-[15px] font-bold text-slate-800 mb-4">
                  Add evidence (optional)
                </label>
                <DragDropZone 
                  onFilesDrop={handleFilesDrop}
                  icon={UploadCloud}
                  title="Click to upload or drag documents, photos, or recordings"
                />
                {formData.files.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {formData.files.map((file, i) => (
                      <div key={i} className="bg-slate-100 px-3 py-1.5 rounded-lg text-[13px] text-slate-600 border border-slate-200">
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Field 3: Privacy */}
              <div>
                <label className="block text-[15px] font-bold text-slate-800 mb-4">
                  Privacy Choice
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectionCard 
                    title="Stay Anonymous"
                    description="Your name will not be visible to anyone."
                    isSelected={formData.privacy === 'anonymous'}
                    onClick={() => setFormData(prev => ({ ...prev, privacy: 'anonymous' }))}
                  />
                  <SelectionCard 
                    title="Share identity"
                    description="Visible to case managers and other survivors."
                    isSelected={formData.privacy === 'public'}
                    onClick={() => setFormData(prev => ({ ...prev, privacy: 'public' }))}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#335368] hover:bg-[#2c485a] disabled:opacity-70 text-white py-4 rounded-xl font-bold text-[16px] flex items-center justify-center gap-3 transition-all shadow-md active:scale-95"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Submit
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Alert */}
          <PrivacyAlert 
            message="SpeakUp uses end-to-end encryption. Your information is safe and will only be used for community advocacy and empowerment as per your privacy settings."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center">
        <p className="text-[13px] text-slate-400">
          © 2024 SpeakUp (Sọrọsókè) Community Empowerment Platform
        </p>
      </footer>
    </div>
  );
};

export default AddExperience;
