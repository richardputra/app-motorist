import {authenticationTypes} from '.';

export const setAuthentication = payload => ({
  type: authenticationTypes.SET_AUTHENTICATION,
  payload,
});

export const setDefaultAuthentication = () => ({
  type: authenticationTypes.SET_DEFAULT_AUTHENTICATION,
});
