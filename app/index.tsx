import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="w-screen h-screen items-center justify-center bg-white font-sans-md">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className='text-blue-500' >Go to Home</Link>
    </View>
  );
}