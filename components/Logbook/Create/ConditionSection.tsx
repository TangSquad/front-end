import { View, Image, TouchableOpacity } from 'react-native';
import Title from '../Title';
import { useState } from 'react';
import { tokens, images } from 'constants/';

export default function ConditionSection() {
  const [condition, setCondition] = useState<number | null>(null);

  return (
    <View className='mt-16 mb-32 flex-row justify-between w-full'>
      <Title content='컨디션' />
      <View className='flex-row justify-between gap-x-20'>
        {images.conditions.map((conditionImage, index) => (
          <TouchableOpacity
            className='flex justify-center items-center'
            activeOpacity={0.7}
            onPress={() => setCondition(index)}
            key={index}
          >
            <Image
              source={conditionImage}
              className='w-30 h-30'
              style={{ tintColor: index === condition ? tokens.primary_400 : undefined }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}