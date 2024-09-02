import { TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { images } from '../../constants';

interface ProfileSelectorProps {
    uri: string | null;
    setUri: (image: string | null) => void;
  }

function ProfileSelector({ uri, setUri }: ProfileSelectorProps) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUri(result.assets[0].uri);
    }
  };
  
  const handlePress = () => {
    pickImage();
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