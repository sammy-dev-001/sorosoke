import { EyeOff } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="mt-16 sm:mt-24 w-full flex items-center justify-center z-10">
      <div className="flex items-center justify-center space-x-2.5 bg-[#f6f9fc] border border-[#eef2f6] rounded-2xl py-4 sm:py-5 px-8 sm:px-10 text-[0.925rem] text-[#4d6378] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] min-w-[280px] max-w-[90%]">
        <EyeOff className="w-[1.125rem] h-[1.125rem] text-[#637d94] stroke-[1.5]" />
        <span>Your safety matters. You can stay anonymous.</span>
      </div>
    </div>
  );
}
