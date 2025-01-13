"use client";
import { useState } from 'react';

const Admin = () => {
  const [image, setImage] = useState(null); // For storing selected image
  const [loading, setLoading] = useState(false); // To show loading status
  const [message, setMessage] = useState(''); // For showing success/error messages

  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file
  };

  // Handle image upload
  const handleImageUpload = async () => {
    if (!image) {
      setMessage('Please select an image first');
      return;
    }

    setLoading(true); // Show loading state
    setMessage('');

    const formData = new FormData();
    formData.append('image', image); // Append the image to the form data

    try {
      const res = await fetch('http://localhost:5000/api/images/upload', {
        method: 'POST',
        body: formData, // Send form data with the image file
      });

      if (!res.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await res.json(); // Parse the JSON response

      if (data.success) {
        setMessage('Image uploaded successfully!');
      } else {
        setMessage('Error uploading image.');
      }
    } catch (error) {
      setMessage('Error uploading image: ' + error.message);
    } finally {
      setLoading(false); // Hide loading state after the request is done
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input
        type="file"
        accept="image/*" // To limit to image types
        onChange={handleImageChange}
      />
      <button onClick={handleImageUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Admin;
