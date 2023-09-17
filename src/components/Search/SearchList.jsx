import React from 'react'
import { Link } from 'react-router-dom'

const SearchList = props => {
  console.log(props.data)

  return ( 
     <div className='border relative border-gray-600 relative py-4  flex space-x-1 w-full  items-center bg-white bg-opacity-[.3] rounded-lg'>
      <ul className='max-h-[12rem]  w-full  overflow-y-auto space-y-4'>
        {props.data.map(items => {
         return   <Link  key={items.id} to={`/movies/${items.id}`}> <li className='hover:bg-gray-500 px-2' >{items.title}</li></Link>
        })}
      </ul></div> 
  )
}

export default SearchList
