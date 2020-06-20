import React, { useState, useEffect } from 'react'
import Movie from '../Movies/Movie'
import MovieInfo from '../Movies/MovieInfo'
import { fetchNowPlayingMovies } from '../../service/index'

export default function NowPlaying(props) {
  const [nowPlaying, setNowPlaying] = useState([])
  const [currentMovie, setCurrentMovie] = useState(null)

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchNowPlayingMovies())
    }

    fetchAPI()
  }, [])

  const viewMovieInfo = (id) => {
    let movieInfo
    nowPlaying.forEach((movie, i) => {
      if (movie.id === id) {
        movieInfo = movie
      }
    })

    setCurrentMovie(movieInfo)
  }

  const closeMovieInfo = () => {
    setCurrentMovie(null)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {currentMovie === null ? (
            nowPlaying.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  viewMovieInfo={viewMovieInfo}
                  movieId={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  image={movie.poster_path}
                  date={movie.release_date}
                  type='nowPlaying'
                />
              )
            })
          ) : (
            <MovieInfo
              closeMovieInfo={closeMovieInfo}
              currentMovie={currentMovie}
            />
          )}
        </div>
      </div>
    </div>
  )
}
