import { Text, View, SafeAreaView, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { getDivingById } from 'api/diving/diving';
import { tokens, icons } from 'constants/';

export default function DivingDetails() {
  const { id } = useLocalSearchParams() as { id: string };

  const { data, error } = useQuery({
    queryKey: ['divingById'],
    queryFn: () => getDivingById(Number(id)),
  });

  return (
    // ScrollView to be added
    <SafeAreaView className='items-center bg-gray-50'>
      <Image source={icons.defaultPhoto} className='mt-[40] mb-100' />
      <View className='h-full w-full bg-white p-24 rounded-20'>  
        <Text className={`${tokens.bd_24} color-gray-800`}>{data?.divingName}Test</Text>
        <Text className={`${tokens.md_14} color-gray-600`}>{data?.divingIntro}test</Text>
      </View>
    </SafeAreaView>
  );
}