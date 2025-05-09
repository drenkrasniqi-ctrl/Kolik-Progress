import React from 'react';

const InfoSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 text-left text-gray-800 max-w-5xl mx-auto rounded-xl my-8">
      <h3 className="text-xl font-bold mb-4">Why Choose Kolik?</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Compare prices from different stores instantly.</li>
        <li>Track your order in real-time.</li>
        <li>Access exclusive weekly promotions.</li>
        <li>Zero delivery fees for your first month!</li>
      </ul>
    </section>
  );
};

export default InfoSection;
