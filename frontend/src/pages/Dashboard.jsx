import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ActionCard from '../components/ActionCard';
import TrustBanner from '../components/TrustBanner';
import SupportJourney from '../components/cases/SupportJourney';
import { useAuth } from '../context/AuthContext';
import * as api from '../services/api';
import { Loader2, Plus, MessageCircle, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onReportClick, onExploreClick }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userCases, setUserCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserCases = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const data = await api.getUserCases();
        setUserCases(data);
      } catch (err) {
        console.error("Failed to fetch user cases:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCases();
  }, [user]);

  return (
    <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-12 pb-24 w-full bg-slate-50/30">
      <div className="w-full max-w-6xl">
        <Hero />
        
        {user && (
          <div className="mt-14 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-[28px] font-bold text-slate-900 tracking-tight">Your Support Journey</h2>
                <p className="text-slate-500 text-[16px] mt-1">Guide your cases from report to resolution.</p>
              </div>
              <button 
                onClick={onReportClick}
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-slate-900/10"
              >
                <Plus size={20} />
                New Report
              </button>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20 text-slate-400 bg-white rounded-3xl border border-slate-100">
                <Loader2 className="w-8 h-8 animate-spin mr-3" />
                <p className="font-medium">Updating your status...</p>
              </div>
            ) : userCases.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {userCases.map((c, index) => {
                    // Demo logic: odd cases are "Pending Action", even are "Awaiting Response"
                    const isPendingAction = index % 2 === 0;
                    
                    return (
                      <div 
                        key={c.id || c._id || index} 
                        className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col md:flex-row gap-8 items-center hover:border-teal-100 transition-all group"
                      >
                        <div className="flex-grow text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider">
                              {c.category?.replace('_', ' ') || 'Incident'}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400 text-[13px] font-medium">{c.location}</span>
                          </div>
                          <h3 className="text-[22px] font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                            {c.title}
                          </h3>
                          
                          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                            {c.status === 'document_generated' ? (
                              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[13px] font-bold border border-indigo-100">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                AI LEGAL DRAFT READY
                              </div>
                            ) : c.status === 'threshold_reached' ? (
                              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-[13px] font-bold border border-teal-100">
                                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                ACTION THRESHOLD REACHED
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-[13px] font-bold border border-amber-100">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                BUILDING EVIDENCE ({c.complaintCount || 0})
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="w-full md:w-auto flex flex-col gap-3">
                          <button 
                            onClick={() => navigate(`/cases/${c.id || c._id}`)}
                            className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
                          >
                            {c.status === 'document_generated' ? "View Legal Draft" : "View Case"}
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="lg:col-span-1">
                  {/* Show support journey for the most recent case */}
                  <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <h4 className="text-[18px] font-bold text-slate-900 mb-6">Support Status</h4>
                    <SupportJourney 
                      step={3} 
                      daysWaiting={2} 
                      ngoName="Citizen Rights Initiative" 
                      onRetry={() => navigate('/cases')}
                    />
                    
                    <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[14px] text-slate-600 leading-relaxed italic">
                        "We guide you through the escalation process. If an organization doesn't respond, we'll help you find the next best option."
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                      <h4 className="text-[18px] font-bold mb-4">Community Pattern</h4>
                      <div className="text-[48px] font-black text-teal-400 mb-2 leading-none">High</div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Similar cases have been reported by 12 others in {userCases[0]?.location || 'this region'}. 
                      </p>
                      <button 
                        onClick={onExploreClick}
                        className="w-full py-3.5 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all text-sm backdrop-blur-md"
                      >
                        Explore Patterns
                      </button>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-20 px-10 text-center bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                  <Plus size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No active reports found</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-10 leading-relaxed">
                  Start your journey toward accountability by documenting and reporting an incident securely.
                </p>
                <button 
                  onClick={onReportClick}
                  className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-xl shadow-slate-900/10"
                >
                  File Your First Report
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          <ActionCard
            title="File New Report"
            description="Securely share your experience. Our encrypted system ensures your report reaches the right hands without compromise."
            icon="megaphone"
            iconBg="bg-[#fad4d2]"
            iconColor="text-[#e85d5d]"
            linkText="Start Now"
            onClick={onReportClick}
          />
          <ActionCard
            title="Cases Explorer"
            description="See similar experiences shared by others. You are not alone in this journey."
            icon="users"
            iconBg="bg-slate-100"
            iconColor="text-[#335368]"
            linkText="Explore Now"
            onClick={onExploreClick}
          />
        </div>
        
        <div className="mt-24">
          <TrustBanner />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;


