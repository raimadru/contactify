import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://frontend-task-api.metasite.lt/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referer-Policy': 'strict-origin-when-cross-origin',
    'X-XSS-Protection': '1; mode=block',
    // 'Authorization': `Bearer ${token}`
  },
});
