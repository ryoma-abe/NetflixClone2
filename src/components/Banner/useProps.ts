import { useEffect, useState } from "react";
import { instance } from "../../axios";
import { requests } from "../../request";

export const useProps = () => {
  const [randomMovie, setRandomMovie] = useState<any>(null);
  // 初回マウント時のみランダムに数字を取得
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setRandomMovie(
        Math.floor(Math.random() * request.data.results.length - 1)
      );
    };
    fetchData();
  }, []);

  return { randomMovie };
};
