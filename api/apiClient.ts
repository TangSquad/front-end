import axios from 'axios';
import { getBaseUrl } from '../constants/api';
import { getHeaders } from './headers';

const useApiClient = () => {
  const apiClient = axios.create({
    baseURL: getBaseUrl(),
    headers: getHeaders(),
  });

  return apiClient;
};

const apiClient = useApiClient();

export default apiClient;