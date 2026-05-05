import React from 'react';
import { ShieldCheck, Eye, Home, ArrowRight } from 'lucide-react';
import NextStepsCard from '../components/NextStepsCard';
import RightsCard from '../components/RightsCard';
import PrivacyAlert from '../components/PrivacyAlert';

const ReportSuccess = ({ onGoToDashboard, onViewCases }) => {
  return (
    <main className="flex-grow flex flex-col items-center w-full bg-slate-50/30">
      <div className="w-full max-w-5xl px-6 sm:px-10 py-16">
        
        {/* Top Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-8 shadow-sm">
            <ShieldCheck size={40} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Report Securely Filed.
          </h1>
          <p className="text-slate-500 text-base md:text-xl max-w-3xl leading-relaxed">
            You have taken a courageous step. We have automatically matched your case with specialized organizations. Visit your <span className="font-bold text-slate-900">Support Journey</span> on the dashboard to begin the escalation process.
          </p>
        </div>

        {/* Middle Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <NextStepsCard />
         <RightsCard category={localStorage.getItem('lastReportedCategory') || 'other'} />
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
              onClick={onGoToDashboard}
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              Start Support Journey
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={onViewCases}
              className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2"
            >
              <Eye size={20} />
              View Other Cases
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ReportSuccess;
