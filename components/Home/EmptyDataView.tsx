import { View, Text } from 'react-native';
import { tokens } from 'constants/';

interface EmptyDataViewProps {
  message: string;
}

export default function EmptyDataView({ message }: EmptyDataViewProps) {
  return (
    <View className='flex justify-center items-center w-full py-50'>
      <Text className={`${tokens.bd_14} color-gray-400`}>{message}</Text>
    </View>
  );
}