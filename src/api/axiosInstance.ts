/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const host = "https://rg-server.p-e.kr";
const port = "443";

console.log("env_host", process.env.REACT_APP_SERVER_HOST);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${host}:${port}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    const getToken = () => {
      const item = localStorage.getItem("token");
      return item ? JSON.parse(item) : null;
    };
    config.headers.Authorization = getToken() ? `Bearer ${getToken()}` : "";
  }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
export default axiosInstance;
