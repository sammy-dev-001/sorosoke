import React from 'react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PublicCaseCard = ({ id, category, location, title, description, reportsCount }) => {
  const navigate = useNavigate();

  // Dynamic styling for category badges
  const getCategoryStyles = (cat) => {
    const styles = {
      'Workplace': 'bg-[#e2f2f1] text-[#47988d]',
      'Civil Rights': 'bg-[#e3f2fd] text-[#1976d2]',
      'Legal Aid': 'bg-[#f5f5f5] text-[#616161]',
      'Institutional': 'bg-[#e0f2f1] text-[#00897b]',
      'Education': 'bg-[#e3f2fd] text-[#1e88e5]',
      'default': 'bg-slate-100 text-slate-600'
    };
    return styles[cat] || styles['default'];
  };

  return (
    <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <span className={`px-4 py-1.5 rounded-full text-[13px] font-semibold ${getCategoryStyles(category)}`}>
          {category}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400 text-[13px]">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
      </div>

      {/* Body */}
      <h3 className="text-[17px] font-bold text-slate-800 mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3 mb-6">
        {description}
      </p>

      {/* Divider */}
      <hr className="border-slate-50 mb-6 mt-auto" />

      {/* Bottom Row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-700">
          <Users size={16} className="text-slate-400" />
          <span className="text-[13px] font-medium">{reportsCount} people reported this</span>
        </div>
        <button 
          onClick={() => navigate(`/cases/${id}`)}
          className="flex items-center gap-1.5 text-[#335368] font-bold text-[14px] hover:gap-2.5 transition-all"
        >
          View Case
          <ArrowRight size={16} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default PublicCaseCard;
