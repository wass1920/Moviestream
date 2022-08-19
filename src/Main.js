import React from 'react'
import MoviesList from './MoviesList'
import {moviesList} from './Data'



function Main() {
  
  return (
    <div className=''>

   <MoviesList moviesArray={ moviesList }/>
 

    </div>
  )
}

export default Main

