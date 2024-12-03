import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getLogById } from 'api/logbook/log';
import { Logbook } from 'types/Logbook';
import { tokens, icons, images } from 'constants/';

interface LogbookItemProps {
  item: Logbook;
}

export default function LogbookItem({ item }: LogbookItemProps) {
  const handlePress = () => {
    router.push(`/logbook/${item.id}`);
  };

  const { data, error } = useQuery({
    queryKey: ['log', item.id],
    queryFn: () => getLogById(item.logIds[0]),
  });

  return (
    <TouchableOpacity
      className='flex-row justify-center items-center h-fit py-20'
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Image source={item.thumbnailUrl ? { uri: item.thumbnailUrl } : images.defaultImage}
        className='h-70 w-70 mr-20 rounded-20'/>
      <View>
        <Text className={`${tokens.bd_16} color-gray-800 my-4`}>{item.title}</Text>
        <Text className={`${tokens.md_14} color-gray-500`}>{item.date && item.date.split('T')[0]}</Text>
        <View className='flex-row w-[235] justify-between items-center'>
          <View className='flex-row items-center'>
            <Image source={icons.location} className='w-14 h-14' />
            <Text className={`${tokens.md_12} color-gray-500`}>{data?.location}</Text>
          </View>
          <View className='flex-row items-center'>
            {/* Need to add likebtn and the number of likes */}
            <Image source={icons.emptyHeart} className='w-12 h-12'/>
            <Text className={`${tokens.md_12} color-gray-600`}> 1</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}