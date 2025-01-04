import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Video from './Components/Video/Video'
import ServicesSection from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Navbar from './Components/Navbar/Navbar'
import Specials from './Components/Specials/Specials'
import Gallery from './Components/Gallery/Gallery'
import ContactSection from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='home-page overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <About/>
        <Video/>
        <ServicesSection/>
        <Specials/>
        <Gallery/>
        <Testimonials/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default App