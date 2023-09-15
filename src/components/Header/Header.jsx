import React from 'react'
import NavigationBar from './NavigationBar'
import Button from '../UI/Button/Button'
import Wrapper from './Wrapper/Wrapper'

const Header = () => {
  return (
    <>
      <Wrapper className={`text-white mx-auto h-[600px]   object-fill py-5`}>
        <NavigationBar />
        <header className='w-[80%] mt-20 mx-auto space-y-6 '>
          <h1 className='flex text-center text-4xl lg:text-left flex-col space-y-1 lg:text-5xl lg:space-y-3'>
            <span>John Wick 3 : </span>
            <span>Parabellum </span>
          </h1>
          <div className='flex space-x-6 text-sm'>
            <div className='flex space-x-3 items-center'>
              <img src='imb.svg' alt='' />
              <p className='text-gray-200'> 86.0 / 100</p>
            </div>
            <div className='flex space-x-2 font-normal'>
              <img src='Strawberry.svg' alt='' />
              <p>97%</p>
            </div>
          </div>
          <p className='text-sm md:w-[35%] w-[60%] leading-tight font-[DM sans]'>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <Button color='bg-[#BE123C]' px='px-6' py='py-3'>
            <span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5547 5.16795C7.24784 4.96338 6.8533 4.94431 6.52814 5.11833C6.20298 5.29235 6 5.63121 6 6V10C6 10.3688 6.20298 10.7077 6.52814 10.8817C6.8533 11.0557 7.24784 11.0366 7.5547 10.8321L10.5547 8.83205C10.8329 8.64659 11 8.33435 11 8C11 7.66565 10.8329 7.35342 10.5547 7.16795L7.5547 5.16795Z'
                  fill='white'
                />
              </svg>
            </span>{' '}
            <span>WATCH TRAILER</span>
          </Button>
        </header>
      </Wrapper>
    </>
  )
}
export default Header
