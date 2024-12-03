import { View, Image } from 'react-native';
import { Weather } from 'types/Logbook';
import { WeatherInput } from '../Inputs';
import Title from '../Title';
import { tokens } from 'constants/';
import { weathers } from 'data/';

export default function WeatherSection({ weather, airTemp, surfTemp, bottTemp }: Weather) {
  return(
    <View className='flex-row justify-between w-full my-16'>
      <Title content='날씨' />
      <View>
        <View className='flex-row flex-1 justify-between w-200'>
          {weathers.map((w) => (
            <Image
              key={w.value}
              source={w.src}
              className='w-24 h-24'
              style={{ tintColor: weather === w.value ? tokens.primary_400 : undefined }}
            />
          ))}
        </View>
        <View className='border-b border-gray-300 py-8 mt-4'>
          <WeatherInput
            title='기온'
            value={airTemp}
            disabled={true}
          />
        </View>
        <View className='flex-row flex-auto border-b border-gray-300 py-8'>
          <WeatherInput
            title='수면온도'
            value={Number(surfTemp)}
            disabled={true}
          />
          <View className='w-16' />
          <WeatherInput
            title='바닥온도'
            value={Number(bottTemp)}
            disabled={true}
          />
        </View>
      </View>
    </View>
  )
}