import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { useNavigation } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import Loading from '../Loading/Loading'

const Root = () => {
  const navigate =   useNavigation()

  const isLoading = navigate.state == 'loading'
  console.log(isLoading)
  return (
    <div className=''>
      <div className='space-y-7'>
        <Header/>
       {isLoading ? <Loading/> : <Outlet/> }
        <Footer/>
      </div>
    </div>
  )
}

export default Root