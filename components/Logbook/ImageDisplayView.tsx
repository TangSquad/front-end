import { Image, ScrollView, View } from 'react-native';

interface ImageDisplayViewProps {
  uris: string[];
  size: number;
}

export default function ImageDisplayView({ uris, size }: ImageDisplayViewProps) {
  return (
    <ScrollView horizontal>
      <View className='flex-row flex-wrap justify-center gap-x-10'>
        {uris.map((uri, index) => (
          <Image source={{ uri: uri }} className={`w-${size} h-${size} my-10`} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};