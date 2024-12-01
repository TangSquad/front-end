import { View, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { LogbookContext } from 'contexts/LogbookContext';
import Title from '../Title';
import { tokens } from 'constants/';
import { conditions } from 'data/';

export default function ConditionSection() {
  const { logbook, setLogbook } = useContext(LogbookContext);

  return (
    <View className='mt-16 mb-32 flex-row justify-between w-full'>
      <Title content='컨디션' />
      <View className='flex-row justify-between gap-x-20'>
        {conditions.map((condition, index) => (
          <TouchableOpacity
            className='flex justify-center items-center'
            activeOpacity={0.7}
            onPress={() => setLogbook({ ...logbook, userCondition: condition.value })}
            key={index}
          >
            <Image
              source={condition.src}
              className='w-30 h-30'
              style={{ tintColor: logbook.userCondition === condition.value ? tokens.primary_400 : undefined }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}