import React from 'react'
import Card from '../UI/Card/Card'

const MovieItems = props => {
  return (
    <>
      <div className='grid xl:grid-cols-6 lg:grid-cols-5  gap-y-5  gap-x-5 md:grid-cols-3 sm:grid-cols-2'>
        {props.data.map(item => (
          <Card
            key={item.id}
            vote_average={item.vote_average * 10}
            id={item.id}
            date={item.release_date}
            title={item.title}
            img={item.poster_path}
          ></Card>
        ))}
      </div>
    </>
  )
}

export default MovieItems
