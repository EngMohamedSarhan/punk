import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: 'https://api.punkapi.com/v2',
  timeout: 5000,
});

export default axios;
