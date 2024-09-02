import * as ImagePicker from 'expo-image-picker';

type SetUri = (uri: string | null) => void;

const pickImage = async (setUri: SetUri) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    // No permissions request is necessary for launching the image library
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });  
  if (!result.canceled) {
    setUri(result.assets[0].uri);
  }
};

export default pickImage;