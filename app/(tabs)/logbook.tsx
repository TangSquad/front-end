import { SafeAreaView, View } from 'react-native';
import { router } from 'expo-router';
import TopNavigationBar from 'components/Logbook/TopNavigationBar';
import FloatingAddBtn from 'components/common/FloatingAddBtn';

export default function Logbook() {
  const handlePress = () => {
    router.push('/create-logbook');
  };

  return (
    <SafeAreaView className='bg-white'>
      <View className='h-full'>
        <TopNavigationBar />
        <FloatingAddBtn onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}