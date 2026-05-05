import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Mail, Shield, LogOut, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  React.useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-[#f1f6f9] to-[#f8fafc] font-sans">
      <Header 
        onHomeClick={() => navigate('/')} 
        onCasesClick={() => navigate('/cases')}
        onDashboardClick={() => navigate('/')}
        activeView="profile"
      />
      
      <main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        <div className="w-full mb-8 flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-[#335368] transition-colors font-medium text-[15px]"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
            Back
          </button>
        </div>

        <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
          {/* Header Banner */}
          <div className="h-32 bg-[#335368] relative">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 rounded-full bg-white p-1 shadow-md">
                <div className="w-full h-full rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#335368]">
                  <User size={40} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8">
            <h1 className="text-2xl font-bold text-[#1e293b] mb-1">
              {user?.fullName || user?.name || user?.username || 'Anonymous User'}
            </h1>
            <p className="text-slate-500 text-[15px] mb-8">
              Manage your personal information and preferences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Info Cards */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#335368] shrink-0">
                  <Mail size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</h3>
                  <p className="text-[#1e293b] font-medium">{user?.email || 'Not provided'}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#335368] shrink-0">
                  <Shield size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Account Status</h3>
                  <p className="text-[#1e293b] font-medium flex items-center gap-2">
                    Verified
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-slate-100">
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-6 py-2.5 rounded-xl font-semibold transition-colors duration-200"
              >
                <LogOut size={18} strokeWidth={2} />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
