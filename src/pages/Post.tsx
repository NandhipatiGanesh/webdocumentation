import { useParams } from "react-router-dom";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Post Page</h1>
      <p className="mt-2 text-gray-700">Slug: {slug}</p>
    </div>
  );
}
