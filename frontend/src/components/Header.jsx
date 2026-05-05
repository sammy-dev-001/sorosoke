import React, { useState } from 'react';
import { Bell, ArrowLeft, User, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header({ onHomeClick, onBackClick, onProfileClick, onDashboardClick, onCasesClick, onAboutClick, onLoginClick, onSignUpClick, activeView }) {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'Home', id: 'home', onClick: onHomeClick },
    { label: 'Dashboard', id: 'dashboard', onClick: onDashboardClick },
    { label: 'Cases', id: 'cases', onClick: onCasesClick },
    { label: 'About', id: 'about', onClick: onAboutClick }
  ];

  return (
    <>
      <header className="w-full h-18 px-6 sm:px-10 flex items-center justify-between z-50 glass sticky top-0 border-none shadow-sm">
        {/* Left Side: Brand & Optional Back Button */}
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
            onClick={() => { onHomeClick(); setIsMenuOpen(false); }}
            className="flex items-baseline gap-1 hover:opacity-80 transition-opacity"
          >
            <span className="text-lg font-bold text-slate-900 tracking-tight">SpeakUp</span>
            <span className="text-lg font-medium text-slate-900 tracking-tight">(Sọrọsókè)</span>
          </button>
        </div>

        {/* Center Area: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={item.onClick}
              className={`text-[15px] font-bold transition-all relative py-2 ${
                activeView === item.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {item.label}
              {activeView === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full animate-fade-in"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right Side: User Utilities & Mobile Hamburger */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-5">
          {user ? (
            <>
              <button 
                aria-label="Notifications" 
                className="hidden sm:flex text-slate-500 hover:text-slate-900 transition-colors duration-200 relative p-2 rounded-full hover:bg-slate-100"
                onClick={() => console.log("Notifications clicked")}
              >
                <Bell className="w-5 h-5 stroke-[2]" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 border-2 border-white rounded-full"></span>
              </button>
              
              <button 
                aria-label="User Profile" 
                className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                onClick={onProfileClick || (() => console.log("Profile clicked"))}
              >
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-900 border border-slate-800 text-white shadow-lg overflow-hidden">
                  <User size={20} strokeWidth={2.5} />
                </div>
              </button>
            </>
          ) : (
            <button 
              onClick={onLoginClick || onProfileClick}
              className="bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl transition-all shadow-xl shadow-slate-900/10 active:scale-95 whitespace-nowrap"
            >
              Get Started
            </button>
          )}

          {/* Hamburger Icon on the Right */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-slate-500 hover:text-slate-900 transition-colors p-2 rounded-xl hover:bg-slate-100"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
            onClick={toggleMenu}
          ></div>
          
          {/* Menu Content - Now slides from the right to match the button position */}
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl animate-fade-in-left flex flex-col p-6">
            <div className="flex items-center justify-between mb-10">
              <button 
                onClick={() => { onHomeClick(); setIsMenuOpen(false); }}
                className="flex items-baseline gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-lg font-bold text-slate-900 tracking-tight">SpeakUp</span>
                <span className="text-lg font-medium text-slate-900 tracking-tight">(Sọrọsókè)</span>
              </button>
              <button onClick={toggleMenu} className="p-1 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => { item.onClick(); setIsMenuOpen(false); }}
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all ${
                    activeView === item.id 
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-[16px]">{item.label}</span>
                  {activeView === item.id && <div className="ml-auto w-2 h-2 bg-teal-500 rounded-full"></div>}
                </button>
              ))}
            </nav>

            <div className="mt-auto pt-10 border-t border-slate-100">
              <div className="flex flex-col gap-4">
                {!user && (
                   <button 
                    onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
                    className="w-full py-4 rounded-2xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all"
                  >
                    Login to Account
                  </button>
                )}
                <p className="text-xs text-slate-400 text-center font-medium">© 2026 SpeakUp (Sọrọsókè)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
