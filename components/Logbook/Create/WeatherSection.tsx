import { View, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import Title from '../Title';
import { WeatherInput } from '../Inputs';
import { tokens } from 'constants/';
import { weathers } from 'data/';

export default function WeatherSection({ currentStep }: { currentStep: number }) {
  const { logs, updateLogs } = useContext(LogsContext);

  return(
    <View className='flex-row justify-between w-full my-16'>
      <Title content='날씨' />
      <View>
        <View className='flex-row flex-1 justify-between w-200'>
          {weathers.map((weather) => (
            <TouchableOpacity
              className='flex justify-center items-center'
              activeOpacity={0.7}
              onPress={() => updateLogs({ index: currentStep, key: 'weather', value: weather.value })}
              key={weather.value}
            >
              <Image
                source={weather.src}
                className='w-24 h-24'
                style={{ tintColor: logs[currentStep]?.weather === weather.value ? tokens.primary_400 : undefined }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View className='border-b border-gray-300 py-8 mt-4'>
          <WeatherInput
            title='기온'
            value={logs[currentStep]?.airTemp}
            setValue={(value) => updateLogs({ index: currentStep, key: 'airTemp', value })}
          />
        </View>
        <View className='flex-row flex-auto border-b border-gray-300 py-8'>
          <WeatherInput
            title='수면온도'
            value={logs[currentStep]?.surfTemp}
            setValue={(value) => updateLogs({ index: currentStep, key: 'surfTemp', value })}
          />
          <View className='w-16' />
          <WeatherInput
            title='바닥온도'
            value={logs[currentStep]?.bottTemp}
            setValue={(value) => updateLogs({ index: currentStep, key: 'bottTemp', value })}
          />
        </View>
      </View>
    </View>
  );
}