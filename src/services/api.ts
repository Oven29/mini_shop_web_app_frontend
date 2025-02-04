import axios from 'axios';
import { API_URL } from '../utils/config';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthHeader = (token: string | null) => {
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers["Authorization"];
  }
};
