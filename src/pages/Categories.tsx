import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Dairy", image: "/public/images/diary.jpg" },
  { name: "Bakery", image: "/images/bakery.jpg" },
  { name: "Beverages", image: "/images/beverages.jpg" },
  { name: "Fruits", image: "/images/fruits.jpg" },
  { name: "Snacks", image: "/images/snacks.jpg" },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    navigate(`/products?category=${category.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Categories Page</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleClick(cat.name)}
            className="group cursor-pointer bg-white rounded-xl p-4 shadow hover:shadow-xl hover:-translate-y-1 transition text-center border"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-28 object-cover rounded-md mb-3 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-lg font-semibold text-gray-700">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
