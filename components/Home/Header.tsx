import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { icons, tokens } from 'constants/';

interface HeaderProps {
  title: string;
  path?: string;
  visible?: boolean;
}

export default function Header({ title, path = '/home', visible = false }: HeaderProps) {
  const handlePress = () => {
    const alignment = title === '신규 다이빙' ? '최신순' : '인기순';
    router.replace({ pathname: path, params: { alignment: alignment } });
  };

  return (
    <View className='flex-1 flex-row items-center justify-between'>
      <Text className={`${tokens.bd_16} color-black`}>{title}</Text>
      { visible && 
        <TouchableOpacity className='flex items-end w-20' onPress={handlePress}>
          <Image source={icons.arrowRight} className='w-10 h-14' />
        </TouchableOpacity>
      }
    </View>
  );
}