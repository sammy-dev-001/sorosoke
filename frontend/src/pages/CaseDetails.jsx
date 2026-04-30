import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Share2, Loader2, AlertCircle } from 'lucide-react';
import CaseProgressBox from '../components/cases/CaseProgressBox';
import ExperienceCard from '../components/cases/ExperienceCard';
import NGOSupportCard from '../components/cases/NGOSupportCard';
import * as api from '../services/api';

const CaseDetails = () => {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      setLoading(true);
      try {
        const data = await api.getCaseById(id);
        setCaseData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch case details:", err);
        setError("Unable to load case details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCase();
  }, [id]);

  if (loading) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center py-20 text-slate-400">
        <Loader2 className="w-10 h-10 animate-spin mb-4" />
        <p className="text-[15px] font-medium">Loading case details...</p>
      </div>
    );
  }

  if (error || !caseData) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-6">
        <div className="bg-red-50 border border-red-100 text-red-700 px-8 py-6 rounded-[2rem] max-w-xl text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h2 className="text-[20px] font-bold mb-2">Oops! Something went wrong</h2>
          <p className="text-[15px] mb-6">{error || "Case not found."}</p>
          <Link to="/cases" className="text-[#335368] font-bold underline">Back to Cases Explorer</Link>
        </div>
      </div>
    );
  }

  const categoryLabels = {
    'police_brutality': 'Police Brutality',
    'sexual_harassment': 'Sexual Harassment',
    'lastma_extortion': 'LASTMA Extortion',
    'landlord_dispute': 'Landlord Dispute',
    'corruption': 'Corruption',
    'workplace_abuse': 'Workplace Abuse',
    'other': 'Other'
  };

  return (
    <main className="flex-grow flex flex-col items-center w-full bg-white">
      <div className="w-full max-w-7xl px-6 sm:px-10 py-12 mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2">
            
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#335368] text-white px-4 py-1.5 rounded-lg text-[13px] font-semibold">
                {categoryLabels[caseData.category] || caseData.category}
              </span>
              <div className="flex items-center gap-1.5 text-slate-400 text-[14px]">
                <MapPin size={16} />
                <span>{caseData.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#e8f5e9] text-[#2e7d32] px-3 py-1 rounded-full text-[13px] font-bold">
                <span className="w-2 h-2 bg-[#2e7d32] rounded-full"></span>
                {caseData.status || "Growing"}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[36px] md:text-[44px] font-bold text-[#1e293b] leading-tight mb-10">
              {caseData.title}
            </h1>

            {/* Progress Box */}
            <CaseProgressBox 
              count={caseData.reportsCount || 0} 
              progressPercent={caseData.progress || 0} 
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link 
                to={`/cases/${id}/add-experience`}
                className="bg-[#335368] hover:bg-[#2c485a] text-white px-10 py-4 rounded-xl font-bold text-[16px] transition-all shadow-md active:scale-95 text-center"
              >
                This happened to me
              </Link>
              <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-xl font-bold text-[16px] flex items-center gap-2 transition-all">
                <Share2 size={20} />
                Share Case
              </button>
            </div>

            {/* Case Description */}
            <div className="mb-16">
              <h2 className="text-[22px] font-bold text-slate-900 mb-6">Case Description</h2>
              <div className="space-y-6">
                {Array.isArray(caseData.description) ? (
                  caseData.description.map((p, i) => (
                    <p key={i} className="text-slate-500 text-[16px] leading-relaxed">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-500 text-[16px] leading-relaxed">{caseData.description}</p>
                )}
              </div>
            </div>

            {/* Shared Experiences */}
            {caseData.experiences && caseData.experiences.length > 0 && (
              <div>
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-[22px] font-bold text-slate-900">Shared Experiences</h2>
                  <span className="text-slate-400 text-[14px] font-medium mb-1">Showing {caseData.experiences.length} stories</span>
                </div>
                <hr className="border-slate-100 mb-8" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {caseData.experiences.map((exp) => (
                    <ExperienceCard 
                      key={exp.id || exp._id}
                      date={new Date(exp.createdAt).toLocaleDateString()}
                      quote={exp.content}
                    />
                  ))}
                </div>

                <button className="w-full border-2 border-dashed border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-600 py-4 rounded-2xl font-bold text-[15px] transition-all">
                  View all {caseData.reportsCount || caseData.experiences.length} experiences
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <NGOSupportCard category={caseData.category} />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CaseDetails;
