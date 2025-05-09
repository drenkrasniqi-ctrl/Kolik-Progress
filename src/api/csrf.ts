import api from './axios';

export async function getCSRFToken() {
  await api.get('/auth/csrf/');  // This sets the csrftoken cookie
}