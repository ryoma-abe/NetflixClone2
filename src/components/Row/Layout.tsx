import { Movie } from "../../type";
import { useProps } from "./useProps";

type Props = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
  handleClick: () => void;
};
export const Layout = ({ title, movies, isLargeRow }: Props) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  const { handleClick } = useProps("");
  return (
    <div>
      <h2 className="text-3xl text-white p-5">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {movies.map((movie: Movie) => (
          <img
            key={movie.id}
            className={`max-h-24 object-contain w-full m-2 ${
              isLargeRow ? "max-h-60" : ""
            }`}
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              handleClick(movie);
            }}
          />
        ))}
      </div>
    </div>
  );
};
