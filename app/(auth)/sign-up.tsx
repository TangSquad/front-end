import { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, View, Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signup from 'api/auth/signup';
import MainButton from 'components/common/MainButton';
import { TitledInput, PasswordInput, PhonenumInput } from 'components/Auth/SignupInput';
import { PhoneNumberContext } from 'contexts/PhoneNumberContext';

function SignUp() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const disabled = !(name && phoneNumber && code && email && password && passwordConfirm && isVerified);

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      AsyncStorage.setItem('accessToken', res.data.accessToken);
      AsyncStorage.setItem('refreshToken', res.data.refreshToken);
      router.push('/signup-finished');
    },
    onError: (error) => {
      Alert.alert('회원가입 실패', error.message);
    },
  });


  const handleSignup = async () => {
    await mutation.mutate({
      name,
      phone: phoneNumber,
      email,
      password,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} touchSoundDisabled={true}>
      <SafeAreaView className='bg-white'>
        <View className='flex justify-between h-full py-18 px-26'>
          <PhoneNumberContext.Provider value={{ phoneNumber, code, isCodeSent, setIsCodeSent, isVerified, setIsVerified }}>
            <View>
              <TitledInput
                type='name'
                setInput={setName}
              />
              <PhonenumInput
                type='phone'
                setInput={setPhoneNumber}
                setCodeInput={setCode}
              />
              <TitledInput
                type='email'
                setInput={setEmail}
              />
              <PasswordInput
                type='password'
                input={password}
                setInput={setPassword}
                setPasswordConfirm={setPasswordConfirm}
              />
            </View>
          </PhoneNumberContext.Provider>
          <MainButton title='회원가입' handlePress={handleSignup} disabled={disabled} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default SignUp;