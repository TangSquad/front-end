import { View, KeyboardAvoidingView } from 'react-native';
import TitleSection from 'components/Logbook/Create/TitleSection';
import RecordSection from 'components/Logbook/Create/RecordSection';
import EquipmentSection from 'components/Logbook/Create/EquipmentSection';

export default function CreateLogbook() {
  return (
    <KeyboardAvoidingView className='h-full bg-white' behavior='padding'>
      <View className='p-26'>
        <TitleSection />
        <EquipmentSection />
        <RecordSection />
      </View>
    </KeyboardAvoidingView>
  );
}