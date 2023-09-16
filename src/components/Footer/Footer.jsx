import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col space-y-6  justify-center p-12'>
      <div className='flex space-x-8 justify-center'>
        <img src="assets/Vector.svg" alt='' />
        <img src='assets/vector (1).svg' alt='' />
        <img src="assets/Vector (3).svg" alt='' />
        <img src='assets/Vector (4).svg' alt='' />
      
      </div>
      <div className='space-y-6 flex flex-col text-center '>
        <div className='flex md:space-x-8 flex-col md:flex-row  justify-center font-medium '>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className='text-center font-semibold'>
          © 2021 MovieBox by Adriana Eka Prayudha{' '}
        </div>
      </div>
    </div>
  )
}
