import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// Axiosを使ってデータを取得し毎回ベースURLを書く必要がなく、コードが簡潔になる
