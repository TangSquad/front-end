import { View, Text, TextInput } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import Title from '../Title';
import SangJungHa from './SangJungHa';
import { tokens } from 'constants/';

export default function EnvironmentSection({ currentStep }: { currentStep: number }) {
  const { logs, updateLogs } = useContext(LogsContext);

  const handleViewSightChange = (value: string) => {
    updateLogs({ index: currentStep, key: 'viewSight', value });
  };

  return (
    <View className='flex-row justify-between my-16'>
      <Title content='수중환경' />
      <View>
        <View className='flex-row border-b border-gray-300 p-4 pt-0'>
          <SangJungHa
            title='조류'
            value={logs[currentStep]?.tide}
            setValue={(value) => updateLogs({ index: currentStep, key: 'tide', value })}
          />
          <View className='w-18' />
          <SangJungHa
            title='파도'
            value={logs[currentStep]?.wave}
            setValue={(value) => updateLogs({ index: currentStep, key: 'wave', value })}
          />
        </View>
        <View className='flex-row border-b border-gray-300 p-4 mt-9'>
          <SangJungHa
            title='서지'
            value={logs[currentStep]?.surge}
            setValue={(value) => updateLogs({ index: currentStep, key: 'surge', value })}
          />
          <View className='w-18' />
          <View className='flex-row items-center'>
            <Text className={`${tokens.md_16} color-gray-600 mr-9`}>시야</Text>
            <View className='flex-row'>
              <TextInput
                keyboardType='numeric'
                value={logs[currentStep]?.viewSight}
                onChange={(event) => handleViewSightChange(event.nativeEvent.text)}
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