function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-white px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Save money. Compare grocery prices from your favourite Czech supermarkets.
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Kolik helps you find the cheapest basket across Billa, Tesco, and Albert.
      </p>

      <button className="mb-10 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
        Start Comparing
      </button>

      {/* Supermarket Logos */}
      <div className="flex justify-center gap-10 mb-16 flex-wrap">
        <img
          src="/images/billa.svg"
          alt="Billa"
          className="w-28 h-28 object-contain rounded-lg shadow hover:scale-105 transition duration-300"
        />
        <img
          src="/images/tesco.jpg"
          alt="Tesco"
          className="w-28 h-28 object-contain rounded-lg shadow hover:scale-105 transition duration-300"
        />
        <img
          src="/images/albert.png"
          alt="Albert"
          className="w-28 h-28 object-contain rounded-lg shadow hover:scale-105 transition duration-300"
        />
      </div>

      {/* How it works section */}
      <div className="w-full max-w-5xl bg-blue-50 rounded-xl px-6 py-10 shadow-inner animate-fadeIn">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">How it works?</h3>

        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Search for a product</h4>
            <p className="text-sm text-gray-600">
              Enter what you’re looking for — from milk to snacks, we’ll find it for you.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Compare across shops</h4>
            <p className="text-sm text-gray-600">
              Instantly view the same item’s price across BILLA, Tesco, and Albert.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Save and shop smarter!</h4>
            <p className="text-sm text-gray-600">
              Pick the best deal and shop smarter, saving time and money every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
