import React, { useEffect, useState } from 'react';
import './Application.css';

const Application = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const applicationsPerPage = 10;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/applications');
        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }
        const data = await response.json();
        setApplications(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const totalPages = Math.ceil(applications.length / applicationsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current applications for the page
  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = applications.slice(indexOfFirstApplication, indexOfLastApplication);

  if (loading) {
    return <div className="loading">Loading applications...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="admin-applications">
      <h2 className="admin-title">Job Applications</h2>
      {currentApplications.length > 0 ? (
        <div className="applications-grid ">
          {currentApplications.map((application) => (
            <div className="application-card" key={application._id}>
              <p className='text-2xl font-bold'>Job Title</p>
              <h3 className='text-2xl text-blue-500 uppercase'>{application.jobId?.title || 'Unknown Job Title'}</h3>
              <p><strong>Applicant Name:</strong> {application.name}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone}</p>
              <p><strong>Portfolio:</strong> 
                <a href={application.portfolio} className='text-blue-600 underline' target="_blank" rel="noopener noreferrer">
                  View Portfolio
                </a>
              </p>
              <p><strong>Resume:</strong> 
                <a href={`http://localhost:5000${application.resume}`} className='text-blue-600 underline' target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No applications available.</p>
      )}

      {/* Pagination Controls */}
      <div className="pagination flex justify-center items-center gap-9 mt-9">
        <button className='text-blue-500'
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className='text-blue-500'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Application;
