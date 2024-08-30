import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { TokenContext } from '../contexts/TokenContext';

export default function App() {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(auth)/sign-in');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <TokenContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken }}>
      <View className="w-screen h-screen items-center justify-center bg-white font-sans-md">
        <Text>GREET!</Text>
      </View>
    </TokenContext.Provider>
  );
}