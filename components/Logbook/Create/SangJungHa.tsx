import { View, Text, TouchableOpacity } from 'react-native';
import { tokens } from 'constants/';

interface SangJungHaProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
}

export default function SangJungHa({ title, value, setValue }: SangJungHaProps) {
  const levels = ['상', '중', '하'];

  const defualtTextStyle = `${tokens.rg_14} color-gray-400`;
  const selectedTextStyle = `${tokens.md_14} color-gray-800`;

  return (
    <View className='flex-row'>
      <Text className={`${tokens.md_16} color-gray-600 mr-9`}>{title}</Text>
      <View className='flex-row gap-x-9'>
        {levels.map((level, index) => (
          <TouchableOpacity key={index} onPress={() => setValue(level)}>
            <Text className={level === value ? selectedTextStyle : defualtTextStyle}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}