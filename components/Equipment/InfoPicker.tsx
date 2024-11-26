import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { equipmentSizes } from 'data/';
import { tokens } from 'constants/';

interface InfoPickerProps {
  type: '슈즈' | '수트' | '마스크' | '웨이트' | 'BC';
  defaultValue?: string;
}

export default function InfoPicker({ type, defaultValue }: InfoPickerProps) {
  const [selected, setSelected] = useState();

  return(
    <View className='ml-4'>
      <RNPickerSelect
        onValueChange={(value) => setSelected(value)}
        items={equipmentSizes[type]}
        placeholder={{}}
        value={selected ?? defaultValue}
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