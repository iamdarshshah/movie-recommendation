import React from 'react'

export default function Search(props) {
  return (
    <div className='container'>
      <div className='row'>
        <section className='col s4 offset-s4'>
          <form onSubmit={props.handleSearch}>
            <div className='input-field'>
              <input
                placeholder='Search Movie'
                type='text'
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
