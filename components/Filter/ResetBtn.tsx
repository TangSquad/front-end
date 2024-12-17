import { Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { tokens, icons } from 'constants/';

export default function ResetBtn() {
  const handlePress = () => {
    router.setParams({
      certificates: '',
      locations: '',
      moods: '',
      ages: '',
      alignment: '',
    });
  };

  return (
    <TouchableOpacity className='flex-row items-center' onPress={handlePress}>
      <Image source={icons.reset} className='w-18 h-18 mr-4' resizeMode='contain' />
      <Text className={`${tokens.md_16} color-gray-500`}>초기화</Text>
    </TouchableOpacity>
  );
}