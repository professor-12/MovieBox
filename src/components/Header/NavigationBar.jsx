import React from 'react'
import Search from './../Search/Search';


const NavigationBar = () => {
  return (
    <div className='flex flex-col md:flex-row space-y-6 lg:space-y-0 justify-between items-center w-[80%] mx-auto text-white'>
    <div className='flex items-center space-x-4'>
        <img src="tv.svg" alt="" />
        <h1 className='font-bold text-lg'>MovieBox</h1>
    </div>
    <div className='w-[100%] lg:w-[40%]'>
        <Search/>
    </div>
    <div className='flex hidden lg:flex items-center space-x-4'>
        <h1 className='font-semibold text-normal'>Sign in</h1>
        <img src="Menu (4).svg" alt="" />
    </div>
    </div>
  )
}

export default NavigationBar