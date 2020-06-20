import React, { useState, useEffect } from 'react'
import Movie from './Movies/Movie'
import MovieInfo from './Movies/MovieInfo'
import { fetchTopRatedMovies } from '../service/index'

export default function TopRated(props) {
  const [topRated, setTopRated] = useState([])
  const [currentMovie, setCurrentMovie] = useState(null)

  useEffect(() => {
    const fetchAPI = async () => {
      setTopRated(await fetchTopRatedMovies())
    }

    fetchAPI()
  }, [])

  const viewMovieInfo = (id) => {
    let movieInfo
    topRated.forEach((movie, i) => {
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
            topRated.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  viewMovieInfo={viewMovieInfo}
                  movieId={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  image={movie.poster_path}
                  date={movie.release_date}
                  type='topRated'
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
