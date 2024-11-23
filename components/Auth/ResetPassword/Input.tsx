import { View, TextInput } from 'react-native';
import { useState } from 'react';
import PswdToggleBtn from '../PswdToggleBtn';

// Email & Code Input
type BasicInputProps = {
  type: 'email' | 'code';
  input: string;
  setInput: (value: string) => void;
};

const BasicInput = ({ type, input, setInput }: BasicInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const refinedType = type === 'email' ? '이메일을' : '인증 코드를';
  const inputStyle = `w-full ${isFocused ? 'border-2 border-primary' : 'border border-gray-300'} rounded-10`;

  return (
    <View className={inputStyle}>
      <TextInput
        className='w-full p-16'
        placeholder={`${refinedType} 입력해주세요`}
        defaultValue={input}
        onChangeText={(value) => setInput(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize='none'
      />
    </View>
  );
};

// Password Input
type PasswordProps = {
  type: 'password';
  input: string;
  setInput: (value: string) => void;
};

type passwordConfirmProps = {
  type: 'passwordConfirm';
  input: string;
  setIsValid: (value: boolean) => void;
};

const PasswordInput = (props: PasswordProps | passwordConfirmProps) => {
  const { type, input } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(false);

  const inputStyle = `flex-row justify-between w-full ${isFocused ? 'border-2 border-primary' : 'border border-gray-300'} rounded-10`;
  const refinedType = type === 'password' ? '새 비밀번호를 입력' : '새 비밀번호를 확인';

  const handleChange = (value: string) => {
    if (type==='password') props.setInput(value);
    else props.setIsValid(value === input);
  };

  return (
    <View className={inputStyle}>
      <TextInput
        className='flex-1 p-16'
        placeholder={`${refinedType}해주세요`}
        onChangeText={(value) => handleChange(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize='none'
        secureTextEntry={!show}
      />
      <PswdToggleBtn showPswd={show} setShowPswd={setShow} />
    </View>
  );
};

// Exported Input

type InputProps = BasicInputProps | PasswordProps & {
  setIsValid: (value: boolean) => void;
};

export default function Input(props: InputProps) {
  const { type, input } = props;

  if (type === 'email' || type === 'code') {
    return <BasicInput type={type} input={input} setInput={props.setInput} />;
  }

  else if (type === 'password' || type === 'passwordConfirm') {
    return (
      <View className='w-full'>
        <PasswordInput type='password' input={input} setInput={props.setInput} />
        <View className='h-10' />
        <PasswordInput type='passwordConfirm' input={input} setIsValid={props.setIsValid} />
      </View>
    );
  }
};