import axios from 'axios';
import { getBaseUrl } from '../constants/api';
import { getHeaders } from './headers';

const apiClient = axios.create({
  baseURL: getBaseUrl(),
});

// Get updated headers
apiClient.interceptors.request.use(
  async (config) => {
    const headers = await getHeaders(); 
    // Merge with existing headers
    Object.entries(headers).forEach(([key, value]) => {
      config.headers.set(key, value);
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;