import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Jobs from '../../Components/Jobs/Jobs'
const AdminJobs = () => {
  return (
    <div>
        <Sidebar/>
        <div className='h-24'></div>
        <Jobs/>
    </div>
  )
}

export default AdminJobs