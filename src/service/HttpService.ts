import axios from "axios";
import { getCookie } from "cookies-next";

export const HttpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

HttpService.interceptors.request.use((config) => {
  const token = getCookie("token");

  if (token !== undefined && config.headers.Authorization === undefined) {
    config.headers.Authorization = token;
  }
  return config;
});
