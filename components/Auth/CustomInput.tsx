import { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { tokens, icons } from 'constants/';

interface CustomInputProps {
  title: string;
  type: string;
  placeholder: string;
  setInput: (value: string) => void;
}

export default function CustomInput({ title, type, placeholder, setInput }: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPswd, setShowPswd] = useState(false);

  const togglePswd = () => {
    setShowPswd(!showPswd);
  };

  return (
    <View className='flex items-start w-full h-fit mb-26'>
      <Text className={`${tokens.bd_16} color-primary`}>{title}</Text>
      <View className={`flex-row items-center justify-between w-full ${isFocused ? 'border-primary-500' : 'border-gray-300'} border-b-[1px]`}>
        <TextInput
          className='flex-1 bg-white py-10'
          autoCapitalize='none'
          placeholder={placeholder}
          placeholderTextColor={tokens.gray_400}
          onChangeText={(value) => setInput(value.trim())}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={type === 'password' && !showPswd}
        />
        {type === 'password' && (
          <TouchableOpacity activeOpacity={1} onPress={togglePswd} className='h-full px-10'>
            <Image className='flex-1 w-24 h-24' resizeMode='contain' source={ showPswd ? icons.openedEyes : icons.closedEyes} />
          </TouchableOpacity>)
        }
      </View>
    </View>
  );
}