import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GatheringList from './GatheringList';
import { tokens }  from 'constants/';

interface TopNavigationBarProps {
  type: string;
}

const Tab = createMaterialTopTabNavigator();

function TopNavigationBar({ type }: TopNavigationBarProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: tokens.primary_600,
        tabBarInactiveTintColor: tokens.gray_400,
      }}
    >
      <Tab.Screen
        name="찾기"
        component={GatheringList}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`${type} 찾기`}</Text>
          ),
        }}
      />
      <Tab.Screen
        name="내"
        component={GatheringList}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`내 ${type}`}</Text>
          ),
        }}
      />
      <Tab.Screen
        name="좋아요 한"
        component={GatheringList}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`좋아요 한 ${type}`}</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TopNavigationBar;