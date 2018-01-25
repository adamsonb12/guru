import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RoomsReducer from './RoomsReducer';

export default combineReducers({
  auth: AuthReducer,
  rooms: RoomsReducer
});
