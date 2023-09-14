import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { Footer } from '../Footer/Footer'
import Loading from './../Loading/Loading';

const Root = () => {
  return (
    <div className=''>
      <div className='space-y-7'>
        <Header/>
        <Outlet/> 
        <Footer/>
      </div>
    </div>
  )
}

export default Root