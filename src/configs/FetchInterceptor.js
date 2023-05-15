import axios from 'axios';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';
import configStore from '../state_management';
import {NavigationHelper} from '../helper';

const {store} = configStore();

const FetchInterceptor = axios.create({
  baseURL: Config.BASE_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Request interceptor
FetchInterceptor.interceptors.request.use(
  config => {
    const {method, url} = config;
    console.log(`Request${method.toUpperCase()}${url}:`, config.data);
    const {userToken} = store.getState().authentication;
    if (userToken) {
      config.headers.Authorization = `${userToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// API respone interceptor
FetchInterceptor.interceptors.response.use(
  response => {
    const {method, url} = response.config;
    return response.data;
  },
  error => {
    const {method, url} = error.config;
    console.log(
      `Response Error ${method.toUpperCase()} ${url}: `,
      error.response,
    );
    if (error.response && error.response.status) {
      const {status} = error.response;
      if (status === 401) {
        NavigationHelper.navigate('Authentication.LoginScreen');
        Toast.show({
          type: 'error',
          text1: 'Mohon Maaf, Session Anda sudah berakhir',
          text2: 'Silahkan Login kembali.',
        });
      }
      // if (status === 500) {
      //   Toast.show({
      //     type: 'error',
      //     text1: 'Mohon Maaf, Internal Server Error',
      //     text2: 'Internal Server Error.',
      //   });
      // }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Mohon Maaf, Koneksi Terputus',
        text2: 'Silahkan Periksa kembali jaringan Anda.',
      });
    }
    return Promise.reject(error);
  },
);

export default FetchInterceptor;
