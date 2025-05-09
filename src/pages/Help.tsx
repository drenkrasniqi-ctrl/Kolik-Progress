import React from 'react';

function Help() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">How to Create an Account & Use MFA</h1>
        <p className="mb-2">
          1. Click "Register" and fill out your name, email, and a secure password.
        </p>
        <p className="mb-2">
          2. After registration, you'll receive an email to verify your address.
        </p>
        <p className="mb-2">
          3. Upon logging in, you may be prompted to set up Multi-Factor Authentication (MFA).
        </p>
        <p className="mb-2">
          4. Scan the QR code with an authenticator app like Google Authenticator or Authy.
        </p>
        <p className="mb-2">
          5. Enter the generated 6-digit code to complete setup.
        </p>
      </div>
    </div>
  );
}

export default Help;
