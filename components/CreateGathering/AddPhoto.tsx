import { TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { images } from '../../constants';

interface AddPhotoProps {
  uri: string | null;
  setUri: (image: string | null) => void;
}

function AddPhoto({ uri, setUri }: AddPhotoProps) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Image source={uri ? { uri: uri } : images.addPhoto} className='w-full h-300' />
    </TouchableOpacity>
  );
}

export default AddPhoto;