import { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { Link, router } from 'expo-router';
import CustomInput from 'components/Auth/CustomInput';
import showToast from 'utils/toast';
import { emailSignIn } from 'api/auth/singin';
import MainButton from 'components/common/MainButton';
import { tokens } from 'constants/';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((token) => {
      if (token) AsyncStorage.removeItem('accessToken');
    });
  }, []);

  const mutation = useMutation({
    mutationFn: emailSignIn,
    onSuccess: (res) => {
      try {
        AsyncStorage.setItem('accessToken', res.data.accessToken);
        AsyncStorage.setItem('refreshToken', res.data.refreshToken);
      } catch (e) {
        showToast('error', '토큰을 저장하는데 실패했습니다.');
      }

      showToast('success', '로그인 성공');
      router.push('/home');
    },
    onError: () => {
      showToast('error', '로그인 실패.');
    },
  });

  const emailSignin = async () => {
    if (!email || !password) {
      showToast('error', '이메일 또는 비밀번호를 입력해주세요.');
      return;
    }

    await mutation.mutateAsync({ email: email, password: password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} touchSoundDisabled={true}>
      <SafeAreaView className='bg-white h-full'>
        <View className='flex items-center w-full px-26'>
          <Text className={`${tokens.bd_28} color-primary-600 mt-50 mb-60`}>TANG SQUAD</Text>
          <CustomInput
            title="이메일"
            type="email"
            placeholder='이메일을 입력해주세요.'
            setInput={setEmail}
          />
          <CustomInput
            title="비밀번호"
            type="password"
            placeholder='비밀번호를 입력해주세요.'
            setInput={setPassword}
          />
          <MainButton title='로그인' handlePress={emailSignin} />
          <View className='flex-row justify-center items-center my-9'>
            <Link href='/find-email'>
              <Text className={`color-gray-300 ${tokens.rg_14}`}>이메일 찾기</Text>
            </Link>
            <Text className='color-gray-300 px-12'>|</Text>
            <Link href='/find-password'>
              <Text className={`color-gray-300 ${tokens.rg_14}`}>비밀번호 찾기</Text>
            </Link>
            <Text className='color-gray-300 px-12'>|</Text>
            <Link href='/sign-up'>
              <Text className={`color-gray-300 ${tokens.rg_14}`}>회원가입</Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}