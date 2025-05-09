import api from './axios'; // Use the custom Axios instance with CSRF + cookies

export async function logoutUser() {
  try {
    await api.post('logout/'); // Use relative path (baseURL is already set)

    // Clean up local storage
    localStorage.clear();

    // Redirect to login page
    window.location.href = '/login';
  } catch (err: any) {
    console.error('Logout failed:', err.response?.data || err);
  }
}
