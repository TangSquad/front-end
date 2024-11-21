import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Logbook } from 'api/logbook/my-logbook';
import { LikedLogbook } from 'api/logbook/liked-logbook';
import { tokens, icons, images } from 'constants/';

interface LogbookItemProps {
  item: Logbook | LikedLogbook;
  index: number;
}

export default function LogbookItem({ item, index }: LogbookItemProps) {
  return (
    <TouchableOpacity
      className='flex-row justify-center items-center h-fit py-20'
      activeOpacity={0.8}
    >
      <Image source={item.thumbnailUrl ? { uri: item.thumbnailUrl } : images.defaultImage}
        className='h-70 w-70 mr-20 rounded-20'/>
      <View>
        <Text className={`${tokens.bd_16} color-gray-800 my-4`}>#{index} {item.title}</Text>
        <Text className={`${tokens.md_14} color-gray-500`}>{item.date.split('T')[0]}</Text>
        <View className='flex-row w-[235] justify-between items-center'>
          <View className='flex-row items-center'>
            <Image source={icons.location} className='w-14 h-14' />
            <Text className={`${tokens.md_12} color-gray-500`}>{item.location}</Text>
          </View>
          <View className='flex-row items-center'>
            {/* Need to add "likes" for the number of likes */}
            <Text className={`${tokens.md_12} color-gray-600`}>1</Text>
            <Image source={icons.emptyHeart} className='w-12 h-12'/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}