import React, { Component } from 'react'
import Nav from './Nav'
import Search from './Search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchTerm: '',
    }
    this.apiKey = process.env.API_KEY
  }

  handleSearch = () => {
    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.results] })
      })
  }
  handleChange = () => {}

  render() {
    return (
      <div className='App'>
        <Nav />
        <Search />
      </div>
    )
  }
}

export default App
