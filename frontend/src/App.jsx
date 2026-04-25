import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ActionCard from './components/ActionCard';
import TrustBanner from './components/TrustBanner';
import Footer from './components/Footer';
import StartReport from './pages/StartReport';
import ReportStep2 from './pages/ReportStep2';
import ReportStep3 from './pages/ReportStep3';
import ReportStep4 from './pages/ReportStep4';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
function App() {
  const [currentView, setCurrentView] = useState('home');

  // Placeholder routing/API logic for the backend developer
  const handleReportClick = () => {
    setCurrentView('report');
  };

  const handleResourcesClick = () => {
    // TODO: Wire up to the resources directory or API
    console.log("Navigating to resources page...");
  };

  if (currentView === 'login') {
    return (
      <Login 
        onNavigateHome={() => setCurrentView('home')} 
        onNavigateSignUp={() => setCurrentView('signup')}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignUp 
        onNavigateHome={() => setCurrentView('home')} 
        onNavigateLogin={() => setCurrentView('login')}
      />
    );
  }

  if (currentView === 'report') {
    return (
      <StartReport 
        onNavigateHome={() => setCurrentView('home')} 
        onStartReport={() => setCurrentView('report-step-2')}
      />
    );
  }

  if (currentView === 'report-step-2') {
    return (
      <ReportStep2 
        onNavigateHome={() => setCurrentView('home')}
        onBack={() => setCurrentView('report')}
        onContinue={(data) => {
          console.log("Form data collected:", data);
          setCurrentView('report-step-3');
        }}
      />
    );
  }

  if (currentView === 'report-step-3') {
    return (
      <ReportStep3 
        onNavigateHome={() => setCurrentView('home')}
        onBack={() => setCurrentView('report-step-2')}
        onNext={(data) => {
          console.log("Identity choice collected:", data);
          setCurrentView('report-step-4');
        }}
      />
    );
  }

  if (currentView === 'report-step-4') {
    return (
      <ReportStep4 
        onNavigateHome={() => setCurrentView('home')}
        onBack={() => setCurrentView('report-step-3')}
      />
    );
  }

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#eaf3f9] via-white to-[#eaf3f9] font-sans selection:bg-teal-100">
      <Header onProfileClick={() => setCurrentView('login')} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-24 w-full">
        <Hero />
        
        <div className="mt-14 w-full max-w-[56rem] grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          <ActionCard
            title="Report an Incident"
            description="Securely share your experience. Our encrypted system ensures your report reaches the right hands without compromise."
            icon="megaphone"
            iconBg="bg-[#fad4d2]"
            iconColor="text-[#e85d5d]"
            linkText="Report Now"
            onClick={handleReportClick}
          />
          <ActionCard
            title="Find Help"
            description="Browse verified resources, counseling services, and legal aid. Find immediate support in your community."
            icon="hand-heart"
            iconBg="bg-[#cae8e4]"
            iconColor="text-[#47988d]"
            linkText="Browse Resources"
            onClick={handleResourcesClick}
          />
        </div>

        <TrustBanner />
      </main>

      <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
