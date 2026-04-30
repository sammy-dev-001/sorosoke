import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const CaseFilterBar = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  selectedLocation, 
  setSelectedLocation 
}) => {
  const categories = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'police_brutality', label: 'Police Brutality' },
    { value: 'sexual_harassment', label: 'Sexual Harassment' },
    { value: 'lastma_extortion', label: 'LASTMA Extortion' },
    { value: 'landlord_dispute', label: 'Landlord Dispute' },
    { value: 'corruption', label: 'Corruption' },
    { value: 'workplace_abuse', label: 'Workplace Abuse' },
    { value: 'other', label: 'Other' }
  ];

  const locations = [
    "All Locations",
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Enugu",
    "Kano"
  ];

  return (
    <div className="w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative w-full lg:flex-grow">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keywords" 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="relative w-full sm:w-[220px]">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 rounded-2xl py-4 pl-6 pr-12 text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all text-slate-700 font-medium cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>

          <div className="relative w-full sm:w-[220px]">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 rounded-2xl py-4 pl-6 pr-12 text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all text-slate-700 font-medium cursor-pointer"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFilterBar;
