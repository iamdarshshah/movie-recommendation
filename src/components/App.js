import React, { Component } from 'react'
import Nav from './Nav'
import Search from './Search'
import MovieList from './MovieList'
import Pagination from './Pagination'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      activePage: 1,
    }
    this.apiKey = `8f7229a4038cf8ec46c0b563c1c9b463`
  }

  nextPage = (pageNumber) => {
    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        this.setState({ movies: [...data.results], activePage: pageNumber })
      })
  }

  handleSearch = (e) => {
    e.preventDefault()

    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        })
      })
  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20)
    return (
      <div className='App'>
        <Nav />
        <Search
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
        {this.state.totalResults > 20 ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            activePage={this.state.activePage}
          />
        ) : null}
      </div>
    )
  }
}

export default App
