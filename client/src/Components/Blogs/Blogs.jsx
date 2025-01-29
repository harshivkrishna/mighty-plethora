import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-4 p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
          {blog.coverImageUrl && (
            <img src={blog.coverImageUrl} alt="Cover" className="w-full h-40 object-cover mt-2 rounded" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
