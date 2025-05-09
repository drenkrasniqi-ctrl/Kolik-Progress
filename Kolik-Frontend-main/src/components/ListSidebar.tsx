
import { useList } from "../context/ListContext";

const ListSidebar = () => {
  const { listItems, removeFromList } = useList();

  return (
    <div className="w-80 p-4 bg-white shadow-xl fixed top-20 right-4 rounded-lg z-50 border">
      <h2 className="text-xl font-bold mb-4">📝 Your List</h2>
      {listItems.length === 0 ? (
        <p className="text-gray-500">Your list is empty.</p>
      ) : (
        <ul className="space-y-4">
          {listItems.map((item) => (
            <li key={item.id} className="flex justify-between items-start border-b pb-2">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.store} — {item.price}</p>
              </div>
              <button
                onClick={() => removeFromList(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListSidebar;
