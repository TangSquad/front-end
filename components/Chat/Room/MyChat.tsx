import { View, Text, Image } from 'react-native';
import { tokens, images } from 'constants/';

interface OthersChatProps {
  text: string;
}

export default function OthersChat({ text }: OthersChatProps) {
  return (
    <View className='flex-row'>
      {/* 여기서 시간 / 읽은 사람 갯수 */}
      <View className='ml-16 px-8 py-[6] bg-primary rounded-10'>
        <Text className={`${tokens.md_14} white`}>{text}</Text>
      </View>
    </View>
  );
}