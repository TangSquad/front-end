import { View, Text } from 'react-native';

interface TagBoxProps {
  content: string;
}

function TagBox({ content }: TagBoxProps) {
  return (
    <View className='flex justify-center h-16 mr-5 px-5 bg-primary-100 rounded-20'>
      <Text
        className='font-md tracking-md text-xxxsm color-primary'
      >
        {content}
      </Text>
    </View>
  );
}

export default TagBox;