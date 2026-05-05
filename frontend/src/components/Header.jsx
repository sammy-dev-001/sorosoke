import { Bell, ArrowLeft, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header({ onHomeClick, onBackClick, onProfileClick, onDashboardClick, onCasesClick, onAboutClick, onLoginClick, onSignUpClick, activeView }) {
  const { user } = useAuth();

  return (
    <header className="w-full h-16 px-6 sm:px-10 flex items-center justify-between z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0">
      {/* Left Side: Brand */}
      <div className="flex-1 flex items-center gap-3">
        {onBackClick && (
          <button 
            onClick={onBackClick}
            className="text-slate-500 hover:text-slate-900 transition-colors duration-200 mr-2"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2]" />
          </button>
        )}
        <button 
          onClick={onHomeClick}
          className="flex items-baseline gap-1 hover:opacity-80 transition-opacity"
        >
          <span className="text-lg font-bold text-slate-900 tracking-tight">SpeakUp</span>
          <span className="text-lg font-medium text-slate-900 tracking-tight">(Sọrọsókè)</span>
        </button>
      </div>

      {/* Center Area: Navigation */}
      {onDashboardClick && onCasesClick && (
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={onDashboardClick}
            className={`text-[15px] transition-colors relative h-full flex items-center ${
              activeView === 'dashboard' ? 'font-semibold text-slate-900' : 'font-normal text-slate-400 hover:text-slate-600'
            }`}
          >
            Dashboard
            {activeView === 'dashboard' && (
              <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-slate-900 rounded-full"></span>
            )}
          </button>
          <button 
            onClick={onCasesClick}
            className={`text-[15px] transition-colors relative h-full flex items-center ${
              activeView === 'cases' ? 'font-semibold text-slate-900' : 'font-normal text-slate-400 hover:text-slate-600'
            }`}
          >
            Cases
            {activeView === 'cases' && (
              <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-slate-900 rounded-full"></span>
            )}
          </button>
          <button 
            onClick={onAboutClick}
            className={`text-[15px] transition-colors relative h-full flex items-center ${
              activeView === 'about' ? 'font-semibold text-slate-900' : 'font-normal text-slate-400 hover:text-slate-600'
            }`}
          >
            About
            {activeView === 'about' && (
              <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-slate-900 rounded-full"></span>
            )}
          </button>
        </nav>
      )}

      {/* Right Side: User Utilities */}
      <div className="flex-1 flex items-center justify-end gap-5">
        {user ? (
          <>
            <button 
              aria-label="Notifications" 
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200 relative"
              onClick={() => console.log("Notifications clicked")}
            >
              <Bell className="w-5 h-5 stroke-[2]" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            
            <button 
              aria-label="User Profile" 
              className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              onClick={onProfileClick || (() => console.log("Profile clicked"))}
            >
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-500 shadow-sm overflow-hidden">
                <User size={20} strokeWidth={2.5} />
              </div>
            </button>
          </>
        ) : (
          <button 
            onClick={onLoginClick || onProfileClick}
            className="bg-[#335368] hover:bg-[#2c485a] text-white text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Get Started
          </button>
        )}
      </div>
    </header>
  );
}
