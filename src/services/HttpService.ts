import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";

console.log("hi", process.env.API_URL);
export const HttpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://dev.enshaa.app",
});

HttpService.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

// HttpService.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response.status === 401) {
//       console.log("deleting cookie");
//     }
//     console.log(error.code, error.message);
//     Promise.reject(error);
//   }
// );
