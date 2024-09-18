import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { tokens, images } from '../../constants';

function SignupFinished() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-primary-100'>
      <View className='flex-1 items-center justify-center'>
        <Image source={images.logo} className='absolute top-100'/>
        <Text className={`${tokens.bd_24} color-primary-600 my-24 relative top-50`}>회원가입이 완료되었습니다.</Text>
        <Text className={`${tokens.md_16} color-gray-600 relative top-50 text-center`}>회원정보를 입력하고 설정을 완료해보세요!</Text>
      </View>
      <View className='flex-row w-full justify-evenly py-20'>
        <TouchableOpacity
          onPress={() => router.push('/home')}
          className='flex items-center justify-center w-168 py-16 bg-gray-300 rounded-10'
          activeOpacity={0.8}
        >
          <Text className={`${tokens.bd_16} color-white`}>건너뛰기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/user-info')}
          className='flex items-center justify-center w-168 py-16 bg-primary rounded-10'
          activeOpacity={0.8}
        >
          <Text className={`${tokens.bd_16} color-white`}>회원정보 입력</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignupFinished;