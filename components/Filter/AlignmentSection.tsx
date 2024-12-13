import { View, Text } from 'react-native';
import Tag from 'components/CreateGathering/Tag';
import { tokens } from 'constants/';

interface AlignmentSectionProps {
  alignment: string;
  setAlignment: (alignment: string) => void;
}

export default function AlignmentSection({ alignment, setAlignment }: AlignmentSectionProps) {
  const options = ['최신순', '인기순'];

  return (
    <View className='flex-auto my-12 space-y-10'>
      <Text className={`${tokens.bd_16} color-gray-800`}>정렬</Text>
      <View className='flex-row'>
        {options.map((option) => (
          <Tag
            key={option}
            tag={option}
            disabled={false}
            handleSelect={setAlignment}
            checked={alignment === option}
          />
        ))}
      </View>
    </View>
  );
}