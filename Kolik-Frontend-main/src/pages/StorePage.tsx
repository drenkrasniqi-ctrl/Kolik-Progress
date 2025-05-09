import { useParams } from 'react-router-dom';

export default function StorePage() {
  const { slug } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to {slug?.toUpperCase()}</h1>
      <p className="mt-4 text-gray-700">This is the store page for {slug}.</p>
    </div>
  );
}

