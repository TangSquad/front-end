import { View } from 'react-native';
import Title from '../Title';
import Equipment from 'components/Equipment/Equipment';

export default function EquipmentSection() {
  return(
    <View className='mt-16 mb-16'>
      <Title content='장비' />
      <Equipment pickable={true} />
    </View>
  );
}