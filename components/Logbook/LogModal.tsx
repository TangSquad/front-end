import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import Modal from 'react-native-modal';
import MainButton from 'components/common/MainButton';
import { tokens } from 'constants/';

interface MyModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}


export default function LogModal({ modalVisible, setModalVisible }: MyModalProps) {
  const [count, setCount] = useState(0);

  const defaultBgColor = 'bg-white';
  const defaultTextStyle = `${tokens.md_20} color-gray-400`;
  const selectedBgColor = 'bg-primary-100';
  const selectedTextStyle = `${tokens.md_20} color-primary-500`;

  const handlePickNumber = (number: number) => {
    setCount(number);
  };

  const handleNext = () => {
    router.push({ pathname: '/create-logbook', params: { count } });
    handleBack();
  };

  const handleBack = () => {
    setModalVisible(!modalVisible);
    setCount(0);
  };

  return (
    <Modal
      animationIn='fadeInDown'
      animationOut='fadeOutUp'
      backdropColor='black'
      backdropOpacity={0.5}
      onBackButtonPress={handleBack}
      onBackdropPress={handleBack}
      isVisible={modalVisible}
    >
      <View className='flex justify-center items-center w-full px-16 pt-26 pb-16 bg-white rounded-10'>
        <Text className={`${tokens.md_16} color-gray-600 text-center`}>이번 로그에서는 {'\n'} 다이빙 몇 번 하셨나요?</Text>
        <View className='flex-row flex-wrap justify-center gap-y-20 mt-10'>
          {Array.from({ length: 8 }).map((_, index) => (
            <TouchableOpacity
              key={index}
              className={
                `flex justify-center items-center w-50 h-50 mx-10 border border-gray-300 rounded-10 ` 
                + (count === (index+1) ? selectedBgColor : defaultBgColor)
              }
              onPress={() => handlePickNumber(index+1)}
            >
              <Text className={`${count === (index+1) ? selectedTextStyle : defaultTextStyle}`}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity className='bg-white w-50 h-50' onPress={() => setModalVisible(!modalVisible)} />
        <MainButton title='다음' handlePress={handleNext} />
      </View>
    </Modal>
  );
}