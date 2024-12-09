import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { router, useGlobalSearchParams } from 'expo-router';
import { SearchBar } from '@rneui/themed';
import { tokens } from 'constants/';

export default function SearchBarSection() {
  const { query } = useGlobalSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSearchQuery(Array.isArray(query) ? query[0] : query || '');
  }, [query]);

  const handleChange = (input: string) => {
    setSearchQuery(input);
    router.replace({ pathname: '/search', params: { query: input.toLowerCase() } });
  };

  return (
    <View className='py-10 px-24 bg-white rounded-t-30'>
      <SearchBar
        placeholder='검색어를 입력하세요'
        placeholderTextColor={tokens.gray_400}
        value={searchQuery}
        onChangeText={(value) => handleChange(value)}
        onClear={() => handleChange('')}
        round={true}
        showCancel={true}
        containerStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0, padding: 0 }}
        inputContainerStyle={{ backgroundColor: tokens.gray_100, borderRadius: 30 }}
        inputStyle={{ color: tokens.gray_800, fontFamily: 'SpoqaHanSansNeo', fontWeight: 'regular', fontSize: 16 }}
      />
    </View>
  );
}