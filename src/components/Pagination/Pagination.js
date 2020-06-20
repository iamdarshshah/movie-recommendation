import React from 'react'

const Pagination = (props) => {
  let pageLinks = []

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.activePage === i ? 'active' : ''
    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a href='#!'>{i}</a>
      </li>
    )
  }
  return (
    <div className='container'>
      <div className='row'>
        <ul className='pagination'>
          {props.activePage > 1 ? (
            <li
              className='waves-effect'
              onClick={() => props.nextPage(props.activePage - 1)}
            >
              <a href='#!'>Prev</a>
            </li>
          ) : (
            ''
          )}
          {pageLinks}
          {props.activePage < props.pages + 1 ? (
            <li
              className='waves-effect'
              onClick={() => props.nextPage(props.activePage + 1)}
            >
              <a href='#!'>Next</a>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  )
}

export default Pagination
