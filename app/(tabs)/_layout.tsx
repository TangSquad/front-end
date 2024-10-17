import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from 'constants/';
import { ImageSourcePropType } from 'react-native';

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
}

const TabIcon = ({ icon, color, name }: TabIconProps) => {
  return (
    <View className="flex items-center mt-3">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className="font-md text-xxxsm tracking-md leading-xxxsm" style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

function TabLayout(): JSX.Element {
  return (
    <Tabs
      screenOptions={{
        lazy: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0A54FF',
        tabBarInactiveTintColor: '#575E70',
        tabBarStyle: {
          height: 90,
          borderTopWidth: 1,
          borderTopColor: '#EEF1F6',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="홈"
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.search}
              color={color}
              name="찾기"
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="logbook"
        options={{
          title: 'Logbook',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.logbook}
              color={color}
              name="로그북"
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.profile}
              color={color}
              name="프로필"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
