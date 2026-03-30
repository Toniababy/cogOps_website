import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://cogops-server.onrender.com/api'
});

export default api;
