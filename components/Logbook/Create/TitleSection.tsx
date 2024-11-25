import { View } from 'react-native';

import Title from '../Title';
import { BasicInput } from './Inputs';

export default function TitleSection() {
  return (
    <View className='w-full'>
      <View className='flex-row justify-between mb-10'>
        <Title content='제목' mandatory />
        <BasicInput placeholder='로그북 제목' />
      </View>
    </View>
  );
}