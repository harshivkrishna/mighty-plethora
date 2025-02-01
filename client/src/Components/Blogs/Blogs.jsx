import { useEffect, useState } from "react";
import axios from "axios";
import "boxicons/css/boxicons.min.css"; // Import BoxIcons CSS
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

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
          <div
            key={blog._id}
            className="mb-4 p-4 border-2 rounded-xl blog-box shadow cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
          >
            {blog.coverImageUrl && (
              <img src={blog.coverImageUrl} alt="Cover" className="w-full h-40 object-cover mt-2 rounded" />
            )}
            <h3 className="text-xl text-custom-gold uppercase my-4 font-semibold">{blog.title}</h3>
            <p className="text-white">
              {blog.content.length > 100 ? blog.content.slice(0, 100) + "..." : blog.content}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedBlog && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-4/5 max-w-4xl relative shadow-lg">
            {/* Close Button with BoxIcon */}
            <button
              className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-red-600"
              onClick={() => setSelectedBlog(null)}
            >
              <i className="bx bxs-x-circle"></i>
            </button>

            {selectedBlog.coverImageUrl && (
              <img src={selectedBlog.coverImageUrl} alt="Cover" className="w-full h-60 object-cover rounded" />
            )}
            <h3 className="text-2xl uppercase text-custom-gold font-bold my-4">{selectedBlog.title}</h3>
            <p className="text-black font-medium">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
