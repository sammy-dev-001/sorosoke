import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center max-w-[42rem] mx-auto px-4 z-10 flex flex-col items-center">
      <div className="inline-flex items-center space-x-2.5 bg-[#d1efea] text-[#347b72] px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.05em] mb-7 border border-[#bceae3]">
        <ShieldCheck className="w-5 h-5 stroke-2" />
        <span className="uppercase pt-[1px]">Secure & Confidential</span>
      </div>
      
      <h1 className="text-[1.375rem] sm:text-[1.625rem] font-medium text-[#2d4157] mb-5 tracking-tight">
        A safe space to speak up and find help.
      </h1>
      
      <p className="text-[#597184] text-[0.925rem] sm:text-[1.05rem] leading-[1.6] max-w-[36rem] mx-auto">
        We are here to support you. Whether you need to report an incident or find professional resources, your voice is heard and protected.
      </p>
    </div>
  );
}
