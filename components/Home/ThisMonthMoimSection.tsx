import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMoimActive } from 'api/moim/moim-home';
import MoimItem from 'components/Search/MoimItem';
import Header from './Header';
import { tokens } from 'constants/';

export default function ThisMonthMoimSection() {
  const { data, error } = useQuery({
    queryKey: ['moimActive'],
    queryFn: getMoimActive,
  });

  if (error || !data) {
    return (
      <View className='flex justify-center items-center w-full h-100'>
        <Text className={`${tokens.bd_14} color-gray-400`}>이달의 인기 모임이 없습니다.</Text>
      </View>
    );
  }

  return (
    <View className='my-12'>
      <Header title='이달의 인기 모임' path='/search' />
      <View>
        {data.map((moim) => (
          <MoimItem key={moim.id} index={moim.id} item={moim} />
        ))}
      </View>
    </View>
  );
}