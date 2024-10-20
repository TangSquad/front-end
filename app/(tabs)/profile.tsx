import { Text, View, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from 'api/user/profile';
import CountItem from 'components/Profile/CountItem';
import TopNavigationBar from 'components/Profile/TopNavigationBar';
import { tokens, images } from 'constants/';

export default function Profile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getMyProfile,
  });

  const goToProfileEdit = () => {
    router.push('/profile-edit');
  };

  if (isLoading) return <View className='bg-white'></View>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {Platform.OS === 'android' && <View className='h-50' />}
      <View className='p-24'>
        <View className='flex-row items-center gap-x-16'>
          <Image
            source={data?.data.profileImageUrl ? { uri: data.data.profileImageUrl } : images.defaultImage}
            className='w-72 h-72 rounded-full border-2 border-gray-300'
          />
          <View>
            <Text className={`${tokens.bd_24} color-black`}>{data?.data.name}</Text>
            <Text className={`${tokens.md_14} color-gray-600`}>@{data?.data.nickname}</Text>
          </View>
        </View>
        <View></View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row my-16'>
            <CountItem title='참여한 모임 수' count={data?.data.clubCount} />
            <CountItem title='다이빙' count={data?.data.divingCount} />
            <CountItem title='로그북' count={data?.data.logBookCount} />
          </View>
          <TouchableOpacity
            className='rounded-50 px-8 py-4 justify-center items-center border border-primary-300'
            onPress={goToProfileEdit}
            activeOpacity={0.8}
          >
            <Text className={`${tokens.md_12} color-gray-700`}>프로필 편집</Text>
          </TouchableOpacity>
        </View>
        <View className='w-full h-full'>
          <TopNavigationBar
            isEquipmentPublic={data?.data.isEquipmentOpen ?? true}
            isLogBookPublic={data?.data.isLogbookOpen ?? true}
          />
          <Text>hi</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}