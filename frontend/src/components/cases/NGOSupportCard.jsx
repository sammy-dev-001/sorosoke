import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck, Mail, Phone, Loader2 } from 'lucide-react';
import { getNGOs } from '../../services/api';

const NGOItem = ({ name, category, description, contactType }) => {
  const Icon = category.toLowerCase().includes('legal') ? Scale : ShieldCheck;
  
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#e8f1f8] flex items-center justify-center text-[#335368] shrink-0">
          <Icon size={22} />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-[16px] mb-0.5">{name}</h4>
          <p className="text-[#64748b] text-[13px] font-medium">{category}</p>
        </div>
      </div>
      <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
        {description}
      </p>
      <button className="w-full bg-[#e8f1f8] hover:bg-[#d9e8f4] text-[#335368] py-3 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-colors">
        {contactType === 'email' ? <Mail size={18} /> : <Phone size={18} />}
        Contact NGO
      </button>
    </div>
  );
};

const NGOSupportCard = ({ category }) => {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50">
      <h3 className="text-[22px] font-bold text-slate-900 mb-8">Get Support</h3>
      
      {loading ? (
        <div className="flex justify-center py-10 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : ngos.length > 0 ? (
        <div className="flex flex-col">
          {ngos.map((ngo, index) => (
            <React.Fragment key={ngo.id || ngo._id || index}>
              <NGOItem {...ngo} />
              {index < ngos.length - 1 && (
                <hr className="my-2 border-slate-50" />
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-slate-400 text-sm text-center py-6">No support organizations found for this category.</p>
      )}
    </div>
  );
};

export default NGOSupportCard;
