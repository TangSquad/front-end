import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { tokens, icons } from 'constants/';

interface RemovableTagProps {
  tag: string;
  group: 'certificates' | 'locations' | 'moods' | 'ages';
}

export default function RemovableTag({ tag, group }: RemovableTagProps) {
  const { certificates, locations, moods, ages } = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
  }>();

  const updateParams = (key: string, value: string) => {
    const updated = value.split(',').filter((item) => item !== tag);
    router.replace({ pathname: '/search', params: { key: updated } });
  };
  
  const handlePress = () => {
    switch (group) {
    case 'certificates':
      updateParams('certificates', certificates);
      break;
    case 'locations':
      updateParams('locations', locations);
      break;
    case 'moods':
      updateParams('moods', moods);
      break;
    case 'ages':
      updateParams('ages', ages);
      break;
    default:
      console.warn(`Unhandled group type: ${group}`);
    }
  };

  return (
    <View className='flex-row justify-between items-center px-[9] py-[3] mr-4 bg-primary-100 rounded-20 opacity-80'>
      <Text className={`${tokens.md_12} color-primary mr-[9]`}>{tag}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image className='w-[9] h-[9]' source={icons.x} resizeMode='contain' tintColor={tokens.primary_200} />
      </TouchableOpacity>
    </View>
  );
}