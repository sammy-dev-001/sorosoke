import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import FeatureInfoCard from '../components/FeatureInfoCard';
import TextAreaField from '../components/forms/TextAreaField';
import SelectField from '../components/forms/SelectField';
import InputWithIcon from '../components/forms/InputWithIcon';
import PrivacyAlert from '../components/PrivacyAlert';
import { Shield, Headset, MapPin, CalendarDays } from 'lucide-react';

const ReportStep2 = ({ onBack, onContinue, onNavigateHome }) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinue = () => {
    // Pass form data back to parent or state manager
    onContinue(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] font-sans selection:bg-teal-100">
      <Header onHomeClick={onNavigateHome} onBackClick={onBack} />
      
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10 pb-24 w-full">
        <div className="w-full max-w-3xl mt-4">
          <ProgressBar 
            currentStep={2} 
            totalSteps={4} 
            stepLabel="Incident Details" 
          />
          
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-slate-100 mb-8 relative overflow-hidden">
            <h2 className="text-[#335368] font-medium text-lg mb-3">
              Share what happened
            </h2>
            <p className="text-slate-600 text-[15px] mb-8 leading-relaxed">
              Your voice matters. Providing specific details helps us build a safer community for everyone. You can share as much or as little as you feel comfortable.
            </p>

            <div className="flex flex-col gap-6">
              <TextAreaField 
                id="description"
                name="description"
                label="What happened?"
                placeholder="Please describe the incident in your own words..."
                value={formData.description}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField 
                  id="category"
                  name="category"
                  label="Category"
                  value={formData.category}
                  onChange={handleChange}
                  options={[
                    { value: 'harassment', label: 'Harassment' },
                    { value: 'discrimination', label: 'Discrimination' },
                    { value: 'assault', label: 'Assault' },
                    { value: 'other', label: 'Other' }
                  ]}
                />
                <InputWithIcon 
                  id="date"
                  name="date"
                  label="When did it happen?"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <InputWithIcon 
                id="location"
                name="location"
                label="Where did it happen?"
                placeholder="Enter city, neighborhood, or specific location"
                value={formData.location}
                onChange={handleChange}
                leftIcon={MapPin}
              />
            </div>

            <PrivacyAlert />

            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={onBack}
                className="text-[#335368] hover:text-[#284355] font-medium px-4 py-2 transition-colors duration-200"
              >
                Back
              </button>
              <button 
                onClick={handleContinue}
                className="bg-[#335368] hover:bg-[#284355] text-white px-8 py-3.5 rounded-xl font-medium transition-colors duration-200"
              >
                Continue
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FeatureInfoCard 
              icon={Shield}
              title="Safe Space Policy"
              description="View our security protocols"
              variant="outlined"
            />
            <FeatureInfoCard 
              icon={Headset}
              title="Need immediate help?"
              description="Speak to a counselor now"
              variant="outlined"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportStep2;
