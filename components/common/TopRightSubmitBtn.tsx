import { Text, TouchableOpacity } from 'react-native';
import { tokens } from '../../constants';

interface TopRightSubmitBtnProps {
  handleSubmit: () => void;
}

export default function TopRightSubmitBtn({ handleSubmit }: TopRightSubmitBtnProps) {

  return(
    <TouchableOpacity onPress={handleSubmit} className='w-32 h-24 flex justify-center'>
      <Text className={`${tokens.md_16} color-primary`}>완료</Text>
    </TouchableOpacity>);
}