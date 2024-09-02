import { useState } from 'react';
import { View, Text } from 'react-native';
import ProfileSelector from '../../components/Auth/ProfileSelector';

function UserInfo() {
  const [uri, setUri] = useState<string | null>(null);

  return (
    <View className='flex-1 items-center bg-white p-24'>
      <ProfileSelector uri={uri} setUri={setUri} />
    </View>
  );
}

export default UserInfo;