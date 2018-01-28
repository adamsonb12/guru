import data from './data/rooms.json';
import {
  ROOM_TOGGLE,
  TASK_TOGGLE,
  GET_DEFAULT_ROOMS
} from '../actions/Types';

const INITIAL_STATE = {
  rooms: data.rooms
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DEFAULT_ROOMS:
      return { rooms };
    default:
      return state;
  }
};
