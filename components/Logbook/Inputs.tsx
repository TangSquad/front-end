import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import Title from './Title';
import { tokens } from 'constants/';

interface BasicInputProps {
  placeholder?: string;
  value: string;
  setValue?: (value: string) => void;
}

const BasicInput = ({ placeholder, value, setValue }: BasicInputProps) => {
  const [focused, setFocused] = useState(false);

  const borderColor = focused ? 'border-primary' : 'border-gray-300';

  const handleChange = (text: string) => {
    if (setValue) setValue(text);
  };

  return (
    <View className={'flex-row justify-between w-[240] border-b-[1px] ' + borderColor}>
      <TextInput
        className={`${placeholder === '잠수시간' ? 'w-[220]' : 'w-full'}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleChange(event.nativeEvent.text)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        keyboardType={placeholder === '잠수시간' ? 'numeric' : 'default'}
        aria-disabled={!setValue}
      />
      {placeholder === '잠수시간' && <Text className={`${tokens.rg_14} color-gray-400`}>분</Text>}
    </View>
  );
};

interface EtcInputPropsBase {
  title: string;
  unit: 'M' | 'bar';
  value: number | null;
}

interface EtcInputEditableProps extends EtcInputPropsBase {
  setValue: (value: number | null) => void;
  disabled?: never;
}

interface EtcInputDisabledProps extends EtcInputPropsBase {
  disabled: boolean;
  setValue?: never;
}

type EtcInputProps = EtcInputEditableProps | EtcInputDisabledProps;

const EtcInput = ({ title, unit, disabled = false, value, setValue }: EtcInputProps) => {
  const titleDisplay = title.includes('공기') ? ` ${title} ` : title;

  const handleChange = (text: string) => {
    if (setValue) {
      if (text === '' || isNaN(Number(text))) setValue(null);
      else setValue(Number(text));
    }
  };

  const inputBg = disabled ? 'bg-white' : 'bg-gray-50';

  return(
    <View className='flex-row justify-between w-[45%]'>
      <Title content={titleDisplay} />
      <View className='flex-row ml-16'>
        <TextInput
          value={value === null ? '' : value.toString()}
          onChange={(event) => handleChange(event.nativeEvent.text)}
          className={`flex-auto w-1/3 ${inputBg}`}
          keyboardType='numeric'
          textAlign='center'
          aria-disabled={disabled}
        />
        <Text className={`${tokens.rg_14} color-gray-400 ${unit === 'bar' ? 'mx-4' : 'mx-9'}`}>{unit}</Text>
      </View>
    </View>
  );
};

type WeatherInputProps = {
  title: string;
  value: number | null;
  setValue: (value: number | null) => void;
  disabled?: never;
} | {
  title: string;
  value: number | null;
  setValue?: never;
  disabled: boolean;
}

const WeatherInput = ({ title, value, setValue, disabled = false }: WeatherInputProps) => {
  const extraMr = title === '기온' ? 'mr-30' : '';

  const handleChange = (text: string) => {
    if (setValue) {
      if (text === '' || isNaN(Number(text))) setValue(null);
      else setValue(Number(text));
    }
  };

  const inputBg = disabled ? 'bg-white' : 'bg-gray-50';

  return(
    <View className='flex-row'>
      <Text className={`${tokens.md_16} color-gray-600 ${extraMr}`}>{title}</Text>
      <TextInput
        value={value ? value.toString() : ''}
        onChange={(event) => handleChange(event.nativeEvent.text)}
        className={`w-[40] ${inputBg} ml-8 mr-4`}
        textAlign='center'
        keyboardType='numeric'
        area-disabled={disabled}
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