import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getUnreadMessages } from 'api/chat/room';

export default function UnreadMsgIndicator({ roomId }: { roomId: string }) {
  const { data, error } = useQuery({
    queryKey: ['unread-message', roomId],
    queryFn: () => getUnreadMessages(roomId),
  });

  if (!data || data.length === 0) return;

  return (
    <View className='flex justify-center w-20 h-20 bg-primary rounded-full text-center'>
      <Text className={`color-white fontFamily-md fontSize-xxxsm text-center`}>{data.length}</Text>
    </View>
  );
}