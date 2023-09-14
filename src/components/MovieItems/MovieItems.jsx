import React from 'react'
import Card from '../UI/Card/Card'

const MovieItems = props => {
  return (
    <>
      <div className='grid xl:grid-cols-5 lg:grid-cols-4 gap-y-12 gap-x-8 md:grid-cols-3 sm:grid-cols-2'>
        {props.data.map(item => (
          <Card
            key={item.id}
            vote_average={item.vote_average}
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
