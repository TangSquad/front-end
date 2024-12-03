import { SafeAreaView, ScrollView, View, Text, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getLogbookById } from 'api/logbook/logbook';
import ProfileSection from 'components/Logbook/Details/Profilesection';
import ImageDisplayView from 'components/Logbook/ImageDisplayView';
import ConditionSection from 'components/Logbook/Details/ConditionSection';
import Equipment from 'components/Equipment/Equipment';
import Title from 'components/Logbook/Title';
import LogsSection from 'components/Logbook/Details/LogsSection';
import { tokens } from 'constants/';

export default function LogbookDetails() {
  const { id } = useLocalSearchParams();
  const { data, error } = useQuery({
    queryKey: ['logbook', id],
    queryFn: () => getLogbookById(Number(id)),
  });

  if (error) {
    Alert.alert('로그북 데이터 로딩에 실패하였습니다.');
  }

  return(
    <SafeAreaView className='bg-white h-full'>
      <ScrollView className='px-24 py-32'>
        <Text className={`${tokens.rg_12} color-gray-600`}>{data?.date}</Text>
        <Text className={`${tokens.bd_24} color-gray-800 mt-8`}>{data?.title}</Text>
        <ProfileSection userId={data?.userId} />
        {data?.imageUrls && <ImageDisplayView uris={data.imageUrls} size={200} />}
        <View>
          <Text>{data?.contents}</Text>
        </View>
        <View className='my-30'>
          <Title content='장비' />
          <Equipment equipment={data?.equipment} />
        </View>
        {data?.userCondition && <ConditionSection selectedCondition={data.userCondition} />}
        <LogsSection />
      </ScrollView>
    </SafeAreaView>
  );
}