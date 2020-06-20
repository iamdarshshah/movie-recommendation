import React, { useState, useEffect } from 'react'
import Movie from './Movies/Movie'
import { fetchTopRatedMovies } from '../service/index'

export default function TopRated(props) {
  const [topRated, setTopRated] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setTopRated(await fetchTopRatedMovies())
    }

    fetchAPI()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {topRated.map((movie) => {
            return (
              <Movie
                key={movie.id}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                image={movie.backPoster}
                date={movie.release_date}
                type='topRated'
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
