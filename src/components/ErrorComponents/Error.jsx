import React from 'react'
const Error = (props) => {
  
  return (
    <div className='shadow shadow-gray-600 w-[95%] p-8 m-12 flex flex-col items-center space-y-5 rounded-lg text-center lg:w-[50%] mx-auto'>
      <h1 className='lg:text-3xl text-gray-600'>MovieBox</h1>
      <h1 className='lg:text-6xl text-3xl'>{props.title}</h1>
      <div className='text-red-400 lg:text-4xl text-lg font-semibold'>
        {props.children}
      </div>
    </div>
  )
}

export default Error