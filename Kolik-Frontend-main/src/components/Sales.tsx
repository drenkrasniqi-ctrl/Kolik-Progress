import React from 'react';

const promotions = [
  {
    title: '💰 Save More with Kolik!',
    subtitle: 'Exclusive store discounts just for you.',
    description: 'Up to 30% off selected groceries this week.',
  },
  {
    title: '🛍️ Fresh Picks Daily',
    subtitle: 'Your local store, now fresher.',
    description: 'Get the freshest items with next-day updates.',
  },
  {
    title: '🚚 Fast Delivery',
    subtitle: 'Groceries at your door.',
    description: 'We deliver within 2 hours, no extra cost.',
  },
];

const SaleCard = ({ title, subtitle, description }: typeof promotions[0]) => (
  <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-2xl shadow-md p-6 w-full max-w-sm transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-sm mb-1 font-medium">{subtitle}</p>
    <p className="text-sm">{description}</p>
  </div>
);

const SalesSection = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
        {promotions.map((promo, idx) => (
          <SaleCard key={idx} {...promo} />
        ))}
      </div>
    </section>
  );
};

export default SalesSection;
