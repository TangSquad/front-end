import { SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import LogModal from 'components/Logbook/LogModal';
import TopNavigationBar from 'components/Logbook/TopNavigationBar';
import FloatingAddBtn from 'components/common/FloatingAddBtn';

export default function Logbook() {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView className='bg-white'>
      {/* Modal View */}
      <LogModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* Page View */}
      <View className='h-full'>
        <TopNavigationBar />
        <FloatingAddBtn onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}