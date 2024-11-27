import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import Title from '../Title';
import SangJungHa from './SangJungHa';
import { tokens } from 'constants/';

export default function EnvironmentSection() {
  const [environment, setEnvironment] = useState({
    surge: '',
    tide: '', // 조류
    wave: '',
    viewSight: '',
  });

  return (
    <View className='flex-row justify-between my-16'>
      <Title content='수중환경' />
      <View>
        <View className='flex-row border-b border-gray-300 p-4 pt-0'>
          <SangJungHa title='조류' value={environment.tide} setValue={(value) => setEnvironment({ ...environment, tide: value })} />
          <View className='w-18' />
          <SangJungHa title='파도' value={environment.wave} setValue={(value) => setEnvironment({ ...environment, wave: value })} />
        </View>
        <View className='flex-row border-b border-gray-300 p-4 mt-9'>
          <SangJungHa title='서지' value={environment.surge} setValue={(value) => setEnvironment({ ...environment, surge: value })} />
          <View className='w-18' />
          <View className='flex-row items-center'>
            <Text className={`${tokens.md_16} color-gray-600 mr-9`}>시야</Text>
            <View className='flex-row'>
              <TextInput
                keyboardType='numeric'
                onChange={(event) => setEnvironment({ ...environment, viewSight: event.nativeEvent.text })}
                className='w-[40] bg-gray-50'
                textAlign='center'
              />
              <Text className={`${tokens.rg_14} color-gray-400 mx-4`}>M</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}