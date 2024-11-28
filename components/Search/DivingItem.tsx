import { View, Text, Image, TouchableOpacity } from 'react-native';
import TagBox from './styles/TagBox';
import { router } from 'expo-router';
import { DivingType } from 'api/diving/diving';
import { tokens, images, icons } from 'constants/';

const mockData = {
  divingId: 1,
  userId: 0,
  divingName: '서울과기대 스쿠버다이빙 동아리', 
  divingIntro: '서울과기대 스쿠버다이빙 동아리입니다.',
  level: ['전체'],
  startDate: '2024-03-28',
  endDate: '2024-04-01',
  location: '서울',
  limitPeople: 10,
  limitLicense: '전체',
  age: '20대',
  moodOne: '스쿠버다이빙',
  moodTwo: '호기심이 많은',
  src: '', // temporary
};

interface DivingItemProps {
  item: DivingType;
  index: number;
}

export default function DivingItem({ item, index }: DivingItemProps) {
  const handlePress = (id: number) => {
    router.push(`diving/${id}`);
  };

  return (
    <TouchableOpacity
      key={index}
      className='flex-row items-center gap-x-14 px-24 py-16'
      onPress={() => handlePress(item.divingId)}
    >
      <Image source={mockData.src ? { uri: mockData.src } : images.defaultImage} className='w-70 h-70 rounded-10' />
      <View className='flex-1'>
        <View className='flex-row justify-between'>
          <View className='flex-row'>
            <TagBox content={mockData.age}/>
            <TagBox content={`${mockData.moodOne}·${mockData.moodTwo}`}/>
          </View>
          <Text className={`flex-row ${tokens.md_12} color-gray-500`}>
            <Image source={icons.member} className='mr-4' />
            <Text className={`${tokens.rg_12} color-gray-500`}>2/{item.limitPeople}</Text>
          </Text>
        </View>
        <Text className={`${tokens.bd_16} color-gray-800`}>{item.divingName}</Text>
        <Text className={`${tokens.md_12} color-gray-600`}>{item.divingIntro}</Text>
        <View className='flex-row gap-x-12'>
          <View className='flex items-center justify-center bg-gray-100 px-7 rounded-10'>
            <Text className={`${tokens.md_12} color-primary`}>{mockData.location}</Text>
          </View>
          <Text className={`${tokens.md_12} color-gray-500`}>
            자격{' '}<Text className={`${tokens.rg_12} color-gray-500`}>{item.limitLicense.length > 5 ? item.limitLicense.slice(0,5)+' ...' : item.limitLicense }</Text>
          </Text>
          <Text className={`${tokens.md_12} color-gray-500`}>
            일정{' '}<Text className={`${tokens.rg_12} color-gray-500`}>{item.startDate} ~ {item.endDate}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}