import { View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../../api/user/profile';
import { getMyIntroduction } from '../../api/user/introduction';
import { getMyEquipment } from '../../api/user/equipment';
import pickImage from '../../utils/pickImage';
import { TitledInput, HeightWeightInput } from '../../components/ProfileEdit/CustomInputs';
import PublicitySwitches from '../../components/ProfileEdit/PublicitySwitches';
import { images } from '../../constants';

export default function Settings() {
  const [name, setName] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [nickname, setNickname] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [link, setLink] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

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

  const [isLogBookPublic, setIsLogBookPublic] = useState(data?.profile.data.isLogbookOpen ?? false);
  const [isEquipmentPublic, setIsEquipmentPublic] = useState(data?.profile.data.isEquipmentOpen ?? false);

  // 사용자가 선택한 프로필 이미지가 있으면 그 이미지를, 없으면 서버에서 받아온 이미지 확인 후 있으면 그 이미지를, 둘 다 없으면 기본 이미지를 사용
  const profileDisplayUrl = profileImageUrl ?
    { uri: profileImageUrl } : data?.profile.data.profileImageUrl ?
      { uri: data.profile.data.profileImageUrl } :
      images.profileEdit;

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
            <TouchableOpacity
              onPress={() => pickImage(setProfileImageUrl)}
            >
              <Image
                source={profileDisplayUrl}
                className='w-70 h-70 ml-12 mr-4 rounded-full'
              />
            </TouchableOpacity>
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
            placeholder='소속을 입력해주세요'
            input={data?.introduction.data.affiliation ?? ''}
            setInput={setAffiliation}
          />
          <TitledInput
            title='링크'
            placeholder='링크를 추가해주세요'
            input={data?.introduction.data.link ?? ''}
            setInput={setLink}
          />
          <PublicitySwitches
            isLogBookPublic={isLogBookPublic}
            isEquipmentPublic={isEquipmentPublic}
            setIsLogBookPublic={setIsLogBookPublic}
            setIsEquipmentPublic={setIsEquipmentPublic}
          />
          <HeightWeightInput
            height={data?.equipment.data.height ? `${data?.equipment.data.height}` : ''}
            setHeight={setHeight}
            weight={data?.equipment.data.weight ? `${data?.equipment.data.weight}` : ''}
            setWeight={setWeight}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}