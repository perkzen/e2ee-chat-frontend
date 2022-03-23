import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BE_BASE_URL;
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
