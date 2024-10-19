import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { tokens } from 'constants/';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigationBar() {
  const Dummy = () => ( <View><Text>hihi</Text></View> );

  return (
    <View className='flex-1'>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tokens.primary_600,
          tabBarInactiveTintColor: tokens.gray_400,
        }}
      >
        <Tab.Screen name='내 로그북'
          component={Dummy}
          options={{
            tabBarLabel: ({ color }) => (
              <Text className={`${tokens.bd_16}`} style={{ color: color }}>내 로그북</Text>
            ),
          }}
        />
        <Tab.Screen
          name='좋아요 한 로그북'
          component={Dummy}
          options={{
            tabBarLabel: ({ color }) => (
              <Text className={`${tokens.bd_16}`} style={{ color: color }}>좋아요 한 로그북</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}