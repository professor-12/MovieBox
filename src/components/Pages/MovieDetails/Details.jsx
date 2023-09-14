const Details = ({ data }) => {
  return (
    <div className='flex lg:space-y-5 lg:w-[40%] flex-col bg-gray-100 p-3 flex-auto'>
      <div className='w-full h-[55%]'>
        <img
          className='w-full h-[100%] object-fit rounded-xl'
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=''
        />
      </div>

      <div className='description px-3 space-y-5 font-medium text-zinc-800'>
        <div>
          <span>
            <span>{data.genres[1].name}</span> :{' '}
          </span>
          <span>
            <span data-testid='movie-title'>{data.title} </span><span className='font-bold mx-2 text-xl'>&#183;</span>
          </span>
          <span>
            <span data-testid='release-date'>{data.release_date}</span>&#183;
          </span>
          <div className=''></div>
        </div>
        <div className='flex'>
          <div className='lg:w-[70%] font-medium text-gray-700 leading-wide text-normal font-gray-900'>
            <p data-testid='movie-overview'>{data.overview}</p>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Details
