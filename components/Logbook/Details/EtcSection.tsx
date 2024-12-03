import { View } from 'react-native';
import { EtcInput } from '../Inputs';
import { Etc } from 'types/Logbook';

export default function EctSection(props: Etc) {
  return(
    <View className='w-full my-16'>
      <View className='flex-row justify-between'>
        <EtcInput
          title='평균 수심'
          value={props.avgDepth}
          unit='M'
          disabled
        />
        <EtcInput
          title='최대 수심'
          value={props.maxDepth}
          unit='M'
          disabled
        />
      </View>
      <View className='w-full h-1 bg-gray-300 my-9' />
      <View className='flex-row justify-between'>
        <EtcInput
          title='공기(전)'
          value={props.startBar}
          unit='bar'
          disabled
        />
        <EtcInput
          title='공기(후)'
          value={props.endBar}
          unit='bar'
          disabled
        />
      </View>
    </View>
  );
}