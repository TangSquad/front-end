import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import RecentDivingSection from 'components/Home/RecentDivingSection';
import ThisMonthMoimSection from 'components/Home/ThisMonthMoimSection';
import PopularSpotSection from 'components/Home/PopularSpotSection';
import { images } from 'constants/';

export default function Home() {
  return (
    <SafeAreaView className='bg-white'>
      <ScrollView className='h-full bg-whtie'>
        <Image source={images.main} className='w-full' resizeMode='contain' />
        <View className='px-24'>
          <RecentDivingSection />
          <PopularSpotSection />
          <ThisMonthMoimSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}