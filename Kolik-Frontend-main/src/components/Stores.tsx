import React from 'react';
import { useNavigate } from 'react-router-dom';

const stores = [
  { name: 'BILLA', logo: '/logos/billa.svg', slug: 'billa' },
  { name: 'TESCO', logo: '/logos/tesco.jpg', slug: 'tesco' },
  { name: 'ALBERT', logo: '/logos/albert.png', slug: 'albert' },
  { name: 'LIDL', logo: '/logos/lidl.webp', slug: 'lidl' },
];

const Stores = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-6 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stores.map((store, index) => (
          <div
            key={index}
            onClick={() => navigate(`/store/${store.slug}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >
            <div className="flex items-center justify-center bg-gray-100 h-40 p-4">
              <img
                src={store.logo}
                alt={store.name}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white text-center py-3 font-semibold text-md">
              {store.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
