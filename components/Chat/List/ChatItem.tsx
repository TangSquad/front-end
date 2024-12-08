import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { tokens, images } from 'constants/';
import { ChatRoom } from 'types/Chat';

interface ChatItemProps {
  item: ChatRoom;
}

export default function ChatItem({ item }: ChatItemProps) {
  const handlePress = () => {
    router.push(`/chat/${item.id}`);
  };

  return(
    <TouchableOpacity className='flex-row justify-between py-16 px-24 bg-white' activeOpacity={0.7} onPress={handlePress}>
      <Image source={images.defaultImage} className='w-[55] h-[55]' />
      <View className='flex-1 ml-10'>
        <Text className={`${tokens.md_14} color-gray-800`}>{item.name}</Text>
        <Text className={`${tokens.rg_12} color-gray-600`}>메시지</Text>
      </View>
      <View className='flex items-end'>
        <Text className={`${tokens.rg_12} color-gray-500'`}>시간</Text>
        <View className='flex justify-center w-20 h-20 bg-primary rounded-full text-center'>
          <Text className={`color-white fontFamily-md fontSize-xxxsm text-center`}>1</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}