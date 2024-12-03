import { View } from 'react-native';
import Title from '../Title';
import Equipment from 'components/Equipment/Equipment';

export default function EquipmentSection() {
  return(
    <View className='my-16'>
      <Title content='장비' />
      <Equipment />
    </View>
  );
}