import React from 'react'
import '../../App.css'

export default function MovieInfo(props) {
  console.log('current', props.currentMovie)
  return (
    <div>
      <div className='container'>
        <div className='row back' onClick={props.closeMovieInfo}>
          <i className='fa fa-arrow-left' />
          <span>Go back</span>
        </div>
        <div className='row'>
          <div className='col s12 m4'>
            {props.type === 'search' ? (
              props.currentMovie.poster_path == null ? (
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
              )
            ) : props.currentMovie.poster_path == null ? (
              <img
                className='img'
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt='Card cap'
              />
            ) : (
              <img
                className='img'
                src={`${props.currentMovie.backPoster}`}
                alt='Card'
              />
            )}
          </div>
          <div className='col s12 m8'>
            <div className='info-container'>
              <p>
                <strong>{props.currentMovie.title}</strong>
              </p>
              {/* <p>
                {props.currentMovie.release_date
                  .substring(6)
                  .split('-')
                  .concat(props.currentMovie.release_date.substring(0, 4))
                  .join('/')}
              </p> */}
              <p>{props.currentMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
