import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ReportProvider } from './context/ReportContext';
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
import ReportSuccess from './pages/ReportSuccess';

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

  return (
    <AuthProvider>
      <ReportProvider>
        {currentView === 'login' ? (
          <Login 
            onNavigateHome={() => setCurrentView('home')} 
            onNavigateSignUp={() => setCurrentView('signup')}
          />
        ) : currentView === 'signup' ? (
          <SignUp 
            onNavigateHome={() => setCurrentView('home')} 
            onNavigateLogin={() => setCurrentView('login')}
          />
        ) : (
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#eaf3f9] via-white to-[#eaf3f9] font-sans selection:bg-teal-100">
            <Header onProfileClick={() => setCurrentView('login')} onHomeClick={() => setCurrentView('home')} />
            
            {currentView === 'home' && (
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
            )}

            {currentView === 'report' && (
              <StartReport 
                onNavigateHome={() => setCurrentView('home')} 
                onStartReport={() => setCurrentView('report-step-2')}
              />
            )}

            {currentView === 'report-step-2' && (
              <ReportStep2 
                onNavigateHome={() => setCurrentView('home')}
                onBack={() => setCurrentView('report')}
                onContinue={() => setCurrentView('report-step-3')}
              />
            )}

            {currentView === 'report-step-3' && (
              <ReportStep3 
                onNavigateHome={() => setCurrentView('home')}
                onBack={() => setCurrentView('report-step-2')}
                onNext={() => setCurrentView('report-step-4')}
              />
            )}

            {currentView === 'report-step-4' && (
              <ReportStep4 
                onNavigateHome={() => setCurrentView('home')}
                onBack={() => setCurrentView('report-step-3')}
                onSuccess={() => setCurrentView('report-success')}
              />
            )}

            {currentView === 'report-success' && (
              <ReportSuccess 
                onGoToDashboard={() => setCurrentView('home')}
                onViewCases={() => setCurrentView('home')} // TODO: Map to cases view when ready
              />
            )}

            <Footer />
          </div>
        )}
      </ReportProvider>
    </AuthProvider>
  );
}

export default App;
