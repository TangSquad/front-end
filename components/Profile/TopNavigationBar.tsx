import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Introduction from './Introduction';
import { tokens } from '../../constants';

const Tab = createMaterialTopTabNavigator();

const MockComponent = () => {
  return (
    <Text>TopNavigationBar</Text>
  );
};

export default function TopNavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: tokens.primary_600,
        tabBarInactiveTintColor: tokens.gray_400,
      }}
    >
      <Tab.Screen
        name='소개'
        component={Introduction}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.md_16}`} style={{ color: color }}>소개</Text>
          ),
        }}
      />
      <Tab.Screen
        name='다이빙'
        component={MockComponent}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.md_16}`} style={{ color: color }}>다이빙</Text>
          ),
        }}
      />
      <Tab.Screen
        name='로그북'
        component={MockComponent}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.md_16}`} style={{ color: color }}>로그북</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}