import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { tokens, icons } from 'constants/';

interface TypingSectionProps {
  input: string;
  setInput: (input: string) => void;
  handlePress: () => void;
}

export default function TypingSection({ input, setInput, handlePress }: TypingSectionProps) {
  const disabled = input.length === 0;

  return (
    <View className='flex-row justify-between items-center fixed bottom-0 w-screen px-18 py-16 bg-white border-t border-gray-200'>
      <Image source={icons.plus} className='w-[22] h-[22]' tintColor={tokens.gray_400} />
      <View className='flex-row items-center p-8 bg-gray-100 rounded-20'>
        <TextInput
          className={`w-[270]`}
          defaultValue={input}
          onChangeText={(value) => setInput(value)}
        />
        <TouchableOpacity
          className='flex justify-center items-center w-32 h-32 bg-white rounded-full'
          onPress={handlePress}
          disabled={disabled}
        >
          <Image source={icons.arrowUp} className='w-20 h-16' resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </View>
  );
}