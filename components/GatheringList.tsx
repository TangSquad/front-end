import { View, Text, Image, FlatList } from 'react-native';
import TagBox from './styles/TagBox';
import { tokens, images } from 'constants/';

const mockData = [
  {
    id: '1',
    title: '서울과기대 스쿠버다이빙 동아리', 
    description: '서울과기대 스쿠버다이빙 동아리입니다.',
    src: 'https://images.unsplash.com/photo-1499390155271-23e4667060f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    level: ['전체'],
    date: '2024.03~04',
    type: ['동아리'],
    members: ['user1', 'user2', 'user3'],
    age: ['20대'],
    tags: ['스쿠버다이빙', '호기심이 많은'],
  },
  {
    id: '2',
    title: '건국대 스쿠버다이빙 동아리',
    description: '건국대 스쿠버다이빙 동아리입니다.',
    src: null,
    level: ['오픈워터','어드밴스'],
    date: '2024.03~04',
    type: ['스쿼드'],
    members: ['user1', 'user2', 'user3'],
    age: ['20대', '30대', '40대'],
    tags: ['편안한', '열정적인'],
  },
  {
    id: '3',
    title: '건국대 스쿠버다이빙 동아리',
    description: '건국대 스쿠버다이빙 동아리입니다.',
    src: null,
    level: ['오픈워터','어드밴스'],
    date: '2024.03~04',
    type: ['스쿼드'],
    members: ['user1', 'user2', 'user3'],
    age: ['20대', '30대', '40대'],
    tags: ['편안한', '열정적인'],
  },
  {
    id: '4',
    title: '건국대 스쿠버다이빙 동아리',
    description: '건국대 스쿠버다이빙 동아리입니다.',
    src: null,
    level: ['오픈워터','어드밴스'],
    date: '2024.03~04',
    type: ['스쿼드'],
    members: ['user1', 'user2', 'user3'],
    age: ['20대', '30대', '40대'],
    tags: ['편안한', '열정적인'],
  },
  {
    id: '5',
    title: '건국대 스쿠버다이빙 동아리',
    description: '건국대 스쿠버다이빙 동아리입니다.',
    src: null,
    level: ['오픈워터','어드밴스'],
    date: '2024.03~04',
    type: ['스쿼드'],
    members: ['user1', 'user2', 'user3'],
    age: ['20대', '30대', '40대'],
    tags: ['편안한', '열정적인'],
  },
];

const GatheringList = () => {
  return (
    <FlatList
      data={mockData}
      keyExtractor={(item) => item.id}
      className='h-full'
      renderItem={({ item, index }) => (
        <View key={index} className='flex-row items-center gap-x-14 px-24 py-16'>
          <Image source={item.src ? { uri: item.src } : images.defaultImage} className='w-70 h-70 rounded-10' />
          <View className='flex-1'>
            <View className='flex-row justify-between'>
              <View className='flex-row'>
                <TagBox content={item.age.join('·')}/>
                <TagBox content={item.tags.join('·')}/>
              </View>
              <View className='flex items-center justify-center h-18 bg-white px-9 border border-primary rounded-20'>
                <Text className={`font-md tracking-md text-xxxsm color-primary `}>{item.type}</Text>
              </View>
            </View>
            <Text className={`${tokens.bd_16} color-gray-800`}>{item.title}</Text>
            <Text className={`${tokens.md_12} color-gray-600`}>{item.description}</Text>
            <View className='flex-row gap-x-14'>
              <Text className={`${tokens.md_12} color-gray-500`}>
                자격{' '}<Text className={`${tokens.rg_12} color-gray-500`}>{item.level.join(', ').length > 5 ? item.level.join(', ').slice(0,5)+' ...' : item.level.join(', ') }</Text>
              </Text>
              <Text className={`${tokens.md_12} color-gray-500`}>
                일정{' '}<Text className={`${tokens.rg_12} color-gray-500`}>{item.date}</Text>
              </Text>
              <Text className={`${tokens.md_12} color-gray-500`}>
                멤버{' '}<Text className={`${tokens.rg_12} color-gray-500`}>{item.members.length}명</Text>
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default GatheringList;