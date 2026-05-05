import { ShieldCheck } from 'lucide-react';

export default function Footer({ variant = "default", onAboutClick }) {
  if (variant === "secure") {
    return (
      <footer className="w-full mt-auto z-20 px-6 sm:px-10 py-8 text-[0.825rem] text-[#6b7f94]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-medium text-[#335368] text-[0.875rem] mb-1 tracking-tight">SpeakUp (Sọrọsókè)</p>
            <p>© 2026 SpeakUp (Sọrọsókè). A quiet companion for social progress.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#3b5974] font-semibold tracking-wider text-[0.75rem]">
              <ShieldCheck size={16} />
              SECURE PORTAL
            </div>
            <nav className="flex items-center gap-4">
              <a href="#" className="hover:text-[#335368] transition-colors" onClick={(e) => { e.preventDefault(); onAboutClick?.(); }}>About</a>
              <a href="#" className="hover:text-[#335368] transition-colors" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a href="#" className="hover:text-[#335368] transition-colors" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            </nav>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-white border-t border-[#f0f4f8] mt-auto z-20">
      <div className="w-full max-w-none px-6 sm:px-10 py-8 flex flex-col md:flex-row items-center md:items-start justify-between text-[0.825rem] text-[#6b7f94]">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="font-bold text-[#142333] text-[0.875rem] mb-1.5 tracking-tight">SpeakUp (Sọrọsókè)</p>
          <p>© 2026 SpeakUp (Sọrọsókè). A safe space for impact.</p>
        </div>
        
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <a href="#" className="hover:text-[#142333] transition-colors duration-200" onClick={(e) => { e.preventDefault(); onAboutClick?.(); }}>About</a>
          <a href="#" className="hover:text-[#142333] transition-colors duration-200" onClick={(e) => e.preventDefault()}>Privacy</a>
          <a href="#" className="hover:text-[#142333] transition-colors duration-200" onClick={(e) => e.preventDefault()}>Terms</a>
          <a href="#" className="text-[#3b5974] font-medium underline underline-offset-[5px] decoration-[#cbd5e1] hover:text-[#142333] hover:decoration-[#142333] transition-all duration-200" onClick={(e) => e.preventDefault()}>Emergency Resources</a>
        </nav>
      </div>
    </footer>
  );
}
