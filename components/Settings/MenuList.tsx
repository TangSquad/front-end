import { Text, SectionList, Image, TouchableOpacity, Switch, Alert } from 'react-native';
import { router } from 'expo-router';
import { deleteAccount } from 'api/auth/delete-acct';
import { resetToken } from 'utils/tokenHandler';
import showToast from 'utils/toast';
import { settingsMenuList } from 'data';
import { tokens, icons } from 'constants/';

export default function MenuList() {
  const isDisabled = (item: string) => item === '알림 허용';

  const handleLogout = () => {
    resetToken();
    router.replace('/sign-in');
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
      resetToken();
      router.replace('/sign-in');
    } catch (error) {
      showToast('error', '회원탈퇴에 실패했습니다.');
    }
  };

  const showAcctDeleteAlert = () => {
    Alert.alert('회원탈퇴', '정말 탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.', [
      {
        text: '취소',
      },
      {
        text: '확인',
        onPress: () => handleDeleteAccount(),
      },
    ]);
  };

  const handlePress = (item: string) => {
    switch (item) {
    case '로그아웃':
      handleLogout();
      break;
    case '회원탈퇴':
      showAcctDeleteAlert();
      break;
    default:
      break;
    }
  };

  const renderSideComponent = (item: string) => {
    switch (item) {
    case '알림 허용': return <Switch />;
    case '로그아웃':
    case '회원탈퇴':
      return null;
    default: return <Image source={icons.arrowRight} />;
    }
  };

  const isDeleteAccount = (item: string) => item === '회원탈퇴';

  return (
    <SectionList
      sections={settingsMenuList}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text className={`${tokens.bd_16} color-primary mt-20`}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          className='flex-row justify-between items-center py-8'
          activeOpacity={0.8}
          disabled={isDisabled(item)}
          onPress={() => handlePress(item)}
        >
          <Text className={`${tokens.rg_14} ${isDeleteAccount(item) ? 'color-[#ff0000]': 'color-gray-800'}`}>
            {item}
          </Text>
          {renderSideComponent(item)}
        </TouchableOpacity>
      )}
    >
    </SectionList>
  );
}