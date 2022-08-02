import axios, { AxiosInstance } from "axios";

const host = process.env.REACT_APP_CLIENT_HOST ?? "localhost";
const port = process.env.REACT_APP_CLIENT_PORT ?? 3000;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${host}:${port}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
export default axiosInstance;
