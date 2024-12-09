
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getDivingRecent } from 'api/diving/diving-home';
import Header from 'components/Home/Header';
import DivingItem from 'components/Search/DivingItem';
import { tokens } from 'constants/';

export default function RecentDivingSection() {
  const { data, error } = useQuery({
    queryKey: ['divingRecent'],
    queryFn: getDivingRecent,
  });

  if (error || !data) {
    return (
      <View className='flex justify-center items-center w-full h-100'>
        <Text className={`${tokens.bd_14} color-gray-400`}>신규 생성 다이빙이 없습니다.</Text>
      </View>
    );
  }
  
  return (
    <View className='mt-24 mb-12'>
      <Header title='신규 다이빙' path='/search' />
      <View>
        {data.map((diving) => (
          <DivingItem key={diving.id} index={diving.id} item={diving} />
        ))}
      </View>
    </View>
  );
}