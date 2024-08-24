import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import PswdToggleBtn from './PswdToggleBtn';
import { SendVerificationBtn, VerifyCodeBtn } from './PhoneVerification';
import { tokens } from '../../constants';

interface BaseInputProps {
  type: 'email' | 'password' | 'phone' | 'name' | 'nickname' | 'passwordConfirm' | 'verificationCode';
  setInput: (value: string) => void;
}

interface TwoInputsProps extends BaseInputProps {
  setSecondInput: (value: string) => void;
}

const inputTypes = {
  email: {
    title: '이메일',
    placeholder: '이메일을 입력해주세요',
    invalidEmail: 'Invalid email address',
  },
  password: {
    title: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    invalidPassword: 'Password must be at least 8 characters long',
  },
  phone: {
    title: '전화번호',
    placeholder: '전화번호를 입력해주세요',
    invalidPhone: 'Invalid phone number',
  },
  name: {
    title: '이름',
    placeholder: '이름을 입력해주세요',
    invalidName: 'Name must be at least 2 characters long',
  },
  nickname: {
    title: '닉네임',
    placeholder: '닉네임을 입력해주세요',
    invalidNickname: 'Nickname must be at least 2 characters long',
  },
  passwordConfirm: {
    placeholder: '비밀번호를 다시 입력해주세요',
    invalidPasswordConfirm: 'Passwords do not match',
  },
  verificationCode: {
    placeholder: '인증번호를 입력해주세요',
    invalidVerificationCode: 'Invalid verification code',
  },
};

const checkIsInputValid = (input: string, type: string): boolean => {
  if (type === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  }
  else if (type === 'password') {
    return input.length >= 8;
  }
  else if (type === 'phone') {
    return /^[0-9]{10}$/.test(input);
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


  // if not focused, gray, if focused and valid, blue, if focused and invalid, red
  const borderColor = !isFocused ? 'border-gray-300' : isValid ? 'border-primary-500' : 'red';

  const handleChange = (value: string) => {
    setInput(value.trim());
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
        />
        {type === 'password' && <PswdToggleBtn showPswd={showPswd} setShowPswd={setShowPswd} />}
        {type === 'phone' && <SendVerificationBtn disabled={false} />}
        {type === 'verificationCode' && <VerifyCodeBtn disabled={false} />}
      </View>
      {!isValid && <Text className='color-red'>{inputTypes[type][`invalid${type[0].toUpperCase() + type.slice(1)}`]}</Text>}
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
  return (
    <View className='flex items-start w-full h-fit my-20'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} />
      <View className='h-5'/>
      <BaseInput type='verificationCode' setInput={setSecondInput} />
    </View>
  );
}

export { TitledInput, PasswordInput, PhonenumInput };