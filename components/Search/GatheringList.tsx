import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyDiving } from 'api/diving/diving';
import { getMyMoim } from 'api/moim/moim';
import DivingItem from './DivingItem';
import MoimItem from './MoimItem';
import { GatheringType } from 'types/Gatherings';

const mockDivingData = {
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

const mockMoimData = {
  id: 1,
  userId: 1,
  anonymous: false,
  moimName: '서울과기대 스쿠버다이빙 동아리', 
  moimIntro: '서울과기대 스쿠버다이빙 동아리입니다.',
  limitPeople: 10,
  licenseLimit: '전체',
  age: 20,
  moimDetails: '',
  expense: 0,
  locationOne: '서울',
  locationTwo: '경기',
  locationThree: '',
  moodOne: '스쿠버다이빙',
  moodTwo: '호기심이 많은',
  src: '', // temporary
};

const MoimList = () => {
  const { data, error } = useQuery({
    queryKey: ['moim'],
    queryFn: getMyMoim,
  });

  if (!data) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={[mockMoimData]}
      className='h-full bg-white'
      renderItem={({ item, index }) => (
        <MoimItem item={item} index={index} />
      )}
    />
  );
};

const DivingList = () => {
  const { data, error } = useQuery({
    queryKey: ['diving'],
    queryFn: getMyDiving,
  });

  if (!data) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={[mockDivingData]}
      className='h-full bg-white'
      renderItem={({ item, index }) => (
        <DivingItem item={item} index={index} />
      )}
    />
  );
};

export default function GatheringList(type: GatheringType) {
  return (
    <View>
      {type === '모임' ? <MoimList /> : <DivingList />}
    </View>
  );
}