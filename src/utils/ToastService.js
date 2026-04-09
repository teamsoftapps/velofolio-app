import Toast from 'react-native-toast-message';

export const ToastService = {
  success: (text1, text2 = '') => {
    Toast.show({
      type: 'customToast',
      text1,
      text2,
      props: { status: 'success' },
    });
  },
  error: (text1, text2 = '') => {
    Toast.show({
      type: 'customToast',
      text1,
      text2,
      props: { status: 'error' },
    });
  },
  info: (text1, text2 = '') => {
    Toast.show({
      type: 'customToast',
      text1,
      text2,
      props: { status: 'info' },
    });
  },
  show: (params) => {
    Toast.show({
      type: 'customToast',
      ...params,
    });
  },
};

export default ToastService;
