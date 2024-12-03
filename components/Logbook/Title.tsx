import { Text } from 'react-native';
import { tokens } from 'constants/';

interface TitleProps {
  content: string;
  mandatory?: boolean;
}

export default function Title({ content, mandatory = false }: TitleProps) {
  
  return (
    <Text className={`${tokens.bd_16} color-primary`}>
      {content}
      {mandatory && <Text className='color-primary-700'>*</Text>}
    </Text>
  );
}