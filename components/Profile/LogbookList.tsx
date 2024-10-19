import { FlatList } from 'react-native';
import LogbookItem from './Logookitem';

const mockData = [
  {
    id: '1',
    title: '서울과기대 스쿠버다이빙 동아리', 
    date: "2024-10-04T09:32:07.729Z",
    location: '서울어쩌구',
    liked: 1,
    imageUrl: 'https://dummyimage.com/300x200/c96/000',
  },
  {
    id: '2',
    title: '건국대 스쿠버다이빙 동아리',
    date: "2024-10-04T09:32:07.729Z",
    location: '서울어쩌구',
    liked: 10,
    imageUrl: 'https://dummyimage.com/300x200/c96/000',
  },
  {
    id: '3',
    title: '건국대 스쿠버다이빙 동아리',
    date: "2024-10-04T09:32:07.729Z",
    location: '서울어쩌구',
    liked: 100,
    imageUrl: 'https://dummyimage.com/300x200/c96/000',
  },
  {
    id: '4',
    title: '건국대 스쿠버다이빙 동아리',
    date: "2024-10-04T09:32:07.729Z",
    location: '서울어쩌구',
    liked: 1000,
    imageUrl: 'https://dummyimage.com/300x200/c96/000',
  },
  {
    id: '5',
    title: '건국대 스쿠버다이빙 동아리',
    date: "2024-10-04T09:32:07.729Z",
    location: '서울어쩌구',
    liked: 10000,
    imageUrl: 'https://dummyimage.com/300x200/c96/000',
  },
  {
    id: '6',
    title: '건국대 스쿠버다이빙 동아리',
    date: "2024-10-04T09:32:07.729Z",
    location: '서울어쩌구',
    liked: 10000,
    imageUrl: 'https://dummyimage.com/300x200/c96/000',
  },
];

export default function LogbookList() {
  return (
    <FlatList
      data={mockData}
      keyExtractor={(item) => item.id}
      className='px-12 bg-white'
      renderItem={({ item }) => (
        <LogbookItem
          id={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          liked={item.liked}
          imageUrl={item.imageUrl}
        />
      )}
    />
  );
}