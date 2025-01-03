import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Video from './Components/Video/Video'
import ServicesSection from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Video/>
        <ServicesSection/>
        <Testimonials/>
    </div>
  )
}

export default App