import { TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react';
import { SplashScreen, Stack, router } from 'expo-router';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { SheetProvider } from 'react-native-actions-sheet';
import { LogbookProvider } from 'contexts/LogbookContext';
import 'components/common/sheets';
import { NativeWindStyleSheet } from 'nativewind';
import { tokens, icons } from 'constants/';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

// Prevent splash screen from auto hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <SheetProvider>
          <LogbookProvider>
            <Stack screenOptions={{
              headerTitleAlign: 'center',
            }}>
              <Stack.Screen name="index" options={{ headerShown: false }}/>
              <Stack.Screen name="(auth)/sign-in" options={{
                animation: 'slide_from_bottom',
                title: '',
                headerShown: false,
              }} />
              <Stack.Screen name="(auth)/reset-password" options={{
                title: '비밀번호 찾기',
              }} />
              <Stack.Screen name="(auth)/sign-up" options={{
                animation: 'slide_from_right',
                title: '회원가입',
              }} />
              <Stack.Screen name="(auth)/signup-finished" options={{
                title: '',
                headerShown: false,
              }} />
              <Stack.Screen name="(auth)/user-info" options={{
                title: '회원정보',
              }}/>
              <Stack.Screen name="(auth)/user-info-finished" options={{
                title: '',
                headerShown: false,
              }}/>
              <Stack.Screen name="(tabs)" options={{
                headerShown: false,
                title: '',
                animation: 'none',
              }}/>
              <Stack.Screen name="(screens)/create-group" options={{
                title: '모임 등록',
                animation: 'slide_from_bottom',
              }} />
              <Stack.Screen name="(screens)/create-diving" options={{
                title: '다이빙 일정 등록',
                animation: 'slide_from_bottom',
              }}/>
              <Stack.Screen name="(screens)/create-logbook" options={{
                title: '다이빙 로그북',
                animation: 'slide_from_bottom',
              }} />
              <Stack.Screen name="(screens)/create-logs" options={{
                title: '다이빙 로그북',
                headerBackTitleVisible: false,
              }} />
              <Stack.Screen name="(screens)/logbook/[id]" options={{
                title: '로그북',
              }} />
              <Stack.Screen name="(screens)/profile-edit" options={{
                title: '프로필 편집',
                headerTitleStyle: {
                  fontFamily: 'SpoqaHanSansNeo-Medium',
                  color: tokens.primary_800,
                },
                animation: 'slide_from_bottom',
                headerStyle: {
                  backgroundColor: tokens.gray_50,
                },
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()} className='w-32 h-24 flex justify-center'>
                    <Image source={icons.x} style={{ width: 16, height: 16 }} />
                  </TouchableOpacity>
                ),
              }} />
              <Stack.Screen name="(screens)/diving/[id]" options={{
                title: '',
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerTintColor: tokens.gray_500,
                headerTransparent: true,
              }} />
              <Stack.Screen name="(screens)/moim/[id]" options={{
                title: '',
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerTintColor: tokens.gray_500,
                headerTransparent: true,
              }} />
            </Stack>
            <Toast config={toastConfig}/>
          </LogbookProvider>
        </SheetProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}