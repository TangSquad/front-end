import { Text, TouchableOpacity } from 'react-native';
import { tokens } from '../../constants';

interface BaseInputProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}

function BaseButton({ title, disabled, onPress }: BaseInputProps) {
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

function SendVerificationBtn({ disabled }: { disabled: boolean }) {
  return (
    <BaseButton title='인증하기' disabled={disabled} onPress={() => {}} />
  );
}

function VerifyCodeBtn({ disabled }: { disabled: boolean }) {
  return (
    <BaseButton title='확인' disabled={disabled} onPress={() => {}} />
  );
}

export { SendVerificationBtn, VerifyCodeBtn };