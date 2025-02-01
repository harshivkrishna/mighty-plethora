import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", coverImage: null });
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://mighty-plethora-api-zfw2.vercel.app/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setBlogs([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, coverImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    if (form.coverImage) formData.append("coverImage", form.coverImage);

    try {
      await axios.post("https://mighty-plethora-api-zfw2.vercel.app/api/blogs", formData);
      fetchBlogs();
      setForm({ title: "", content: "", coverImage: null });
    } catch (err) {
      console.error("Error creating blog:", err);
    }
  };

  const handleEdit = (blog) => {
    setEditData(blog);
    setOpen(true);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", editData.title);
    formData.append("content", editData.content);
    if (editData.coverImage) formData.append("coverImage", editData.coverImage);

    try {
      await axios.put(`https://mighty-plethora-api-zfw2.vercel.app/api/blogs/${editData._id}`, formData);
      fetchBlogs();
      setOpen(false);
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mighty-plethora-api-zfw2.vercel.app/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Manage Blogs</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-2 border border-gray-300" />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required className="w-full p-2 border border-gray-300" />
        <input type="file" onChange={handleFileChange} className="w-full" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Create Blog</button>
      </form>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border border-gray-300 p-4">
            {blog.coverImageUrl && <img src={blog.coverImageUrl} alt="Cover" className="w-full h-48 object-cover" />}
            <h2 className="text-lg text-white font-bold">{blog.title}</h2>
            <p className="text-white">{blog.content}</p>
            <div className="mt-2 space-x-2">
              <button onClick={() => handleEdit(blog)} className="px-3 py-1 bg-orange-500 text-white">Edit</button>
              <button onClick={() => handleDelete(blog._id)} className="px-3 py-1 bg-red-500 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editData && open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 border border-gray-300">
            <h2 className="text-lg font-bold">Edit Blog</h2>
            <input type="text" value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} className="w-full p-2 border border-gray-300" />
            <textarea value={editData.content} onChange={(e) => setEditData({ ...editData, content: e.target.value })} className="w-full p-2 border border-gray-300" />
            <input type="file" onChange={(e) => setEditData({ ...editData, coverImage: e.target.files[0] })} className="w-full" />
            <div className="mt-2 space-x-2">
              <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white">Update Blog</button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-500 text-white">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}