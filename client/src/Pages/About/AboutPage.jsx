import React from 'react'
import './AboutPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Category from '../../Components/Category/Category'
const AboutPage = () => {
  return (
    <div>
      <Navbar delay={1} />
      <div className='contact-top-container'>
      </div>
      <div className='contact-container bg-black text-center text-white'>
        <h1>About Us</h1>
        <h4 className='text-custom-gold'>Mighty Plethora</h4>
        <br />
        <h4>Your Trusted Partner in Event Excellence
        </h4>
        <p>With over 15 years of experience in Photography and 7+ years in EVENT MANAGEMENT, MIGHTY PLETHORA has built a solid reputation for delivering exceptional, high-quality experiences. Led by Founder and Director Abraham Maharaja, the company has successfully delivered over 500 events, including fashion shows, Brand Product launches, weddings, Corporate Gatherings, and more.
        </p> <br /><h4>Redefining Events with Expertise and Innovation
        </h4>
        <p>At Mighty Plethora, we specialize in end-to-end event solutions, covering everything from Catering and Decoration to Sound and Photography. Our team works with precision and creativity to ensure every event is flawlessly executed, Creating unforgettable moments for our clients.
        </p><br />
        <h4>Crafting Exceptional Events with Expertise and Passion
        </h4>
        <p>As comprehensive event producers, we provide end-to-end services, managing every aspect of your event, Our team’s dedication ensures a seamless experience for our clients, turning every event into a memorable celebration.

        </p>
        <br />
        <h4>Available all over South India
        </h4>
        <p>Headquartered in Chennai with operational branches in Bangalore and Coimbatore, Mighty Plethora is committed to bringing creativity, precision, and a personalized touch to every project. Trust us to turn your event into an unforgettable experience.</p>

      </div>
      <About />
      <Category />
      <Footer />
    </div>
  )
}

export default AboutPage