import React from 'react';
import { Shield, Users, Target, Heart, Zap, CheckCircle2, MessageSquare, Info } from 'lucide-react';
import FeatureInfoCard from '../components/FeatureInfoCard';

const About = ({ onReportClick, onExploreClick }) => {
  return (
    <main className="flex-grow flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8fafc] pt-20 pb-16 px-6 sm:px-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-[#f1f5f9] text-[#335368] px-4 py-1.5 rounded-full text-[13px] font-bold mb-8 animate-fade-in">
          <Info size={16} />
          OUR STORY
        </div>
        <h1 className="text-[42px] md:text-[56px] font-bold text-[#1e293b] leading-[1.1] mb-6 max-w-4xl tracking-tight">
          Amplifying Truth, <span className="text-[#335368]">Empowering Communities.</span>
        </h1>
        <p className="text-[#64748b] text-[18px] md:text-[20px] max-w-2xl leading-relaxed mb-10">
          SpeakUp (Sọrọsókè) is a citizen-driven platform designed to break the silence on injustice and build a bridge between victims and accountability.
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-7xl px-6 sm:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-[32px] font-bold text-[#1e293b] mb-6">Our Mission</h2>
          <p className="text-[#64748b] text-[16px] leading-relaxed mb-6">
            In many societies, voices are often silenced by bureaucracy, fear, or lack of support. SpeakUp was born out of the need for a safe, transparent, and action-oriented space where citizens can report incidents of injustice without fear of retaliation.
          </p>
          <p className="text-[#64748b] text-[16px] leading-relaxed mb-8">
            Whether it's police brutality, workplace abuse, or civic corruption, we provide the tools to document, share, and seek support for every case. Our goal is to create a data-driven map of accountability that demands change.
          </p>
          <div className="space-y-4">
            {[
              "End-to-end encrypted reporting systems",
              "Direct connection to verified NGO support",
              "Community-driven experience sharing",
              "Data-backed advocacy for systemic reform"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-[#334155] font-medium text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-tr from-[#335368] to-[#4b7a99] rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center p-12 relative z-10">
            <Shield size={200} className="text-white/20 absolute -bottom-10 -right-10 rotate-12" />
            <div className="text-white text-center">
              <Shield size={64} className="mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Security First</h3>
              <p className="text-white/80 leading-relaxed">
                Your safety is our top priority. Every byte of data you share is protected by enterprise-grade encryption.
              </p>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl -z-0"></div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="w-full bg-[#f8fafc] py-24 px-6 sm:px-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#1e293b] mb-4">Our Core Pillars</h2>
          <p className="text-[#64748b] max-w-xl mx-auto">
            We built SpeakUp on three foundational principles that guide everything we do.
          </p>
        </div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#335368] flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-[19px] font-bold text-[#1e293b] mb-4">Integrity</h3>
            <p className="text-[#64748b] text-[15px] leading-relaxed">
              We maintain absolute data integrity. Once a report is submitted, it becomes a permanent record of truth in our system.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-[19px] font-bold text-[#1e293b] mb-4">Community</h3>
            <p className="text-[#64748b] text-[15px] leading-relaxed">
              No one should suffer in silence. Our platform connects survivors to show the scale of systemic issues.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-[19px] font-bold text-[#1e293b] mb-4">Action</h3>
            <p className="text-[#64748b] text-[15px] leading-relaxed">
              Awareness is just the start. We work with legal and social partners to turn reports into real-world outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl px-6 sm:px-10 py-24">
        <div className="bg-[#1e293b] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-6 relative z-10">
            Be Part of the Change.
          </h2>
          <p className="text-slate-400 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-10 relative z-10">
            Your voice has power. Whether you are reporting an incident or supporting the community, you are helping build a more just future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button 
              onClick={onReportClick}
              className="bg-teal-500 hover:bg-teal-400 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95"
            >
              Report an Incident
            </button>
            <button 
              onClick={onExploreClick}
              className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm active:scale-95"
            >
              Explore Cases
            </button>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="w-full max-w-7xl px-6 sm:px-10 py-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
             <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
               <Heart size={24} />
             </div>
             <div>
               <h4 className="text-[17px] font-bold text-slate-800 mb-2 tracking-tight">Radical Empathy</h4>
               <p className="text-slate-500 text-[14px] leading-relaxed">
                 We approach every story with deep respect and understanding, recognizing the courage it takes to speak up.
               </p>
             </div>
          </div>
          <div className="flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
             <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
               <Target size={24} />
             </div>
             <div>
               <h4 className="text-[17px] font-bold text-slate-800 mb-2 tracking-tight">Accountability</h4>
               <p className="text-slate-500 text-[14px] leading-relaxed">
                 We hold institutions to a higher standard by providing public, undeniable records of citizen experiences.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
