import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToggleNavigationBar from '../../components/ToggleNavigationBar';
import TopNavigationBar from '../../components/TopNavigationBar';

const Search = () => {
  const [selectedTab, setSelectedTab] = useState('모임');  

  return (
    <SafeAreaView className='flex-1'>
      <ToggleNavigationBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TopNavigationBar type={selectedTab} />
    </SafeAreaView>
  );
};

export default Search;