import { View, TextInput } from 'react-native';
import Title from './styles/Title';
import GrayLine from './styles/GrayLine';
import { tokens } from '../../constants';

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
        value={input}
      />
      <GrayLine />
    </View>
  );
}

export {
  TitledInput,
};