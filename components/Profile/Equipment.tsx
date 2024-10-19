import { Text, View, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyEquipment } from 'api/user/equipment';
import { tokens, images } from 'constants/';

const BodyText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text className={`${tokens.md_14} color-gray-800 mr-44`}>
      {children}
    </Text>
  );
};

export default function Equipment() {
  const { data, error } = useQuery({
    queryKey: ['equipment'],
    queryFn: getMyEquipment,
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <View className='h-full bg-white'>
      <Text className={`${tokens.md_16} color-black mt-16`}>기본 정보</Text>
      <View className='flex-row w-full'>
        <BodyText>키: {data?.data.height}cm</BodyText>
        <BodyText>몸무게: {data?.data.weight}kg</BodyText>
      </View>
      <Text className={`${tokens.md_16} color-black mt-16`}>장비</Text>
      <View className='flex-row mb-32'>
        <BodyText>수트: {data?.data.suit}</BodyText>
        <BodyText>웨이트: {data?.data.weightBelt}kg</BodyText>
        <BodyText>bc: {data?.data.bc}</BodyText>
        <BodyText>슈즈: {data?.data.shoes}</BodyText>
      </View>
      <View className='relative'>
        <Image source={images.equipment} className='w-fit h-fit'/>
        <Text className={`absolute ${tokens.md_14} color-white top-1 left-[130]`}>슈트: {data?.data.suit}</Text>
        <Text className={`absolute ${tokens.md_14} color-white top-[37] left-[20]`}>슈즈: {data?.data.shoes}</Text>
        <Text className={`absolute ${tokens.md_14} color-white top-[78] right-[22]`}>마스크: {data?.data.mask}</Text>
        <Text className={`absolute ${tokens.md_14} color-white top-[160] right-[91]`}>bc: {data?.data.bc}</Text>
        <Text className={`absolute ${tokens.md_14} color-white top-[167] left-[96]`}>웨이트: {data?.data.weightBelt}kg</Text>
      </View>
    </View>
  );
}