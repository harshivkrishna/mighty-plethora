import React, { useEffect, useState } from 'react';
import './Application.css';
import 'react-toastify';
import { toast } from 'react-toastify';

const Application = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const applicationsPerPage = 2;

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

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Ensuring smooth scroll behavior
    });
  }, [currentPage]); // This will run when currentPage changes

  // Get current applications for the page
  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = applications.slice(indexOfFirstApplication, indexOfLastApplication);

  const handleDelete = async (applicationId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/applications/${applicationId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setApplications((prevApplications) =>
          prevApplications.filter((application) => application._id !== applicationId)
        );
        toast.success('Application deleted successfully');
      } else {
        toast.error('Failed to delete application');
      }
    } catch (err) {
      alert('Error deleting application');
      console.error(err);
    }
  };

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
        <div className="applications-grid">
          {currentApplications.map((application) => (
            <div className="application-card" key={application._id}>
              <h2 className='text-xl font-semibold'>Job Title</h2>
              <h3 className='text-2xl font-bold capitalize my-2'>{application.jobId?.title || 'Unknown Job Title'}</h3>
              <p><strong>Applicant Name:</strong> {application.name}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone}</p>
              <p><strong>Portfolio:</strong> 
                <a href={application.portfolio} target="_blank" className='text-blue-500 underline' rel="noopener noreferrer">
                  View Portfolio
                </a>
              </p>
              <p><strong>Resume:</strong> 
                <a href={`http://localhost:5000${application.resume}`}  className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </p>
              <button className="delete-button" onClick={() => handleDelete(application._id)}>
                Delete Application
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No applications available.</p>
      )}

      {/* Pagination Controls */}
      <div className="pagination flex justify-center items-center gap-6 my-4">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className='page-button'
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className='page-button'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Application;
