import React from 'react';

const AuthCard = ({ leftContent, children, bgImage }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row min-h-[640px]">
      {/* Left Panel */}
      <div 
        className={`w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-between text-white ${bgImage ? 'bg-[#335368]/95 bg-blend-overlay bg-cover bg-center' : 'bg-[#335368]'}`}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        {leftContent}
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
