const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 px-4">
      {/* Hero Section */}
      <section className="text-center py-20 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900">
          Save money. Compare grocery prices from your favourite<br />
          <span className="text-blue-600">Czech supermarkets.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Kolik helps you find the cheapest basket across Billa, Tesco and Albert.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
          Start Comparing
        </button>
      </section>

      {/* Supermarket Logos */}
      <section className="flex justify-center flex-wrap gap-10 mb-20">
        {[
          { src: "/images/billa.svg", alt: "Billa" },
          { src: "/images/tesco.jpg", alt: "Tesco" },
          { src: "/images/albert.png", alt: "Albert" },
        ].map((store) => (
          <div
            key={store.alt}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center w-36 h-36"
          >
            <img src={store.src} alt={store.alt} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="text-center max-w-xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">How it works?</h2>
        <ul className="text-left text-lg text-gray-700 space-y-2 leading-relaxed">
          <li>➊ Search for a product</li>
          <li>➋ Compare across shops</li>
          <li>➌ Save and shop smarter!</li>
        </ul>
      </section>

      {/* Instruction Placeholder */}
      <section className="mb-16">
        <div className="p-8 border-2 border-dashed rounded-xl text-center text-gray-400 bg-white shadow-inner max-w-3xl mx-auto">
          📹 Maybe a short instruction video here?
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-8 border-t text-center text-sm text-gray-600 max-w-4xl mx-auto">
        <h4 className="text-xl font-semibold mb-2">About Kolik</h4>
        <p className="mb-4">
          We are a student-built, privacy-focused tool to help Czech shoppers make smart choices
          without tracking or ads.
        </p>
        <div className="flex justify-center gap-6 text-gray-500">
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
