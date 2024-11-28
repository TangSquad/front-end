import { Text, View, Image, Alert, ScrollView } from 'react-native';
import { useQuery, useMutation } from '@tanstack/react-query';
import { router, useLocalSearchParams } from 'expo-router';
import { getDivingById } from 'api/diving/diving';
import { joinDiving } from 'api/diving/diving-join';
import { getDivingLiked, likeDiving, unlikeDiving } from 'api/diving/diving-liked';
import LikeBtn from 'components/common/LikeBtn';
import MainButton from 'components/common/MainButton';
import { tokens, images, icons } from 'constants/';

export default function DivingDetails() {
  const { id } = useLocalSearchParams() as { id: string };

  const { data, error } = useQuery({
    queryKey: ['divingById'],
    queryFn: () => getDivingById(Number(id)),
  });

  if (error) {
    Alert.alert('에러가 발생하였습니다. 다시 시도해주세요.');
    router.back();

    return(<View className='h-full bg-wthie'/>);
  };

  // 좋아요 버튼
  const { data: likedDivings, error: likedError } = useQuery({
    queryKey: ['liked-divings'],
    queryFn: () => getDivingLiked(),
  });

  const isLiked = likedDivings?.some((diving) => diving.id === Number(id)) ?? false;

  const mutationLike = useMutation({
    mutationFn: () => {
      if (isLiked) return unlikeDiving(Number(id));
      else return likeDiving(Number(id));
    },
    onSuccess: () => {
      Alert.alert(isLiked ? '좋아요가 취소되었습니다.' : '좋아요가 완료되었습니다.');
    },
    onError: () => {
      Alert.alert('에러가 발생하였습니다. 다시 시도해주세요.');
    },
  });

  const handleLike = () => {
    mutationLike.mutate();
  };

  // 다이빙 가입
  const mutation = useMutation({
    mutationFn: joinDiving,
    onSuccess: () => {
      Alert.alert('다이빙 참여가 완료되었습니다.');
      router.back();
    },
    onError: () => {
      Alert.alert('에러가 발생하였습니다. 다시 시도해주세요.');
    },
  });

  const handlePress = () => {
    mutation.mutate(Number(id));
  };

  return (
    <ScrollView className='bg-white'>
      <View className='items-center'>
        <Image source={data?.thumbnailUrl ? { uri: data?.thumbnailUrl } : images.defaultGathering } className='w-full h-[320]' />
        <View className='h-full w-full bg-white p-24 rounded-20'>  
          <View className='flex-row justify-between mb-26'>
            <View className='flex-row'>
              {/* location, license */}
              <View className='bg-gray-100 rounded-10 px-8 py-1 mr-16'>
                <Text className={`${tokens.md_12} color-gray-500`}>{data?.location}</Text>
              </View>
              <Text className={`${tokens.rg_12} color-gray-500`}>자격조건  </Text>
              <View className='bg-gray-100 rounded-20 px-10 py-1 mr-8'>
                <Text className={`${tokens.md_12} color-gray-500`}>{data?.licenseLimit}</Text>
              </View>
            </View>
            <View className='flex-row'>
              {/* member, like-btn */}
              <View className={`flex-row items-center ${tokens.md_12} color-gray-500 mr-10`}>
                <Image source={icons.member} className='mr-4' />
                <Text className={`${tokens.rg_14} color-gray-500`}>{data?.currentPeople}/{data?.limitPeople}</Text>
              </View>
              <LikeBtn liked={isLiked} handlePress={handleLike}/>
            </View>
          </View>
          <Text className={`${tokens.md_16} color-primary`}>
            # {data?.age}     # {data?.moods[0]} {data?.moods[1] && `# ${data?.moods[1]}`}
          </Text>
          <Text className={`${tokens.bd_24} color-gray-800 my-8`}>{data?.divingName}</Text>
          <Text className={`${tokens.md_14} color-gray-600 my-16`}>{data?.divingIntro}</Text>
          <View className='h-100'></View>
          <MainButton
            title='참여하기'
            handlePress={handlePress}
          />
        </View>
      </View>
    </ScrollView>
  );
}