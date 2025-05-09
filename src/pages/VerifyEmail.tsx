import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      setStatus('error');
      setMessage('Verification token missing.');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await api.post('verify/', { token });

        if (response.status === 200) {
          setStatus('success');
          setMessage('Your email has been verified! Redirecting to login...');
          setTimeout(() => navigate('/login'), 2500);
        } else {
          throw new Error('Unexpected status');
        }
      } catch (err) {
        setStatus('error');
        setMessage('Verification failed. The link may be invalid or expired.');
      }
    };

    verifyToken();
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md text-center">
        {status === 'loading' && <p className="text-gray-600">Verifying your email...</p>}
        {status === 'success' && <p className="text-green-600">{message}</p>}
        {status === 'error' && <p className="text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
