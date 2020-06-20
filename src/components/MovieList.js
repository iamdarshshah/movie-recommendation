import React from 'react'
import Movie from './Movie'

export default function MovieList(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {props.movies.map((movie, i) => {
            return <Movie key={i} image={movie.poster_path} />
          })}
        </div>
      </div>
    </div>
  )
}
