import axios, { AxiosRequestConfig } from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const axiosDefaultConfigs: AxiosRequestConfig = {
  baseURL,
  withCredentials: false,
};

const axiosInstance = axios.create(axiosDefaultConfigs);

export default axiosInstance;
