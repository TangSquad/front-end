import { TouchableOpacity, Image } from 'react-native';
import pickImage from '../../utils/pickImage';
import { images } from '../../constants';

interface ProfileSelectorProps {
    uri: string;
    setUri: (image: string) => void;
  }

function ProfileSelector({ uri, setUri }: ProfileSelectorProps) {
  const handlePress = () => {
    pickImage(setUri);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <Image
        source={uri ? { uri: uri } : images.profileDefault}
        className='w-100 h-100 rounded-full'
      />
    </TouchableOpacity>
  );
}

export default ProfileSelector;