import React, { useEffect, useState } from 'react';
import BannerModal from './BannerModal';

const banners = [
  {
    title: '🚀 Promo Section Works',
    subtitle: 'Everything is now integrated smoothly.',
    details: 'This promo showcases how seamlessly new components are added into the app without breaking functionality.',
  },
  {
    title: '🔥 Limited Time Deal',
    subtitle: 'Enjoy massive discounts across all categories.',
    details: 'Get up to 50% off on selected items. Offer valid until the end of this week!',
  },
  {
    title: '🛒 Fresh Arrivals',
    subtitle: 'New products added weekly. Don’t miss out!',
    details: 'We update our catalog every Monday with fresh arrivals just for you.',
  },
];

const PromoBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const handleBannerClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    } else {
      setPaused(true);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setPaused(false);
  };

  const getPositionClass = (index: number) => {
    if (index === activeIndex) return 'z-20 scale-100 opacity-100';
    if ((index + 1) % banners.length === activeIndex) return 'z-10 scale-90 opacity-60 -translate-x-48';
    if ((index + banners.length - 1) % banners.length === activeIndex) return 'z-10 scale-90 opacity-60 translate-x-48';
    return 'hidden';
  };

  return (
    <div className="relative h-[220px] flex justify-center items-center my-10 overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {banners.map((banner, index) => (
          <div
            key={index}
            onClick={() => handleBannerClick(index)}
            className={`absolute transition-all duration-700 ease-in-out transform w-[80%] max-w-xl cursor-pointer ${getPositionClass(index)}`}
          >
            <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white py-8 px-6 text-center rounded-2xl shadow w-full hover:scale-105 transition">
              <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
              <p className="text-lg font-medium">{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <BannerModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={banners[activeIndex].title}
        description={banners[activeIndex].details}
      />
    </div>
  );
};

export default PromoBanner;
