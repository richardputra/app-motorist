import {Colors, FontSize} from '../../resources/constants/fonts';
import {
  SplashScreen,
  OnboardingScreen,
  LoginPhoneScreen,
  LoginPinScreen,
  ResetPinScreen,
} from './screens';

export default {
  'Authentication.SplashScreen': {
    screen: SplashScreen,
    options: {
      headerShown: false,
      title: 'SplashScreen',
    },
  },
  'Authentication.OnboardingScreen': {
    screen: OnboardingScreen,
    options: {
      headerShown: false,
      title: 'Onboarding',
    },
  },

  'Authentication.LoginPhoneScreen': {
    screen: LoginPhoneScreen,
    options: {
      title: '',
      headerTintColor: Colors.primary,
      headerShadowVisible: false,
      headerTitleStyle: {
        ...FontSize.h2Blk,
        color: Colors.black,
      },
    },
  },

  'Authentication.LoginPinScreen': {
    screen: LoginPinScreen,
    options: {
      title: '',
      headerTintColor: Colors.primary,
      headerShadowVisible: false,
      headerTitleStyle: {
        ...FontSize.h2Blk,
        color: Colors.black,
      },
    },
  },

  'Authentication.ResetPinScreen': {
    screen: ResetPinScreen,
    options: {
      title: '',
      headerTintColor: Colors.primary,
      headerShadowVisible: false,
      headerTitleStyle: {
        ...FontSize.h2Blk,
        color: Colors.black,
      },
    },
  },
};
