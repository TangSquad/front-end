import { SafeAreaView, View } from 'react-native';
import TopNavigationBar from 'components/Logbook/TopNavigationBar';

export default function Logbook() {
  return (
    <SafeAreaView className='bg-white'>
      <View className='h-full'>
        <TopNavigationBar />
      </View>
    </SafeAreaView>
  );
}