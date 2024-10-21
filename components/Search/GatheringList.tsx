import { FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyDiving } from 'api/diving/diving';
import DivingItem from './DivingItem';

const mockData = {
  divingId: 1,
  userId: 1,
  divingName: '서울과기대 스쿠버다이빙 동아리', 
  divingIntro: '서울과기대 스쿠버다이빙 동아리입니다.',
  level: ['전체'],
  startDate: '2024-03-28',
  endDate: '2024-04-01',
  location: '서울',
  limitPeople: 10,
  limitLicense: '전체',
  age: '20대',
  moodOne: '스쿠버다이빙',
  moodTwo: '호기심이 많은',
  src: '', // temporary
};

export default function GatheringList() {
  const { data, error } = useQuery({
    queryKey: ['diving'],
    queryFn: getMyDiving,
  });

  return (
    <FlatList
      data={[mockData]}
      className='h-full bg-white'
      renderItem={({ item, index }) => (
        <DivingItem item={item} index={index} />
      )}
    />
  );
}