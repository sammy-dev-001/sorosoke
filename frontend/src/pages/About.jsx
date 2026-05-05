import React from 'react';
import { Shield, Users, Target, Heart, CheckCircle2, Info } from 'lucide-react';

const About = () => {
  return (
    <main className="flex-grow flex flex-col items-center w-full bg-white">
      {/* Simple Header */}
      <section className="w-full bg-slate-50 py-20 px-6 text-center border-b border-slate-100">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[13px] font-bold mb-6">
          <Info size={16} />
          OUR STORY
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Amplifying Truth, Empowering Communities.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          SpeakUp (Sọrọsókè) is a citizen-driven platform designed to break the silence on injustice and build a bridge between victims and accountability.
        </p>
      </section>

      {/* Mission Content */}
      <section className="w-full max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In many societies, voices are often silenced by bureaucracy, fear, or lack of support. SpeakUp was born out of the need for a safe, transparent, and action-oriented space where citizens can report incidents of injustice without fear of retaliation.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether it's police brutality, workplace abuse, or civic corruption, we provide the tools to document, share, and seek support for every case. Our goal is to create a data-driven map of accountability that demands change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Integrity", icon: <Shield className="text-teal-600" />, desc: "Absolute data integrity for permanent truth." },
              { title: "Community", icon: <Users className="text-indigo-600" />, desc: "Connecting survivors to show systemic scale." },
              { title: "Action", icon: <Target className="text-amber-600" />, desc: "Turning reports into real-world outcomes." },
              { title: "Empathy", icon: <Heart className="text-red-600" />, desc: "Approaching every story with deep respect." },
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-slate-500 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[3rem] border-slate-100 bg-slate-50/50">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">What we stand for</h3>
          <div className="space-y-6">
            {[
              "End-to-end encrypted reporting systems",
              "Direct connection to verified NGO support",
              "Community-driven experience sharing",
              "Data-backed advocacy for systemic reform",
              "Zero-tolerance for data manipulation",
              "Radical transparency in case handling"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-200">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Shield size={18} />
              Security First
            </h4>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Your safety is our top priority. Every byte of data you share is protected by enterprise-grade encryption.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
