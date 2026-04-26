import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Shield, Eye, Home } from 'lucide-react';

const AddExperienceSuccess = () => {
  const { id } = useParams();

  const avatars = [
    "https://i.pravatar.cc/150?img=11",
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=13"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-[2rem] p-10 sm:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center">
        
        {/* Top Icon */}
        <div className="w-20 h-20 rounded-full bg-[#cdeee8] flex items-center justify-center text-[#47988d] mb-10 shadow-inner">
          <Shield size={36} strokeWidth={2.5} />
        </div>

        {/* Typography */}
        <h1 className="text-[28px] sm:text-[32px] font-bold text-slate-900 leading-tight mb-3">
          Your experience has been added.
        </h1>
        <p className="text-slate-500 text-[18px] mb-12">
          You're not alone.
        </p>

        {/* Community Box */}
        <div className="w-full bg-[#e8f1f8] rounded-3xl p-6 mb-12 flex items-center gap-5">
          {/* Avatar Stack */}
          <div className="flex -space-x-3">
            {avatars.map((url, i) => (
              <img 
                key={i}
                src={url} 
                alt="Community member" 
                className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
            <div className="w-11 h-11 rounded-full bg-slate-600 border-2 border-white flex items-center justify-center text-white text-[13px] font-bold shadow-sm">
              +16
            </div>
          </div>
          
          <p className="text-left text-slate-800 text-[15px] leading-tight">
            <span className="font-bold">19 people</span> have now shared this experience.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link 
            to={`/cases/${id}`}
            className="flex-1 bg-[#335368] hover:bg-[#2c485a] text-white py-4 rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95"
          >
            <Eye size={20} />
            View Case
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 py-4 rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <Home size={20} />
            Go to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AddExperienceSuccess;
