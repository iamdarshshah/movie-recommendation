import React, { Component } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MovieList from './Movies/MovieList'
import Pagination from './Pagination/Pagination'
import MovieInfo from './Movies/MovieInfo'
import TopRated from './topRated'
import Upcoming from './Upcoming'
import NowPlaying from './NowPlaying'
import MoviesList from './MoviesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      activePage: 1,
      currentMovie: null,
    }
    this.apiKey = process.env.REACT_APP_KEY
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

  viewMovieInfo = (id) => {
    let movieInfo
    this.state.movies.forEach((movie, i) => {
      if (movie.id === id) {
        movieInfo = movie
      }
    })

    this.setState({ currentMovie: movieInfo })
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20)
    return (
      <div className='body'>
        <Header />
        {this.state.currentMovie === null ? (
          <div>
            <SearchBar
              handleSearch={this.handleSearch}
              handleChange={this.handleChange}
            />
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />

            {(this.props.type === 'nowPlaying' && <NowPlaying />) ||
              (this.props.type === 'topRated' && <TopRated />) ||
              (this.props.type === 'upcoming' && <Upcoming />) ||
              (this.props.type === 'movies' && <MoviesList />)}
          </div>
        ) : (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
            type='search'
          />
        )}
        {this.state.totalResults > 20 && this.state.currentMovie === null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            activePage={this.state.activePage}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default App