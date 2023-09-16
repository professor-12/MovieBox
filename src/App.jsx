import './App.css'
import MovieDetails, { MovieDetailsLoader } from './components/Pages/MovieDetails/MovieDetails'
import Root from './components/RootRoute.jsx/Root'
import {  RouterProvider } from 'react-router-dom'
import MovieList ,{ MovieListLoader } from './components/Pages/MovieList/MovieList'
import { createBrowserRouter } from 'react-router-dom'

function App () {


  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [{ index:true, element: <MovieList />, loader: MovieListLoader }]
    },
    {
      path: 'movies/:id',
      element: <MovieDetails />,
      loader:MovieDetailsLoader
    }
  ])

  return (
    <div className='mx-auto space-y-12'>
      <RouterProvider router={Routes}/>
    </div>
  )
}

export default App
