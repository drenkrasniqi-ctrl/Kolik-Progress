import React, { useState } from 'react';
import axios from '../api/axios';

function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await axios.post('/password-reset/request/', { email });
      setMessage('If this email exists, a reset link has been sent.');
    } catch (err) {
      setMessage('If this email exists, a reset link has been sent.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            required
            
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}

export default PasswordResetRequest;
