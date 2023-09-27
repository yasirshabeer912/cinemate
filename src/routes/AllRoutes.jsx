import React from 'react'
import { Route,Routes } from 'react-router-dom'
import MoviesList from '../pages/MoviesList'
import MovieDetail from '../pages/MovieDetail'
import PageNotFound from '../pages/PageNotFound'
import Search from '../pages/Search'

const Allroutes = () => {
  
  return (
    <Routes>
        <Route path='/' element={<MoviesList apiPath='movie/now_playing' />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/movies/popular' element={<MoviesList apiPath='movie/popular'/>} />
        <Route path='/movies/top' element={<MoviesList apiPath='movie/top_rated'/>} />
        <Route path='/movies/upcoming' element={<MoviesList apiPath='movie/upcoming'/>} />
        <Route path='search' element={<Search apiPath='search/movie'/>} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Allroutes