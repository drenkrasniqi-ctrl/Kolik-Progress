import React from 'react';

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">2. Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mb-2">2.1 Introduction</h2>
      <p className="mb-4">
        Kolik values your privacy and is committed to protecting your personal data.
        This Privacy Policy outlines how we collect, use, and safeguard your information when you use Kolik.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2.2 Data We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Information: Name, email address, login credentials, ID/Passport for identity verification.</li>
        <li>Usage Data: Pages visited, time spent on the website, preferences.</li>
        <li>Transaction Data: Grocery list items saved and price comparison history.</li>
        <li>Technical Data: IP address, browser type, and device information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2.3 How We Use Your Data</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and improve our price comparison services.</li>
        <li>To personalise your shopping experience.</li>
        <li>To communicate important updates or promotional offers (if consent is given).</li>
        <li>To ensure website security and prevent fraudulent activity and verify user identity through ID/Passport verification every six months.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2.4 Data Sharing and Third Party Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>We do not sell or rent your personal information to third parties.</li>
        <li>We may share data with third-party service providers (e.g., analytics, payment processors) when necessary for functionality.</li>
        <li>Some tools like Google Analytics may collect data to improve performance.</li>
        <li>Prices and product information are obtained from third-party supermarket APIs, and Kolik does not control their accuracy.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2.5 Data Security</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Kolik implements security measures to protect your data from unauthorised access, loss, or misuse.</li>
        <li>No online service is completely secure, and we cannot guarantee absolute protection.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2.6 User Rights and Control</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You have the right to access, update, or delete your personal information.</li>
        <li>You can opt out of marketing communications at any time.</li>
        <li>You may request deletion or restriction of your data by contacting us.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2.7 Cookie Usage</h2>
      <p className="mb-4">
        Kolik uses cookies to enhance user experience and analyse performance.
        Essential cookies are used for functionality, analytics cookies to track usage trends,
        and marketing cookies for advertisements. Cookie preferences can be managed via your browser settings or our cookie preference center.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2.9 Changes to Privacy Policy</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Kolik reserves the right to update this Privacy Policy at any time.</li>
        <li>Any changes will be posted on this page with the updated date.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2.10 Contact Information</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy, please contact us at{' '}
        <a href="mailto:KolikPCU@gmail.com" className="text-blue-500 underline">KolikPCU@gmail.com</a>.
      </p>

      <p className="mt-4">Kolik.</p>
    </div>
  );
}

export default Privacy;
