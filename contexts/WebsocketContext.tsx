import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { getWebsocketUrl } from 'constants/api';
import { Client } from '@stomp/stompjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SockJS from 'sockjs-client';
import { Message } from 'types/Chat';

const WebSocketContext = createContext({
  initializeWebsocket: () => {},
  subscribeRoom: (roomId: string) => {},
  sendMessage: (message: string, roomId: string) => {},
  messages: [] as Message[],
});

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const client = useRef<Client>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    return () => {
      client.current?.deactivate();
    };
  }, []);

  const subscribeRoom = (roomId: string) => {
    client.current?.unsubscribe('/sub/chat/room/' + roomId);

    client.current?.subscribe('/sub/chat/room/' + roomId, (message) => {
      const parsedMessage: Message = JSON.parse(message.body);
      setMessages((prev) => [...prev, parsedMessage]);
    });
  };

  const sendMessage = (message: string, roomId: string) => {
    if (client.current?.connected !== true) {
      console.error('WebSocket not connected, cannot send message');
      return;
    }
    
    client.current?.publish({
      destination: '/pub/chat/message',
      body: JSON.stringify({
        roomId: roomId,
        message: message,
        type: 'TALK',
      }),
    });
  };

  const initializeWebsocket = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      const sock = new SockJS(getWebsocketUrl(), undefined, { header: {
        Authorization: 'Bearer ' + token,
      } });
      const newClient = new Client({
        brokerURL: getWebsocketUrl(),
        webSocketFactory: () => sock,
        connectHeaders: {
          Authorization: 'Bearer ' + token,
        },
        connectionTimeout: 3000,
        debug: (str) => console.log('debug: ' + str),
        onConnect: () => console.log('Connected to STOMP server'),
        onDisconnect: () => console.log('Disconnected from STOMP server'),
        onStompError: (frame) => console.error('STOMP error:', frame),
        onWebSocketError: (event) => console.error('WebSocket error:', event),
      });

      client.current = newClient;
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