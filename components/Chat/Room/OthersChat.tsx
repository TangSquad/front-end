import { View, Text, Image } from 'react-native';
import { tokens, images } from 'constants/';

interface OthersChatProps {
  text: string;
}

export default function OthersChat({ text }: OthersChatProps) {
  return (
    <View className='flex-row items-center p-16'>
      <Image source={images.profileDefault} className='w-30 h-30 rounded-full' />
      <View className='ml-16 px-8 py-[6] bg-primary-100 rounded-10'>
        <Text className={`${tokens.rg_12} color-gray-700`}>이름</Text>
        <View className='bg-primary-100'>
          <Text className={`${tokens.md_14} color-gray-800`}>{text}</Text>
        </View>
      </View>
      {/* 여기서 시간 / 읽은 사람 갯수 */}
    </View>
  );
}