import React, { useState, useEffect } from 'react'
import Movie from './Movies/Movie'
import { fetchNowPlayingMovies } from '../service/index'

export default function NowPlaying(props) {
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchNowPlayingMovies())
    }

    fetchAPI()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {nowPlaying.map((movie) => {
            return (
              <Movie
                key={movie.id}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                image={movie.backPoster}
                date={movie.release_date}
                type='nowPlaying'
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
