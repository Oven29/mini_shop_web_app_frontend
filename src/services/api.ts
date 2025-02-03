import axios from 'axios';
import { API_URL } from '../utils/config';
import { showAlert } from '../utils/utils';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers['init_data'] = encodeURIComponent(JSON.stringify(window.Telegram.WebApp.initDataUnsafe));
    return config;
  },
  (error) => {
    console.log(error);
    showAlert(`Error ! ${error}`);
  }
);
