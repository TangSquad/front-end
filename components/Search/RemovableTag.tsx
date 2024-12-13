import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { tokens, icons } from 'constants/';

interface RemovableTagProps {
  tag: string;
  group: 'certificates' | 'locations' | 'moods' | 'ages' | 'alignment';
}

export default function RemovableTag({ tag, group }: RemovableTagProps) {
  const params = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
    alignment: string,
  }>();

  const updateParams = (key: string, value: string) => {
    const updated = value.split(',').filter((item) => item !== tag);
    const updatedParams = {
      ...params,
      [key]: updated,
    };
    router.replace({ pathname: '/search', params: updatedParams });
  };
  
  const handlePress = () => {
    switch (group) {
    case 'certificates':
      updateParams('certificates', params.certificates);
      break;
    case 'locations':
      updateParams('locations', params.locations);
      break;
    case 'moods':
      updateParams('moods', params.moods);
      break;
    case 'ages':
      updateParams('ages', params.ages);
      break;
    case 'alignment':
      router.replace({ pathname: '/search', params: { ...params, alignment: '' } });
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