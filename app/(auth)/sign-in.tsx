import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';
import CustomInput from '../../components/Auth/CustomInput';
import { loginUser } from '../../api/auth';
import { tokens } from '../../constants';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: loginUser,
  });

  const emailSignin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: '이메일과 비밀번호를 입력해주세요.',
        position: 'bottom',
        bottomOffset: 100,
      });

      return;
    }

    try {
      const data = await mutation.mutateAsync({ email: email, password: password });
      Toast.show({
        type: 'success',
        text1: '로그인 성공',
        position: 'bottom',
        bottomOffset: 100,
      });
      router.push('/home');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: '아이디 또는 비밀번호가 일치하지 않습니다.',
        position: 'bottom',
        bottomOffset: 100,
      });
    }
  };

  return (
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
        <TouchableOpacity
          className='flex items-center justify-center w-full h-60 bg-primary rounded-10'
          activeOpacity={0.8}
          onPress={emailSignin}
        >
          <Text className={`${tokens.bd_16} color-white`}>로그인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;