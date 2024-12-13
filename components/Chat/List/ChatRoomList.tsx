import { FlatList, View, Text } from 'react-native';
import ChatItem from './ChatItem';
import { ChatRoom } from 'types/Chat';
import { tokens } from 'constants/';

interface ChatListProps {
  list: ChatRoom[];
}

export default function ChatRoomList({ list }: ChatListProps) {
  if ((list.length === 0)) {
    return (
      <View className='flex-1 justify-center items-center bg-white'>
        <Text className={`${tokens.bd_16} color-gray-400`}>아직 가입한 채팅방이 없습니다.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id}
      className='w-full h-full bg-white'
      renderItem={({ item }) => (
        <ChatItem item={item} />
      )}
    />
  );
}