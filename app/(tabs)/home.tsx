import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import RecentDivingSection from 'components/Home/RecentDivingSection';
import ThisMonthMoimSection from 'components/Home/ThisMonthMoimSection';
import PopularSpotSection from 'components/Home/PopularSpotSection';

export default function Home() {
  return (
    <SafeAreaView className='bg-white'>
      <ScrollView className='h-full bg-whtie'>
        <Image />
        <View className='px-24'>
          <RecentDivingSection />
          <ThisMonthMoimSection />
          <PopularSpotSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}