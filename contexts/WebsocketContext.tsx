import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { getWebsocketUrl } from 'constants/api';
import { Client } from '@stomp/stompjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WebSocketContext = createContext({
  initializeWebsocket: () => {},
  subscribeRoom: (roomId: string) => {},
  sendMessage: (message: string) => {},
  messages: [] as string[],
});

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const client = useRef<Client>();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      client.current?.deactivate();
    };
  }, []);

  const subscribeRoom = (roomId: string) => {
    client.current?.subscribe('/sub/chat/room/' + roomId, (message) => {
      console.log('Received message: ', message.body);
      setMessages((prev) => [...prev, message.body]);
    });
  };

  const sendMessage = (message: string) => {
    if (client.current?.connected !== true) {
      console.error('WebSocket not connected, cannot send message');
      return;
    }
    
    client.current?.publish({
      destination: '/pub/chat/message',
      body: JSON.stringify({
        message: message,
        type: 'TALK',
      }),
    });
  };

  const initializeWebsocket = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      console.log('Initializing WebSocket with token:', token);
      const newClient = new Client({
        brokerURL: 'wss://api.tangsquad.com/ws/chat',
        connectHeaders: {
          Authorization: 'Bearer ' + token,
        },
        debug: (str) => console.log('reason: ' + str),
        onConnect: () => console.log('Connected to STOMP server'),
        onDisconnect: () => console.log('Disconnected from STOMP server'),
        onStompError: (frame) => console.error('STOMP error:', frame),
        onWebSocketError: (event) => console.error('WebSocket error:', event),
        onChangeState: (state) => { console.log('State changed:', state); },
      });

      client.current = newClient;
      console.log(client.current);
      client.current.activate();
    }
  };

  return (
    <WebSocketContext.Provider value={{ initializeWebsocket, subscribeRoom, sendMessage, messages }} >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);