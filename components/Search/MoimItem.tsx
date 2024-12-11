import { View, Text, Image, TouchableOpacity } from 'react-native';
import TagBox from './styles/TagBox';
import { router } from 'expo-router';
import { Moim } from 'types/Gatherings';
import { tokens, images, icons } from 'constants/';

interface MoimItemProps {
  item: Moim;
  index: number;
}

export default function MoimItem({ item, index }: MoimItemProps) {
  const handlePress = (id: number) => {
    router.push(`moim/${id}`);
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
            <TagBox content={`${item.age}대`}/>
            <TagBox content={`${item.moods.map((mood, index) => (mood + (index === item.moods.length - 1 ? '' : '·')))}`}/>
          </View>
          <Text className={`flex-row ${tokens.md_12} color-gray-500`}>
            <Image source={icons.member} className='mr-4' />
            <Text className={`${tokens.rg_12} color-gray-500`}>{item.registeredUserIds.length}/{item.limitPeople}</Text>
          </Text>
        </View>
        <Text className={`${tokens.bd_16} color-gray-800`}>{item.moimName}</Text>
        <Text className={`${tokens.md_12} color-gray-600`}>{item.moimIntro}</Text>
        <View className='flex-row gap-x-12'>
          <View className='flex items-center justify-center bg-gray-100 px-7 rounded-10'>
            <Text className={`${tokens.md_12} color-primary`}>
              {item.locations.map((location, index) => (location + (index === item.locations.length - 1 ? '' : '·')))}
            </Text>
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