import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Apply.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Navbar/Navbar';

const Apply = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors on input change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    setErrors((prev) => ({ ...prev, resume: '' })); // Clear resume error
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
      isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }

    if (!formData.portfolio) {
      newErrors.portfolio = 'Portfolio or LinkedIn is required.';
      isValid = false;
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append('jobId', jobId);

    try {
      const response = await fetch('https://mighty-plethora-api-zfw2.vercel.app/api/applications', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        toast.success('Application submitted successfully!');
        
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          portfolio: '',
          resume: null,
        });
      } else {
        toast.error('Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='h-24'></div>
      <div className="apply-container">
        <ToastContainer />
      <h2>Apply for Job ID: {jobId}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}

        <label>Portfolio/LinkedIn:</label>
        <input
          type="url"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleInputChange}
          required
        />
        {errors.portfolio && <p className="error-text">{errors.portfolio}</p>}

        <label>Resume:</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          required
        />
        {errors.resume && <p className="error-text">{errors.resume}</p>}

        <button type="submit">Submit Application</button>
      </form>
    </div>
    </div>
  );
};

export default Apply;
