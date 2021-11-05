import axios from 'axios';
import { getToken, useAuthentication } from '../contexts/useAuthentication';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 50000,
});

api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;