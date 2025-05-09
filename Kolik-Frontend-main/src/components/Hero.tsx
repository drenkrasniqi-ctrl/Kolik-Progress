function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          This is where you share your big idea, product, or service. Let's make something awesome.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    );
  }
  
  export default Hero;
  