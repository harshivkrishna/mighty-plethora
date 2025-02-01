import { useEffect, useState } from "react";
import axios from "axios";
import './Blogs.css'
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://mighty-plethora-api-zfw2.vercel.app/api/blogs");
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
    <div>
      <h2 className="text-4xl text-center text-white font-bold mb-4">Blogs</h2>
      <div className="p-4 blogs-container">
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-4 p-4 border-2 rounded-xl blog-box shadow">
          {blog.coverImageUrl && (
            <img src={blog.coverImageUrl} alt="Cover" className="w-full h-40 object-cover mt-2 rounded" />
          )}
          <h3 className="text-xl text-white uppercase my-4 font-semibold">{blog.title}</h3>
          <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default Blogs;
