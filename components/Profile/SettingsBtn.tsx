import { Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { tokens, icons } from 'constants/';

export default function SettingsBtn() {
  const goToSettings = () => router.push('settings');

  return (
    <TouchableOpacity
      className='w-20 h-20'
      onPress={goToSettings}
    >
      <Image source={icons.settings} tintColor={tokens.gray_700} />
    </TouchableOpacity>
  );
}