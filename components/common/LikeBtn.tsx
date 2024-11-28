import { Image, TouchableOpacity } from 'react-native';
import { icons } from 'constants/';

interface LikeBtnProps {
  liked: boolean;
  handlePress: () => void;
}

export default function LikeBtn({ liked, handlePress }: LikeBtnProps) {
  const src = liked ? icons.fullHeart : icons.emptyHeart;

  return(
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Image
        source={src}
        className='w-24 h-24'
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
}