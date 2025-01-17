import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Career.css';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://mighty-plethora-api-zfw2.vercel.app/api/jobs');
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
        <h1 className='leading-10'>Join Us Now</h1>
        <p>
          At <span className="text-custom-gold relative -top-1 text-xl">Mighty Plethora Events</span>, we are
          passionate about capturing moments and creating unforgettable experiences...
        </p>
      </div>
      <div className="jobs-container p-6" key={'container'}>
        <h3 className='text-white text-2xl font-bold mb-8'>Available Jobs</h3>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              {console.log(job._id)}
              <h4 className='uppercase'>{job.title}</h4>
              <h3>Job Description</h3>
              <p className='pl-3'>{job.description}</p>
              <h3>Location</h3>
              <span className='pl-3 capitalize'>{job.location}</span>
              <div className="buttons">
              <button onClick={() => navigate(`/apply/${job._id}`)}>Apply</button>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Career;
