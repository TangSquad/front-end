import { Text } from 'react-native';
import { tokens } from 'constants/';

export default function SetepIndicatorText({ step }: { step: number }) {
  return(
    <Text className={`${tokens.bd_14} color-gray-600 mt-32 mb-16 text-center`}>다이빙 로그 #{step+1}</Text>
  );
}