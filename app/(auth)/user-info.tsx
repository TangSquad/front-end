import { useState } from 'react';
import { View, Text } from 'react-native';
import ProfileSelector from '../../components/Auth/ProfileSelector';
import { TitledInput } from '../../components/Auth/SignupInput';

function UserInfo() {
  const [uri, setUri] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>('');

  return (
    <View className='flex-1 items-center bg-white p-24'>
      <ProfileSelector uri={uri} setUri={setUri} />
      <TitledInput type='nickname' setInput={setNickname} />
    </View>
  );
}

export default UserInfo;