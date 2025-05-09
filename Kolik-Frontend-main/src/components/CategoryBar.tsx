import { useNavigate } from 'react-router-dom';
import {
  FaStore,
  FaDrumstickBite,
  FaBreadSlice,
  FaGlassWhiskey,
  FaCookieBite,
} from 'react-icons/fa';

const categories = [
  { name: 'Stores', icon: <FaStore />, slug: 'stores' },
  { name: 'Meat', icon: <FaDrumstickBite />, slug: 'meat' },
  { name: 'Bread', icon: <FaBreadSlice />, slug: 'bread' },
  { name: 'Drinks', icon: <FaGlassWhiskey />, slug: 'drinks' },
  { name: 'Snacks', icon: <FaCookieBite />, slug: 'snacks' },
];

const CategoryBar = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-6 px-4">
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="cursor-pointer bg-white hover:bg-gradient-to-r from-sky-100 to-purple-100 text-gray-800 w-28 h-32 rounded-xl shadow-md flex flex-col items-center justify-center transition duration-300 transform hover:scale-105"
          >
            <div className="text-3xl mb-2 text-sky-500">{cat.icon}</div>
            <div className="text-sm font-medium">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBar;
