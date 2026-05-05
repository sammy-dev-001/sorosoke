import axios from 'axios';

// Create an Axios instance configured with the backend base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://sorosoke-backend-production.up.railway.app/api',
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

// GET /api/cases?category=...&keyword=...&location=...
export const getCases = async (filters = {}) => {
  const { category, keyword, location } = filters;
  
  // Construct params object, removing empty values
  const params = {};
  if (category && category !== 'All Categories') params.category = category;
  if (keyword) params.keyword = keyword;
  if (location && location !== 'All Locations') params.location = location;

  const response = await api.get('/cases', { params });
  // Handle various backend response formats
  return response.data.cases || response.data.data || response.data;
};

// GET /api/cases/:id
export const getCaseById = async (id) => {
  const response = await api.get(`/cases/${id}`);
  // Handle various backend response formats
  return response.data.case || response.data.data || response.data;
};

// ==========================================
// COMPLAINTS
// ==========================================

// POST /api/complaints
export const createComplaint = async (data) => {
  // Axios will automatically set the correct Content-Type with boundary if data is FormData
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

// GET /api/ngos?category=...
export const getNGOs = async (category) => {
  const params = {};
  if (category && category !== 'All Categories') params.category = category;
  
  const response = await api.get('/ngos', { params });
  return response.data;
};

// ==========================================
// DOCUMENTS (NEW)
// ==========================================

// POST /api/documents/:caseId/generate
export const generateDocument = async (caseId) => {
  const response = await api.post(`/documents/${caseId}/generate`);
  return response.data;
};

// GET /api/documents/:caseId
export const getCaseDocuments = async (caseId) => {
  const response = await api.get(`/documents/${caseId}`);
  return response.data;
};

export default api;
