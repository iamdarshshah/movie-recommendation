import React from 'react'

export default function MovieInfo(props) {
  return (
    <div>
      <div className='container'>
        <div className='row back' onClick={props.closeMovieInfo}>
          <i class='fas fa-arrow-left'></i>
          <span>Go back</span>
        </div>
        <div className='row'>
          <div className='col s12 m4'>
            {props.currentMovie.poster_path == null ? (
              <img
                className='img'
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt='Card cap'
              />
            ) : (
              <img
                className='img'
                src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
                alt='Card '
              />
            )}
          </div>
          <div className='col s12 m8'>
            <div className='info-container'>
              <p>{props.currentMovie.title}</p>
              <p>
                {props.currentMovie.release_date
                  .substring(6)
                  .split('-')
                  .concat(props.currentMovie.release_date.substring(0, 4))
                  .join('/')}
              </p>
              <p>{props.currentMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
