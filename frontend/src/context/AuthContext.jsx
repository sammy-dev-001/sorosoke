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
      if (token) {
        try {
          // Assuming getMe returns the user profile
          const profile = await getMe();
          setUser(profile);
        } catch (error) {
          console.error("Failed to fetch user profile, token might be invalid:", error);
          localStorage.removeItem('speakup_token');
          setUser(null);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const loginUser = async (credentials) => {
    try {
      // Assuming response contains { token, user: { ... } } or similar
      const response = await login(credentials);
      
      const token = response.token || response.accessToken;
      if (token) {
        localStorage.setItem('speakup_token', token);
      }
      
      setUser(response.user || response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await register(userData);
      
      const token = response.token || response.accessToken;
      if (token) {
        localStorage.setItem('speakup_token', token);
      }
      
      setUser(response.user || response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('speakup_token');
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
