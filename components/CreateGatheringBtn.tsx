import { TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { icons } from '../constants';

interface CreateGatheringBtnProps {
  type: string;
}

function CreateGatheringBtn( { type } : CreateGatheringBtnProps ) {
  const router = useRouter();
  
  const handlePress = () => {
    if(type === '모임') {
      router.push('screens/CreateGroup');
    } else {
      router.push('screens/CreateDiving');
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
};

export default CreateGatheringBtn;