// No permissions request is necessary for launching the image library
import * as ImagePicker from 'expo-image-picker';

interface PickImageProps {
  setUri: (uri: string) => void;
}

const pickImage = async ({ setUri }: PickImageProps) => {
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

interface PickMultipleImagesProps {
  setUris: (uris: string[]) => void;
  limit: number;
}

const pickMultipleImages = async ({ setUris, limit }: PickMultipleImagesProps) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    aspect: [4, 3],
    quality: 1,
    allowsMultipleSelection: true,
    selectionLimit: limit,
  });

  if (!result.canceled) {
    setUris(result.assets.map((asset) => asset.uri));
  }
};

export {
  pickImage,
  pickMultipleImages,
};