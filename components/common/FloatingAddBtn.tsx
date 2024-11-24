import { TouchableOpacity, Image } from 'react-native';
import { icons } from 'constants/';

interface FloatingAddBtnProps {
  onPress: () => void;
}

export default function FloatingAddBtn({ onPress }: FloatingAddBtnProps) {
  return (
    <TouchableOpacity
      className='absolute flex justify-center items-center right-32 bottom-32 w-70 h-70 rounded-full z-10 bg-primary'
      style={{ shadowColor: 'black', shadowOffset: { width:0, height:0 }, shadowOpacity: 0.2, shadowRadius: 10 }}
      onPress={onPress}
    >
      <Image source={icons.plus} className='w-38 h-38'/>
    </TouchableOpacity>
  );
}