import { Text, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMyIntroduction } from '../../api/user/introduction';
import { tokens } from '../../constants';

const SubTitle = ({ title }: { title: string }) => {
  return (
    <Text className={`${tokens.md_16} color-black`}>{title}</Text>
  );
};

export default function Introduction() {
  const { data, error } = useQuery({
    queryKey: ['introduction'],
    queryFn: getMyIntroduction,
  });

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView className='bg-white'>
      <Text>{data?.data.introduction}</Text>
      <SubTitle title='자격증' />
      <Text>{data?.data.link}</Text>
      <SubTitle title='링크' />
      <Text>{data?.data.link}</Text>
      <SubTitle title='소속' />
      <Text>{data?.data.affiliation}</Text>
      <SubTitle title='이전 다이빙' />
    </ScrollView>
  );
};