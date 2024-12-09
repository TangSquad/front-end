import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getDivingPopular } from 'api/diving/diving-home';
import { tokens } from 'constants/';
import { spots } from 'data/';

export default function PopularSpotSection() {
  const { data, error } = useQuery<string[]>({
    queryKey: ['divingPopular'],
    queryFn: getDivingPopular,
  });

  const handlePress = (spot: string) => {
    router.replace('/search');
    router.replace({ pathname: '/search', params: { query: spot } });
  };
  
  if (error || !data) {
    return (
      <View className='flex justify-center items-center w-full h-100'>
        <Text className={`${tokens.bd_14} color-gray-400`}>이달의 다이빙 스팟이 없습니다.</Text>
      </View>
    );
  }

  return (
    <View className='my-12'>
      <Text className={`${tokens.bd_16} color-black`}>이달의 다이빙 스팟</Text>
      <ScrollView horizontal>
        <View className='flex-row py-12'>
          {data.map((spot) => (
            <TouchableOpacity
              key={spot}
              className='flex justify-center items-center w-[95] h-[95] mr-12'
              onPress={() => handlePress(spots[spot]?.label)}
            >
              <Image source={spots[spot]?.src} className='w-[95] h-[95] rounded-10' />
              <Text className={`${tokens.bd_16} absolute bottom-12 color-white`}>{spots[spot]?.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}