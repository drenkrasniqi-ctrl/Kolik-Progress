import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // ✅ custom Axios with CSRF/session handling

function MFALogin() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('mfa_email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate('/login'); // If no email found, force re-login
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('mfa-login/', { email, code }); // ✅ CSRF-safe request
      alert('Login successful!');
      localStorage.removeItem('mfa_email');
      navigate('/'); // 🔁 Change this to `/dashboard` or protected route later
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Invalid MFA code. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter your MFA code
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter the 6-digit code from your authenticator app.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError('');
            }}
            placeholder="6-digit code"
            maxLength={6}
            className="w-full border border-gray-300 p-2 rounded text-center tracking-widest"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Verify MFA
          </button>
        </form>
      </div>
    </div>
  );
}

export default MFALogin;
