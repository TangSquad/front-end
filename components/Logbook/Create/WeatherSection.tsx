import { View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Title from '../Title';
import { WeatherInput } from './Inputs';
import { tokens, images } from 'constants/';

export default function WeatherSection() {
  const [weather, setWeather] = useState({
    weather: null as null | number,
    temperature: '',
    waterTemperature: '',
    groundTemperature: '',
  });

  return(
    <View className='flex-row justify-between w-full my-16'>
      <Title content='날씨' />
      <View>
        <View className='flex-row flex-1 justify-between w-200'>
          {images.weathers.map((weatherImage, index) => (
            <TouchableOpacity
              className='flex justify-center items-center'
              activeOpacity={0.7}
              onPress={() => setWeather({ ...weather, weather: index })}
              key={index}
            >
              <Image
                source={weatherImage}
                className='w-24 h-24'
                style={{ tintColor: index === weather.weather ? tokens.primary_400 : undefined }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View className='border-b border-gray-300 py-8 mt-4'>
          <WeatherInput
            title='기온'
            value={weather.temperature} 
            setValue={(value) => setWeather({ ...weather, temperature: value })}
          />
        </View>
        <View className='flex-row flex-auto border-b border-gray-300 py-8'>
          <WeatherInput
            title='수면온도'
            value={weather.waterTemperature}
            setValue={(value) => setWeather({ ...weather, waterTemperature: value })}
          />
          <View className='w-16' />
          <WeatherInput
            title='바닥온도'
            value={weather.groundTemperature}
            setValue={(value) => setWeather({ ...weather, groundTemperature: value })}
          />
        </View>
      </View>
    </View>
  );
}