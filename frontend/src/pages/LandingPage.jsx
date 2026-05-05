import React from 'react';
import { 
  Shield, 
  Users, 
  Target, 
  Heart, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  Info, 
  ArrowRight, 
  Lock, 
  Eye, 
  BarChart3,
  Globe,
  Award
} from 'lucide-react';

const LandingPage = ({ onReportClick, onExploreClick, onJoinClick }) => {
  return (
    <main className="flex-grow flex flex-col items-center w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 sm:px-10 py-20 bg-mesh">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-200 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-[13px] font-bold mb-8 border border-teal-100">
              <Zap size={14} className="fill-teal-500" />
              THE TRUTH ACCELERATOR
            </div>
            <h1 className="text-[48px] md:text-[72px] font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Your Voice is the <br />
              <span className="text-gradient">Ultimate Weapon.</span>
            </h1>
            <p className="text-slate-600 text-[18px] md:text-[22px] max-w-xl leading-relaxed mb-10 font-medium">
              Sọrọsókè is more than a reporting tool. It's a decentralized hub for justice, built to amplify silence into a roar that institutions can't ignore.
            </p>
            <div className="flex flex-wrap gap-4 w-full">
              <button 
                onClick={onReportClick}
                className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl active:scale-95 flex items-center gap-2"
              >
                Start Your Report
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onExploreClick}
                className="glass px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 text-slate-700 hover:bg-white/90"
              >
                Explore Live Cases
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-slate-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                    <Users size={16} className="text-slate-400" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold">
                  +1.2k
                </div>
              </div>
              <p className="text-sm font-medium">Joined by 1,200+ activists this month</p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10 glass p-4 rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="bg-slate-900 rounded-[2rem] overflow-hidden aspect-[4/5] relative">
                <img 
                  src="/sorosoke_hero.png" 
                  alt="Sọrọsókè Impact" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Integrated Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <Shield size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">Case #842 Secured</p>
                      <p className="text-teal-400 text-xs font-medium uppercase tracking-wider">Community Verified</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-md">
                    <div className="h-full bg-teal-500 w-[75%] shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                  </div>
                  
                  {/* Security Badge - Integrated inside the image card */}
                  <div className="mt-6 glass p-4 rounded-2xl flex items-center gap-3 border-white/10 bg-white/5">
                    <div className="p-2.5 bg-white/10 rounded-xl text-teal-400">
                      <Lock size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-slate-400">Security Standard</p>
                      <p className="text-white font-bold text-sm leading-none mt-1">Military-Grade AES-256</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative blob to anchor the visual */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Reports Filed", value: "2,481", icon: <BarChart3 /> },
            { label: "Resolved Cases", value: "152", icon: <Award /> },
            { label: "Active Partners", value: "48", icon: <Globe /> },
            { label: "Anonymity Score", value: "100%", icon: <Lock /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-teal-500 mb-2 opacity-50">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-7xl px-6 py-24">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Sọrọsókè Advantage</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We've engineered a platform that solves the three biggest barriers to justice: fear, invisibility, and inaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Absolute Anonymity",
              desc: "Your identity is yours to keep. Our zero-knowledge reporting ensures not even we know who you are, unless you choose to share.",
              icon: <Lock className="w-8 h-8" />,
              color: "indigo"
            },
            {
              title: "Permanent Ledger",
              desc: "Immutable records of truth. Once a case is filed and verified, it remains a permanent part of the public record of accountability.",
              icon: <BarChart3 className="w-8 h-8" />,
              color: "teal"
            },
            {
              title: "Rapid Connection",
              desc: "Instant routing to human rights lawyers, NGOs, and support groups who are ready to take your case from report to action.",
              icon: <Zap className="w-8 h-8" />,
              color: "amber"
            }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-50 text-${feature.color}-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-[16px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works - Interactive Timeline */}
      <section className="w-full bg-slate-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-teal-500/5 -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">How we turn silence <br /> into <span className="text-teal-600">Action.</span></h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Document the Truth", desc: "Upload photos, videos, or voice notes. Use our secure vault to store evidence that can't be deleted by third parties." },
                { step: "02", title: "Submit & Encrypt", desc: "Your report is stripped of metadata and encrypted with high-grade security before reaching our database." },
                { step: "03", title: "Global Visibility", desc: "If you choose, your case is added to our public map, allowing the world to witness and support your story." },
                { step: "04", title: "Targeted Support", desc: "Our algorithm matches your case with verified legal and emotional support partners in your specific region." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="text-5xl font-black text-slate-200 group-hover:text-teal-500 transition-colors leading-none">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass aspect-square rounded-[3rem] p-12 flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 rounded-full bg-teal-500/10 flex items-center justify-center mb-8 animate-pulse-slow">
                <Shield size={64} className="text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Secured Ecosystem</h3>
              <p className="text-slate-500 max-w-sm">
                We use decentralized storage protocols to ensure that no government or corporation can ever "turn off" your voice.
              </p>
              <div className="mt-10 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-teal-500"></div>
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="w-full py-24 px-6 flex flex-col items-center text-center bg-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm tracking-widest uppercase mb-6">
            <Heart size={16} className="fill-indigo-500" />
            Our Core Mission
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">
            Restoring Power to the <span className="text-indigo-600">People.</span>
          </h2>
          <p className="text-slate-500 text-xl md:text-2xl leading-relaxed mb-12">
            "Injustice anywhere is a threat to justice everywhere. Sọrọsókè was built on the belief that transparency is the ultimate disinfectant for corruption and abuse."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                <Users size={28} className="text-slate-700" />
              </div>
              <p className="font-bold text-slate-900">Community Driven</p>
              <p className="text-slate-400 text-sm">Powered by citizens</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                <Target size={28} className="text-slate-700" />
              </div>
              <p className="font-bold text-slate-900">Result Oriented</p>
              <p className="text-slate-400 text-sm">Focus on resolution</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                <Shield size={28} className="text-slate-700" />
              </div>
              <p className="font-bold text-slate-900">Privacy First</p>
              <p className="text-slate-400 text-sm">Zero compromises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-7xl px-6 pb-24">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -mr-[300px] -mt-[300px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -ml-[300px] -mb-[300px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to break <br /> the silence?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12">
              Every story told is a brick in the wall of accountability. Join thousands of others who are saying "No More" to injustice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onReportClick}
                className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white px-12 py-5 rounded-3xl font-bold transition-all shadow-xl shadow-teal-500/20 active:scale-95 text-lg"
              >
                File a Secure Report
              </button>
              <button 
                onClick={onJoinClick}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-3xl font-bold transition-all backdrop-blur-md border border-white/10 active:scale-95 text-lg"
              >
                Join the Community
              </button>
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
                <Shield size={24} className="text-teal-500" />
                VERIFIED BY TRUST
              </div>
              <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
                <Lock size={24} className="text-indigo-500" />
                END-TO-END SECURE
              </div>
              <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
                <Users size={24} className="text-amber-500" />
                CITIZEN BACKED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Badge */}
      <div className="mb-20 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="glass px-6 py-3 rounded-full flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">System Status: Fully Operational & Secure</span>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
