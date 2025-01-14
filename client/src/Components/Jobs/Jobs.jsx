import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Jobs.css';
import Footer from '../../Components/Footer/Footer';
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobData, setJobData] = useState({ title: '', description: '', location: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const API_URL = 'http://localhost:5000/api/jobs';

  // Fetch jobs
  const fetchJobs = async () => {
    try {
      const response = await axios.get(API_URL);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add or update a job
  const handleSaveJob = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update job
        await axios.put(`${API_URL}/${editingJobId}`, jobData);
      } else {
        // Add new job
        await axios.post(API_URL, jobData);
      }
      fetchJobs(); // Refresh jobs
      resetForm();
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  // Delete a job
  const handleDeleteJob = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchJobs(); // Refresh jobs
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  // Edit a job
  const handleEditJob = (job) => {
    setJobData(job);
    setIsEditing(true);
    setEditingJobId(job._id);
  };

  // Reset form
  const resetForm = () => {
    setJobData({ title: '', description: '', location: '' });
    setIsEditing(false);
    setEditingJobId(null);
  };

  return (
    <div className="admin-page">
      <h2>Admin - Manage Jobs</h2>
      <form onSubmit={handleSaveJob} className="job-form">
        <input
          type="text"
          placeholder="Job Title"
          value={jobData.title}
          onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Job Description"
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Location"
          value={jobData.location}
          onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
          required
        />
        <button type="submit">{isEditing ? 'Update Job' : 'Add Job'}</button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="cancel-button">
            Cancel
          </button>
        )}
      </form>

      <div className="job-list">
        <h3>Available Jobs</h3>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <span>{job.location}</span>
              <div className="job-actions">
                <button onClick={() => handleEditJob(job)}>Edit</button>
                <button onClick={() => handleDeleteJob(job._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
