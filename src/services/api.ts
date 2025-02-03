import axios from 'axios';
import { API_URL } from '../utils/config';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers['init_data'] = window.Telegram.WebApp.initDataUnsafe;
    return config;
  },
  (error) => Promise.reject(error)
);
