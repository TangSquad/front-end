import { View, Text, Image, SafeAreaView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../../api/user/profile';
import { router } from 'expo-router';
import { tokens, images } from '../../constants';
import MainButton from '../../components/common/MainButton';

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
        <MainButton title='시작하기' handlePress={() => router.push('/home')} />
      </View>
    </SafeAreaView>
  );
}

export default SignupFinished;