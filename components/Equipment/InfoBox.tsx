import { View, Text } from 'react-native';
import { useContext } from 'react';
import { LogbookContext } from 'contexts/LogbookContext';
import InfoPicker from './InfoPicker';
import { equipmentSizes } from 'data';
import { tokens } from 'constants/';

interface InfoBoxProps {
  title: '슈즈' | '수트' | '마스크' | '웨이트' | 'BC';
  pickable?: boolean;
}

export default function InfoBox({ title, pickable = false }: InfoBoxProps) {
  const { logbook } = useContext(LogbookContext);

  return(
    <View className='flex-row justify-evenly items-center gap-x-4 px-8 py-4 border border-gray-300 rounded-10'>
      <Text className={`${tokens.md_16} color-gray-600`}>{title}</Text>
      <Text className='color-gray-300'>|</Text>
      {pickable ?
        <InfoPicker type={title} /> :
        <Text className={`${tokens.md_16} color-gray-800`}>{logbook.equipment[equipmentSizes[title].key]}</Text>
      }
    </View>
  );
}