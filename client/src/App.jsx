import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactPage from './Pages/Contact/ContactPage';
import AboutPage from './Pages/About/AboutPage';
import Career from './Pages/Career/Career';
import Admin from './Pages/Admin/Admin';
import Apply from './Components/Apply/Apply';
import JobApplication from './Pages/JobApplication/JobApplication';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'; // Import the ProtectedRoute component
import AdminJobs from './Pages/AdminJobs/AdminJobs';
import GalleryPage from './Pages/GalleryPage/GalleryPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/careers' element={<Career />} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route
        path='/admin/jobs'
        element={
          <ProtectedRoute>
            <AdminJobs />
          </ProtectedRoute>
        }
      />
      <Route
        path='/admin/applications'
        element={
          <ProtectedRoute>
            <JobApplication />
          </ProtectedRoute>
        }
      />
      <Route path='/apply/:jobId' element={<Apply />} />
    </Routes>
  );
}

export default App;
