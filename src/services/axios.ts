import axios from 'axios';
import { API_URL, API_KEY } from '../constants/general';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = config;
    if (newConfig.url) {
      newConfig.url = `${newConfig.url}&key=${API_KEY}`;
    }
    return newConfig;
  },
);

export default axiosInstance;
