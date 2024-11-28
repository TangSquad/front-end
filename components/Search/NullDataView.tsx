import { View, Text } from 'react-native';
import { GatheringType, SectionType } from 'types/Gatherings';
import { tokens } from 'constants/';

interface NullDataViewProps {
  type: GatheringType;
  sectionType: SectionType;
}

export default function NullDataView({ type, sectionType }: NullDataViewProps) {
  return (
    <View className='h-full bg-white justify-center items-center'>
      <Text className={`${tokens.bd_16} color-gray-400`}>
        {sectionType === '찾기' ? '' : sectionType} {type}이 없습니다.
      </Text>
    </View>
  );
};