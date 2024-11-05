import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyDiving, getDivingAll } from 'api/diving/diving';
import { getDivingLiked } from 'api/diving/diving-liked';
import { getMyMoim, getMoimAll } from 'api/moim/moim';
import { getMoimLiked } from 'api/moim/moim-liked';
import DivingItem from './DivingItem';
import MoimItem from './MoimItem';
import { GatheringType, SectionType } from 'types/Gatherings';

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

interface GatheringItemProps {
  sectionType: SectionType;
}

const MoimList = ({ sectionType }: GatheringItemProps) => {
  const getMoimData = async () => {
    switch(sectionType) {
    case '찾기': return await getMoimAll();
    case '내': return await getMyMoim();
    case '좋아요 한': return await getMoimLiked();
    default: throw new Error('Invalid section type');
    }
  };

  const { data, error } = useQuery({
    queryKey: ['moim', sectionType],
    queryFn: getMoimData,
  });

  if (!data) return <Text>{`${sectionType}`} 모임이 없습니다.</Text>;

  return (
    <FlatList
      data={data}
      className='h-full bg-white'
      renderItem={({ item, index }) => (
        <MoimItem item={item} index={index} />
      )}
    />
  );
};

const DivingList = ({ sectionType }: GatheringItemProps) => {
  const getDivingData = async () => {
    switch(sectionType) {
    case '찾기': return await getDivingAll();
    case '내': return await getMyDiving();
    case '좋아요 한': return await getDivingLiked();
    default: throw new Error('Invalid section type');
    }
  };

  const { data, error } = useQuery({
    queryKey: ['diving'],
    queryFn: getDivingData,
  });

  if (!data) return <Text>{`${sectionType}`} 다이빙이 없습니다.</Text>;

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

interface GatheringListProps {
  type: GatheringType;
  sectionType: SectionType;
}

export default function GatheringList({ type, sectionType }: GatheringListProps) {
  return (
    <View>
      {type === '모임' ? <MoimList sectionType={sectionType} /> : <DivingList sectionType={sectionType} />}
    </View>
  );
}