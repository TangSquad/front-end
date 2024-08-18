import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { tokens } from '../../constants';

interface CustomInputProps {
  title: string;
  type: string;
  placeholder: string;
  setInput: (value: string) => void;
}

function CustomInput({ title, type, placeholder, setInput }: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className='flex items-start w-full h-fit mb-26'>
      <Text className={`${tokens.bd_16} color-primary`}>{title}</Text>
      <TextInput
        className={`w-full bg-white ${isFocused ? 'border-primary-500' : 'border-gray-300'} border-b-[1px] py-10`}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor={tokens.gray_400}
        onChangeText={(value) => setInput(value.trim())}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

export default CustomInput;