import { View, Image, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { icons } from 'constants/';

export default function FilterSection() {
  const { certificates, locations, moods, ages } = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
  }>();

  const handlePress = () => {
    router.push({ pathname: '/filter', params: {
      certificates: certificates,
      locations: locations,
      moods: moods,
      ages: ages,
    } });
  };

  return (
    <View className='flex justify-start px-24 py-8 bg-white border-y border-gray-100'>
      <TouchableOpacity className='w-24 h-24' onPress={handlePress}>
        <Image className='w-24 h-24' source={icons.filter} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
}