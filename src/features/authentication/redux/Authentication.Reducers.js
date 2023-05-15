import {authenticationTypes} from '.';

const initState = {
  userToken: null,
};

export const authenticationreducers = (state = initState, action) => {
  switch (action.type) {
    case authenticationTypes.SET_AUTHENTICATION:
      return {...state, ...action.payload};
    case authenticationTypes.SET_DEFAULT_AUTHENTICATION:
      return initState;
    default:
      return state;
  }
};
