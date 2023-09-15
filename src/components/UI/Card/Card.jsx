import React from 'react'
import { Link } from 'react-router-dom'
const Card = props => {
  return (
    <Link  to={`movies/${props.id}`}>
      <div data-testid='movie-card' className='card  space-y-2 z-100'>
        <img
          data-testid='movie-poster'
          src={`https://image.tmdb.org/t/p/w500/${props.img}`}
          alt='movie_poster'
        />

        <div className='space-y-2'>
          <div data-testid='movie-release-date' className='text-stone-600 text-sm mt-1'>{props.date}</div>
          <div data-testid='movie-title' className='text-normal font-semibold'>{props.title}</div>
          <div className='flex'>
            <div className='flex space-x-2 text-sm text-gray-600 font-medium items-center'><img src="Imb.svg" alt="" />
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
