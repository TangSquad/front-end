import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { termsOfUse } from 'data';
import { tokens } from 'constants/';

export default function TermsOfUse() {
  return (
    <SafeAreaView className='bg-white'>
      <ScrollView>
        <View className='h-full px-26 py-8'>
          {termsOfUse.sections.map((section, index) => (
            <View key={index} className='my-8'>
              <Text className={`${tokens.bd_16}`}>{section.title}</Text>
              <Text className={`${tokens.rg_14}`}>{section.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}