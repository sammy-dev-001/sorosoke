import Header from './components/Header';
import Hero from './components/Hero';
import ActionCard from './components/ActionCard';
import TrustBanner from './components/TrustBanner';
import Footer from './components/Footer';

function App() {
  // Placeholder routing/API logic for the backend developer
  const handleReportClick = () => {
    // TODO: Wire up to the incident reporting flow or API
    console.log("Navigating to report incident flow...");
  };

  const handleResourcesClick = () => {
    // TODO: Wire up to the resources directory or API
    console.log("Navigating to resources page...");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#eaf3f9] via-white to-[#eaf3f9] font-sans selection:bg-teal-100">
      <Header />
      
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
  );
}

export default App;
