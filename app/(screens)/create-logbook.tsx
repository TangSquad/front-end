import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { router, useGlobalSearchParams } from 'expo-router';
import { LogbookProvider } from 'contexts/LogbookContext';
import TitleSection from 'components/Logbook/Create/TitleSection';
import RecordSection from 'components/Logbook/Create/RecordSection';
import EquipmentSection from 'components/Logbook/Create/EquipmentSection';
import ConditionSection from 'components/Logbook/Create/ConditionSection';
import MainButton from 'components/common/MainButton';

export default function CreateLogbook() {
  const { count } = useGlobalSearchParams();

  const handleNext = () => {
    router.push({ pathname: '/create-logs', params: { count: count } });
  };

  return (
    <KeyboardAvoidingView className='h-full bg-white' behavior='padding'>
      <ScrollView>
        <LogbookProvider>
          <View className='p-26'>
            <TitleSection />
            <EquipmentSection />
            <RecordSection />
            <ConditionSection />
            <MainButton title='다음' handlePress={handleNext} />
          </View>
        </LogbookProvider>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}