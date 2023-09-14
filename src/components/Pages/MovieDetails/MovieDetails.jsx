import React, { useEffect, useState } from 'react'
import { SideNavMenu } from './SideNavMenu/SideNavMenu'
import Details from './Details'
import Loading from '../../Loading/Loading'
import { useParams } from 'react-router-dom'
const MovieDetails = () => {
  const params = useParams()
  const [loading,setloading] = useState(true)
  const id = params.id
  const [data,setdata] = useState({})
  useEffect(() => {
    const Loader = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8fe7220e6d3637abfa702faa23b88cc3`
      )

      if (!response.ok) {
        return json({ message: "Can't fetch Movie Details" }, { status: 500 })
      }
      const data = await response.json()
      console.log(data)
      setdata(data)
      setloading(false)
    }
    Loader()
  }, [])
  return (
    <>
    {loading ? <Loading/>
    :
      <section className='flex my-14 lg:h-[90vh] bg-white container lg:flex-row flex-col lg:w-[70%] mx-auto '>
        <div className='flex  lg:flex-col justify-around lg:w-[20%] py-4 px-2 lg:px-0 lg:space-y-2 lg:py-5 border-gray-400 shadow shadow shadow-gray-400 lg:rounded-r-3xl'>
          <SideNavMenu />
        </div>
        <Details data={data} />
      </section>
}
    </>
  )
}

export default MovieDetails
