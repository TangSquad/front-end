import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { pickMultipleImages } from 'utils/pickImage';
import Title from '../Title';
import { tokens, images } from 'constants/';

export default function Record() {
  const [uris, setUris] = useState<string[]>([]);;
  const recordRef = useRef<string>('');

  const handleImagePick = () => {
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

  const ImageDisplayView = () => {
    return (
      <ScrollView horizontal>
        <View className='flex-row flex-wrap justify-center gap-x-10'>
          {uris.map((uri, index) => (
            <Image source={{ uri: uri }} className='w-100 h-100 my-10' key={index} />
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View className='mt-20'>
      <Title content='기록' />
      <View className='flex justify-center items-center mx-10 rounded-10 overflow-auto'>
        {uris.length === 0 ? <ImagePickContainer /> : <ImageDisplayView />}
      </View>
      <TextInput
        className='w-full p-16 border border-gray-300 rounded-10'
        multiline={true}
        numberOfLines={5}
        onChange={(e) => recordRef.current = e.nativeEvent.text}
      />
    </View>
  );
}