import { View } from 'react-native';

interface GrayLineProps {
  marginTop?: number;
  marginBottom?: number;
}

export default function GrayLine({ marginTop = 7, marginBottom = 24 }: GrayLineProps) {
  return (
    <View 
      style={{ marginTop, marginBottom }}
      className='h-1 bg-gray-300' 
    />
  );
}