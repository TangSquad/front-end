import { View, StyleSheet } from 'react-native';
import { useContext, useEffect } from 'react';
import { LogbookContext } from 'contexts/LogbookContext';
import RNPickerSelect from 'react-native-picker-select';
import { equipmentSizes } from 'data/';
import { tokens } from 'constants/';

interface InfoPickerProps {
  type: '슈즈' | '수트' | '마스크' | '웨이트' | 'BC';
}

export default function InfoPicker({ type }: InfoPickerProps) {
  const { logbook, setLogbook } = useContext(LogbookContext);
  const key = equipmentSizes[type].key;
  const defaultValue = equipmentSizes[type].sizes[0].value;

  useEffect(() => {
    if (logbook.equipment[key] === '') {
      setLogbook((prev) => ({
        ...prev,
        equipment: {
          ...prev.equipment,
          [key]: defaultValue,
        }, 
      }));
    }
  }, [logbook]);

  const handleChange = (value: string) => {
    setLogbook({ ...logbook, equipment: { ...logbook.equipment, [key]: value } });
  };

  return(
    <View className='ml-4'>
      <RNPickerSelect
        onValueChange={(value) => handleChange(value)}
        items={equipmentSizes[type].sizes}
        placeholder={{}}
        style={{
          inputIOS: textStyle.text,
          inputAndroid: textStyle.text,
        }}
      />
    </View>
  );
};

const textStyle = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'medium',
    color: tokens.primary_800,
  },
});