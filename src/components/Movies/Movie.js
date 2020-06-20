import React from 'react'

const Movie = (props) => {
  return (
    <div className='col s12 m6 l3'>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          {props.image === null ? (
            <img
              className='img'
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt='Card cap'
            />
          ) : ['topRated', 'nowPlaying', 'movies', 'upcoming'].includes(
              props.type
            ) ? (
            <img className='img' src={`${props.image}`} alt='Card cap' />
          ) : (
            <img
              className='img'
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt='Card cap'
            />
          )}
        </div>
        <div className='card-content'>
          <p>
            <a href='#' onClick={() => props.viewMovieInfo(props.movieId)}>
              View Details
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Movie
