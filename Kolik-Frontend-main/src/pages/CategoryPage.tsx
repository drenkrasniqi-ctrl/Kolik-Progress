import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { slug } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Category: {slug?.toUpperCase()}</h1>
      <p className="mt-4 text-gray-700">Showing items from the {slug} category.</p>
    </div>
  );
}
