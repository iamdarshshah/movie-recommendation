import React, { useState, useEffect } from 'react'
import Movie from './Movies/Movie'
import { fetchUpcomingMovies } from '../service/index'

export default function Upcoming(props) {
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setUpcoming(await fetchUpcomingMovies())
    }

    fetchAPI()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {upcoming.map((movie) => {
            return (
              <Movie
                key={movie.id}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                image={movie.backPoster}
                date={movie.release_date}
                type='upcoming'
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
