import React from 'react';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <h2 className="text-2xl font-semibold mb-2">1.1 Introduction</h2>
      <p className="mb-4">
        Welcome to Kolik! By accessing Kolik you agree to be bound by these Terms and Conditions.
        If you do not agree with any part of these terms, please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1.2 User Eligibility</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You must be at least 18 years old to utilise our services. If you are under 18, you may only utilise the website under the supervision or a legal guardian.</li>
        <li>By creating an account, you confirm that the information provided is accurate and complete.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1.3 Account Registration and Security</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li>We reserve the right to suspend or terminate accounts found to be violating our terms or engaging in fraudulent activity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1.4 Use of Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Kolik provides price comparisons across major supermarkets in Czechia and allows users to save their grocery lists.</li>
        <li>Prices are updated periodically and may not always reflect real-time changes.</li>
        <li>You may not use our services for any illegal or unauthorised purposes.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1.5 Intellectual Property</h2>
      <ul className="list-disc list-inside mb-4">
        <li>All content, including logos, text, images, and software, is owned by Kolik or its licensors.</li>
        <li>Data sources from third-party supermarket APIs remain the property of the respective supermarkets or data providers.</li>
        <li>Unauthorised reproduction, distribution, or modification of our content is prohibited.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1.6 Limitation of Liability</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Kolik does not guarantee the accuracy or availability of the prices displayed.</li>
        <li>Users should verify final prices directly with supermarkets before making purchases.</li>
        <li>Kolik is not responsible for direct, indirect, incidental, or consequential damages from the use of our services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1.7 Modification to Terms</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Kolik can update these Terms at any time, with notifications for significant changes.</li>
        <li>Continued use of the site after changes implies acceptance of new terms.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1.8 Contact Information</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact Kolik at {' '}
        <a href="mailto:KolikPCU@gmail.com" className="text-blue-500 underline">KolikPCU@gmail.com</a>.
      </p>
    </div>
  );
}

export default Terms;
