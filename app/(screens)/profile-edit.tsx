import { View, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../../api/user/profile';
import { getMyIntroduction } from '../../api/user/introduction';
import { getMyEquipment } from '../../api/user/equipment';
import { TitledInput } from '../../components/ProfileEdit/CustomInputs';

export default function Settings() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [link, setLink] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['profileAndIntroductionAndEquipment'],
    queryFn: async () => {
      const [profile, introduction, equipment] = await Promise.all([
        getMyProfile(),
        getMyIntroduction(),
        getMyEquipment(),
      ]);
  
      return { profile, introduction, equipment };
    },
  });

  if (isLoading) return <View />;
  if (error) return <View />;

  return (
    <KeyboardAvoidingView className='flex-1'>
      <View className='flex-1 bg-gray-50 p-20'>
        <View className='flex p-20 bg-white rounded-10 border-[0.7] border-color-gray-300'>
          <View className='flex-row'>
            <View className='flex-1'>
              <TitledInput
                title='이름'
                placeholder='이름을 입력해주세요'
                input={data?.profile.data.name ?? ''}
                setInput={setName}
              />
            </View>
          </View>
          <TitledInput
            title='닉네임'
            placeholder='닉네임을 입력해주세요'
            input={data?.profile.data.nickname ?? ''}
            setInput={setNickname}
          />
          <TitledInput
            title='소개'
            placeholder='자기소개를 입력해주세요'
            input={data?.introduction.data.introduction ?? ''}
            setInput={setIntroduction}
          />
          <TitledInput
            title='소속'
            placeholder='키를 입력해주세요'
            input={data?.introduction.data.affiliation ?? ''}
            setInput={setAffiliation}
          />
          <TitledInput
            title='링크'
            placeholder='링크를 추가해주세요'
            input={data?.introduction.data.link ?? ''}
            setInput={setLink}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}