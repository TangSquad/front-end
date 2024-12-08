import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatRoomList from './ChatRoomList';
import { ChatRoom } from 'types/Chat';
import { tokens }  from 'constants/';

const Tab = createMaterialTopTabNavigator();

interface TopNavigationBarProps {
  moimList: ChatRoom[];
  divingList: ChatRoom[];
}

export default function TopNavigationBar({ moimList, divingList }: TopNavigationBarProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: tokens.primary_600,
        tabBarInactiveTintColor: tokens.gray_400,
      }}
    >
      <Tab.Screen
        name='모임'
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`모임`}</Text>
          ),
        }}
      >
        {() => ChatRoomList({ list: moimList })}
      </Tab.Screen>
      <Tab.Screen
        name='다이빙'
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`다이빙`}</Text>
          ),
        }}
      >
        {() => ChatRoomList({ list: divingList })}
      </Tab.Screen>
    </Tab.Navigator>
  );
}