import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Career.css'
const Career = () => {
  return (
    <div>
        <Navbar delay={1} />
        <div className='contact-top-container'>
        </div>
        <div className='contact-container bg-black text-center text-white'>
          <h1>Join Us Now</h1>
          <p>At <span className='text-custom-gold relative -top-1 text-xl'>Mighty Plethora Events</span>, we are passionate about capturing moments and creating unforgettable experiences. With years of expertise in photography and event management, we specialize in turning your vision into reality. Whether it's a wedding, corporate event, or special celebration, our team is dedicated to providing seamless event planning and stunning photography that tells your unique story. We blend creativity with precision to ensure every detail is perfect, leaving you with memories to cherish for a lifetime. Let us help you make your next event extraordinary.</p>
        </div>
    </div>
  )
}

export default Career