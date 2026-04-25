import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import SelectionCard from '../components/SelectionCard';
import PrivacyAlert from '../components/PrivacyAlert';
import { EyeOff, User } from 'lucide-react';

const ReportStep3 = ({ onNavigateHome, onNext, onBack }) => {
  const [identityChoice, setIdentityChoice] = useState('identified');

  const handleContinue = () => {
    if (onNext) {
      onNext({ identity: identityChoice });
    } else {
      console.log('Proceeding with identity:', identityChoice);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] font-sans">
      <Header onHomeClick={onNavigateHome} />
      
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10 pb-24 w-full">
        <div className="w-full max-w-2xl mt-4">
          <ProgressBar 
            currentStep={3} 
            totalSteps={4} 
            stepLabel="Privacy Selection" 
          />
          
          <div className="mt-14 mb-10">
            <h1 className="text-[28px] font-medium text-[#1e293b] mb-3">
              Identity Selection
            </h1>
            <p className="text-[#64748b] text-[15px] leading-relaxed">
              Your identity helps with follow-up support, but staying anonymous is completely okay.
            </p>
          </div>

          <div className="space-y-4 mb-6" role="radiogroup" aria-label="Identity Selection">
            <SelectionCard
              title="Stay Anonymous"
              description="Your identity will be hidden. You will receive a secure tracking code for updates."
              icon={EyeOff}
              isSelected={identityChoice === 'anonymous'}
              onClick={() => setIdentityChoice('anonymous')}
            />
            
            <SelectionCard
              title="Share My Identity"
              description="Your profile details will be shared with the support team for personalized assistance."
              icon={User}
              isSelected={identityChoice === 'identified'}
              onClick={() => setIdentityChoice('identified')}
            />
          </div>

          <PrivacyAlert 
            hideTitle 
            message="Your choice is final for this specific report to maintain data integrity and security." 
          />

          <div className="mt-14 flex flex-col items-center gap-4 w-full">
            <button 
              onClick={handleContinue}
              className="w-full sm:w-[420px] bg-[#335368] hover:bg-[#2c485a] text-white py-3.5 px-6 rounded-full font-medium transition-colors"
            >
              Continue
            </button>
            <button 
              onClick={onBack}
              className="text-[#335368] hover:text-[#1e3443] font-medium py-2 px-6 transition-colors"
            >
              Back to previous step
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportStep3;
