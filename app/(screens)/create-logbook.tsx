import { View, KeyboardAvoidingView } from 'react-native';
import TitleSection from 'components/Logbook/Create/TitleSection';

export default function CreateLogbook() {
  return (
    <KeyboardAvoidingView className='h-full bg-white' behavior='padding'>
      <View className='p-26'>
        <TitleSection />
      </View>
    </KeyboardAvoidingView>
  );
}