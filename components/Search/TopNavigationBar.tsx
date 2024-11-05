import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GatheringList from './GatheringList';
import { tokens }  from 'constants/';
import { GatheringType } from 'types/Gatherings';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigationBar({ type }: { type: GatheringType }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: tokens.primary_600,
        tabBarInactiveTintColor: tokens.gray_400,
      }}
    >
      <Tab.Screen
        name="찾기"
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`${type} 찾기`}</Text>
          ),
        }}
      >
        {() => GatheringList({
          type: type,
          sectionType: '찾기',
        })}
      </Tab.Screen>
      <Tab.Screen
        name="내"
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`내 ${type}`}</Text>
          ),
        }}
      >
        {() => GatheringList({
          type: type,
          sectionType: '내',
        })}
      </Tab.Screen>
      <Tab.Screen
        name="좋아요 한"
        options={{
          tabBarLabel: ({ color }) => (
            <Text className={`${tokens.bd_16}`} style={{ color: color }}>{`좋아요 한 ${type}`}</Text>
          ),
        }}
      >
        {() => GatheringList({
          type: type,
          sectionType: '좋아요 한',
        })}
      </Tab.Screen>
    </Tab.Navigator>
  );
}