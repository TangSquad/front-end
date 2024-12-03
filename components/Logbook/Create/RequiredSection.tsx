import { View } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import Title from '../Title';
import { BasicInput } from '../Inputs';

const InputEditable = ({ currentStep }: { currentStep: number }) => {
  const { logs, updateLogs } = useContext(LogsContext);

  return(
    <BasicInput
      placeholder='다이빙 위치'
      value={logs[currentStep]?.location}
      setValue={(value) => updateLogs({ index: currentStep, key: 'location', value })}
    />
  );
};

const InputStatic = ({ value }: { value: string }) => {
  return(
    <BasicInput
      value={value}
    />
  );
};

type RequiredSectionProps = { currentStep: number; } | { location: string; diveTime: string; };

export default function RequiredSection(props: RequiredSectionProps) {
  const isEditable = 'currentStep' in props;

  return(
    <View className='my-16'>
      <View className='mb-32 flex-row justify-between'>
        <Title content='장소' mandatory />
        {isEditable ? <InputEditable currentStep={props.currentStep} /> : <InputStatic value={props.location} />}
      </View>
      <View className='flex-row justify-between'>
        <Title content='잠수시간' mandatory />
        {isEditable ? <InputEditable currentStep={props.currentStep} /> : <InputStatic value={props.diveTime} />}
      </View>
    </View>
  );
}