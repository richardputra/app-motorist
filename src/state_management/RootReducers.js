import {combineReducers} from 'redux';
import {authenticationreducers} from '../features/authentication/redux';

const rootReducer = combineReducers({
  authentication: authenticationreducers,
});

export default rootReducer;
