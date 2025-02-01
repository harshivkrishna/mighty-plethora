import React, { useState, useEffect } from 'react';

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '', author: '', id: null, image: null });
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch('https://mighty-plethora-api-zfw2.vercel.app/api/blogs') // Replace with your server's URL
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = formData.id ? 'PUT' : 'POST';
    const url = formData.id
      ? `https://mighty-plethora-api-zfw2.vercel.app/${formData.id}`
      : 'https://mighty-plethora-api-zfw2.vercel.app/';

    const blogData = {
      title: formData.title,
      content: formData.content,
      author: formData.author,
      image: formData.image, // Add image data to form submission
    };

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogData),
    })
      .then(() => {
        fetchBlogs();
        setFormData({ title: '', content: '', author: '', id: null, image: null });
        setImageName(''); // Clear the image name after submission
      })
      .catch(error => console.error('Error saving blog:', error));
  };

  const handleDelete = id => {
    fetch(`https://mighty-plethora-api-zfw2.vercel.app/api/blogs/${id}`, { method: 'DELETE' })
      .then(() => fetchBlogs())
      .catch(error => console.error('Error deleting blog:', error));
  };

  const handleEdit = blog => {
    setFormData({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      id: blog._id,
      image: blog.image, // Set image data on edit
    });
    setImageName(blog.image); // Set image name on edit
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Display file name when uploaded
      setFormData({ ...formData, image: file }); // Store the file in formData
    }
  };

  return (
    <div className="admin-blogs">
      <h1>Admin Panel - Blogs</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={e => setFormData({ ...formData, content: e.target.value })}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={e => setFormData({ ...formData, author: e.target.value })}
          required
        />
        <input
          type="file"
          onChange={handleImageUpload}
        />
        {/* Display image name in white color */}
        {imageName && <p className="text-white mt-2">{imageName}</p>}

        <button type="submit">{formData.id ? 'Update' : 'Create'} Blog</button>
      </form>

      <div className="blogs-list">
        <h2>All Blogs</h2>
        {blogs.map(blog => (
          <div key={blog._id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.content.substring(0, 100)}</p>
            <button onClick={() => handleEdit(blog)}>Edit</button>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogs;
