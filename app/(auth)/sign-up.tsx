import { useState, useContext } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, View, Text, Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { TitledInput, PasswordInput, PhonenumInput } from '../../components/Auth/SignupInput';
import { TokenContext } from '../../contexts/TokenContext';
import { PhoneNumberContext } from '../../contexts/PhoneNumberContext';
import signup from '../../api/auth/signup';
import { tokens } from '../../constants';

function SignUp() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { setAccessToken, setRefreshToken } = useContext(TokenContext);

  const disabled = !(name && phoneNumber && code && email && password && passwordConfirm && isVerified);

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      router.push('(auth)/sign-in');
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
                setSecondInput={setCode}
              />
              <TitledInput
                type='email'
                setInput={setEmail}
              />
              <PasswordInput
                type='password'
                setInput={setPassword}
                setSecondInput={setPasswordConfirm}
              />
            </View>
          </PhoneNumberContext.Provider>
          <TouchableOpacity
            className={`${disabled ? 'bg-gray-300' : 'bg-primary'} w-full py-16 flex items-center justify-center rounded-10`}
            onPress={handleSignup}
            disabled={disabled}
          >
            <Text className={`${tokens.bd_16} color-white`}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default SignUp;