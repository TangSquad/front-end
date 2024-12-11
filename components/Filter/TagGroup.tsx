import { View, Text } from 'react-native';
import Tag from 'components/CreateGathering/Tag';
import { tokens } from 'constants/';

interface TagGroupProps {
  data: string[];
  title: string;
  selectedTags: string[]; 
  setSelectedTags: (selectedTags: string[]) => void;
}

export default function TagGroup({ data, title, selectedTags, setSelectedTags }: TagGroupProps) {
  const handleSelect = (label: string) => {
    const newSelected = selectedTags.includes(label) ? selectedTags.filter(selected => selected !== label) : [...selectedTags, label];
    setSelectedTags(newSelected);
  };

  return (  
    <View className='flex-auto my-12 space-y-10'>
      <Text className={`${tokens.bd_16} color-gray-800`}>
        {title}
      </Text>
      <View className='flex-row flex-wrap'>
        {data.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            disabled={false}
            handleSelect={handleSelect}
            checked={selectedTags.includes(tag)}
          />
        ))}
      </View>
    </View>
  );
}