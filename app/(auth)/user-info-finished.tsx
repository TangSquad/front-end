import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../../api/user/profile';
import { router } from 'expo-router';
import { tokens, images } from '../../constants';

function SignupFinished() {
  const { data } = useQuery({
    queryKey: ['my-profile'],
    queryFn: getMyProfile,
  });

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-primary-100'>
      <View className='flex-1 items-center justify-center'>
        <Image source={images.logo} className='absolute top-100'/>
        <Text className={`${tokens.bd_24} color-primary-600 my-24 relative top-50`}>설정이 완료되었습니다.</Text>
        <Text className={`${tokens.md_16} color-gray-600 relative top-50 text-center`}>
          {data?.data.nickname}님 반갑습니다.
          {'\n'}
          탱스쿼드에서 첫 TANG 활동을 시작해보세요!
        </Text>
      </View>
      <View className='w-full px-24 pb-16'>
        <TouchableOpacity
          onPress={() => router.push('/home')}
          className='flex items-center justify-center py-16 bg-primary rounded-10'
          activeOpacity={0.8}
        >
          <Text className={`${tokens.bd_16} color-white`}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignupFinished;