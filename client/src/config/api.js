import axios from 'axios';

const api = axios.create({
  // This forces it to use Render, not Vercel
  baseURL: import.meta.env.VITE_BASE_URL,
  
  // This is mandatory to send and receive the HTTP-only cookie
  withCredentials: true 
});

export default api;