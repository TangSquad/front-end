import { Text, View, Image, Alert, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { router, useLocalSearchParams } from 'expo-router';
import { getMoimById } from 'api/moim/moim';
import MainButton from 'components/common/MainButton';
import { tokens, images, icons } from 'constants/';

export default function MoimDetails() {
  const { id } = useLocalSearchParams() as { id: string };

  const { data, error } = useQuery({
    queryKey: ['moimById', id],
    queryFn: () => getMoimById(Number(id)),
  });

  if (error) {
    Alert.alert('에러가 발생하였습니다. 다시 시도해주세요.');
    router.back();

    return(<View className='h-full bg-wthie'/>);
  };

  return (
    <ScrollView className='bg-white'>
      <View className='items-center'>
        <Image source={data?.thumbnailUrl ? { uri: data?.thumbnailUrl } : images.defaultGathering} className='w-full h-[320]' />
        <View className='h-full w-full bg-white p-24 rounded-20'>  
          <View className='flex-row justify-between mb-26'>
            <View className='flex-row items-center'>
              {/* location, license */}
              <View className='bg-gray-100 rounded-10 px-8 py-1 mr-16'>
                <Text className={`${tokens.md_12} color-gray-500`}>{data?.locations}</Text>
              </View>
              <Text className={`${tokens.rg_12} color-gray-500`}>자격조건  </Text>
              <View className='bg-gray-100 rounded-20 px-10 py-1 mr-8'>
                <Text className={`${tokens.md_12} color-gray-500`}>{data?.licenseLimit}</Text>
              </View>
            </View>
            <View className='flex-row'>
              {/* member, like-btn */}
              <View className={`flex-row items-center ${tokens.md_12} color-gray-500`}>
                <Image source={icons.member} className='mr-4' />
                <Text className={`${tokens.rg_14} color-gray-500`}>{data?.currentPeople}/{data?.limitPeople}</Text>
              </View>
              {/* like-btn to be added */}
            </View>
          </View>
          <Text className={`${tokens.md_16} color-primary`}>
            # {data?.age}     # {data?.moods[0]} {data?.moods[1] && `# ${data?.moods[1]}`}
          </Text>
          <Text className={`${tokens.bd_24} color-gray-800 my-8`}>{data?.moimName}</Text>
          <Text className={`${tokens.md_14} color-gray-600 my-16`}>{data?.moimIntro}moim test intro</Text>
          <Text className={`${tokens.md_14} color-gray-600 my-16`}>{data?.moimDetails}</Text>
          <Text className={`${tokens.bd_20} color-gray-700 mt-50`}>1인 예상 활동 비용</Text>
          <View className='h-100'></View>
          <MainButton
            title='참여하기'
            handlePress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
}