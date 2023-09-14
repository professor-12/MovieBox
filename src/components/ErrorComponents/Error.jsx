import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
  let title = 'An error occured'
  let message = 'Could not Found Movies check your internet connection'
  const  error = useRouteError()

  
  if (error.status == 500) {
    message = error.data.message
  }

  if (error.status == 404) {
    title = 'Not Found!'
    message = '404 Page not found'
  }
  return (
    <div className='shadow shadow-gray-600 w-[95%] p-8 m-12 flex flex-col items-center space-y-5 rounded-lg text-center lg:w-[50%] mx-auto'>
      <h1 className='lg:text-3xl text-gray-600'>MovieBox</h1>
      <h1 className='lg:text-6xl text-3xl'>{title}</h1>
      <div className='text-red-400 lg:text-4xl text-lg font-semibold'>
        {message}
      </div>
    </div>
  )
}

export default Error