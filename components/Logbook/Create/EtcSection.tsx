import { View } from 'react-native';
import { useState } from 'react';
import { EtcInput } from './Inputs';

export default function EctSection() {
  const [etc, setEtc] = useState({
    avgDepth: '',
    maxDepth: '',
    startBar: '',
    endBar: '',
  });

  return(
    <View className='w-full my-16'>
      <View className='flex-row justify-between'>
        <EtcInput
          title='평균 수심'
          value={etc.avgDepth}
          setValue={(value) => setEtc({ ...etc, avgDepth: value })}
          unit='M'
        />
        <EtcInput
          title='최대 수심'
          value={etc.maxDepth}
          setValue={(value) => setEtc({ ...etc, maxDepth: value })}
          unit='M'
        />
      </View>
      <View className='w-full h-1 bg-gray-300 my-9' />
      <View className='flex-row justify-between'>
        <EtcInput
          title='공기(전)'
          value={etc.startBar}
          setValue={(value) => setEtc({ ...etc, startBar: value })} 
          unit='bar'
        />

        <EtcInput
          title='공기(후)'
          value={etc.endBar}
          setValue={(value) => setEtc({ ...etc, endBar: value })} 
          unit='bar'
        />
      </View>
    </View>
  );
}