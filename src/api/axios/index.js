import axios from 'axios';

export const instance = axios.create({
  timeout: 4000,
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return {
      status: response.data.status,
      data: response.data.data,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);
