import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { tokens } from 'constants/';

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/sign-in');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="w-screen h-screen items-center justify-center bg-primary">
      <Text className={`${tokens.bd_28} color-white`}>TANG SQUAD</Text>
      <Text className={`${tokens.bd_16} color-primary-100`}>다이버와 세상의 모든 연결의 시작</Text>
    </View>
  );
}