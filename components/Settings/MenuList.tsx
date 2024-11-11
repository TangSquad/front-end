import { Text, SectionList, Image, TouchableOpacity, Switch } from 'react-native';
import { settingsMenuList } from 'data';
import { tokens, icons } from 'constants/';

export default function MenuList() {
  const isDisabled = (item: string) => item === '알림 허용';

  const renderSideComponent = (item: string) => {
    switch (item) {
    case '알림 허용': return <Switch />;
    case '로그아웃':
    case '회원탈퇴':
      return null;
    default: return <Image source={icons.arrowRight} />;
    }
  };

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
        >
          <Text className={`${tokens.rg_14} color-gray-800`}>{item}</Text>
          {renderSideComponent(item)}
        </TouchableOpacity>
      )}
    >
    </SectionList>
  );
}