import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToggleNavigationBar from 'components/Search/ToggleNavigationBar';
import SearchBarSection from 'components/Search/SearchBarSection';
import TopNavigationBar from 'components/Search/TopNavigationBar';
import CreateGatheringBtn from 'components/CreateGatheringBtn';
import { GatheringType } from 'types/Gatherings';

export default function Search() {
  const [selectedTab, setSelectedTab] = useState<GatheringType>('모임');  
  
  return (
    <SafeAreaView className='flex-1 bg-primary-100'>
      <ToggleNavigationBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <SearchBarSection />
      <TopNavigationBar type={selectedTab} />
      <CreateGatheringBtn type={selectedTab}/>
    </SafeAreaView>
  );
}