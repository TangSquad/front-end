import { FlatList, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyLogbook } from 'api/logbook/my-logbook';
import LogbookItem from './LogbookItem';
import { tokens } from 'constants/';

export default function LogbookList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-logbook-list'],
    queryFn: getMyLogbook,
  });

  if (!data && !isLoading) {

    return (
      <View className='flex-1 justify-center items-center bg-white'>
        <Text className={`${tokens.bd_16} color-gray-400`}>데이터가 없습니다.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      className='w-full px-12 bg-white'
      renderItem={({ item, index }) => (
        <LogbookItem item={item} index={index} />
      )}
    />
  );
}