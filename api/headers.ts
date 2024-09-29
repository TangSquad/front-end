import AsyncStorage from '@react-native-async-storage/async-storage';

export const getHeaders = async () => {
  const accessToken = await AsyncStorage.getItem('accessToken');

  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return headers;
};