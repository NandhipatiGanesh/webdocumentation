import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Home Page</h1>
      <Link to="/posts/hello-world" className="text-blue-500 underline">
        Go to Hello World Post
      </Link>
    </div>
  );
}
