import { View, TextInput } from 'react-native';
import { useState } from 'react';

interface BaseInputProps {
  type: 'email' | 'code' | 'password' | 'passwordConfirm';
  input: string;
  setInput: (value: string) => void;
}

export default function Input({ type, input, setInput }: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const refinedType = type === 'email' ? '이메일을' : type === 'code' ? '인증코드를' : '새 비밀번호를';

  return (
    <View className={`w-full ${isFocused ? 'border-2 border-primary' : 'border border-gray-300'} rounded-10`}>
      <TextInput
        className='w-full p-16'
        placeholder={`${refinedType} 입력해주세요`}
        defaultValue={input}
        onChangeText={(value) => setInput(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize='none'
      />
    </View>
  );
};