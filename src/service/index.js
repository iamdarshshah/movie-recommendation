import axios from 'axios'

export const fetchMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie`,
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
        language: 'en-US',
        page: 1,
      },
    }
  )
  const posterUrl = 'https://image.tmdb.org/t/p/original/'
  const modifiedData = data['results'].map((detail) => ({
    id: detail['id'],
    backPoster: posterUrl + detail['backdrop_path'],
    popularity: detail['popularity'],
    title: detail['title'],
    poster: posterUrl + detail['poster_path'],
    overview: detail['overview'],
  }))
  return modifiedData
}

export const fetchTopRatedMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated`,
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
        language: 'en-US',
        page: 1,
      },
    }
  )
  const posterUrl = 'https://image.tmdb.org/t/p/original/'
  const modifiedData = data['results'].map((detail) => ({
    id: detail['id'],
    backPoster: posterUrl + detail['backdrop_path'],
    popularity: detail['popularity'],
    title: detail['title'],
    poster: posterUrl + detail['poster_path'],
    overview: detail['overview'],
  }))
  console.log(data)
  return modifiedData
}

export const fetchUpcomingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming`,
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
        language: 'en-US',
        page: 1,
      },
    }
  )
  const posterUrl = 'https://image.tmdb.org/t/p/original/'
  const modifiedData = data['results'].map((detail) => ({
    id: detail['id'],
    backPoster: posterUrl + detail['backdrop_path'],
    popularity: detail['popularity'],
    title: detail['title'],
    poster: posterUrl + detail['poster_path'],
    overview: detail['overview'],
  }))
  console.log('upcoming', data)
  return modifiedData
}

export const fetchNowPlayingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing`,
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
        language: 'en-US',
        page: 1,
      },
    }
  )
  const posterUrl = 'https://image.tmdb.org/t/p/original/'
  const modifiedData = data['results'].map((detail) => ({
    id: detail['id'],
    backPoster: posterUrl + detail['backdrop_path'],
    popularity: detail['popularity'],
    title: detail['title'],
    poster: posterUrl + detail['poster_path'],
    overview: detail['overview'],
  }))
  return modifiedData
}
