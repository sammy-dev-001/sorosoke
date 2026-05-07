import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck, Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { getNGOs } from '../../services/api';
import SupportJourney from './SupportJourney';

const NGOItem = ({ name, category, description, phone, email, onContacted, isContacted }) => {
  // Ensure category is a string for icon check
  const categoryString = Array.isArray(category) ? category.join(', ') : (category || '');
  const Icon = categoryString.toLowerCase().includes('legal') ? Scale : ShieldCheck;
  
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#e8f1f8] flex items-center justify-center text-[#335368] shrink-0">
          <Icon size={22} />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-[16px] mb-0.5">{name}</h4>
          <p className="text-[#64748b] text-[13px] font-medium">{categoryString.replace(/_/g, ' ')}</p>
        </div>
      </div>
      <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
        {description}
      </p>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {phone && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <Phone size={16} className="text-slate-400" />
            <span className="text-[13px] font-bold text-slate-700">{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <Mail size={16} className="text-slate-400" />
            <span className="text-[13px] font-bold text-slate-700 break-all">{email}</span>
          </div>
        )}
      </div>
      
      {!isContacted ? (
        <button 
          onClick={onContacted}
          className="w-full bg-[#335368] hover:bg-[#2c485a] text-white py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
        >
          <CheckCircle2 size={18} />
          I've reached out to this NGO
        </button>
      ) : (
        <div className="w-full bg-teal-50 text-teal-700 py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 border border-teal-100 animate-fade-in">
          <CheckCircle2 size={18} />
          NGO Contacted
        </div>
      )}
    </div>
  );
};

const NGOSupportCard = ({ category, caseId }) => {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactedNgo, setContactedNgo] = useState(null);
  const [journeyStep, setJourneyStep] = useState(1);

  // Persistence: Check if this case already has a contacted NGO in this session
  useEffect(() => {
    const saved = localStorage.getItem(`journey_${caseId}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContactedNgo(parsed.ngo);
      setJourneyStep(parsed.step);
    }
  }, [caseId]);

  useEffect(() => {
    const fetchNgos = async () => {
      setLoading(true);
      try {
        const data = await getNGOs(category);
        setNgos(data);
      } catch (err) {
        console.error("Failed to fetch NGOs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNgos();
  }, [category]);

  const handleContacted = (ngo) => {
    const newState = { ngo, step: 3 };
    setContactedNgo(ngo);
    setJourneyStep(3);
    localStorage.setItem(`journey_${caseId}`, JSON.stringify(newState));
  };

  const handleRetry = () => {
    setContactedNgo(null);
    setJourneyStep(1);
    localStorage.removeItem(`journey_${caseId}`);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50">
        <h3 className="text-[22px] font-bold text-slate-900 mb-8">Recommended Support</h3>
        
        {loading ? (
          <div className="flex justify-center py-10 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : ngos.length > 0 ? (
          <div className="flex flex-col">
            {ngos.slice(0, 2).map((ngo, index) => (
              <React.Fragment key={ngo.id || ngo._id || index}>
                <NGOItem 
                  {...ngo} 
                  onContacted={() => handleContacted(ngo)}
                  isContacted={contactedNgo?.name === ngo.name}
                />
                {index < Math.min(ngos.length, 2) - 1 && (
                  <hr className="my-6 border-slate-50" />
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-sm text-center py-6">No support organizations found for this category.</p>
        )}

        <div className="mt-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
          <p className="text-[12px] text-indigo-700 font-medium leading-relaxed">
            <strong>Pro Tip:</strong> Reaching out to multiple organizations increases your chances of a faster response.
          </p>
        </div>
      </div>

      {contactedNgo && (
        <SupportJourney 
          step={journeyStep} 
          daysWaiting={2} 
          ngoName={contactedNgo.name}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default NGOSupportCard;
