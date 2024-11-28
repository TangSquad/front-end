import { Text, View, SafeAreaView, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { getMoimById } from 'api/moim/moim';
import MainButton from 'components/common/MainButton';
import { tokens, icons } from 'constants/';

export default function MoimDetails() {
  const { id } = useLocalSearchParams() as { id: string };

  const { data, error } = useQuery({
    queryKey: ['moimById', id],
    queryFn: () => getMoimById(Number(id)),
  });

  return (
    // ScrollView to be added
    <SafeAreaView className='items-center bg-gray-50'>
      <Image source={icons.defaultPhoto} className='mt-[40] mb-100' />
      <View className='h-full w-full bg-white p-24 rounded-20'>  
        <View className='flex-row justify-between mb-26'>
          <View className='flex-row'>
            {/* location, license */}
            <Text className={`${tokens.md_12} color-gray-500`}>{data?.locationOne}</Text>
            <Text className={`${tokens.rg_12} color-gray-500`}>자격조건</Text>
            <Text className={`${tokens.md_12} color-gray-500`}>{data?.licenseLimit}</Text>
          </View>
          <View className='flex-row'>
            {/* member, like-btn */}
            <View className={`flex-row items-center ${tokens.md_12} color-gray-500`}>
              <Image source={icons.member} className='mr-4' />
              <Text className={`${tokens.rg_14} color-gray-500`}>2/{data?.limitPeople}</Text>
            </View>
            {/* like-btn to be added */}
          </View>
        </View>
        <Text className={`${tokens.md_16} color-primary`}>
          # {data?.age} # {data?.moodOne} # {data?.moodTwo}
        </Text>
        <Text className={`${tokens.bd_24} color-gray-800`}>{data?.moimName}Moim Test title</Text>
        <Text className={`${tokens.md_14} color-gray-600`}>{data?.moimIntro}moim test intro</Text>
        <Text className={`${tokens.md_14} color-gray-600`}>{data?.moimDetails}moim test details</Text>
        <Text className={`${tokens.bd_20} color-gray-700 mt-50`}>1인 예상 활동 비용</Text>
        <View className='h-200'></View>
        <MainButton
          title='참여하기'
          handlePress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}