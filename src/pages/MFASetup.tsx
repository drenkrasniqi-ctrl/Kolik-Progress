import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // ✅ uses custom axios instance

function MFASetup() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await api.get('mfa/setup/');
        setQrCode(response.data.qr_code_base64);
        setSecret(response.data.secret);
      } catch (err: any) {
        setError('Failed to load MFA setup. Please refresh the page.');
      }
    };

    fetchQRCode();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(code)) {
      setError('MFA code must be 6 digits.');
      return;
    }

    try {
      await api.post('verify-mfa/', { code }); // ✅ now uses custom axios
      alert('MFA setup successful!');
      navigate('/');
    } catch (err: any) {
      if (err.response?.data?.error) {
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

        {qrCode ? (
          <div className="flex justify-center">
            <img
              src={`data:image/png;base64,${qrCode}`}
              alt="MFA QR Code"
              className="w-40 h-40 rounded shadow-md"
            />
          </div>
        ) : (
          <p className="text-center text-sm text-gray-500">Loading QR code...</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError('');
            }}
            placeholder="Enter 6-digit code"
            maxLength={6}
            className="w-full border border-gray-300 p-2 rounded text-center tracking-widest"
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

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

export default MFASetup;
