function SalesSection() {
    return (
      <div className="bg-white px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Promotions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between h-80"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Save More with Kolik!</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Exclusive store discounts just for you.
                </p>
                <p className="text-sm text-gray-500">
                  Looking to slash your grocery bill? We’ve got you covered.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="bg-yellow-400 px-2 py-1 text-sm font-semibold text-black rounded">
                  Kolik
                </div>
                <div className="bg-red-500 px-2 py-1 text-sm font-semibold text-white rounded">
                  BILLA
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default SalesSection;
  