import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error';

const showToast = (type: ToastType, text1: string) => {
  Toast.show({
    type,
    text1,
    position: 'bottom',
    bottomOffset: 100,
  });
};

export default showToast;
