import { View, KeyboardAvoidingView, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useMutation } from '@tanstack/react-query';
import { sendCode, verifyCode } from 'api/auth/password/reset-pswd';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';

import Input from 'components/Auth/ResetPassword/Input';
import MainButton from 'components/common/MainButton';
import { tokens } from 'constants/';
import showToast from 'utils/toast';

export default function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [step, setStep] = useState(0); // 화면 단계를 관리하는 상태

  // 애니메이션을 위한 변수
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const currentScreenStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value,
  }));

  const handleTransition = (nextStep) => {
    // 왼쪽으로 슬라이드하면서 화면 사라짐
    translateX.value = withTiming(-300, { duration: 500 }); // Slide left
    opacity.value = withTiming(0, { duration: 500 }, () => {
      runOnJS(setStep)(nextStep); // Update step after animation finishes

      // 새로운 스크린을 위해 애니메이션 리셋
      translateX.value = 300; // Start from the right for the next screen
      opacity.value = 0;

      // 오른쪽에서 슬라이딩으로 다음 화면 전환
      translateX.value = withTiming(0, { duration: 500 });
      opacity.value = withTiming(1, { duration: 500 });
    });
  };

  const mutationForCode = useMutation({
    mutationFn: sendCode,
    onSuccess: () => {
      handleTransition(1);
    },
    onError: () => {
      showToast('error', '코드 전송에 실패했습니다. 올바른 이메일을 입력해주세요.');
    },
  });

  const handleSendCode = () => {
    mutationForCode.mutate(email);
  };

  const mutationForVerify = useMutation({
    mutationFn: verifyCode,
    onSuccess: (data) => {
      if (data.success) handleTransition(2);
      else showToast('error', '인증에 실패했습니다. 올바른 코드를 입력해주세요.');
    },
    onError: () => {
      showToast('error', '데이터 전송 중 에러가 발생했습니다. 잠시후 다시 시도해주세요.');
    },
  });

  const handleVerifyCode = () => {
    mutationForVerify.mutate({ email, code });
  };

  const handleResetPassword = () => {
    // 비밀번호 재설정
    handleTransition(3);
  };

  const isPending = mutationForCode.isPending || mutationForVerify.isPending;

  return (
    <KeyboardAvoidingView className='w-full h-full items-center bg-white px-26 py-20'>
      {isPending && <ActivityIndicator className='absolute top-[280]' size='large' color={tokens.primary_700} />}
      <View className='w-full flex-1'>
        <Animated.View className='w-full h-full flex-1 justify-center items-center mb-100' style={currentScreenStyle}>
          {step === 0 && 
            <>
              <Input type='email' input={email} setInput={setEmail} />
              <View className='h-20'/>
              <MainButton title='이메일로 코드 전송' handlePress={handleSendCode} />
            </> }
          {step === 1 && 
            <>
              <Input type='code' input={code} setInput={setCode}/>
              <View className='h-20'/>
              <MainButton title='인증하기' handlePress={handleVerifyCode} />
            </> }
          {step === 2 && 
            <>
              <View className='h-10'/>
              <MainButton title='비밀번호 재설정' handlePress={handleResetPassword} />
            </> }
          {step === 3 && 
            <>
              <View className='absolute'>
                <Text className={`${tokens.bd_24} color-primary-500 text-center mb-20`}>
                  비밀번호 재설정이{`\n`}완료되었습니다.
                </Text>
                <Text className={`${tokens.rg_16} color-gray-700 mb-100`}>완료버튼을 눌러 로그인 페이지로 돌아가주세요.</Text>
              </View>
              <View className='w-full relative mt-[550]'>
                <MainButton title='로그인 페이지로 돌아가기' handlePress={() => router.replace('/sign-in')} />
              </View>
            </> }
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
}