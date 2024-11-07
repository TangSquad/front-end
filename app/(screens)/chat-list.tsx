import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyChatRoom } from 'api/chat/chat-room';

export default function ChatList() {
  const { data, error } = useQuery({
    queryKey: ['chat-list'],
    queryFn: getMyChatRoom,
  });

  if (!data) {
    return (
      <View className='flex-1 justify-center items-center bg-white'>
        <Text className='color-gray-400'>현재 채팅방이 없습니다.</Text>
      </View>
    );
  }

  return(
    <ScrollView className='h-full bg-white'>
      <View>
        {data.map((chatRoom) => (
          <View key={chatRoom.id}>
            <Text>{chatRoom.name}</Text>
            <Text>{chatRoom.type}</Text>
          </View>  
        ))}
      </View>
    </ScrollView>
  );
}