import { View, Text, Image } from 'react-native';
import { tokens, icons } from 'constants/';

interface LogbookItemProps {
  id: string;
  title: string;
  date: string;
  location: string;
  liked: number;
  imageUrl: string;
}

export default function LogbookItem({
  id,
  title,
  date,
  location,
  liked,
  imageUrl,
}: LogbookItemProps) {
  return (
    <View className='flex-row justify-between items-center h-fit py-20'>
      <Image source={{ uri: imageUrl }}
        className='h-70 w-70 mr-20 bg-black rounded-20'/>
      <View className='w-full'>
        <Text className={`${tokens.bd_16} color-gray-800 my-4`}>#{id} {title}</Text>
        <Text className={`${tokens.md_14} color-gray-500`}>{date.split('T')[0]}</Text>
        <View className='flex-row w-[235] justify-between items-center'>
          <View className='flex-row items-center my-1'>
            <Image source={icons.location} className='w-14 h-14' />
            <Text className={`${tokens.md_12} color-gray-500`}>{location}</Text>
          </View>
          <View className='flex-row items-center'>
            <Text className={`${tokens.md_12} color-gray-600`}>{liked} </Text>
            <Image source={icons.emptyHeart} className='w-12 h-12'/>
          </View>
        </View>
      </View>
    </View>
  );
}