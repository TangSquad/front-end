import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToggleNavigationBar from 'components/ToggleNavigationBar';
import TopNavigationBar from 'components/TopNavigationBar';
import CreateGatheringBtn from 'components/CreateGatheringBtn';
import { GatheringType } from 'types/Gatherings';

export default function Search() {
  const [selectedTab, setSelectedTab] = useState<GatheringType>('모임');  
  
  return (
    <SafeAreaView className='flex-1'>
      <ToggleNavigationBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TopNavigationBar type={selectedTab} />
      <CreateGatheringBtn type={selectedTab}/>
    </SafeAreaView>
  );
}