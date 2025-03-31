import { useEffect, useState } from "react";
import { instance } from "../../axios";
import { requests } from "../../request";

export const useProps = () => {
  const [randomMovie, setRandomMovie] = useState<any>(null);
  // 初回マウント時のみランダムに数字を取得
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setRandomMovie(request.data.results[randomIndex]);
    };
    fetchData();
  }, []);

  // 文字を切り取る関数
  const truncate = (str: string | undefined, n: number) => {
    if (!str) return "";
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return { randomMovie, truncate };
};
