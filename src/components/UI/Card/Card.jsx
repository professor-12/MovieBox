import React from 'react'
import { Link } from 'react-router-dom'
const Card = props => {
  return (
    <Link  to={`movies/${props.id}`}>
      <div data-testid='movie-card' className='card h-[20rem] border md:h-[30rem] hover:scale-105 duration-150 group hover:shadow-lg hover:shadow-black bg-white shadow shadow-slate-400 rounded-lg space-y-2 z-100'>
        <img
          data-testid='movie-poster'
          className='object-cover h-[30%] md:h-auto  w-full group-[]:bg-black rounded-t-lg'
          src={`https://image.tmdb.org/t/p/w500/${props.img}`}
          alt='movie_poster'
        />

        <div className='space-y-2 p-3 relative'>
          <div data-testid='movie-release-date' className='text-slate-800 font-medium  mt-1'>{props.date}</div>
          <div data-testid='movie-title' className='text-medium font-semibold'>{props.title}</div>
          <div className='flex justify-between'>
            <div className='flex space-x-2 text-sm text-gray-600 font-medium items-center'><img src="public/assets/Imb.svg" alt="" />
            <p>{props.vote_average}/ 100</p>
            </div>
            <div className='-top-[24px] right-2 absolute border-8 border-white bg-green-500  text-center flex items-center justify-center rounded-full justify-cemter h-16 w-16  space-x-2 font-sm text-gray-100 font-medium'>
          
              <p className=''>{props.vote_average}%</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
