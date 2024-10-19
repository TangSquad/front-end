import { View, Text, Switch } from 'react-native';
import Title from './styles/Title';
import GrayLine from './styles/GrayLine';
import { tokens } from 'constants/';

interface PublicitySwitchesProps {
  isLogBookPublic: boolean;
  isEquipmentPublic: boolean;
  setIsLogBookPublic: (value: boolean) => void;
  setIsEquipmentPublic: (value: boolean) => void;
}

export default function PublicitySwitches({
  isLogBookPublic,
  isEquipmentPublic,
  setIsLogBookPublic,
  setIsEquipmentPublic,
}: PublicitySwitchesProps) {
  return (
    <View>
      <Title title='공개 범위' />
      <View className='flex-row gap-x-16 mt-8'>
        <View className='flex-row items-center h-24'>
          <Text className={`${tokens.rg_14} color-gray-800 mr-8`}>로그북</Text>
          <Switch
            value={isLogBookPublic}
            onValueChange={(value) => setIsLogBookPublic(value)}
            trackColor={{ false: tokens.gray_400, true: tokens.primary_300 }}
          />
        </View>
        <View className='flex-row items-center h-24'>
          <Text className={`${tokens.rg_14} color-gray-800 mr-8`}>장비</Text>
          <Switch
            value={isEquipmentPublic}
            onValueChange={(value) => setIsEquipmentPublic(value)}
            trackColor={{ false: tokens.gray_400, true: tokens.primary_300 }}
          />
        </View>
      </View>
      <GrayLine marginTop={10} />
    </View>
  );
}