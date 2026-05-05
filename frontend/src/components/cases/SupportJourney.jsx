import React from 'react';
import { CheckCircle2, Clock, ArrowRight, MessageCircle } from 'lucide-react';

const SupportJourney = ({ step, daysWaiting, ngoName, onRetry }) => {
  const steps = [
    { id: 1, label: "NGO Suggested", status: "completed" },
    { id: 2, label: "Contacted NGO", status: step >= 2 ? "completed" : "pending" },
    { id: 3, label: "Awaiting Response", status: step >= 3 ? "active" : "upcoming" },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 mt-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[20px] font-bold text-slate-900">Your Support Journey</h3>
        {step >= 3 && (
          <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-[12px] font-bold border border-amber-100">
            <Clock size={14} />
            {daysWaiting} DAYS
          </div>
        )}
      </div>

      <div className="space-y-6 relative mb-10">
        {/* Connector Line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100 -z-0"></div>

        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-4 relative z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${
              s.status === 'completed' ? 'bg-teal-500 border-teal-500 text-white' :
              s.status === 'active' ? 'bg-white border-teal-500 text-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.2)]' :
              'bg-white border-slate-200 text-slate-300'
            }`}>
              {s.status === 'completed' ? <CheckCircle2 size={16} /> : <span className="text-[12px] font-bold">{s.id}</span>}
            </div>
            <div>
              <p className={`text-[15px] font-bold ${s.status === 'upcoming' ? 'text-slate-300' : 'text-slate-900'}`}>
                {s.label}
              </p>
              {s.status === 'active' && (
                <p className="text-[13px] text-slate-500 mt-0.5">Waiting for {ngoName} to respond...</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {step >= 3 && daysWaiting >= 2 && (
        <div className="animate-fade-in">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
            <p className="text-[14px] text-slate-600 leading-relaxed">
              "If you don't receive a response, you can try another organization. We're here to guide you."
            </p>
          </div>
          <button 
            onClick={onRetry}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-900/10"
          >
            Try Another Organization
            <ArrowRight size={18} />
          </button>
        </div>
      )}
      
      {step === 2 && (
        <button 
          className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-teal-500/10"
          onClick={() => {/* This would move to step 3 */}}
        >
          Confirming Contact...
        </button>
      )}
    </div>
  );
};

export default SupportJourney;
