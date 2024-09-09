import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ProfileSelector from '../../components/Auth/ProfileSelector';
import { TitledInput } from '../../components/Auth/SignupInput';
import { ActionSheetRef, SheetManager } from 'react-native-actions-sheet';
import { tokens } from '../../constants';
import Plus from '../../assets/icons/plus.png';

const DefaultView = ({ type }: { type: '단체' | '레벨' } ) => {
  return (
    <View className='flex-row justify-between items-center mx-12 my-7'>
      <Text className={`${tokens.rg_14} color-gray-400 mr-20`}>자격증 {type}</Text>
      <Image source={Plus} className='w-16 h-16' tintColor={tokens.gray_300} />
    </View>
  );
};

function UserInfo() {
  const [uri, setUri] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>('');
  const [selectedOrganization, setSelectedOrganization] = useState<{
    component: JSX.Element;
    id: number;
  } | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<{
    component: JSX.Element;
    id: number;
   } | null>(null);

  const organzizationActionSheetRef = useRef<ActionSheetRef>(null);
  const levelActionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <View className='flex-1 items-center bg-white p-24'>
      <ProfileSelector uri={uri} setUri={setUri} />
      <TitledInput type='nickname' setInput={setNickname} />
      <View className='flex-1 items-start w-full'>
        <Text className={`${tokens.bd_16} color-primary mb-8`}>자격증</Text>
        <View className='flex-row justify-between w-full'>
          <TouchableOpacity
            className={`flex justify-center items-center mr-10 border ${selectedOrganization ? 'border-primary' : 'border-gray-300'} rounded-10`}
            onPress={() => SheetManager.show('certificate-sheet', {
              payload: {
                type: 'organization',
                ref: organzizationActionSheetRef,
                setSelectedOrganization: setSelectedOrganization,
              },
            })}
          >
            {selectedOrganization?.component || <DefaultView type='단체' />}
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 justify-center items-center border ${selectedLevel ? 'border-primary' : 'border-gray-300'} rounded-10`}
            disabled={!selectedOrganization}
            onPress={() => SheetManager.show('certificate-sheet', {
              payload: {
                type: 'level',
                ref: levelActionSheetRef,
                setSelectedLevel: setSelectedLevel,
                organizationId: selectedOrganization?.id || 0,
              },
            })}>
            {selectedLevel?.component || <DefaultView type='레벨' />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default UserInfo;