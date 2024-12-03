import { FlatList, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyLogbook } from 'api/logbook/logbook';
import { getLikedLogbook } from 'api/logbook/liked-logbook';
import LogbookItem from './LogbookItem';
import { tokens } from 'constants/';

interface LogbookListProps {
  type: 'my' | 'liked';
}

export default function LogbookList({ type }: LogbookListProps) {
  const fetchFunctions = {
    my: getMyLogbook,
    liked: getLikedLogbook,
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [`${type}-logbook-list`],
    queryFn: fetchFunctions[type],
  });

  if ((!data || data.length === 0) && !isLoading) {
    return (
      <View className='flex-1 justify-center items-center bg-white'>
        <Text className={`${tokens.bd_16} color-gray-400`}>데이터가 없습니다.</Text>
      </View>
    );
  }

  return (
    <View className='h-full'>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        className='w-full px-12 bg-white'
        renderItem={({ item }) => (
          <LogbookItem item={item} />
        )}
      />
    </View>
  );
}