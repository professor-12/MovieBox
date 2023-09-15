import React from 'react'

import { Link } from 'react-router-dom';

export const SideNavMenu = () => {
  return (
    <>
      <Link className='flex items-center lg:space-x-5 lg:px-12 lg:py-4'>
        <img className='hidden lg:flex' src="tv.svg" alt='' />
        <h1 className='font-semibold text-lg hidden lg:inline-block'>MovieBox</h1>
      </Link>
      <Link  to='/' className='flex items-center lg:space-x-5 lg:px-12 lg:py-4'>
          <span>
            <img className='hidden lg:flex' src="Home (1).svg" alt='' />
          </span>
     
          <h1 className='text-zinc-500 font-medium'>Home</h1>
      </Link>

      <Link className='flex items-center lg:space-x-5  md:bg-[#BE123C] md:bg-opacity-[0.19] lg:px-12 lg:py-4 lg:border-r-4 border-r-[#BE123C]'>
        <span>
          <img  className='hidden lg:flex' src="Movie Projector.svg" alt='' />
        </span>
        <h1 className='text-zinc-500 font-medium'>Movies</h1>
      </Link>

      <Link className='flex items-center lg:space-x-5 lg:px-12 lg:py-4'>
        <span>
          <img  className='hidden lg:flex' src="Tv Show.svg" alt='' />
        </span>
        <h1 className='text-zinc-500 font-medium'>Tv Series</h1>
      </Link>

      <Link className='flex items-center lg:space-x-5 lg:px-12 lg:py-4'>
        <span>
          <img  className='hidden lg:flex' src="Calender.svg" alt='' />
        </span>

        <h1 className='text-zinc-500 font-medium'>Upcoming</h1>
      </Link>
      <Link className='w-[80%] hidden lg:flex border  mx-auto flex flex-col items-center  rounded-xl border-[#BE123C]  border-opacity-[.4] font-medium text-gray-500 bg-[#BE124C] bg-opacity-[0.1] p-4 py-7 text-sm bg'>
        <p>Play movie quizes and earn free tickets</p>
        <p>50k people are playing now</p>
        <button className='bg-[#BE124C] p-2 mt-2 rounded-3xl px-3 font-medium bg-opacity-[0.2] text-[#BE123C]'>
          Start Playing
        </button>
      </Link>
      <Link className='flex items-center lg:space-x-5 lg:px-12 lg:py-4'>
        <span>
          <img  className='hidden lg:flex' src="Logout.svg" alt='' />
        </span>
        <h1 className='text-zinc-500 font-medium'>Logout</h1>
      </Link>
    </>
  )
}
