import { View, TextInput } from 'react-native';
import { useState } from 'react';

interface BasicInputProps {
  placeholder?: string;
}

const BasicInput = ({ placeholder }: BasicInputProps) => {
  const [focused, setFocused] = useState(false);

  const borderColor = focused ? 'border-primary' : 'border-gray-300';

  return (
    <View className={'w-[240] border-b-[1px] ' + borderColor}>
      <TextInput
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export {
  BasicInput,
};