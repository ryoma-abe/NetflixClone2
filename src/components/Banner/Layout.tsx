import { useProps } from "./useProps";

export const Layout = () => {
  const { randomMovie } = useProps();
  return (
    <header
      className="banner-header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-8 pt-36">
        <h1 className="text-6xl font-extrabold pb-1">ここに〇〇</h1>
        <div className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]">
          ここにディスクリプションがはいります
        </div>
      </div>
    </header>
  );
};
