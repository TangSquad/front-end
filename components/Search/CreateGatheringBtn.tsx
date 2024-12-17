import { TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { icons } from 'constants/';
import { GatheringType } from 'types/Gatherings';

export default function CreateGatheringBtn({ type }: { type: GatheringType }) {
  const handlePress = () => {
    if(type === '모임') {
      router.push('create-group');
    } else {
      router.push('create-diving');
    }
  };

  return (
    <TouchableOpacity
      className='absolute flex justify-center items-center right-32 bottom-32 w-70 h-70 rounded-full z-10 bg-primary'
      style={{ shadowColor: 'black', shadowOffset: { width:0, height:0 }, shadowOpacity: 0.2, shadowRadius: 10 }}
      onPress={handlePress}
    >
      <Image source={icons.plus} className='w-38 h-38'/>
    </TouchableOpacity>
  );
}