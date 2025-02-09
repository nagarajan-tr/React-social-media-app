import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <main className='Footer'>
      <p>&copy; {year} Social Media App</p>
    </main>
  )
}
