import { View, Text, Image, TouchableOpacity } from 'react-native';
import tokens from '../constants/tokens';
import GroupIcon from '../assets/icons/group.png';
import DivingIcon from '../assets/icons/diving.png';

interface ToggleNavigationBarProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

function ToggleNavigationBar({ selectedTab, setSelectedTab }: ToggleNavigationBarProps) {
  const isGroup = (type: string) => type === '모임';

  const SelectedItem = ( { title }: { title: string } ) => {
    const position = isGroup(title) ? 'left-0' : 'right-0';

    return (
      <TouchableOpacity
        className={`absolute ${position} z-10 flex-row items-center w-fit h-36 px-26 bg-white rounded-50`}
        onPress={() => setSelectedTab(title)}
        style={{ shadowColor: tokens.primary_600, shadowOffset: { width:0, height:0 }, shadowOpacity: 0.3, shadowRadius: 8 }}
      >
        <Image source={isGroup(title) ? GroupIcon : DivingIcon} tintColor={tokens.primary_600} />
        <Text className={`${tokens.bd_14} color-primary-500 pl-5`}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const UnselectedItem = ( { title }: { title: string } ) => {
    const justifyContent = isGroup(title) ? 'justify-start' : 'justify-end';
    
    return (
      <TouchableOpacity
        className={`z-0 flex-row ${justifyContent} items-center w-full h-30 px-15 bg-primary-300 rounded-50`}
        onPress={() => setSelectedTab(title)}
      >
        <Image source={isGroup(title) ? GroupIcon : DivingIcon} tintColor={tokens.primary_100} />
        <Text className={`${tokens.md_14} color-primary-100 pl-5`}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className='flex items-center w-full h-fit py-24 bg-primary-100'>
      <View className='flex justify-center w-183 h-fit'>
        {isGroup(selectedTab) ? 
          <>
            <SelectedItem title='모임' />
            <UnselectedItem title='다이빙' />
          </>
          : <>
            <UnselectedItem title='모임' />
            <SelectedItem title='다이빙' />
          </>
        }
      </View>
    </View>
  );
}

export default ToggleNavigationBar;