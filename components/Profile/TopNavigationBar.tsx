import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Introduction from './Introduction';
import LogbookList from './LogbookList';
import Equipment from './Equipment';
import { tokens } from 'constants/';

const Tab = createMaterialTopTabNavigator();

interface TopNavigationBarProps {
  isLogBookPublic: boolean;
  isEquipmentPublic: boolean;
}

export default function TopNavigationBar({ isLogBookPublic, isEquipmentPublic }: TopNavigationBarProps) {
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
      {isLogBookPublic && <Tab.Screen
        name='로그북'
        component={LogbookList}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.md_16}`} style={{ color: color }}>로그북</Text>
          ),
        }}
      />}
      {isEquipmentPublic && <Tab.Screen
        name='장비'
        component={Equipment}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.md_16}`} style={{ color: color }}>장비</Text>
          ),
        }}
      />}
    </Tab.Navigator>
  );
}