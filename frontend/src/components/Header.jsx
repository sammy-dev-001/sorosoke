import { CircleHelp, CircleUserRound, ArrowLeft } from 'lucide-react';

export default function Header({ onHomeClick, onBackClick }) {
  return (
    <header className="w-full py-5 px-6 sm:px-10 flex items-center justify-between z-20 bg-white shadow-[0_1px_2px_rgb(0,0,0,0.03)] relative">
      <div className="flex items-center gap-3">
        {onBackClick && (
          <button 
            onClick={onBackClick}
            className="text-[#415a72] hover:text-[#142333] transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </button>
        )}
        <button 
          onClick={onHomeClick}
          className="text-lg sm:text-xl font-bold text-[#142333] tracking-tight hover:opacity-80 transition-opacity text-left"
        >
          SpeakUp (Sọrọsókè)
        </button>
      </div>
      <div className="flex items-center space-x-5">
        <button 
          aria-label="Help" 
          className="text-[#415a72] hover:text-[#142333] transition-colors duration-200"
          onClick={() => console.log("Help clicked")}
        >
          <CircleHelp className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
        </button>
        <button 
          aria-label="User Profile" 
          className="text-[#415a72] hover:text-[#142333] transition-colors duration-200"
          onClick={onProfileClick || (() => console.log("Profile clicked"))}
        >
          <CircleUserRound className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
        </button>
      </div>
    </header>
  );
}
