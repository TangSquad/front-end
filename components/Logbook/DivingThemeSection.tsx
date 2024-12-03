import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import Title from './Title';
import { tokens } from 'constants/';
import { divingThemes } from 'data';

type DivingThemeSectionProps = {
  currentStep: number;
  selected?: string;
}

const defaultBoxStyle = 'border border-gray-300';
const selectedBoxStyle = 'bg-primary-100 border border-primary-200';

const UnselectableItem = ({ title, selected }: { title: string, selected: string }) => {
  const isSelected = divingThemes.some((t) => t.title === selected);

  return(
    <View
      className={`
        flex justify-center items-center w-[80] h-[80] rounded mb-16
        ${isSelected ? selectedBoxStyle : defaultBoxStyle}
      `}
    >
      <Image
        source={divingThemes.find((t) => t.title === title)?.src}
        resizeMode='contain'
        className='w-20 h-20'
        style={{ opacity: isSelected ? 1 : 0.3 }}
      />
      <Text className={`${tokens.rg_16} color-gray-400`}>{title}</Text>
    </View>
  );
};

const SelectableItem = ({ title, currentStep }: { title: string, currentStep: number }) => {
  const { logs, updateLogs } = useContext(LogsContext);

  const isSelected = title === logs[currentStep].subject;
  const handlePress = () => updateLogs({ index: currentStep, key: 'subject', value: title });

  return(
    <TouchableOpacity
      onPress={handlePress}
      className={`
        flex justify-center items-center w-[80] h-[80] rounded mb-8
        ${isSelected ? selectedBoxStyle : defaultBoxStyle}
      `}
    >
      <Image
        source={divingThemes.find((t) => t.title === title)?.src}
        resizeMode='contain'
        className='w-20 h-20'
        style={{ opacity: isSelected ? 1 : 0.3 }}
      />
      <Text className={`${tokens.rg_16} ${isSelected ? 'color-gray-800' : 'color-gray-400'}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function DivingThemeSection({ currentStep, selected }: DivingThemeSectionProps) {
  const pickable = typeof selected === 'undefined';

  return (
    <View className='my-32'>
      <Title content='다이빙 주제' />
      <View className='flex-row flex-wrap justify-between items-center mt-8'>
        {divingThemes.map((theme) => (
          pickable ?
            <SelectableItem 
              key={theme.title}
              title={theme.title}
              currentStep={currentStep}
            /> :
            <UnselectableItem key={theme.title} title={theme.title} selected={selected} />
        ))}
      </View>
    </View>
  );
}