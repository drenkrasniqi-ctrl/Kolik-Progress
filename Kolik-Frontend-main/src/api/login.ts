import api from './axios';


function getCSRFTokenFromCookie() {
  const match = document.cookie.match(/csrftoken=([\w-]+)/);
  return match ? match[1] : '';
}


export async function loginUser(email: string, password: string) {
  const csrfToken = getCSRFTokenFromCookie();

  const response = await api.post(
    '/auth/login/',
    { email, password },
    {
      headers: {
        'X-CSRFToken': csrfToken
      }
    }
  );
  return response.data;
}