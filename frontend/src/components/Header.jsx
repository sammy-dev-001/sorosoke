import { CircleHelp, CircleUserRound } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-5 px-6 sm:px-10 flex items-center justify-between z-20 bg-white">
      <div className="text-lg sm:text-xl font-bold text-[#142333] tracking-tight">
        SpeakUp (Sọrọsókè)
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
          onClick={() => console.log("Profile clicked")}
        >
          <CircleUserRound className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
        </button>
      </div>
    </header>
  );
}
