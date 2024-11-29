import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import Title from '../Title';
import { tokens } from 'constants/';
import { divingThemes } from 'data';

export default function DivingThemeSection({ currentStep }: { currentStep: number }) {
  const { logs, updateLogs } = useContext(LogsContext);

  const isSelected = (theme: string) => logs[currentStep]?.subject === theme;

  const defaultBoxStyle = 'border border-gray-300';
  const selectedBoxStyle = 'bg-primary-100 border border-primary-200';

  return (
    <View className='mt-32 mb-16'>
      <Title content='다이빙 주제' />
      <View className='flex-row flex-wrap justify-center items-center gap-x-8'>
        {divingThemes.map((theme) => (
          <TouchableOpacity
            key={theme.title} 
            onPress={() => updateLogs({ index: currentStep, key: 'subject', value: theme.title })}
            className={`
                flex justify-center items-center w-[80] h-[80] rounded mb-16
                ${isSelected(theme.title) ? selectedBoxStyle : defaultBoxStyle}
            `}
          >
            <Image
              source={theme.src}
              resizeMode='contain'
              className='w-20 h-20'
              style={{ opacity: isSelected(theme.title) ? 1 : 0.3 }}
            />
            <Text className={`${tokens.rg_16} ${isSelected(theme.title) ? 'color-gray-800' : 'color-gray-400'}`}>
              {theme.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}