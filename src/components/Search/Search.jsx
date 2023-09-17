import React, { useEffect, useState } from 'react'
import SearchList from './SearchList'

const Search = () => {
  const [SearchData, setDataSearch] = useState('')
  const [dataResponse, sedataresponse] = useState([])

  async function fetchMovies () {
    if (SearchData.length > 0 ) {
    const Searchresponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${SearchData}&api_key=8fe7220e6d3637abfa702faa23b88cc3`
    )
    const response = await Searchresponse.json()
    const data = response.results
    sedataresponse(data)
  }}

  useEffect(() => {
    const time = setTimeout(() => {
      fetchMovies()
    }, 1000)
    return () => {
      clearTimeout(time)
    }
  }, [SearchData])
  return (
    <>
      <div className='border border-white flex space-x-1 w-full pr-2 items-center rounded-lg'>
        <input
          onChange={e => {
            e.target.value && setDataSearch(e.target.value)
          }}
          type='text'
          className='bg-transparent w-[80%] flex-1  focus:outline-none text-white placeholder:text-white placeholder:text-sm p-2'
          placeholder='What do you want to watch?'
        />
        <svg
          width='20'
          height='20'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z'
            stroke='white'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>

        { SearchData.trim().length > 0  && <SearchList  nomovies={true} data={dataResponse} /> }


    </>
  )
}

export default Search
