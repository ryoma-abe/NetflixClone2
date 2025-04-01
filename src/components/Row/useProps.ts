import { instance } from "../../axios";
import { useEffect, useState } from "react";
import { Movie } from "../../type";
import axios from "axios";
import { requests } from "../../request";

export const useProps = (fetchUrl: string) => {
  // 映画のデータを保存しておくためのステート
  const [movie, setMovie] = useState<Array<Movie>>([]);
  // クリックされた映画のURLを保存しておくためのステート
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      const movies = request.data.results.map((movie: Movie) => {
        return {
          id: movie.id,
          name: movie.name,
          poster_path: movie.poster_path,
          backdrop_path: movie.backdrop_path,
        };
      });
      setMovie(movies);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  // クリックした要素の動画を取得
  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const moviePlayUrl = await axios.get(requests.fetchMovieVideos(movie.id));
      setTrailerUrl(moviePlayUrl.data.results[0].key);
    }
  };

  return { movie, handleClick, trailerUrl };
};
