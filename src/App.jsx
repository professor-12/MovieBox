import './App.css'
import MovieDetails from './components/Pages/MovieDetails/MovieDetails'
import Root from './components/RootRoute.jsx/Root'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './components/Pages/MovieList/MovieList'

function App () {
  return (
    <div className='mx-auto space-y-12'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root></Root>}>
            <Route path='' element={<MovieList />}></Route>
          </Route>
          <Route path='movies/:id' element={<MovieDetails />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
