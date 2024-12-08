import { View, Text, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import TopNavigationBar from 'components/Chat/List/TopNavigationBar';
import { getMyChatRoom } from 'api/chat/chat-room';
import { useWebSocket } from 'contexts/WebsocketContext';

export default function ChatList() {
  const { data, error } = useQuery({
    queryKey: ['chat-list'],
    queryFn: getMyChatRoom,
  });

  const { initializeWebsocket } = useWebSocket();

  useEffect(() => {
    initializeWebsocket();
  }, []);

  if (!data) {
    return (
      <View className='flex-1 justify-center items-center bg-white'>
        <Text className='color-gray-400'>현재 채팅방이 없습니다.</Text>
      </View>
    );
  }

  const moimList = data.filter((chatRoom) => chatRoom.type === 'MOIM');
  const divingList = data.filter((chatRoom) => chatRoom.type === 'DIVING');

  return(
    <SafeAreaView className='h-full bg-white'>
      <TopNavigationBar moimList={moimList} divingList={divingList} />
    </SafeAreaView>
  );
}