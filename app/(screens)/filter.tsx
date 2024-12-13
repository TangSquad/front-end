import { View, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import TagGroup from 'components/Filter/TagGroup';
import AlignmentSection from 'components/Filter/AlignmentSection';
import MainButton from 'components/common/MainButton';
import { tags } from 'data/';

export default function Filter() {
  const [certificates, setCertificates] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [ages, setAges] = useState<string[]>([]);
  const [alignment, setAlignment] = useState<string>('');

  const {
    certificates: paramCert,
    locations: paramLocs,
    moods: paramMoods,
    ages: paramAges,
    alignment: paramAlignment,
  } = useLocalSearchParams<{
    certificates: string,
    locations: string,
    moods: string,
    ages: string,
    alignment: string,
  }>();

  useEffect(() => {
    setCertificates(paramCert ? paramCert.split(',') : []);
    setLocations(paramLocs ? paramLocs.split(',') : []);
    setMoods(paramMoods ? paramMoods.split(',') : []);
    setAges(paramAges ? paramAges.split(',') : []);
    setAlignment(paramAlignment ? paramAlignment : '');
  }, [paramCert, paramLocs, paramMoods, paramAges, paramAlignment]);

  const handlePress = () => {
    router.replace({ pathname: '/search', params: {
      certificates: certificates,
      locations: locations,
      moods: moods,
      ages: ages,
      alignment: alignment,
    } });
  };

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView className='px-24 py-12'>
        <TagGroup
          data={tags.certificates}
          title='자격 조건'
          selectedTags={certificates}
          setSelectedTags={setCertificates}
        />
        <TagGroup
          data={tags.locations}
          title='지역'
          selectedTags={locations}
          setSelectedTags={setLocations}
        />
        <TagGroup
          data={tags.ageGroup}
          title='연령대'
          selectedTags={ages}
          setSelectedTags={setAges}
        />
        <TagGroup
          data={tags.mood}
          title='분위기'
          selectedTags={moods}
          setSelectedTags={setMoods}
        />
        <AlignmentSection alignment={alignment} setAlignment={setAlignment} />
        <View className='my-24'>
          <MainButton title='필터 적용' handlePress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}