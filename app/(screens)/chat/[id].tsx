import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useWebSocket } from 'contexts/WebsocketContext';
import TypingSection from 'components/Chat/Room/TypingSection';

export default function ChatRoom() {
  const { id } = useLocalSearchParams();
  const roomId = Array.isArray(id) ? id[0] : id;
  const [input, setInput] = useState('');

  const { subscribeRoom, sendMessage, messages } = useWebSocket();

  useEffect(() => {
    subscribeRoom(roomId);
  }, [roomId]);

  const handleSendMessage = () => {
    sendMessage(input);
    setInput('');
  };

  return(
    <SafeAreaView className='bg-white'>
      <KeyboardAvoidingView className='h-full bg-white'>
        <ScrollView className='flex-1 bg-primary-100'>
          <View>
            {messages.map((message, index) => (
              <View key={index} className='p-26'>
                <Text>{message}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TypingSection input={input} setInput={setInput} handlePress={handleSendMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}