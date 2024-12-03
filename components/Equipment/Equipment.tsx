import { View, Image } from 'react-native';
import InfoBox from './InfoBox';
import { images } from 'constants/';
import { LogbookEquipment } from 'types/Logbook';

interface EquipmentProps {
  equipment?: LogbookEquipment;
}

export default function Equipment({ equipment }: EquipmentProps) {
  return(
    <View className='mt-16'>
      <View className='flex-row justify-evenly'>
        <InfoBox title='슈즈' value={equipment?.shoes} />
        <InfoBox title='수트' value={equipment?.suit} />
        <InfoBox title='마스크' value={equipment?.mask} />
      </View>
      <Image source={images.equipment} resizeMode='contain' className='w-full h-fit my-10' />
      <View className='flex-row justify-evenly'>
        <InfoBox title='웨이트' value={equipment?.weightBelt} />
        <InfoBox title='BC' value={equipment?.bc} />
      </View>
    </View>
  );
}