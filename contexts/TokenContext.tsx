import { useState, createContext, ReactNode } from 'react';

const defaultValue = {
  accessToken: '',
  setAccessToken: (accessToken: string) => {},
  refreshToken: '',
  setRefreshToken: (refreshToken: string) => {},
};

export const TokenContext = createContext(defaultValue);
export const getAccessToken = () => defaultValue.accessToken;
export const getRefreshToken = () => defaultValue.refreshToken;

export const TokenProvider = ({ children }: {children: ReactNode}) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  return (
    <TokenContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken }}>
      {children}
    </TokenContext.Provider>
  );
};