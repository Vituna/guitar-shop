import axios from 'axios';

const BACKEND_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me/';
const REQUEST_TIMEOUT = 5000;

export const createApi = (setErrorNoFound) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error) => {
      const {response} = error;

      if (response?.status === 404 || response?.status === 400) {
        return setErrorNoFound();
      }
      return Promise.reject(error);
    },
  );

  return api;
};
