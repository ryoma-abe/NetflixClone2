import { instance } from "../../axios";
import { useState } from "react";

export type Movie = {
  id: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export const useProps = ({ fetchUrl }: { fetchUrl: string }) => {
  // 映画のデータを保存しておくためのステート
  const [movie, setMovie] = useState<Array<Movie>>([]);
  // APIから映画データを取得
  const fetchData = async () => {
    const request = await instance.get(fetchUrl);
    const movies = request.data.results.map((movie: Movie) => {
      return {
        id: movie.id,
        name: movie.name,
        poster_path: movie.backdrop_path,
        backdrop_path: movie.backdrop_path,
      };
    });
    setMovie(movies);
    return request;
  };
  fetchData();
  return { movie };
};
