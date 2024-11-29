import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import Title from '../Title';
import { tokens } from 'constants/';

interface BasicInputProps {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

const BasicInput = ({ placeholder, value, setValue }: BasicInputProps) => {
  const [focused, setFocused] = useState(false);

  const borderColor = focused ? 'border-primary' : 'border-gray-300';

  return (
    <View className={'flex-row justify-between w-[240] border-b-[1px] ' + borderColor}>
      <TextInput
        className={`${placeholder === '잠수시간' ? 'w-[220]' : 'w-full'}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.nativeEvent.text)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        keyboardType={placeholder === '잠수시간' ? 'numeric' : 'default'}
      />
      {placeholder === '잠수시간' && <Text className={`${tokens.rg_14} color-gray-400`}>분</Text>}
    </View>
  );
};

interface EtcInputProps {
  title: string;
  unit: 'M' | 'bar';
  value: number | null;
  setValue: (value: number | null) => void;
}

const EtcInput = ({ title, unit, value, setValue }: EtcInputProps) => {
  const titleDisplay = title.includes('공기') ? ` ${title} ` : title;

  const handleChange = (text: string) => {
    if (text === '' || isNaN(Number(text))) setValue(null);
    else setValue(Number(text));
  };

  return(
    <View className='flex-row justify-between w-[45%]'>
      <Title content={titleDisplay} />
      <View className='flex-row ml-16'>
        <TextInput
          value={value === null ? '' : value.toString()}
          onChange={(event) => handleChange(event.nativeEvent.text)}
          className='flex-auto w-1/3 bg-gray-50'
          keyboardType='numeric'
          textAlign='center'
        />
        <Text className={`${tokens.rg_14} color-gray-400 ${unit === 'bar' ? 'mx-4' : 'mx-9'}`}>{unit}</Text>
      </View>
    </View>
  );
};

interface WeatherInputProps {
  title: string;
  value: number | null;
  setValue: (value: number | null) => void;
}

const WeatherInput = ({ title, value, setValue }: WeatherInputProps) => {
  const extraMr = title === '기온' ? 'mr-30' : '';

  const handleChange = (text: string) => {
    if (text === '' || isNaN(Number(text))) setValue(null);
    else setValue(Number(text));
  };

  return(
    <View className='flex-row'>
      <Text className={`${tokens.md_16} color-gray-600 ${extraMr}`}>{title}</Text>
      <TextInput
        value={value === null ? '' : value.toString()}
        onChange={(event) => handleChange(event.nativeEvent.text)}
        className={`w-[40] bg-gray-50 ml-8 mr-4`}
        textAlign='center'
        keyboardType='numeric'
      />
      <Text className={`${tokens.rg_14} color-gray-400`}>ºC</Text>
    </View>
  );
};

export {
  BasicInput,
  EtcInput,
  WeatherInput,
};