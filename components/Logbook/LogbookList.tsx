import { FlatList, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyLogbook, Logbook } from 'api/logbook/my-logbook';
import { getLikedLogbook, LikedLogbook } from 'api/logbook/liked-logbook';
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

  const { data, isLoading, isError } = useQuery<Logbook[] | LikedLogbook[]>({
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
      {type === 'my' ?
        <FlatList
          data={data as Logbook[]}
          keyExtractor={(item, index) => index.toString()}
          className='w-full px-12 bg-white'
          renderItem={({ item, index }) => (
            <LogbookItem item={item} index={index} />
          )}
        />
        : (
          <FlatList
            data={data as LikedLogbook[]}
            keyExtractor={(item, index) => index.toString()}
            className='w-full px-12 bg-white'
            renderItem={({ item, index }) => (
              <LogbookItem item={item} index={index} />
            )}
          />
        )}
    </View>
  );
}