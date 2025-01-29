import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Blogspage.css'
import Blogs from '../../Components/Blogs/Blogs'
const BlogsPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='h-28'></div>
        <Blogs/>

    </div>
  )
}

export default BlogsPage