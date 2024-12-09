import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMoimActive } from 'api/moim/moim-home';
import MoimItem from 'components/Search/MoimItem';
import Header from './Header';
import EmptyDataView from './EmptyDataView';

export default function ThisMonthMoimSection() {
  const { data, error } = useQuery({
    queryKey: ['moimActive'],
    queryFn: getMoimActive,
  });

  const isEmpty = error || !data;

  return (
    <View className='my-12'>
      <Header title='이달의 인기 모임' path='/search' visible={!isEmpty} />
      { isEmpty ? <EmptyDataView message='이달의 인기 모임이 없습니다.' /> : 
        <View>
          {data.map((moim) => (
            <MoimItem key={moim.id} index={moim.id} item={moim} />
          ))}
        </View>
      }
    </View>
  );
}