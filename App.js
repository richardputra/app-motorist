import React from 'react';
import {StatusBar, View} from 'react-native';
import configStore from './src/state_management';
import {Colors} from './src/resources/constants/fonts';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {RootNavigation} from './src/configs';

const {store, persistor} = configStore();

let App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
          <RootNavigation />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
