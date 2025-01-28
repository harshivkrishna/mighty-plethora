import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'

const GalleryPage = () => {
  return (
    <div>
        <Navbar delay={1}/>
        <div className='h-24'></div>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default GalleryPage