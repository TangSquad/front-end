import { View, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyEquipment } from 'api/user/equipment';
import InfoBox from './InfoBox';
import { images } from 'constants/';

interface EquipmentProps {
  pickable?: boolean;
}

export default function Equipment({ pickable = false }: EquipmentProps) {
  const { data } = useQuery({
    queryKey: ['equipment'],
    queryFn: getMyEquipment,
  });

  return(
    <View className='mt-16'>
      <View className='flex-row justify-evenly'>
        <InfoBox title='슈즈' value={data?.data.shoes.toString()} pickable={pickable} />
        <InfoBox title='수트' value={data?.data.suit} pickable={pickable} />
        <InfoBox title='마스크' value={data?.data.mask} pickable={pickable} />
      </View>
      <Image source={images.equipment} resizeMode='contain' className='w-full h-fit my-10' />
      <View className='flex-row justify-evenly'>
        <InfoBox title='웨이트' value={data?.data.weightBelt.toString()+'kg'} pickable={pickable} />
        <InfoBox title='BC' value={data?.data.bc} pickable={pickable} />
      </View>
    </View>
  );
}