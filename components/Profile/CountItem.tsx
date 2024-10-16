import { View, Text } from 'react-native';
import { tokens } from '../../constants';

interface CountItemProps {
  title: string;
  count: number | undefined;
}

export default function CountItem({ title, count }: CountItemProps) {
  return (
    <View className='flex-row justify-between items-center mr-8'>
      <Text className={`${tokens.rg_14} color-gray-600`}>{title}</Text>
      <Text className={`${tokens.md_14} color-gray-800 ml-4`}>{count}</Text>
    </View>
  );
}