import {persistStore} from 'redux-persist';
import store from './Store';

export default () => {
  const persistor = persistStore(store);
  return {store, persistor};
};
