import React, { useState } from 'react';
import Hero from '../components/Hero';
import ActionCard from '../components/ActionCard';
import TrustBanner from '../components/TrustBanner';
import SupportJourney from '../components/cases/SupportJourney';
import { useAuth } from '../context/AuthContext';

const Dashboard = ({ onReportClick, onExploreClick }) => {
  const { user } = useAuth();
  // For demo purposes, we'll simulate an active journey if the user is logged in
  const [hasActiveJourney, setHasActiveJourney] = useState(!!user);

  return (
    <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-12 pb-24 w-full bg-slate-50/30">
      <div className="w-full max-w-6xl">
        <Hero />
        
        {user && hasActiveJourney && (
          <div className="mt-14 animate-fade-in-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-bold text-slate-900">Your Active Support Journey</h2>
              <button 
                onClick={() => setHasActiveJourney(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-medium"
              >
                Dismiss
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-[20px] font-bold text-slate-900 mb-2">Case #2841: LASTMA Extortion</h3>
                    <p className="text-slate-500 text-[15px] mb-6">Last updated 2 days ago</p>
                    <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-[13px] font-bold">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      AWAITING NGO RESPONSE
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <button 
                      onClick={onExploreClick}
                      className="w-full md:w-auto bg-[#335368] text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
                    >
                      View Progress
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <SupportJourney 
                  step={3} 
                  daysWaiting={2} 
                  ngoName="Citizen Rights Initiative" 
                  onRetry={() => console.log("Retrying...")}
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          <ActionCard
            title="Report an Incident"
            description="Securely share your experience. Our encrypted system ensures your report reaches the right hands without compromise."
            icon="megaphone"
            iconBg="bg-[#fad4d2]"
            iconColor="text-[#e85d5d]"
            linkText="Report Now"
            onClick={onReportClick}
          />
          <ActionCard
            title="View Cases"
            description="See similar experiences shared by others. You are not alone."
            icon="users"
            iconBg="bg-slate-100"
            iconColor="text-[#335368]"
            linkText="View Cases"
            onClick={onExploreClick}
          />
        </div>
        
        <div className="mt-20">
          <TrustBanner />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
