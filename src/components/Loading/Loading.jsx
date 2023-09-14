import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={`fixed inset-0 justify-center bg-black bg-opacity-[.5] flex flex-col items-center space-y-6`}>

    <div className={`h-20 w-20  border-8 border-l-black border-gray-500 rounded-full ${classes.animate}`}>
    
    </div>
      <div className='bg-slate-900 p-4 text-white font-semibold w-full text-center text-xl rounded-xl'>
        <h1>Loading..</h1>
      </div>
    </div>

  )
} 

export default Loading