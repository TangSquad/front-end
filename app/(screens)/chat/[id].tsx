import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, Text } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from 'api/user/profile';
import { useWebSocket } from 'contexts/WebsocketContext';
import TypingSection from 'components/Chat/Room/TypingSection';
import MyChat from 'components/Chat/Room/MyChat';
import OthersChat from 'components/Chat/Room/OthersChat';

export default function ChatRoom() {
  const { id: roomId } = useLocalSearchParams<{ id: string }>();
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const { subscribeRoom, sendMessage, messages } = useWebSocket();

  useEffect(() => {
    subscribeRoom(roomId);
  }, [roomId]);

  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 10); // IOS에서는 약간의 딜레이 필요
    }
  }, [messages]);
  

  const handleSendMessage = () => {
    sendMessage(input, roomId);
    setInput('');
  };

  const { data, error } = useQuery({
    queryKey: ['myprofile'],
    queryFn: getMyProfile,
  });

  const isMyChat = (senderId: number) => {
    return data?.data.userId === senderId;
  };

  const isForThisRoom = (chatroomId: string) => {
    return roomId === chatroomId;
  };

  return(
    <SafeAreaView className='bg-white'>
      <KeyboardAvoidingView className='h-full bg-white'>
        <ScrollView className='flex-1' ref={scrollViewRef}>
          <View className='pb-16'>
            {messages.length !== 0 && messages.filter((message) => isForThisRoom(message.roomId)).map((message, index) => (
              isMyChat(message.senderId) ?
                <MyChat key={index} text={message.message} createdAt={message.createdAt} />
                : <OthersChat key={index} message={message} />
            ))}
          </View>
        </ScrollView>
        <TypingSection input={input} setInput={setInput} handlePress={handleSendMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}