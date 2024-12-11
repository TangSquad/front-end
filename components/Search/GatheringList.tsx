import { FlatList, View } from 'react-native';
import { useMemo } from 'react';
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

  // SearchQuery
  let { query } = useLocalSearchParams();
  query = Array.isArray(query) ? query[0] : query === undefined ? '' : query;

  const includesQuery = (moim: Moim) => {
    if (query === '') return true;

    return (
      moim.moimName.toLowerCase().includes(query) || 
      moim.moimIntro.toLowerCase().includes(query) || 
      moim.age.toLowerCase().includes(query) || 
      moim.locations.some((location) => location.toLowerCase().includes(query)) || 
      moim.moods.some((mood) => mood.toLowerCase().includes(query)) || 
      moim.licenseLimit.toLowerCase().includes(query)
    );
  };

  // Filter
  const { certificates, locations, moods, ages } = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
  }>();

  const includesFilter = (moim: Moim) => {
    if (!certificates && !locations && !moods && !ages) return true;
    
    return (
      certificates?.split(',').some((cert) => moim.licenseLimit === cert) ||
      moim.locations.some((item) => new Set(locations?.split(',')).has(item)) ||
      moim.moods.some((item) => new Set(moods?.split(',')).has(item)) ||
      ages?.split(',').some((age) => moim.age === age)
    );
  };

  const filteredData = data?.filter((item) => includesQuery(item) && includesFilter(item));

  // Sort
  const { alignment } = useLocalSearchParams<{ alignment: string }>();
  const sortedData = useMemo(() => {
    if (alignment === '인기순') {
      return filteredData?.sort((a, b) => b.registeredUserIds.length - a.registeredUserIds.length);
    }
    return filteredData;
  }, [filteredData, alignment]);

  if (data === undefined || data.length === 0 || filteredData?.length === 0)
    return <NullDataView type='모임' sectionType={sectionType} />;

  return (
    <FlatList
      data={sortedData}
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

  // SearchQuery
  let { query } = useLocalSearchParams();
  query = Array.isArray(query) ? query[0] : query === undefined ? '' : query;

  const includesQuery = (diving: Diving) => {
    if (query === '') return true;
  
    return (
      diving.divingName.toLowerCase().includes(query) ||
      diving.divingIntro.toLowerCase().includes(query) ||
      diving.age.toLowerCase().includes(query) ||
      diving.location.toLowerCase().includes(query) ||
      diving.moods?.some((mood) => mood.toLowerCase().includes(query)) ||
      diving.licenseLimit.toLowerCase().includes(query) ||
      diving.startDate.includes(query) ||
      diving.endDate.includes(query)
    );
  };

  // Filter
  const { certificates, locations, moods, ages } = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
  }>();

  const includesFilter = (diving: Diving) => {
    if (!certificates && !locations && !moods && !ages) return true;

    return (
      certificates?.split(',').some((cert) => cert === diving.location) ||
      locations?.split(',').some((location) => location === diving.location) ||
      diving.moods.some((item) => new Set(moods?.split(',')).has(item)) ||
      ages?.split(',').some((age) => age === diving.age)
    );
  };

  const filteredData = data?.filter((item) => includesQuery(item) && includesFilter(item));

  // Sort
  const { alignment } = useLocalSearchParams<{ alignment: string }>();
  const sortedData = useMemo(() => {
    if (alignment === '인기순') {
      return filteredData?.sort((a, b) => b.registeredUserIds.length - a.registeredUserIds.length);
    }
    return filteredData;
  }, [filteredData, alignment]);

  if (data === undefined || data.length === 0 || filteredData?.length === 0)
    return <NullDataView type='다이빙' sectionType={sectionType} />;

  return (
    <FlatList
      data={sortedData}
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