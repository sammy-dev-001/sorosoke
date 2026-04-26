import { Bell, ArrowLeft } from 'lucide-react';

export default function Header({ onHomeClick, onBackClick, onProfileClick }) {
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
      <nav className="hidden md:flex items-center gap-8">
        <button className="text-[15px] font-normal text-slate-400 hover:text-slate-600 transition-colors">
          Dashboard
        </button>
        <button className="text-[15px] font-semibold text-slate-900 relative">
          Cases
          <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-slate-900 rounded-full"></span>
        </button>
      </nav>

      {/* Right Side: User Utilities */}
      <div className="flex-1 flex items-center justify-end gap-5">
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
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Profile" 
            className="h-9 w-9 rounded-full object-cover border border-slate-200 shadow-sm"
          />
        </button>
      </div>
    </header>
  );
}
