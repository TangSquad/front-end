import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getProfileById } from 'api/user/profile';
import { images } from 'constants/';

export default function ProfileSection({ userId }: { userId: number | undefined }) {
  const { data, error } = useQuery({
    queryKey: ['profileById', userId],
    queryFn: () => getProfileById(Number(userId)),
  });

  const imageDisplayUrl = data?.data.profileImageUrl ? { uri: data?.data.profileImageUrl } : images.profileDefault;

  const handlePress = () => {
    router.push(`/profile/${userId}`);
  };

  return(
    <View className='w-full border-b-1 border-gray-300'>
      <TouchableOpacity className='flex-row items-center w-fit' onPress={handlePress}>
        <Image source={imageDisplayUrl} className='w-36 h-36 rounded-full' />
        <Text className='color-gray-800'>{data?.data.name}</Text>
        <Text className='color-gray-600'>{data?.data.nickname}</Text>
      </TouchableOpacity>
    </View>
  );
}