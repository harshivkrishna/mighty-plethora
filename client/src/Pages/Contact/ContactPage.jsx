import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <>
        <Navbar delay={1}/>
        <div className='contact-top-container'>
        </div>
        <div className='contact-container bg-black text-center text-white'>
          <h1>Contact Us</h1>
          <p>Let&apos;s capture your <span className='text-custom-gold relative -top-1 text-xl'>special moments</span> and turn your dreams into reality! Whether you&apos;re looking to preserve cherished memories through stunning photography or plan an unforgettable event, we&apos;re here to help. Reach out to our dedicated team for personalized solutions tailored to your needs. From weddings and celebrations to corporate events, we&apos;ve got you covered. Your vision is our priority, and we&apos;re just a message away. Let&apos;s make magic together—contact us today!</p>
        </div>
        <Contact/>
        <Footer/>
    </>
  )
}

export default ContactPage