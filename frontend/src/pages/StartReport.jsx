import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import StartReportCard from '../components/StartReportCard';
import FeatureInfoCard from '../components/FeatureInfoCard';
import { Lock, SaveAll } from 'lucide-react';
import { useReport } from '../context/ReportContext';

const StartReport = ({ onNavigateHome, onStartReport }) => {
  const { updateReportData } = useReport();

  const handleStartReport = () => {
    // We can set default or specific initial data here if needed
    updateReportData({ isUrgent: false }); // Default for now
    if (onStartReport) {
      onStartReport();
    }
  };

  const handleLearnPrivacy = () => {
    // TODO: Connect to privacy modal or page
    console.log("Opening privacy info...");
  };

  return (
    <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10 pb-24 w-full">
      <div className="w-full max-w-3xl mt-4">
        <ProgressBar 
          currentStep={1} 
          totalSteps={4} 
          stepLabel="Getting Started" 
        />
        
     

        <StartReportCard 
          onStartReport={handleStartReport}
          onLearnPrivacy={handleLearnPrivacy}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FeatureInfoCard 
            icon={Lock}
            title="Secure & Private"
            description="Your data is encrypted and handled with the highest security standards."
          />
          <FeatureInfoCard 
            icon={SaveAll}
            title="Save as you go"
            description="Exit at any time. Your progress is automatically saved to your account."
          />
        </div>
      </div>
    </main>
  );
};

export default StartReport;
