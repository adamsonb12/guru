import data from './data/rooms.json';
import {
  ROOM_TOGGLE,
  TASK_TOGGLE
} from '../actions/Types';

const INITIAL_STATE = {
  baseRooms: data.rooms,
  selectedRooms: [],
  price: 0
}

function containsObject(obj, list) {
  for (let i = 0; i < list.length; i++) {
      if (list[i] === obj) {
          return true;
      }
  }
  return false;
}

function findIndex(obj, list) {
  for(let i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return i;
    }
  }
  return;
}

function calcPrice(alist) {
  let p = 0;
  if(alist.length > 0) {
    alist.forEach((room) => {
      room.roomTasks.forEach((task) => {
        if(task.active) {
          p = p + task.taskPrice;
        }
      });
    });
  }
  return p;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM_TOGGLE:
      if( containsObject(action.payload, state.selectedRooms) ) {
        state.selectedRooms.splice(findIndex(action.payload, state.selectedRooms), 1);
      }
      else {
        state.selectedRooms.push(action.payload);
      }
      return {...state, price: calcPrice(state.selectedRooms) };
    default:
      return state;
  }
};
