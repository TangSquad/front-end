import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LogbookList from './LogbookList';
import { tokens } from 'constants/';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigationBar() {
  return (
    <View className='flex-1'>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tokens.primary_600,
          tabBarInactiveTintColor: tokens.gray_400,
        }}
      >
        <Tab.Screen name='내 로그북'
          options={{
            tabBarLabel: ({ color }) => (
              <Text className={`${tokens.bd_16}`} style={{ color: color }}>내 로그북</Text>
            ),
          }}
        >
          {() => <LogbookList type='my' />}
        </Tab.Screen>
        <Tab.Screen
          name='좋아요 한 로그북'
          options={{
            tabBarLabel: ({ color }) => (
              <Text className={`${tokens.bd_16}`} style={{ color: color }}>좋아요 한 로그북</Text>
            ),
          }}
        >
          {() => <LogbookList type='liked' />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}