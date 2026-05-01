import React, { createContext, useState, useEffect, useContext } from 'react';
import { login, register, getMe } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('speakup_token');
      const storedUser = localStorage.getItem('speakup_user');
      
      if (token) {
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {
            console.error("Failed to parse stored user", e);
          }
        }
        
        try {
          // assuming getMe returns the user profile
          const profile = await getMe();
          const userData = profile.user || (profile.data && profile.data.user) || profile.data || profile;
          setUser(userData);
          localStorage.setItem('speakup_user', JSON.stringify(userData));
        } catch (error) {
          console.error("Failed to fetch user profile, token might be invalid:", error);
          // Only clear if it's a 401 Unauthorized, to prevent logging out if backend endpoint is missing (404) or server is down
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('speakup_token');
            localStorage.removeItem('speakup_user');
            setUser(null);
          }
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const loginUser = async (credentials) => {
    try {
      const response = await login(credentials);
      
      const token = response.token || response.accessToken || (response.data && response.data.token);
      if (token) {
        localStorage.setItem('speakup_token', token);
      }
      
      const userData = response.user || (response.data && response.data.user) || response.data || response;
      setUser(userData);
      localStorage.setItem('speakup_user', JSON.stringify(userData));
      
      return response;
    } catch (error) {
      throw error;
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await register(userData);
      
      const token = response.token || response.accessToken || (response.data && response.data.token);
      if (token) {
        localStorage.setItem('speakup_token', token);
      }
      
      const savedUserData = response.user || (response.data && response.data.user) || response.data || response;
      setUser(savedUserData);
      localStorage.setItem('speakup_user', JSON.stringify(savedUserData));
      
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('speakup_token');
    localStorage.removeItem('speakup_user');
    setUser(null);
  };

  const value = {
    user,
    loading,
    loginUser,
    registerUser,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
