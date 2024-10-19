import { Text, TouchableOpacity } from 'react-native';
import { tokens } from 'constants/';

interface MainButtonProps {
  title: string;
  handlePress: () => void;
  disabled?: boolean;
  bgColor?: string;
}

export default function MainButton({ title, handlePress, disabled = false, bgColor }: MainButtonProps) {
  const finalBgColor = disabled ? 'bg-gray-300' : bgColor ? `bg-${bgColor}` : 'bg-primary';

  return (
    <TouchableOpacity
      className={`flex-initial justify-center items-center w-full py-16 ${finalBgColor} rounded-10`}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text className={`${tokens.bd_16} color-white`}>{title}</Text>
    </TouchableOpacity>
  );
}