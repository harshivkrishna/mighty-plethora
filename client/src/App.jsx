import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ContactPage from './Pages/Contact/ContactPage'
import AboutPage from './Pages/About/AboutPage'
import Career from './Pages/Career/Career'
import Admin from './Pages/Admin/Admin'
import Jobs from './Components/Jobs/Jobs'
import Apply from './Components/Apply/Apply'
import Application from './Components/Application/Application'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/careers' element={<Career/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/jobs' element={<Jobs/>}></Route>
        <Route path="/apply/:jobId" element={<Apply />} />
        <Route path='/admin/applications' element={<Application/>}></Route>
      </Routes>
    </>
  )
}

export default App