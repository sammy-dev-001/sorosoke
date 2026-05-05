import React from 'react';
import { ShieldCheck, Eye, Home } from 'lucide-react';
import NextStepsCard from '../components/NextStepsCard';
import RightsCard from '../components/RightsCard';
import PrivacyAlert from '../components/PrivacyAlert';

const ReportSuccess = ({ onGoToDashboard, onViewCases }) => {
  return (
    <main className="flex-grow flex flex-col items-center w-full bg-slate-50/30">
      <div className="w-full max-w-5xl px-6 sm:px-10 py-16">
        
        {/* Top Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-8 shadow-sm">
            <ShieldCheck size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Your report has been securely submitted.
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
            You have taken a courageous step. Remember, you are not alone. Our platform is here to support you in the journey ahead.
          </p>
        </div>

        {/* Middle Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <NextStepsCard />
          <RightsCard />
        </div>

        {/* Bottom Section: Action Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-200">
          <div className="flex-1 max-w-2xl">
            <PrivacyAlert 
              hideTitle
              message="Your data is encrypted and accessible only by authorized response coordinators. You can update or retract your report at any time from your profile."
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button 
              onClick={onViewCases}
              className="bg-[#335368] hover:bg-[#2c485a] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md flex items-center gap-2"
            >
              <Eye size={18} />
              View Cases
            </button>
            <button 
              onClick={onGoToDashboard}
              className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-sm flex items-center gap-2"
            >
              <Home size={18} />
              Go to Dashboard
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ReportSuccess;
