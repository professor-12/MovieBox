import React, {  useState } from 'react'
import { json } from 'react-router-dom'
import MovieItems from '../../MovieItems/MovieItems'
import 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const MovieList = () => {
  const Data = useLoaderData()
  
 

  return (
    <div className='w-[80%] mx-auto space-y-5'>
      <section className='flex justify-between items-center'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Featured Movie</h1>
        <p className='text-[#BE123C] font-semibold'>
          See  <span className='text-[#c14060]'>More</span>
        </p>
      </section>

      <section>
         <MovieItems data={Data.results} />
      </section>
    </div>
  )
}
export default MovieList

export async function MovieListLoader () {
  const getData = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=8fe7220e6d3637abfa702faa23b88cc3'
  )

  if (!getData.ok) {
    seterror(true)
    return json({ message: 'Something Went Wrong' }, { status: 500 })
  }


  return getData;

}
