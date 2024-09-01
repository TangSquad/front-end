import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TokenProvider } from '../contexts/TokenContext';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { NativeWindStyleSheet } from 'nativewind';
import { tokens } from '../constants';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

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

  const queryClient = new QueryClient();

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: tokens.primary_400 }}
        text1Style={{ color: tokens.gray_800, fontWeight: 'bold', fontSize: 14 }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: 'red' }}
        text1Style={{ color: tokens.gray_800, fontWeight: 'bold', fontSize: 14 }}
      />
    ),
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TokenProvider>
        <Stack screenOptions={{
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name="index" options={{ headerShown: false }}/>
          <Stack.Screen name="(auth)/sign-in" options={{
            animation: 'slide_from_bottom',
            headerShown: false,
          }} />
          <Stack.Screen name="(auth)/sign-up" options={{
            animation: 'slide_from_right',
            title: '회원가입',
          }} />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="screens/CreateGroup" options={{
            title: '모임 등록',
            animation: 'slide_from_bottom',
          }} />
          <Stack.Screen name="screens/CreateDiving" options={{
            title: '다이빙 등록',
            animation: 'slide_from_bottom',
          }}/>
        </Stack>
        <Toast config={toastConfig}/>
      </TokenProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;