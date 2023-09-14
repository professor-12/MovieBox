import React, { useEffect, useState } from 'react'
import { json, useLoaderData } from 'react-router-dom'
import MovieItems from '../../MovieItems/MovieItems'
import 'react-router-dom'
import Loading from './../../Loading/Loading'
const MovieList = props => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    async function MovieListLoader () {
      const getData = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=8fe7220e6d3637abfa702faa23b88cc3'
      )

      if (!getData.ok) {
        throw json({ message: 'Something Went Wrong' }, { status: 500 })
      }

      const response = await getData.json()

      setData(response)
      setLoading(false)
    }

    MovieListLoader()
  }, [])
  return (
    <div className='w-[80%] mx-auto space-y-3'>
      <section className='flex justify-between items-center'>
        <h1 className='text-4xl font-semibold'>Featured Movie</h1>
        <p className='text-[#BE123C] font-semibold'>
          See More <span></span>
        </p>
      </section>

      <section>
        {loading ? <Loading /> : <MovieItems data={data.results} />}
      </section>
    </div>
  )
}
export default MovieList
