import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ProfileSelector from '../../components/Auth/ProfileSelector';
import { TitledInput } from '../../components/Auth/SignupInput';
import { ActionSheetRef, SheetManager } from 'react-native-actions-sheet';
import { useMutation } from '@tanstack/react-query';
import postAdditional from '../../api/auth/addtional';
import showToast from '../../utils/toast';
import Plus from '../../assets/icons/plus.png';
import { tokens, icons } from '../../constants';


const DefaultView = ({ type }: { type: '단체' | '레벨' } ) => {
  return (
    <View className='flex-row justify-between items-center mx-12 my-7'>
      <Text className={`${tokens.rg_14} color-gray-400 mr-20`}>자격증 {type}</Text>
      <Image source={Plus} className='w-16 h-16' tintColor={tokens.gray_300} />
    </View>
  );
};

function UserInfo() {
  const [uri, setUri] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [selectedOrganization, setSelectedOrganization] = useState<{
    component: JSX.Element;
    id: number;
  } | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<{
    component: JSX.Element;
    id: number;
   } | null>(null);
  const [certificateImage, setCertificateImage] = useState<string>('');

  const disabled = !nickname || !(nickname.length > 1);

  const organzizationActionSheetRef = useRef<ActionSheetRef>(null);
  const levelActionSheetRef = useRef<ActionSheetRef>(null);
  const imageActionSheetRef = useRef<ActionSheetRef>(null);

  const mutation = useMutation({
    mutationFn: postAdditional,
    onSuccess: () => {
      // navigate to finish screen
    },
    onError: (error) => {
      showToast('error', error.message);
    },
  });

  const handleSubmit = () => {
    const data = {
      nickname,
      organizationId: selectedOrganization?.id,
      levelId: selectedLevel?.id,
      certificateImage,
      profileImage: uri,
    };
    mutation.mutateAsync(data);
  };

  return (
    <View className='flex-1 items-center justify-between bg-white p-24'>
      <View className='flex items-center w-full'>
        <ProfileSelector uri={uri} setUri={setUri} />
        <TitledInput type='nickname' setInput={setNickname} />
        <View className='flex items-start w-full'>
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
        <TouchableOpacity
          className='w-full h-170 mt-14 border border-dashed border-gray-300 rounded-10'
          onPress={() => SheetManager.show('certificate-image-sheet', {
            payload: {
              ref: imageActionSheetRef,
              setUri: setCertificateImage,
            },
          })}
        >
          {certificateImage
            ? <Image source={{ uri: certificateImage }} className='w-full h-full rounded-10' /> 
            : <View className='flex justify-center items-center my-44'>
              <Image source={icons.plus} tintColor={tokens.gray_300} className='w-38 h-38 mb-12' />
              <Text className={`${tokens.rg_16} color-gray-400`}>
                자격증 사진을 첨부하고 인증 받아보세요
              </Text>
            </View>
          }
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className={`w-full py-16 mb-16 ${disabled ? 'bg-gray-300' : 'bg-primary'} rounded-10 flex justify-center items-center`}
        disabled={disabled}
        onPress={handleSubmit}
      >
        <Text className={`${tokens.bd_16} color-white`}>입력 완료</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserInfo;