import { SafeAreaView, View } from 'react-native';
import MenuList from 'components/Settings/MenuList';

export default function Settings() {
  return (
    <SafeAreaView className='bg-white'>
      <View className='h-full px-26'>
        <MenuList />
      </View>
    </SafeAreaView>
  );
}