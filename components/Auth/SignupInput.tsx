import { useState, useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { PhoneNumberContext } from '../../contexts/PhoneNumberContext';
import PswdToggleBtn from './PswdToggleBtn';
import * as DupCheck from '../../api/auth/duplication-check';
import { SendVerificationBtn, VerifyCodeBtn } from './PhoneVerification';
import { inputTypes } from '../../data';
import { tokens } from '../../constants';

interface BaseInputProps {
  type: 'email' | 'password' | 'phone' | 'name' | 'nickname' | 'passwordConfirm' | 'verificationCode';
  setInput: (value: string) => void;
  checkIsInputValid: (input: string) => boolean;
}

interface TitledInputProps extends Omit<BaseInputProps, 'checkIsInputValid' | 'type'> {
  type: 'email' | 'name' | 'nickname';
  setInput: (value: string) => void;
}

interface PasswordInputProps extends Omit<TitledInputProps, 'type'> {
  type: 'password' | 'passwordConfirm';
  input: string;
  setPasswordConfirm: (value: string) => void;
}

interface PhoneNumInputProps extends Omit<TitledInputProps, 'type'> {
  type: 'phone';
  setCodeInput: (value: string) => void;
}

const Title = ({ type }: { type: string }) => (
  <Text className={`${tokens.bd_16} color-primary`}>{inputTypes[type].title}</Text>
);

function BaseInput({ type, setInput, checkIsInputValid }: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [showPswd, setShowPswd] = useState(false);
  const [isDup, setIsDup] = useState(false);

  const { isVerified } = useContext(PhoneNumberContext);

  // if not focused, gray, if focused, valid, and not duplicated, blue, if focused and invalid or duplicated, red
  const borderColor = !isFocused ? 'border-gray-300' : (isValid && !isDup) ? 'border-primary-500' : 'border-[#ff0000]';

  const mutation = useMutation({
    mutationFn: async (input: string) => {
      let params;
      let response;

      if (type === 'email') {
        params = { email: input };
        response = await DupCheck.checkEmailDuplication(params);
      } else if (type === 'phone') {
        params = { phoneNumber: input };
        response = await DupCheck.checkPhoneDuplication(params);
      } else {
        params = { nickname: input };
        response = await DupCheck.checkNicknameDuplication(params);
      }

      return response;
    },
    onSuccess: (data) => {
      setIsDup(data.message.includes('registered'));
    },
    onError: () => {
      setIsDup(false);
    },
  });

  const handleChange = (value: string) => {
    setInput(value);

    if (!value) {
      setIsValid(true);
      setIsDup(false);
    } else if (checkIsInputValid(value)) {
      setIsValid(true);
      mutation.mutate(value);
    } else {
      setIsValid(false);
      setIsDup(false);
    }
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
          secureTextEntry={type.includes('password') && !showPswd}
          keyboardType={type === 'phone' ? 'number-pad' : 'default'}
        />
        {type.includes('password') && <PswdToggleBtn showPswd={showPswd} setShowPswd={setShowPswd} />}
        {type === 'phone' && !isVerified && <SendVerificationBtn disabled={!isValid || isDup} />}
        {type === 'verificationCode' && <VerifyCodeBtn disabled={!isValid} />}
      </View>
      {!isValid && <Text className='color-[#ff0000]'>{inputTypes[type].invalid}</Text>}
      {isDup && <Text className='color-[#ff0000]'>이미 사용 중인 {inputTypes[type]['title']}입니다</Text>}
    </View>
  );
}

function TitledInput({ type, setInput }: TitledInputProps) {
  const checkIsInputValid = (input: string): boolean => {
    if (type === 'email') {
      return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(input);
    }
    else if (type === 'name' || type === 'nickname') {
      return input.length >= 2;
    }

    return false;
  };

  return (
    <View className='flex items-start w-full h-fit my-24'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} checkIsInputValid={checkIsInputValid} />
    </View>
  );
}

function PasswordInput({ type, input, setInput, setPasswordConfirm }: PasswordInputProps) {
  const checkIsPswdValid = (input: string): boolean => {
    return input.length >= 8;
  };

  const checkIsPswdConfirmed = (pswdConfirmInput: string): boolean => {
    return pswdConfirmInput === input;
  };

  return (
    <View className='flex items-start w-full h-fit my-24'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} checkIsInputValid={checkIsPswdValid}/>
      <View className='h-5'/>
      <BaseInput type='passwordConfirm' setInput={setPasswordConfirm} checkIsInputValid={checkIsPswdConfirmed}/>
    </View>
  );
}

function PhonenumInput({ type, setInput, setCodeInput }: PhoneNumInputProps) {
  const { isCodeSent } = useContext(PhoneNumberContext);

  const checkIsPhoneValid = (input: string): boolean => {
    return /^[0-9]{9,11}$/.test(input);
  };

  const checkIsCodeValid = (input: string): boolean => {
    return /^[0-9]{6}$/.test(input);
  };

  return (
    <View className='flex items-start w-full h-fit my-20'>
      <Title type={type} />
      <BaseInput type={type} setInput={setInput} checkIsInputValid={checkIsPhoneValid}/>
      <View className='h-5'/>
      {isCodeSent && <BaseInput type='verificationCode' setInput={setCodeInput} checkIsInputValid={checkIsCodeValid}/>}
    </View>
  );
}

export { TitledInput, PasswordInput, PhonenumInput };