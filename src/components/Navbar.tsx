import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ onBurgerClick }: { onBurgerClick: () => void }) => {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="bg-white px-4 py-3 shadow-md flex items-center justify-between">
        {/* Left: Burger + Logo */}
        <div className="flex items-center gap-3">
          <button onClick={onBurgerClick} className="text-2xl">
            <FaBars />
          </button>
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            🛒 Kolik
          </Link>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <input
            type="text"
            placeholder="🔍 Search products"
            className="w-full px-4 py-2 border rounded-full text-black shadow-sm"
          />
        </div>

        {/* Right: Auth + Cart */}
        <div className="flex items-center gap-4 text-sm">
          <Link to="/login" className="hover:underline">Log in</Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
          >
            Register
          </Link>

          {/* Cart icon with count badge */}
          <button
            className="text-xl relative"
            onClick={() => setShowCart((prev) => !prev)}
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Cart Dropdown */}
      {showCart && (
        <div className="absolute right-4 top-16 w-72 bg-white border rounded shadow-lg z-50 p-4">
          <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
