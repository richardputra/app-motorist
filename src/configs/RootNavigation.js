import * as React from 'react';
import Toast from 'react-native-toast-message';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {enableScreens} from 'react-native-screens';
import {Appearance, useColorScheme} from 'react-native';
import configStore from '../state_management';
import {NavigationHelper} from '../helper';
import Constants from '../resources/constants/Constans';

import Authentication from '../features/authentication/navigation';
import Dashboard from '../features/dashboard/navigation';

enableScreens(true);
const Stack = createNativeStackNavigator();
const {store} = configStore();

function RootStackScreens() {
  console.log(Authentication === 'Authentication.SplashScreen');
  return (
    <Stack.Navigator
      initialRouteName={getInitialRoute()}
      screenOptions={{
        animation:
          Authentication === 'Authentication.SplashScreen'
            ? 'fade'
            : 'slide_from_right',
        orientation: 'portrait',
      }}>
      {Object.entries({
        ...Authentication,
        ...Dashboard,
      }).map(([name, component], id) => (
        <Stack.Screen
          key={id}
          name={name}
          component={component.screen}
          options={component.options}
        />
      ))}
    </Stack.Navigator>
  );
}

const RootNavigation = () => {
  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();
  const scheme = useColorScheme();
  const [theme, setTheme] = React.useState(Constants.PMDefaultTheme);
  const onColorSchemeChange = preferences => {
    setTheme(Constants.PMDefaultTheme);
  };
  React.useEffect(() => {
    Appearance.addChangeListener(onColorSchemeChange);
    return () => {
      Appearance.addChangeListener(onColorSchemeChange).remove();
    };
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer
        theme={theme}
        ref={navigationRef}
        onReady={() => {
          NavigationHelper.setContainer(navigationRef);
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={state =>
          onStateChange(state, navigationRef, routeNameRef)
        }>
        <RootStackScreens />
      </NavigationContainer>
      <Toast />
    </PaperProvider>
  );
};

function onStateChange(state, navigationRef, routeNameRef) {
  const currentRouteName = navigationRef.current.getCurrentRoute().name;

  routeNameRef.current = currentRouteName;
}

function getInitialRoute() {
  const {authentication} = store.getState();
  return authentication.userToken ? 'TabMenu' : 'Authentication.SplashScreen';
}

export default RootNavigation;
