import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './RootReducers';

// const rootReducer = {user: {userToken: ''}};

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['authentication'],
  // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware)),
);
