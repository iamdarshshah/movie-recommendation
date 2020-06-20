import React, { useState, useEffect } from 'react'
import Movie from './Movies/Movie'
import { fetchMovies } from '../service/index'

export default function MoviesList(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovies())
    }

    fetchAPI()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                image={movie.backPoster}
                date={movie.release_date}
                type='movies'
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
