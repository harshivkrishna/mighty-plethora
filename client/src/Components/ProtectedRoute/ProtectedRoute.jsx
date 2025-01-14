import React from 'react';
import { Navigate } from 'react-router-dom';

// Protected Route component to guard access to the Admin page
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/admin" />; // Redirect to the home page if not authenticated
  }

  return children;
};

export default ProtectedRoute;
