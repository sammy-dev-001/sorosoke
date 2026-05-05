import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
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
import CasesExplorer from './pages/CasesExplorer';
import CaseDetails from './pages/CaseDetails';
import AddExperience from './pages/AddExperience';
import AddExperienceSuccess from './pages/AddExperienceSuccess';
import Profile from './pages/Profile';
import About from './pages/About';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleStartReport = () => {
    if (user) {
      navigate('/report');
    } else {
      navigate('/login', { state: { from: '/report' } });
    }
  };
  const isAuthPage = 
    location.pathname === '/login' || 
    location.pathname === '/signup' || 
    location.pathname.includes('/add-experience') ||
    location.pathname === '/profile' ||
    location.pathname.endsWith('/success');

  // Helper to determine active view for the Header
  const getActiveView = (path) => {
    if (path.startsWith('/cases')) return 'cases';
    if (path === '/') return 'dashboard';
    if (path === '/about') return 'about';
    return '';
  };

  const content = (
    <Routes>
      <Route path="/" element={
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
              onClick={handleStartReport}
            />
            <ActionCard
              title="View Cases"
              description="See similar experiences shared by others. You are not alone."
              icon="users"
              iconBg="bg-slate-100"
              iconColor="text-[#335368]"
              linkText="View Cases"
              onClick={() => navigate('/cases')}
            />
          </div>
          <TrustBanner />
        </main>
      } />

      <Route path="/about" element={
        <About 
          onReportClick={handleStartReport} 
          onExploreClick={() => navigate('/cases')} 
        />
      } />

      <Route path="/login" element={
        <Login 
          onNavigateHome={(path) => navigate(path || '/')} 
          onNavigateSignUp={() => navigate('/signup')}
        />
      } />

      <Route path="/signup" element={
        <SignUp 
          onNavigateHome={() => navigate('/')} 
          onNavigateLogin={() => navigate('/login')}
        />
      } />

      <Route path="/report" element={
        <StartReport 
          onNavigateHome={() => navigate('/')} 
          onStartReport={() => navigate('/report/step-2')}
        />
      } />

      <Route path="/report/step-2" element={
        <ReportStep2 
          onNavigateHome={() => navigate('/')}
          onBack={() => navigate('/report')}
          onContinue={() => navigate('/report/step-3')}
        />
      } />

      <Route path="/report/step-3" element={
        <ReportStep3 
          onNavigateHome={() => navigate('/')}
          onBack={() => navigate('/report/step-2')}
          onNext={() => navigate('/report/step-4')}
        />
      } />

      <Route path="/report/step-4" element={
        <ReportStep4 
          onNavigateHome={() => navigate('/')}
          onBack={() => navigate('/report/step-3')}
          onSuccess={() => navigate('/report/success')}
        />
      } />

      <Route path="/report/success" element={
        <ReportSuccess 
          onGoToDashboard={() => navigate('/')}
          onViewCases={() => navigate('/cases')}
        />
      } />

      <Route path="/cases" element={
        <CasesExplorer 
          onReportNewCase={handleStartReport}
        />
      } />

      <Route path="/cases/:id" element={
        <CaseDetails 
          onReportIncident={handleStartReport}
        />
      } />

      <Route path="/cases/:id/add-experience" element={
        <AddExperience />
      } />

      <Route path="/cases/:id/success" element={
        <AddExperienceSuccess />
      } />

      <Route path="/profile" element={
        <Profile />
      } />
    </Routes>
  );

  if (isAuthPage) {
    return content;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#eaf3f9] via-white to-[#eaf3f9] font-sans selection:bg-teal-100">
      <Header 
        onProfileClick={() => user ? navigate('/profile') : navigate('/login')} 
        onHomeClick={() => navigate('/')} 
        onCasesClick={() => navigate('/cases')}
        onDashboardClick={() => navigate('/')}
        onAboutClick={() => navigate('/about')}
        onLoginClick={() => navigate('/login')}
        onSignUpClick={() => navigate('/signup')}
        activeView={getActiveView(location.pathname)}
      />
      {content}
      <Footer onAboutClick={() => navigate('/about')} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ReportProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ReportProvider>
    </AuthProvider>
  );
}

export default App;
