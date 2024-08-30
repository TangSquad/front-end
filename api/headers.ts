import { getAccessToken } from '../contexts/TokenContext';

export const getHeaders = () => {
  const accessToken = getAccessToken();

  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return headers;
};