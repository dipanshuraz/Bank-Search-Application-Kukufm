import React from 'react'

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='bg-img parent'>
      <Link to='/' className=' text-white'><i class="fa-4x fas fa-arrow-left"></i></Link>
      <h1 className='display-4'>Not Found</h1>
      <h1>Back to Home</h1>
    </div>
  )
}

export default NotFound
