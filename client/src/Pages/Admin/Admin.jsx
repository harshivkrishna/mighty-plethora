import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Upload from '../Upload/Upload';
import { toast, ToastContainer } from 'react-toastify';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); // Store auth state in localStorage
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
    localStorage.removeItem('isAuthenticated'); // Clear auth state from localStorage
  };

  // Display the login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
        <ToastContainer />
        <form
          onSubmit={handleLogin}
          className="bg-gray-700 p-8 rounded-lg shadow-lg text-center"
        >
          <h1 className="text-2xl mb-6">Admin Login</h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full rounded-md text-black outline-none border-0 "
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full rounded-md  text-black outline-none border-0 "
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // Once authenticated, show the Admin panel
  return (
    <div>
      <Sidebar />
      <div className="h-24"></div>
      <div className="flex justify-between items-center bg-gray-900 text-white p-4">
        <h1 className="text-2xl">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
      <div className="flex p-7 bg-gray-500 border-r-2 w-full justify-center h-screen">
        <Upload />
      </div>
    </div>
  );
};

export default Admin;
