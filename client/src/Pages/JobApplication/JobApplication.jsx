import React from 'react'
import Application from '../../Components/Application/Application'
import Sidebar from '../../Components/Sidebar/Sidebar'
const JobApplication = () => {
  return (
    <div className='px-10'>
        <Sidebar/>
        <div className='h-32'></div>
        <Application/>
    </div>
  )
}

export default JobApplication