import { Movie } from "./useProps";

type Props = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};
export const Layout = ({ title, movies, isLargeRow }: Props) => {
  return (
    <div>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};
