import ToastGlobal from 'react-native-toast-message';

const Toast = (type, text1, text2) =>
  ToastGlobal.show({
    type,
    text1,
    text2,
  });

export default Toast;
