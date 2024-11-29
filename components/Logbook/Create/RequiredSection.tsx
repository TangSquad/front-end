import { View } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import Title from '../Title';
import { BasicInput } from './Inputs';

export default function RequiredSection({ currentStep }: { currentStep: number }) {
  const { logs, updateLogs } = useContext(LogsContext);

  return(
    <View className='mt-32 mb-16'>
      <View className='mb-32 flex-row justify-between'>
        <Title content='장소' mandatory />
        <BasicInput
          placeholder='다이빙 위치'
          value={logs[currentStep]?.location}
          setValue={(value) => updateLogs({ index: currentStep, key: 'location', value })}
        />
      </View>
      <View className='flex-row justify-between'>
        <Title content='잠수시간' mandatory />
        <BasicInput
          placeholder='잠수시간'
          value={logs[currentStep]?.diveTime}
          setValue={(value) => updateLogs({ index: currentStep, key: 'diveTime', value })}
        />
      </View>
    </View>
  );
}