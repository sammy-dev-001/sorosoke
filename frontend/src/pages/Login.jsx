import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthCard from '../components/AuthCard';
import InputWithIcon from '../components/forms/InputWithIcon';
import { Mail, Lock, LogIn, ShieldCheck, Info, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = ({ onNavigateHome, onNavigateSignUp }) => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { loginUser } = useAuth();
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    try {
      await loginUser({ email, password });
      onNavigateHome(location.state?.from);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMsg(error.response?.data?.message || error.message || "Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const LeftContent = (
    <>
      <div>
        <h2 className="text-[28px] font-medium leading-tight mb-6">
          Empowering Voices for Social Impact.
        </h2>
        <p className="text-white/80 text-[15px] leading-relaxed max-w-sm">
          Join our secure platform designed for safe reporting and community action.
        </p>
      </div>
      
      <div className="mt-12 md:mt-0 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <ShieldCheck size={20} className="text-white" strokeWidth={2} />
        </div>
        <div>
          <h4 className="font-medium text-white mb-1">End-to-End Encryption</h4>
          <p className="text-white/70 text-[13px] leading-relaxed">
            Your data remains private and safe.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-[#f1f6f9] to-[#f8fafc] font-sans">
      <Header onHomeClick={onNavigateHome} onSignUpClick={onNavigateSignUp} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 w-full">
        <AuthCard leftContent={LeftContent}>
          <div className="mb-10">
            <h1 className="text-[22px] font-medium text-[#1e293b] mb-2">Welcome back</h1>
            <p className="text-[#64748b] text-[15px]">Please enter your details to access your account.</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full flex-grow">
            <InputWithIcon 
              id="email"
              name="email"
              label="Email address"
              placeholder="name@example.com"
              leftIcon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <InputWithIcon 
              id="password"
              name="password"
              label="Password"
              placeholder="••••••••"
              leftIcon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              topRightLabel="Forgot password?"
            />

            <div className="flex items-center gap-3 mt-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-slate-300 text-[#335368] focus:ring-[#335368]/20"
              />
              <label htmlFor="remember" className="text-[14px] text-slate-600 font-medium">
                Remember for 30 days
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#335368] hover:bg-[#2c485a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-xl transition-colors mt-2 flex items-center justify-center gap-2 shadow-sm"
            >
              {isLoading ? "Logging in..." : "Log In"}
              {!isLoading && <LogIn size={18} strokeWidth={2} />}
            </button>

            {errorMsg && (
              <div className="bg-red-50 text-red-600 p-3.5 rounded-xl text-[14px] flex items-center gap-2 border border-red-100 mt-2">
                <AlertCircle size={18} className="shrink-0" />
                <p className="font-medium">{errorMsg}</p>
              </div>
            )}
            
            <p className="text-center text-[14px] text-slate-600 mt-6">
              Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onNavigateSignUp?.(); }} className="font-bold text-[#335368] hover:text-[#1e3443]">Create an account</a>
            </p>
          </form>

          <div className="mt-10 pt-2">
            <div className="bg-[#eef5fa] rounded-xl p-4 flex items-start gap-3 border border-blue-50/50">
              <Info size={18} className="text-[#335368] mt-0.5 shrink-0" strokeWidth={2.5} />
              <p className="text-[13px] text-[#335368] leading-relaxed">
                SpeakUp (Sọrọsókè) uses secure multi-layer authentication to protect your civic participation.
              </p>
            </div>
          </div>
        </AuthCard>
      </main>

      <Footer variant="secure" />
    </div>
  );
};

export default Login;
