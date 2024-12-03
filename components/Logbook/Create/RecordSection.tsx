import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { LogbookContext } from 'contexts/LogbookContext';
import { pickMultipleImages } from 'utils/pickImage';
import Title from '../Title';
import ImageDisplayView from '../ImageDisplayView';
import { tokens, images } from 'constants/';

export default function Record() {
  const { logbook, setLogbook } = useContext(LogbookContext);

  const handleImagePick = () => {
    const setUris = (images: string[]) => {
      setLogbook({ ...logbook, imageUrls: images });
    };

    pickMultipleImages({ setUris: setUris, limit: 5 });
  };

  const ImagePickContainer = () => {
    return (
      <TouchableOpacity
        className='flex justify-center items-center w-full h-[160] mb-10 bg-gray-50 rounded-10'
        activeOpacity={0.7}
        onPress={handleImagePick}
      >
        <Image source={images.camera} className='mb-10' />
        <Text className={`${tokens.rg_16} color-gray-400`}>사진을 올려 기록을 남겨보세요</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className='my-16'>
      <Title content='기록' />
      <View className='flex justify-center items-center mx-10 mt-16 rounded-10 overflow-auto'>
        {logbook.imageUrls.length === 0 ? <ImagePickContainer /> : <ImageDisplayView uris={logbook.imageUrls} size={100} />}
      </View>
      <TextInput
        className='w-full p-16 border border-gray-300 rounded-10'
        multiline={true}
        numberOfLines={5}
        onChangeText={(text) => setLogbook({ ...logbook, contents: text })}
      />
    </View>
  );
}