import { View, Text, Image } from 'react-native';
import refinedChatTime from 'utils/refineChatTime';
import { tokens, images } from 'constants/';
import { Message } from 'types/Chat';

interface OthersChatProps {
  message: Message;
}

export default function OthersChat({ message }: OthersChatProps) {
  const refinedTime = refinedChatTime(message.createdAt);

  return (
    <View className='flex-row items-end w-full px-16 py-8'>
      <Image source={images.profileDefault} className='w-30 h-30 rounded-full' />
      <View className='flex ml-16'>
        <Text className={`font-rg text-xxsm color-gray-700`}>{message.sender}</Text>
        <View className='flex-row items-end'>
          <View className=' px-8 py-[6] mr-16 bg-primary-100 rounded-10'>
            <Text className={`${tokens.md_14} color-gray-800`}>{message.message}</Text>
          </View>
          {/* 시간 & 읽은 사람 갯수 */}
          <View>
            <Text className={`relative bottom-[-10] ${tokens.md_10} color-gray-800`}>1</Text>
            <Text className={`${tokens.md_10} color-gray-700`}>{refinedTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}