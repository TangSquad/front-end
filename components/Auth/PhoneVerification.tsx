import { useContext } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { sendVerificationCode, verifyPhoneNumber } from 'api/auth/phone-verification';
import { PhoneNumberContext } from 'contexts/PhoneNumberContext';
import { tokens } from 'constants/';

interface BaseButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}

interface SendVerificationBtnProps {
  disabled: boolean;
}

interface VerifyCodeBtnProps {
  disabled: boolean;
}

function BaseButton({ title, disabled, onPress }: BaseButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex items-center justify-center w-75 h-fit px-12 py-2 ${disabled ? 'bg-gray-300' : 'bg-gray-500'} rounded-20`}
      disabled={disabled}
    >
      <Text className={`${tokens.rg_14} color-white`}>{title}</Text>
    </TouchableOpacity>
  );
}

function SendVerificationBtn({ disabled }: SendVerificationBtnProps) {
  const { phoneNumber, setIsCodeSent } = useContext(PhoneNumberContext);
  const handleSuccess = () => {
    Alert.alert('인증번호 전송 성공', '인증번호가 전송되었습니다.');
    setIsCodeSent(true);
  };

  const mutation = useMutation({
    mutationFn: sendVerificationCode,
    onSuccess: () => handleSuccess(),
    onError: () => Alert.alert('인증번호 전송 실패', '인증번호 전송에 실패했습니다.\n다시 시도해주세요.'),
  });

  const handlePress = async () => {
    await mutation.mutateAsync({ phoneNumber: phoneNumber });
  };

  return (
    <BaseButton title='인증하기' disabled={phoneNumber ? disabled : true} onPress={handlePress} />
  );
}

function VerifyCodeBtn({ disabled }: VerifyCodeBtnProps) {
  const { phoneNumber, code, setIsCodeSent, setIsVerified } = useContext(PhoneNumberContext);
  const handleSuccess = () => {
    Alert.alert('인증 성공', '전화번호 인증이 성공되었습니다.');
    setIsCodeSent(false);
    setIsVerified(true);
  };

  const mutation = useMutation({
    mutationFn: verifyPhoneNumber,
    onSuccess: () => handleSuccess(),
    onError: () => Alert.alert('인증 실패', '전화번호 인증에 실패했습니다.\n다시 시도해주세요.'),
  });
  
  const handlePress = async () => {
    await mutation.mutateAsync({ phoneNumber: phoneNumber, code: code });
  };

  return (
    <BaseButton title='확인' disabled={code ? disabled : true} onPress={handlePress} />
  );
}

export { SendVerificationBtn, VerifyCodeBtn };