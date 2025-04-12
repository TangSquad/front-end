import { SafeAreaView, View, Text } from 'react-native';
import { privacyPolicy } from 'data';
import { tokens } from 'constants/';
import { ScrollView } from 'react-native-gesture-handler';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView className='bg-white'>
      <ScrollView>
        <View className='h-full px-26 py-8'>
          {/* 약관 */}
          {privacyPolicy.sections.map((item, index) => (
            <View key={index} className='my-8'>
              <Text className={`${tokens.bd_16}`}>{item.title}</Text>
              <Text className={`${tokens.rg_14}`}>{item.content}</Text>
            </View>
          ))}

          {/* 책임자 연락처 */}
          <View className='flex-row items-center my-16'>
            <Text className={`${tokens.bd_14}`}>연락처: </Text>
            <Text className={`${tokens.rg_14}`}>{privacyPolicy.email}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}