import { View, Image } from 'react-native';
import InfoBox from './InfoBox';
import { images } from 'constants/';

interface EquipmentProps {
  pickable?: boolean;
}

export default function Equipment({ pickable = false }: EquipmentProps) {
  return(
    <View className='mt-16'>
      <View className='flex-row justify-evenly'>
        <InfoBox title='슈즈' pickable={pickable} />
        <InfoBox title='수트' pickable={pickable} />
        <InfoBox title='마스크' pickable={pickable} />
      </View>
      <Image source={images.equipment} resizeMode='contain' className='w-full h-fit my-10' />
      <View className='flex-row justify-evenly'>
        <InfoBox title='웨이트' pickable={pickable} />
        <InfoBox title='BC' pickable={pickable} />
      </View>
    </View>
  );
}