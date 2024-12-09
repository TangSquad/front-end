
import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getDivingRecent } from 'api/diving/diving-home';
import Header from 'components/Home/Header';
import DivingItem from 'components/Search/DivingItem';
import EmptyDataView from './EmptyDataView';

export default function RecentDivingSection() {
  const { data, error } = useQuery({
    queryKey: ['divingRecent'],
    queryFn: getDivingRecent,
  });

  const isEmpty = error || !data;
  
  return (
    <View className='mt-24 mb-12'>
      <Header title='신규 다이빙' path='/search' visible={!isEmpty} />
      {isEmpty ? <EmptyDataView message='신규 생성 다이빙이 없습니다.' /> :
        <View>
          {data.map((diving) => (
            <DivingItem key={diving.id} index={diving.id} item={diving} />
          ))}
        </View>
      }
    </View>
  );
}