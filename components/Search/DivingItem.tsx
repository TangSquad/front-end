import { View, Text, Image, TouchableOpacity } from 'react-native';
import TagBox from './styles/TagBox';
import { router } from 'expo-router';
import { Diving } from 'types/Gatherings';
import { tokens, images, icons } from 'constants/';

interface DivingItemProps {
  item: Diving;
  index: number;
}

export default function DivingItem({ item, index }: DivingItemProps) {
  const handlePress = (id: number) => {
    router.push(`diving/${id}`);
  };

  return (
    <TouchableOpacity
      key={index}
      className='flex-row items-center gap-x-14 py-16'
      onPress={() => handlePress(item.id)}
    >
      <Image source={item.thumbnailUrl ? { uri: item.thumbnailUrl } : images.defaultImage} className='w-70 h-70 rounded-10' />
      <View className='flex-1'>
        <View className='flex-row justify-between'>
          <View className='flex-row'>
            <TagBox content={item.age}/>
            <TagBox content={`${item.moods.map((mood, index) => (mood + (index === item.moods.length -1 ? '' : '·')))}`}/>
          </View>
          <Text className={`flex-row ${tokens.md_12} color-gray-500`}>
            <Image source={icons.member} className='mr-4' />
            <Text className={`${tokens.rg_12} color-gray-500`}>{item.currentPeople}/{item.limitPeople}</Text>
          </Text>
        </View>
        <Text className={`${tokens.bd_16} color-gray-800`}>{item.divingName}</Text>
        <Text className={`${tokens.md_12} color-gray-500`}>
          일정{' '}
          <Text className={`${tokens.rg_12} color-gray-500`}>{item.startDate} ~ {item.endDate}</Text>
        </Text>
        <View className='flex-row gap-x-12 mt-4'>
          <View className='flex items-center justify-center bg-gray-100 px-7 rounded-10'>
            <Text className={`${tokens.md_12} color-primary`}>{item.location}</Text>
          </View>
          <Text className={`${tokens.md_12} color-gray-500`}>
            자격{' '}
            <Text className={`${tokens.rg_12} color-gray-500`}>{item.licenseLimit}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}