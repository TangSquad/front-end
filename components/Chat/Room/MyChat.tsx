import { View, Text } from 'react-native';
import refinedChatTime from 'utils/refineChatTime';
import { tokens } from 'constants/';

interface OthersChatProps {
  text: string;
  createdAt: string;
}

export default function OthersChat({ text, createdAt }: OthersChatProps) {
  const refinedTime = refinedChatTime(createdAt);

  return (
    <View className='flex-row justify-end items-center w-full px-16 py-8'>
      {/* 시간 & 읽은 사람 갯수 */}
      <View className='flex justify-end items-end'>
        <Text className={`relative bottom-[-10] ${tokens.md_10} color-gray-800`}>1</Text>
        <Text className={`${tokens.md_10} color-gray-700`}>{refinedTime}</Text>
      </View>
      {/* 메세지 */}
      <View className='ml-16 px-8 py-[6] bg-primary rounded-10'>
        <Text className={`${tokens.md_14} color-white`}>{text}</Text>
      </View>
    </View>
  );
}