import { View, Text, TouchableOpacity } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import { tokens } from '../../constants';

function ImageActionSheet({ payload }: SheetProps<'certificate-image-sheet'>) {
  if (!payload) return null;

  const { ref, setUri } = payload;

  const hideSheet = () => {
    ref?.current?.hide();
  };

  const handleSelectCamera = () => {
    hideSheet();
  };

  const handleSelectGallery = () => {
    hideSheet();
  };

  return (
    <ActionSheet ref={ref}>
      <View className='flex justify-center items-center px-24 pt-16 mb-8'>
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
      </View>
    </ActionSheet>
  );
}

export default ImageActionSheet;