import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/auth/',
  withCredentials: true,
});

// 🔍 Helper to extract CSRF token from cookies
function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(';').shift();
}

// 🔐 Automatically attach CSRF token to non-GET requests
api.interceptors.request.use(config => {
  const csrfToken = getCookie('csrftoken');
  if (csrfToken && config.method !== 'get') {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

export default api;
