import { Text, View, SafeAreaView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { getDivingById } from 'api/diving/diving';

export default function DivingDetails() {
  const { id } = useLocalSearchParams() as { id: string };

  const { data, error } = useQuery({
    queryKey: ['divingById'],
    queryFn: () => getDivingById(Number(id)),
  });

  return (
    <SafeAreaView>
      <Text>Diving Details</Text>
    </SafeAreaView>
  );
}