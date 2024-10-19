import { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

interface CustomCameraViewProps {
  setUri: (uri: string) => void;
  hideSheet: () => void;
}

export default function CustomCameraView({ setUri, hideSheet }: CustomCameraViewProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [isReady, setIsReady] = useState(false);
  const MyCameraViewRef = useRef<CameraView>(null);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, []);

  const handlePress = () => {
    if(!isReady) {
      Alert.alert('카메라가 준비중입니다.','카메라를 준비하는 중입니다.\n잠시 후 다시 시도해주세요.');
    } else {
      MyCameraViewRef.current?.takePictureAsync({}).then((picture) => {
        if (!picture?.uri) return;
  
        setUri(picture?.uri);
        hideSheet();
      }).catch((error) => {
        Alert.alert(`${error}`, '사진을 찍는 중 오류가 발생했습니다.');
      });
    }
  };

  return (
    <View className='flex justify-center items-center'>
      <CameraView
        ref={MyCameraViewRef}
        className='w-full h-200'
        onCameraReady={() => setIsReady(true)}
      >
      </CameraView>
      <TouchableOpacity
        className='h-50 w-50 bg-primary mt-16 rounded-50 mb-70'
        onPress={handlePress}
      />
    </View>
  );
}