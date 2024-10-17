import { View, Text, Image, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { tokens, images } from '../../constants';
import MainButton from '../../components/common/MainButton';

function SignupFinished() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-primary-100'>
      <View className='flex-1 items-center justify-center'>
        <Image source={images.logo} className='absolute top-100'/>
        <Text className={`${tokens.bd_24} color-primary-600 my-24 relative top-50`}>회원가입이 완료되었습니다.</Text>
        <Text className={`${tokens.md_16} color-gray-600 relative top-50 text-center`}>회원정보를 입력하고 설정을 완료해보세요!</Text>
      </View>
      <View className='flex-row w-full justify-evenly py-20'>
        <MainButton title='건너뛰기' handlePress={() => router.push('/home')} bgColor='gray-300' />
        <View className='w-8'></View>
        <MainButton title='회원정보 입력' handlePress={() => router.push('/user-info')} />
      </View>
    </SafeAreaView>
  );
}

export default SignupFinished;