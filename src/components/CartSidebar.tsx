import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="w-80 p-4 bg-white shadow-xl fixed top-20 right-4 rounded-lg z-50 border">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-start border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.store} — {item.price}</p>
                  <p className="text-xs text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-gray-800 border-t pt-2">
            Total: {total.toFixed(2)} Kč
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
