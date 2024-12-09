import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { icons, tokens } from 'constants/';

interface HeaderProps {
  title: string;
  path: string;
}

export default function Header({ title, path }: HeaderProps) {
  return (
    <View className='flex-1 flex-row items-center justify-between'>
      <Text className={`${tokens.bd_16} color-black`}>{title}</Text>
      <TouchableOpacity className='flex items-end w-20' onPress={() => router.push(path)}>
        <Image source={icons.arrowRight} className='w-10 h-14' />
      </TouchableOpacity>
    </View>
  );
}