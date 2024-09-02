import { TouchableOpacity, Image } from 'react-native';
import pickImage from '../../utils/pickImage';
import { images } from '../../constants';

interface AddPhotoProps {
  uri: string | null;
  setUri: (image: string | null) => void;
}

function AddPhoto({ uri, setUri }: AddPhotoProps) {
  const handlePress = () => {
    pickImage(setUri);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Image source={uri ? { uri: uri } : images.addPhoto} className='w-full h-300' />
    </TouchableOpacity>
  );
}

export default AddPhoto;