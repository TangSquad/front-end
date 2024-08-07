import { View, Text, Switch } from 'react-native';
import { tokens } from '../../constants';

interface PublicPrivateSwitchProps {
  type: string;
  isPublic: boolean;
  setIsPublic: (isPublic: boolean) => void;
}

function PublicPrivateSwitch({ type, isPublic, setIsPublic }: PublicPrivateSwitchProps) {
  const toggleSwitch = (changedValue) => setIsPublic(changedValue);
  
  return (
    <View className='flex-row justify-end items-center gap-x-16'>
      <Text className={`${tokens.md_14} color-gray-700`}>{type} 공개</Text>
      <Switch
        trackColor={{ false: tokens.gray_400, true: tokens.primary_100 }}
        thumbColor={isPublic ? tokens.primary_400 : 'white'}
        value={isPublic}
        onValueChange={(value) => toggleSwitch(value)}
      />
    </View>
  );
}

export default PublicPrivateSwitch;