import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>404 Page Not Found</h2> 
      <p>Well Visit our Home page</p>   
      <p><Link to='/'>Go Back</Link></p>   
    </main>
  )
}

export default Missing