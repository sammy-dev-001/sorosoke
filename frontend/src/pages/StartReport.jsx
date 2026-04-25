import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import StartReportCard from '../components/StartReportCard';
import FeatureInfoCard from '../components/FeatureInfoCard';
import { Lock, SaveAll } from 'lucide-react';

const StartReport = ({ onNavigateHome, onStartReport }) => {
  const handleStartReport = () => {
    console.log("Starting report... moving to step 2");
    if (onStartReport) {
      onStartReport();
    }
  };

  const handleLearnPrivacy = () => {
    // TODO: Connect to privacy modal or page
    console.log("Opening privacy info...");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] font-sans selection:bg-teal-100">
      <Header onHomeClick={onNavigateHome} />
      
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

      <Footer />
    </div>
  );
};

export default StartReport;
