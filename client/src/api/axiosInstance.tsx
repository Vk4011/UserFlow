// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your base URL
  timeout: 10000, // Optional timeout
});

export default axiosInstance;
