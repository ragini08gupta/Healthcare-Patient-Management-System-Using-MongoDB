import axios from 'axios';

const productionUrl = 'http://localhost:3000/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const customFetchNoToken = axios.create({
  baseURL: productionUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the auth token to every request
customFetch.interceptors.request.use(
  (config) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user?.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error parsing user token:', error);
      // Continue without token if parsing fails
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);