import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Upload from '../Upload/Upload';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminCredentials = {
    email: 'admin@example.com', // Replace with actual admin email
    password: 'admin123', // Replace with actual admin password
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
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
              className="p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full rounded-md"
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
