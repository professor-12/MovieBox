import React from 'react'
import { Link } from 'react-router-dom'
const Card = props => {
  return (
    <Link  to={`movies/${props.id}`}>
      <div data-testid='movie-card' className='card border lg:h-[30rem] hover:scale-105 duration-150 border-gray-500 bg-white shadow-lg shadow-black rounded-lg space-y-2 z-100'>
        <img
          data-testid='movie-poster'
          className='object-cover'
          src={`https://image.tmdb.org/t/p/w500/${props.img}`}
          alt='movie_poster'
        />

        <div className='space-y-2 p-3'>
          <div data-testid='movie-release-date' className='text-slate-800 font-medium  mt-1'>{props.date}</div>
          <div data-testid='movie-title' className='text-medium font-semibold'>{props.title}</div>
          <div className='flex justify-between'>
            <div className='flex space-x-2 text-sm text-gray-600 font-medium items-center'><img src="public/assets/Imb.svg" alt="" />
            <p>{props.vote_average}/ 100</p>
            </div>
            <div className='flex space-x-2 font-sm text-gray-600 font-medium'>
              <img src="strawBerry.svg" alt="" />
              <p>{props.vote_average}%</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
