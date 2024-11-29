import { View } from 'react-native';
import { useState } from 'react';
import Title from '../Title';
import { BasicInput } from './Inputs';

export default function TitleSection() {
  const [title, setTitle] = useState('');

  return (
    <View className='w-full'>
      <View className='flex-row justify-between mb-10'>
        <Title content='제목' mandatory />
        <BasicInput placeholder='로그북 제목' value={title} setValue={setTitle} />
      </View>
    </View>
  );
}