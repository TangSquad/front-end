import { View, Text, TextInput } from 'react-native';
import { useRef } from 'react';
import { tokens } from 'constants/';

interface CreateGatheringInputSectionProps {
  flex?: 'row' | '';
  title: string;
  placeholder?: string;
  limit?: number;
  input: string;
  setInput: (value: string) => void;
}

export default function CreateGatheringInputSection({
  flex='',
  title,
  placeholder='',
  limit=2000,
  input,
  setInput,
}: CreateGatheringInputSectionProps) {
  const flexRow = 'flex-row justify-between items-center';
  const inputRef = useRef<TextInput>(null);
  const isFlexRow = flex === 'row';

  const handleChange = (e) => {
    setInput(e);
  };

  return(
    <View className={`${isFlexRow && flexRow} my-12`}>
      <View className={`flex-row justify-between`}>
        <Text className={`${tokens.bd_16} color-gray-600 ${!isFlexRow && 'pb-10'}`}>{title}</Text>
        {limit < 2000 && <Text className={`${input.length === 21 ? 'color-red text-bold' : 'color-gray-400' }`}>{`${input.length}/${limit}`}</Text>}
      </View>
      <View className={`flex-row justify-between items-center ${isFlexRow && 'w-183'} gap-x-9`}>
        <TextInput
          className={`${isFlexRow ? 'w-150' : 'w-full'} ${tokens.md_14} color-black bg-gray-100 px-18 py-9 rounded-10 flex-1`}
          placeholder={placeholder}
          maxLength={limit}
          ref={inputRef}
          onChangeText={handleChange}
          keyboardType={isFlexRow ? 'number-pad' : 'default'}
          placeholderTextColor={tokens.gray_400}
          textAlignVertical='top'
          multiline={true}  // ios fix to center text
        />
        {isFlexRow &&
          <Text className={`${tokens.bd_16} color-gray-400`}>
            {title === '인원 제한' ? '명' : '원'}
          </Text>
        }
      </View>
    </View>
  );
}