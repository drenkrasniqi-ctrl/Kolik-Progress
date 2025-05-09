const categories = [
    { name: 'Stores', icon: '/StoreIcon.png' },
    { name: 'Meat', icon: '/Meat.png' },
    { name: 'Bread', icon: '/Bread.png' },
    { name: 'Drinks', icon: '/Drinks.png' },
    { name: 'Snacks', icon: '/Snacks.png' },
  ];
  
  function CategoryBar() {
    return (
      <div className="bg-gray-200 py-6 px-8 flex justify-center gap-10 flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="w-28 h-28 bg-gray-300 rounded-xl flex flex-col items-center justify-center shadow hover:shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <img src={cat.icon} alt={cat.name} className="h-12 mb-2" />
            <span className="text-sm font-medium text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default CategoryBar;
  