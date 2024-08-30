import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(auth)/sign-in');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="w-screen h-screen items-center justify-center bg-white font-sans-md">
      <Text>GREET!</Text>
    </View>
  );
}