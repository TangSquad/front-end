import { View } from 'react-native';
import { useContext } from 'react';
import { LogbookContext } from 'contexts/LogbookContext';
import Title from '../Title';
import { BasicInput } from './Inputs';

export default function TitleSection() {
  const { logbook, setLogbook } = useContext(LogbookContext);

  return (
    <View className='w-full'>
      <View className='flex-row justify-between mb-10'>
        <Title content='제목' mandatory />
        <BasicInput
          placeholder='로그북 제목'
          value={logbook.title}
          setValue={(value) => setLogbook({ ...logbook, title: value })}
        />
      </View>
    </View>
  );
}