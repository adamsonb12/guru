import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DefaultRoomsReducer from './DefaultRoomsReducer';
import AppointmentSchedulingReducer from './AppointmentSchedulingReducer';

export default combineReducers({
  auth: AuthReducer,
  defaultRooms: DefaultRoomsReducer,
  appointment: AppointmentSchedulingReducer
});
