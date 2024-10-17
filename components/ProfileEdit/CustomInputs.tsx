import { View, TextInput, Text } from 'react-native';
import Title from './styles/Title';
import GrayLine from './styles/GrayLine';
import { tokens } from 'constants/';

interface TitledInputProps {
  title: string;
  placeholder: string;
  input: string;
  setInput: (value: string) => void;
}

function TitledInput({ title, placeholder, input, setInput }: TitledInputProps) {
  return(
    <View>
      <Title title={title} />
      <TextInput
        className={`${tokens.rg_14} color-gray-800`}
        placeholder={placeholder}
        onChangeText={(value) => setInput(value)}
        defaultValue={input}
      />
      <GrayLine />
    </View>
  );
}

interface HeightWeightInputProps {
  height: string;
  setHeight: (value: string) => void;
  weight: string;
  setWeight: (value: string) => void;
}

function HeightWeightInput({ height, setHeight, weight, setWeight }: HeightWeightInputProps) {
  return(
    <View>
      <Title title='기본 정보' />
      <View className='flex-row gap-x-16'>
        <View className='flex-1'>
          <View className='flex-row items-end'>
            <Text className='color-gray-800'>키:  </Text>
            <TextInput
              className={`${tokens.rg_14} color-gray-800`}
              placeholder='키 입력'
              defaultValue={height}
              onChangeText={(value) => setHeight(value)}
            />
          </View>
          <GrayLine />
        </View>
        <View className='flex-1'>
          <View className='flex-row items-end'>
            <Text className='color-gray-800'>몸무게:  </Text>
            <TextInput
              className={`${tokens.rg_14} color-gray-800`}
              placeholder='몸무게 입력'
              defaultValue={weight}
              onChangeText={(value) => setWeight(value)}
            />
          </View>
          <GrayLine />
        </View>
      </View>
    </View>
  );
}

export {
  TitledInput,
  HeightWeightInput,
};