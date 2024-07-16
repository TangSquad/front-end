import { useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen, Slot, Stack } from 'expo-router';

import { useFonts } from 'expo-font';

// Prevent splash screen from auto hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, err] = useFonts({
    'SpoqaHanSansNeo-Bold': require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Medium': require('../assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
    'SpoqaHanSansNeo-Regular': require('../assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
    'SpoqaHanSansNeo-Light': require('../assets/fonts/SpoqaHanSansNeo-Light.ttf'),
  });

  useEffect(() => {
    if(err) throw err;
    // Hide SplashScreen when fonts are loaded
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, err]);

  if(!fontsLoaded && !err) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  )
};

export default RootLayout;