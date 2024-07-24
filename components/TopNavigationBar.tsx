import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GatheringList from './GatheringList';
import tokens from '../constants/tokens';

interface TopNavigationBarProps {
  type: string;
}

const Tab = createMaterialTopTabNavigator();

function TopNavigationBar({ type }: TopNavigationBarProps) {
  
  return (
    <Tab.Navigator
      className={`${tokens.bd_16}`}
      screenOptions={{
        tabBarActiveTintColor: tokens.primary_600,
        tabBarInactiveTintColor: tokens.gray_400,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name={`${type} 찾기`}
        component={GatheringList}
        options={{
          tabBarLabel: ({ color, children }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{children}</Text>
          ),
        }}
      />
      <Tab.Screen
        name={`내 ${type}`}
        component={GatheringList}
        options={{
          tabBarLabel: ({ color, children }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{children}</Text>
          ),
        }}
      />
      <Tab.Screen
        name={`좋아요 한 ${type}`}
        component={GatheringList}
        options={{
          tabBarLabel: ({ color, children }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{children}</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TopNavigationBar;