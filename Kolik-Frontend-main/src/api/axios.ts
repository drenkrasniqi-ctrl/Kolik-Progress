import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/auth',
  withCredentials: true, // must be enabled to send cookies
});

export default api;