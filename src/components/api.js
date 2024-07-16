import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "8ffd346da8a8a2aaf774584c6d3e1669",
    language: 'en-US',
  },
});

export default api;
