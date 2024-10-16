import { View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useState, useLayoutEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { router, useNavigation } from 'expo-router';
import { getMyProfile, editMyProfile } from '../../api/user/profile';
import { getMyIntroduction } from '../../api/user/introduction';
import { getMyEquipment } from '../../api/user/equipment';
import pickImage from '../../utils/pickImage';
import { TitledInput, HeightWeightInput } from '../../components/ProfileEdit/CustomInputs';
import PublicitySwitches from '../../components/ProfileEdit/PublicitySwitches';
import TopRightSubmitBtn from '../../components/common/TopRightSubmitBtn';
import { images } from '../../constants';
import showToast from '../../utils/toast';

export default function ProfileEdit() {
  const navigation = useNavigation();

  // Profile, Introduction, Equipment를 가져오는 쿼리
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

  // Profile 수정을 위한 mutation
  const muation = useMutation({
    mutationFn: editMyProfile,
    onSuccess: () => {
      showToast('success', '프로필 수정이 완료되었습니다.');
      router.push('profile');
    },
    onError: () => {
      showToast('error', '프로필 수정에 실패했습니다.');
    },
  });

  const [profileEditData, setProfileEditData] = useState({
    userId: data?.profile.data.userId ?? 0,
    name: data?.profile.data.name ?? '',
    profileImageUrl: data?.profile.data.profileImageUrl ?? '',
    nickname: data?.profile.data.nickname ?? '',
    isLogbookOpen: data?.profile.data.isLogbookOpen ?? false,
    isEquipmentOpen: data?.profile.data.isEquipmentOpen ?? false,
    introduction: data?.introduction.data.introduction ?? '',
    affiliation: data?.introduction.data.affiliation ?? '',
    link: data?.introduction.data.link ?? '',
    height: data?.equipment.data.height ?? '',
    weight: data?.equipment.data.weight ?? '',
  });

  const profileDisplayUrl = profileEditData.profileImageUrl ?
    { uri: profileEditData.profileImageUrl } : images.profileEdit;

  const handleSubmit = async () => {
    await muation.mutateAsync(profileEditData);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TopRightSubmitBtn handleSubmit={handleSubmit} />
      ),
    });
  }, [navigation, handleSubmit]);

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
                setInput={(value) => setProfileEditData({ ...profileEditData, name: value })}
              />
            </View>
            <TouchableOpacity
              onPress={() => pickImage((uri) => setProfileEditData({ ...profileEditData, profileImageUrl: uri }))}
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
            setInput={(value) => setProfileEditData({ ...profileEditData, nickname: value })}
          />
          <TitledInput
            title='소개'
            placeholder='자기소개를 입력해주세요'
            input={data?.introduction.data.introduction ?? ''}
            setInput={(value) => setProfileEditData({ ...profileEditData, introduction: value })}
          />
          <TitledInput
            title='소속'
            placeholder='소속을 입력해주세요'
            input={data?.introduction.data.affiliation ?? ''}
            setInput={(value) => setProfileEditData({ ...profileEditData, affiliation: value })}
          />
          <TitledInput
            title='링크'
            placeholder='링크를 추가해주세요'
            input={data?.introduction.data.link ?? ''}
            setInput={(value) => setProfileEditData({ ...profileEditData, link: value })}
          />
          <PublicitySwitches
            isLogBookPublic={profileEditData.isLogbookOpen}
            isEquipmentPublic={profileEditData.isEquipmentOpen}
            setIsLogBookPublic={(value) => setProfileEditData({ ...profileEditData, isLogbookOpen: value })}
            setIsEquipmentPublic={(value) => setProfileEditData({ ...profileEditData, isEquipmentOpen: value })}
          />
          <HeightWeightInput
            height={profileEditData.height}
            setHeight={(value) => setProfileEditData({ ...profileEditData, height: value })}
            weight={profileEditData.weight}
            setWeight={(value) => setProfileEditData({ ...profileEditData, weight: value })}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}