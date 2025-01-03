import React from 'react'
import './Video.css'
const Video = () => {
  return (
    <div className='w-full h-full relative video-container'>
        <img className='w-full' src="/assets/thumbnail.jpeg" alt="" />
        <div className='play-icon absolute h-fit w-fit'>
            <a href="#"><i className='bx bx-play text-white'></i></a>
        </div>
    </div>
  )
}

export default Video