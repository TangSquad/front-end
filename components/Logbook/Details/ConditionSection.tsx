import { View, Image } from 'react-native';
import Title from '../Title';
import { tokens } from 'constants/';
import { conditions } from 'data/';

interface ConditionSectionProps {
  selectedCondition: string;
}

export default function ConditionSection({ selectedCondition }: ConditionSectionProps) {
  return (
    <View className='my-30 flex-row justify-between w-full'>
      <Title content='컨디션' />
      <View className='flex-row justify-between gap-x-20'>
        {conditions.map((condition, index) => (
          <Image
            key={index}
            source={condition.src}
            className='w-30 h-30'
            style={{ tintColor: selectedCondition === condition.value ? tokens.primary_400 : undefined }}
          />
        ))}
      </View>
    </View>
  );
}