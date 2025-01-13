import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Career.css';

const Career = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar delay={1} />
      <div className="contact-top-container"></div>
      <div className="contact-container bg-black text-center text-white">
        <h1>Join Us Now</h1>
        <p>
          At <span className="text-custom-gold relative -top-1 text-xl">Mighty Plethora Events</span>, we are
          passionate about capturing moments and creating unforgettable experiences...
        </p>
      </div>
      <div className="jobs-container">
        <h3>Available Jobs</h3>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <span>{job.location}</span>
            </div>
          ))
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Career;
