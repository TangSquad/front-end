import { View } from 'react-native';
import Title from '../Title';
import { BasicInput } from './Inputs';

export default function RequiredSection() {
  return(
    <View className='mt-32 mb-16'>
      <View className='mb-32 flex-row justify-between'>
        <Title content='장소' mandatory />
        <BasicInput placeholder='다이빙 위치' />
      </View>
      <View className='flex-row justify-between'>
        <Title content='잠수시간' mandatory />
        <BasicInput placeholder='잠수시간' />
      </View>
    </View>
  );
}