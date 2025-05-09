import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function MFASetup() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await axios.get('/mfa/setup/');
        setQrCode(response.data.qr_code_base64);  // base64 string
        setSecret(response.data.secret);   // optional use
      } catch (err: any) {
        setError('Failed to load MFA setup. Please refresh the page.');
      }
    };

    fetchQRCode();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/verify-mfa/', { code });
      alert('MFA setup successful!');
      navigate('/'); // redirect to homepage
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Failed to verify MFA code. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Set up your MFA
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Scan the QR code below with your Authenticator App.
          </p>
        </div>

        {/* QR code loaded from backend */}
        {qrCode ? (
          <div className="flex justify-center">
            <img
              src={`data:image/png;base64,${qrCode}`}
              alt="MFA QR Code"
              className="w-40 h-40 rounded shadow-md"
            />
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading QR code...</p>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              6-digit Code
            </label>
            <input
              id="code"
              name="code"
              type="text"
              required
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Verify MFA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MFASetup;
