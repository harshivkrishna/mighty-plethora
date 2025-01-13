import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ContactPage from './Pages/Contact/ContactPage'
import AboutPage from './Pages/About/AboutPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    </>
  )
}

export default App