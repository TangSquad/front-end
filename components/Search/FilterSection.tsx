import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import RemovableTag from 'components/Search/RemovableTag';
import { icons } from 'constants/';

export default function FilterSection() {
  const { certificates, locations, moods, ages, alignment } = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
    alignment: string,
  }>();

  const handlePress = () => {
    router.push({ pathname: '/filter', params: {
      certificates: certificates,
      locations: locations,
      moods: moods,
      ages: ages,
      alignment: alignment,
    } });
  };

  return (
    <View className='flex-row justify-center gap-x-16 px-24 py-8 bg-white border-y border-gray-100'>
      <TouchableOpacity className='w-24 h-24' onPress={handlePress}>
        <Image className='w-24 h-24' source={icons.filter} resizeMode='contain' />
      </TouchableOpacity>
      {/* tags */}
      <ScrollView horizontal>
        {certificates && certificates.split(',').map((tag, index) => (
          <RemovableTag key={index} tag={tag} group='certificates' />
        ))}
        {locations && locations.split(',').map((tag, index) => (
          <RemovableTag key={index} tag={tag} group='locations' />
        ))}
        {moods && moods.split(',').map((tag, index) => (
          <RemovableTag key={index} tag={tag} group='moods' />
        ))}
        {ages && ages.split(',').map((tag, index) => (
          <RemovableTag key={index} tag={tag} group='ages' />
        ))}
        {alignment && <RemovableTag tag={alignment} group='alignment' />}
      </ScrollView>
    </View>
  );
}