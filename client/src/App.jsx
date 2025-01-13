import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ContactPage from './Pages/Contact/ContactPage'
import AboutPage from './Pages/About/AboutPage'
import Career from './Pages/Career/Career'
import Admin from './Pages/Admin/Admin'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/careers' element={<Career/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </>
  )
}

export default App