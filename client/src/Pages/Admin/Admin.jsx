import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Upload from '../Upload/Upload'

const Admin = () => {
  return (
    <div>
      <Sidebar/>
      <div className='h-24'>
      </div>
      <h1 className='text-white text-center text-2xl mb-7'>Admin Panel</h1>
      <div className='flex p-7 bg-gray-500 border-r-2 w-full justify-center h-screen'>
      <Upload/>
      </div>
    </div>
  )
}

export default Admin