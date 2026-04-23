import { Megaphone, HandHeart, ArrowRight } from 'lucide-react';

export default function ActionCard({ 
  title, 
  description, 
  icon, 
  iconBg, 
  iconColor, 
  linkText, 
  onClick 
}) {
  const IconComponent = icon === 'megaphone' ? Megaphone : HandHeart;

  return (
    <div 
      className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02),0_10px_20px_-2px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 border border-[#f0f4f8] flex flex-col items-start cursor-pointer group h-full"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={`w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center mb-6 ${iconBg} ${iconColor}`}>
        <IconComponent className="w-[1.375rem] h-[1.375rem] stroke-[2]" />
      </div>
      
      <h2 className="text-[1.125rem] sm:text-xl font-medium text-[#253648] mb-4">
        {title}
      </h2>
      
      <p className="text-[#64798c] text-[0.925rem] leading-[1.65] mb-10 flex-grow pr-2 sm:pr-6">
        {description}
      </p>
      
      <div className="flex items-center text-[#375878] font-medium text-base group-hover:text-[#182836] transition-colors mt-auto">
        {linkText}
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
      </div>
    </div>
  );
}
