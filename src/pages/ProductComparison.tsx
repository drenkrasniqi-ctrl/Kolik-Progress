import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductComparison = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { addToCart } = useCart();

  const productMap = {
    bakery: [
      {
        name: "Rohlík",
        tesco: { price: "7 Kč", image: "/images/rohlik.webp" },
        billa: { price: "8 Kč", image: "/images/rohlik.webp" },
        albert: { price: "12 Kč", image: "/images/rohlik.webp" },
      },
    ],
    dairy: [
      {
        name: "Milk (1l)",
        tesco: { price: "18 Kč", image: "/images/milk.jpeg" },
        billa: { price: "19 Kč", image: "/images/milk.jpeg" },
        albert: { price: "21 Kč", image: "/images/milk.jpeg" },
      },
    ],
    snacks: [
      {
        name: "Bohemia salted chips",
        tesco: { price: "25 Kč", image: "/images/bohemia.webp" },
        billa: { price: "27 Kč", image: "/images/bohemia.webp" },
        albert: { price: "30 Kč", image: "/images/bohemia.webp" },
      },
    ],
    fruits: [
      {
        name: "Go Nuts - Dried Fruits and Nuts",
        tesco: { price: "31 Kč", image: "/images/dfn.avif" },
        billa: { price: "32 Kč", image: "/images/dfn.avif" },
        albert: { price: "38 Kč", image: "/images/dfn.avif" },
      },
    ],
    beverages: [
      {
        name: "Jack Daniells",
        tesco: { price: "760 Kč", image: "/images/jd.avif" },
        billa: { price: "720 Kč", image: "/images/jd.avif" },
        albert: { price: "639 Kč", image: "/images/jd.avif" },
      },
    ],
  };

  const products = productMap[category?.toLowerCase() || ""] || [];

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">🧾 {category} Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found for this category.</p>
      ) : (
        <div className="overflow-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Product</th>
                <th className="p-3 border">Tesco</th>
                <th className="p-3 border">BILLA</th>
                <th className="p-3 border">Albert</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-4 font-semibold border">{p.name}</td>
                  {[p.tesco, p.billa, p.albert].map((shop, idx) => (
                    <td key={idx} className="p-4 border text-center">
                      <img
                        src={shop.image}
                        alt={p.name}
                        className="w-16 h-16 object-contain mx-auto mb-2"
                      />
                      <p className="mb-2">{shop.price}</p>
                      <button
                        onClick={() =>
                          addToCart({
                            id: `${p.name}-${idx}`,
                            name: p.name,
                            price: shop.price,
                            store: ["Tesco", "BILLA", "Albert"][idx],
                            quantity: 1,
                            image: shop.image,
                          })
                        }
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                      >
                        Add to list
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;
