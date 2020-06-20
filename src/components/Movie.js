import React from 'react'
import styles from '../index.scss'

export default function Movie(props) {
  return (
    <div className='col s12 m6 l3'>
      <div className='card'>
        <div className='card-image waves-effects waves-block waves-light'>
          {props.image == null ? (
            <img
              className=''
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt='Card image cap'
              className={styles.img}
            />
          ) : (
            <img
              className=''
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt='Card image cap'
              className={styles.img}
            />
          )}
        </div>
        <div className='card-content'>
          <p>
            <a href='#'>View Details </a>
          </p>
        </div>
      </div>
    </div>
  )
}
