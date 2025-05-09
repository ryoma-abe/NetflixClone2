const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&watch_region=JP&language=ja-JP`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&watch_region=JP&language=ja`,
  fetchTopRated: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP`,
  fetchActionMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10759&watch_region=JP&language=ja-JP`,
  fetchNewsMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10763&watch_region=JP&language=ja-JP`,
  fetchKidsMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10762&watch_region=JP&language=ja-JP`,
  fetchRomanceMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749&watch_region=JP&language=ja-JP`,
  fetchDocumentMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99&watch_region=JP&language=ja-JP`,
  fetchMovieVideos: (movieId: string) => {
    return `${BASE_URL}/tv/${movieId}/videos?api_key=${API_KEY}`;
  },
};
