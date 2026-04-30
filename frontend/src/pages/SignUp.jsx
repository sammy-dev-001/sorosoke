import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthCard from '../components/AuthCard';
import StandardInput from '../components/forms/StandardInput';
import { ShieldCheck, Users, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignUp = ({ onNavigateHome, onNavigateLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { registerUser } = useAuth();
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!termsAccepted) {
      setErrorMsg("Please accept the Safety Policy and Privacy Terms.");
      return;
    }
    
    setIsLoading(true);
    try {
      await registerUser({ fullName, email, password });
      onNavigateHome();
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMsg(error.response?.data?.message || error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const LeftContent = (
    <div className="flex flex-col h-full">
      <div className="mb-12">
        <h2 className="text-[32px] font-bold leading-tight mb-4 tracking-tight">
          SpeakUp (Sọrọsókè)
        </h2>
        <p className="text-white/80 text-[15px] leading-relaxed max-w-sm">
          A safe space for collective action and social impact. Join a community built on empathy and transparency.
        </p>
      </div>
      
      <div className="flex flex-col gap-6 mt-auto">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
            <ShieldCheck size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-medium text-white/90 text-[14px]">Secure and anonymous reporting</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
            <Users size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-medium text-white/90 text-[14px]">Community-driven advocacy</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-[#f1f6f9] to-[#f8fafc] font-sans">
      <Header onHomeClick={onNavigateHome} onLoginClick={onNavigateLogin} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 w-full">
        <AuthCard 
          bgImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
          leftContent={LeftContent}
        >
          <div className="mb-8">
            <h1 className="text-[26px] font-medium text-[#1e293b] mb-2 tracking-tight">Create an account</h1>
            <p className="text-[#64748b] text-[15px]">Let's start your journey toward social impact.</p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-5 w-full flex-grow">
            <StandardInput 
              id="fullName"
              name="fullName"
              label="Full name"
              placeholder="e.g. Alex Johnson"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <StandardInput 
              id="email"
              name="email"
              label="Email address"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <StandardInput 
              id="password"
              name="password"
              label="Password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              rightIcon={showPassword ? EyeOff : Eye}
              onRightIconClick={() => setShowPassword(!showPassword)}
            />

            <div className="flex items-start gap-3 mt-1 mb-2">
              <input 
                type="checkbox" 
                id="terms" 
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#335368] focus:ring-[#335368]/20"
              />
              <label htmlFor="terms" className="text-[13px] text-slate-600 leading-snug">
                I agree to the <a href="#" className="text-[#335368] font-medium hover:underline">Safety Policy</a> and <a href="#" className="text-[#335368] font-medium hover:underline">Privacy Terms</a>.
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#335368] hover:bg-[#2c485a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors mt-1 shadow-sm"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>

            {errorMsg && (
              <div className="bg-red-50 text-red-600 p-3.5 rounded-xl text-[14px] flex items-start gap-2 border border-red-100 mt-2">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <p className="font-medium leading-snug">{errorMsg}</p>
              </div>
            )}
            
            <p className="text-center text-[14px] text-slate-600 mt-4 mb-8">
              Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onNavigateLogin?.(); }} className="font-medium text-[#335368] hover:text-[#1e3443] hover:underline">Log in</a>
            </p>
          </form>

          <div className="mt-auto">
            <hr className="border-slate-100 mb-5" />
            <p className="text-center text-[11px] font-medium text-slate-400">
              © 2026 SpeakUp (Sọrọsókè). All rights reserved.
            </p>
          </div>
        </AuthCard>
      </main>

      <Footer variant="secure" />
    </div>
  );
};

export default SignUp;
