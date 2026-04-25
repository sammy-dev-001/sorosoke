import axios from 'axios';

// Create an Axios instance configured with the backend base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://sorosoke-backend-production.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach auth tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('speakup_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// ==========================================
// AUTHENTICATION
// ==========================================

// POST /api/auth/register
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// POST /api/auth/login
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// GET /api/auth/me
export const getMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

// ==========================================
// CASES
// ==========================================

// POST /api/cases
export const createCase = async (caseData) => {
  const response = await api.post('/cases', caseData);
  return response.data;
};

// GET /api/cases
export const getCases = async () => {
  const response = await api.get('/cases');
  return response.data;
};

// GET /api/cases/:id
export const getCaseById = async (id) => {
  const response = await api.get(`/cases/${id}`);
  return response.data;
};

// ==========================================
// COMPLAINTS
// ==========================================

// POST /api/complaints
export const createComplaint = async (data) => {
  const response = await api.post('/complaints', data);
  return response.data;
};

// GET /api/cases/:caseId/complaints
export const getComplaintsByCase = async (caseId) => {
  const response = await api.get(`/cases/${caseId}/complaints`);
  return response.data;
};

// ==========================================
// NGOs
// ==========================================

// GET /api/ngos
export const getNGOs = async () => {
  const response = await api.get('/ngos');
  return response.data;
};

// GET /api/ngos?category=:category
export const getNGOsByCategory = async (category) => {
  const response = await api.get('/ngos', { params: { category } });
  return response.data;
};

export default api;
