import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import CaseFilterBar from '../components/cases/CaseFilterBar';
import PublicCaseCard from '../components/cases/PublicCaseCard';
import ShareStoryCard from '../components/cases/ShareStoryCard';
import Pagination from '../components/cases/Pagination';
import * as api from '../services/api';

const CasesExplorer = ({ onReportNewCase }) => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  // Debounce effect for search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch cases whenever filters change
  useEffect(() => {
    const fetchCases = async () => {
      setLoading(true);
      try {
        const data = await api.getCases({
          keyword: debouncedSearch,
          category: selectedCategory,
          location: selectedLocation
        });
        setCases(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch cases:", err);
        setError("Unable to load cases. Showing archived data.");
        // Fallback or handle error
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, [debouncedSearch, selectedCategory, selectedLocation]);

  return (
    <main className="flex-grow flex flex-col items-center w-full bg-white relative">
      <div className="w-full max-w-7xl px-6 sm:px-10 py-12">
        
        {/* Top Text */}
        <div className="mb-12">
          <p className="text-slate-500 text-[16px] max-w-2xl leading-relaxed">
            Explore shared experiences from others to find support and patterns of behavior.
          </p>
        </div>

        {/* Filter Bar */}
        <CaseFilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="text-[15px] font-medium">Fetching the latest cases...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-amber-50 border border-amber-100 text-amber-700 px-6 py-4 rounded-2xl mb-8 text-[14px]">
            {error}
          </div>
        )}

        {/* Grid Layout */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {cases.length > 0 ? (
              cases.map((caseData) => (
                <PublicCaseCard 
                  key={caseData.id || caseData._id}
                  id={caseData.id || caseData._id}
                  category={caseData.category}
                  location={caseData.location}
                  title={caseData.title}
                  description={caseData.description}
                  reportsCount={caseData.reportsCount || 0}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 text-[16px]">No cases match your current filters.</p>
              </div>
            )}
            
            <ShareStoryCard onReportClick={onReportNewCase} />
          </div>
        )}

        {/* Pagination */}
        {!loading && cases.length > 0 && <Pagination />}

      </div>


    </main>
  );
};

export default CasesExplorer;
