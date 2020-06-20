import axios from 'axios'

export const fetchTopRatedMovies = () => {
    const {data}= await axios
      .get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key: `8f7229a4038cf8ec46c0b563c1c9b463`,
          language: 'en-US',
          page: 1,
        },
      })
      const posterUrl = 'https://image.tmdb.org/t/p/original/'
      const modifiedData = data['results'].map((detail) => ({
          id: detail['id'],
          backPoster: posterUrl + detail['backdrop_url'],
          popularity: detail['popularity'],
          title: detail['title'],
          poster: posterUrl + detail['poster_path'],
          overview: detail['overview']
      }))
      return modifiedData
}