import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfileSelector from '../../components/Auth/ProfileSelector';
import { TitledInput } from '../../components/Auth/SignupInput';
import { ActionSheetRef, SheetManager } from 'react-native-actions-sheet';
import { tokens } from '../../constants';

function UserInfo() {
  const [uri, setUri] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>('');  
  const organzizationActionSheetRef = useRef<ActionSheetRef>(null);
  const levelActionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <View className='flex-1 items-center bg-white p-24'>
      <ProfileSelector uri={uri} setUri={setUri} />
      <TitledInput type='nickname' setInput={setNickname} />
      <View className='flex-1 items-start w-full'>
        <Text className={`${tokens.bd_16} color-primary`}>자격증</Text>
        <View className='flex-row justify-evenly w-full'>
          <TouchableOpacity
            onPress={() => SheetManager.show('certificate-sheet', {
              payload: {
                type: 'organization',
                ref: organzizationActionSheetRef,
              },
            })}
          >
            <Text>자격증 단체</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SheetManager.show('certificate-sheet', {
            payload: {
              type: 'level',
              ref: levelActionSheetRef,
            },
          })}>
            <Text>레벨 선택</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default UserInfo;