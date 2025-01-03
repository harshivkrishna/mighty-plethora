import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Video from './Components/Video/Video'
import ServicesSection from './Components/Services/Services'

const App = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Video/>
        <ServicesSection/>
    </div>
  )
}

export default App