import { Movie } from "./useProps";

type Props = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};
export const Layout = ({ title, movies, isLargeRow }: Props) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="text-3xl">{title}</h2>
      <div>
        {movies.map((movie: Movie) => (
          <img
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
