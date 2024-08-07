import { View, Text } from 'react-native'
import { tokens } from '../../constants';
import Tag from './Tag';

interface TagGroupProps {
  data: string[];
  title: string;
  limit?: number | null;
  selectedTags: string[]; 
  setSelectedTags: (selectedTags: string[]) => void;
}

function TagGroup({ data, title, limit=null, selectedTags, setSelectedTags }: TagGroupProps) {

  const handleSelect = (label: string) => {
    const newSelected = selectedTags.includes(label) ? selectedTags.filter(selected => selected !== label) : [...selectedTags, label];
    setSelectedTags(newSelected);
  };

  return (  
    <View className='flex-auto my-12 space-y-10'>
      <View className='flex-row items-end gap-x-12'>
        <Text className={`${tokens.bd_16} color-gray-600`}>
          {title}
        </Text>
        {limit && <Text className={`${tokens.rg_12} color-gray-600`}>
          *최대 {limit}개를 선택해 주세요
        </Text>}
      </View>
      <View className='flex-row flex-wrap'>
        {data.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            disabled={limit === selectedTags.length && !selectedTags.includes(tag) ? true : false}
            handleSelect={handleSelect}
          />
        ))}
      </View>
    </View>
  );
}

export default TagGroup;