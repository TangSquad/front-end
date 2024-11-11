import AsyncStorage from "@react-native-async-storage/async-storage"

const resetToken = () => {
  AsyncStorage.removeItem('accessToken');
  AsyncStorage.removeItem('refreshToken');
};

export { resetToken };