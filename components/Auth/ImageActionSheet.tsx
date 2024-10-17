
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import CustomCameraView from './CustomCameraView';
import pickImage from 'utils/pickImage';
import { tokens } from 'constants/';

function ImageActionSheet({ payload }: SheetProps<'certificate-image-sheet'>) {
  if (!payload) return null;

  const { ref, setUri } = payload;

  const [isCameraOn, setIsCameraOn] = useState(false);

  const hideSheet = () => {
    ref?.current?.hide();
  };

  const handleSelectCamera = () => {
    setIsCameraOn(true);
  };

  const handleSelectGallery = () => {
    pickImage(setUri).then(() => {
      hideSheet();
    });
  };

  return (
    <ActionSheet ref={ref}>
      <View className={`flex justify-center items-center ${isCameraOn && 'h-[450px]'} px-24 pt-16 mb-8`}>
        {isCameraOn ?
          <View className='w-full h-1'>
            <CustomCameraView setUri={setUri} hideSheet={hideSheet} />
          </View> : 
          <View className='w-full justify-center items-center'>
            <TouchableOpacity
              className='w-full'
              onPress={handleSelectCamera}
            >
              <Text className={`${tokens.rg_16} color-gray-800 py-16`}>사진 찍기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='w-full'
              onPress={handleSelectGallery}
            >
              <Text className={`${tokens.rg_16} color-gray-800 py-16`}>사진 보관함</Text>
            </TouchableOpacity>
          </View>}
      </View>
    </ActionSheet>
  );
}

export default ImageActionSheet;