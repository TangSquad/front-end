import { View } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import { EtcInput } from '../Inputs';

export default function EctSection({ currentStep }: { currentStep: number }) {
  const { logs, updateLogs } = useContext(LogsContext);

  return(
    <View className='w-full my-32'>
      <View className='flex-row justify-between'>
        <EtcInput
          title='평균 수심'
          value={logs[currentStep].avgDepth}
          setValue={(value) => updateLogs({ index: currentStep, key: 'avgDepth', value })}
          unit='M'
        />
        <EtcInput
          title='최대 수심'
          value={logs[currentStep].maxDepth}
          setValue={(value) => updateLogs({ index: currentStep, key: 'maxDepth', value })}
          unit='M'
        />
      </View>
      <View className='w-full h-1 bg-gray-300 my-9' />
      <View className='flex-row justify-between'>
        <EtcInput
          title='공기(전)'
          value={logs[currentStep].startBar}
          setValue={(value) => updateLogs({ index: currentStep, key: 'startBar', value: value })} 
          unit='bar'
        />
        <EtcInput
          title='공기(후)'
          value={logs[currentStep].endBar}
          setValue={(value) => updateLogs({ index: currentStep, key: 'endBar', value })}
          unit='bar'
        />
      </View>
    </View>
  );
}