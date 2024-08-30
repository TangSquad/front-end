import { createContext } from 'react';

const defaultValue = {
  accessToken: '',
  setAccessToken: (accessToken: string) => {},
  refreshToken: '',
  setRefreshToken: (refreshToken: string) => {},
};

export const TokenContext = createContext(defaultValue);
export const getAccessToken = () => defaultValue.accessToken;
export const getRefreshToken = () => defaultValue.refreshToken;