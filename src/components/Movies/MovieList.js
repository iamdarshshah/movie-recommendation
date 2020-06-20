import React from 'react'
import Movie from './Movie'

export default function MovieList(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {props.movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                image={movie.poster_path}
                date={movie.release_date}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
