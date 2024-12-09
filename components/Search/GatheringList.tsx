import { FlatList, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getMyDiving, getDivingAll } from 'api/diving/diving';
import { getDivingLiked } from 'api/diving/diving-liked';
import { getMyMoim, getMoimAll } from 'api/moim/moim';
import { getMoimLiked } from 'api/moim/moim-liked';
import { Diving, Moim } from 'types/Gatherings';
import DivingItem from './DivingItem';
import MoimItem from './MoimItem';
import NullDataView from './NullDataView';
import { GatheringType, SectionType } from 'types/Gatherings';

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

  if (data === undefined || data.length === 0) return <NullDataView type='모임' sectionType={sectionType} />;

  // SearchQuery
  let { query } = useLocalSearchParams();
  query = Array.isArray(query) ? query[0] : query === undefined ? '' : query;

  const includesQuery = (attribute: Moim) => {
    return (
      attribute.moimName.toLowerCase().includes(query) || 
      attribute.moimIntro.toLowerCase().includes(query) || 
      attribute.age.toLowerCase().includes(query) || 
      attribute.locations.some((location) => location.toLowerCase().includes(query)) || 
      attribute.moods.some((mood) => mood.toLowerCase().includes(query)) || 
      attribute.licenseLimit.toLowerCase().includes(query)
    );
  };

  return (
    <FlatList
      data={data.filter((item) => includesQuery(item))}
      className='h-full px-24 bg-white'
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

  if (data === undefined || data.length === 0) return <NullDataView type='다이빙' sectionType={sectionType} />;

  // SearchQuery
  let { query } = useLocalSearchParams();
  query = Array.isArray(query) ? query[0] : query === undefined ? '' : query;

  const includesQuery = (attribute: Diving) => {
    return (
      attribute.divingName.toLowerCase().includes(query) ||
      attribute.divingIntro.toLowerCase().includes(query) ||
      attribute.age.toLowerCase().includes(query) ||
      attribute.location.toLowerCase().includes(query) ||
      attribute.moods?.some((mood) => mood.toLowerCase().includes(query)) ||
      attribute.licenseLimit.toLowerCase().includes(query) ||
      attribute.startDate.includes(query) ||
      attribute.endDate.includes(query)
    );
  };

  return (
    <FlatList
      data={data.filter((item) => includesQuery(item))}
      className='h-full px-24 bg-white'
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