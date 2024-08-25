import { useState, useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { PhoneNumberContext } from '../../contexts/PhoneNumberContext';
import PswdToggleBtn from './PswdToggleBtn';
import { SendVerificationBtn, VerifyCodeBtn } from './PhoneVerification';
import { inputTypes } from '../../data';
import { tokens } from '../../constants';

interface BaseInputProps {
  type: 'email' | 'password' | 'phone' | 'name' | 'nickname' | 'passwordConfirm' | 'verificationCode';
  setInput: (value: string) => void;
}

interface TwoInputsProps extends BaseInputProps {
  setSecondInput: (value: string) => void;
}

const checkIsInputValid = (input: string, type: string): boolean => {
  if (type === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  }
  else if (type === 'password') {
    return input.length >= 8;
  }
  else if (type === 'phone') {
    return /^[0-9]{9,11}$/.test(input);
  }
  else if (type === 'verificationCode') {
    return /^[0-9]{6}$/.test(input);
  }
  else if (type === 'name' || type === 'nickname') {
    return input.length >= 2;
  }

  return true;
};

const Title = ({ type }: { type: string }) => (
  <Text className={`${tokens.bd_16} color-primary`}>{inputTypes[type].title}</Text>
);

function BaseInput({ type, setInput }: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [showPswd, setShowPswd] = useState(false);
  const { isVerified } = useContext(PhoneNumberContext);

  // if not focused, gray, if focused and valid, blue, if focused and invalid, red
  const borderColor = !isFocused ? 'border-gray-300' : isValid ? 'border-primary-500' : 'border-[#ff0000]';

  const handleChange = (value: string) => {
    setInput(value);
    setIsValid(checkIsInputValid(value, type));
  };

  return (
    <View>
      <View className={`flex-row items-center justify-between w-full ${borderColor} border-b-[1px]`}>
        <TextInput
          className='flex-1 bg-white py-10'
          autoCapitalize='none'
          placeholder={inputTypes[type].placeholder}
          placeholderTextColor={tokens.gray_400}
          onChangeText={(value) => handleChange(value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={type === 'password' && !showPswd}
          keyboardType={type === 'phone' ? 'number-pad' : 'default'}
        />
        {type === 'password' && <PswdToggleBtn showPswd={showPswd} setShowPswd={setShowPswd} />}
        {type === 'phone' && !isVerified && <SendVerificationBtn disabled={!isValid} />}
        {type === 'verificationCode' && <VerifyCodeBtn disabled={!isValid} />}
      </View>
      {!isValid && <Text className='color-[#ff0000]'>{inputTypes[type][`invalid${type[0].toUpperCase() + type.slice(1)}`]}</Text>}
    </View>
  );
}

function TitledInput({ type, setInput }: BaseInputProps) {
  return (
    <View className='flex items-start w-full h-fit my-24'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} />
    </View>
  );
}

function PasswordInput({ type, setInput, setSecondInput }: TwoInputsProps) {
  return (
    <View className='flex items-start w-full h-fit my-24'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} />
      <View className='h-5'/>
      <BaseInput type={type} setInput={setSecondInput} />
    </View>
  );
}

function PhonenumInput({ type, setInput, setSecondInput }: TwoInputsProps) {
  const { isCodeSent } = useContext(PhoneNumberContext);

  return (
    <View className='flex items-start w-full h-fit my-20'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} />
      <View className='h-5'/>
      {isCodeSent && <BaseInput type='verificationCode' setInput={setSecondInput} />}
    </View>
  );
}

export { TitledInput, PasswordInput, PhonenumInput };