import { useProps } from "./useProps";

export const Layout = () => {
  const { randomMovie } = useProps();
  console.log(randomMovie);

  return (
    <header
      className="h-100"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="ml-8 pt-36 text-white">
        <h1 className="text-6xl font-extrabold pb-1">{randomMovie?.name}</h1>
        <div className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]">
          {randomMovie?.overview}
        </div>
      </div>
      <div className="gradebg-gradual-gradient h-[7.4rem]"></div>
    </header>
  );
};
