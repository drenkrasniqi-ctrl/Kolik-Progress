const supermarkets = [
  {
    name: "BILLA",
    image: "/images/billa.svg",
    link: "https://www.billa.cz",
  },
  {
    name: "TESCO",
    image: "/images/tesco.jpg",
    link: "https://itesco.cz",
  },
  {
    name: "Albert",
    image: "/images/albert.png",
    link: "https://www.albert.cz",
  },
];

const Supermarkets = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">🛒 Supermarkets</h1>

      {/* Supermarket Logos */}
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {supermarkets.map((market) => (
          <a
            key={market.name}
            href={market.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 w-36 h-36 flex items-center justify-center"
          >
            <img
              src={market.image}
              alt={market.name}
              className="max-w-full max-h-full object-contain"
            />
          </a>
        ))}
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
        <p>
          You can explore and select products from any of the supermarkets listed above — BILLA, Tesco, and Albert.
          Once you’ve added items to your comparison list, Kolik will automatically calculate and show you which store
          offers the lowest total price. This allows you to make smarter shopping decisions and save money effortlessly
          by comparing offers across multiple Czech retailers in real time.
        </p>
      </div>
    </div>
  );
};

export default Supermarkets;
