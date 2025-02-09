import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Blogspage.css'
import Blogs from '../../Components/Blogs/Blogs'
import Footer from '../../Components/Footer/Footer'
const BlogsPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='h-28'></div>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default BlogsPage