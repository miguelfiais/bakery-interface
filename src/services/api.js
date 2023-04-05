import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

api.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('bakeryUser');
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});
