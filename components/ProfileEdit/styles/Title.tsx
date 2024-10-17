import { Text } from 'react-native';
import { tokens } from 'constants/';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <Text className={`${tokens.bd_16} color-gray-800 my-4`}>{title}</Text>;
}