import React, { useState, useEffect } from 'react';
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Video from '../../Components/Video/Video'
import ServicesSection from '../../Components/Services/Services'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Navbar from '../../Components/Navbar/Navbar'
import Specials from '../../Components/Specials/Specials'
import Gallery from '../../Components/Gallery/Gallery'
import ContactSection from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Loader from '../../Components/Loader/Loader'

const Home = () => {
  const [image, setImage] = useState(null);
  const [loader,setLoader] = useState(false);
  const [closePopup, setClosePopup] = useState(false);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/images/latest');
        const data = await res.json();
        if (data.imagePath) {
          setImage(`http://localhost:5000${data.imagePath}`);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    setTimeout(()=>{
      setLoader(true);
    },[6500])

    fetchImage();
  }, []);
  return (
    <div className='home-page overflow-x-hidden'>
        <Loader/>
        {image && loader && (
        <div className={`popup-image-container pointer-events-none ${closePopup ? 'hide' : ""}`}>
          <div className='popup'>
            <i className='bx bx-x close-icon' onClick={() => { setClosePopup(true); }}></i>
            <img src={image} alt="Discount & Offers" />
          </div>
        </div>
      )}
        <Navbar delay={6.5}/>
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

export default Home